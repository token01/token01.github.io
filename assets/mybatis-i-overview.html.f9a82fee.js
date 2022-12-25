import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as o,a,b as i,d as e,f as s,r as l}from"./app.b657c1d1.js";const p={},d=s('<h1 id="mybatis\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#mybatis\u6982\u5FF5" aria-hidden="true">#</a> Mybatis\u6982\u5FF5</h1><h3 id="_1-\u4EC0\u4E48\u662Fmybatis" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662Fmybatis" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662FMyBatis\uFF1F</h3><blockquote><p>MyBatis\u662F\u4E00\u6B3E\u4F18\u79C0\u7684\u57FA\u4E8Ejava\u7684\u6301\u4E45\u5C42\u6846\u67B6\uFF0C\u5B83\u5185\u90E8\u5C01\u88C5\u4E86jdbc\uFF0C\u4F7F\u5F00\u53D1\u8005\u53EA\u9700\u8981\u5173\u6CE8sql\u8BED\u53E5\u672C\u8EAB\uFF0C\u800C\u4E0D\u9700\u8981\u82B1\u8D39\u7CBE\u529B\u53BB\u5904\u7406\u52A0\u8F7D\u9A71\u52A8\u3001\u521B\u5EFA\u8FDE\u63A5\u3001\u521B\u5EFAstatement\u7B49\u7E41\u6742\u7684\u8FC7\u7A0B\u3002</p></blockquote><p>MyBatis \u662F\u4E00\u6B3E\u4F18\u79C0\u7684\u6301\u4E45\u5C42\u6846\u67B6\uFF0C\u5B83\u652F\u6301\u5B9A\u5236\u5316 SQL\u3001\u5B58\u50A8\u8FC7\u7A0B\u4EE5\u53CA\u9AD8\u7EA7\u6620\u5C04\u3002</p><ul><li>mybatis\u662F\u4E00\u4E2A\u4F18\u79C0\u7684\u57FA\u4E8Ejava\u7684\u6301\u4E45\u5C42\u6846\u67B6\uFF0C\u5B83\u5185\u90E8\u5C01\u88C5\u4E86jdbc\uFF0C\u4F7F\u5F00\u53D1\u8005\u53EA\u9700\u8981\u5173\u6CE8sql\u8BED\u53E5\u672C\u8EAB\uFF0C\u800C\u4E0D\u9700\u8981\u82B1\u8D39\u7CBE\u529B\u53BB\u5904\u7406\u52A0\u8F7D\u9A71\u52A8\u3001\u521B\u5EFA\u8FDE\u63A5\u3001\u521B\u5EFAstatement\u7B49\u7E41\u6742\u7684\u8FC7\u7A0B\u3002</li><li>mybatis\u901A\u8FC7xml\u6216\u6CE8\u89E3\u7684\u65B9\u5F0F\u5C06\u8981\u6267\u884C\u7684\u5404\u79CDstatement\u914D\u7F6E\u8D77\u6765\uFF0C\u5E76\u901A\u8FC7java\u5BF9\u8C61\u548Cstatement\u4E2Dsql\u7684\u52A8\u6001\u53C2\u6570\u8FDB\u884C\u6620\u5C04\u751F\u6210\u6700\u7EC8\u6267\u884C\u7684sql\u8BED\u53E5\uFF0C\u6700\u540E\u7531mybatis\u6846\u67B6\u6267\u884Csql\u5E76\u5C06\u7ED3\u679C\u6620\u5C04\u4E3Ajava\u5BF9\u8C61\u5E76\u8FD4\u56DE\u3002</li></ul><p><strong>MyBatis\u7684\u4E3B\u8981\u8BBE\u8BA1\u76EE</strong>\u7684\u5C31\u662F\u8BA9\u6211\u4EEC\u5BF9\u6267\u884CSQL\u8BED\u53E5\u65F6\u5BF9\u8F93\u5165\u8F93\u51FA\u7684\u6570\u636E\u7BA1\u7406\u66F4\u52A0\u65B9\u4FBF\uFF0C\u6240\u4EE5\u65B9\u4FBF\u5730\u5199\u51FASQL\u548C\u65B9\u4FBF\u5730\u83B7\u53D6SQL\u7684\u6267\u884C\u7ED3\u679C\u624D\u662FMyBatis\u7684\u6838\u5FC3\u7ADE\u4E89\u529B\u3002</p><p><strong>Mybatis\u7684\u529F\u80FD\u67B6\u6784\u5206\u4E3A\u4E09\u5C42</strong>\uFF1A</p><ul><li><strong>API\u63A5\u53E3\u5C42</strong>\uFF1A\u63D0\u4F9B\u7ED9\u5916\u90E8\u4F7F\u7528\u7684\u63A5\u53E3API\uFF0C\u5F00\u53D1\u4EBA\u5458\u901A\u8FC7\u8FD9\u4E9B\u672C\u5730API\u6765\u64CD\u7EB5\u6570\u636E\u5E93\u3002\u63A5\u53E3\u5C42\u4E00\u63A5\u6536\u5230\u8C03\u7528\u8BF7\u6C42\u5C31\u4F1A\u8C03\u7528\u6570\u636E\u5904\u7406\u5C42\u6765\u5B8C\u6210\u5177\u4F53\u7684\u6570\u636E\u5904\u7406\u3002</li><li><strong>\u6570\u636E\u5904\u7406\u5C42</strong>\uFF1A\u8D1F\u8D23\u5177\u4F53\u7684SQL\u67E5\u627E\u3001SQL\u89E3\u6790\u3001SQL\u6267\u884C\u548C\u6267\u884C\u7ED3\u679C\u6620\u5C04\u5904\u7406\u7B49\u3002\u5B83\u4E3B\u8981\u7684\u76EE\u7684\u662F\u6839\u636E\u8C03\u7528\u7684\u8BF7\u6C42\u5B8C\u6210\u4E00\u6B21\u6570\u636E\u5E93\u64CD\u4F5C\u3002</li><li><strong>\u57FA\u7840\u652F\u6491\u5C42</strong>\uFF1A\u8D1F\u8D23\u6700\u57FA\u7840\u7684\u529F\u80FD\u652F\u6491\uFF0C\u5305\u62EC\u8FDE\u63A5\u7BA1\u7406\u3001\u4E8B\u52A1\u7BA1\u7406\u3001\u914D\u7F6E\u52A0\u8F7D\u548C\u7F13\u5B58\u5904\u7406\uFF0C\u8FD9\u4E9B\u90FD\u662F\u5171\u7528\u7684\u4E1C\u897F\uFF0C\u5C06\u4ED6\u4EEC\u62BD\u53D6\u51FA\u6765\u4F5C\u4E3A\u6700\u57FA\u7840\u7684\u7EC4\u4EF6\u3002\u4E3A\u4E0A\u5C42\u7684\u6570\u636E\u5904\u7406\u5C42\u63D0\u4F9B\u6700\u57FA\u7840\u7684\u652F\u6491\u3002</li></ul>',8),h={href:"https://mybatis.org/mybatis-3/",target:"_blank",rel:"noopener noreferrer"},y=s('<h3 id="_2-\u4E3A\u4EC0\u4E48\u8BF4mybatis\u662F\u534A\u81EA\u52A8orm" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48\u8BF4mybatis\u662F\u534A\u81EA\u52A8orm" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48\u8BF4MyBatis\u662F\u534A\u81EA\u52A8ORM\uFF1F</h3><blockquote><p>\u4E3A\u4EC0\u4E48\u8BF4MyBatis\u662F\u534A\u81EA\u52A8ORM\uFF1F</p></blockquote><ul><li><strong>\u4EC0\u4E48\u662FORM</strong>\uFF1F</li></ul><p>JDBC\uFF0CORM\u77E5\u8BC6\u70B9\u53EF\u4EE5\u53C2\u8003<a href="">SpringBoot\u5165\u95E8 - \u6DFB\u52A0\u5185\u5B58\u6570\u636E\u5E93H2</a></p><ul><li><strong>\u4EC0\u4E48\u662F\u5168\u81EA\u52A8ORM</strong>\uFF1F</li></ul><p>ORM\u6846\u67B6\u53EF\u4EE5\u6839\u636E\u5BF9\u8C61\u5173\u7CFB\u6A21\u578B\u76F4\u63A5\u83B7\u53D6\uFF0C\u67E5\u8BE2\u5173\u8054\u5BF9\u8C61\u6216\u8005\u5173\u8054\u96C6\u5408\u5BF9\u8C61\uFF0C\u7B80\u5355\u800C\u8A00\u4F7F\u7528\u5168\u81EA\u52A8\u7684ORM\u6846\u67B6\u67E5\u8BE2\u65F6\u53EF\u4EE5\u4E0D\u518D\u5199SQL\u3002\u5178\u578B\u7684\u6846\u67B6\u5982Hibernate\uFF1B \u56E0\u4E3ASpring-data-jpa\u5F88\u591A\u4EE3\u7801\u4E5F\u662FHibernate\u56E2\u961F\u8D21\u732E\u7684\uFF0C\u6240\u4EE5spring-data-jpa\u4E5F\u662F\u5168\u81EA\u52A8ORM\u6846\u67B6\u3002</p><ul><li><strong>MyBatis\u662F\u534A\u81EA\u52A8ORM</strong>\uFF1F</li></ul><p>Mybatis \u5728\u67E5\u8BE2\u5173\u8054\u5BF9\u8C61\u6216\u5173\u8054\u96C6\u5408\u5BF9\u8C61\u65F6\uFF0C\u9700\u8981\u624B\u52A8\u7F16\u5199 sql \u6765\u5B8C\u6210\uFF0C\u6240\u4EE5\uFF0C\u79F0\u4E4B\u4E3A\u534A\u81EA\u52A8ORM \u6620\u5C04\u5DE5\u5177\u3002</p><p>\uFF08PS: \u6B63\u662F\u7531\u4E8EMyBatis\u662F\u534A\u81EA\u52A8\u6846\u67B6\uFF0C\u57FA\u4E8EMyBatis\u6280\u672F\u6808\u7684\u6846\u67B6\u5F00\u59CB\u8003\u8651\u517C\u5BB9MyBatis\u5F00\u53D1\u6846\u67B6\u7684\u57FA\u7840\u4E0A\u63D0\u4F9B\u81EA\u52A8\u5316\u7684\u80FD\u529B\uFF0C\u6BD4\u5982MyBatis-plus\u7B49\u6846\u67B6\uFF09</p><h3 id="_3-mybatis\u6808\u6280\u672F\u6F14\u8FDB" tabindex="-1"><a class="header-anchor" href="#_3-mybatis\u6808\u6280\u672F\u6F14\u8FDB" aria-hidden="true">#</a> 3. MyBatis\u6808\u6280\u672F\u6F14\u8FDB</h3><blockquote><p>\u4E86\u89E3MyBatis\u6280\u672F\u6808\u7684\u6F14\u8FDB\uFF0C\u5BF9\u4F60\u6784\u5EFA\u57FA\u4E8EMyBatis\u7684\u77E5\u8BC6\u4F53\u7CFB\u6781\u4E3A\u91CD\u8981\u3002</p></blockquote><h4 id="_3-1-jdbc-\u81EA\u884C\u5C01\u88C5jdbcutil" tabindex="-1"><a class="header-anchor" href="#_3-1-jdbc-\u81EA\u884C\u5C01\u88C5jdbcutil" aria-hidden="true">#</a> 3.1 JDBC\uFF0C\u81EA\u884C\u5C01\u88C5JDBCUtil</h4><p>Java5\u7684\u65F6\u4EE3\uFF0C\u901A\u5E38\u7684\u5F00\u53D1\u4E2D\u4F1A\u81EA\u884C\u5C01\u88C5JDBC\u7684Util\uFF0C\u6BD4\u5982\u521B\u5EFA Connection\uFF0C\u4EE5\u53CA\u786E\u4FDD\u5173\u95ED Connection\u7B49\u3002</p><h4 id="_3-2-ibatis" tabindex="-1"><a class="header-anchor" href="#_3-2-ibatis" aria-hidden="true">#</a> 3.2 IBatis</h4><p>MyBatis\u7684\u524D\u8EAB\uFF0C\u5B83\u5C01\u88C5\u4E86\u7EDD\u5927\u591A\u6570\u7684 JDBC \u6837\u677F\u4EE3\u7801\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u53EA\u9700\u5173\u6CE8 SQL \u672C\u8EAB\uFF0C\u800C\u4E0D\u9700\u8981\u82B1\u8D39\u7CBE\u529B\u53BB\u5904\u7406\u4F8B\u5982\u6CE8\u518C\u9A71\u52A8\uFF0C\u521B\u5EFA Connection\uFF0C\u4EE5\u53CA\u786E\u4FDD\u5173\u95ED Connection \u8FD9\u6837\u7E41\u6742\u7684\u4EE3\u7801\u3002</p><h4 id="_3-3-mybatis" tabindex="-1"><a class="header-anchor" href="#_3-3-mybatis" aria-hidden="true">#</a> 3.3 MyBatis</h4><p>\u4F34\u968F\u7740JDK5+ \u6CDB\u578B\u548C\u6CE8\u89E3\u7279\u6027\u5F00\u59CB\u6D41\u884C\uFF0CIBatis\u57283.0\u53D8\u66F4\u4E3AMyBatis\uFF0C\u5BF9\u6CDB\u578B\u548C\u6CE8\u89E3\u7B49\u7279\u6027\u5F00\u59CB\u5168\u9762\u652F\u6301\uFF0C\u540C\u65F6\u652F\u6301\u4E86\u5F88\u591A\u65B0\u7684\u7279\u6027\uFF0C\u6BD4\u5982\uFF1A</p><ol><li>mybatis\u5B9E\u73B0\u4E86\u63A5\u53E3\u7ED1\u5B9A\uFF0C\u901A\u8FC7Dao\u63A5\u53E3 \u548Cxml\u6620\u5C04\u6587\u4EF6\u7684\u7ED1\u5B9A\uFF0C\u81EA\u52A8\u751F\u6210\u63A5\u53E3\u7684\u5177\u4F53\u5B9E\u73B0</li><li>mybatis\u652F\u6301 ognl\u8868\u8FBE\u5F0F\uFF0C\u6BD4\u5982 <code>&lt;if&gt;, &lt;else&gt;</code>\u4F7F\u7528ognl\u8FDB\u884C\u89E3\u6790</li><li>mybatis\u63D2\u4EF6\u673A\u5236\u7B49\uFF0C\uFF08PageHelper\u5206\u9875\u63D2\u4EF6\u5E94\u7528\u800C\u751F\uFF0C\u89E3\u51B3\u4E86\u6570\u636E\u5E93\u5C42\u7684\u5206\u9875\u5C01\u88C5\u95EE\u9898\uFF09</li></ol><p>\u6240\u4EE5\u8FD9\u4E2A\u65F6\u671F\uFF0C<strong>MyBatis XML \u914D\u7F6E\u65B9\u5F0F + PageHelper</strong> \u6210\u4E3A\u91CD\u8981\u7684\u5F00\u53D1\u65B9\u5F0F\u3002</p><h4 id="_3-4-mybatis\u884D\u751F-\u4EE3\u7801\u751F\u6210\u5DE5\u5177\u7B49" tabindex="-1"><a class="header-anchor" href="#_3-4-mybatis\u884D\u751F-\u4EE3\u7801\u751F\u6210\u5DE5\u5177\u7B49" aria-hidden="true">#</a> 3.4 MyBatis\u884D\u751F\uFF1A\u4EE3\u7801\u751F\u6210\u5DE5\u5177\u7B49</h4><p>MyBatis\u63D0\u4F9B\u4E86\u5F00\u53D1\u4E0A\u7684\u4FBF\u6377\uFF0C\u4F46\u662F\u4F9D\u7136\u9700\u8981\u5199\u5927\u91CF\u7684xml\u914D\u7F6E\uFF0C\u5E76\u4E14\u5F88\u591A\u90FD\u662FCRUD\u7EA7\u522B\u7684\uFF08\u8FD9\u4FBF\u6709\u4E86\u5F88\u591A\u91CD\u590D\u6027\u7684\u5DE5\u4F5C\uFF09\uFF0C\u6240\u4EE5\u4E3A\u4E86\u51CF\u5C11\u91CD\u590D\u7F16\u7801\uFF0C\u884D\u751F\u51FA\u4E86MyBatis\u4EE3\u7801\u751F\u6210\u5DE5\u5177, \u6BD4\u5982CodeGenerator\u7B49\u3002</p><p>\u5176\u5B83\u5F00\u53D1IDE\u4E5F\u5F00\u59CB\u51FA\u73B0\u5C01\u88C5\u4E00\u4E9B\u5DE5\u5177\u548C\u63D2\u4EF6\u6765\u751F\u6210\u4EE3\u7801\u751F\u6210\u5DE5\u5177\u7B49\u3002</p><p>\u7531\u4E8E\u540E\u7AEF\u89C6\u56FE\u89E3\u6790\u5F15\u64CE\u591A\u6837\u6027\uFF08\u6BD4\u5982freemarker, volicty, thymeleaf\u7B49\uFF09\uFF0C\u4EE5\u53CA\u524D\u540E\u7AEF\u5206\u79BB\u524D\u7AEF\u72EC\u7ACB\u7B49\uFF0C\u4E3A\u4E86\u8FDB\u4E00\u6B65\u51CF\u5C11\u91CD\u590D\u4EE3\u7801\u7684\u7F16\u5199\uFF08\u5305\u62EC\u89C6\u56FE\u5C42\uFF09\uFF0C\u81EA\u52A8\u751F\u6210\u7684\u4EE3\u7801\u5DE5\u5177\u4E5F\u5F00\u59CB\u6F14\u5316\u4E3A\u81EA\u52A8\u751F\u6210\u524D\u7AEF\u89C6\u56FE\u4EE3\u7801\u3002</p><h4 id="_3-5-pring-mybatis\u57FA\u4E8E\u6CE8\u89E3\u7684\u914D\u7F6E\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#_3-5-pring-mybatis\u57FA\u4E8E\u6CE8\u89E3\u7684\u914D\u7F6E\u96C6\u6210" aria-hidden="true">#</a> 3.5 pring+MyBatis\u57FA\u4E8E\u6CE8\u89E3\u7684\u914D\u7F6E\u96C6\u6210</h4><p>\u4E0E\u6B64\u540C\u65F6\uFF0CSpring 2.5 \u5F00\u59CB\u5B8C\u5168\u652F\u6301\u57FA\u4E8E\u6CE8\u89E3\u7684\u914D\u7F6E\u5E76\u4E14\u4E5F\u652F\u6301JSR250 \u6CE8\u89E3\u3002\u5728Spring\u540E\u7EED\u7684\u7248\u672C\u53D1\u5C55\u503E\u5411\u4E8E\u901A\u8FC7\u6CE8\u89E3\u548CJava\u914D\u7F6E\u7ED3\u5408\u4F7F\u7528\u3002\u57FA\u4E8ESpring+MyBatis\u5F00\u53D1\u6280\u672F\u6808\u5F00\u59CB\u6709xml\u914D\u7F6E\u65B9\u5F0F\u5F80\u6CE8\u89E3\u548Cjava\u914D\u7F6E\u65B9\u5F0F\u53CD\u5411\u53D1\u5C55\u3002</p><p>Spring Boot\u7684\u51FA\u73B0\u4FBF\u662F\u8981\u89E3\u51B3\u914D\u7F6E\u8FC7\u591A\u7684\u95EE\u9898\uFF0C\u5B83\u5B9E\u9645\u4E0A\u901A\u8FC7\u7EA6\u5B9A\u5927\u4E8E\u914D\u7F6E\u7684\u65B9\u5F0F\u5927\u5927\u7B80\u5316\u4E86\u7528\u6237\u7684\u914D\u7F6E\uFF0C\u5BF9\u4E8E\u4E09\u65B9\u7EC4\u4EF6\u4F7F\u7528xx-starter\u7EDF\u4E00\u7684\u5BF9Bean\u8FDB\u884C\u9ED8\u8BA4\u521D\u59CB\u5316\uFF0C\u7528\u6237\u53EA\u9700\u8981\u5F88\u5C11\u7684\u914D\u7F6E\u5C31\u53EF\u4EE5\u8FDB\u884C\u5F00\u53D1\u4E86\u3002\u6240\u4EE5\u51FA\u73B0\u4E86mybatis-spring-boot-starter\u7684\u5C01\u88C5\u7B49\u3002</p><p>\u8FD9\u4E2A\u9636\u6BB5\uFF0C\u4E3B\u8981\u7684\u5F00\u53D1\u6280\u672F\u6808\u662F <strong>Spring + mybatis-spring-boot-starter \u81EA\u52A8\u5316\u914D\u7F6E + PageHelper</strong>\uFF0C\u5E76\u4E14\u5F88\u591A\u6570\u636E\u5E93\u5B9E\u4F53mapper\u8FD8\u662F\u901A\u8FC7xml\u65B9\u5F0F\u914D\u7F6E\u7684\uFF08\u4F34\u968F\u7740\u4F7F\u7528\u4E00\u4E9B\u81EA\u52A8\u5316\u751F\u6210\u5DE5\u5177\uFF09\u3002</p><h4 id="_3-6-mybatis-plus" tabindex="-1"><a class="header-anchor" href="#_3-6-mybatis-plus" aria-hidden="true">#</a> 3.6 MyBatis-Plus</h4><p>\u4E3A\u4E86\u66F4\u9AD8\u7684\u6548\u7387\uFF0C\u51FA\u73B0\u4E86MyBatis-Plus\u8FD9\u7C7B\u5DE5\u5177\uFF0C\u5BF9MyBatis\u8FDB\u884C\u589E\u5F3A\u3002</p><ol><li><strong>\u8003\u8651\u5230MyBatis\u662F\u534A\u81EA\u52A8\u5316ORM</strong>\uFF0CMyBatis-Plus \u542F\u52A8\u5373\u4F1A\u81EA\u52A8\u6CE8\u5165\u57FA\u672C CURD\uFF0C\u6027\u80FD\u57FA\u672C\u65E0\u635F\u8017\uFF0C\u76F4\u63A5\u9762\u5411\u5BF9\u8C61\u64CD\u4F5C; \u5E76\u4E14\u5185\u7F6E\u901A\u7528 Mapper\u3001\u901A\u7528 Service\uFF0C\u4EC5\u4EC5\u901A\u8FC7\u5C11\u91CF\u914D\u7F6E\u5373\u53EF\u5B9E\u73B0\u5355\u8868\u5927\u90E8\u5206 CRUD \u64CD\u4F5C\uFF0C\u66F4\u6709\u5F3A\u5927\u7684\u6761\u4EF6\u6784\u9020\u5668\uFF0C\u6EE1\u8DB3\u5404\u7C7B\u4F7F\u7528\u9700\u6C42\uFF1B\u603B\u4F53\u4E0A\u8BA9\u5176\u652F\u6301\u5168\u81EA\u52A8\u5316\u7684\u4F7F\u7528\u65B9\u5F0F\uFF08\u672C\u8D28\u4E0A\u501F\u9274\u4E86Hibernate\u601D\u8DEF\uFF09\u3002</li><li><strong>\u8003\u8651\u5230Java8 Lambda\uFF08\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF09\u5F00\u59CB\u6D41\u884C</strong>\uFF0CMyBatis-Plus\u652F\u6301 Lambda \u8868\u8FBE\u5F0F\uFF0C\u65B9\u4FBF\u7684\u7F16\u5199\u5404\u7C7B\u67E5\u8BE2\u6761\u4EF6\uFF0C\u65E0\u9700\u518D\u62C5\u5FC3\u5B57\u6BB5\u5199\u9519</li><li><strong>\u8003\u8651\u5230MyBatis\u8FD8\u9700\u8981\u72EC\u7ACB\u5F15\u5165PageHelper\u5206\u9875\u63D2\u4EF6</strong>\uFF0CMyBatis-Plus\u652F\u6301\u4E86\u5185\u7F6E\u5206\u9875\u63D2\u4EF6\uFF0C\u540CPageHelper\u4E00\u6837\u57FA\u4E8E MyBatis \u7269\u7406\u5206\u9875\uFF0C\u5F00\u53D1\u8005\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u64CD\u4F5C\uFF0C\u914D\u7F6E\u597D\u63D2\u4EF6\u4E4B\u540E\uFF0C\u5199\u5206\u9875\u7B49\u540C\u4E8E\u666E\u901A List \u67E5\u8BE2</li><li><strong>\u8003\u8651\u5230\u81EA\u52A8\u5316\u4EE3\u7801\u751F\u6210\u65B9\u5F0F</strong>\uFF0CMyBatis-Plus\u4E5F\u652F\u6301\u4E86\u5185\u7F6E\u4EE3\u7801\u751F\u6210\u5668\uFF0C\u91C7\u7528\u4EE3\u7801\u6216\u8005 Maven \u63D2\u4EF6\u53EF\u5FEB\u901F\u751F\u6210 Mapper \u3001 Model \u3001 Service \u3001 Controller \u5C42\u4EE3\u7801\uFF0C\u652F\u6301\u6A21\u677F\u5F15\u64CE\uFF0C\u66F4\u6709\u8D85\u591A\u81EA\u5B9A\u4E49\u914D\u7F6E\u7B49\u60A8\u6765\u4F7F\u7528</li><li><strong>\u8003\u8651\u5230SQL\u6027\u80FD\u4F18\u5316\u7B49\u95EE\u9898</strong>\uFF0CMyBatis-Plus\u5185\u7F6E\u6027\u80FD\u5206\u6790\u63D2\u4EF6, \u53EF\u8F93\u51FA SQL \u8BED\u53E5\u4EE5\u53CA\u5176\u6267\u884C\u65F6\u95F4\uFF0C\u5EFA\u8BAE\u5F00\u53D1\u6D4B\u8BD5\u65F6\u542F\u7528\u8BE5\u529F\u80FD\uFF0C\u80FD\u5FEB\u901F\u63EA\u51FA\u6162\u67E5\u8BE2</li><li>\u5176\u5B83\u8FD8\u6709\u89E3\u51B3\u4E00\u4E9B\u5E38\u89C1\u5F00\u53D1\u95EE\u9898\uFF0C\u6BD4\u5982<strong>\u652F\u6301\u4E3B\u952E\u81EA\u52A8\u751F\u6210</strong>\uFF0C\u652F\u63014 \u79CD\u4E3B\u952E\u7B56\u7565\uFF08\u5185\u542B\u5206\u5E03\u5F0F\u552F\u4E00 ID \u751F\u6210\u5668 - Sequence\uFF09\uFF0C\u53EF\u81EA\u7531\u914D\u7F6E\uFF0C\u5B8C\u7F8E\u89E3\u51B3\u4E3B\u952E\u95EE\u9898\uFF1B\u4EE5\u53CA<strong>\u5185\u7F6E\u5168\u5C40\u62E6\u622A\u63D2\u4EF6</strong>\uFF0C\u63D0\u4F9B\u5168\u8868 delete \u3001 update \u64CD\u4F5C\u667A\u80FD\u5206\u6790\u963B\u65AD\uFF0C\u4E5F\u53EF\u81EA\u5B9A\u4E49\u62E6\u622A\u89C4\u5219\uFF0C\u9884\u9632\u8BEF\u64CD\u4F5C</li></ol><blockquote><p>\u9876\u5C42\u601D\u7EF4\u80FD\u529B</p><p>\u7528\u8FD9\u79CD\u601D\u8DEF\u53BB\u7406\u89E3\uFF0C\u4F60\u4FBF\u80FD\u5F88\u5FEB\u4E86\u89E3MyBatis\u6280\u672F\u6808\u7684\u6F14\u5316\uFF08\u80FD\u591F\u5FEB\u901F\u7EF4\u62A4\u8001\u4E00\u4E9B\u7684\u6280\u672F\u6846\u67B6\uFF09\uFF0C\u4EE5\u53CA\u7406\u89E3\u65B0\u7684\u4E2D\u5C0F\u9879\u76EE\u4E2DMyBatis-Plus\u88AB\u5927\u91CF\u4F7F\u7528\u7684\u539F\u56E0\uFF08\u65B0\u9879\u76EE\u7684\u6280\u672F\u9009\u578B\u53C2\u8003\uFF09\uFF1B\u6240\u4EE5java\u5168\u6808\u77E5\u8BC6\u4F53\u7CFB\u7684\u76EE\u6807\u662F\u5E2E\u52A9\u4F60\u6784\u5EFA\u77E5\u8BC6\u4F53\u7CFB\uFF0C\u751A\u81F3\u662F\u8F85\u52A9\u4F60\u57F9\u517B\u9876\u5C42\u601D\u7EF4\u80FD\u529B\u3002</p></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',32),c={href:"https://pdai.tech/md/spring/springboot/springboot-x-mysql-mybatis-xml.html",target:"_blank",rel:"noopener noreferrer"},b=a("strong",null,"SpringBoot\u96C6\u6210MySQL - MyBatis XML\u65B9\u5F0F",-1);function g(M,m){const t=l("ExternalLinkIcon");return n(),o("div",null,[d,a("p",null,[i("\u66F4\u591A\u4ECB\u7ECD\u53EF\u4EE5\u53C2\u8003\uFF1A"),a("a",h,[i("MyBatis3 \u5B98\u65B9\u7F51\u7AD9"),e(t)])]),y,a("p",null,[a("a",c,[b,e(t)])])])}const _=r(p,[["render",g],["__file","mybatis-i-overview.html.vue"]]);export{_ as default};
