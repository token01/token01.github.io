import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c,a as s,b as e,d as n,f as o,r as l}from"./app.31f1281d.js";const p={},r=o(`<h1 id="idea-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#idea-\u63D2\u4EF6" aria-hidden="true">#</a> IDEA \u63D2\u4EF6</h1><p>\u5DE5\u6B32\u5584\u5176\u4E8B\u5FC5\u5148\u5229\u5176\u5668\uFF0C\u5206\u4EAB\u51E0\u4E2A\u6BD4\u8F83\u597D\u7528\u7684IDEA \u63D2\u4EF6</p><h2 id="lombok" tabindex="-1"><a class="header-anchor" href="#lombok" aria-hidden="true">#</a> <strong>Lombok</strong></h2><blockquote><p>Lombok\u76EE\u524D\u5DF2\u7ECF\u662F\u5F00\u53D1Java\u5E94\u7528\u7684\u6807\u914D\u4E86\uFF0C\u4E0D\u4EC5SpringBoot\u9ED8\u8BA4\u652F\u6301\u5B83\uFF0C\u8FDEIDEA\u4E5F\u5185\u7F6E\u4E86Lombok\u63D2\u4EF6\uFF0C\u65E0\u9700\u5B89\u88C5\u5373\u53EF\u4F7F\u7528\u3002Lombok\u662F\u4E00\u6B3EJava\u4EE3\u7801\u529F\u80FD\u589E\u5F3A\u5E93\uFF0C\u901A\u8FC7Lombok\u7684\u6CE8\u89E3\uFF0C\u4F60\u53EF\u4EE5\u4E0D\u7528\u518D\u5199getter\u3001setter\u3001equals\u7B49\u65B9\u6CD5\uFF0CLombok\u5C06\u5728\u7F16\u8BD1\u65F6\u4E3A\u4F60\u81EA\u52A8\u751F\u6210\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170738919.png" alt="image-20220830170738919"></p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5F53\u6211\u4EEC\u7ED9\u4E00\u4E2A\u7C7B\u6DFB\u52A0@Getter\u548C@Setter\u6CE8\u89E3\u540E\uFF1B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u4FEE\u6539\u8BA2\u5355\u8D39\u7528\u4FE1\u606F\u53C2\u6570
 * Created by macro on 2018/10/29.
 */</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@Setter</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OmsMoneyInfoParam</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BA2\u5355ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> orderId<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD0\u8D39\u91D1\u989D&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> freightAmount<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;\u7BA1\u7406\u5458\u540E\u53F0\u8C03\u6574\u8BA2\u5355\u6240\u4F7F\u7528\u7684\u6298\u6263\u91D1\u989D&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> discountAmount<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BA2\u5355\u72B6\u6001\uFF1A0-&gt;\u5F85\u4ED8\u6B3E\uFF1B1-&gt;\u5F85\u53D1\u8D27\uFF1B2-&gt;\u5DF2\u53D1\u8D27\uFF1B3-&gt;\u5DF2\u5B8C\u6210\uFF1B4-&gt;\u5DF2\u5173\u95ED\uFF1B5-&gt;\u65E0\u6548\u8BA2\u5355&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> status<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),g={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247488419&idx=1&sn=8fcd89fe0727a5b3fc4179db3aaf9891&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},d=o('<p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170825950.png" alt="image-20220830170825950"></p><h2 id="maven-helper-maven\u4F9D\u8D56\u5206\u6790\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#maven-helper-maven\u4F9D\u8D56\u5206\u6790\u5DE5\u5177" aria-hidden="true">#</a> <strong>Maven Helper</strong>\uFF08Maven\u4F9D\u8D56\u5206\u6790\u5DE5\u5177\uFF09</h2><blockquote><p>\u89E3\u51B3Maven\u4F9D\u8D56\u51B2\u7A81\u7684\u597D\u5E2E\u624B\uFF0C\u53EF\u4EE5\u5FEB\u901F\u67E5\u627E\u9879\u76EE\u4E2D\u7684\u4F9D\u8D56\u51B2\u7A81\uFF0C\u5E76\u4E88\u4EE5\u89E3\u51B3\uFF01</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170334839.png" alt="image-20220830170334839"></p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>pom.xml</code>\u6587\u4EF6\u5E95\u90E8\u7684<code>\u4F9D\u8D56\u5206\u6790</code>\u6807\u7B7E\u9875\u67E5\u770B\u5F53\u524D\u9879\u76EE\u4E2D\u7684\u6240\u6709\u4F9D\u8D56\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/640.png" alt="640"><p>\u901A\u8FC7<code>\u51B2\u7A81</code>\u6309\u94AE\u6211\u4EEC\u53EF\u4EE5\u7B5B\u9009\u51FA\u6240\u6709\u51B2\u7A81\u7684\u4F9D\u8D56\uFF0C\u5F53\u524D\u9879\u76EE<code>guava</code>\u4F9D\u8D56\u6709\u51B2\u7A81\uFF0C\u76EE\u524D\u4F7F\u7528\u7684\u662F<code>18.0</code>\u7248\u672C\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170442742.png" alt="image-20220830170442742"></p><p>\u9009\u4E2D\u6709\u51B2\u7A81\u7684\u4F9D\u8D56\uFF0C\u70B9\u51FB<code>Exclude</code>\u6309\u94AE\u53EF\u4EE5\u76F4\u63A5\u6392\u9664\u8BE5\u4F9D\u8D56\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170500791.png" alt="image-20220830170500791"></p><p>\u540C\u65F6<code>pom.xml</code>\u4E2D\u4E5F\u4F1A\u5BF9\u8BE5\u4F9D\u8D56\u6DFB\u52A0<code>&lt;exclusion&gt;</code>\u6807\u7B7E\uFF0C\u662F\u4E0D\u662F\u5F88\u65B9\u4FBF\u554A\uFF01</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170517332.png" alt="image-20220830170517332"></p><h2 id="restfultoolkit" tabindex="-1"><a class="header-anchor" href="#restfultoolkit" aria-hidden="true">#</a> RestfulToolkit</h2><p>\u4E00\u5957 RESTful \u670D\u52A1\u5F00\u53D1\u8F85\u52A9\u5DE5\u5177\u96C6\u3002</p><p>1.\u6839\u636E URL \u76F4\u63A5\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684\u65B9\u6CD5\u5B9A\u4E49 ( \u5FEB\u6377\u952E\u641C\u7D22 Ctrl + Alt + N \u6216\u8005 Ctrl + \\ ); ---\u8FD9\u4E2A\u4E2A\u4EBA\u611F\u89C9\u975E\u5E38\u597D\u7528\uFF0C\u548CCtrl + F\u4E00\u6837\u91CD\u8981\u3002</p><p>2.\u63D0\u4F9B\u4E86\u4E00\u4E2A Services tree \u7684\u663E\u793A\u7A97\u53E3;</p><p>3.\u4E00\u4E2A\u7B80\u5355\u7684 http \u8BF7\u6C42\u5DE5\u5177;</p><p>4.\u5728\u8BF7\u6C42\u65B9\u6CD5\u4E0A\u6DFB\u52A0\u4E86\u6709\u7528\u529F\u80FD: \u590D\u5236\u751F\u6210 URL;,\u590D\u5236\u65B9\u6CD5\u53C2\u6570...</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830172628438.png" alt="image-20220830172628438"></p><h2 id="save-actions-\u4F18\u5316\u4FDD\u5B58\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#save-actions-\u4F18\u5316\u4FDD\u5B58\u63D2\u4EF6" aria-hidden="true">#</a> Save Actions\uFF08\u4F18\u5316\u4FDD\u5B58\u63D2\u4EF6\uFF09</h2><p>Save Actions\u662FIDEA\u4E00\u6B3E\u683C\u5F0F\u81EA\u52A8\u5316\u7684\u63D2\u4EF6\uFF0C\u5F53\u7A0B\u5E8F\u5458\u5C06\u4EE3\u7801\u4FDD\u5B58\u540E\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u4EE3\u7801\u6D01\u7656\u8005\u7684\u798F\u97F3\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171935784.png" alt="image-20220830171935784"></p><h2 id="codeglance-\u4EE3\u7801\u7F16\u8F91\u533A\u7F29\u7565\u56FE\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#codeglance-\u4EE3\u7801\u7F16\u8F91\u533A\u7F29\u7565\u56FE\u63D2\u4EF6" aria-hidden="true">#</a> CodeGlance (\u4EE3\u7801\u7F16\u8F91\u533A\u7F29\u7565\u56FE\u63D2\u4EF6)</h2><p>CodeGlance\u662F\u4E00\u6B3E\u4EE3\u7801\u7F16\u8F91\u533A\u7F29\u7565\u56FE\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\uFF0C\u4F7F\u7528\u8D77\u6765\u6BD4\u62D6\u52A8\u6EDA\u52A8\u6761\u65B9\u4FBF\u591A\u4E86</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830172526366.png" alt="image-20220830172526366"></p><h2 id="mybatisx" tabindex="-1"><a class="header-anchor" href="#mybatisx" aria-hidden="true">#</a> <strong>MyBatisX</strong></h2><blockquote><p>MybatisX\u662F\u4E00\u6B3E\u57FA\u4E8EIDEA\u7684\u5FEB\u901F\u5F00\u53D1\u63D2\u4EF6\uFF0C\u7531MyBatis-Plus\u56E2\u961F\u5F00\u53D1\u7EF4\u62A4\uFF0C\u63D0\u793A\u5F88\u5168\u529F\u80FD\u4E5F\u5F88\u5F3A\u5927\u3002\u652F\u6301xml\u548CMapper\u63A5\u53E3\u4E4B\u95F4\u7684\u8DF3\u8F6C\uFF0C\u81EA\u5E26\u56FE\u5F62\u5316\u7684\u4EE3\u7801\u751F\u6210\u5668\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7C7B\u4F3CJPA\u7684\u65B9\u5F0F\uFF0C\u76F4\u63A5\u6839\u636E\u65B9\u6CD5\u540D\u79F0\u751F\u6210SQL\u5B9E\u73B0\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170916236.png" alt="image-20220830170916236"></p><p>\u6211\u4EEC\u70B9\u51FBMapper\u63A5\u53E3\u65B9\u6CD5\u5DE6\u4FA7\u7684\u56FE\u6807\u53EF\u4EE5\u76F4\u63A5\u8DF3\u8F6C\u5230xml\u4E2D\u5BF9\u5E94\u7684SQL\u5B9E\u73B0\uFF0C\u5728xml\u70B9\u51FB\u5DE6\u4FA7\u56FE\u6807\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8DF3\u8F6C\u5230Mapper\u63A5\u53E3\u4E2D\u5BF9\u5E94\u7684\u65B9\u6CD5\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/640 (2).gif" alt="640 (2)">%%%%</p>',30),m={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247502551&idx=1&sn=5017e6bf5b9aaabebcad8fb9f3fc7d89&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},b=o('<p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/640 (3).gif" alt="640 (3)"></p><h2 id="gsonformatplus" tabindex="-1"><a class="header-anchor" href="#gsonformatplus" aria-hidden="true">#</a> GsonFormatPlus</h2><blockquote><p>\u4E00\u6B3E\u80FD\u6839\u636EJSON\u5B57\u7B26\u4E32\u81EA\u52A8\u751F\u6210\u5B9E\u4F53\u7C7B\u7684\u63D2\u4EF6\uFF0C\u652F\u6301Lombok\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830165920278.png" alt="image-20220830165920278"></p><p>\u9009\u62E9\u7C7B\u540D\uFF0C\u53F3\u952E\u751F\u6210\uFF0C\u8F93\u5165JSON\u5B57\u7B26\u4E32\u5373\u53EF\u5FEB\u901F\u751F\u6210\u5BF9\u5E94\u5B9E\u4F53\u7C7B\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/640.gif" alt="640"></p><h2 id="alibaba-java-coding-guidelines" tabindex="-1"><a class="header-anchor" href="#alibaba-java-coding-guidelines" aria-hidden="true">#</a> <strong>Alibaba Java Coding Guidelines</strong></h2><blockquote><p>\u963F\u91CC\u5DF4\u5DF4\u300AJava \u5F00\u53D1\u624B\u518C\u300B\u914D\u5957\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5B9E\u65F6\u68C0\u6D4B\u4EE3\u7801\u4E2D\u4E0D\u7B26\u5408\u624B\u518C\u89C4\u7EA6\u7684\u5730\u65B9\uFF0C\u52A9\u4F60\u7801\u51FA\u9AD8\u6548\uFF0C\u7801\u51FA\u8D28\u91CF\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170124136.png" alt="image-20220830170124136"></p><p>\u6BD4\u5982\u8BF4\u624B\u518C\u91CC\u6709\u8FD9\u4E48\u4E00\u6761\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170143315.png" alt="image-20220830170143315"></p><p>\u5F53\u6211\u4EEC\u8FDD\u53CD\u624B\u518C\u89C4\u7EA6\u65F6\uFF0C\u8BE5\u63D2\u4EF6\u4F1A\u81EA\u52A8\u68C0\u6D4B\u5E76\u8FDB\u884C\u63D0\u793A\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170205756.png" alt="image-20220830170205756"></p><p>\u540C\u65F6\u63D0\u4F9B\u4E86\u4E00\u952E\u68C0\u6D4B\u6240\u6709\u4EE3\u7801\u89C4\u7EA6\u60C5\u51B5\u548C\u5207\u6362\u8BED\u8A00\u7684\u529F\u80FD\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170232658.png" alt="image-20220830170232658"></p><p>\u5982\u679C\u4F60\u60F3\u4FEE\u6539\u67D0\u6761\u89C4\u7EA6\u7684\u68C0\u6D4B\u89C4\u5219\u7684\u8BDD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u7684<code>Editor-&gt;Inspections</code>\u8FDB\u884C\u4FEE\u6539\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170254540.png" alt="image-20220830170254540"></p><h2 id="arthas-idea" tabindex="-1"><a class="header-anchor" href="#arthas-idea" aria-hidden="true">#</a> <strong>arthas idea</strong></h2><blockquote><p>\u57FA\u4E8EIDEA\u5F00\u53D1\u7684Arthas\u547D\u4EE4\u751F\u6210\u63D2\u4EF6\uFF0C\u652F\u6301Arthas\u5B98\u65B9\u5E38\u7528\u7684\u547D\u4EE4\uFF0C\u6BD4\u5982 watch\u3001trace\u3001ognl static\u3001ognl bean method\u3001field\u3001monitor\u3001stack \u3001tt\u7B49\u547D\u4EE4\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171417627.png" alt="image-20220830171417627"></p>',20),h={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247499910&idx=1&sn=05c3177e74009bcaf309d5abd27ec4d5&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},u=o('<p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171438377.png" alt="image-20220830171438377"></p><h2 id="key-promoter-x" tabindex="-1"><a class="header-anchor" href="#key-promoter-x" aria-hidden="true">#</a> <strong>Key Promoter X</strong></h2><blockquote><p>Key Promoter X \u662F\u4E00\u6B3E\u5E2E\u52A9\u4F60\u5FEB\u901F\u5B66\u4E60IDEA\u5FEB\u6377\u952E\u7684\u63D2\u4EF6\uFF0C\u5F53\u4F60\u5728IDEA\u4E2D\u7528\u9F20\u6807\u70B9\u51FB\u67D0\u4E9B\u529F\u80FD\u65F6\uFF0C\u5B83\u4F1A\u81EA\u52A8\u63D0\u793A\u4F60\u4F7F\u7528\u8BE5\u529F\u80FD\u7684\u5FEB\u6377\u952E\u3002\u5B83\u80FD\u8BA9\u4F60\u66F4\u8F7B\u677E\u5730\u6446\u8131\u4F7F\u7528\u9F20\u6807\u529F\u80FD\uFF0C\u4ECE\u800C\u53EA\u4F7F\u7528\u952E\u76D8\u6765\u5F00\u53D1\uFF0C\u8FD9\u5927\u6982\u662F\u521A\u5F00\u59CB\u4F7F\u7528IDEA\u7684\u7A0B\u5E8F\u5458\u6700\u9700\u8981\u7684\u63D2\u4EF6\u4E86\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830170623783.png" alt="image-20220830170623783"></p><p>\u5F53\u6211\u4EEC\u4F7F\u7528\u9F20\u6807\u5B8C\u6210\u67D0\u4E9B\u5DE5\u4F5C\u65F6\uFF0CKey Promoter X\u4F1A\u63D0\u793A\u5BF9\u5E94\u7684\u5FEB\u6377\u952E\uFF0C\u65B9\u4FBF\u6211\u4EEC\u66F4\u5FEB\u5730\u638C\u63E1IDEA\u7684\u5FEB\u6377\u952E\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/640 (1).gif" alt="640 (1)"></p><h2 id="sequencediagram-\u65B9\u6CD5\u8C03\u7684\u6DF1\u5EA6-\u751F\u4EA7\u65F6\u5E8F\u56FE" tabindex="-1"><a class="header-anchor" href="#sequencediagram-\u65B9\u6CD5\u8C03\u7684\u6DF1\u5EA6-\u751F\u4EA7\u65F6\u5E8F\u56FE" aria-hidden="true">#</a> <strong>SequenceDiagram</strong>\uFF08\u65B9\u6CD5\u8C03\u7684\u6DF1\u5EA6\uFF0C\u751F\u4EA7\u65F6\u5E8F\u56FE\uFF09</h2><blockquote><p>SequenceDiagram\u662F\u4E00\u6B3E\u80FD\u6839\u636E\u4EE3\u7801\u751F\u6210\u65F6\u5E8F\u56FE\u7684\u63D2\u4EF6\uFF0C\u8FD8\u652F\u6301\u5728\u65F6\u5E8F\u56FE\u4E0A\u76F4\u63A5\u5BFC\u822A\u5230\u5BF9\u5E94\u4EE3\u7801\u4EE5\u53CA\u5BFC\u51FA\u4E3A\u56FE\u7247\u6216PlantUML\u6587\u4EF6\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171149521.png" alt="image-20220830171149521"></p>',9),z={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247502397&idx=1&sn=f741bdcb205cc3304ae754fe9403ae7e&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,[s("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171209255.png",alt:"image-20220830171209255"})],-1),_=s("h2",{id:"plantuml",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#plantuml","aria-hidden":"true"},"#"),e(),s("strong",null,"PlantUML")],-1),v=s("blockquote",null,[s("p",null,"PlantUML\u662F\u4E00\u6B3E\u5F00\u6E90\u7684UML\u56FE\u7ED8\u5236\u5DE5\u5177\uFF0C\u652F\u6301\u901A\u8FC7\u6587\u672C\u6765\u751F\u6210\u56FE\u5F62\uFF0C\u4F7F\u7528\u8D77\u6765\u975E\u5E38\u9AD8\u6548\u3002\u53EF\u4EE5\u652F\u6301\u65F6\u5E8F\u56FE\u3001\u7C7B\u56FE\u3001\u5BF9\u8C61\u56FE\u3001\u6D3B\u52A8\u56FE\u3001\u601D\u7EF4\u5BFC\u56FE\u7B49\u56FE\u5F62\u7684\u7ED8\u5236\u3002")],-1),y=s("p",null,[s("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171240320.png",alt:"image-20220830171240320"})],-1),f={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247494438&idx=1&sn=d077f02bbe50276c9939d0c652809f4b&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},j=s("p",null,[s("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/640 (4).gif",alt:"640 (4)"})],-1),q=s("h2",{id:"docker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),e(),s("strong",null,"Docker")],-1),x=s("blockquote",null,[s("p",null,"IDEA\u5B98\u65B9\u63D0\u4F9B\u7684Docker\u63D2\u4EF6\uFF0C\u5DF2\u5185\u7F6E\uFF0C\u652F\u6301\u8FDC\u7A0BDocker\u73AF\u5883\u7684\u955C\u50CF\u548C\u5BB9\u5668\u7BA1\u7406\uFF0C\u540C\u65F6\u652F\u6301\u4F7F\u7528Docker Compose\u5B9E\u73B0\u6279\u91CF\u90E8\u7F72\u3002")],-1),M=s("p",null,[s("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171521120.png",alt:"image-20220830171521120"})],-1),A={href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247500482&idx=1&sn=713a30c88cea125f4768e6a0df939600&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},w=o('<p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171535473.png" alt="image-20220830171535473"></p><h2 id="grep-console" tabindex="-1"><a class="header-anchor" href="#grep-console" aria-hidden="true">#</a> <strong>Grep Console</strong></h2><blockquote><p>\u4E00\u6B3E\u5E2E\u4F60\u5206\u6790\u63A7\u5236\u53F0\u65E5\u5FD7\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5BF9\u4E0D\u540C\u7EA7\u522B\u7684\u65E5\u5FD7\u8FDB\u884C\u4E0D\u540C\u989C\u8272\u7684\u9AD8\u4EAE\u663E\u793A\uFF0C\u8FD8\u53EF\u4EE5\u7528\u6765\u6309\u5173\u952E\u5B57\u641C\u7D22\u65E5\u5FD7\u5185\u5BB9\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171557762.png" alt="image-20220830171557762"></p><p>\u5F53\u9879\u76EE\u6253\u5370\u65E5\u5FD7\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u53D1\u73B0\u4E0D\u540C\u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u4F1A\u4EE5\u4E0D\u540C\u989C\u8272\u6765\u663E\u793A\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171614137.png" alt="image-20220830171614137"></p><p>\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u914D\u8272\u65B9\u6848\u7684\u8BDD\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>Tools</code>\u6253\u5F00\u8BE5\u63D2\u4EF6\u7684\u914D\u7F6E\u83DC\u5355\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171626774.png" alt="image-20220830171626774"></p><p>\u7136\u540E\u901A\u8FC7\u914D\u7F6E\u83DC\u5355\u4FEE\u6539\u914D\u8272\u65B9\u6848\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171641735.png" alt="image-20220830171641735"></p><p>\u53EF\u4EE5\u901A\u8FC7\u5728\u63A7\u5236\u53F0\u53F3\u952E\u5E76\u4F7F\u7528<code>Grep</code>\u6309\u94AE\u6765\u8C03\u51FA\u65E5\u5FD7\u5206\u6790\u7684\u7A97\u53E3\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171654853.png" alt="image-20220830171654853"></p><p>\u7136\u540E\u76F4\u63A5\u901A\u8FC7\u5173\u952E\u5B57\u6765\u641C\u7D22\u5373\u53EF\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171705764.png" alt="image-20220830171705764"></p><h2 id="statistic" tabindex="-1"><a class="header-anchor" href="#statistic" aria-hidden="true">#</a> <strong>Statistic</strong></h2><blockquote><p>\u4E00\u6B3E\u4EE3\u7801\u7EDF\u8BA1\u5DE5\u5177\uFF0C\u53EF\u4EE5\u7528\u6765\u7EDF\u8BA1\u5F53\u524D\u9879\u76EE\u4E2D\u4EE3\u7801\u7684\u884C\u6570\u548C\u5927\u5C0F\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171751793.png" alt="image-20220830171751793"></p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u9876\u90E8\u83DC\u5355\u4E2D\u7684<code>View-&gt;Tool Windows-&gt;Statistic</code>\u6309\u94AE\u5F00\u542F\u8BE5\u529F\u80FD\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171806817.png" alt="image-20220830171806817"></p><p>\u6B64\u65F6\u5C31\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u9879\u76EE\u4EE3\u7801\u7684\u7EDF\u8BA1\u60C5\u51B5\u4E86\uFF0C\u6BD4\u5982\u6211\u7684\u5F00\u6E90\u9879\u76EE<code>mall</code>\u4E2D<code>java</code>\u4EE3\u7801\u5927\u5C0F\u4E3A<code>2818kB</code>\uFF0C\u884C\u6570\u4E3A<code>85645</code>\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830171820145.png" alt="image-20220830171820145"></p><h2 id="javadoc-javadoc\u751F\u6210\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#javadoc-javadoc\u751F\u6210\u63D2\u4EF6" aria-hidden="true">#</a> Javadoc\uFF08Javadoc\u751F\u6210\u63D2\u4EF6\uFF09</h2><p>\u8BE5\u63D2\u4EF6\u53EF\u4EE5\u5728java\u7C7B\u5143\u7D20\uFF08\u5982\u5B57\u6BB5\u3001\u65B9\u6CD5\u7B49\uFF09\u4E0A\u751F\u6210javadoc\u7684\u63D2\u4EF6\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220830172336635.png" alt="image-20220830172336635"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',25),D={href:"https://mp.weixin.qq.com/s/KiXWyhteyAiHo6FkYr2wXg",target:"_blank",rel:"noopener noreferrer"},L={href:"https://developer.aliyun.com/article/803464",target:"_blank",rel:"noopener noreferrer"};function I(E,S){const a=l("ExternalLinkIcon");return t(),c("div",null,[r,s("p",null,[e("Lombok\u5C31\u4F1A\u4E3A\u6211\u4EEC\u81EA\u52A8\u751F\u6210\u6240\u6709\u5C5E\u6027\u7684Getter\u548CSetter\u65B9\u6CD5\uFF0C\u65E0\u9700\u6211\u4EEC\u518D\u624B\u5199\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003"),s("a",g,[e("Lombok\u7684\u4F7F\u7528"),n(a)]),e(" \u3002")]),d,s("p",null,[e("\u5F53\u6211\u4EEC\u521B\u5EFA\u7B26\u5408JPA\u89C4\u8303\u7684\u65B9\u6CD5\u65F6\uFF0C\u80FD\u76F4\u63A5\u751F\u6210SQL\u5B9E\u73B0\u65E0\u9700\u624B\u5199\uFF0CMyBatisX\u7684\u529F\u80FD\u5F88\u5F3A\u5927\uFF0C\u8BE6\u7EC6\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003"),s("a",m,[e("MybatisX\u63D2\u4EF6\u7684\u4F7F\u7528"),n(a)]),e(" \u3002")]),b,s("p",null,[e("\u76F4\u63A5\u6253\u5F00\u53F3\u952E\u83DC\u5355\uFF0C\u9009\u62E9Arthas\u547D\u4EE4\u5373\u53EF\u5FEB\u901F\u751F\u6210\u547D\u4EE4\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003"),s("a",h,[e("Arthas\u4F7F\u7528\u6559\u7A0B"),n(a)]),e(" \u3002")]),u,s("p",null,[e("\u4E0B\u9762\u662F\u4E00\u5F20\u4F7F\u7528SequenceDiagram\u5236\u4F5C\u7684\u65F6\u5E8F\u56FE\uFF0C\u8FD8\u662F\u975E\u5E38\u4E0D\u9519\u7684\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003"),s("a",z,[e("SequenceDiagram\u63D2\u4EF6\u7684\u4F7F\u7528"),n(a)]),e(" \u3002")]),k,_,v,y,s("p",null,[e("\u4E0B\u9762\u4F7F\u7528PlantUML\u6765\u7ED8\u5236\u4E00\u5F20\u6D41\u7A0B\u56FE\uFF0C\u53EF\u4EE5\u5B9E\u65F6\u9884\u89C8\uFF0C\u901F\u5EA6\u4E5F\u5F88\u5FEB\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003"),s("a",f,[e("PlantUML\u63D2\u4EF6\u7684\u4F7F\u7528"),n(a)]),e(" \u3002")]),j,q,x,M,s("p",null,[e("\u901A\u8FC7\u5B83\u80FD\u81EA\u52A8\u6253\u5305\u5E94\u7528\u7684\u955C\u50CF\uFF0Cjar\u5305\u4F1A\u76F4\u63A5\u4E0A\u4F20\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u5E76\u6253\u5305\u6210\u955C\u50CF\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003"),s("a",A,[e("IDEA\u5B98\u65B9Docker\u63D2\u4EF6\u7684\u4F7F\u7528"),n(a)]),e(" \u3002")]),w,s("p",null,[s("a",D,[e("\u770B\u4E86\u6211\u5E38\u7528\u7684IDEA\u63D2\u4EF6\uFF0C\u540C\u4E8B\u4E5F\u5F00\u59CB\u6084\u6084\u5B89\u88C5\u4E86..."),n(a)])]),s("p",null,[s("a",L,[e("IntelliJ IDEA\u5E38\u7528\u63D2\u4EF6\u63A8\u8350"),n(a)])])])}const U=i(p,[["render",I],["__file","idea-plugin.html.vue"]]);export{U as default};
