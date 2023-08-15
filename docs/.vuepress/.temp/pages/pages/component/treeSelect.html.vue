<template><div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>popover v<span class="token operator">-</span>model<span class="token operator">:</span>visible<span class="token operator">=</span><span class="token string">"visible"</span> placement<span class="token operator">=</span><span class="token string">"top"</span> <span class="token operator">:</span>width<span class="token operator">=</span><span class="token string">"350"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"tree-wrap"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>tree
          ref<span class="token operator">=</span><span class="token string">"treeRef"</span>
          show<span class="token operator">-</span>checkbox
          <span class="token operator">:</span>data<span class="token operator">=</span><span class="token string">"treeData"</span>
          <span class="token operator">:</span>props<span class="token operator">=</span><span class="token string">"defaultProps"</span>
          <span class="token operator">:</span>check<span class="token operator">-</span>strictly<span class="token operator">=</span><span class="token string">"checkStrictly"</span>
          <span class="token operator">:</span><span class="token keyword">default</span><span class="token operator">-</span>expand<span class="token operator">-</span>all<span class="token operator">=</span><span class="token string">"defaultExpandAll"</span>
          <span class="token operator">:</span>defaultProps<span class="token operator">=</span><span class="token string">"defaultProps"</span>
          @node<span class="token operator">-</span>click<span class="token operator">=</span><span class="token string">"handleNodeClick"</span>
          nodeKey<span class="token operator">=</span><span class="token string">"id"</span>
          <span class="token operator">:</span><span class="token keyword">default</span><span class="token operator">-</span>checked<span class="token operator">-</span>keys<span class="token operator">=</span><span class="token string">"defaultCheckedKeys"</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">"text-align: right; margin: 0"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button size<span class="token operator">=</span><span class="token string">"small"</span> text @click<span class="token operator">=</span><span class="token string">"visible = false"</span><span class="token operator">></span>取消<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button size<span class="token operator">=</span><span class="token string">"small"</span> type<span class="token operator">=</span><span class="token string">"primary"</span> @click<span class="token operator">=</span><span class="token string">"confirm"</span><span class="token operator">></span>确定<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>template #reference<span class="token operator">></span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>input
          v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"inputValue"</span>
          @click<span class="token operator">=</span><span class="token string">"openTreePopover"</span>
          placeholder<span class="token operator">=</span><span class="token string">"树形搜索"</span>
          readonly
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>popover<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> defineComponent<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">checkStrictly</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultExpandAll</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">"children"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"label"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> treeRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> options<span class="token punctuation">,</span> modelValue <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">interface</span> <span class="token class-name">Tree</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
      children<span class="token operator">?</span><span class="token operator">:</span> Tree<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> defaultCheckedKeys <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token function">setCheckedKeys</span><span class="token punctuation">(</span>modelValue<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">setCheckedKeys</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">keys</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      treeRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">setCheckedKeys</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> checkList <span class="token operator">=</span> <span class="token function">getCheckedNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      inputValue<span class="token punctuation">.</span>value <span class="token operator">=</span> checkList
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleNodeClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> Tree</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">openTreePopover</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token comment">// setCheckedKeys(modelValue.value);</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">confirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> checkList <span class="token operator">=</span> <span class="token function">getCheckedNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">emit</span><span class="token punctuation">(</span>
        <span class="token string">"update:modelValue"</span><span class="token punctuation">,</span>
        checkList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      inputValue<span class="token punctuation">.</span>value <span class="token operator">=</span> checkList
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">getCheckedNodes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> treeRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">getCheckedNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      treeRef<span class="token punctuation">,</span>
      visible<span class="token punctuation">,</span>
      inputValue<span class="token punctuation">,</span>
      defaultCheckedKeys<span class="token punctuation">,</span>
      <span class="token literal-property property">treeData</span><span class="token operator">:</span> options<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      handleNodeClick<span class="token punctuation">,</span>
      getCheckedNodes<span class="token punctuation">,</span>
      setCheckedKeys<span class="token punctuation">,</span>
      confirm<span class="token punctuation">,</span>
      openTreePopover<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span> scoped<span class="token operator">></span>
<span class="token punctuation">.</span>tree<span class="token operator">-</span>wrap <span class="token punctuation">{</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 220px <span class="token operator">!</span>important<span class="token punctuation">;</span>
  overflow<span class="token operator">-</span>y<span class="token operator">:</span> scroll <span class="token operator">!</span>important<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


