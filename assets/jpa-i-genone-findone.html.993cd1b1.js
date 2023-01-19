import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,d as c,f as o,r as l}from"./app.f6fb4051.js";const i={},u=o(`<h1 id="jpa\u4E2D\u7684getone-findone\u4EE5\u53CAfindbyid\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#jpa\u4E2D\u7684getone-findone\u4EE5\u53CAfindbyid\u533A\u522B" aria-hidden="true">#</a> JPA\u4E2D\u7684getOne,findOne\u4EE5\u53CAfindById\u533A\u522B</h1><p>\u4F7F\u7528 Spring Data JPA \u65F6\uFF0C\u7ECF\u5E38\u4F1A\u770B\u5230 <code>findById</code>\u3001<code>getOne</code>\u3001<code>findOne</code> \u4E09\u4E2A\u65B9\u6CD5\u3002</p><p>\u4ECE\u5B57\u9762\u4E0A\u7406\u89E3\uFF0C\u4ED6\u4EEC\u90FD\u662F\u6839\u636E ID \u3001\u6216\u6839\u636E\u6307\u5B9A\u7684\u67E5\u8BE2\u6761\u4EF6\uFF0C\u83B7\u53D6\u5355\u4E2A\u5B9E\u4F53\u5BF9\u8C61\u3002</p><p>\u4F46\u4ED6\u4EEC\u7684\u5E95\u5C42\u83B7\u53D6\u673A\u5236\u3001\u8FD4\u56DE\u503C\u7C7B\u578B\u3001\u4EE5\u53CA\u629B\u5F02\u5E38\u7684\u673A\u5236\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u56E0\u6B64\u5BF9\u5E94\u7684\u4F7F\u7528\u573A\u666F\u4E5F\u4E0D\u4E00\u6837\u3002</p><h2 id="_1-findbyid-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-findbyid-\u65B9\u6CD5" aria-hidden="true">#</a> 1. findById \u65B9\u6CD5</h2><p><code>findById</code> \u65B9\u6CD5\u4F1A\u7ACB\u5373\uFF08EAGER\uFF09\u8BBF\u95EE\u6570\u636E\u5E93\uFF0C\u5E76\u8FD4\u56DE\u548C\u6307\u5B9A ID \u5173\u8054\u7684\u5B9E\u4F53\u5BF9\u8C61\uFF1B\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u5219\u8FD4\u56DE <code>Optional.empty()</code>\u3002</p><p>\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CrudRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>	
	<span class="token doc-comment comment">/**
	 * Retrieves an entity by its id.
	 *
	 * <span class="token keyword">@param</span> <span class="token parameter">id</span> must not be <span class="token punctuation">{</span><span class="token keyword">@literal</span> null<span class="token punctuation">}</span>.
	 * <span class="token keyword">@return</span> the entity with the given id or <span class="token punctuation">{</span><span class="token keyword">@literal</span> Optional#empty()<span class="token punctuation">}</span> if none found.
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IllegalArgumentException</span></span> if <span class="token punctuation">{</span><span class="token keyword">@literal</span> id<span class="token punctuation">}</span> is <span class="token punctuation">{</span><span class="token keyword">@literal</span> null<span class="token punctuation">}</span>.
	 */</span>
	<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">ID</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-getone-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-getone-\u65B9\u6CD5" aria-hidden="true">#</a> 2. getOne \u65B9\u6CD5</h2><p><code>getOne</code> \u662F\u4E00\u4E2A\u5EF6\u8FDF\u52A0\u8F7D\u65B9\u6CD5\uFF0C<strong>\u5B83\u5E76\u4E0D\u7ACB\u5373\u8BBF\u95EE\u6570\u636E\u5E93</strong>\uFF0C\u800C\u662F\u8FD4\u56DE\u4E00\u4E2A\u4EE3\u7406\uFF08<code>proxy</code>\uFF09\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u4EE3\u7406\u5BF9\u8C61\u662F\u5BF9\u5B9E\u4F53\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u4EC5\u5728 <strong>\u4F7F\u7528\u4EE3\u7406\u5BF9\u8C61\u8BBF\u95EE\u5BF9\u8C61\u5C5E\u6027\u65F6\u624D\u4F1A\u53BB\u771F\u6B63\u8BBF\u95EE\u6570\u636E\u5E93</strong> \uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5219\u629B\u51FA <code>EntityNotFoundException</code>\u3002</p><p>\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">PagingAndSortingRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">QueryByExampleExecutor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token doc-comment comment">/**
	 * Returns a reference to the entity with the given identifier. Depending on how the JPA persistence provider is
	 * implemented this is very likely to always return an instance and throw an
	 * <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">EntityNotFoundException</span></span><span class="token punctuation">}</span> on first access. Some of them will reject invalid identifiers
	 * immediately.
	 *
	 * <span class="token keyword">@param</span> <span class="token parameter">id</span> must not be <span class="token punctuation">{</span><span class="token keyword">@literal</span> null<span class="token punctuation">}</span>.
	 * <span class="token keyword">@return</span> a reference to the entity with the given identifier.
	 * <span class="token keyword">@see</span> <span class="token reference"><span class="token class-name">EntityManager</span><span class="token punctuation">#</span><span class="token function">getReference</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">)</span></span> for details on when an exception is thrown.
	 */</span>
	<span class="token class-name">T</span> <span class="token function">getOne</span><span class="token punctuation">(</span><span class="token class-name">ID</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-findone-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-findone-\u65B9\u6CD5" aria-hidden="true">#</a> 3. findOne \u65B9\u6CD5</h2><p>\u9664\u4E86 <code>findById</code>\u3001<code>getOne</code> \u5916\uFF0CSpring Data JPA \u8FD8\u63D0\u4F9B\u4E86\u4E24\u4E2A <code>findOne</code> \u65B9\u6CD5\uFF1A</p><ul><li><code>Optional findOne(@Nullable Specification spec)</code></li><li><code> Optional findOne(Example example)</code></li></ul><p>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u7528\u4E8E\u9700\u8981\u52A8\u6001\u6784\u5EFA\u591A\u6761\u4EF6\u67E5\u8BE2\u7684\u573A\u666F\u4E2D\uFF0C\u5B83\u4EEC\u90FD\u662F\u7ACB\u5373\u8BBF\u95EE\u6570\u636E\u5E93\u7684\u3002</p><p>\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">QueryByExampleExecutor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token doc-comment comment">/**
	 * Returns a single entity matching the given <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Example</span></span><span class="token punctuation">}</span> or <span class="token punctuation">{</span><span class="token keyword">@literal</span> null<span class="token punctuation">}</span> if none was found.
	 *
	 * <span class="token keyword">@param</span> <span class="token parameter">example</span> must not be <span class="token punctuation">{</span><span class="token keyword">@literal</span> null<span class="token punctuation">}</span>.
	 * <span class="token keyword">@return</span> a single entity matching the given <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Example</span></span><span class="token punctuation">}</span> or <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Optional</span><span class="token punctuation">#</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> if none was found.
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">IncorrectResultSizeDataAccessException</span></span> if the Example yields more than one result.
	 */</span>
	<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span> <span class="token keyword">extends</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span><span class="token punctuation">&gt;</span></span> <span class="token function">findOne</span><span class="token punctuation">(</span><span class="token class-name">Example</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span><span class="token punctuation">&gt;</span></span> example<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">JpaSpecificationExecutor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token doc-comment comment">/**
	 * Returns a single entity matching the given <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Specification</span></span><span class="token punctuation">}</span> or <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Optional</span><span class="token punctuation">#</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> if none found.
	 *
	 * <span class="token keyword">@param</span> <span class="token parameter">spec</span> can be <span class="token punctuation">{</span><span class="token keyword">@literal</span> null<span class="token punctuation">}</span>.
	 * <span class="token keyword">@return</span> never <span class="token punctuation">{</span><span class="token keyword">@literal</span> null<span class="token punctuation">}</span>.
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">IncorrectResultSizeDataAccessException</span></span> if more than one entity found.
	 */</span>
	<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findOne</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> spec<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u7C7B\u578B\u4E3A <code>Optional</code> \uFF0C\u5982\u679C\u6CA1\u6709\u68C0\u7D22\u5230\uFF0C\u8FD4\u56DE <code>Optional.empty()</code>\uFF0C\u7ED3\u679C\u6EE1\u8DB3\u6761\u4EF6\u7684\u8BB0\u5F55\u6761\u6570\u8D85\u8FC7\u4E00\u6761\uFF0C\u5219\u629B\u51FA <code>IncorrectResultSizeDataAccessException</code></p><h2 id="_4-\u5982\u4F55\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#_4-\u5982\u4F55\u9009\u62E9" aria-hidden="true">#</a> 4. \u5982\u4F55\u9009\u62E9</h2><p>\u4ECE\u4E0A\u9762\u7684\u63CF\u8FF0\u53EF\u4EE5\u770B\u51FA\uFF1A\u5B83\u4EEC\u4E3B\u8981\u7684\u533A\u522B\u5728\u4E8E <strong>\u52A0\u8F7D\u65F6\u671F</strong> \u53CA <strong>\u662F\u5426\u652F\u6301\u52A8\u6001\u6784\u5EFA\u67E5\u8BE2\u6761\u4EF6</strong> \u7684\u4E0D\u540C\u3002</p><h3 id="_4-1\u3001\u591A\u6761\u4EF6\u67E5\u8BE2\u7684\u573A\u666F\u4E2D-\u53EF\u4F7F\u7528-findone" tabindex="-1"><a class="header-anchor" href="#_4-1\u3001\u591A\u6761\u4EF6\u67E5\u8BE2\u7684\u573A\u666F\u4E2D-\u53EF\u4F7F\u7528-findone" aria-hidden="true">#</a> 4.1\u3001\u591A\u6761\u4EF6\u67E5\u8BE2\u7684\u573A\u666F\u4E2D\uFF0C\u53EF\u4F7F\u7528 findOne</h3><p>\u4F8B\u5982\uFF0C\u6839\u636E <code>openId</code> \u4EE5\u53CA <code>state</code> \u67E5\u8BE2\u6307\u5B9A\u7684\u7528\u6237\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> user <span class="token operator">=</span>
        postRepository<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span>root<span class="token punctuation">,</span> query<span class="token punctuation">,</span> cb<span class="token punctuation">)</span> <span class="token operator">-&gt;</span>
                cb<span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>cb<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;openId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cb<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;state&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u4F7F\u7528 <code>findOne(Example example)</code>\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">User</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
u<span class="token punctuation">.</span><span class="token function">setOpenId</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
u<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Example</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> example <span class="token operator">=</span> <span class="token class-name">Example</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> user <span class="token operator">=</span> postRepository<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>example<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4E24\u79CD\u5199\u6CD5\u662F\u7B49\u6548\u7684\uFF0C\u6267\u884C\u7684 SQL \u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Hibernate: select user0_.id as id1_0_, user0_.created_at as created_2_0_, user0_.open_id as open_id3_0_, user0_.state as state4_0_ from t_users user0_ where user0_.open_id=? and user0_.state=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-2-\u6309-id-\u68C0\u7D22\u7684\u573A\u666F\u4E2D-\u4F7F\u7528-findbyid-\u6216-getone" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6309-id-\u68C0\u7D22\u7684\u573A\u666F\u4E2D-\u4F7F\u7528-findbyid-\u6216-getone" aria-hidden="true">#</a> 4.2 \u6309 ID \u68C0\u7D22\u7684\u573A\u666F\u4E2D\uFF0C\u4F7F\u7528 findById \u6216 getOne</h2><p>\u524D\u9762\u5DF2\u7ECF\u63CF\u8FF0\u8FC7\uFF0C<code>findById</code> \u548C <code>getOne</code> \u7684\u6700\u5927\u7684\u533A\u522B\u662F\u52A0\u8F7D\u65F6\u671F\u7684\u4E0D\u540C\u3002</p><p>\u56E0\u6B64\uFF1A</p><p>1\u3001\u5728\u9700\u8981\u5EF6\u8FDF\u52A0\u8F7D\u65F6\uFF0C\u9009\u62E9 <code>getOne</code></p><p>2\u3001\u4E0D\u9700\u8981\u5EF6\u8FDF\u52A0\u8F7D\u65F6\uFF0C\u9009\u62E9 <code>findById</code></p><p>\u5F53\u7136\u4E86\uFF0C<code>findOne</code> \u4E5F\u53EF\u4EE5\u6839\u636E ID \u8FDB\u884C\u67E5\u8BE2\uFF0C\u4F46\u662F\u5199\u6CD5\u7D2F\u8D58\u3001\u4E14\u6666\u6DA9\u4E0D\u6613\u8BFB\uFF0C\u4E0D\u8981\u90A3\u6837\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> user <span class="token operator">=</span> postRepository<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> query<span class="token punctuation">,</span> cb<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> cb<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_5\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u603B\u7ED3" aria-hidden="true">#</a> 5\u3001\u603B\u7ED3</h1><p>1\u3001<code>getOne</code> \u662F\u5EF6\u8FDF\u52A0\u8F7D\uFF1B\u800C <code>findById</code>\u3001<code>findOne</code> \u662F\u7ACB\u5373\u52A0\u8F7D\u3002</p><p>2\u3001 <code>getOne</code> \u5982\u679C\u627E\u4E0D\u5230\u8BB0\u5F55\u4F1A\u629B\u51FA<code>EntityNotFoundException</code>\uFF1B\u800C <code>findById</code>\u3001<code>findOne</code> \u4F1A\u8FD4\u56DE <code>Optional.empty()</code>\u3002</p><p>3\u3001 \u5728 <code>@ManyToOne</code> \u7684\u573A\u666F\u4E2D\u4F7F\u7528 <code>findOne</code> \uFF0C\u53EF\u4EE5\u83B7\u5F97\u5EF6\u8FDF\u52A0\u8F7D\u673A\u5236\u5E26\u6765\u7684\u6027\u80FD\u4F18\u52BF\u3002</p><p>4\u3001 \u5728\u6839\u636E\u975E <code>ID</code> \u67E5\u8BE2\u3001\u6216\u52A8\u6001\u67E5\u8BE2\u7684\u573A\u666F\u4E2D\uFF0C\u4F7F\u7528 <code>findOne</code>\u3002</p><p>5\u3001 <code>findOne</code> \u67E5\u8BE2\u7ED3\u679C\u4E0D\u80FD\u8FD4\u56DE\u8D85\u8FC7\u4E00\u6761\uFF0C\u5426\u5219\u4F1A\u629B\u51FA <code>IncorrectResultSizeDataAccessException</code>\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,42),d={href:"https://www.cnblogs.com/ktgu/p/13772236.html",target:"_blank",rel:"noopener noreferrer"};function r(k,m){const s=l("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",d,[p("Spring Data JPA \u4E2D findById\u3001getOne\u3001findOne \u7684\u533A\u522B"),c(s)])])])}const f=a(i,[["render",r],["__file","jpa-i-genone-findone.html.vue"]]);export{f as default};
