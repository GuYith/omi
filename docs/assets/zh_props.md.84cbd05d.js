import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.a9f6acec.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/props.md","filePath":"zh/props.md"}'),l={name:"zh/props.md"},o=p(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><p>通过 Props 向子组件传递数据，比如：</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Component, define, render } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;omi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">define</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-element&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Hello, {props.name}!&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Component, define, render } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;omi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-element&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;Hello, {props.name}!&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>使用元素:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">my-element</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;world&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">my-element</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">my-element</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;world&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#005CC5;">my-element</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>你也可以传任意类型的数据给 props:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">define</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-element&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Hello, {props.myObj.name}!&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-element&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;Hello, {props.myObj.name}!&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>使用元素:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">my-element</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myObj</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{{ name: </span><span style="color:#9ECBFF;">&#39;world&#39;</span><span style="color:#E1E4E8;"> }}&gt;&lt;/</span><span style="color:#79B8FF;">my-element</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">my-element</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myObj</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{{ name: </span><span style="color:#032F62;">&#39;world&#39;</span><span style="color:#24292E;"> }}&gt;&lt;/</span><span style="color:#005CC5;">my-element</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>你可以通过静态属性 <code>static defaultProps</code> 来设置默认值，使用 <code>static propTypes</code> 来设置类型:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">define</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-element&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">defaultProps</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		name: </span><span style="color:#9ECBFF;">&#39;Omi&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		myAge: </span><span style="color:#79B8FF;">18</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">propTypes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		name: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">		myAge: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 也支持多类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: [String, Array]</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Hello, {props.name}! Age {props.myAge}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-element&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#E36209;">defaultProps</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		name: </span><span style="color:#032F62;">&#39;Omi&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		myAge: </span><span style="color:#005CC5;">18</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#E36209;">propTypes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		name: String,</span></span>
<span class="line"><span style="color:#24292E;">		myAge: Number,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 也支持多类型</span></span>
<span class="line"><span style="color:#24292E;">    color: [String, Array]</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;Hello, {props.name}! Age {props.myAge}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>需要特别注意，如果你的自定义元素想要直接在其他框架或者无框架的情况下原生使用，请一定要加上 <code>static propTypes</code> 才能生效。比如，这样就可以直接在 body 中使用:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">my-element</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dntzhang&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">my-age</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;20&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">my-element</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">my-element</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dntzhang&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">my-age</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;20&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">my-element</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="高级技巧" tabindex="-1">高级技巧 <a class="header-anchor" href="#高级技巧" aria-label="Permalink to &quot;高级技巧&quot;">​</a></h3><p>这里介绍一次性使用 prop 的技巧:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">define</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-element&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">install</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.props.name</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Hello, {</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name}!&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">define</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-element&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">install</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.props.name</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;Hello, {</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name}!&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>下次父组件 update 并且修改了 props 也不会影响到该组件。</p>`,17),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const g=s(l,[["render",t]]);export{F as __pageData,g as default};
