<template><div><h1 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h1>
<h2 id="constructor-方法" tabindex="-1"><a class="header-anchor" href="#constructor-方法" aria-hidden="true">#</a> constructor() 方法</h2>
<p><code v-pre>constructor()</code>方法是类的默认方法，通过<code v-pre>new</code>命令生成对象实例时，自动调用该方法。一个类必须有<code v-pre>constructor()</code>方法，如果没有显式定义，一个空的<code v-pre>constructor()</code>方法会被默认添加。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>constructor()</code>方法默认返回实例对象（即<code v-pre>this</code>），完全可以指定返回另外一个对象。</p>
<h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h3>
<p>用于检测<a href="https://so.csdn.net/so/search?q=%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">构造函数<ExternalLinkIcon/></a>的 <code v-pre>prototype</code> 属性是否出现在某个实例对象的<a href="https://so.csdn.net/so/search?q=%E5%8E%9F%E5%9E%8B%E9%93%BE&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">原型链<ExternalLinkIcon/></a>上。</p>
<ul>
<li>
<p>语法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>object instanceof constructor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>object</code>：某个实例对象</li>
<li><code v-pre>constructor</code>：某个构造函数</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">Foo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>constructor()</code>函数返回一个全新的对象，结果导致实例对象不是<code v-pre>Foo</code>类的实例。</p>
<p>类必须使用<code v-pre>new</code>调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用<code v-pre>new</code>也可以执行。</p>
<h2 id="类的实例" tabindex="-1"><a class="header-anchor" href="#类的实例" aria-hidden="true">#</a> 类的实例</h2>
<p>类的属性和方法，除非显式定义在其本身（即定义在<code v-pre>this</code>对象上），否则都是定义在原型上（即定义在<code v-pre>class</code>上）。</p>
<p><strong>hasOwnProperty()方法用于检测一个对象是否含有特定的自身属性，返回一个布尔值</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'('</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">', '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

point<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// (2, 3)</span>

point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'y'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'toString'</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
point<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'toString'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>x</code>和<code v-pre>y</code>都是实例对象<code v-pre>point</code>自身的属性（因为定义在<code v-pre>this</code>对象上），所以<code v-pre>hasOwnProperty()</code>方法返回<code v-pre>true</code>，而<code v-pre>toString()</code>是原型对象的属性（因为定义在<code v-pre>Point</code>类上），所以<code v-pre>hasOwnProperty()</code>方法返回<code v-pre>false</code>。这些都与 ES5 的行为保持一致。</p>
<p>类的所有实例共享一个原型对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p1<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> p2<span class="token punctuation">.</span>__proto__
<span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>p1</code>和<code v-pre>p2</code>都是<code v-pre>Point</code>的实例，它们的原型都是<code v-pre>Point.prototype</code>，所以<code v-pre>__proto__</code>属性是相等的。</p>
<p>prototype和<code v-pre>__proto__</code></p>
<p>https://blog.csdn.net/weixin_60684791/article/details/121416611</p>
<p>这也意味着，可以通过实例的<code v-pre>__proto__</code>属性为“类”添加方法。</p>
<blockquote>
<p><code v-pre>__proto__</code> 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。生产环境中，我们可以使用 <code v-pre>Object.getPrototypeOf()</code> 方法来获取实例对象的原型，然后再来为原型添加方法/属性。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p1<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function-variable function">printName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">'Oops'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

p1<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// "Oops"</span>
p2<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// "Oops"</span>

<span class="token keyword">let</span> p3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p3<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// "Oops"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码在<code v-pre>p1</code>的原型上添加了一个<code v-pre>printName()</code>方法，由于<code v-pre>p1</code>的原型就是<code v-pre>p2</code>的原型，因此<code v-pre>p2</code>也可以调用这个方法。而且，此后新建的实例<code v-pre>p3</code>也可以调用这个方法。这意味着，使用实例的<code v-pre>__proto__</code>属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。</p>
<h2 id="实例属性的新写法" tabindex="-1"><a class="header-anchor" href="#实例属性的新写法" aria-hidden="true">#</a> 实例属性的新写法</h2>
<p>实例属性现在除了可以定义在<code v-pre>constructor()</code>方法里面的<code v-pre>this</code>上面，也可以定义在类内部的最顶层。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 原来的写法</span>
<span class="token keyword">class</span> <span class="token class-name">IncreasingCounter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Getting the current value!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，实例属性<code v-pre>_count</code>定义在<code v-pre>constructor()</code>方法里面的<code v-pre>this</code>上面。</p>
<p>现在的新写法是，这个属性也可以定义在类的最顶层，其他都不变。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">IncreasingCounter</span> <span class="token punctuation">{</span>
  _count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Getting the current value!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，实例属性<code v-pre>_count</code>与取值函数<code v-pre>value()</code>和<code v-pre>increment()</code>方法，处于同一个层级。这时，不需要在实例属性前面加上<code v-pre>this</code>。</p>
<p>注意，新写法定义的属性是实例对象自身的属性，而不是定义在实例对象的原型上面。</p>
<p>这种新写法的好处是，所有实例对象自身的属性都定义在类的头部，看上去比较整齐，一眼就能看出这个类有哪些实例属性。</p>
<h2 id="取值函数-getter-和存值函数-setter" tabindex="-1"><a class="header-anchor" href="#取值函数-getter-和存值函数-setter" aria-hidden="true">#</a> 取值函数（getter）和存值函数（setter）</h2>
<p>与 ES5 一样，在“类”的内部可以使用<code v-pre>get</code>和<code v-pre>set</code>关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">prop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'getter'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">prop</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'setter: '</span><span class="token operator">+</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

inst<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token comment">// setter: 123</span>

inst<span class="token punctuation">.</span>prop
<span class="token comment">// 'getter'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存值函数和取值函数是设置在属性的 Descriptor 对象上的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CustomHTMLElement</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> element<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>innerHTML<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">html</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> descriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>
  <span class="token class-name">CustomHTMLElement</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">"html"</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token string">"get"</span> <span class="token keyword">in</span> descriptor  <span class="token comment">// true</span>
