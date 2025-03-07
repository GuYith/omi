import { Component } from './component'

type EffectFn = () => void;
type ComputedFn<T> = () => T;

let activeEffect: EffectFn | null = null
let batchQueue: EffectFn[] = []

interface Signal<T> {
  value: T;
  peek: () => T;
}
let activeComponent: Component | null = null

export function setActiveComponent(component: Component | null): void {
  activeComponent = component
}

export function getActiveComponent(): Component | null {
  return activeComponent
}

/**
 * Creates a signal with an initial value.
 * @param initialValue - The initial value of the signal.
 * @returns A signal object with `value` and `peek` properties.
 */
export function signal<T>(initialValue: T): Signal<T> {
  let value = initialValue
  const deps = new Set<EffectFn>()
  const depsComponents = new Set<Component>()

  return new Proxy({} as Signal<T>, {
    get(_, prop: keyof Signal<T>) {
      if (prop === 'value') {
        if (activeEffect) deps.add(activeEffect)
        const component = getActiveComponent()
        if (component) depsComponents.add(component)
        return value
      }
      if (prop === 'peek') return () => value
    },
    set(_, prop: keyof Signal<T>, newValue: T) {
      if (prop === 'value') {
        value = newValue
        deps.forEach(fn => fn())
        depsComponents.forEach(component => component.update())
        return true
      }
      return false
    }
  })
}

/**
 * Creates a computed signal based on a function.
 * @param fn - The function to compute the signal value.
 * @returns A computed signal object.
 */
export function computed<T>(fn: ComputedFn<T>): Signal<T> {
  const computedSignal = signal<T>(fn())
  effect(() => {
    computedSignal.value = fn()
  })
  return computedSignal
}

/**
 * Creates an effect based on a function.
 * @param fn - The function to create the effect.
 */
export function effect(fn: EffectFn): void {
  activeEffect = fn
  fn()
  activeEffect = null
}

/**
 * Batches multiple updates into a single update.
 * @param fn - The function to batch.
 */
export function batch(fn: EffectFn): void {
  batchQueue.push(fn)
  if (batchQueue.length === 1) {
    Promise.resolve().then(runBatch)
  }
}

/**
 * Runs all functions in the batch queue.
 */
export function runBatch(): void {
  while (batchQueue.length) {
    const fn = batchQueue.shift()
    if (fn) fn()
  }
}