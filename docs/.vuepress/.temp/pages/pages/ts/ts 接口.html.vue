<template><div><h1 id="typescript-接口" tabindex="-1"><a class="header-anchor" href="#typescript-接口" aria-hidden="true">#</a> TypeScript 接口</h1>
<p>npm install -g ts-node</p>
<p>npm install -g typescript</p>
<p>npm install -g tslib @types/node</p>
<p>tsc --outFile ./js/实例.js  ./实例.ts</p>
<p>接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。</p>
<p>TypeScript 接口定义如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">interface_name</span> <span class="token punctuation">{</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3>
<p>以下实例中，我们定义了一个接口 IPerson，接着定义了一个变量 customer，它的类型是 IPerson。</p>
<p>customer 实现了接口 IPerson 的属性和方法。</p>
<h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token function-variable function">sayHi</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">customer</span><span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"Tom"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"Hanks"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sayHi</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">string</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"Hi there"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Customer 对象 "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>customer<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>customer<span class="token punctuation">.</span>lastName<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>customer<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意接口不能转换为 JavaScript。 它只是 TypeScript 的一部分。</p>
<p>编译以上代码，得到以下 JavaScript 代码：</p>
<h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> customer <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"Tom"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"Hanks"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">sayHi</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Hi there"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Customer 对象 "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>customer<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>customer<span class="token punctuation">.</span>lastName<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>customer<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Customer 对象
Tom
Hanks
Hi there
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：定义的变量比接口少了一些属性是不允许的，多一些属性也是不允许的，可见，<strong>赋值的时候，变量的形状必须和接口的形状保持一致</strong>。</p>
<h2 id="可选属性" tabindex="-1"><a class="header-anchor" href="#可选属性" aria-hidden="true">#</a> 可选属性</h2>
<p>有时我们希望不要完全匹配一个形状，那么可以用可选属性：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Tom'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选属性的含义是该属性可以不存在。<strong>仍然不允许添加未定义的属性</strong></p>
<h2 id="任意属性" tabindex="-1"><a class="header-anchor" href="#任意属性" aria-hidden="true">#</a> 任意属性</h2>
<p>有时候我们希望一个接口允许有任意的属性，可以使用如下方式：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">'male'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>[propName: string]</code> 定义了任意属性取 <code v-pre>string</code> 类型的值。</p>
<p>需要注意的是，<strong>一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集</strong>：</p>
<p>上例中，任意属性的值允许是 <code v-pre>string</code>，但是可选属性 <code v-pre>age</code> 的值却是 <code v-pre>number</code>，<code v-pre>number</code> 不是 <code v-pre>string</code> 的子属性，所以报错了。</p>
<p>另外，在报错信息中可以看出，此时 <code v-pre>{ name: 'Tom', age: 25, gender: 'male' }</code> 的类型被推断成了 <code v-pre>{ [x: string]: string | number; name: string; age: number; gender: string; }</code>，这是联合类型和接口的结合。</p>
<p>一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">'male'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性" aria-hidden="true">#</a> 只读属性</h2>
<p>有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 <code v-pre>readonly</code> 定义只读属性：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">89757</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">'male'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

tom<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">9527</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，使用 <code v-pre>readonly</code> 定义的属性 <code v-pre>id</code> 初始化后，又被赋值了，所以报错了。</p>
<p><strong>注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候</strong>：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">'male'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

tom<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">89757</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.</span>
<span class="token comment">//   Property 'id' is missing in type '{ name: string; gender: string; }'.</span>
<span class="token comment">// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，报错信息有两处，第一处是在对 <code v-pre>tom</code> 进行赋值的时候，没有给 <code v-pre>id</code> 赋值。</p>
<p>第二处是在给 <code v-pre>tom.id</code> 赋值的时候，由于它是只读属性，所以报错了。</p>
<h2 id="接口继承" tabindex="-1"><a class="header-anchor" href="#接口继承" aria-hidden="true">#</a> 接口继承</h2>
<p>接口继承就是说接口可以通过其他接口来扩展自己。</p>
<p>Typescript 允许接口继承多个接口。</p>
<p>继承使用关键字 <strong>extends</strong>。</p>
<p>单接口继承语法格式：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Child_interface_name extends super_interface_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多接口继承语法格式：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IParent1</span> <span class="token punctuation">{</span>
 v1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">IParent2</span> <span class="token punctuation">{</span>
 v2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">IParent1</span><span class="token punctuation">,</span> IParent2 <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> Iobj<span class="token operator">:</span> Child <span class="token operator">=</span> <span class="token punctuation">{</span> v1<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> v2<span class="token operator">:</span> <span class="token number">23</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"value 1: "</span> <span class="token operator">+</span> Iobj<span class="token punctuation">.</span>v1 <span class="token operator">+</span> <span class="token string">" value 2: "</span> <span class="token operator">+</span> Iobj<span class="token punctuation">.</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