<span class="token string">"set"</span> <span class="token keyword">in</span> descriptor  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，存值函数和取值函数是定义在<code v-pre>html</code>属性的描述对象上面，这与 ES5 完全一致。</p>
<h2 id="属性表达式" tabindex="-1"><a class="header-anchor" href="#属性表达式" aria-hidden="true">#</a> 属性表达式</h2>
<p>类的属性名，可以采用表达式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> methodName <span class="token operator">=</span> <span class="token string">'getArea'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>Square</code>类的方法名<code v-pre>getArea</code>，是从表达式得到的。</p>
<h2 id="class-表达式" tabindex="-1"><a class="header-anchor" href="#class-表达式" aria-hidden="true">#</a> Class 表达式</h2>
<p>与函数一样，类也可以使用表达式的形式定义。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyClass <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">Me</span> <span class="token punctuation">{</span>
  <span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Me<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是<code v-pre>Me</code>，但是<code v-pre>Me</code>只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用<code v-pre>MyClass</code>引用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inst<span class="token punctuation">.</span><span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Me</span>
Me<span class="token punctuation">.</span>name <span class="token comment">// ReferenceError: Me is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示，<code v-pre>Me</code>只在 Class 内部有定义。</p>
<p>如果类的内部没用到的话，可以省略<code v-pre>Me</code>，也就是可以写成下面的形式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyClass <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>采用 Class 表达式，可以写出立即执行的 Class。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">class</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">'张三'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "张三"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>person</code>是一个立即执行的类的实例。</p>
<h2 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h2>
<p>类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上<code v-pre>static</code>关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Foo<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 'hello'</span>

<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: foo.classMethod is not a function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>Foo</code>类的<code v-pre>classMethod</code>方法前有<code v-pre>static</code>关键字，表明该方法是一个静态方法，可以直接在<code v-pre>Foo</code>类上调用（<code v-pre>Foo.classMethod()</code>），而不是在<code v-pre>Foo</code>类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。</p>
<p>注意，如果静态方法包含<code v-pre>this</code>关键字，这个<code v-pre>this</code>指的是类，而不是实例。</p>
<p><strong>静态的就是不会被实例继承的，是属于类自身的，实例继承不了，也调用不了，跟作用域一样。</strong></p>
<p><strong>静态属性、静态方法：就是类自身的属性和方法，只能在类自身调用，实例对象是无法调用到静态属性和方法的，只能类自身调用，当然子类也可以调用父类的静态属性和方法；</strong></p>
<p><strong>实例属性、实例方法：就是实例可以调用的属性和方法，记住实例是无法调用类的静态属性和方法的，但是类可以调用实例属性和实例方法</strong>；</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//静态方法</span>
  <span class="token keyword">static</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//直接写原型的方法</span>
  <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Foo<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hello</span>
<span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>、、</p>
<p>上面代码中，静态方法<code v-pre>bar</code>调用了<code v-pre>this.baz</code>，这里的<code v-pre>this</code>指的是<code v-pre>Foo</code>类，而不是<code v-pre>Foo</code>的实例，等同于调用<code v-pre>Foo.baz</code>。另外，从这个例子还可以看出，静态方法可以与非静态方法重名。</p>
<p>父类的静态方法，可以被子类继承。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

Bar<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 'hello'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，父类<code v-pre>Foo</code>有一个静态方法，子类<code v-pre>Bar</code>可以调用这个方法。</p>
<p>静态方法也是可以从<code v-pre>super</code>对象上调用的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">', gsl'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Bar<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// "hello, gsl"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性" aria-hidden="true">#</a> 静态属性</h2>
<p>静态属性指的是 Class 本身的属性，即<code v-pre>Class.propName</code>，而不是定义在实例对象（<code v-pre>this</code>）上的属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

Foo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
Foo<span class="token punctuation">.</span>prop <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的写法为<code v-pre>Foo</code>类定义了一个静态属性<code v-pre>prop</code>。</p>
<p>目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。现在有一个<a href="https://github.com/tc39/proposal-class-fields" target="_blank" rel="noopener noreferrer">提案<ExternalLinkIcon/></a>提供了类的静态属性，写法是在实例属性的前面，加上<code v-pre>static</code>关键字。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> myStaticProp <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>MyClass<span class="token punctuation">.</span>myStaticProp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="私有方法和私有属性" tabindex="-1"><a class="header-anchor" href="#私有方法和私有属性" aria-hidden="true">#</a> 私有方法和私有属性</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Widget</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token parameter">baz</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">bar</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> baz<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">baz</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>snaf <span class="token operator">=</span> baz<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>foo</code>是公开方法，内部调用了<code v-pre>bar.call(this, baz)</code>。这使得<code v-pre>bar()</code>实际上成为了当前类的私有方法。</p>
<p>Object.keys()返回属性key，但不包括不可枚举的属性
Reflect.ownKeys()返回所有属性key</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">IncreasingCounter</span> <span class="token punctuation">{</span>
  #count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Getting the current value!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IncreasingCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
counter<span class="token punctuation">.</span>#count <span class="token comment">// 报错</span>
counter<span class="token punctuation">.</span>#count <span class="token operator">=</span> <span class="token number">42</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>#count</code>就是私有属性，只能在类的内部使用（<code v-pre>this.#count</code>）。如果在类的外部使用，就会报错。</p>
<p>注意，私有属性的属性名必须包括<code v-pre>#</code>，如果不带<code v-pre>#</code>，会被当作另一个属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  #x<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#x <span class="token operator">=</span> <span class="token operator">+</span>x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#x <span class="token operator">=</span> <span class="token operator">+</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>#x</code>就是私有属性，在<code v-pre>Point</code>类之外是读取不到这个属性的。由于井号<code v-pre>#</code>是属性名的一部分，使用时必须带有<code v-pre>#</code>一起使用，所以<code v-pre>#x</code>和<code v-pre>x</code>是两个不同的属性。</p>
<p>这种写法不仅可以写私有属性，还可以用来写私有方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  #a<span class="token punctuation">;</span>
  #b<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#a <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#b <span class="token operator">=</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">#sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">printSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">#sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>#sum()</code>就是一个私有方法。</p>
