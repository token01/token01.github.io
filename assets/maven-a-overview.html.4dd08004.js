import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,a as e,b as a,d as s,f as i,r as c}from"./app.59d8da70.js";const o={},r=i(`<h1 id="maven\u6838\u5FC3\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#maven\u6838\u5FC3\u77E5\u8BC6" aria-hidden="true">#</a> Maven\u6838\u5FC3\u77E5\u8BC6</h1><h2 id="_1-maven-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-maven-\u7B80\u4ECB" aria-hidden="true">#</a> 1. Maven \u7B80\u4ECB</h2><p>Maven \u662F\u4E00\u4E2A\u9879\u76EE\u7BA1\u7406\u5DE5\u5177\uFF0C\u4ED6\u5305\u542B\u4E86</p><ul><li>\u4E00\u4E2A\u9879\u76EE\u5BF9\u8C61\u6A21\u578B\uFF08Project Object Model\uFF09</li><li>\u4E00\u7EC4\u6807\u51C6\u96C6\u5408</li><li>\u4E00\u4E2A\u9879\u76EE\u751F\u547D\u5468\u671F\uFF08Project Lifecycle\uFF09</li><li>\u4E00\u4E2A\u4F9D\u8D56\u7BA1\u7406\u7CFB\u7EDF\uFF08Dependency Management System\uFF09</li><li>\u548C\u7528\u6765\u8FD0\u884C\u5B9A\u4E49\u5728\u751F\u547D\u5468\u671F\u9636\u6BB5\uFF08phase\uFF09\u4E2D\u7684\u63D2\u4EF6\uFF08pulgin\uFF09\u76EE\u6807\uFF08goal\uFF09\u7684\u903B\u8F91</li></ul><h2 id="_2-\u6838\u5FC3\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_2-\u6838\u5FC3\u529F\u80FD" aria-hidden="true">#</a> 2. \u6838\u5FC3\u529F\u80FD</h2><ul><li>\u4F9D\u8D56\u7BA1\u7406\uFF1AMaven\u5DE5\u7A0B\u5BF9jar\u5305\u7684\u7BA1\u7406\u8FC7\u7A0B</li><li>\u9879\u76EE\u6784\u5EFA</li></ul><h2 id="_3-\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_3-\u4ED3\u5E93" aria-hidden="true">#</a> 3. \u4ED3\u5E93</h2><ul><li>\u672C\u5730\u4ED3\u5E93</li><li>\u8FDC\u7A0B\u4ED3\u5E93\uFF08\u79C1\u670D\uFF09</li><li>\u4E2D\u592E\u4ED3\u5E93</li></ul><h2 id="_4-maven-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-maven-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 4. Maven \u5E38\u7528\u547D\u4EE4</h2><ul><li>clean\uFF1A\u5220\u9664\u9879\u76EE\u4E2D\u5DF2\u7ECF\u7F16\u8BD1\u597D\u7684\u4FE1\u606F\uFF0C\u5220\u9664target\u76EE\u5F55</li><li>compile\uFF1AMaven\u5DE5\u7A0B\u7684\u7F16\u8BD1\u547D\u4EE4\uFF0C\u7528\u4E8E\u7F16\u8BD1\u9879\u76EE\u7684\u6E90\u4EE3\u7801\uFF0C\u5C06<code>src/main/java</code>\u4E0B\u7684\u6587\u4EF6\u7F16\u8BD1\u6210class\u6587\u4EF6\u8F93\u51FA\u5230target\u76EE\u5F55\u4E0B</li><li>test\uFF1A\u4F7F\u7528\u5408\u9002\u7684\u5355\u5143\u6D4B\u8BD5\u6846\u67B6\u8FD0\u884C\u6D4B\u8BD5</li><li>package\uFF1A\u5C06\u7F16\u8BD1\u597D\u7684\u4EE3\u7801\u6253\u5305\u6210\u53EF\u5206\u53D1\u7684\u683C\u5F0F\uFF0C\u5982jar\uFF0Cwar</li><li>install\uFF1A\u5B89\u88C5\u5305\u81F3\u672C\u5730\u4ED3\u5E93\uFF0C\u5DF2\u5907\u672C\u5730\u7684\u5176\u5B83\u9879\u76EE\u4F5C\u4E3A\u4F9D\u8D56\u4F7F\u7528</li><li>deploy: \u590D\u5236\u6700\u7EC8\u7684\u5305\u81F3\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5171\u4EAB\u7ED9\u5176\u4ED6\u5F00\u53D1\u4EBA\u5458\u548C\u9879\u76EE\uFF08\u901A\u5E38\u548C\u4E00\u6B21\u6B63\u5F0F\u53D1\u5E03\u76F8\u5173\uFF09</li></ul><p>\u6BCF\u4E00\u4E2A\u6784\u5EFA\u9879\u76EE\u7684\u547D\u4EE4\u90FD\u5BF9\u5E94\u4E86maven\u5E95\u5C42\u4E00\u4E2A\u63D2\u4EF6</p><h2 id="_5-maven\u547D\u4EE4package\u3001install\u3001deploy-\u7684\u8054\u7CFB\u548C\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_5-maven\u547D\u4EE4package\u3001install\u3001deploy-\u7684\u8054\u7CFB\u548C\u533A\u522B" aria-hidden="true">#</a> 5. Maven\u547D\u4EE4package\u3001install\u3001deploy \u7684\u8054\u7CFB\u548C\u533A\u522B</h2><ul><li><p>mvn clean package\uFF1A</p><p>\u4F9D\u6B21\u6267\u884C\u4E86clean\u3001resources\u3001compile\u3001testResources\u3001testCompile\u3001test\u3001jar\uFF08\u6253\u5305\uFF09\u7B49\u4E03\u4E2A\u9636\u6BB5</p></li><li><p>mvn clean install\uFF1A</p><p>\u4F9D\u6B21\u6267\u884C\u4E86 clean\u3001resources\u3001compile\u3001testResuources\u3001testComplie\u3001jar\uFF08\u6253\u5305\uFF09\u3001install \u7B498\u4E2A\u9636\u6BB5</p></li><li><p>mvn clean deploy:</p><p>\u4F9D\u6B21\u6267\u884C\u4E86clean\u3001resources\u3001compile\u3001testResuources\u3001testComplie\u3001jar\uFF08\u6253\u5305\uFF09\u3001install\u3001deploy\u7B499\u4E2A\u9636\u6BB5</p></li></ul><p><strong>\u4E3B\u8981\u533A\u522B\uFF1A</strong> package\u547D\u4EE4\u5B8C\u6210\u4E86\u9879\u76EE\u7F16\u8BD1\u3001\u5355\u5143\u6D4B\u8BD5\u3001\u6253\u5305\u529F\u80FD\uFF0C\u4F46\u6CA1\u6709\u628A\u6253\u597D\u7684\u53EF\u6267\u884Cjar\u5305\uFF08war\u5305\u6216\u5176\u5B83\u5F62\u5F0F\u7684\u5305\uFF09\u5E03\u7F72\u5230\u672C\u5730maven\u4ED3\u5E93\u548C\u8FDC\u7A0Bmaven\u79C1\u670D\u4ED3\u5E93\u3002</p><p>install\u547D\u4EE4\u5B8C\u6210\u4E86\u9879\u76EE\u7F16\u8BD1\u3001\u5355\u5143\u6D4B\u8BD5\u3001\u6253\u5305\u529F\u80FD\uFF0C\u540C\u65F6\u628A\u6253\u597D\u7684\u53EF\u6267\u884Cjar\u5305\uFF08war\u5305\u6216\u5176\u5B83\u5F62\u5F0F\u7684\u5305\uFF09\u5E03\u7F72\u5230\u672C\u5730maven\u4ED3\u5E93\uFF0C\u4F46\u6CA1\u6709\u5E03\u7F72\u5230\u8FDC\u7A0Bmaven\u79C1\u670D\u4ED3\u5E93\u3002</p><p>deploy\u547D\u4EE4\u5B8C\u6210\u4E86\u9879\u76EE\u7F16\u8BD1\u3001\u5355\u5143\u6D4B\u8BD5\u3001\u6253\u5305\u529F\u80FD\uFF0C\u540C\u65F6\u628A\u6253\u597D\u7684\u53EF\u6267\u884Cjar\u5305\uFF08war\u5305\u6216\u5176\u5B83\u5F62\u5F0F\u7684\u5305\uFF09\u5E03\u7F72\u5230\u672C\u5730maven\u4ED3\u5E93\u548C\u8FDC\u7A0Bmaven\u79C1\u670D\u4ED3\u5E93\u3002</p><h2 id="_6-maven-\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_6-maven-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 6. Maven \u751F\u547D\u5468\u671F</h2><p>\u6E05\u7406\u751F\u547D\u5468\u671F\uFF1A\u8FD0\u884C mvn clean \u5C06\u8C03\u7528\u6E05\u7406\u751F\u547D\u5468\u671F</p><p>\u9ED8\u8BA4\u751F\u547D\u5468\u671F\uFF1A\u662F\u4E00\u4E2A\u8F6F\u4EF6\u5E94\u7528\u7A0B\u5E8F\u6784\u5EFA\u8FC7\u7A0B\u7684\u603B\u4F53\u6A21\u578B</p><p>compile\u3001test\u3001package\u3001install\u3001deploy</p><p>\u7AD9\u70B9\u751F\u547D\u5468\u671F\uFF1A\u4E3A\u4E00\u4E2A\u6216\u8005\u4E00\u7EC4\u9879\u76EE\u751F\u6210\u9879\u76EE\u6587\u6863\u548C\u62A5\u544A\uFF0C\u4F7F\u7528\u8F83\u5C11\u3002</p><h2 id="_7-maven-\u4F9D\u8D56\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#_7-maven-\u4F9D\u8D56\u8303\u56F4" aria-hidden="true">#</a> 7. Maven \u4F9D\u8D56\u8303\u56F4</h2><ul><li><p>complie\uFF1A\u9ED8\u8BA4\u8303\u56F4\u3001\u7F16\u8BD1\u6D4B\u8BD5\u8FD0\u884C\u90FD\u6709\u6548</p></li><li><p>provided\uFF1A\u7F16\u8BD1\u548C\u8FD0\u884C\u6709\u6548\uFF0C\u6700\u540E\u5728\u8FD0\u884C\u7684\u65F6\u5019\u4E0D\u4F1A\u52A0\u5165</p><p>\u5B98\u65B9\u4E3E\u4E86\u4E00\u4E2A\u4F8B\u5B50\u3002\u6BD4\u5982\u5728JavaEE web\u9879\u76EE\u4E2D\u6211\u4EEC\u9700\u8981\u4F7F\u7528servlet\u7684API\uFF0C\u4F46\u662FTomcat\u4E2D\u5DF2\u7ECF\u63D0\u4F9B\u8FD9\u4E2Ajar\uFF0C\u6211\u4EEC\u5728\u7F16\u8BD1\u548C\u6D4B\u8BD5\u7684\u65F6\u5019\u9700\u8981\u4F7F\u7528\u8FD9\u4E2Aapi\uFF0C\u4F46\u662F\u90E8\u7F72\u5230tomcat\u7684\u65F6\u5019\uFF0C\u5982\u679C\u8FD8\u52A0\u5165servlet\u6784\u5EFA\u5C31\u4F1A\u4EA7\u751F\u51B2\u7A81\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528provided\u3002</p></li><li><p>runtime\uFF1A\u6D4B\u8BD5\u548C\u8FD0\u884C\u6709\u6548</p></li><li><p>test\uFF1A\u6D4B\u8BD5\u6709\u6548</p></li><li><p>system\uFF1A\u4E0E\u672C\u673A\u7CFB\u7EDF\u5173\u8054\uFF0C\u7F16\u8BD1\u548C\u6D4B\u8BD5\u65F6\u6709\u6548</p></li></ul><p>-\u3000import\uFF1A\u5BFC\u5165\u7684\u8303\u56F4\uFF0C\u5B83\u53EA\u5728\u4F7F\u7528dependencyManagement\u4E2D\uFF0C\u8868\u793A\u4ECE\u5176\u4ED6pom\u4E2D\u5BFC\u5165dependecy\u7684\u914D\u7F6E\u3002</p><h2 id="_8-\u4F9D\u8D56\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#_8-\u4F9D\u8D56\u51B2\u7A81" aria-hidden="true">#</a> 8. \u4F9D\u8D56\u51B2\u7A81</h2><p>\u6BCF\u4E2A\u663E\u793A\u7533\u660E\u7684\u7C7B\u5305\u90FD\u4F1A\u4F9D\u8D56\u4E8E\u4E00\u4E9B\u5176\u5B83\u7684\u9690\u5F0F\u7C7B\uFF0C\u8FD9\u4E9B\u9690\u5F0F\u7684\u7C7B\u5305\u4F1A\u88ABmaven\u95F4\u63A5\u4F9D\u8D56\u8FDB\u6765\uFF0C\u56E0\u800C\u53EF\u80FD\u9020\u6210\u4E00\u4E2A\u6211\u4EEC\u4E0D\u60F3\u8981\u7684\u7C7B\u5305\u7684\u8F7D\u5165\uFF0C\u4E25\u91CD\u7684\u751A\u81F3\u4F1A\u5F15\u8D77\u7C7B\u5305\u4E4B\u95F4\u7684\u51B2\u7A81</p><p>\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u9996\u5148\u5C31\u662F\u8981\u67E5\u770Bpom.xml \u663E\u5F0F\u548C\u9690\u5F0F\u7684\u4F9D\u8D56\u7C7B\u5305\uFF0C\u7136\u540E\u901A\u8FC7\u8FD9\u4E2A\u7C7B\u5305\u6811\u627E\u51FA\u6211\u4EEC\u4E0D\u60F3\u8981\u7684\u4F9D\u8D56\u7C7B\u5305\uFF0C\u624B\u5DE5\u5C06\u5176\u6392\u9664\u5728\u5916\u5C31\u53EF\u4EE5\u4E86</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>  
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>unitils-database<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>  
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.unitils<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,29),d={href:"https://www.cnblogs.com/sgh1023/p/10900130.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.cnblogs.com/sgh1023/p/10900130.html",target:"_blank",rel:"noopener noreferrer"};function h(m,v){const n=c("ExternalLinkIcon");return l(),p("div",null,[r,e("p",null,[a("["),e("a",d,[a("Maven\u6838\u5FC3\u77E5\u8BC6\u70B9\u68B3\u7406"),s(n)]),a("]("),e("a",u,[a("https://www.cnblogs.com/sgh1023/p/10900130.html"),s(n)]),a(")")])])}const _=t(o,[["render",h],["__file","maven-a-overview.html.vue"]]);export{_ as default};
