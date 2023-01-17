import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as s,d as t,f as e,r as i}from"./app.f5d9e013.js";const l={},u=n("h1",{id:"_04-go-gitlab\u5305\u6E90\u7801\u63A2\u5BFB\u4E0E\u5FC3\u5F97",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_04-go-gitlab\u5305\u6E90\u7801\u63A2\u5BFB\u4E0E\u5FC3\u5F97","aria-hidden":"true"},"#"),s(" 04.go-gitlab\u5305\u6E90\u7801\u63A2\u5BFB\u4E0E\u5FC3\u5F97")],-1),r=n("p",null,"gitlab\u57FA\u672C\u4E0A\u662F\u6BCF\u4E2A\u516C\u53F8\u5185\u90E8\u4EE3\u7801\u4ED3\u5E93\u7684\u9996\u9009\uFF0C\u90A3\u4E48\u4E0E\u4E4B\u8FDB\u884C\u4E00\u4E9B\u4EA4\u4E92\u5C31\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u9700\u6C42\u4E86\uFF0C\u5728\u5199\u4E86\u4E00\u4E9B\u811A\u672C\u4E0E\u4E4B\u4EA4\u4E92\u4E4B\u540E\uFF0C\u8D8A\u53D1\u611F\u53D7\u5230\u6B64\u9879\u76EE\u8BBE\u8BA1\u7684\u6210\u719F\uFF0C\u56E0\u6B64\u7279\u6765\u8BB0\u5F55\u4E00\u4E0B\u76F8\u5173\u6587\u6863\u3002",-1),d=n("h2",{id:"_1-\u7269\u6599\u51C6\u5907",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u7269\u6599\u51C6\u5907","aria-hidden":"true"},"#"),s(" 1\uFF0C\u7269\u6599\u51C6\u5907")],-1),k={href:"https://wiki.eryajf.net/pages/243.html#_1-%E7%8E%AF%E5%A2%83%E5%92%8C%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.gitlab.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.gitlab.com/ee/api/api_resources.html#project-resources",target:"_blank",rel:"noopener noreferrer"},m={href:"https://apachecn.gitee.io/gitlab-doc-zh/#/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/xanzy/go-gitlab",target:"_blank",rel:"noopener noreferrer"},h={href:"https://pkg.go.dev/github.com/xanzy/go-gitlab@v0.50.0?utm_source=gopls",target:"_blank",rel:"noopener noreferrer"},f=e(`<h2 id="_2-\u521D\u59CB\u5316\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_2-\u521D\u59CB\u5316\u8FDE\u63A5" aria-hidden="true">#</a> 2\uFF0C\u521D\u59CB\u5316\u8FDE\u63A5</h2><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u6700\u597D\u76F4\u63A5\u5728\u7BA1\u7406\u5458\u8D26\u53F7\u4E2D\u521B\u5EFA\u4E00\u4E2Aaccess_token\uFF0C\u521D\u59CB\u5316\u4E2D\u7684\u8BA4\u8BC1\u5DE5\u4F5C\u90FD\u57FA\u4E8E\u8FD9\u4E2Atoken\u6765\u8FDB\u884C\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
  git       <span class="token operator">*</span>gitlab<span class="token punctuation">.</span>Client
 token     <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;ceg46SwaL7yy&quot;</span>
 url       <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;https://gitlab.test.com/api/v4&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> err <span class="token builtin">error</span>
 git<span class="token punctuation">,</span> err <span class="token operator">=</span> gitlab<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> gitlab<span class="token punctuation">.</span><span class="token function">WithBaseURL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;initclienterr:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u521D\u59CB\u5316\u5B8C\u6210&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u6211\u4EEC\u5728\u5F00\u5934\u58F0\u660E\u4E00\u4E2A <code>*gitlab.Client</code>\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u521D\u59CB\u5316\u7684\u65F6\u5019\u76F4\u63A5\u5C06\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u5BF9\u8C61\u8D4B\u503C\u7ED9\u8FD9\u4E2A\u53D8\u91CF\uFF0C\u4ECE\u800C\u5728\u5168\u5C40\u90FD\u53EF\u4EE5\u901A\u8FC7\u6B64\u53D8\u91CF\u76F4\u63A5\u4E0Egitlab\u8FDB\u884C\u4EA4\u4E92\u3002</p><p>\u5728\u6E90\u7801\u5F53\u4E2D\uFF0C\u6211\u4EEC\u80FD\u770B\u5230\u8FD9\u4E2A\u5BF9\u8C61\u62E5\u6709\u7684\u5C5E\u6027\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// A Client manages communication with the GitLab API.</span>
<span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 <span class="token comment">// HTTP client used to communicate with the API.</span>
 client <span class="token operator">*</span>retryablehttp<span class="token punctuation">.</span>Client

 <span class="token comment">// Base URL for API requests. Defaults to the public GitLab API, but can be</span>
 <span class="token comment">// set to a domain endpoint to use with a self hosted GitLab server. baseURL</span>
 <span class="token comment">// should always be specified with a trailing slash.</span>
 baseURL <span class="token operator">*</span>url<span class="token punctuation">.</span>URL

  <span class="token comment">//== \u4E2D\u95F4\u90E8\u5206\u7701\u7565 ==//</span>
  
 Projects              <span class="token operator">*</span>ProjectsService
 Releases              <span class="token operator">*</span>ReleasesService
 Users                 <span class="token operator">*</span>UsersService
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u5BF9\u8C61\u90FD\u662F\u6B64\u5305\u7ED9\u6211\u4EEC\u63D0\u4F9B\u7684\u80FD\u529B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u64CD\u4F5C\u8FD9\u4E9B\u5BF9\u8C61\u9644\u5E26\u7684\u5C5E\u6027\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6211\u4EEC\u7684\u9700\u6C42\uFF0C\u63A5\u4E0B\u6765\u6211\u5C06\u901A\u8FC7\u9879\u76EE\u8FD9\u4E2A\u5BF9\u8C61\u6765\u4F5C\u4E3A\u4F8B\u5B50\u8FDB\u884C\u8BB2\u89E3\uFF0C\u4ECE\u800C\u6DF1\u5165\u5730\u8BA4\u8BC6\u5E76\u7406\u89E3\u8FD9\u4E2A\u5305\u7684\u7528\u6CD5\u3002</p><h2 id="_3-\u9879\u76EE\u7684\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#_3-\u9879\u76EE\u7684\u4EA4\u4E92" aria-hidden="true">#</a> 3\uFF0C\u9879\u76EE\u7684\u4EA4\u4E92</h2><h3 id="_1-\u719F\u6089\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#_1-\u719F\u6089\u7ED3\u6784\u4F53" aria-hidden="true">#</a> 1\uFF0C\u719F\u6089\u7ED3\u6784\u4F53</h3><p>go-gitlab\u7684\u5305\u91C7\u7528\u4E86\u975E\u5E38\u4F18\u96C5\u7684\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u601D\u60F3\uFF0C\u5F53\u7136\u8FD9\u5176\u5B9E\u4E5F\u57FA\u6E90\u4E8Egitlab\u5B98\u65B9\u63A5\u53E3\u6587\u6863\u8BBE\u8BA1\u7684\u4F18\u79C0\u3002\u5728\u8FDB\u884C\u4E00\u4E9B\u9879\u76EE\u76F8\u5173\u7684\u64CD\u4F5C\u65F6\uFF0C\u8BE5\u5305\u4F1A\u5C06\u63A5\u53E3\u5BF9\u5E94\u7684\u8FD4\u56DE\u503C\u8D4B\u7ED9\u9879\u76EE\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u6240\u62E5\u6709\u7684\u4E00\u4E9B\u65B9\u6CD5\u5C31\u90FD\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E86\u3002</p><p>\u8FD9\u91CC\u9488\u5BF9\u8FD9\u4E00\u4E2A\u793A\u4F8B\u7A0D\u5FAE\u8BE6\u7EC6\u70B9\u8BB2\u89E3\u4E00\u4E0B\uFF0C\u901A\u8FC7\u7F16\u8F91\u5668\u4EE3\u7801\u8FFD\u8E2A\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u9879\u76EE\u8FD9\u4E2A\u7ED3\u6784\u4F53\u7684\u5B9A\u4E49\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// Project represents a GitLab project.</span>
<span class="token comment">//</span>
<span class="token comment">// GitLab API docs: https://docs.gitlab.com/ce/api/projects.html</span>
<span class="token keyword">type</span> Project <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 ID                                        <span class="token builtin">int</span>                        <span class="token string">\`json:&quot;id&quot;\`</span>
 Description                               <span class="token builtin">string</span>                     <span class="token string">\`json:&quot;description&quot;\`</span>
 DefaultBranch                             <span class="token builtin">string</span>                     <span class="token string">\`json:&quot;default_branch&quot;\`</span>
 Public                                    <span class="token builtin">bool</span>                       <span class="token string">\`json:&quot;public&quot;\`</span>
 Visibility                                VisibilityValue            <span class="token string">\`json:&quot;visibility&quot;\`</span>
 SSHURLToRepo                              <span class="token builtin">string</span>                     <span class="token string">\`json:&quot;ssh_url_to_repo&quot;\`</span>
 HTTPURLToRepo                             <span class="token builtin">string</span>                     <span class="token string">\`json:&quot;http_url_to_repo&quot;\`</span>
 
  <span class="token comment">//== \u4E2D\u95F4\u90E8\u5206\u7701\u7565 ==//</span>
  
 BuildCoverageRegex    <span class="token builtin">string</span>             <span class="token string">\`json:&quot;build_coverage_regex&quot;\`</span>
 IssuesTemplate        <span class="token builtin">string</span>             <span class="token string">\`json:&quot;issues_template&quot;\`</span>
 MergeRequestsTemplate <span class="token builtin">string</span>             <span class="token string">\`json:&quot;merge_requests_template&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>go-gitlab\u5305\u975E\u5E38\u4F18\u79C0\u7684\u4E00\u70B9\u5728\u4E8E\uFF0C\u6BCF\u4E00\u4E2A\u7ED3\u6784\u4F53\u6216\u8005\u63A5\u53E3\uFF0C\u4F5C\u8005\u90FD\u5C06\u5BF9\u5E94\u7684\u5B98\u65B9\u6587\u6863\u5730\u5740\u6807\u6CE8\u5728\u4E86\u6CE8\u91CA\u5F53\u4E2D\uFF0C\u4ECE\u800C\u4FBF\u4E8E\u6211\u4EEC\u80FD\u591F\u76F4\u63A5\u67E5\u9605\u5B98\u65B9\u6587\u6863\u3002</p>`,13),_={href:"https://docs.gitlab.com/ce/api/projects.html",target:"_blank",rel:"noopener noreferrer"},j=e(`<h3 id="_2-\u67E5\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u9879\u76EE" aria-hidden="true">#</a> 2\uFF0C\u67E5\u9879\u76EE</h3><p>\u67E5\u8BE2\u63A5\u53E3\u662F\u6700\u5E38\u89C1\u6700\u5E38\u7528\u7684\uFF0C\u6211\u4EEC\u5C31\u5148\u6765\u770B\u770B\u8FD9\u4E2A\u63A5\u53E3\u600E\u4E48\u4F7F\u7528\uFF0C\u901A\u5E38\uFF0C\u6211\u4EEC\u53EF\u80FD\u5E76\u4E0D\u77E5\u9053\u67D0\u4E2A\u63A5\u53E3\u5BF9\u5E94\u7684\u65B9\u6CD5\u540D\u5B57\u53EB\u4EC0\u4E48\uFF0C\u8FD9\u4E2A\u65F6\u5019\u8981\u4E48\u662F\u53BB\u5B98\u65B9\u63A5\u53E3\u8BF4\u660E\u6587\u6863\u67E5\u770B\uFF0C\u8981\u4E48\u662F\u51ED\u501F\u7ECF\u9A8C\uFF0C\u5728\u7F16\u8F91\u5668\u91CC\u5584\u7528\u8865\u5168\u6765\u8FDB\u884C\u3002</p><p>\u5F53\u6211\u4EEC\u4E86\u89E3\u4E86go-gitlab\u8FD9\u79CD\u9762\u5411\u5BF9\u8C61\u7684\u7F16\u7A0B\u601D\u8DEF\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u62FF\u7740\u5F00\u5934\u521D\u59CB\u5316\u7684client\u5BF9\u8C61\uFF0C\u6765\u64CD\u4F5C\u5B83\u91CC\u8FB9\u7684\u5185\u5BB9\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u8F93\u5165\u4E00\u4E2A<code>git.Project.</code>\u5C31\u80FD\u770B\u5230\u4E0E\u9879\u76EE\u76F8\u5173\u7684\u6240\u6709\u65B9\u6CD5\u4E86\uFF1A</p><p>\u901A\u5E38\uFF0C\u67E5\u8BE2\u63A5\u53E3\u7684\u51FD\u6570\u547D\u540D\u65E0\u975E\u5C31\u662F\u8FD9\u4E48\u51E0\u4E2A\u5173\u952E\u5B57\uFF1A<code>List</code>,<code>Find</code>,<code>Select</code>,<code>Cat</code>\u2026.\u4E8E\u662F\u5982\u679C\u4E00\u5F00\u59CB\u6CA1\u4EC0\u4E48\u5934\u7EEA\u7684\u8BDD\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u5173\u952E\u5B57\u6765\u8FDB\u884C\u6A21\u7CCA\u8865\u5168\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5F80\u4E0B\u7FFB\u53EF\u4EE5\u770B\u5230go-gitlab\u4F7F\u7528\u7684\u662FList\u5173\u952E\u5B57\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>git<span class="token punctuation">.</span>Projects<span class="token punctuation">.</span><span class="token function">ListProjects</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u70B9\u51FB\u65B9\u6CD5\u8DF3\u8F6C\u5230\u6E90\u7801\u5F53\u4E2D\uFF0C\u770B\u5230\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// ListProjects gets a list of projects accessible by the authenticated user.</span>
<span class="token comment">//</span>
<span class="token comment">// GitLab API docs: https://docs.gitlab.com/ce/api/projects.html#list-projects</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>ProjectsService<span class="token punctuation">)</span> <span class="token function">ListProjects</span><span class="token punctuation">(</span>opt <span class="token operator">*</span>ListProjectsOptions<span class="token punctuation">,</span> options <span class="token operator">...</span>RequestOptionFunc<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Project<span class="token punctuation">,</span> <span class="token operator">*</span>Response<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 req<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>MethodGet<span class="token punctuation">,</span> <span class="token string">&quot;projects&quot;</span><span class="token punctuation">,</span> opt<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
 <span class="token punctuation">}</span>

 <span class="token keyword">var</span> p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Project
 resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> <span class="token operator">&amp;</span>p<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> resp<span class="token punctuation">,</span> err
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> p<span class="token punctuation">,</span> resp<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9996\u5148\u8FD8\u662F\u5B98\u65B9\u63A5\u53E3\u6587\u6863\u7684\u5730\u5740\uFF0C\u4EE5\u53CA\u63A5\u53E3\u7684\u5177\u4F53\u5B9A\u4E49\uFF0C\u51FD\u6570\u5B9A\u4E49\u4E2D\u7684\u4E09\u6BB5\u5185\u5BB9\u7B80\u5355\u8BF4\u660E\u5982\u4E0B\uFF1A</p><ul><li><code>(s *ProjectsService)</code>\uFF1A\u8868\u793A <code>ProjectsService</code> \u8FD9\u4E2A\u5BF9\u8C61\u5B9E\u4F8B\u3002</li><li><code>ListProjects()</code>\uFF1A\u8868\u793A<code>ProjectsService</code>\u8FD9\u4E2A\u5BF9\u8C61\u62E5\u6709\u7684<code>ListProjects()</code>\u65B9\u6CD5\u3002\u5176\u4E2D\u7684\u4E24\u4E2A\u53C2\u6570\u90FD\u662F\u5728\u8C03\u7528\u6B64\u65B9\u6CD5\u65F6\u7684\u4E00\u4E9B\u9644\u52A0\u5C5E\u6027\u3002 <ul><li><code>opt *ListProjectsOptions</code>\uFF1A\u67E5\u8BE2\u65F6\u7684\u4E00\u4E9B\u53C2\u6570\uFF0C\u901A\u5E38\u6211\u4EEC\u4F1A\u7528\u5230\u91CC\u8FB9\u7684 <code>ListOptions</code>\u53C2\u6570\u3002</li><li><code>options ...RequestOptionFunc</code>\uFF1A\u81EA\u5B9A\u4E49\u8BF7\u6C42\u53C2\u6570\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u53C2\u6570\u90FD\u4FDD\u6301\u9ED8\u8BA4\u3002</li></ul></li><li><code>([]*Project, *Response, error)</code>\uFF1A\u8FD4\u56DE\u503C\u6709\u4E09\u4E2A\uFF0C\u4E00\u4E2A\u6307\u9488\u7C7B\u578B\u7684\u9879\u76EE\u5207\u7247\uFF0C\u4E00\u4E2A\u72B6\u6001\u7801\uFF0C\u4E00\u4E2A\u9519\u8BEF\u3002</li></ul><p>\u4E86\u89E3\u4E86\u5982\u4E0A\u5185\u5BB9\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7B80\u5355\u5B9A\u4E49\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// GetAllProject \u83B7\u53D6\u6240\u6709\u9879\u76EE</span>
<span class="token keyword">func</span> <span class="token function">GetAllProject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>gitlab<span class="token punctuation">.</span>Project<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 lbo <span class="token operator">:=</span> <span class="token operator">&amp;</span>gitlab<span class="token punctuation">.</span>ListProjectsOptions<span class="token punctuation">{</span>ListOptions<span class="token punctuation">:</span> gitlab<span class="token punctuation">.</span>ListOptions<span class="token punctuation">{</span>Page<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> PerPage<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
 <span class="token keyword">var</span> pro <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>gitlab<span class="token punctuation">.</span>Project
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  p<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> git<span class="token punctuation">.</span>Projects<span class="token punctuation">.</span><span class="token function">ListProjects</span><span class="token punctuation">(</span>lbo<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;list projects failed:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> p <span class="token punctuation">{</span>
   pro <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>pro<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">50</span> <span class="token punctuation">{</span>
   <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  lbo<span class="token punctuation">.</span>ListOptions<span class="token punctuation">.</span>Page<span class="token operator">++</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> pro<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u5B98\u65B9client\u5305\uFF0C\u6211\u4EEC\u53EF\u4EE5\u505A\u4E00\u4E2A\u83B7\u53D6\u5168\u90E8\u9879\u76EE\u7684\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u4E0D\u63A5\u6536\u53C2\u6570\uFF0C\u7136\u540E\u8FD4\u56DE\u6240\u6709\u9879\u76EE\u7684\u5207\u7247\u3002</p><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\u67E5\u8BE2\u7684\u53C2\u6570\uFF0C\u8FD9\u79CD\u7528\u6CD5\u662F\u4E00\u79CD\u6BD4\u8F83\u5E38\u89C1\u7684\u67E5\u8BE2\u63A5\u53E3\u7684\u7528\u6CD5\uFF0C\u4E00\u822C\u63A5\u53E3\u90FD\u4E0D\u4F1A\u76F4\u63A5\u5C06\u6240\u6709\u6570\u636E\u8FD4\u56DE\uFF0C\u800C\u4F1A\u8BBE\u8BA1\u51FA\u5206\u9875\u7684\u88C5\u7F6E\uFF0Cgitlab\u4EA6\u662F\u5982\u6B64\uFF0C\u4E00\u5F00\u59CB\u6211\u5728\u4F7F\u7528 <code>git.Projects.ListProjects()</code>\u65B9\u6CD5\u60F3\u8981\u83B7\u53D6\u6240\u6709\u9879\u76EE\u65F6\uFF0C\u53D1\u73B0\u603B\u662F\u53EA\u62FF\u5230\u4E86\u56FA\u5B9A\u7684\u4E94\u5341\u4E2A\u9879\u76EE\u4FE1\u606F\uFF0C\u5C31\u662F\u56E0\u4E3A\u8FD9\u4E2A\u65B9\u6CD5\u9ED8\u8BA4\u4E5F\u662F\u4F7F\u7528\u4E86\u5206\u9875\u7684\u673A\u5236\u3002</p><p>\u5F53\u6211\u4EEC\u7528\u5982\u4E0A\u65B9\u6CD5\u62FF\u5230\u6240\u6709\u9879\u76EE\u4E4B\u540E\uFF0C\u4E00\u822C\u60C5\u51B5\u53EF\u4EE5\u4F7F\u7528\u904D\u5386\u7684\u65B9\u6CD5\u5C06\u9879\u76EE\u904D\u5386\u51FA\u6765\uFF0C\u7136\u540E\u5229\u7528\u9879\u76EE\u7684\u7ED3\u6784\u4F53\u5BF9\u8C61\uFF0C\u6765\u83B7\u53D6\u6211\u4EEC\u5173\u5FC3\u7684\u4FE1\u606F\u3002</p><h3 id="_3-\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA\u9879\u76EE</h3><p>\u5176\u5B9E\u6709\u4E86\u5982\u4E0A\u7684\u601D\u8DEF\u4E4B\u540E\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u540C\u6837\u501F\u52A9\u4E8E\u7F16\u8F91\u5668\u81EA\u52A8\u8865\u5168\u5BF9\u5E94\u7684\u529F\u80FD\u3002\u9996\u5148\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u521B\u5EFA\u65B9\u6CD5\u7684\u5B9A\u4E49\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>ProjectsService<span class="token punctuation">)</span> <span class="token function">CreateProject</span><span class="token punctuation">(</span>opt <span class="token operator">*</span>CreateProjectOptions<span class="token punctuation">,</span> options <span class="token operator">...</span>RequestOptionFunc<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Project<span class="token punctuation">,</span> <span class="token operator">*</span>Response<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6838\u5FC3\u5728\u4E8E <code>opt *CreateProjectOptions</code>\uFF0C\u518D\u5F80\u6DF1\u5904\u8FFD\u8E2A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u53C2\u6570\u9879\uFF0C\u5C31\u662F\u5BF9\u5E94\u7740\u4E0A\u8FB9get\u51FA\u6765\u7684\u9879\u76EE\u7684\u4E00\u4E2A\u4E2A\u5C5E\u6027\uFF0C\u73B0\u5728\u521B\u5EFA\u9879\u76EE\u4E5F\u662F\u4E00\u6837\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B9A\u4E49\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u6765\u521B\u5EFA\u4E00\u4E2A\u7B26\u5408\u9884\u671F\u7684\u9879\u76EE\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">CreateProject</span><span class="token punctuation">(</span>group<span class="token punctuation">,</span> name<span class="token punctuation">,</span> desc <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  gid<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">GetGroupID</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;get group id err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  p <span class="token operator">:=</span> <span class="token operator">&amp;</span>gitlab<span class="token punctuation">.</span>CreateProjectOptions<span class="token punctuation">{</span>
   Name<span class="token punctuation">:</span>                 gitlab<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
   NamespaceID<span class="token punctuation">:</span>          gitlab<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span>gid<span class="token punctuation">)</span><span class="token punctuation">,</span>
   Description<span class="token punctuation">:</span>          gitlab<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>desc<span class="token punctuation">)</span><span class="token punctuation">,</span>
   MergeRequestsEnabled<span class="token punctuation">:</span> gitlab<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   JobsEnabled<span class="token punctuation">:</span>          gitlab<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   WikiEnabled<span class="token punctuation">:</span>          gitlab<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   SnippetsEnabled<span class="token punctuation">:</span>      gitlab<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   Visibility<span class="token punctuation">:</span>           gitlab<span class="token punctuation">.</span><span class="token function">Visibility</span><span class="token punctuation">(</span>gitlab<span class="token punctuation">.</span>PrivateVisibility<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  project<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> git<span class="token punctuation">.</span>Projects<span class="token punctuation">.</span><span class="token function">CreateProject</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>project<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>project<span class="token punctuation">.</span>WebURL<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u53EA\u662F\u4E00\u4E2A\u793A\u4F8B\u4EE3\u7801\uFF0C\u5E76\u4E0D\u4EE3\u8868\u80FD\u591F\u76F4\u63A5\u8FD0\u884C\uFF0C\u5982\u679C\u4F60\u662F\u5C01\u88C5\u5728\u81EA\u5DF1\u7684\u5E73\u53F0\uFF0C\u6216\u8005\u4EC5\u4EC5\u662F\u505A\u4E00\u4E2A\u811A\u672C\uFF0C\u90A3\u4E48\u53EF\u80FD\u8FD8\u9700\u8981\u6DFB\u52A0\u4E00\u4E9B\u524D\u7F6E\u68C0\u6D4B\u7684\u65B9\u6CD5\u6765\u8F85\u52A9\uFF0C\u6BD4\u5982\uFF1A</p><ul><li>\u5148\u5224\u65AD\u4F20\u9012\u7684\u5206\u7EC4\u662F\u5426\u5B58\u5728\u3002</li><li>\u7136\u540E\u5224\u65AD\u6B64\u9879\u76EE\u662F\u5426\u5DF2\u5B58\u5728\u3002</li><li>\u4EE5\u53CA\u5176\u4ED6\u7684\u4E00\u4E9B\u4F60\u60F3\u8981\u6CE8\u5165\u7684\u53C2\u6570\u3002</li></ul><p>\u597D\u4E86\uFF0C\u5173\u4E8E\u4E0E\u9879\u76EE\u7684\u4EA4\u4E92\u5C31\u8BF4\u5230\u8FD9\u91CC\uFF0C\u5176\u4ED6\u7684\u9700\u6C42\uFF0C\u53EA\u8981\u7ECF\u8FC7\u5408\u7406\u7684\u6D89\u53CA\uFF0C\u53C2\u8003\u5B98\u65B9api\u4EE5\u53CAclient\u5305\u7684\u65B9\u6CD5\uFF0C\u90FD\u80FD\u591F\u5F88\u65B9\u4FBF\u9AD8\u6548\u5730\u5F00\u53D1\u51FA\u6765\u3002</p><h2 id="_4-\u611F\u53D7" tabindex="-1"><a class="header-anchor" href="#_4-\u611F\u53D7" aria-hidden="true">#</a> 4\uFF0C\u611F\u53D7</h2><p>\u4E8B\u5B9E\u4E0A\u6211\u5927\u6982\u662F\u4E3A\u4E86\u60F3\u8981\u5199\u4E00\u4E9B\u611F\u53D7\uFF0C\u624D\u5199\u4E86\u8FD9\u7BC7\u6587\u7AE0\u7684\uFF0C\u4EC0\u4E48\u611F\u53D7\u5462\uFF0C\u90A3\u5C31\u662F\u4E00\u4E2A\u9879\u76EE\u5982\u679C\u6709\u597D\u7684\u6210\u719F\u7684\u8BBE\u8BA1\uFF0C\u4F1A\u65F6\u65F6\u5904\u5904\u9020\u798F\u540E\u6765\u4EBA\uFF01</p><p>\u771F\u6B63\u63A5\u89E6\u4E86\u89E3\u8FC7gitlab-api\u7684\u540C\u5B66\u80AF\u5B9A\u80FD\u4F53\u4F1A\u5230\uFF0C\u6B64\u9879\u76EEapi\u8BBE\u8BA1\u7684\u7EDF\u4E00\u6027\u4EE5\u53CA\u4F18\u96C5\u5EA6\uFF0C\u8BA9\u6211\u4EEC\u65E0\u8BBA\u662F\u901A\u8FC7curl\u547D\u4EE4\u884C\u4E0E\u4E4B\u4EA4\u4E92\uFF0C\u8FD8\u662F\u57FA\u4E8E\u4E00\u4E9B\u5BA2\u6237\u7AEF\u5305\u7684\u4EA4\u4E92\uFF0C\u90FD\u611F\u5230\u4F18\u96C5\u4E0E\u4E1D\u6ED1\u3002</p><p>\u4F46\u5176\u5B9E\u80FD\u591F\u8BBE\u8BA1\u51FA\u5982\u6B64\u6210\u719F\u7EDF\u4E00\u7684\u67B6\u6784\uFF0C\u662F\u975E\u5E38\u56F0\u96BE\u7684\uFF0C\u53EF\u4EE5\u60F3\u89C1gitlab\u9879\u76EE\u7684\u5F00\u53D1\u8005\u4E00\u5B9A\u57FA\u4E8E\u5F88\u591A\u5B9E\u9645\u5F00\u53D1\u7ECF\u9A8C\uFF0C\u4E0B\u4E86\u5F88\u591A\u529F\u592B\u5BF9\u4E4B\u8FDB\u884C\u8BBE\u8BA1\u4E0E\u5B9E\u73B0\uFF0C\u4ECE\u8FD9\u4E2A\u89D2\u5EA6\u6765\u8BF4\uFF0C\u5E94\u8BE5\u81F4\u656C\u3002</p><p>\u6211\u60F3\uFF0C\u8BA9\u4EBA\u611F\u5230\u4E1D\u6ED1\u4E0E\u4F18\u96C5\u7684\u539F\u56E0\uFF0C\u5927\u6982\u662F\u5408\u7406\uFF0C\u7EDF\u4E00\u7684\u63A5\u53E3\u89C4\u8303\uFF0C\u662F\u7684\uFF0C\u5C31\u662F\u89C4\u8303\uFF0C\u5F53\u4E00\u4E2A\u9879\u76EE\uFF0C\u6709\u4E86\u7EDF\u4E00\u7684\u63A5\u53E3\u5165\u53C2\u89C4\u8303\uFF0C\u7EDF\u4E00\u7684\u8FD4\u56DE\u89C4\u8303\uFF0C\u5BF9\u4E8E\u4F7F\u7528\u8005\u800C\u8A00\uFF0C\u5C31\u662F\u4E00\u79CD\u4F18\u96C5\u7684\u611F\u53D7\u3002\u6709\u4EBA\u53EF\u80FD\u4F1A\u8BF4\u89C4\u8303\u5E94\u8BE5\u662F\u4E00\u4E2A\u9879\u76EE\u8981\u6C42\u7684\u57FA\u7840\uFF0C\u7684\u786E\u662F\u57FA\u7840\uFF0C\u4F46\u662F\uFF0C\u6211\u4EEC\u5B9E\u9645\u751F\u4EA7\u4E2D\u5F00\u53D1\u7EF4\u62A4\u7684\u9879\u76EE\uFF0C\u771F\u7684\u80FD\u6709\u591A\u5C11\u662F\u7AD9\u5728\u7EDF\u4E00\u7684\u89C4\u8303\u4E4B\u4E0A\u8FD0\u884C\u7684\u5462\uFF0C\u5C31\u6211\u76EE\u524D\u63A5\u89E6\u7EF4\u62A4\u7684\u800C\u8A00\uFF0C\u5B9E\u9645\u64CD\u4F5C\u8D77\u6765\u5176\u5B9E\u771F\u6B63\u80FD\u591F\u5728\u516C\u53F8\u8BA2\u7ACB\u7EDF\u4E00\u7684\u89C4\u8303\uFF0C\u6BCF\u4E2A\u5F00\u53D1\u8005\u53C8\u80FD\u5BF9\u9F50\u8BA4\u8BC6\uFF0C\u5E76\u5728\u5F00\u53D1\u4E2D\u80FD\u591F\u4E25\u683C\u9075\u5B88\u7684\uFF0C\u5B9E\u5728\u5C11\u4E4B\u53C8\u5C11\u3002</p><p>\u5F88\u591A\u5E94\u8BE5\u5728\u57FA\u672C\u4E0A\u5C31\u505A\u597D\u7684\uFF0C\u5176\u5B9E\u65E9\u90FD\u4E22\u5F97\u4E00\u5E72\u4E8C\u51C0\uFF0C\u5F88\u591A\u5E94\u8BE5\u4E25\u683C\u9075\u7167\u7684\u7EA2\u7EBF\uFF0C\u5176\u5B9E\u65E0\u5F62\u4E2D\u5C31\u5728\u8DE8\u8D8A\u3002\u8FD9\u4E9B\u90FD\u662F\u4E00\u4E2A\u9879\u76EE\uFF0C\u4E00\u4E2A\u56E2\u961F\u5E94\u8BE5\u65F6\u5E38\u62FF\u51FA\u6765\u5BA1\u89C6\u81EA\u7701\u7684\u3002</p>`,28);function P(y,q){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,r,d,n("ul",null,[n("li",null,[s("gitlab\u73AF\u5883\uFF0C\u600E\u4E48\u90E8\u7F72\u8FD9\u91CC\u5C31\u4E0D\u8BE6\u8FF0\u4E86\uFF0C\u53EF\u53C2\u8003\uFF1A"),n("a",k,[s("Gitlab\u7B80\u5355\u90E8\u7F72"),t(a)]),s("\u6700\u597D\u662F12.x\u7248\u672C\u4E4B\u540E\u7684\u7248\u672C\uFF0C\u6709\u4E00\u4E9B\u63A5\u53E3\u572811\u7248\u672C\u4E2D\u8FD8\u4E0D\u652F\u6301\uFF0C\u6BD4\u5982\u9879\u76EE\u79FB\u52A8\u5206\u652F\uFF0C\u83B7\u53D6token\u7684\u63A5\u53E3\u3002")]),n("li",null,[n("a",v,[s("gitlab\u5B98\u65B9\u6587\u6863"),t(a)])]),n("li",null,[n("a",b,[s("gitlab-api\u63A5\u53E3\u6587\u6863"),t(a)])]),n("li",null,[n("a",m,[s("gitlab-api\u4E2D\u6587\u63A5\u53E3\u6587\u6863"),t(a)])]),n("li",null,[n("a",g,[s("go-gitlab\u5305"),t(a)])]),n("li",null,[n("a",h,[s("go-gitlab\u5305\u63A5\u53E3\u8BF4\u660E\u6587\u6863"),t(a)])])]),f,n("p",null,[s("\u6211\u4EEC\u53EF\u4EE5\u770B\u5230"),n("a",_,[s("Project"),t(a)]),s("\u8FD9\u4E2A\u7ED3\u6784\u4F53\u62E5\u6709\u4F17\u591A\u5C5E\u6027\uFF0C\u5F53\u6211\u4EEC\u901A\u8FC7\u63A5\u53E3\u83B7\u53D6\u6216\u8005\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u90FD\u53EF\u4EE5\u501F\u52A9\u4E8E\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u8FDB\u884C\u975E\u5E38\u65B9\u4FBF\u7684\u64CD\u4F5C\u3002")]),j])}const x=p(l,[["render",P],["__file","04.go-gitlab\u5305\u6E90\u7801\u63A2\u5BFB\u4E0E\u5FC3\u5F97.html.vue"]]);export{x as default};