<p>调用属性名就是调用get()。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
  #xValue <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">#x</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#xValue<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">#x</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#xValue <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>#x</code>是一个私有属性，它的读写都通过<code v-pre>get #x()</code>和<code v-pre>set #x()</code>操作另一个私有属性<code v-pre>#xValue</code>来完成。</p>
<p>私有属性不限于从<code v-pre>this</code>引用，只要是在类的内部，实例也可以引用私有属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  #privateValue <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token function">getPrivateValue</span><span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> foo<span class="token punctuation">.</span>#privateValue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Foo<span class="token punctuation">.</span><span class="token function">getPrivateValue</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码允许从实例<code v-pre>foo</code>上面引用私有属性。</p>
<p>私有属性和私有方法前面，也可以加上<code v-pre>static</code>关键字，表示这是一个静态的私有属性或私有方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">FakeMath</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">22</span> <span class="token operator">/</span> <span class="token number">7</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> #totallyRandomNumber <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token function">#computeRandomNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> FakeMath<span class="token punctuation">.</span>#totallyRandomNumber<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I heard you like random numbers…'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> FakeMath<span class="token punctuation">.</span><span class="token function">#computeRandomNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

FakeMath<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token comment">// 3.142857142857143</span>
FakeMath<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// I heard you like random numbers…</span>
<span class="token comment">// 4</span>
FakeMath<span class="token punctuation">.</span>#totallyRandomNumber <span class="token comment">// 报错</span>
FakeMath<span class="token punctuation">.</span><span class="token function">#computeRandomNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>#totallyRandomNumber</code>是私有属性，<code v-pre>#computeRandomNumber()</code>是私有方法，只能在<code v-pre>FakeMath</code>这个类的内部调用，外部调用就会报错。</p>
<h3 id="in-运算符" tabindex="-1"><a class="header-anchor" href="#in-运算符" aria-hidden="true">#</a> in 运算符</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
  #brand<span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token function">isC</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>#brand <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 私有属性 #brand 存在</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 私有属性 #foo 不存在</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>in</code>，也可以跟<code v-pre>this</code>一起配合使用</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  #foo <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>#foo <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>#bar <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，判断私有属性时，<code v-pre>in</code>只能用在类的内部。</p>
<p>子类从父类继承的私有属性，也可以使用<code v-pre>in</code>运算符来判断。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  #foo <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>#foo <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubA</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token constant">A</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SubA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code v-pre>in</code>运算符对于<code v-pre>Object.create()</code>、<code v-pre>Object.setPrototypeOf</code>形成的继承，是无效的，因为这种继承不会传递私有属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  #foo <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>#foo <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> o1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">A</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token constant">A</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>o1<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">A</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token constant">A</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>o2<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Object.setPrototypeOf()，为现有对象设置原型，返回一个新对象，接收两个参数：第一个是现有对象，第二是原型对象。</p>
<h2 id="静态块" tabindex="-1"><a class="header-anchor" href="#静态块" aria-hidden="true">#</a> 静态块</h2>
<p>允许在类的内部设置一个代码块，在类生成时运行且只运行一次，主要作用是对静态属性进行初始化。以后，新建类的实例时，这个块就不运行了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> x <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> y<span class="token punctuation">;</span>
  <span class="token keyword">static</span> z<span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">doSomethingWith</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> obj<span class="token punctuation">.</span>y<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>z <span class="token operator">=</span> obj<span class="token punctuation">.</span>z<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">catch</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，类的内部有一个 static 代码块，这就是静态块。它的好处是将静态属性<code v-pre>y</code>和<code v-pre>z</code>的初始化逻辑，写入了类的内部，而且只运行一次。</p>
<p>每个类允许有多个静态块，每个静态块中只能访问之前声明的静态属性。另外，静态块的内部不能有<code v-pre>return</code>语句。</p>
<p>静态块内部可以使用类名或<code v-pre>this</code>，指代当前类。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">;</span> <span class="token comment">// 1</span>
    <span class="token comment">// 或者</span>
    <span class="token constant">C</span><span class="token punctuation">.</span>x<span class="token punctuation">;</span> <span class="token comment">// 1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了静态属性的初始化，静态块还有一个作用，就是将私有属性与类的外部代码分享。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> getX<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
  #x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getX</span> <span class="token operator">=</span> <span class="token parameter">obj</span> <span class="token operator">=></span> obj<span class="token punctuation">.</span>#x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getX</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>#x</code>是类的私有属性，如果类外部的<code v-pre>getX()</code>方法希望获取这个属性，以前是要写在类的<code v-pre>constructor()</code>方法里面，这样的话，每次新建实例都会定义一次<code v-pre>getX()</code>方法。现在可以写在静态块里面，这样的话，只在类生成时定义一次。</p>
<h2 id="类的注意点" tabindex="-1"><a class="header-anchor" href="#类的注意点" aria-hidden="true">#</a> 类的注意点</h2>
<p>类不存在变量提升（hoist）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError: Cannot access 'Foo' before initialization</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token punctuation">{</span>
  <span class="token keyword">let</span> Foo <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码不会报错，因为<code v-pre>Bar</code>继承<code v-pre>Foo</code>的时候，<code v-pre>Foo</code>已经有定义了。但是，如果存在<code v-pre>class</code>的提升，上面代码就会报错，因为<code v-pre>class</code>会被提升到代码头部，而<code v-pre>let</code>命令是不提升的，所以导致<code v-pre>Bar</code>继承<code v-pre>Foo</code>的时候，<code v-pre>Foo</code>还没有定义。</p>
