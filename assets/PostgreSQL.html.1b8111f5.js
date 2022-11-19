import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,e}from"./app.af6359e2.js";const o={},p=e(`<h1 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h1><p>PostgreSQL 是一个免费的对象-关系数据库服务器(ORDBMS)，在灵活的BSD许可证下发行。</p><h2 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> postgresql postgresql-client

<span class="token function">sudo</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-u</span> postgres
~$ psql <span class="token parameter variable">-U</span> postgres <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">5432</span>
psql <span class="token punctuation">(</span><span class="token number">9.5</span>.17<span class="token punctuation">)</span>
Type <span class="token string">&quot;help&quot;</span> <span class="token keyword">for</span> help.

<span class="token assign-left variable">postgres</span><span class="token operator">=</span><span class="token comment">#</span>

<span class="token punctuation">\\</span>q 退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 查看所有数据库
<span class="token assign-left variable">postgres</span><span class="token operator">=</span><span class="token comment"># \\l</span>
                                   List of databases
        Name         <span class="token operator">|</span>  Owner   <span class="token operator">|</span> Encoding <span class="token operator">|</span> Collate <span class="token operator">|</span>  Ctype  <span class="token operator">|</span>   Access privileges
---------------------+----------+----------+---------+---------+-----------------------
 mastodon_production <span class="token operator">|</span> mastodon <span class="token operator">|</span> UTF8     <span class="token operator">|</span> C.UTF-8 <span class="token operator">|</span> C.UTF-8 <span class="token operator">|</span>
 postgres            <span class="token operator">|</span> postgres <span class="token operator">|</span> UTF8     <span class="token operator">|</span> C.UTF-8 <span class="token operator">|</span> C.UTF-8 <span class="token operator">|</span>
 template0           <span class="token operator">|</span> postgres <span class="token operator">|</span> UTF8     <span class="token operator">|</span> C.UTF-8 <span class="token operator">|</span> C.UTF-8 <span class="token operator">|</span> <span class="token operator">=</span>c/postgres          +
                     <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>         <span class="token operator">|</span>         <span class="token operator">|</span> <span class="token assign-left variable">postgres</span><span class="token operator">=</span>CTc/postgres
 template1           <span class="token operator">|</span> postgres <span class="token operator">|</span> UTF8     <span class="token operator">|</span> C.UTF-8 <span class="token operator">|</span> C.UTF-8 <span class="token operator">|</span> <span class="token operator">=</span>c/postgres          +
                     <span class="token operator">|</span>          <span class="token operator">|</span>          <span class="token operator">|</span>         <span class="token operator">|</span>         <span class="token operator">|</span> <span class="token assign-left variable">postgres</span><span class="token operator">=</span>CTc/postgres
<span class="token punctuation">(</span><span class="token number">4</span> rows<span class="token punctuation">)</span>

-- 切换数据库
<span class="token assign-left variable">postgres</span><span class="token operator">=</span><span class="token comment"># \\c mastodon_production</span>
You are now connected to database <span class="token string">&quot;mastodon_production&quot;</span> as user <span class="token string">&quot;postgres&quot;</span><span class="token builtin class-name">.</span>
<span class="token assign-left variable">mastodon_production</span><span class="token operator">=</span><span class="token comment">#</span>

-- 列出所有的表
<span class="token punctuation">\\</span>dt

-- 查看数据表
<span class="token keyword">select</span> * from pg_tables<span class="token punctuation">;</span>
<span class="token keyword">select</span> tablename from pg_tables where <span class="token assign-left variable">tableowner</span><span class="token operator">=</span><span class="token string">&#39;mastodon&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> tablename from pg_tables where <span class="token assign-left variable">schemaname</span><span class="token operator">=</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">;</span>

-- 查看表结构
<span class="token punctuation">\\</span>d 表名

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[p];function l(r,i){return n(),a("div",null,t)}const u=s(o,[["render",l],["__file","PostgreSQL.html.vue"]]);export{u as default};
