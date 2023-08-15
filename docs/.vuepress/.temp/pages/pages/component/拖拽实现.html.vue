<template><div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"right-domain"</span> ref<span class="token operator">=</span><span class="token string">"el"</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">"{ width: rightWidth + 'px' }"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"right-width-bar"</span> @mousedown<span class="token operator">=</span><span class="token string">"startDrag"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">const</span> _RestWidth <span class="token operator">=</span> <span class="token number">546</span> <span class="token operator">+</span> <span class="token number">260</span>
<span class="token keyword">const</span> ocm_right_width <span class="token operator">=</span> <span class="token string">'ocm_right_width'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">rightWidth</span><span class="token operator">:</span> <span class="token number">410</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> width <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>ocm_right_width<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rightWidth <span class="token operator">=</span> width <span class="token operator">||</span> <span class="token number">410</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">checkRightWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">checkRightWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rightWidth <span class="token operator">></span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">-</span> _RestWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>rightWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">-</span> _RestWidth
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">startDrag</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> startX <span class="token operator">=</span> event<span class="token punctuation">.</span>clientX
            <span class="token keyword">let</span> disX <span class="token operator">=</span> event<span class="token punctuation">.</span>clientX
            <span class="token keyword">let</span> initWidth <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rightWidth
            <span class="token comment">// console.log(initWidth);</span>
            <span class="token comment">// console.log(event.clientX, this.$el.offsetLeft, disX);</span>
            <span class="token keyword">const</span> <span class="token function-variable function">dragMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                disX <span class="token operator">=</span> event<span class="token punctuation">.</span>clientX <span class="token operator">-</span> startX
                <span class="token comment">// console.log(initWidth - disX);</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>initWidth <span class="token operator">-</span> disX <span class="token operator">></span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">-</span> _RestWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>rightWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">-</span> _RestWidth
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>rightWidth <span class="token operator">=</span> initWidth <span class="token operator">-</span> disX
                <span class="token punctuation">}</span>
                document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">'ew-resize'</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> <span class="token function-variable function">dragStop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> dragMove<span class="token punctuation">)</span>
                document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'mouseup'</span><span class="token punctuation">,</span> dragStop<span class="token punctuation">)</span>
                document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">'initial'</span>
                localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>ocm_right_width<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rightWidth<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> dragMove<span class="token punctuation">)</span>
            document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mouseup'</span><span class="token punctuation">,</span> dragStop<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
<span class="token punctuation">.</span>right<span class="token operator">-</span>domain <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">.</span>right<span class="token operator">-</span>width<span class="token operator">-</span>bar <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> 8px<span class="token punctuation">;</span>
        <span class="token literal-property property">cursor</span><span class="token operator">:</span> ew<span class="token operator">-</span>resize<span class="token punctuation">;</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> 0px<span class="token punctuation">;</span>
        user<span class="token operator">-</span>select<span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