<h3 id="name属性" tabindex="-1"><a class="header-anchor" href="#name属性" aria-hidden="true">#</a> name属性</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Point<span class="token punctuation">.</span>name <span class="token comment">// "Point"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="generator-方法" tabindex="-1"><a class="header-anchor" href="#generator-方法" aria-hidden="true">#</a> Generator 方法</h3>
<p>如果某个方法之前加上星号（<code v-pre>*</code>），就表示该方法是一个 Generator 函数。</p>
<p>yield是ES6的新关键字，使生成器函数执行暂停，yield关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的return关键字。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>args <span class="token operator">=</span> args<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token operator">*</span> <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> arg <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">yield</span> arg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token string">'world'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// hello</span>
<span class="token comment">// world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>Foo</code>类的<code v-pre>Symbol.iterator</code>方法前有一个星号，表示该方法是一个 Generator 函数。<code v-pre>Symbol.iterator</code>方法返回一个<code v-pre>Foo</code>类的默认遍历器，<code v-pre>for...of</code>循环会自动调用这个遍历器。</p>
<p>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of</p>
<h3 id="this-的指向" tabindex="-1"><a class="header-anchor" href="#this-的指向" aria-hidden="true">#</a> this 的指向</h3>
<p>类的方法内部如果含有<code v-pre>this</code>，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
  <span class="token function">printName</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">'there'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> printName <span class="token punctuation">}</span> <span class="token operator">=</span> logger<span class="token punctuation">;</span>
<span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: Cannot read property 'print' of undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>printName</code>方法中的<code v-pre>this</code>，默认指向<code v-pre>Logger</code>类的实例。但是，如果将这个方法提取出来单独使用，<code v-pre>this</code>会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是<code v-pre>undefined</code>），从而导致找不到<code v-pre>print</code>方法而报错。</p>
<p>一个比较简单的解决方法是，在构造方法中绑定<code v-pre>this</code>，这样就不会找不到<code v-pre>print</code>方法了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>printName <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Obj</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getThis</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Obj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myObj<span class="token punctuation">.</span><span class="token function">getThis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> myObj <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数内部的<code v-pre>this</code>总是指向定义时所在的对象。上面代码中，箭头函数位于构造函数内部，它的定义生效的时候，是在构造函数执行的时候。这时，箭头函数所在的运行环境，肯定是实例对象，所以<code v-pre>this</code>会总是指向实例对象。</p>
<h2 id="new-target-属性" tabindex="-1"><a class="header-anchor" href="#new-target-属性" aria-hidden="true">#</a> new.target 属性</h2>
<p><code v-pre>new</code>是从构造函数生成实例对象的命令。ES6 为<code v-pre>new</code>命令引入了一个<code v-pre>new.target</code>属性，该属性一般用在构造函数之中，返回<code v-pre>new</code>命令作用于的那个构造函数。如果构造函数不是通过<code v-pre>new</code>命令或<code v-pre>Reflect.construct()</code>调用的，<code v-pre>new.target</code>会返回<code v-pre>undefined</code>，因此这个属性可以用来确定构造函数是怎么调用的。</p>
<p><strong><code v-pre>Reflect.construct()</code></strong> 方法的行为有点像 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new" target="_blank" rel="noopener noreferrer"><code v-pre>new</code> 操作符<ExternalLinkIcon/></a> 构造函数，相当于运行 <code v-pre>new target(...args)</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'必须使用 new 命令生成实例'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 另一种写法</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'必须使用 new 命令生成实例'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'张三'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span>
<span class="token keyword">let</span> notAPerson <span class="token operator">=</span> <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">'张三'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Class 内部调用<code v-pre>new.target</code>，返回当前 Class。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length<span class="token punctuation">,</span> width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> Rectangle<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> length<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，子类继承父类时，<code v-pre>new.target</code>会返回子类。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length<span class="token punctuation">,</span> width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> Rectangle<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length<span class="token punctuation">,</span> width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>length<span class="token punctuation">,</span> width<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'本类不能实例化'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length<span class="token punctuation">,</span> width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 报错</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 正确</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>Shape</code>类不能被实例化，只能用于继承。</p>
<p>注意，在函数外部，使用<code v-pre>new.target</code>会报错。</p>
<h1 id="类的继承" tabindex="-1"><a class="header-anchor" href="#类的继承" aria-hidden="true">#</a> 类的继承</h1>
<p>Class 可以通过<code v-pre>extends</code>关键字实现继承，让子类继承父类的属性和方法。extends 的写法比 ES5 的原型链继承，要清晰和方便很多。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>Point</code>是父类，<code v-pre>ColorPoint</code>是子类，它通过<code v-pre>extends</code>关键字，继承了<code v-pre>Point</code>类的所有属性和方法。但是由于没有部署任何代码，所以这两个类完全一样，等于复制了一个<code v-pre>Point</code>类。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类的constructor(x, y)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类的toString()</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>constructor()</code>方法和<code v-pre>toString()</code>方法内部，都出现了<code v-pre>super</code>关键字。<code v-pre>super</code>在这里表示父类的构造函数，用来新建一个父类的实例对象。</p>
<p>ES6 规定，子类必须在<code v-pre>constructor()</code>方法中调用<code v-pre>super()</code>，否则就会报错。这是因为子类自己的<code v-pre>this</code>对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用<code v-pre>super()</code>方法，子类就得不到自己的<code v-pre>this</code>对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> cp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ColorPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>ColorPoint</code>继承了父类<code v-pre>Point</code>，但是它的构造函数没有调用<code v-pre>super()</code>，导致新建实例时报错。</p>
<p>为什么子类的构造函数，一定要调用<code v-pre>super()</code>？原因就在于 ES6 的继承机制，与 ES5 完全不同。ES5 的继承机制，是先创造一个独立的子类的实例对象，然后再将父类的方法添加到这个对象上面，即“实例在前，继承在后”。ES6 的继承机制，则是先将父类的属性和方法，加到一个空的对象上面，然后再将该对象作为子类的实例，即“继承在前，实例在后”。这就是为什么 ES6 的继承必须先调用<code v-pre>super()</code>方法，因为这一步会生成一个继承父类的<code v-pre>this</code>对象，没有这一步就无法继承父类。</p>
<p>注意，这意味着新建子类实例时，父类的构造函数必定会先运行一次。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，子类 Bar 新建实例时，会输出1和2。原因就是子类构造函数调用<code v-pre>super()</code>时，会执行一次父类构造函数。</p>
<p>另一个需要注意的地方是，在子类的构造函数中，只有调用<code v-pre>super()</code>之后，才可以使用<code v-pre>this</code>关键字，否则会报错。这是因为子类实例的构建，必须先完成父类的继承，只有<code v-pre>super()</code>方法才能让子类实例继承父类。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span> <span class="token comment">// 正确</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，子类的<code v-pre>constructor()</code>方法没有调用<code v-pre>super()</code>之前，就使用<code v-pre>this</code>关键字，结果报错，而放在<code v-pre>super()</code>之后就是正确的。</p>
<p>如果子类没有定义<code v-pre>constructor()</code>方法，这个方法会默认添加，并且里面会调用<code v-pre>super()</code>。也就是说，不管有没有显式定义，任何一个子类都有<code v-pre>constructor()</code>方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> cp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ColorPoint</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">'green'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

