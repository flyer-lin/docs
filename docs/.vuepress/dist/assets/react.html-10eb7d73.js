import{_ as i,r as l,o as p,c,a as n,b as s,d as a,e as t}from"./app-85c95bd0.js";const o={},r=n("p",null,"以下是观看尚硅谷React课程所做的笔记。",-1),d={href:"https://www.bilibili.com/video/BV1wy4y1D7JT?p=43&t=5",target:"_blank",rel:"noopener noreferrer"},u=n("h1",{id:"react简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react简介","aria-hidden":"true"},"#"),s(" React简介")],-1),v=n("p",null,[n("strong",null,"react是什么？")],-1),m=n("p",null,"React用于构建用户界面的JS库。是一个将数据渲染为HTML视图的开源JS库。",-1),b=n("p",null,[n("strong",null,"为什么学？")],-1),g=n("p",null,"1.原生JS操作DOM繁琐，效率低",-1),k=n("p",null,"2.使用JS直接操作DOM,浏览器会进行大量的重绘重排",-1),h=n("p",null,"3.原生JS没有组件化编码方案，代码复用低",-1),q=n("p",null,"在学习之前最好看一下关于npm的知识：下面是我在网上看见的一个写的还不错的npm的文章",-1),y={href:"https://blog.csdn.net/qq_25502269/article/details/79346545",target:"_blank",rel:"noopener noreferrer"},x=t(`<h1 id="react入门" tabindex="-1"><a class="header-anchor" href="#react入门" aria-hidden="true">#</a> React入门</h1><h2 id="react-基础案例" tabindex="-1"><a class="header-anchor" href="#react-基础案例" aria-hidden="true">#</a> React 基础案例</h2><p>1.先倒入三个包：</p><p>【先引入react.development.js，后引入react-dom.development.js】</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>react.development.js
react-dom.development.js
babel.min.js 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.创建一个容器</p><p>3.创建虚拟DOM，渲染到容器中</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 准备好容器 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 引入依赖 ,引入的时候，必须就按照这个步骤--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/react.development.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/react-dom.development.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/babel.min.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--这里使用了babel用来解析jsx语法--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/babel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 1.创建虚拟DOM</span>
        <span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>  <span class="token comment">//这个地方使用的是JSX语法，不需要加&quot;&quot;</span>
        <span class="token comment">// 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉</span>
        ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，就会在页面中的这个div容器上添加这个h1.</p><h2 id="jsx基础语法" tabindex="-1"><a class="header-anchor" href="#jsx基础语法" aria-hidden="true">#</a> JSX基础语法</h2><p>1.定义虚拟DOM，不能使用“”</p><p>2.标签中混入JS表达式的时候使用{}</p><p>3.样式的类名指定不要使用class，使用className</p><p>4.内敛样式要使用双大括号包裹</p><p>5.不能有多个根标签，只能有一个跟标签</p><p>6.标签必须闭合</p><p>7.如果小写字母开头，就将标签转化为html同名元素，如果html中无该标签对应的元素，就报错；如果是大写字母开头，react就去渲染对应的组件，如果没有就报错</p><blockquote><p>关于JS表达式和JS语句：</p><p>JS表达式：返回一个值，可以放在任何一个需要值的地方 a a+b demo(a) arr.map() function text(){} JS语句：if(){} for(){} while(){} swith(){} 不会返回一个值</p></blockquote><p>实例如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.sss</span><span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 准备好容器 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 引入依赖 ,引入的时候，必须就按照这个步骤--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/react.development.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/react-dom.development.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/babel.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--这里使用了js来创建虚拟DOM--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/babel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">const</span> MyId <span class="token operator">=</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> MyData <span class="token operator">=</span> <span class="token string">&quot;Cyk&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 1.创建虚拟DOM</span>
        <span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>h1 id <span class="token operator">=</span> <span class="token punctuation">{</span>MyId<span class="token punctuation">.</span><span class="token function">toLocaleUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>span className <span class="token operator">=</span> <span class="token string">&quot;sss&quot;</span> style <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token string">&#39;50px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>sss<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
        <span class="token comment">// 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉</span>
        ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两种创建虚拟dom的方式" tabindex="-1"><a class="header-anchor" href="#两种创建虚拟dom的方式" aria-hidden="true">#</a> 两种创建虚拟DOM的方式</h2><p><strong>1.使用JSX创建虚拟DOM</strong></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code> <span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>h1 id <span class="token operator">=</span> <span class="token punctuation">{</span>MyId<span class="token punctuation">.</span><span class="token function">toLocaleUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>span className <span class="token operator">=</span> <span class="token string">&quot;sss&quot;</span> style <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token string">&#39;50px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>sss<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个在上面的案例中已经演示过了 ，下面看看另外一种创建虚拟DOM的方式</p><p><strong>2.使用JS创建虚拟DOM</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.创建虚拟DOM[在这使用了js的语法]React.createElement(标签,标签属性,内容)</span>
<span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">&quot;nihao&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用JS和JSX都可以创建虚拟DOM，但是可以看出JS创建虚拟DOM比较繁琐，尤其是标签如果很多的情况下，所以还是比较推荐使用JSX来创建。</p><h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h1><p>当应用是以多组件的方式实现，这个应用就是一个组件化的应用</p><blockquote><p><strong>注意：</strong> 组件名称必须以大写字母开头。</p><p>React 会将以小写字母开头的组件视为原生 DOM 标签。例如，&lt; div /&gt;<code>代表 HTML 的 div 标签，而</code>&lt; Weclome /&gt; 则代表一个组件，并且需在作用域内使用 <code>Welcome</code></p><p>传递的参数，不能在组件中改动</p></blockquote><h2 id="函数式组件" tabindex="-1"><a class="header-anchor" href="#函数式组件" aria-hidden="true">#</a> 函数式组件</h2><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>//1.先创建函数，函数可以有参数，也可以没有，但是必须要有返回值 返回一个虚拟DOM
function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}
//2.进行渲染
ReactDOM.Render(&lt;Welcom name = &quot;ss&quot; /&gt;,document.getElementById(&quot;div&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们来回顾一下这个例子中发生了什么：</p><ol><li>我们调用 <code>ReactDOM.render()</code> 函数，并传入 <code>&lt;Welcome name=&quot;Sara&quot; /&gt;</code> 作为参数。</li><li>React 调用 <code>Welcome</code> 组件，并将 <code>{name: &#39;Sara&#39;}</code> 作为 props 传入。</li><li><code>Welcome</code> 组件将 <code>Hello, Sara</code> 元素作为返回值。</li><li>React DOM 将 DOM 高效地更新为 <code>Hello, Sara</code>。</li></ol><h2 id="class组件" tabindex="-1"><a class="header-anchor" href="#class组件" aria-hidden="true">#</a> Class组件</h2><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>//必须继承React.Component
//然后重写Render()方法，该方法一定要有返回值，返回一个虚拟DOM
class Welcome extends React.Component {
  render() {
    return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;;
  }
}
//渲染 【这个跟之前也是一样的】
ReactDOM.Render(&lt;Welcom name = &quot;ss&quot; /&gt;,document.getElementById(&quot;div&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行过程：</p><p>​ 1.React解析组件标签，找到相应的组件</p><p>​ 2.发现组件是类定义的，随后new出来的类的实例，并通过该实例调用到原型上的render方法</p><p>​ 3.将render返回的虚拟DOM转化为真实的DOM,随后呈现在页面中</p><h2 id="组件案例" tabindex="-1"><a class="header-anchor" href="#组件案例" aria-hidden="true">#</a> 组件案例</h2><p>下面，我们通过一个案例更好的理解组件：【只关注与核心代码】</p><p>我们发现组件是可以包含中使用的， 而且如果创建的数组，必须要代一个key。数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;script type=&quot;text/babel&quot;&gt;

        //创建一个组件&lt;li&gt;
        function GetLi(props){      
            return &lt;li&gt;{props.value}&lt;/li&gt;
        };

        // 1.创建类式组件&lt;ul&gt;
        class MyComponent extends React.Component{
            render(){
                console.log(this.props.arr);
                let com = this.props.arr.map((item,index)=&gt;
                     //在这个地方包含了GetLi这个组件，【注意不能用{}】
                     //因为这个是一个列表，所以必须传递一个key【独一无二的Key】
                     //key 帮助 React 识别哪些元素改变了，比如被添加或删除。
                        &lt;GetLi value={item} key = {index} /&gt;
                    );
                console.log(com);
                return &lt;ul&gt;{com}&lt;/ul&gt;
            }
        }
        
        let num = [1,2,3,4]
        //2.渲染组件
        ReactDOM.render(&lt;MyComponent  arr={num}/&gt;,document.getElementById(&quot;test&quot;);
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="组件实例的三大属性" tabindex="-1"><a class="header-anchor" href="#组件实例的三大属性" aria-hidden="true">#</a> 组件实例的三大属性</h1><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h2><p>我们都说React是一个状态机，体现是什么地方呢，就是体现在state上，通过与用户的交互，实现不同的状态，然后去渲染UI,这样就让用户的数据和界面保持一致了。state是组件的私有属性。</p><p>在React中，更新组件的state，结果就会重新渲染用户界面(不需要操作DOM),一句话就是说，用户的界面会随着状态的改变而改变。</p><p>state是组件对象最重要的属性，值是对象（可以包含多个key-value的组合）</p><p><strong>案例</strong>：</p><p>1.需求：页面显示【今天天气很炎热】，鼠标点击文字的时候，页面更改为【今天天气很凉爽】</p><p>核心代码如下：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;body&gt;
    &lt;!-- 准备好容器 --&gt;
    &lt;div id=&quot;test&quot;&gt;
        
    &lt;/div&gt;
&lt;/body&gt;
&lt;!-- 引入依赖 ,引入的时候，必须就按照这个步骤--&gt;
&lt;script src=&quot;../js/react.development.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../js/react-dom.development.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;

&lt;script src=&quot;../js/babel.min.js&quot;&gt;&lt;/script&gt;
&lt;!--这里使用了js来创建虚拟DOM--&gt;
&lt;script type=&quot;text/babel&quot;&gt;
        //1.创建组件
        class St extends React.Component{
            constructor(props){
                super(props);
                //先给state赋值
                this.state = {isHot:true,win:&quot;ss&quot;};
                //找到原型的dem，根据dem函数创建了一个dem1的函数，并且将实例对象的this赋值过去
                this.dem1 = this.dem.bind(this);
            }
            //render会调用1+n次【1就是初始化的时候调用的，n就是每一次修改state的时候调用的】
            render(){ //这个This也是实例对象
                //如果加dem()，就是将函数的回调值放入这个地方
                //this.dem这里面加入this，并不是调用，只不过是找到了dem这个函数，在调用的时候相当于直接调用，并不是实例对象的调用
                return &lt;h1 onClick = {this.dem1}&gt;今天天气很{this.state.isHot?&quot;炎热&quot;:&quot;凉爽&quot;}&lt;/h1&gt;    
            }
            //通过state的实例调用dem的时候，this就是实例对象
            dem(){
                const state =  this.state.isHot;
                 //状态中的属性不能直接进行更改，需要借助API
                // this.state.isHot = !isHot; 错误
                //必须使用setState对其进行修改，并且这是一个合并
                this.setState({isHot:!state});
            }
        }
        // 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉
        ReactDOM.render(&lt;St /&gt;,document.getElementById(&quot;test&quot;));
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是：</p><p>1.组件的构造函数，必须要传递一个props参数</p><p>2.特别关注this【重点】，类中所有的方法局部都开启了严格模式，如果直接进行调用，this就是undefined</p><p>3.想要改变state,需要使用setState进行修改，如果只是修改state的部分属性，则不会影响其他的属性，这个只是合并并不是覆盖。</p><p>this.setState()，该方法接收两种参数：对象或函数。</p><ol><li>对象：即想要修改的state</li><li>函数：接收两个函数，第一个函数接受两个参数，第一个是当前state，第二个是当前props，该函数返回一个对象，和直接传递对象参数是一样的，就是要修改的state；第二个函数参数是state改变后触发的回调</li></ol><p>在此还需要注意的是，setState有异步更新和同步更新两种形式，那么什么时候会同步更新，什么时候会异步更新呢？</p><p><strong>React控制之外的事件中调用setState是同步更新的。比如原生js绑定的事件，setTimeout/setInterval等</strong>。</p><p><strong>大部分开发中用到的都是React封装的事件，比如onChange、onClick、onTouchMove等，这些事件处理程序中的setState都是异步处理的。</strong></p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>//1.创建组件
class St extends React.Component{
    //可以直接对其进行赋值
    state = {isHot:10};
    render(){ //这个This也是实例对象
        return &lt;h1 onClick = {this.dem}&gt;点击事件&lt;/h1&gt; 
    }
//箭头函数 [自定义方法---&gt;要用赋值语句的形式+箭头函数]
    dem = () =&gt;{
        //修改isHot
        this.setState({ isHot: this.state.isHot + 1})
        console.log(this.state.isHot);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的案例中预期setState使得isHot变成了11，输出也应该是11。然而在控制台打印的却是10，也就是并没有对其进行更新。这是因为异步的进行了处理，在输出的时候还没有对其进行处理。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>componentDidMount(){
    document.getElementById(&quot;test&quot;).addEventListener(&quot;click&quot;,()=&gt;{
        this.setState({isHot: this.state.isHot + 1});
        console.log(this.state.isHot);
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是通过这个原生JS的，可以发现，控制台打印的就是11，也就是已经对其进行了处理。也就是进行了同步的更新。</p><p><strong>React怎么调用同步或者异步的呢？</strong></p><p>在 React 的 setState 函数实现中，会根据一个变量 isBatchingUpdates 判断是直接更新 this.state 还是放到队列中延时更新，而 isBatchingUpdates 默认是 false，表示 setState 会同步更新 this.state；但是，有一个函数 batchedUpdates，该函数会把 isBatchingUpdates 修改为 true，而当 React 在调用事件处理函数之前就会先调用这个 batchedUpdates将isBatchingUpdates修改为true，这样由 React 控制的事件处理过程 setState 不会同步更新 this.state。</p><p><strong>如果是同步更新，每一个setState对调用一个render，并且如果多次调用setState会以最后调用的为准，前面的将会作废；如果是异步更新，多个setSate会统一调用一次render</strong></p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>dem = () =&gt;{
    this.setState({
        isHot:  1,
        cont:444
    })
    this.setState({
    	isHot: this.state.isHot + 1

    })
    this.setState({
        isHot:  888,
        cont:888
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的最后会输出：isHot是888，cont是888</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code> dem = () =&gt;{
                
                this.setState({
                    isHot: this.state.isHot + 1,
                    
                })
                this.setState({
                    isHot: this.state.isHot + 1,
                    
                })
                this.setState({
                    isHot: this.state.isHot + 888
                })
            }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始isHot为10，最后isHot输出为898，也就是前面两个都没有执行。</p><p>**注意！！这是异步更新才有的，如果同步更新，每一次都会调用render，这样每一次更新都会 **</p><p><strong>简化版本：</strong></p><p>1.state的赋值可以不再构造函数中进行</p><p>2.使用了箭头函数，将this进行了改变</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;body&gt;
    &lt;!-- 准备好容器 --&gt;
    &lt;div id=&quot;test&quot;&gt;
        
    &lt;/div&gt;
&lt;/body&gt;
&lt;!-- 引入依赖 ,引入的时候，必须就按照这个步骤--&gt;
&lt;script src=&quot;../js/react.development.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../js/react-dom.development.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;

&lt;script src=&quot;../js/babel.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/babel&quot;&gt;
        class St extends React.Component{
            //可以直接对其进行赋值
            state = {isHot:true};
            render(){ //这个This也是实例对象
                return &lt;h1 onClick = {this.dem}&gt;今天天气很{this.state.isHot?&quot;炎热&quot;:&quot;凉爽&quot;}&lt;/h1&gt;    
                //或者使用{()=&gt;this.dem()也是可以的}
            }
            //箭头函数 [自定义方法---&gt;要用赋值语句的形式+箭头函数]
            dem = () =&gt;{
                console.log(this);
                const state =  this.state.isHot;
                this.setState({isHot:!state});
            }
        }
        ReactDOM.render(&lt;St /&gt;,document.getElementById(&quot;test&quot;));       
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要在调用方法的时候传递参数，有两个方法：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;button onClick={(e) =&gt; this.deleteRow(id, e)}&gt;Delete Row&lt;/button&gt;
&lt;button onClick={this.deleteRow.bind(this, id)}&gt;Delete Row&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,80),f={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",target:"_blank",rel:"noopener noreferrer"},R={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"Function.prototype.bind",-1),D=t(`<p>在这两种情况下，React 的事件对象 <code>e</code> 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 <code>bind</code> 的方式，事件对象以及更多的参数将会被隐式的进行传递。</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><p>Props主要用来传递数据，比如组件之间进行传值</p><p>基本使用：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;body&gt;
    &lt;div id = &quot;div&quot;&gt;

    &lt;/div&gt;

&lt;/body&gt;
&lt;script type=&quot;text/babel&quot;&gt;
    class Person extends React.Component{
        render(){
            return (
                &lt;ul&gt;
                    //接受数据并显示
                    &lt;li&gt;{this.props.name}&lt;/li&gt;
                    &lt;li&gt;{this.props.age}&lt;/li&gt;
                    &lt;li&gt;{this.props.sex}&lt;/li&gt;
                &lt;/ul&gt;
            )
        }
    }
    //传递数据
    ReactDOM.render(&lt;Person name=&quot;tom&quot; age = &quot;41&quot; sex=&quot;男&quot;/&gt;,document.getElementById(&quot;div&quot;));
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果传递的数据是一个对象，可以更加简便的使用</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;script type=&quot;text/babel&quot;&gt;
    class Person extends React.Component{
        render(){
            return (
                &lt;ul&gt;
                    &lt;li&gt;{this.props.name}&lt;/li&gt;
                    &lt;li&gt;{this.props.age}&lt;/li&gt;
                    &lt;li&gt;{this.props.sex}&lt;/li&gt;
                &lt;/ul&gt;
            )
        }
    }
    const p = {name:&quot;张三&quot;,age:&quot;18&quot;,sex:&quot;女&quot;}
   ReactDOM.render(&lt;Person {...p}/&gt;,document.getElementById(&quot;div&quot;));
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>... 这个符号恐怕都不陌生，这个是一个展开运算符，主要用来展开数组，如下面这个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">,</span><span class="token operator">...</span>arr1<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//arr2 = [1,2,,3,4,5,6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是他还有其他的用法：</p><p>1.复制一个对象给另一个对象{...对象名}。此时这两个对象并没有什么联系了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">&quot;18&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&quot;女&quot;</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>p1<span class="token punctuation">}</span><span class="token punctuation">;</span>
p1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;sss&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span>  <span class="token comment">//{name:&quot;张三&quot;,age:&quot;18&quot;,sex:&quot;女&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.在复制的时候，合并其中的属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">&quot;18&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&quot;女&quot;</span><span class="token punctuation">}</span>
 <span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>p1<span class="token punctuation">,</span><span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&quot;111&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">hua</span><span class="token operator">:</span><span class="token string">&quot;ss&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
 p1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;sss&quot;</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span>  <span class="token comment">//{name: &quot;111&quot;, age: &quot;18&quot;, sex: &quot;女&quot;,hua:&quot;ss&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意！！</strong> <strong>{...P}并不能展开一个对象</strong></p><p><strong>props传递一个对象，是因为babel+react使得{..p}可以展开对象，但是只有在标签中才能使用</strong></p><p><strong>对于props限制</strong></p><p>很多时候都想要传递的参数进行相应的限制，比如：限制传递参数的类型，参数的默认值等等</p><p>react对此提供了相应的解决方法：</p><ul><li>propTypes:类型检查，还可以限制不能为空</li><li>defaultProps：默认值</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;script type=&quot;text/babel&quot;&gt;

    
    class Person extends React.Component{
        render(){
            //props是只读的
            return (
                &lt;ul&gt;
                    &lt;li&gt;{this.props.name}&lt;/li&gt;
                    &lt;li&gt;{this.props.age}&lt;/li&gt;
                    &lt;li&gt;{this.props.sex}&lt;/li&gt;
                &lt;/ul&gt;
            )
        }
        //对组件的属性对其进行限制
        static propTypes = {
            name:PropTypes.string.isRequired, //限定name是string类型，并且必须要传递
            sex:PropTypes.string,  //限定sex是string类型
            speak:PropTypes.func   //限定speak是function类型
        }
        //指定默认的标签属性
        static defaultProps = {
            sex:&quot;不男不女&quot;,
            age:18
        }   
        
    }
    //在js中可以使用{...p}来复制一个对象，但是这个地方并不是复制对象，而是babel+react通过展开运算符，展开了一个对象
    //但是只能在标签中进行使用
    //const p = {name:&quot;张三&quot;,age:&quot;18&quot;,sex:&quot;女&quot;}   {14}就代表的是数值
    //ReactDOM.render(&lt;Person {...p}/&gt;,document.getElementById(&quot;div&quot;));
    ReactDOM.render(&lt;Person name=&quot;sss&quot; age = {14} speak=&quot;8&quot;/&gt;,document.getElementById(&quot;div&quot;));
    

    function speak(){
        console.log(&quot;这个是一个函数&quot;)
    }

