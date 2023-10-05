import { h, tag, createRef, WeElement, OmiProps, classNames } from 'omi'
import { TdAvatarProps } from './type'
import css from './style/index'
import { StyledProps, commonClass } from '../common'
import AvatarContext from './avatar-context'
import AvatarGroup from './avatar-group'
import { TdClassNamePrefix } from '../utils'
// import Image, { ImageProps } from '../image';

export interface AvatarProps extends TdAvatarProps, StyledProps {}

@tag('t-avatar')
export default class Avatar extends WeElement<AvatarProps> {
  static css = css as string
  static defaultProps = { hideOnLoadFailed: false, shape: 'circle' }
  static propsType = {
    alt: String,
    hideOnLoadFailed: Boolean,
    icon: Object,
    image: String,
    shape: String,
    size: String,
    onError: Function,
    children: Object,
    content: Object,
    style: Object,
    imageProps: Object,
  }
  scale = 1
  gap = 4
  isImgExist = true
  //TODO: context
  groupSize = 'default'
  avatarRef = createRef()
  avatarChildrenRef = createRef()
  SIZE = commonClass['SIZE']

  componentName = TdClassNamePrefix('avatar')
  handleScale = () => {
    const { avatarChildrenRef, avatarRef, gap } = this
    if (!avatarChildrenRef.current || !avatarRef.current) {
      return
    }
    const avatar = avatarRef.current as HTMLElement
    const children = avatarChildrenRef.current as HTMLElement
    const avatarWidth = avatar.offsetWidth
    const childrenWidth = children.offsetWidth

    if (childrenWidth !== 0 && avatarWidth !== 0) {
      if (gap * 2 < avatarWidth) {
        this.scale = avatarWidth - gap * 2 < childrenWidth ? (avatarWidth - gap * 2) / childrenWidth : 1
      }
    }
  }

  //resizeObserver

  installed() {
    this.handleScale()
    this.update()
  }

  render(props: OmiProps<AvatarProps, any>, store: any) {
    const { SIZE, componentName, isImgExist, avatarRef, avatarChildrenRef, groupSize } = this
    const {
      alt,
      hideOnLoadFailed,
      icon,
      image,
      shape,
      size: avatarSize,
      onError,
      children,
      content,
      style,
      imageProps,
      class: className,
      ...avatarProps
    } = props
    const size = avatarSize === undefined ? groupSize : avatarSize

    const numSizeStyle =
      size && !SIZE[size]
        ? {
            width: size,
            height: size,
            fontSize: `${Number.parseInt(size, 10) / 2}px`,
          }
        : {}

    const imageStyle =
      size && !SIZE[size]
        ? {
            width: size,
            height: size,
          }
        : {}

    const avatarClass = classNames(componentName, this.className, {
      [SIZE[size]]: !!SIZE[size],
      [`${componentName}--${shape}`]: !!shape,
      [`${componentName}__icon`]: !!icon,
    })

    let renderChildren: string | number | boolean | object

    if (image && isImgExist) {
      renderChildren = <img src={image} alt={alt} style={imageStyle} />
    } else if (icon) {
      renderChildren = icon
    } else {
      const childrenStyle = {
        transform: `scale(${this.scale})`,
      }
      renderChildren = (
        <span ref={avatarChildrenRef} style={childrenStyle}>
          {children || content}
        </span>
      )
    }
    return (
      <div ref={avatarRef} class={avatarClass} style={{ ...numSizeStyle, ...style }} {...avatarProps}>
        {renderChildren}
      </div>
    )
  }
}