cp <span class="token keyword">instanceof</span> <span class="token class-name">ColorPoint</span> <span class="token comment">// true</span>
cp <span class="token keyword">instanceof</span> <span class="token class-name">Point</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="私有属性和私有方法的继承" tabindex="-1"><a class="header-anchor" href="#私有属性和私有方法的继承" aria-hidden="true">#</a> 私有属性和私有方法的继承</h2>
<p>父类所有的属性和方法，都会被子类继承，除了私有的属性和方法。</p>
<p>子类无法继承父类的私有属性，或者说，私有属性只能在定义它的 class 里面使用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  #p <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token function">#m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">#m</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，子类 Bar 调用父类 Foo 的私有属性或私有方法，都会报错。</p>
<p>如果父类定义了私有属性的读写方法，子类就可以通过这些方法，读写私有属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  #p <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token function">getP</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#p<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>getP()</code>是父类用来读取私有属性的方法，通过该方法，子类就可以读到父类的私有属性。</p>
<h2 id="静态属性和静态方法的继承" tabindex="-1"><a class="header-anchor" href="#静态属性和静态方法的继承" aria-hidden="true">#</a> 静态属性和静态方法的继承</h2>
<p>父类的静态属性和静态方法，也会被子类继承。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token constant">B</span><span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>hello()</code>是<code v-pre>A</code>类的静态方法，<code v-pre>B</code>继承<code v-pre>A</code>，也继承了<code v-pre>A</code>的静态方法。</p>
<p>注意，静态属性是通过浅拷贝实现继承的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span> <span class="token keyword">static</span> foo <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token constant">B</span><span class="token punctuation">.</span>foo<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">B</span><span class="token punctuation">.</span>foo <span class="token comment">// 99</span>
<span class="token constant">A</span><span class="token punctuation">.</span>foo <span class="token comment">// 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>foo</code>是 A 类的静态属性，B 类继承了 A 类，因此也继承了这个属性。但是，在 B 类内部操作<code v-pre>B.foo</code>这个静态属性，影响不到<code v-pre>A.foo</code>，原因就是 B 类继承静态属性时，会采用浅拷贝，拷贝父类静态属性的值，因此<code v-pre>A.foo</code>和<code v-pre>B.foo</code>是两个彼此独立的属性。</p>
<p>但是，由于这种拷贝是浅拷贝，如果父类的静态属性的值是一个对象，那么子类的静态属性也会指向这个对象，因为浅拷贝只会拷贝对象的内存地址。</p>
<p>https://blog.csdn.net/gang544043963/article/details/107196754</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token constant">B</span><span class="token punctuation">.</span>foo<span class="token punctuation">.</span>n<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">B</span><span class="token punctuation">.</span>foo<span class="token punctuation">.</span>n <span class="token comment">// 99</span>
<span class="token constant">A</span><span class="token punctuation">.</span>foo<span class="token punctuation">.</span>n <span class="token comment">// 99</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>A.foo</code>的值是一个对象，浅拷贝导致<code v-pre>B.foo</code>和<code v-pre>A.foo</code>指向同一个对象。所以，子类<code v-pre>B</code>修改这个对象的属性值，会影响到父类<code v-pre>A</code>。</p>
<h2 id="object-getprototypeof" tabindex="-1"><a class="header-anchor" href="#object-getprototypeof" aria-hidden="true">#</a> Object.getPrototypeOf()</h2>
<p><code v-pre>Object.getPrototypeOf()</code>方法可以用来从子类上获取父类。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span> <span class="token comment">/*...*/</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span> <span class="token comment">/*...*/</span> <span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>ColorPoint<span class="token punctuation">)</span> <span class="token operator">===</span> Point
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，可以使用这个方法判断，一个类是否继承了另一个类。</p>
<h2 id="super-关键字" tabindex="-1"><a class="header-anchor" href="#super-关键字" aria-hidden="true">#</a> super 关键字</h2>
<p><code v-pre>super</code>这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。</p>
<p>第一种情况，<code v-pre>super</code>作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次<code v-pre>super</code>函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，子类<code v-pre>B</code>的构造函数之中的<code v-pre>super()</code>，代表调用父类的构造函数。这是必须的，否则 JavaScript 引擎会报错。</p>
<p>注意，<code v-pre>super</code>虽然代表了父类<code v-pre>A</code>的构造函数，但是返回的是子类<code v-pre>B</code>的实例，即<code v-pre>super</code>内部的<code v-pre>this</code>指的是<code v-pre>B</code>的实例，因此<code v-pre>super()</code>在这里相当于<code v-pre>A.prototype.constructor.call(this)</code>。</p>
<p>A.prototype.constructor或者A.<code v-pre>_proto_</code>.constructor指向的就是A。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// A</span>
<span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>new.target</code>指向当前正在执行的函数。可以看到，在<code v-pre>super()</code>执行时，它指向的是子类<code v-pre>B</code>的构造函数，而不是父类<code v-pre>A</code>的构造函数。也就是说，<code v-pre>super()</code>内部的<code v-pre>this</code>指向的是<code v-pre>B</code>。</p>
<p>作为函数时，<code v-pre>super()</code>只能用在子类的构造函数之中，用在其他地方就会报错。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>super()</code>用在<code v-pre>B</code>类的<code v-pre>m</code>方法之中，就会造成语法错误。</p>
<p>第二种情况，<code v-pre>super</code>作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">p</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">p</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，子类<code v-pre>B</code>当中的<code v-pre>super.p()</code>，就是将<code v-pre>super</code>当作一个对象使用。这时，<code v-pre>super</code>在普通方法之中，指向<code v-pre>A.prototype</code>，所以<code v-pre>super.p()</code>就相当于<code v-pre>A.prototype.p()</code>。</p>
<p>这里需要注意，由于<code v-pre>super</code>指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过<code v-pre>super</code>调用的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
   <span class="token comment">//static p = 1;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>p <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span>p<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span>m <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>p</code>是父类<code v-pre>A</code>实例的属性，<code v-pre>super.p</code>就引用不到它。</p>
