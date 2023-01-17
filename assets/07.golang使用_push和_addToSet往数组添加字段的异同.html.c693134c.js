import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.f5d9e013.js";const e={},o=t(`<h1 id="_07-golang\u4F7F\u7528-push\u548C-addtoset\u5F80\u6570\u7EC4\u6DFB\u52A0\u5B57\u6BB5\u7684\u5F02\u540C" tabindex="-1"><a class="header-anchor" href="#_07-golang\u4F7F\u7528-push\u548C-addtoset\u5F80\u6570\u7EC4\u6DFB\u52A0\u5B57\u6BB5\u7684\u5F02\u540C" aria-hidden="true">#</a> 07.golang\u4F7F\u7528$push\u548C$addToSet\u5F80\u6570\u7EC4\u6DFB\u52A0\u5B57\u6BB5\u7684\u5F02\u540C</h1><h2 id="\u524D\u8A00\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00\u7ED3\u8BBA" aria-hidden="true">#</a> \u524D\u8A00\u7ED3\u8BBA</h2><p>\u5728\u9762\u5BF9MongoDB\u7684\u96C6\u5408\u5B57\u6BB5\u4EA4\u4E92\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u63A5\u89E6\u5230<code>$push</code>\u4E0E<code>$addToSet</code>\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u4E24\u4E2A\u65B9\u6CD5\u770B\u4F3C\u529F\u80FD\u5DEE\u4E0D\u591A\uFF0C\u5B9E\u9645\u4F7F\u7528\u573A\u666F\u4E2D\u4E5F\u6709\u4E00\u4E9B\u4E0D\u540C\uFF0C\u8FD9\u91CC\u5148\u8BF4\u7ED3\u8BBA\u3002</p><ul><li>\u76F8\u540C <ul><li>\u90FD\u662F\u63D0\u4F9B\u4E86\u5F80\u6570\u7EC4\u6DFB\u52A0\u5143\u7D20\u7684\u529F\u80FD\u3002</li></ul></li><li>\u5DEE\u5F02 <ul><li>\u65E0\u8BBA\u6570\u7EC4\u5BF9\u8C61\u662F\u4EC0\u4E48\u6837\uFF0C\u76F8\u540C\u7684\u503C\uFF0C\u591A\u6B21\u6DFB\u52A0\u65F6\uFF0C<code>$addToSet</code>\u4F1A\u81EA\u52A8\u53BB\u91CD\uFF0C\u800C<code>$push</code>\u4E0D\u4F1A\u3002</li><li>\u65E0\u8BBA\u6570\u7EC4\u5BF9\u8C61\u662F\u4EC0\u4E48\u6837\uFF0C<code>$addToSet</code>\u4E00\u6B21\u53EA\u80FD\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\uFF0C\u800C<code>$push</code>\u53EF\u4EE5\u7ED3\u5408<code>$each</code>\u5B9E\u73B0\u4E00\u6B21\u6DFB\u52A0\u591A\u4E2A\u5143\u7D20\u3002</li></ul></li></ul><p>\u8FDB\u5165\u9A8C\u8BC1\u4E4B\u524D\uFF0C\u5148\u653E\u4E00\u5F20\u7F8E\u5973\u56FE\u63D0\u795E\u9192\u8111\u4E00\u6CE2\uFF1A</p><h2 id="\u5B9E\u9A8C\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C\u9A8C\u8BC1" aria-hidden="true">#</a> \u5B9E\u9A8C\u9A8C\u8BC1</h2><h3 id="\u51C6\u5907\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u6570\u636E" aria-hidden="true">#</a> \u51C6\u5907\u6570\u636E</h3><p>\u9996\u5148\u6211\u4EEC\u53EF\u4EE5\u770B\u4EE5\u4E0B\u4E00\u7EC4\u64CD\u4F5C\uFF0C\u4F53\u73B0\u4E24\u8005\u90FD\u80FD\u591F\u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u5185\uFF0C\u51C6\u5907\u6D4B\u8BD5\u6570\u636E\u5982\u4E0B\uFF0C\u540E\u8FB9\u6BCF\u6B21\u91CD\u65B0\u6D4B\u8BD5\uFF0C\u90FD\u4F1A\u91CD\u7F6E\u51C6\u5907\u7684\u6570\u636E\uFF0C\u4E0D\u518D\u8D58\u8FF0\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>$ db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">insert</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>
        {<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;aa&quot;</span>}<span class="token punctuation">,</span>
        {<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;bb&quot;</span>}<span class="token punctuation">,</span>
        {<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;cc&quot;</span>}<span class="token punctuation">,</span>
        {<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;dd&quot;</span>}
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u4E00\u773C\u6570\u636E\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>$ db<span class="token punctuation">.</span>getCollection<span class="token punctuation">(</span><span class="token string">&#39;datas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span>{}<span class="token punctuation">)</span>
<span class="token comment">/* 1 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b04709d75257165271fc5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;aa&quot;</span>
}

<span class="token comment">/* 2 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b04709d75257165271fc6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;bb&quot;</span>
}

<span class="token comment">/* 3 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b04709d75257165271fc7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;cc&quot;</span>
}

<span class="token comment">/* 4 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b04709d75257165271fc8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;dd&quot;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u5355\u6761\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5355\u6761\u6570\u636E" aria-hidden="true">#</a> \u6DFB\u52A0\u5355\u6761\u6570\u636E</h3><p>\u6267\u884C\u5982\u4E0B\u4E00\u6CE2\u64CD\u4F5C\u6DFB\u52A0\u5B57\u6BB5\u5230\u4E00\u4E2A\u5217\u8868\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">// \u6DFB\u52A0\u5355\u4E2A\u5143\u7D20\u5230\u5217\u8868</span>
db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;aa&quot;</span> }<span class="token punctuation">,</span>
   { $addToSet: { <span class="token string">&quot;label_list&quot;</span>: <span class="token string">&quot;11&quot;</span> } }
<span class="token punctuation">)</span>
<span class="token comment">// \u6DFB\u52A0\u5355\u4E2A\u5143\u7D20\u5230\u5217\u8868</span>
db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;aa&quot;</span> }<span class="token punctuation">,</span>
   { $addToSet: { <span class="token string">&quot;label_list&quot;</span>: <span class="token string">&quot;11&quot;</span> } }
<span class="token punctuation">)</span>
<span class="token comment">// \u6DFB\u52A0\u4E00\u4E2A\u5BF9\u8C61\u5230\u5217\u8868</span>
db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;bb&quot;</span> }<span class="token punctuation">,</span>
   { $addToSet: { <span class="token string">&quot;label_list&quot;</span>: {<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;bb-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;bb-1&quot;</span>} } }
<span class="token punctuation">)</span>
<span class="token comment">// \u6DFB\u52A0\u4E00\u4E2A\u5BF9\u8C61\u5230\u5217\u8868</span>
db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;bb&quot;</span> }<span class="token punctuation">,</span>
   { $addToSet: { <span class="token string">&quot;label_list&quot;</span>: {<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;bb-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;bb-1&quot;</span>} } }
<span class="token punctuation">)</span>

<span class="token comment">// \u6DFB\u52A0\u5355\u4E2A\u5143\u7D20\u5230\u5217\u8868</span>
db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;cc&quot;</span> }<span class="token punctuation">,</span>
   { $push: { <span class="token string">&quot;label_list&quot;</span>: <span class="token string">&quot;22&quot;</span> } }
<span class="token punctuation">)</span>
<span class="token comment">// \u6DFB\u52A0\u5355\u4E2A\u5143\u7D20\u5230\u5217\u8868</span>
db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;cc&quot;</span> }<span class="token punctuation">,</span>
   { $push: { <span class="token string">&quot;label_list&quot;</span>: <span class="token string">&quot;22&quot;</span> } }
<span class="token punctuation">)</span>
<span class="token comment">// \u6DFB\u52A0\u4E00\u4E2A\u5BF9\u8C61\u5230\u5217\u8868</span>
db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;dd&quot;</span> }<span class="token punctuation">,</span>
   { $push: { <span class="token string">&quot;label_list&quot;</span>: {<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;dd-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;dd-2&quot;</span>} } }
<span class="token punctuation">)</span>
<span class="token comment">// \u6DFB\u52A0\u4E00\u4E2A\u5BF9\u8C61\u5230\u5217\u8868</span>
db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;dd&quot;</span> }<span class="token punctuation">,</span>
   { $push: { <span class="token string">&quot;label_list&quot;</span>: {<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;dd-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;dd-2&quot;</span>} } }
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u6CE8\u610F\uFF1A</code>\u5982\u4E0A\u547D\u4EE4\u4E4B\u6240\u4EE5\u6267\u884C\u4E24\u6B21\uFF0C\u662F\u4E3A\u4E86\u7ED3\u5408\u7ED3\u679C\u770B\u51FA\u5176\u4E2D\u5DEE\u5F02\u3002</p><p>\u6B64\u65F6\u518D\u6B21\u67E5\u5E93\u53EF\u770B\u5230\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>$ db<span class="token punctuation">.</span>getCollection<span class="token punctuation">(</span><span class="token string">&#39;datas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span>{}<span class="token punctuation">)</span>
<span class="token comment">/* 1 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b08129d75257165271fcd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;aa&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;label_list&quot;</span> : <span class="token punctuation">[</span> 
        <span class="token string">&quot;11&quot;</span>
    <span class="token punctuation">]</span>
}

<span class="token comment">/* 2 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b08129d75257165271fce&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;bb&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;label_list&quot;</span> : <span class="token punctuation">[</span> 
        {
            <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;bb-1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;age&quot;</span> : <span class="token string">&quot;bb-1&quot;</span>
        }
    <span class="token punctuation">]</span>
}

<span class="token comment">/* 3 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b08129d75257165271fcf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;cc&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;label_list&quot;</span> : <span class="token punctuation">[</span> 
        <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span> 
        <span class="token string">&quot;22&quot;</span>
    <span class="token punctuation">]</span>
}

<span class="token comment">/* 4 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b08129d75257165271fd0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;dd&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;label_list&quot;</span> : <span class="token punctuation">[</span> 
        {
            <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;dd-2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;age&quot;</span> : <span class="token string">&quot;dd-2&quot;</span>
        }<span class="token punctuation">,</span> 
        {
            <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;dd-2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;age&quot;</span> : <span class="token string">&quot;dd-2&quot;</span>
        }
    <span class="token punctuation">]</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u4E24\u4E2A\u6307\u4EE4\u90FD\u652F\u6301\u7B80\u5355\u548C\u590D\u6742\u5BF9\u8C61\u7684\u4EA4\u4E92\uFF0C\u53EA\u4E0D\u8FC7\u4F7F\u7528<code>$addToSet</code>\u6DFB\u52A0\u65F6\uFF0C\u5982\u679C\u5217\u8868\u5DF2\u5B58\u5728\u8BE5\u503C\uFF0C\u5219\u4E0D\u4F1A\u91CD\u590D\u6DFB\u52A0\u3002</p><h3 id="\u6DFB\u52A0\u591A\u6761\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u591A\u6761\u6570\u636E" aria-hidden="true">#</a> \u6DFB\u52A0\u591A\u6761\u6570\u636E</h3><p>\u6DFB\u52A0\u7684\u591A\u4E2A\u5143\u7D20\u4E3A\u7B80\u5355\u5B57\u7B26\u4E32\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>$ db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { name: <span class="token string">&quot;aa&quot;</span> }<span class="token punctuation">,</span>
   { $push: { <span class="token string">&quot;label_list&quot;</span>: { $each: <span class="token punctuation">[</span> <span class="token string">&quot;90&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;92&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;85&quot;</span> <span class="token punctuation">]</span> } } }
<span class="token punctuation">)</span>
$ db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { name: <span class="token string">&quot;aa&quot;</span> }<span class="token punctuation">,</span>
   { $push: { <span class="token string">&quot;label_list&quot;</span>: { $each: <span class="token punctuation">[</span> <span class="token string">&quot;90&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;92&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;85&quot;</span> <span class="token punctuation">]</span> } } }
<span class="token punctuation">)</span>

$ db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { name: <span class="token string">&quot;bb&quot;</span> }<span class="token punctuation">,</span>
   { $addToSet: { <span class="token string">&quot;label_list&quot;</span>: { $each: <span class="token punctuation">[</span> <span class="token string">&quot;90&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;92&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;85&quot;</span> <span class="token punctuation">]</span> } } }
<span class="token punctuation">)</span>
$ db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { name: <span class="token string">&quot;bb&quot;</span> }<span class="token punctuation">,</span>
   { $addToSet: { <span class="token string">&quot;label_list&quot;</span>: { $each: <span class="token punctuation">[</span> <span class="token string">&quot;90&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;92&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;85&quot;</span> <span class="token punctuation">]</span> } } }
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D<code>$push</code>\u591A\u6B21\u6DFB\u52A0\u4F1A\u91CD\u590D\u6DFB\u52A0\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">/* 1 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b13239d75257165271fdd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;aa&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;label_list&quot;</span> : <span class="token punctuation">[</span> 
        <span class="token string">&quot;90&quot;</span><span class="token punctuation">,</span> 
        <span class="token string">&quot;92&quot;</span><span class="token punctuation">,</span> 
        <span class="token string">&quot;85&quot;</span><span class="token punctuation">,</span> 
        <span class="token string">&quot;90&quot;</span><span class="token punctuation">,</span> 
        <span class="token string">&quot;92&quot;</span><span class="token punctuation">,</span> 
        <span class="token string">&quot;85&quot;</span>
    <span class="token punctuation">]</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u770B<code>$addToSet</code>\u7684\u6548\u679C\uFF0C\u4F1A\u81EA\u52A8\u53BB\u91CD\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">/* 2 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b13239d75257165271fde&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;bb&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;label_list&quot;</span> : <span class="token punctuation">[</span> 
        <span class="token string">&quot;90&quot;</span><span class="token punctuation">,</span> 
        <span class="token string">&quot;92&quot;</span><span class="token punctuation">,</span> 
        <span class="token string">&quot;85&quot;</span>
    <span class="token punctuation">]</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u7684\u591A\u4E2A\u5143\u7D20\u4E3A\u590D\u6742\u5BF9\u8C61\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>$ db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;cc&quot;</span> }<span class="token punctuation">,</span>
   { $push: { <span class="token string">&quot;link_model&quot;</span>:{
        $each: <span class="token punctuation">[</span>{<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;aa-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;3&quot;</span>}<span class="token punctuation">,</span>{<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;bb-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;4&quot;</span>}<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">&quot;$position&quot;</span>:<span class="token number">0</span><span class="token punctuation">,</span>
     } } }
<span class="token punctuation">)</span>
$ db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;cc&quot;</span> }<span class="token punctuation">,</span>
   { $push: { <span class="token string">&quot;link_model&quot;</span>:{
        $each: <span class="token punctuation">[</span>{<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;aa-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;3&quot;</span>}<span class="token punctuation">,</span>{<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;bb-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;4&quot;</span>}<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">&quot;$position&quot;</span>:<span class="token number">0</span><span class="token punctuation">,</span>
     } } }
<span class="token punctuation">)</span>

$ db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;dd&quot;</span> }<span class="token punctuation">,</span>
   { $addToSet: { <span class="token string">&quot;link_models&quot;</span>:{
        $each: <span class="token punctuation">[</span>{<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;aa-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;3&quot;</span>}<span class="token punctuation">,</span>{<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;bb-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;4&quot;</span>}<span class="token punctuation">]</span><span class="token punctuation">,</span>
     } } }
<span class="token punctuation">)</span>
$ db<span class="token punctuation">.</span>datas<span class="token punctuation">.</span><span class="token keyword">update</span><span class="token punctuation">(</span>
   { <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;dd&quot;</span> }<span class="token punctuation">,</span>
   { $addToSet: { <span class="token string">&quot;link_models&quot;</span>:{
        $each: <span class="token punctuation">[</span>{<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;aa-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;3&quot;</span>}<span class="token punctuation">,</span>{<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;bb-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span>:<span class="token string">&quot;4&quot;</span>}<span class="token punctuation">]</span><span class="token punctuation">,</span>
     } } }
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u67E5\u770B\u901A\u8FC7<code>$push</code>\u6DFB\u52A0\u7684\u8FD9\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u81EA\u52A8\u67E5\u91CD\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">/* 3 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b13239d75257165271fdf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;cc&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;link_model&quot;</span> : <span class="token punctuation">[</span> 
        {
            <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;aa-1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;age&quot;</span> : <span class="token string">&quot;3&quot;</span>
        }<span class="token punctuation">,</span> 
        {
            <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;bb-1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;age&quot;</span> : <span class="token string">&quot;4&quot;</span>
        }<span class="token punctuation">,</span> 
        {
            <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;aa-1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;age&quot;</span> : <span class="token string">&quot;3&quot;</span>
        }<span class="token punctuation">,</span> 
        {
            <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;bb-1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;age&quot;</span> : <span class="token string">&quot;4&quot;</span>
        }
    <span class="token punctuation">]</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u770B\u4F7F\u7528<code>$addToSet</code>\uFF0C\u5219\u53EF\u4EE5\u81EA\u52A8\u53BB\u91CD\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">/* 4 */</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;622b13239d75257165271fe0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;dd&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;link_models&quot;</span> : <span class="token punctuation">[</span> 
        {
            <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;aa-1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;age&quot;</span> : <span class="token string">&quot;3&quot;</span>
        }<span class="token punctuation">,</span> 
        {
            <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;bb-1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;age&quot;</span> : <span class="token string">&quot;4&quot;</span>
        }
    <span class="token punctuation">]</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),p=[o];function i(u,l){return s(),a("div",null,p)}const r=n(e,[["render",i],["__file","07.golang\u4F7F\u7528$push\u548C$addToSet\u5F80\u6570\u7EC4\u6DFB\u52A0\u5B57\u6BB5\u7684\u5F02\u540C.html.vue"]]);export{r as default};
