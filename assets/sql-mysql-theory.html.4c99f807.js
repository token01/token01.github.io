import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as h,c as i,a,d,f as t,r as n}from"./app.364af573.js";const l={},p=t('<h1 id="mysql-\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#mysql-\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> MySQL - \u6570\u636E\u7C7B\u578B</h1><h2 id="_1-\u5B57\u6BB5\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-\u5B57\u6BB5\u7C7B\u578B" aria-hidden="true">#</a> 1. \u5B57\u6BB5\u7C7B\u578B</h2><h3 id="_1-1-\u6574\u578B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6574\u578B" aria-hidden="true">#</a> 1.1 \u6574\u578B</h3><p>TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT \u5206\u522B\u4F7F\u7528 8, 16, 24, 32, 64 \u4F4D\u5B58\u50A8\u7A7A\u95F4\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u8D8A\u5C0F\u7684\u5217\u8D8A\u597D\u3002</p><p>INT(11) \u4E2D\u7684\u6570\u5B57\u53EA\u662F\u89C4\u5B9A\u4E86\u4EA4\u4E92\u5DE5\u5177\u663E\u793A\u5B57\u7B26\u7684\u4E2A\u6570\uFF0C\u5BF9\u4E8E\u5B58\u50A8\u548C\u8BA1\u7B97\u6765\u8BF4\u662F\u6CA1\u6709\u610F\u4E49\u7684\u3002</p><h3 id="_1-2-\u6D6E\u70B9\u6570" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6D6E\u70B9\u6570" aria-hidden="true">#</a> 1.2 \u6D6E\u70B9\u6570</h3><p>FLOAT \u548C DOUBLE \u4E3A\u6D6E\u70B9\u7C7B\u578B\uFF0CDECIMAL \u4E3A\u9AD8\u7CBE\u5EA6\u5C0F\u6570\u7C7B\u578B\u3002CPU \u539F\u751F\u652F\u6301\u6D6E\u70B9\u8FD0\u7B97\uFF0C\u4F46\u662F\u4E0D\u652F\u6301 DECIMAl \u7C7B\u578B\u7684\u8BA1\u7B97\uFF0C\u56E0\u6B64 DECIMAL \u7684\u8BA1\u7B97\u6BD4\u6D6E\u70B9\u7C7B\u578B\u9700\u8981\u66F4\u9AD8\u7684\u4EE3\u4EF7\u3002</p><p>FLOAT\u3001DOUBLE \u548C DECIMAL \u90FD\u53EF\u4EE5\u6307\u5B9A\u5217\u5BBD\uFF0C\u4F8B\u5982 DECIMAL(18, 9) \u8868\u793A\u603B\u5171 18 \u4F4D\uFF0C\u53D6 9 \u4F4D\u5B58\u50A8\u5C0F\u6570\u90E8\u5206\uFF0C\u5269\u4E0B 9 \u4F4D\u5B58\u50A8\u6574\u6570\u90E8\u5206\u3002</p><h3 id="_1-3-\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 1.3 \u5B57\u7B26\u4E32</h3><p>\u4E3B\u8981\u6709 CHAR \u548C VARCHAR \u4E24\u79CD\u7C7B\u578B\uFF0C\u4E00\u79CD\u662F\u5B9A\u957F\u7684\uFF0C\u4E00\u79CD\u662F\u53D8\u957F\u7684\u3002</p><p>VARCHAR \u8FD9\u79CD\u53D8\u957F\u7C7B\u578B\u80FD\u591F\u8282\u7701\u7A7A\u95F4\uFF0C\u56E0\u4E3A\u53EA\u9700\u8981\u5B58\u50A8\u5FC5\u8981\u7684\u5185\u5BB9\u3002\u4F46\u662F\u5728\u6267\u884C UPDATE \u65F6\u53EF\u80FD\u4F1A\u4F7F\u884C\u53D8\u5F97\u6BD4\u539F\u6765\u957F\uFF0C\u5F53\u8D85\u51FA\u4E00\u4E2A\u9875\u6240\u80FD\u5BB9\u7EB3\u7684\u5927\u5C0F\u65F6\uFF0C\u5C31\u8981\u6267\u884C\u989D\u5916\u7684\u64CD\u4F5C\u3002MyISAM \u4F1A\u5C06\u884C\u62C6\u6210\u4E0D\u540C\u7684\u7247\u6BB5\u5B58\u50A8\uFF0C\u800C InnoDB \u5219\u9700\u8981\u5206\u88C2\u9875\u6765\u4F7F\u884C\u653E\u8FDB\u9875\u5185\u3002</p><p>VARCHAR \u4F1A\u4FDD\u7559\u5B57\u7B26\u4E32\u672B\u5C3E\u7684\u7A7A\u683C\uFF0C\u800C CHAR \u4F1A\u5220\u9664\u3002</p><h3 id="_1-4-\u65F6\u95F4\u548C\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#_1-4-\u65F6\u95F4\u548C\u65E5\u671F" aria-hidden="true">#</a> 1.4 \u65F6\u95F4\u548C\u65E5\u671F</h3><p>MySQL \u63D0\u4F9B\u4E86\u4E24\u79CD\u76F8\u4F3C\u7684\u65E5\u671F\u65F6\u95F4\u7C7B\u578B: DATETIME \u548C TIMESTAMP\u3002</p><h4 id="_1-4-1-datetime" tabindex="-1"><a class="header-anchor" href="#_1-4-1-datetime" aria-hidden="true">#</a> 1.4.1 DATETIME</h4><p>\u80FD\u591F\u4FDD\u5B58\u4ECE 1001 \u5E74\u5230 9999 \u5E74\u7684\u65E5\u671F\u548C\u65F6\u95F4\uFF0C\u7CBE\u5EA6\u4E3A\u79D2\uFF0C\u4F7F\u7528 8 \u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\u3002</p><p>\u5B83\u4E0E\u65F6\u533A\u65E0\u5173\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CMySQL \u4EE5\u4E00\u79CD\u53EF\u6392\u5E8F\u7684\u3001\u65E0\u6B67\u4E49\u7684\u683C\u5F0F\u663E\u793A DATETIME \u503C\uFF0C\u4F8B\u5982\u201C2008-01-16 22:37:08\u201D\uFF0C\u8FD9\u662F ANSI \u6807\u51C6\u5B9A\u4E49\u7684\u65E5\u671F\u548C\u65F6\u95F4\u8868\u793A\u65B9\u6CD5\u3002</p><h4 id="_1-4-2-timestamp" tabindex="-1"><a class="header-anchor" href="#_1-4-2-timestamp" aria-hidden="true">#</a> 1.4.2 TIMESTAMP</h4><p>\u548C UNIX \u65F6\u95F4\u6233\u76F8\u540C\uFF0C\u4FDD\u5B58\u4ECE 1970 \u5E74 1 \u6708 1 \u65E5\u5348\u591C(\u683C\u6797\u5A01\u6CBB\u65F6\u95F4)\u4EE5\u6765\u7684\u79D2\u6570\uFF0C\u4F7F\u7528 4 \u4E2A\u5B57\u8282\uFF0C\u53EA\u80FD\u8868\u793A\u4ECE 1970 \u5E74 \u5230 2038 \u5E74\u3002</p><p>\u5B83\u548C\u65F6\u533A\u6709\u5173\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E00\u4E2A\u65F6\u95F4\u6233\u5728\u4E0D\u540C\u7684\u65F6\u533A\u6240\u4EE3\u8868\u7684\u5177\u4F53\u65F6\u95F4\u662F\u4E0D\u540C\u7684\u3002</p><p>MySQL \u63D0\u4F9B\u4E86 FROM_UNIXTIME() \u51FD\u6570\u628A UNIX \u65F6\u95F4\u6233\u8F6C\u6362\u4E3A\u65E5\u671F\uFF0C\u5E76\u63D0\u4F9B\u4E86 UNIX_TIMESTAMP() \u51FD\u6570\u628A\u65E5\u671F\u8F6C\u6362\u4E3A UNIX \u65F6\u95F4\u6233\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u63D2\u5165\u65F6\u6CA1\u6709\u6307\u5B9A TIMESTAMP \u5217\u7684\u503C\uFF0C\u4F1A\u5C06\u8FD9\u4E2A\u503C\u8BBE\u7F6E\u4E3A\u5F53\u524D\u65F6\u95F4\u3002</p><p>\u5E94\u8BE5\u5C3D\u91CF\u4F7F\u7528 TIMESTAMP\uFF0C\u56E0\u4E3A\u5B83\u6BD4 DATETIME \u7A7A\u95F4\u6548\u7387\u66F4\u9AD8\u3002</p><h2 id="_2-\u9009\u62E9\u4F18\u5316\u7684\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-\u9009\u62E9\u4F18\u5316\u7684\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 2. \u9009\u62E9\u4F18\u5316\u7684\u6570\u636E\u7C7B\u578B</h2><ul><li>\u66F4\u5C0F\u7684\u901A\u5E38\u66F4\u597D\uFF1B\u66F4\u5C0F\u7684\u6570\u636E\u7C7B\u578B\u901A\u5E38\u66F4\u5FEB\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5360\u7528\u66F4\u5C11\u7684\u78C1\u76D8\u3001\u5185\u5B58\u548CCPU\u7F13\u5B58\uFF0C\u5E76\u4E14\u5904\u7406\u65F6\u9700\u8981\u7684CPU\u5468\u671F\u4E5F\u66F4\u5C11\uFF1B</li><li>\u7B80\u5355\u5C31\u597D\uFF1B\u4F8B\u5982\uFF0C\u6574\u5F62\u6BD4\u5B57\u7B26\u4E32\u64CD\u4F5C\u4EE3\u4EF7\u66F4\u4F4E\uFF1B\u5B9E\u7528\u5185\u5EFA\u7C7B\u578B\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\u6765\u5B58\u50A8\u65E5\u671F\u548C\u65F6\u95F4\uFF1B\u7528\u6574\u5F62\u5B58\u50A8IP\u5730\u5740\u7B49\uFF1B</li><li>\u5C3D\u91CF\u907F\u514DNULL\uFF1B\u5982\u679C\u67E5\u8BE2\u4E2D\u5305\u542B\u53EF\u4E3ANULL\u7684\u5217\uFF0C\u5BF9MySQL\u6765\u8BF4\u66F4\u96BE\u4F18\u5316\uFF0C\u56E0\u4E3A\u53EF\u4E3ANULL \u7684\u5217\u4F7F\u5F97\u7D22\u5F15\u3001\u7D22\u5F15\u7EDF\u8BA1\u548C\u503C\u6BD4\u8F83\u90FD\u66F4\u590D\u6742\u3002\u5C3D\u7BA1\u628A\u53EF\u4E3ANULL\u7684\u5217\u6539\u4E3ANOT NULL\u5E26\u6765\u7684\u6027\u80FD\u63D0\u5347\u6BD4\u8F83\u5C0F\uFF0C\u4F46\u5982\u679C\u8BA1\u5212\u5728\u5217\u4E0A\u521B\u5EFA\u7D22\u5F15\uFF0C\u5C31\u5E94\u8BE5\u5C3D\u91CF\u907F\u514D\u8BBE\u8BA1\u6210\u53EF\u4E3ANULL\u7684\u5217\uFF1B</li></ul><h3 id="_2-1-\u5B57\u7B26\u4E32\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B57\u7B26\u4E32\u7C7B\u578B" aria-hidden="true">#</a> 2.1 \u5B57\u7B26\u4E32\u7C7B\u578B</h3><h4 id="_2-1-1-varchar-\u548C-char" tabindex="-1"><a class="header-anchor" href="#_2-1-1-varchar-\u548C-char" aria-hidden="true">#</a> 2.1.1 VARCHAR \u548C CHAR</h4><p>VARCHAR\u662F\u6700\u5E38\u89C1\u7684\u5B57\u7B26\u4E32\u7C7B\u578B\u3002VARCHAR\u8282\u7701\u4E86\u5B58\u50A8\u7A7A\u95F4\uFF0C\u6240\u4EE5\u5BF9\u6027\u80FD\u4E5F\u6709\u5E2E\u52A9\u3002\u4F46\u662F\uFF0C\u7531\u4E8E\u884C\u662F\u53EF\u53D8\u7684\uFF0C\u5728UPDATE\u65F6\u53EF\u80FD\u4F7F\u884C\u53D8\u5F97\u6BD4\u539F\u6765\u66F4\u957F\uFF0C\u8FD9\u5C31\u5BFC\u81F4\u9700\u8981\u505A\u989D\u5916\u7684\u5DE5\u4F5C\u3002\u5982\u679C\u4E00\u4E2A\u884C\u5360\u7528\u7684\u7A7A\u95F4\u589E\u957F\uFF0C\u5E76\u4E14\u5728\u9875\u5185\u6CA1\u6709\u66F4\u591A\u7684\u7A7A\u95F4\u53EF\u4EE5\u5B58\u50A8\uFF0CMyISAM\u4F1A\u5C06\u884C\u62C6\u6210\u4E0D\u540C\u7684\u7247\u6BB5\u5B58\u50A8\uFF1BInnoDB\u5219\u9700\u8981\u5206\u88C2\u9875\u6765\u4F7F\u884C\u53EF\u4EE5\u653E\u8FDB\u9875\u5185\u3002</p><p>\u4E0B\u9762\u8FD9\u4E9B\u60C5\u51B5\u4F7F\u7528VARCHAR\u662F\u5408\u9002\u7684\uFF1A\u5B57\u7B26\u4E32\u7684\u6700\u5927\u957F\u5EA6\u6BD4\u5E73\u5747\u957F\u5EA6\u5927\u5F88\u591A\uFF1B\u5217\u7684\u66F4\u65B0\u5F88\u5C11\uFF0C\u6240\u4EE5\u788E\u7247\u4E0D\u662F\u95EE\u9898\uFF1B\u4F7F\u7528\u4E86\u50CFUTF-8\u8FD9\u6837\u590D\u6742\u7684\u5B57\u7B26\u96C6\uFF0C\u6BCF\u4E2A\u5B57\u7B26\u90FD\u4F7F\u7528\u4E0D\u540C\u7684\u5B57\u8282\u6570\u8FDB\u884C\u5B58\u50A8\u3002</p><p>\u5F53\u5B58\u50A8CHAR\u503C\u65F6\uFF0CMySQL\u4F1A\u5220\u9664\u6240\u6709\u7684\u672B\u5C3E\u7A7A\u683C\u3002CHAR\u503C\u4F1A\u6839\u636E\u9700\u8981\u91C7\u7528\u7A7A\u683C\u8FDB\u884C\u586B\u5145\u4EE5\u65B9\u4FBF\u6BD4\u8F83\u3002</p><p>CHAR\u9002\u5408\u5B58\u50A8\u5F88\u77ED\u7684\u5B57\u7B26\u4E32\uFF0C\u6216\u8005\u6240\u6709\u503C\u90FD\u63A5\u8FD1\u540C\u4E00\u4E2A\u957F\u5EA6\uFF0C\u5982\u5BC6\u7801\u7684MD5\u503C\u3002\u5BF9\u4E8E\u7ECF\u5E38\u53D8\u66F4\u7684\u6570\u636E\uFF0CCHAR\u4E5F\u6BD4VARCHAR\u66F4\u597D\uFF0C\u56E0\u4E3ACHAR\u4E0D\u5BB9\u6613\u4EA7\u751F\u788E\u7247\uFF08\u884C\u95F4\u788E\u7247\uFF1F\uFF09\u3002</p><h4 id="_2-1-2-varchar-5-\u548Cvarchar-200" tabindex="-1"><a class="header-anchor" href="#_2-1-2-varchar-5-\u548Cvarchar-200" aria-hidden="true">#</a> 2.1.2 VARCHAR(5)\u548CVARCHAR(200)</h4><blockquote><p>\u4F7F\u7528VARCHAR(5)\u548CVARCHAR(200)\u5B58\u50A8&quot;hello&quot;\u7684\u7A7A\u95F4\u5F00\u9500\u662F\u4E00\u6837\u7684\u3002\u90A3\u4E48\u4F7F\u7528\u66F4\u77ED\u7684\u5217\u6709\u4EC0\u4E48\u4F18\u52BF\u5417\uFF1F</p></blockquote><p>\u4E8B\u5B9E\u8BC1\u660E\u6709\u5F88\u5927\u7684\u4F18\u52BF\u3002\u66F4\u957F\u7684\u5217\u4F1A\u6D88\u8017\u66F4\u591A\u7684\u5185\u5B58\uFF0C\u56E0\u4E3AMySQL\u901A\u5E38\u4F1A\u5206\u914D\u56FA\u5B9A\u5927\u5C0F\u7684\u5185\u5B58\u5757\u6765\u4FDD\u5B58\u5185\u90E8\u503C\u3002\u5C24\u5176\u662F\u4F7F\u7528\u5185\u5B58\u4E34\u65F6\u8868\u8FDB\u884C\u6392\u5E8F\u6216\u5176\u4ED6\u64CD\u4F5C\u65F6\u4F1A\u7279\u522B\u7CDF\u7CD5\u3002\u5728\u5229\u7528\u78C1\u76D8\u4E34\u65F6\u8868\u8FDB\u884C\u6392\u5E8F\u65F6\u4E5F\u540C\u6837\u7CDF\u7CD5\u3002</p><p>\u6240\u4EE5\u6700\u597D\u7684\u7B56\u7565\u662F\u53EA\u5206\u914D\u771F\u6B63\u9700\u8981\u7684\u7A7A\u95F4\u3002</p><h4 id="_2-1-3-blob-\u548C-text" tabindex="-1"><a class="header-anchor" href="#_2-1-3-blob-\u548C-text" aria-hidden="true">#</a> 2.1.3 BLOB \u548C TEXT</h4><p>BLOB\u548CTEXT\u90FD\u662F\u4E3A\u5B58\u50A8\u5F88\u5927\u7684\u6570\u636E\u800C\u8BBE\u8BA1\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5206\u522B\u91C7\u7528\u4E8C\u8FDB\u5236\u548C\u5B57\u7B26\u65B9\u5F0F\u5B58\u50A8\u3002</p><p>\u4E0E\u5176\u4ED6\u7C7B\u578B\u4E0D\u540C\uFF0CMySQL\u628A\u6BCF\u4E2ABLOB\u548CTEXT\u503C\u5F53\u505A\u4E00\u4E2A\u72EC\u7ACB\u7684\u5BF9\u8C61\u53BB\u5904\u7406\u3002\u5F53BLOB\u548CTEXT\u503C\u592A\u5927\u65F6\uFF0CInnoDB\u4F1A\u4F7F\u7528\u4E13\u95E8\u7684\u201C\u5916\u90E8\u201D\u5B58\u50A8\u533A\u57DF\u6765\u8FDB\u884C\u5B58\u50A8\uFF0C\u6B64\u65F6\u6BCF\u4E2A\u503C\u5728\u884C\u5185\u9700\u89811~4\u4E2A\u5B57\u8282\u5B58\u50A8\u4E00\u4E2A\u6307\u9488\uFF0C\u7136\u540E\u5728\u5916\u90E8\u5B58\u50A8\u533A\u57DF\u5B58\u50A8\u5B9E\u9645\u7684\u503C\u3002</p><p>MySQL\u5BF9BLOB\u548CTEXT\u5217\u8FDB\u884C\u6392\u5E8F\u4E0E\u5176\u4ED6\u7C7B\u578B\u662F\u4E0D\u540C\u7684\uFF1A\u5B83\u53EA\u5BF9\u6BCF\u4E2A\u5217\u7684\u6700\u524Dmax_sort_length\u4E2A\u5B57\u8282\u800C\u4E0D\u662F\u6574\u4E2A\u5B57\u7B26\u4E32\u505A\u6392\u5E8F\u3002\u540C\u6837\u7684\uFF0CMySQL\u4E5F\u4E0D\u80FD\u5C06BLOB\u6216TEXT\u5217\u5168\u90E8\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u7D22\u5F15\u3002</p><h3 id="_2-2-\u9009\u62E9\u8868\u793A\u7B26-identifier" tabindex="-1"><a class="header-anchor" href="#_2-2-\u9009\u62E9\u8868\u793A\u7B26-identifier" aria-hidden="true">#</a> 2.2 \u9009\u62E9\u8868\u793A\u7B26\uFF08identifier\uFF09</h3><p>\u6574\u6570\u7C7B\u578B\u901A\u5E38\u662F\u6807\u8BC6\u5217\u7684\u6700\u4F73\u9009\u62E9\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5F88\u5FEB\u5E76\u4E14\u53EF\u4EE5\u4F7F\u7528AUTO_INCREMENT\u3002 \u5982\u679C\u53EF\u80FD\uFF0C\u5E94\u8BE5\u907F\u514D\u4F7F\u7528\u5B57\u7B26\u4E32\u7C7B\u578B\u4F5C\u4E3A\u6807\u8BC6\u5217\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5F88\u8017\u7A7A\u95F4\uFF0C\u5E76\u4E14\u6BD4\u6570\u5B57\u7C7B\u578B\u6162\u3002 \u5BF9\u4E8E\u5B8C\u5168\u968F\u673A\u7684\u5B57\u7B26\u4E32\u4E5F\u9700\u8981\u591A\u52A0\u6CE8\u610F\uFF0C\u4F8B\u5982MD5(),SHA1()\u6216\u8005UUID()\u4EA7\u751F\u7684\u5B57\u7B26\u4E32\u3002\u8FD9\u4E9B\u51FD\u6570\u751F\u6210\u7684\u65B0\u503C\u4F1A\u4EFB\u610F\u5206\u5E03\u5728\u5F88\u5927\u7684\u7A7A\u95F4\u5185\uFF0C\u8FD9\u4F1A\u5BFC\u81F4INSERT\u4EE5\u53CA\u4E00\u4E9BSELECT\u8BED\u53E5\u53D8\u5F97\u5F88\u6162\uFF1A</p><ul><li>\u56E0\u4E3A\u63D2\u5165\u503C\u4F1A\u968F\u673A\u7684\u5199\u5165\u5230\u7D22\u5F15\u7684\u4E0D\u540C\u4F4D\u7F6E\uFF0C\u6240\u4EE5\u4F7F\u5F97INSERT\u8BED\u53E5\u66F4\u6162\u3002\u8FD9\u4F1A\u5BFC\u81F4\u53F6\u5206\u88C2\u3001\u78C1\u76D8\u968F\u673A\u8BBF\u95EE\u3002</li><li>SELECT\u8BED\u53E5\u4F1A\u53D8\u7684\u66F4\u6162\uFF0C\u56E0\u4E3A\u903B\u8F91\u4E0A\u76F8\u90BB\u7684\u884C\u4F1A\u5206\u5E03\u5728\u78C1\u76D8\u548C\u5185\u5B58\u7684\u4E0D\u540C\u5730\u65B9\u3002</li><li>\u968F\u673A\u503C\u5BFC\u81F4\u7F13\u5B58\u5BF9\u6240\u6709\u7C7B\u578B\u7684\u67E5\u8BE2\u8BED\u53E5\u6548\u679C\u90FD\u5F88\u5DEE\uFF0C\u56E0\u4E3A\u4F1A\u4F7F\u5F97\u7F13\u5B58\u8D56\u4EE5\u5DE5\u4F5C\u7684\u5C40\u90E8\u6027\u539F\u7406\u5931\u6548\u3002</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',44),s={href:"https://pdai.tech/md/db/sql-mysql/sql-mysql-theory.html",target:"_blank",rel:"noopener noreferrer"},c=a("strong",null,"MySQL - \u6570\u636E\u7C7B\u578B",-1);function o(A,_){const e=n("ExternalLinkIcon");return h(),i("div",null,[p,a("p",null,[a("a",s,[c,d(e)])])])}const M=r(l,[["render",o],["__file","sql-mysql-theory.html.vue"]]);export{M as default};