<p>如果属性定义在父类的原型对象上，<code v-pre>super</code>就可以取到。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token comment">// 2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，属性<code v-pre>x</code>是定义在<code v-pre>A.prototype</code>上面的，所以<code v-pre>super.x</code>可以取到它的值。</p>
<p>ES6 规定，在子类普通方法中通过<code v-pre>super</code>调用父类的方法时，方法内部的<code v-pre>this</code>指向当前的子类实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span><span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>super.print()</code>虽然调用的是<code v-pre>A.prototype.print()</code>，但是<code v-pre>A.prototype.print()</code>内部的<code v-pre>this</code>指向子类<code v-pre>B</code>的实例，导致输出的是<code v-pre>2</code>，而不是<code v-pre>1</code>。也就是说，实际上执行的是<code v-pre>super.print.call(this)</code>。</p>
<p>由于<code v-pre>this</code>指向子类实例，所以如果通过<code v-pre>super</code>对某个属性赋值，这时<code v-pre>super</code>就是<code v-pre>this</code>，赋值的属性会变成子类实例的属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>super.x</code>赋值为<code v-pre>3</code>，这时等同于对<code v-pre>this.x</code>赋值为<code v-pre>3</code>。而当读取<code v-pre>super.x</code>的时候，读的是<code v-pre>A.prototype.x</code>，所以返回<code v-pre>undefined</code>。</p>
<p>如果<code v-pre>super</code>作为对象，用在静态方法之中，这时<code v-pre>super</code>将指向父类，而不是父类的原型对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'static'</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'instance'</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">myMethod</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">myMethod</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Child<span class="token punctuation">.</span><span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// static 1</span>