&lt;/script&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数式组件的使用</strong>：</p><p>函数在使用props的时候，是作为参数进行使用的(props)；</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>function Person(props){
          return (
                &lt;ul&gt;
                    &lt;li&gt;{props.name}&lt;/li&gt;
                    &lt;li&gt;{props.age}&lt;/li&gt;
                    &lt;li&gt;{props.sex}&lt;/li&gt;
                &lt;/ul&gt;
            )
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2><p>Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。</p><p>Refs主要提供了三种方式：</p><p><strong>1.字符串形式</strong></p><p>在想要获取到一个DOM节点，可以直接在这个节点上添加ref属性。利用该属性进行获取该节点的值。</p><p>案例：给需要的节点添加ref属性，此时该实例对象的refs上就会有这个值。就可以利用实例对象的refs获取已经添加节点的值</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;input ref=&quot;dian&quot; type=&quot;text&quot; placeholder=&quot;点击弹出&quot; /&gt;

 inputBlur = () =&gt;{
            alert(this.refs.shiqu.value);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.回调形式</strong></p><p>回调形式会在ref属性中添加一个回调函数。将该DOM作为参数传递过去。</p><p>如：ref里面就是一个回调函数，self就是该input标签。然后在将该DOM元素赋值给实例对象中的一个属性</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;input ref={self =&gt;{ this.dian = self;console.log(self)}}  placeholder=&quot;点击弹出&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以将函数提取出来，在ref中进行调用</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>isRef = (self) =&gt;{
            this.dian = self;
            console.log(self)
        }

&lt;input ref={this.isRef} type=&quot;text&quot; placeholder=&quot;点击弹出&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.API形式</strong></p><p>React其实已经给我们提供了一个相应的API，他会自动的将该DOM元素放入实例对象中</p><p>如下：依旧先在DOM元素中添加一个ref元素</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>{/*&lt;input ref={this.容器名称} type=&quot;text&quot; placeholder=&quot;点击弹出&quot; /&gt;*/}
&lt;input ref={this.MyRef} type=&quot;text&quot; placeholder=&quot;点击弹出&quot; /&gt;
&lt;input ref={this.MyRef1} type=&quot;text&quot; placeholder=&quot;点击弹出&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过API，创建React的容器，相当于省略了回调的中间环节。但是这个容器是专门专用的，所以每一个ref都需要创建这个。该API会将DOM元素赋值给实例对象的名称为容器名称的属性的current【这个current是固定的】</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>{/*容器名称 = React.createRef()*/}
MyRef = React.createRef();
MyRef1 = React.createRef();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以使用了</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>btnOnClick = () =&gt;{
    //创建之后，将自身节点，传入current中
    console.log(this.MyRef.current.value);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>官方提示我们不要过度的使用ref，如果发生时间的元素刚好是需要操作的元素，就可以使用事件去替代。</strong></p><h1 id="react事件" tabindex="-1"><a class="header-anchor" href="#react事件" aria-hidden="true">#</a> React事件</h1><p>React的事件是通过onXxx属性指定事件处理函数</p><p>​ React使用的都是自定义的时间，而不是原生的事件</p><p>​ React中的事件是通过事件委托方式处理的</p><p>​ 事件中必须返回的是函数</p><p>​ 通过event.target得到发生事件的Dom元素对象</p><p>比如：</p><p>先声明一个事件，然后在根据事件创建相应的函数，根据事件的event参数，将DOM元素获取到。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;input onChange={this.saveName} type = &quot;text&quot; name =&quot;username&quot;/&gt;

saveName = (event) =&gt;{
            this.setState({name:event.target.value});
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>受控和非受控组件</strong></p><p>先来说说受控组件：</p><p>使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>saveName = (event) =&gt;{
    this.setState({name:event.target.value});
}

savePwd = (event) =&gt; {
    this.setState({pwd:event.target.value});
}

render() {
    return (
        &lt;form action=&quot;http://www.baidu.com&quot; onSubmit={this.login}&gt;
            用户名：&lt;input value={this.state.name} onChange={this.saveName} type = &quot;text&quot; /&gt;
            密码&lt;input value={this.state.pwd} onChange={this.savePwd} type = &quot;password&quot;/&gt;
            &lt;button&gt;登录&lt;/button&gt;
        &lt;/form&gt;
    )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于在表单元素上设置了 <code>value</code> 属性，因此显示的值将始终为 <code>this.state.value</code>，这使得 React 的 state 成为唯一数据源。由于 <code>onchange</code> 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。</p><p>对于受控组件来说，输入的值始终由 React 的 state 驱动。</p><p>非受控组件：</p><p>非受控组件其实就是表单元素的值不会更新state。输入数据都是现用现取的。</p><p>如下：下面并没有使用state来控制属性，使用的是事件来控制表单的属性值。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Login extends React.Component{

    login = (event) =&gt;{
        event.preventDefault(); //阻止表单提交
            console.log(this.name.value);
            console.log(this.pwd.value);
        }
        render() {
            return (
                &lt;form action=&quot;http://www.baidu.com&quot; onSubmit={this.login}&gt;
                用户名：&lt;input ref = {self =&gt; this.name =self } type = &quot;text&quot; name =&quot;username&quot;/&gt;
                密码：&lt;input ref = {self =&gt; this.pwd =self } type = &quot;password&quot; name =&quot;password&quot;/&gt;
                &lt;button&gt;登录&lt;/button&gt;
                &lt;/form&gt;
            )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>高级函数</strong></p><p>1.如果函数的参数是函数</p><p>2.如果函数返回一个函数</p><p><strong>函数的珂里化</strong></p><p>通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式</p><p>如下，我们将上面的案例简化，创建高级函数：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code> class Login extends React.Component{
 
        state = {name:&quot;&quot;,pwd:&quot;&quot;};
		
		//返回一个函数
        saveType = (type) =&gt;{
            return (event) =&gt; {
                this.setState({[type]:event.target.value});
            }
        }

        //因为事件中必须是一个函数，所以返回的也是一个函数，这样就符合规范了
        render() {
            return (
                &lt;form&gt;
      				&lt;input onChange = {this.saveType(&#39;name&#39;)} type = &quot;text&quot;/&gt;
                    &lt;button&gt;登录&lt;/button&gt;
                &lt;/form&gt;
            )
        }
    }

    ReactDOM.render(&lt;Login /&gt;,document.getElementById(&quot;div&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h1><h2 id="旧" tabindex="-1"><a class="header-anchor" href="#旧" aria-hidden="true">#</a> （旧）</h2><p>组件从创建到死亡，会经过一些特定的阶段</p><p>​ React组件中包含一系列钩子函数{生命周期回调函数}，会在特定的时刻调用</p><p>​ 我们在定义组件的时候，会在特定的声明周期回调函数中，做特定的工作</p><p>如下图是旧生命周期的结构图：</p><p>我们通过一个案例更详细的了解这个生命周期：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code> class A extends React.Component{

        constructor(props){
            console.log(&quot;A --- constructor&quot;)
            super(props);
            this.state = {num:1}
        }

        add = () =&gt; {
            let {num} = this.state;
            this.setState({num:num+1});
            //强制更新
            //this.forceUpdate();
        }

       render(){
           console.log(&quot;A --- render&quot;);
            return (
                &lt;div&gt;
                    &lt;h1&gt;这个是第{this.state.num}个&lt;/h1&gt;
                    &lt;B name = {this.state.num}/&gt;
                    &lt;button onClick = {this.add}&gt;点击加一&lt;/button&gt;
                &lt;/div&gt;
            )
       }

       //在render之前执行
       componentWillMount(){
            console.log(&quot;A --- componentWillMount&quot;);
       }

       //在render之后执行
       componentDidMount(){
        console.log(&quot;A --- componenetDidMount&quot;);
       }

       //更新操作 setState之后执行，判断是否可以更新（true可以，false不可以）
       shouldComponentUpdate(){
            console.log(&quot;A --- shouldComponentUpdate&quot;);
            return true;
       }
       // 组件将要更新之前
       componentWillUpdate(){
            console.log(&quot;A --- componentWillUpdate&quot;);
       }
       //组件更新之后，该函数可以接受相应的参数
       componentDidUpdate(){
            console.log(&quot;A --- componentDidUpdate&quot;);
       }

       //卸载组件之后
       componentWillUnmonut(){
            console.log(&quot;A --- componentWillUnmonut&quot;);
       }
     
   }
   class B extends React.Component{
       render(){
           return(   
                &lt;div&gt;
                    &lt;h1&gt;这个是B组件,传递过来的是：{this.props.name}&lt;/h1&gt;
                &lt;/div&gt;
           )
       }
       //父组件进行了更新，子组件先执行这个【注意，第一次传递数据的时候，并不执行】
       componentWillReceiveProps(){
        console.log(&quot;A --- componentWillReceiveProps&quot;);
       }
   }
    ReactDOM.render(&lt;A   /&gt;,document.getElementById(&quot;div&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在控制台看一下：</p><p>当我们刚刚打开控制台的时候，组件第一次加载：</p><p>当我们点击按钮更新sate的时候：</p><h2 id="新" tabindex="-1"><a class="header-anchor" href="#新" aria-hidden="true">#</a> （新）</h2><p>在最新的react版本中，有些生命周期钩子被抛弃了，在官网中是这样说的：</p><p>我们得到最重要的经验是，过时的组件生命周期往往会带来不安全的编码实践，具体函数如下：</p><ul><li><code>componentWillMount</code></li><li><code>componentWillReceiveProps</code></li><li><code>componentWillUpdate</code></li></ul><p>这些生命周期方法经常被误解和滥用；此外，我们预计，在异步渲染中，它们潜在的误用问题可能更大。我们将在即将发布的版本中为这些生命周期添加 “UNSAFE_” 前缀。（这里的 “unsafe” 不是指安全性，而是表示使用这些生命周期的代码在 React 的未来版本中更有可能出现 bug，尤其是在启用异步渲染之后。）</p><p>由此可见，新版本中并不推荐持有这三个函数，取而代之的是带有UNSAFE_ 前缀的三个函数，比如: UNSAFE_ componentWillMount。即便如此，其实React官方还是不推荐大家去使用，在以后版本中有可能会去除这几个函数。</p><p>如下图是新的生命周期：</p><p>从图上可以看出，新生命周期和旧生命周期的区别主要有：</p><p>1.抛弃了上面所说的三个钩子函数【其实还可以使用】</p><p>2.新添加了两个钩子函数</p><p>现在重点说一下，新添加的钩子函数</p><p><strong>static getDerivedStateFromProps(props, state)</strong></p><p>首先，该函数会调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用；该函数必须是静态的；给组件传递的数据（props）以及组件状态（state），会作为参数到这个函数中；该函数也必须有返回值，返回一个Null或者state对象。因为初始化和后续更新都会执行这个方法，因此在这个方法返回state对象，就相当于将原来的state进行了覆盖，所以倒是修改状态不起作用。</p><p><strong>getSnapshotBeforeUpdate(prevProps, prevState)</strong></p><p><code>getSnapshotBeforeUpdate()</code> 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递<code>componentDidUpdate()</code>。</p><blockquote><p>补充一下：componentDidUpdate(prevProps, prevState, snapshot)</p><p>该生命周期函数，可以有三个参数：原始传过来的参数，最开始的状态，getSnapshotBeforeUpdate传递的值</p><p>关于更多关于生命周期的介绍，可以参考官方文档：</p><p>https://zh-hans.reactjs.org/docs/react-component.html#render</p></blockquote><p>以上就是两个新添加的钩子函数，但是在现实开发中可能并不常用这两个。</p><p>**案例：在一个区域内，定时的输出以行话，如果内容大小超过了区域大小，就出现滚动条，但是内容不进行移动 **</p><p>如上面的动图：区域内部的内容展现没有变化，但是可以看见滚动条在变化，也就是说上面依旧有内容在输出，只不过不在这个区域内部展现。</p><p><strong>实现：</strong></p><p>【一些css样式，就不在这展示了】</p><p>1.首先我们先实现定时输出内容</p><p>我们可以使用state状态，改变新闻后面的值，但是为了同时显示这些内容，我们应该为state的属性定义一个数组。并在创建组件之后开启一个定时器，不断的进行更新state。更新渲染组件</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code> class New extends React.Component{

        state = {num:[]};

        //在组件创建之后,开启一个定时任务
        componentDidMount(){
            setInterval(()=&gt;{
                let {num} = this.state;
                const news = (num.length+1);
                this.setState({num:[news,...num]});
            },2000);
        }

        render(){
            return (

                &lt;div ref = &quot;list&quot; className = &quot;list&quot;&gt;{
                    this.state.num.map((n,index)=&gt;{
                    return &lt;div className=&quot;news&quot; key={index} &gt;新闻{n}&lt;/div&gt;
                    })
                }&lt;/div&gt;
            )
        }
  }
  ReactDOM.render(&lt;New /&gt;,document.getElementById(&quot;div&quot;));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.接下来就是控制滚动条了</p><p>我们在组件渲染到DOM之前获取组件的高度，然后用组件渲染之后的高度减去之前的高度就是一条新的内容的高度，这样在不断的累加到滚动条位置上。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>getSnapshotBeforeUpdate(){
	return this.refs.list.scrollHeight;
}

componentDidUpdate(preProps,preState,height){
	this.refs.list.scrollTop += (this.refs.list.scrollHeight - height);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就实现了这个功能。</p><h1 id="diff算法" tabindex="-1"><a class="header-anchor" href="#diff算法" aria-hidden="true">#</a> Diff算法</h1><p>提到这个算法，就必须说一下关于Key的事情了。</p><p>其实每个组件中的每个标签都会有一个key,只不过有的必须显示的指定，有的可以隐藏。</p><p>如果生成的render出来后就不会改变里面的内容，那么你不需要指定key（不指定key时，React也会生成一个默认的标识）,或者将index作为key，只要key不重复即可。</p><p>但是如果你的标签是动态的，是有可能刷新的，就必须显示的指定key。必须上面案使用map进行便利的时候就必须指定Key:</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>this.state.num.map((n,index)=&gt;{
	return &lt;div className=&quot;news&quot; key={index} &gt;新闻{n}&lt;/div&gt;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个地方虽然显示的指定了key，但是<strong>官网并不推荐使用Index作为Key去使用</strong>；</p><p>这样会很有可能会有效率上的问题</p><p>举个例子：</p><p>在一个组件中，我们先创建了两个对象，通过循环的方式放入&lt; li&gt;标签中，此时key使用的是index。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>person:[
    {id:1,name:&quot;张三&quot;,age:18},
    {id:2,name:&quot;李四&quot;,age:19}
]

this.state.person.map((preson,index)=&gt;{
  return  &lt;li key = {index}&gt;{preson.name}&lt;/li&gt;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图展现在页面中：</p><p>此时，我们想在点击按钮之后动态的添加一个对象，并且放入到li标签中，在重新渲染到页面中。</p><p>我们通过修改State来控制对象的添加。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;button onClick={this.addObject}&gt;点击增加对象&lt;/button&gt;
addObject = () =&gt;{
    let {person} = this.state;
    const p = {id:(person.length+1),name:&quot;王五&quot;,age:20};
    this.setState({person:[p,...person]});
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下动图所示：</p><p>这样看，虽然完成了功能。但是其实存在效率上的问题， 我们先来看一下两个前后组件状态的变化：</p><p>我们发现，组件第一个变成了王五，张三和李四都移下去了。因为我们使用Index作为Key，这三个标签的key也就发生了改变【张三原本的key是0，现在变成了1，李四的key原本是1，现在变成了2，王五变成了0】在组件更新状态重新渲染的时候，就出现了问题：</p><p>因为react是通过key来比较组件标签是否一致的，拿这个案例来说：</p><p>首先，状态更新导致组件标签更新，react根据Key，判断旧的虚拟DOM和新的虚拟DOM是否一致</p><p>key = 0 的时候 旧的虚拟DOM 内容是张三 新的虚拟DOM为王五 ，react认为内容改变，从而重新创建新的真实DOM.</p><p>key = 1 的时候 旧的虚拟DOM 内容是李四，新的虚拟DOM为张三，react认为内容改变，从而重新创建新的真实DOM</p><p>key = 2 的时候 旧的虚拟DOM没有，创建新的真实DOM</p><p>这样原本有两个虚拟DOM可以复用，但都没有进行复用，完完全全的都是新创建的；这就导致效率极大的降低。</p><p>其实这是因为我们将新创建的对象放在了首位，如果放在最后其实是没有问题的，但是因为官方并不推荐使用Index作为key值，我们推荐使用id作为key值。从而完全避免这样的情况。</p><p><strong>用index作为key可能会引发的问题:</strong></p><p>1。若对数据进行:逆序添加、逆序删除等破坏顺序操作:</p><p>​ 会产生没有必要的真实DOM更新 界面效果没问题,但效率低。</p><p>2．如果结构中还包含输入类的DOM:</p><p>​ 会产生错误DOM更新 界面有问题。</p><p>3，注意! 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。</p><p><strong>开发如何选择key?</strong></p><p>最好使用每一条数据的唯一标识作为key 比如id，手机号，身份证号</p><p>如果确定只是简单的展示数据，用Index也是可以的</p><p><strong>而这个判断key的比较规则就是Diff算法</strong></p><p>Diff算法其实就是react生成的新虚拟DOM和以前的旧虚拟DOM的比较规则：</p><ul><li><p>如果旧的虚拟DOM中找到了与新虚拟DOM相同的key:</p><ul><li>如果内容没有变化，就直接只用之前旧的真实DOM</li><li>如果内容发生了变化，就生成新的真实DOM</li></ul></li><li><p>如果旧的虚拟DOM中没有找到了与新虚拟DOM相同的key:</p><ul><li>根据数据创建新的真实的DOM,随后渲染到页面上</li></ul></li></ul><h1 id="react脚手架" tabindex="-1"><a class="header-anchor" href="#react脚手架" aria-hidden="true">#</a> React脚手架</h1><p>react提供了一个用于创建react项目的脚手架库：create-react-app</p><h2 id="创建项目并启动" tabindex="-1"><a class="header-anchor" href="#创建项目并启动" aria-hidden="true">#</a> 创建项目并启动</h2><p>1.全局安装：npm i -g create-react-app</p><p>2.创建项目：create-react-app 项目名</p><p>在这一步，有可能会出现：</p><p>这样可以直接使用：npx create-react-app 项目名</p><p>3.等待下载完成，进入项目文件夹，运行一下</p><p>比如，我这的项目名称是hello,就先进入hello文件夹</p><p>cd hello</p><p>npm start //启动这个项目</p><p>这个时会自动的打开浏览器，展现这个项目：</p><h2 id="项目的目录结构" tabindex="-1"><a class="header-anchor" href="#项目的目录结构" aria-hidden="true">#</a> 项目的目录结构</h2><p>我们先来看一下public这个目录下面的结构：</p><p>这里面最主要的还是这个Index.html文件：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot; /&gt;
    &lt;!--%PUBLIC_URL%表示public文件夹的路径--&gt;
    &lt;link rel=&quot;icon&quot; href=&quot;%PUBLIC_URL%/favicon.ico&quot; /&gt;
    &lt;!--用于开启理想视口，用于移动端页面的适配--&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; /&gt;
    &lt;!--用于配置浏览器地址栏的颜色（仅支持安卓手机浏览器）--&gt;
    &lt;meta name=&quot;theme-color&quot; content=&quot;#000000&quot; /&gt;
    &lt;!--描述网页信息的--&gt;
    &lt;meta
      name=&quot;description&quot;
      content=&quot;Web site created using create-react-app&quot;
    /&gt;
    &lt;!--用于指定网页添加到手机主屏幕后的图标（仅仅支持ios）--&gt;
    &lt;link rel=&quot;apple-touch-icon&quot; href=&quot;%PUBLIC_URL%/logo192.png&quot; /&gt;
 
    &lt;!--应用加壳时候的配置文件 --&gt;
    &lt;link rel=&quot;manifest&quot; href=&quot;%PUBLIC_URL%/manifest.json&quot; /&gt;
  
    &lt;title&gt;React App&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- 浏览器不支持JS的运行的时候展现 --&gt;
    &lt;noscript&gt;You need to enable JavaScript to run this app.&lt;/noscript&gt;
    &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src文件：</p><p>这里面其实最主要的就是App.js以及index.js，一个是组件，一个是将组件渲染到页面中的。</p><h2 id="第一个脚手架应用" tabindex="-1"><a class="header-anchor" href="#第一个脚手架应用" aria-hidden="true">#</a> 第一个脚手架应用</h2><p>1.我们保持public中的Index.html不变</p><p>2.修改src下面的APP.js以及index.js文件</p><p>App.js: 【注意：创建好的组件一定要暴露出去】</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>//创建外壳组件APP
import React from &#39;react&#39;

class App extends React.Component{
    render(){
        return (
            &lt;div&gt;Hello word&lt;/div&gt;
        )
    }
}

export default App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js: 【主要的作用其实就是将App这个组件渲染到页面上】</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>//引入核心库
import React from &#39;react&#39;
import ReactDOM from &#39;react-dom&#39;
//引入组件
import App from &#39;./App&#39;

ReactDOM.render(&lt;App /&gt;,document.getElementById(&quot;root&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样在重新启动应用，就成功了。</p><p>我们也不建议这样直接将内容放入App组件中，尽量还是用内部组件。</p><p>我们在顶一个Hello组件：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React,{Componet} from &#39;react&#39;

export default class Hello extends Componet{
    render() {
        return (
            &lt;h1&gt;Hello&lt;/h1&gt;
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在App组件中，进行使用</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class App extends Component{
    render(){
        return (
            &lt;div&gt;
                &lt;Hello /&gt;
            &lt;/div&gt;
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的结果和前面是一样的。</p><p>但是由于普通的Js和组件都是js，所一最好组件使用jsx去展示。</p><h2 id="样式冲突" tabindex="-1"><a class="header-anchor" href="#样式冲突" aria-hidden="true">#</a> 样式冲突</h2><p>当组件逐渐增多起来的时候，我们发现，组件的样式也是越来越丰富，这样就很有可能产生两个组件中样式名称有可能会冲突，这样会根据引入App这个组件的先后顺序，后面的会覆盖前面的，</p><p>为了避免这样的样式冲突，我们采用下面的形式：</p><p>1.将css文件名修改： hello.css --- &gt;hello.module.css</p><p>2.引入并使用的时候改变方式：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React,{Component}from &#39;react&#39;
import hello from &#39;./hello.module.css&#39;  //引入的时候给一个名称

export default class Hello extends Component{
    render() {
        return (
            &lt;h1 className={hello.title}&gt;Hello&lt;/h1&gt;   //通过大括号进行调用
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="功能界面的组件化编码流程" tabindex="-1"><a class="header-anchor" href="#功能界面的组件化编码流程" aria-hidden="true">#</a> 功能界面的组件化编码流程</h1><p>1.拆分组件:拆分界面，抽取组件</p><p>2.实现静态组件</p><p>3.实现动态组件</p><ul><li>动态的显示初始化数据 <ul><li>数据类型</li><li>数据名称</li><li>保存在哪个组件</li></ul></li><li>交互</li></ul><p><strong>注意事项：</strong></p><p>1.拆分组件、实现静态组件。注意className、style的写法</p><p>2.动态初始化列表，如何确定将数据放在哪个组件的state中？</p><ul><li>某个组件使用：放在自身的state中</li><li>某些组件使用：放在他们共同的父组件中【状态提升】</li></ul><p>3.关于父子组件之间的通信</p><ul><li>父组件给子组件传递数据：通过props传递</li><li>子组件给父组件传递数据：通过props传递，要求父组件提前给子组件传递一个函数</li></ul><p>4.注意defaultChecked 和checked区别，defalutChecked只是在初始化的时候执行一次，checked没有这个限制，但是必须添加onChange方法类似的还有：defaultValue 和value</p><p>5.状态在哪里，操作状态的方法就在哪里</p><h1 id="react-ajax" tabindex="-1"><a class="header-anchor" href="#react-ajax" aria-hidden="true">#</a> react ajax</h1><p>React本身只关注与页面，并不包含发送ajax请求的代码，所以一般都是集成第三方的一些库，或者自己进行封装。</p><p>推荐使用axios。</p><p>在使用的过程中很有可能会出现跨域的问题，这样就应该配置代理。</p><p>所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）， 当一个请求url的<strong>协议、域名、端口</strong>三者之间任意一个与当前页面url不同即为跨域 。</p><p>那么react通过代理解决跨域问题呢</p><p><strong>方法一</strong></p><blockquote><p>在package.json中追加如下配置</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;proxy&quot;</span><span class="token operator">:</span><span class="token string">&quot;请求的地址&quot;</span>      <span class="token property">&quot;proxy&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://localhost:5000&quot;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明：</p><ol><li>优点：配置简单，前端请求资源时可以不加任何前缀。</li><li>缺点：不能配置多个代理。</li><li>工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）</li></ol><p><strong>方法二</strong></p><ol><li><p>第一步：创建代理配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在src下创建配置文件：src/setupProxy.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>编写setupProxy.js配置具体代理规则：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http-proxy-middleware&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token string">&#39;/api1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>  <span class="token comment">//api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5000&#39;</span><span class="token punctuation">,</span> <span class="token comment">//配置转发目标地址(能返回数据的服务器地址)</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//控制服务器接收到的请求头中host字段的值</span>
      <span class="token comment">/*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;^/api1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span> <span class="token comment">//去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token string">&#39;/api2&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> 
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5001&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;^/api2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>说明：</p><ol><li>优点：可以配置多个代理，可以灵活的控制请求是否走代理。</li><li>缺点：配置繁琐，前端请求资源时必须加前缀。</li></ol><h1 id="兄弟之间进行通信" tabindex="-1"><a class="header-anchor" href="#兄弟之间进行通信" aria-hidden="true">#</a> 兄弟之间进行通信</h1><p>这就要借助消息订阅和发布机制。</p><p>举个例子来说就是张三想要跟李四进行通信，张三就需要订阅一个消息【比如A消息】，李四想要给张三数据，就必须发布一个A消息，在发布的同时将数据放入消息中，因为张三订阅了名称为A的消息，此时就能接受到李四发布的消息，从而获取到数据。</p><p>这就有点类似于看报纸，甲想要知道每天都发生什么事情，于是订阅了每天日报，乙每天都会发布这个每天日报，因为甲订阅了，于是乙就会每天就给甲方推送，甲方从而获取数据。</p><p><strong>在消息订阅和发布中，我们可以使用PubSubJs进行通信：</strong></p><p>引入PubSubJs:</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import PubSub from &#39;pubsub-js&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>订阅消息：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>PubSub.subscribe(&quot;getSate&quot;,(_,data)=&gt;{
            console.log(data)
        })
PubSub.subscribe(&quot;订阅的消息名称&quot;,回调函数，第一个参数是消息名称，可以使用_来占位，第二个是传递的数据
        })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发布消息：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>PubSub.publish(&quot;getSate&quot;,{isFrist:false,isLoad:true})
PubSub.publish(&quot;订阅的消息名称&quot;,传递的数据)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="async和await" tabindex="-1"><a class="header-anchor" href="#async和await" aria-hidden="true">#</a> async和await</h1><p><strong>async:</strong></p><p>该关键字是放在函数之前的，使得函数成为一个异步函数，他最大的特点就是将函数回封装成Promise，也就是被他修饰的函数的返回值都是Promise对象。而这个Promise对象的状态则是由函数执行的返回值决定的。</p><p>如果返回的是一个非promise对象，该函数将返回一个成功的Promise，成功的值则是返回的值；</p><p>如果返回的是一个promise对象，则该函数返回的就是该promise对应的状态。</p><p><strong>await</strong></p><p>await右边是一个表达式，如果该表达式返回的是一个Promise对象，则左边接收的结果就是该Promise对象成功的结果，如果该Promise对象失败了，就必须使用try..catch来捕获。如果该表达式返回的是是一个不是promise对象，则左边接受的就是该表达式的返回值。</p>`,233),j={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await",target:"_blank",rel:"noopener noreferrer"},S=n("strong",null,"await 只在异步函数里面才起作用",-1),w=t(`<p>举个例子：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code> f1 = () =&gt;{
        return new Promise((resolve,reject)=&gt;{
            // resolve(1);
            reject(&quot;错误&quot;)
        })
    }

    async function test(){
        try{
           const p =  await f1();
           console.log(p)
        }catch(error){
            console.error(error)
        }
    }
    test();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> fetch</h1><p>以前发送请求，使用ajax或者axios，现在还可以使用fetch。这个是window自带的，和xhr是一个级别的。</p><p>可以查看这个文章，写的真的不错：</p>`,5),O={href:"http://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html",target:"_blank",rel:"noopener noreferrer"},_=t('<h1 id="react路由" tabindex="-1"><a class="header-anchor" href="#react路由" aria-hidden="true">#</a> React路由</h1><h2 id="spa" tabindex="-1"><a class="header-anchor" href="#spa" aria-hidden="true">#</a> SPA</h2><p>单页Web应用(single page web application，SPA)。整个应用只有一个完整的页面。</p><p>点击页面中的链接不会刷新页面，只会做页面的局部更新。</p><p>数据都需要通过ajax请求获取,并在前端异步展现</p><h2 id="什么是路由" tabindex="-1"><a class="header-anchor" href="#什么是路由" aria-hidden="true">#</a> 什么是路由</h2><p>一个路由其实就是一个映射关系（k:v）</p><p>key为路径，value可能是function 或者是 component</p><p><strong>后端路由：</strong></p><p>value是function，用来处理客户端提交的请求</p><p>注册路由：router.get(path,function(req,res))</p><p>工作过程：当node接收一个请求的时候，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应的数据</p><p><strong>前端路由：</strong></p><p>浏览器端路由，value是Component，用于展示页面内容</p><p>注册路由：&lt; Route path=&quot;/test&quot; component={Test}&gt;</p><p>工作过程：当浏览器的path变为/test的时候，当前路由组件就会变成Test组件</p><p><strong>前端路由的原理</strong></p><p>这个主要是依靠于history，也就是浏览器的历史记录。</p><p>浏览器上的记录其实就是一个栈，前进一次就是入栈，后退一次就是出栈。</p><p>并且历史记录上有一个监听的方法，可以时时刻刻监听记录的变化。从而判断是否改变路径</p>',20),H={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History",target:"_blank",rel:"noopener noreferrer"},P=t(`<h2 id="react-router-dom" tabindex="-1"><a class="header-anchor" href="#react-router-dom" aria-hidden="true">#</a> react-router-dom</h2><p>react的路由有三类：</p><p>web【主要适用于前端】,native【主要适用于本地】,anywhere【任何地方】</p><p>在这主要使用web也就是这个标题 react-router-dom</p><p><strong>基本的使用：</strong></p><p>导航中的a标签改写成Link标签</p><p>&lt; Link to=&quot;/路径&quot; &gt;xxx&lt; /Link&gt;</p><p>展示区写Route标签进行路径的匹配</p><p>&lt; Route path = &#39;/路径&#39; component={组件名称}&gt;</p><p>&lt; App&gt;最外侧包裹了一个&lt; BrowserRouter&gt;或者&lt; HashRouter&gt;</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;div className=&quot;list-group&quot;&gt;
    &lt;Link className=&quot;list-group-item&quot;  to=&quot;/about&quot;&gt;About&lt;/Link&gt;
    &lt;Link className=&quot;list-group-item&quot;  to=&quot;/home&quot;&gt;Home&lt;/Link&gt;
&lt;/div&gt;

&lt;div className=&quot;panel-body&quot;&gt;
    {/* 注册路由，也就是写对应的关系 */}
    &lt;Route path=&quot;/about&quot;component={About}/&gt;
    &lt;Route path=&quot;/home&quot;component={Home}/&gt;
&lt;/div&gt;

index.js:
ReactDOM.render(
    &lt;BrowserRouter&gt;
        &lt;App /&gt;
    &lt;/BrowserRouter&gt;
    ,document.getElementById(&quot;root&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么使用Link代替a标签之后，在页面上会是什么呢，我们发现其实页面上也是把link转化为了a标签</p><p><strong>路由组件以及一般组件</strong></p><p>1.写法不一样</p><p>一般组件：&lt; Demo&gt;</p><p>路由组件：&lt; Route path=&quot;/demo&quot; component ={Demo}/&gt;</p><p>2.存放的位置一般不同</p><p>一般组件：components</p><p>路由组件：pages</p><p>3.接收的内容【props】</p><p>一般组件：写组件标签的时候传递什么，就能收到什么</p><p>路由组件：接收到三个固定的属性【history,location,match】</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">history</span><span class="token operator">:</span>
    <span class="token literal-property property">go</span><span class="token operator">:</span> ƒ <span class="token function">go</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token literal-property property">goBack</span><span class="token operator">:</span> ƒ <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token literal-property property">goForward</span><span class="token operator">:</span> ƒ <span class="token function">goForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token literal-property property">push</span><span class="token operator">:</span> ƒ <span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
    <span class="token literal-property property">replace</span><span class="token operator">:</span> ƒ <span class="token function">replace</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
<span class="token literal-property property">location</span><span class="token operator">:</span>
    <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token keyword">undefined</span>

<span class="token literal-property property">match</span><span class="token operator">:</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>NavLink</strong></p><p>因为Link不能够改变标签体，因此只适合用于一些写死的标签。而如果想要有一些点击的效果，使用NavLink.</p><p>如下代码，就写了ctiveClassName，当点击的时候就会触发这个class的样式</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>{/*NavLink在点击的时候就会去找activeClassName=&quot;ss&quot;所指定的class的值，如果不添加默认是active
 这是因为Link相当于是把标签写死了，不能去改变什么。*/}

&lt;NavLink  ctiveClassName=&quot;ss&quot; className=&quot;list-group-item&quot;  to=&quot;/about&quot;&gt;About&lt;/NavLink&gt;
&lt;NavLink className=&quot;list-group-item&quot;  to=&quot;/home&quot;&gt;Home&lt;/NavLink&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是可能一个导航又很多标签，如果这样重复的写NavLink也会造成很多的重复性的代码问题。</p><p>因此可以自定义一个NavLink：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code> // 通过{...对象}的形式解析对象，相当于将对象中的属性全部展开
 //&lt;NavLink  to = {this.props.to} children = {this.props.children}/&gt;
&lt;NavLink className=&quot;list-group-item&quot; {...this.props}/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 在使用的时候：直接写每个标签中不一样的部分就行，比如路径和名称</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>{/*将NavLink进行封装，成为MyNavLink,通过props进行传参数，标签体内容props是特殊的一个属性，叫做children */}
&lt;MyNavLink to = &quot;/about&quot; &gt;About&lt;/MyNavLink&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式错误" tabindex="-1"><a class="header-anchor" href="#样式错误" aria-hidden="true">#</a> 样式错误</h2><p>拿上面的案例来说：</p><p>这里面会有一个样式：</p><p>此时，加载该样式的路径为：</p><p>但是在写路由的时候，有的时候就会出现多级目录，</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;MyNavLink to = &quot;/cyk/about&quot; &gt;About&lt;/MyNavLink&gt;

&lt;Route path=&quot;/cyk/about&quot;component={About}/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候就在刷新页面，就会出现问题：</p><p>样式因为路径问题加载失败，此时页面返回public下面的Index.html</p><p>解决这个问题，有三个方法：</p><p>1.样式加载使用绝对位置</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code> &lt;link href=&quot;/css/bootstrap.css&quot; rel=&quot;stylesheet&quot;&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.使用 %PUBLIC_URL%</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;link href=&quot;%PUBLIC_URL%/css/bootstrap.css&quot; rel=&quot;stylesheet&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.使用HashRouter</p><p>因为HashRouter会添加#，默认不会处理#后面的路径，所以也是可以解决的</p><h2 id="模糊匹配和精准匹配" tabindex="-1"><a class="header-anchor" href="#模糊匹配和精准匹配" aria-hidden="true">#</a> 模糊匹配和精准匹配</h2><p>react默认是开启模糊匹配的。</p><p>比如：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;MyNavLink to = &quot;/home/a/b&quot; &gt;Home&lt;/MyNavLink&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时该标签匹配的路由，分为三个部分 home a b；将会根据这个先后顺序匹配路由。</p><p>如下就可以匹配到相应的路由：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;Route path=&quot;/home&quot;component={Home}/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是如果是下面这个就会失败，也就是说他是根据路径一级一级查询的，可以包含前面那一部分，但并不是只包含部分就可以。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;Route path=&quot;/a&quot; component={Home}/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然也可以使用这个精确的匹配 exact={true}</p><p>如以下：这样就精确的匹配/home，则上面的/home/a/b就不行了</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;Route exact={true}  path=&quot;/home&quot; component={Home}/&gt;
或者
&lt;Route exact path=&quot;/home&quot; component={Home}/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h2 id="初始化路由" tabindex="-1"><a class="header-anchor" href="#初始化路由" aria-hidden="true">#</a> 初始化路由</h2><p>在配置好路由，最开始打开页面的时候，应该是不会匹配到任意一个组件。这个时候页面就显得极其不合适，此时应该默认的匹配到一个组件。</p><p>此时就需要使用Redirect进行默认匹配了。如下的代码就是默认匹配/home路径所到的组件</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;Switch&gt;
    &lt;Route path=&quot;/about&quot;component={About}/&gt;
    {/* exact={true}：开启严格匹配的模式，路径必须一致 */}
    &lt;Route   path=&quot;/home&quot; component={Home}/&gt;
    {/* Redirect:如果上面的都没有匹配到，就匹配到这个路径下面 */}
    &lt;Redirect  to = &quot;/home&quot;/&gt;
&lt;/Switch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就可以做到如下的效果：</p><p>简单来说就是在一个路由组件中又使用了一个路由，就形成了嵌套路由。</p><p>举个例子来说：</p><p>我们在home这个路由组件中又添加两个组件：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>APP.jsx:
&lt;Route   path=&quot;/home&quot; component={Home}/&gt;
Home.jsx:
&lt;div&gt;
    &lt;ul className=&quot;nav nav-tabs&quot;&gt;
    &lt;li&gt;
    	&lt;MyNavLink to = &quot;/home/news&quot;&gt;News&lt;/MyNavLink&gt;
    &lt;/li&gt;
    &lt;li&gt;
    	&lt;MyNavLink  to = &quot;/home/message&quot;&gt;Message&lt;/MyNavLink&gt;
    &lt;/li&gt;
    &lt;/ul&gt;
    
    &lt;Switch&gt;
        &lt;Route path = &quot;/home/news&quot; component={News} /&gt;
        &lt;Route path = &quot;/home/message&quot; component={Message} /&gt;
        &lt;Redirect to=&quot;/home/message&quot;/&gt;
    &lt;/Switch&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>react中路由的注册是有顺序的，因此在匹配的时候也是按照这个顺序进行的，因此会先匹配父组件中的路由</p><p>比如上面的 /home/news的路由处理过程：</p><p>1.因为父组件home的路由是先注册的，因此在匹配的时候先去找home的路由，也就是根据/home/news先模糊匹配到/home</p><p>2.在去Home组件里面去匹配相应的路由，从而找到了/home/news进行匹配，因此找到了News组件。</p><p>但是如果开启精确匹配，就会在第一步的时候卡住，这个时候就走不下去了。<strong>因此不要轻易的使用精确匹配</strong></p>`,74);function N(C,L){const e=l("ExternalLinkIcon");return p(),c("div",null,[n("blockquote",null,[r,n("p",null,[n("a",d,[s("尚硅谷React"),a(e)])])]),u,v,m,b,g,k,h,n("blockquote",null,[q,n("p",null,[n("a",y,[s("npm"),a(e)])])]),x,n("p",null,[s("上述两种方式是等价的，分别通过"),n("a",f,[s("箭头函数"),a(e)]),s("和 "),n("a",R,[M,a(e)]),s(" 来实现。")]),D,n("p",null,[s("当 "),n("a",j,[s("await"),a(e)]),s(" 关键字与异步函数一起使用时，它的真正优势就变得明显了 —— 事实上， "),S,s("。它可以放在任何异步的，基于 promise 的函数之前。它会暂停代码在该行上，直到 promise 完成，然后返回结果值。在暂停的同时，其他正在等待执行的代码就有机会执行了。")]),w,n("p",null,[n("a",O,[s("fetch"),a(e)])]),_,n("p",null,[n("a",H,[s("History"),a(e)])]),P])}const U=i(o,[["render",N],["__file","react.html.vue"]]);export{U as default};