<span class="token keyword">let</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span><span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// instance 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>super</code>在静态方法之中指向父类，在普通方法之中指向父类的原型对象。</p>
<p>在子类的静态方法中通过<code v-pre>super</code>调用父类的方法时，方法内部的<code v-pre>this</code>指向当前的子类，而不是子类的实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token constant">B</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token constant">B</span><span class="token punctuation">.</span><span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，静态方法<code v-pre>B.m</code>里面，<code v-pre>super.print</code>指向父类的静态方法。这个方法里面的<code v-pre>this</code>指向的是<code v-pre>B</code>，而不是<code v-pre>B</code>的实例。</p>
<p>注意，使用<code v-pre>super</code>的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>console.log(super)</code>当中的<code v-pre>super</code>，无法看出是作为函数使用，还是作为对象使用，所以 JavaScript 引擎解析代码的时候就会报错。这时，如果能清晰地表明<code v-pre>super</code>的数据类型，就不会报错。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>super.valueOf()</code>表明<code v-pre>super</code>是一个对象，因此就不会报错。同时，由于<code v-pre>super</code>使得<code v-pre>this</code>指向<code v-pre>B</code>的实例，所以<code v-pre>super.valueOf()</code>返回的是一个<code v-pre>B</code>的实例。</p>
<p>最后，由于对象总是继承其他对象的，所以可以在任意一个对象中，使用<code v-pre>super</code>关键字。</p>
<p><em>valueOf()函数valueOf()函数用于返回指定对象的原始值。</em></p>
<p>用于检测<a href="https://so.csdn.net/so/search?q=%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">构造函数<ExternalLinkIcon/></a>的 <code v-pre>prototype</code> 属性是否出现在某个实例对象的<a href="https://so.csdn.net/so/search?q=%E5%8E%9F%E5%9E%8B%E9%93%BE&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">原型链<ExternalLinkIcon/></a>上。</p>
<ul>
<li>
<p>语法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>object instanceof constructor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>object</code>：某个实例对象</li>
<li><code v-pre>constructor</code>：某个构造函数</li>
</ul>
</li>
</ul>
<p>用来检测 <code v-pre>constructor.prototype</code> 是否存在于参数 <code v-pre>object</code> 的原型链上。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"MyObject: "</span> <span class="token operator">+</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// MyObject: [object Object]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类的-prototype-属性和-proto-属性" tabindex="-1"><a class="header-anchor" href="#类的-prototype-属性和-proto-属性" aria-hidden="true">#</a> 类的 prototype 属性和__proto__属性</h2>
<p>（1）子类的<code v-pre>__proto__</code>属性，表示构造函数的继承，总是指向父类。</p>
<p>（2）子类<code v-pre>prototype</code>属性的<code v-pre>__proto__</code>属性，表示方法的继承，总是指向父类的<code v-pre>prototype</code>属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token constant">B</span><span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token constant">A</span> <span class="token comment">// true</span>
<span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">A</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，子类<code v-pre>B</code>的<code v-pre>__proto__</code>属性指向父类<code v-pre>A</code>，子类<code v-pre>B</code>的<code v-pre>prototype</code>属性的<code v-pre>__proto__</code>属性指向父类<code v-pre>A</code>的<code v-pre>prototype</code>属性。</p>
<p>这样的结果是因为，类的继承是按照下面的模式实现的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// B 的实例继承 A 的实例</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// B 继承 A 的静态属性</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Object.setPrototypeOf</code>方法的实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function-variable function">setPrototypeOf</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> proto</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> proto<span class="token punctuation">;</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token constant">B</span><span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token constant">A</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两条继承链，可以这样理解：作为一个对象，子类（<code v-pre>B</code>）的原型（<code v-pre>__proto__</code>属性）是父类（<code v-pre>A</code>）；作为一个构造函数，子类（<code v-pre>B</code>）的原型对象（<code v-pre>prototype</code>属性）是父类的原型对象（<code v-pre>prototype</code>属性）的实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">B</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的<code v-pre>A</code>，只要是一个有<code v-pre>prototype</code>属性的函数，就能被<code v-pre>B</code>继承。由于函数都有<code v-pre>prototype</code>属性（除了<code v-pre>Function.prototype</code>函数），因此<code v-pre>A</code>可以是任意函数。</p>
<p>下面，讨论两种情况。第一种，子类继承<code v-pre>Object</code>类。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token keyword">extends</span> <span class="token class-name">Object</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token constant">A</span><span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> Object <span class="token comment">// true</span>
<span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况下，<code v-pre>A</code>其实就是构造函数<code v-pre>Object</code>的复制，<code v-pre>A</code>的实例就是<code v-pre>Object</code>的实例。</p>
<p>第二种情况，不存在任何继承。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token constant">A</span><span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
<span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况下，<code v-pre>A</code>作为一个基类（即不存在任何继承），就是一个普通函数，所以直接继承<code v-pre>Function.prototype</code>。但是，<code v-pre>A</code>调用后返回一个空对象（即<code v-pre>Object</code>实例），所以<code v-pre>A.prototype.__proto__</code>指向构造函数（<code v-pre>Object</code>）的<code v-pre>prototype</code>属性。</p>
<h3 id="实例的-proto-属性" tabindex="-1"><a class="header-anchor" href="#实例的-proto-属性" aria-hidden="true">#</a> 实例的 <strong>proto</strong> 属性</h3>
<p>子类实例的<code v-pre>__proto__</code>属性的<code v-pre>__proto__</code>属性，指向父类实例的<code v-pre>__proto__</code>属性。也就是说，子类的原型的原型，是父类的原型。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ColorPoint</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'red'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p2<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> p1<span class="token punctuation">.</span>__proto__ <span class="token comment">// false</span>
p2<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> p1<span class="token punctuation">.</span>__proto__ <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>ColorPoint</code>继承了<code v-pre>Point</code>，导致前者原型的原型是后者的原型。</p>
<p>因此，通过子类实例的<code v-pre>__proto__.__proto__</code>属性，可以修改父类实例的行为。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>p2<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function-variable function">printName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Ha'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

p1<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// "Ha"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码在<code v-pre>ColorPoint</code>的实例<code v-pre>p2</code>上向<code v-pre>Point</code>类添加方法，结果影响到了<code v-pre>Point</code>的实例<code v-pre>p1</code>。</p>
<h2 id="原生构造函数的继承" tabindex="-1"><a class="header-anchor" href="#原生构造函数的继承" aria-hidden="true">#</a> 原生构造函数的继承</h2>
<p>原生构造函数是指语言内置的构造函数，通常用来生成数据结构。ECMAScript 的原生构造函数大致有下面这些。</p>
<ul>
<li>
<p>Boolean()</p>
</li>
<li>
<p>Number()</p>
</li>
<li>
<p>String()</p>
</li>
<li>
<p>Array()</p>
</li>
<li>
<p>Date()</p>
</li>
<li>
<p>Function()</p>
</li>
<li>
<p>RegExp()</p>
</li>
<li>
<p>Error()</p>
</li>
<li>
<p>Object()</p>
<p>以前，这些原生构造函数是无法继承的，比如，不能自己定义一个<code v-pre>Array</code>的子类。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Array</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">MyArray</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> MyArray<span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> colors <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
colors<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span>
colors<span class="token punctuation">.</span>length  <span class="token comment">// 0</span>

colors<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
colors<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment">// "red"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>之所以会发生这种情况，是因为子类无法获得原生构造函数的内部属性，通过<code v-pre>Array.apply()</code>或者分配给原型对象都不行。原生构造函数会忽略<code v-pre>apply</code>方法传入的<code v-pre>this</code>，也就是说，原生构造函数的<code v-pre>this</code>无法绑定，导致拿不到内部属性。</p>
<p>ES5 是先新建子类的实例对象<code v-pre>this</code>，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数。比如，<code v-pre>Array</code>构造函数有一个内部属性<code v-pre>[[DefineOwnProperty]]</code>，用来定义新属性时，更新<code v-pre>length</code>属性，这个内部属性无法在子类获取，导致子类的<code v-pre>length</code>属性行为不正常。</p>
<p>下面的例子中，我们想让一个普通对象继承<code v-pre>Error</code>对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span><span class="token function">Error</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// [ 'stack' ]</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token comment">// []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，我们想通过<code v-pre>Error.call(e)</code>这种写法，让普通对象<code v-pre>e</code>具有<code v-pre>Error</code>对象的实例属性。但是，<code v-pre>Error.call()</code>完全忽略传入的第一个参数，而是返回一个新对象，<code v-pre>e</code>本身没有任何变化。这证明了<code v-pre>Error.call(e)</code>这种写法，无法继承原生构造函数。</p>
<p>ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象<code v-pre>this</code>，然后再用子类的构造函数修饰<code v-pre>this</code>，使得父类的所有行为都可以继承。下面是一个继承<code v-pre>Array</code>的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyArray</span> <span class="token keyword">extends</span> <span class="token class-name">Array</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span>length <span class="token comment">// 1</span>

arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码定义了一个<code v-pre>MyArray</code>类，继承了<code v-pre>Array</code>构造函数，因此就可以从<code v-pre>MyArray</code>生成数组的实例。这意味着，ES6 可以自定义原生数据结构（比如<code v-pre>Array</code>、<code v-pre>String</code>等）的子类，这是 ES5 无法做到的。</p>
<p>上面这个例子也说明，<code v-pre>extends</code>关键字不仅可以用来继承类，还可以用来继承原生的构造函数。因此可以在原生数据结构的基础上，定义自己的数据结构。下面就是定义了一个带版本功能的数组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">VersionedArray</span> <span class="token keyword">extends</span> <span class="token class-name">Array</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">revert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VersionedArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

x<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
x<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
x <span class="token comment">// [1, 2]</span>
x<span class="token punctuation">.</span>history <span class="token comment">// [[]]</span>

x<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
x<span class="token punctuation">.</span>history <span class="token comment">// [[], [1, 2]]</span>

x<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
x <span class="token comment">// [1, 2, 3]</span>
x<span class="token punctuation">.</span>history <span class="token comment">// [[], [1, 2]]</span>

x<span class="token punctuation">.</span><span class="token function">revert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
x <span class="token comment">// [1, 2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>VersionedArray</code>会通过<code v-pre>commit</code>方法，将自己的当前状态生成一个版本快照，存入<code v-pre>history</code>属性。<code v-pre>revert</code>方法用来将数组重置为最新一次保存的版本。除此之外，<code v-pre>VersionedArray</code>依然是一个普通数组，所有原生的数组方法都可以在它上面调用。</p>
<p>下面是一个自定义<code v-pre>Error</code>子类的例子，可以用来定制报错时的行为。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ExtendableError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>stack<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyError</span> <span class="token keyword">extends</span> <span class="token class-name">ExtendableError</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> myerror <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyError</span><span class="token punctuation">(</span><span class="token string">'ll'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myerror<span class="token punctuation">.</span>message <span class="token comment">// "ll"</span>
myerror <span class="token keyword">instanceof</span> <span class="token class-name">Error</span> <span class="token comment">// true</span>
myerror<span class="token punctuation">.</span>name <span class="token comment">// "MyError"</span>
myerror<span class="token punctuation">.</span>stack
<span class="token comment">// Error</span>
<span class="token comment">//     at MyError.ExtendableError</span>
<span class="token comment">//     ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，继承<code v-pre>Object</code>的子类，有一个<a href="https://stackoverflow.com/questions/36203614/super-does-not-pass-arguments-when-instantiating-a-class-extended-from-object" target="_blank" rel="noopener noreferrer">行为差异<ExternalLinkIcon/></a>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">NewObj</span> <span class="token keyword">extends</span> <span class="token class-name">Object</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NewObj</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">attr</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
o<span class="token punctuation">.</span>attr <span class="token operator">===</span> <span class="token boolean">true</span>  <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>NewObj</code>继承了<code v-pre>Object</code>，但是无法通过<code v-pre>super</code>方法向父类<code v-pre>Object</code>传参。这是因为 ES6 改变了<code v-pre>Object</code>构造函数的行为，一旦发现<code v-pre>Object</code>方法不是通过<code v-pre>new Object()</code>这种形式调用，ES6 规定<code v-pre>Object</code>构造函数会忽略参数。</p>
<h2 id="mixin-模式的实现" tabindex="-1"><a class="header-anchor" href="#mixin-模式的实现" aria-hidden="true">#</a> Mixin 模式的实现</h2>
<p>Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。它的最简单实现如下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">'a'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">'b'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>a<span class="token punctuation">,</span> <span class="token operator">...</span>b<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// {a: 'a', b: 'b'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>c</code>对象是<code v-pre>a</code>对象和<code v-pre>b</code>对象的合成，具有两者的接口。</p>
<p>下面是一个更完备的实现，将多个类的接口“混入”（mix in）另一个类。</p>
<p><strong><code v-pre>Object.getOwnPropertyDescriptor()</code></strong> 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）</p>
<p>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>mixins</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">Mix</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> mixin <span class="token keyword">of</span> mixins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">copyProperties</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拷贝实例属性</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> mixin <span class="token keyword">of</span> mixins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">copyProperties</span><span class="token punctuation">(</span>Mix<span class="token punctuation">,</span> mixin<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拷贝静态属性</span>
    <span class="token function">copyProperties</span><span class="token punctuation">(</span><span class="token class-name">Mix</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> mixin<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拷贝原型属性</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> Mix<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">copyProperties</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> key <span class="token operator">!==</span> <span class="token string">'constructor'</span>
      <span class="token operator">&amp;&amp;</span> key <span class="token operator">!==</span> <span class="token string">'prototype'</span>
      <span class="token operator">&amp;&amp;</span> key <span class="token operator">!==</span> <span class="token string">'name'</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> desc <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//JS对象属性描述符对象 https://blog.csdn.net/dreamingbaobei3/article/details/118568686</span>
      Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> desc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的<code v-pre>mix</code>函数，可以将多个对象合成为一个类。使用的时候，只要继承这个类即可。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">DistributedEdit</span> <span class="token keyword">extends</span> <span class="token class-name">mix</span><span class="token punctuation">(</span>Loggable<span class="token punctuation">,</span> Serializable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


