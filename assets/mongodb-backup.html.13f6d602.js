import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,a as e,b as t,d as r,f as a,r as s}from"./app.df1d0035.js";const o={},h=e("h1",{id:"minio\u57FA\u7840-\u5BF9\u8C61\u5B58\u50A8oss\u6982\u8FF0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#minio\u57FA\u7840-\u5BF9\u8C61\u5B58\u50A8oss\u6982\u8FF0","aria-hidden":"true"},"#"),t(" Minio\u57FA\u7840 - \u5BF9\u8C61\u5B58\u50A8OSS\u6982\u8FF0")],-1),l={href:"https://help.aliyun.com/product/31815.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://so.csdn.net/so/search?q=Minio&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},p=a('<h2 id="_1-\u5BF9\u8C61\u5B58\u50A8oss" tabindex="-1"><a class="header-anchor" href="#_1-\u5BF9\u8C61\u5B58\u50A8oss" aria-hidden="true">#</a> 1. \u5BF9\u8C61\u5B58\u50A8OSS</h2><p>\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\uFF08Object Storage Service\uFF0COSS\uFF09\u662F\u4E00\u79CD\u6D77\u91CF\u3001\u5B89\u5168\u3001\u4F4E\u6210\u672C\u3001\u9AD8\u53EF\u9760\u7684\u4E91\u5B58\u50A8\u670D\u52A1\uFF0C\u9002\u5408\u5B58\u653E\u4EFB\u610F\u7C7B\u578B\u7684\u6587\u4EF6\u3002\u5BB9\u91CF\u548C\u5904\u7406\u80FD\u529B\u5F39\u6027\u6269\u5C55\uFF0C\u591A\u79CD\u5B58\u50A8\u7C7B\u578B\u4F9B\u9009\u62E9\uFF0C\u5168\u9762\u4F18\u5316\u5B58\u50A8\u6210\u672C\u3002</p><p>\u963F\u91CC\u4E91\u5BF9\u8C61\u5B58\u50A8OSS\uFF08Object Storage Service\uFF09\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u6D77\u91CF\u3001\u5B89\u5168\u3001\u4F4E\u6210\u672C\u3001\u9AD8\u6301\u4E45\u7684\u4E91\u5B58\u50A8\u670D\u52A1\u3002\u5176\u6570\u636E\u8BBE\u8BA1\u6301\u4E45\u6027\u4E0D\u4F4E\u4E8E99.9999999999%\uFF0812\u4E2A9\uFF09\uFF0C\u670D\u52A1\u53EF\u7528\u6027\uFF08\u6216\u4E1A\u52A1\u8FDE\u7EED\u6027\uFF09\u4E0D\u4F4E\u4E8E99.995%\u3002</p><h2 id="_2-\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> 2. \u57FA\u672C\u6982\u5FF5</h2><h3 id="_2-1-\u5B58\u50A8\u7A7A\u95F4-bucket" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B58\u50A8\u7A7A\u95F4-bucket" aria-hidden="true">#</a> 2.1 \u5B58\u50A8\u7A7A\u95F4\uFF08Bucket\uFF09</h3><p>\u5B58\u50A8\u7A7A\u95F4\u662F\u7528\u6237\u7528\u4E8E\u5B58\u50A8\u5BF9\u8C61\uFF08Object\uFF09\u7684\u5BB9\u5668\uFF0C\u6240\u6709\u7684\u5BF9\u8C61\u90FD\u5FC5\u987B\u96B6\u5C5E\u4E8E\u67D0\u4E2A\u5B58\u50A8\u7A7A\u95F4\u3002\u5B58\u50A8\u7A7A\u95F4\u5177\u6709\u5404\u79CD\u914D\u7F6E\u5C5E\u6027\uFF0C\u5305\u62EC\u5730\u57DF\u3001\u8BBF\u95EE\u6743\u9650\u3001\u5B58\u50A8\u7C7B\u578B\u7B49\u3002\u7528\u6237\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u9700\u6C42\uFF0C\u521B\u5EFA\u4E0D\u540C\u7C7B\u578B\u7684\u5B58\u50A8\u7A7A\u95F4\u6765\u5B58\u50A8\u4E0D\u540C\u7684\u6570\u636E\u3002</p><ul><li><strong>\u540C\u4E00\u4E2A\u5B58\u50A8\u7A7A\u95F4\u7684\u5185\u90E8\u662F\u6241\u5E73\u7684\uFF0C\u6CA1\u6709\u6587\u4EF6\u7CFB\u7EDF\u7684\u76EE\u5F55\u7B49\u6982\u5FF5\uFF0C\u6240\u6709\u7684\u5BF9\u8C61\u90FD\u76F4\u63A5\u96B6\u5C5E\u4E8E\u5176\u5BF9\u5E94\u7684\u5B58\u50A8\u7A7A\u95F4</strong>\u3002</li><li>\u6BCF\u4E2A\u7528\u6237\u53EF\u4EE5\u62E5\u6709\u591A\u4E2A\u5B58\u50A8\u7A7A\u95F4\u3002</li><li>\u5B58\u50A8\u7A7A\u95F4\u7684\u540D\u79F0\u5728OSS\u8303\u56F4\u5185\u5FC5\u987B\u662F\u5168\u5C40\u552F\u4E00\u7684\uFF0C\u4E00\u65E6\u521B\u5EFA\u4E4B\u540E\u65E0\u6CD5\u4FEE\u6539\u540D\u79F0\u3002</li><li>\u5B58\u50A8\u7A7A\u95F4\u5185\u90E8\u7684\u5BF9\u8C61\u6570\u76EE\u6CA1\u6709\u9650\u5236\u3002</li></ul><p>\u5B58\u50A8\u7A7A\u95F4\u7684\u547D\u540D\u89C4\u8303\u5982\u4E0B\uFF1A</p><ul><li>\u53EA\u80FD\u5305\u62EC\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u77ED\u5212\u7EBF\uFF08-\uFF09\u3002</li><li>\u5FC5\u987B\u4EE5\u5C0F\u5199\u5B57\u6BCD\u6216\u8005\u6570\u5B57\u5F00\u5934\u548C\u7ED3\u5C3E\u3002</li><li>\u957F\u5EA6\u5FC5\u987B\u57283~63\u5B57\u7B26\u4E4B\u95F4\u3002</li></ul><h3 id="_2-2-\u5BF9\u8C61-object" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5BF9\u8C61-object" aria-hidden="true">#</a> 2.2 \u5BF9\u8C61\uFF08Object\uFF09</h3><p>\u5BF9\u8C61\u662FOSS\u5B58\u50A8\u6570\u636E\u7684\u57FA\u672C\u5355\u5143\uFF0C\u4E5F\u88AB\u79F0\u4E3AOSS\u7684\u6587\u4EF6\u3002<strong>\u548C\u4F20\u7EDF\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E0D\u540C\uFF0C\u5BF9\u8C61\u6CA1\u6709\u6587\u4EF6\u76EE\u5F55\u5C42\u7EA7\u7ED3\u6784\u7684\u5173\u7CFB</strong>\u3002<strong>\u5BF9\u8C61\u7531\u5143\u4FE1\u606F\uFF08Object Meta\uFF09\uFF0C\u7528\u6237\u6570\u636E\uFF08Data\uFF09\u548C\u6587\u4EF6\u540D\uFF08Key\uFF09\u7EC4\u6210</strong>\uFF0C\u5E76\u4E14\u7531\u5B58\u50A8\u7A7A\u95F4\u5185\u90E8\u552F\u4E00\u7684Key\u6765\u6807\u8BC6\u3002\u5BF9\u8C61\u5143\u4FE1\u606F\u662F\u4E00\u7EC4\u952E\u503C\u5BF9\uFF0C\u8868\u793A\u4E86\u5BF9\u8C61\u7684\u4E00\u4E9B\u5C5E\u6027\uFF0C\u6BD4\u5982\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u3001\u5927\u5C0F\u7B49\u4FE1\u606F\uFF0C\u540C\u65F6\u7528\u6237\u4E5F\u53EF\u4EE5\u5728\u5143\u4FE1\u606F\u4E2D\u5B58\u50A8\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684\u4FE1\u606F\u3002</p><p>\u5BF9\u8C61\u7684\u751F\u547D\u5468\u671F\u662F\u4ECE\u4E0A\u4F20\u6210\u529F\u5230\u88AB\u5220\u9664\u4E3A\u6B62\u3002\u5728\u6574\u4E2A\u751F\u547D\u5468\u671F\u5185\uFF0C\u9664\u901A\u8FC7\u8FFD\u52A0\u65B9\u5F0F\u4E0A\u4F20\u7684Object\u53EF\u4EE5\u901A\u8FC7\u7EE7\u7EED\u8FFD\u52A0\u4E0A\u4F20\u5199\u5165\u6570\u636E\u5916\uFF0C\u5176\u4ED6\u65B9\u5F0F\u4E0A\u4F20\u7684Object\u5185\u5BB9\u65E0\u6CD5\u7F16\u8F91\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u91CD\u590D\u4E0A\u4F20\u540C\u540D\u7684\u5BF9\u8C61\u6765\u8986\u76D6\u4E4B\u524D\u7684\u5BF9\u8C61\u3002</p><p>\u5BF9\u8C61\u7684\u547D\u540D\u89C4\u8303\u5982\u4E0B\uFF1A</p><ul><li>\u4F7F\u7528UTF-8\u7F16\u7801\u3002</li><li>\u957F\u5EA6\u5FC5\u987B\u57281~1023\u5B57\u7B26\u4E4B\u95F4\u3002</li><li>\u4E0D\u80FD\u4EE5\u6B63\u659C\u7EBF\uFF08/\uFF09\u6216\u8005\u53CD\u659C\u7EBF\uFF08\\\uFF09\u5F00\u5934\u3002</li><li>\u5BF9\u8C61\u540D\u79F0\u9700\u8981\u533A\u5206\u5927\u5C0F\u5199\u3002\u5982\u65E0\u7279\u6B8A\u8BF4\u660E\uFF0C\u672C\u6587\u6863\u4E2D\u7684\u5BF9\u8C61\u3001\u6587\u4EF6\u79F0\u8C13\u7B49\u540C\u4E8EObject\u3002</li></ul><h3 id="_2-3-objectkey" tabindex="-1"><a class="header-anchor" href="#_2-3-objectkey" aria-hidden="true">#</a> 2.3 ObjectKey</h3><p>\u5728\u5404\u8BED\u8A00SDK\u4E2D\uFF0CObjectKey\u3001Key\u4EE5\u53CAObjectName\u662F\u540C\u4E00\u6982\u5FF5\uFF0C\u5747\u8868\u793A\u5BF9Object\u6267\u884C\u76F8\u5173\u64CD\u4F5C\u65F6\u9700\u8981\u586B\u5199\u7684Object\u540D\u79F0\u3002\u4F8B\u5982\u5411\u67D0\u4E00\u5B58\u50A8\u7A7A\u95F4\u4E0A\u4F20Object\u65F6\uFF0CObjectKey\u8868\u793A\u4E0A\u4F20\u7684Object\u6240\u5728\u5B58\u50A8\u7A7A\u95F4\u7684\u5B8C\u6574\u540D\u79F0\uFF0C\u5373\u5305\u542B\u6587\u4EF6\u540E\u7F00\u5728\u5185\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C\u5982\u586B\u5199\u4E3Aabc/efg/123.jpg\u3002</p><h3 id="_2-4-region-\u5730\u57DF" tabindex="-1"><a class="header-anchor" href="#_2-4-region-\u5730\u57DF" aria-hidden="true">#</a> 2.4 Region\uFF08\u5730\u57DF\uFF09</h3><p>Region\u8868\u793AOSS\u7684\u6570\u636E\u4E2D\u5FC3\u6240\u5728\u7269\u7406\u4F4D\u7F6E\u3002\u7528\u6237\u53EF\u4EE5\u6839\u636E\u8D39\u7528\u3001\u8BF7\u6C42\u6765\u6E90\u7B49\u9009\u62E9\u5408\u9002\u7684\u5730\u57DF\u521B\u5EFABucket\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u8DDD\u79BB\u7528\u6237\u66F4\u8FD1\u7684Region\u8BBF\u95EE\u901F\u5EA6\u66F4\u5FEB\u3002\u8BE6\u60C5\u8BF7\u53C2\u89C1OSS\u5DF2\u7ECF\u5F00\u901A\u7684Region\u3002</p><p>Region\u662F\u5728\u521B\u5EFABucket\u7684\u65F6\u5019\u6307\u5B9A\u7684\uFF0C\u4E00\u65E6\u6307\u5B9A\u4E4B\u540E\u5C31\u4E0D\u5141\u8BB8\u66F4\u6539\u3002\u8BE5Bucket\u4E0B\u6240\u6709\u7684Object\u90FD\u5B58\u50A8\u5728\u5BF9\u5E94\u7684\u6570\u636E\u4E2D\u5FC3\uFF0C\u76EE\u524D\u4E0D\u652F\u6301Object\u7EA7\u522B\u7684Region\u8BBE\u7F6E\u3002</p><h3 id="_2-5-endpoint-\u8BBF\u95EE\u57DF\u540D" tabindex="-1"><a class="header-anchor" href="#_2-5-endpoint-\u8BBF\u95EE\u57DF\u540D" aria-hidden="true">#</a> 2.5 Endpoint\uFF08\u8BBF\u95EE\u57DF\u540D\uFF09</h3>',20),b={href:"http://xn--RegionEndpointoss-cn-hangzhou-kt90c896mt2ci65cvd3dscju30l1b0c.aliyuncs.com",target:"_blank",rel:"noopener noreferrer"},O={href:"http://xn--Endpointoss-cn-hangzhou-internal-2z27cdy55a02wh.aliyuncs.com",target:"_blank",rel:"noopener noreferrer"},u=a('<h3 id="_2-6-accesskey-\u8BBF\u95EE\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#_2-6-accesskey-\u8BBF\u95EE\u5BC6\u94A5" aria-hidden="true">#</a> 2.6 AccessKey\uFF08\u8BBF\u95EE\u5BC6\u94A5\uFF09</h3><p>AccessKey\u7B80\u79F0AK\uFF0C\u6307\u7684\u662F\u8BBF\u95EE\u8EAB\u4EFD\u9A8C\u8BC1\u4E2D\u7528\u5230\u7684AccessKeyId\u548CAccessKeySecret\u3002OSS\u901A\u8FC7\u4F7F\u7528AccessKeyId\u548CAccessKeySecret\u5BF9\u79F0\u52A0\u5BC6\u7684\u65B9\u6CD5\u6765\u9A8C\u8BC1\u67D0\u4E2A\u8BF7\u6C42\u7684\u53D1\u9001\u8005\u8EAB\u4EFD\u3002AccessKeyId\u7528\u4E8E\u6807\u8BC6\u7528\u6237\uFF1BAccessKeySecret\u662F\u7528\u6237\u7528\u4E8E\u52A0\u5BC6\u7B7E\u540D\u5B57\u7B26\u4E32\u548COSS\u7528\u6765\u9A8C\u8BC1\u7B7E\u540D\u5B57\u7B26\u4E32\u7684\u5BC6\u94A5\uFF0C\u5FC5\u987B\u4FDD\u5BC6\u3002\u5BF9\u4E8EOSS\u6765\u8BF4\uFF0CAccessKey\u7684\u6765\u6E90\u6709\uFF1A</p><ul><li>Bucket\u7684\u62E5\u6709\u8005\u7533\u8BF7\u7684AccessKey\u3002</li><li>\u88ABBucket\u7684\u62E5\u6709\u8005\u901A\u8FC7RAM\u6388\u6743\u7ED9\u7B2C\u4E09\u65B9\u8BF7\u6C42\u8005\u7684AccessKey\u3002</li><li>\u88ABBucket\u7684\u62E5\u6709\u8005\u901A\u8FC7STS\u6388\u6743\u7ED9\u7B2C\u4E09\u65B9\u8BF7\u6C42\u8005\u7684AccessKey\u3002</li></ul><h3 id="_2-7-\u5F3A\u4E00\u81F4\u6027" tabindex="-1"><a class="header-anchor" href="#_2-7-\u5F3A\u4E00\u81F4\u6027" aria-hidden="true">#</a> 2.7 \u5F3A\u4E00\u81F4\u6027</h3><p>Object\u64CD\u4F5C\u5728OSS\u4E0A\u5177\u6709\u539F\u5B50\u6027\uFF0C\u64CD\u4F5C\u8981\u4E48\u6210\u529F\u8981\u4E48\u5931\u8D25\uFF0C\u4E0D\u4F1A\u5B58\u5728\u6709\u4E2D\u95F4\u72B6\u6001\u7684Object\u3002OSS\u4FDD\u8BC1\u7528\u6237\u4E00\u65E6\u4E0A\u4F20\u5B8C\u6210\u4E4B\u540E\u8BFB\u5230\u7684Object\u662F\u5B8C\u6574\u7684\uFF0COSS\u4E0D\u4F1A\u8FD4\u56DE\u7ED9\u7528\u6237\u4E00\u4E2A\u90E8\u5206\u4E0A\u4F20\u6210\u529F\u7684Object\u3002</p><p>Object\u64CD\u4F5C\u5728OSS\u540C\u6837\u5177\u6709\u5F3A\u4E00\u81F4\u6027\uFF0C\u7528\u6237\u4E00\u65E6\u6536\u5230\u4E86\u4E00\u4E2A\u4E0A\u4F20\uFF08PUT\uFF09\u6210\u529F\u7684\u54CD\u5E94\uFF0C\u8BE5\u4E0A\u4F20\u7684Object\u5C31\u5DF2\u7ECF\u7ACB\u5373\u53EF\u8BFB\uFF0C\u5E76\u4E14Object\u7684\u5197\u4F59\u6570\u636E\u5DF2\u7ECF\u5199\u6210\u529F\u3002\u4E0D\u5B58\u5728\u4E00\u79CD\u4E0A\u4F20\u7684\u4E2D\u95F4\u72B6\u6001\uFF0C\u5373read-after-write\u5374\u65E0\u6CD5\u8BFB\u53D6\u5230\u6570\u636E\u3002\u5BF9\u4E8E\u5220\u9664\u64CD\u4F5C\u4E5F\u662F\u4E00\u6837\u7684\uFF0C\u7528\u6237\u5220\u9664\u6307\u5B9A\u7684Object\u6210\u529F\u4E4B\u540E\uFF0C\u8BE5Object\u7ACB\u5373\u53D8\u4E3A\u4E0D\u5B58\u5728\u3002</p><h3 id="_2-8-\u6570\u636E\u5197\u4F59\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_2-8-\u6570\u636E\u5197\u4F59\u673A\u5236" aria-hidden="true">#</a> 2.8 \u6570\u636E\u5197\u4F59\u673A\u5236</h3><p>OSS\u4F7F\u7528\u57FA\u4E8E\u7EA0\u5220\u7801\u3001\u591A\u526F\u672C\u7684\u6570\u636E\u5197\u4F59\u5B58\u50A8\u673A\u5236\uFF0C\u5C06\u6BCF\u4E2A\u5BF9\u8C61\u7684\u4E0D\u540C\u5197\u4F59\u5B58\u50A8\u5728\u540C\u4E00\u4E2A\u533A\u57DF\u5185\u591A\u4E2A\u8BBE\u65BD\u7684\u591A\u4E2A\u8BBE\u5907\u4E0A\uFF0C\u786E\u4FDD\u786C\u4EF6\u5931\u6548\u65F6\u7684\u6570\u636E\u6301\u4E45\u6027\u548C\u53EF\u7528\u6027\u3002</p><p>OSS Object\u64CD\u4F5C\u5177\u6709\u5F3A\u4E00\u81F4\u6027\uFF0C\u7528\u6237\u4E00\u65E6\u6536\u5230\u4E86\u4E0A\u4F20\u6216\u590D\u5236\u6210\u529F\u7684\u54CD\u5E94\uFF0C\u5219\u8BE5\u4E0A\u4F20\u7684Object\u5C31\u5DF2\u7ECF\u7ACB\u5373\u53EF\u8BFB\uFF0C\u4E14\u6570\u636E\u5DF2\u7ECF\u5197\u4F59\u5199\u5165\u5230\u591A\u4E2A\u8BBE\u5907\u4E2D\u3002</p><p>OSS\u4F1A\u901A\u8FC7\u8BA1\u7B97\u7F51\u7EDC\u6D41\u91CF\u5305\u7684\u6821\u9A8C\u548C\uFF0C\u9A8C\u8BC1\u6570\u636E\u5305\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4E4B\u95F4\u4F20\u8F93\u4E2D\u662F\u5426\u51FA\u9519\uFF0C\u4FDD\u8BC1\u6570\u636E\u5B8C\u6574\u4F20\u8F93\u3002</p><p>OSS\u7684\u5197\u4F59\u5B58\u50A8\u673A\u5236\uFF0C\u53EF\u652F\u6301\u4E24\u4E2A\u5B58\u50A8\u8BBE\u65BD\u5E76\u53D1\u635F\u574F\u65F6\uFF0C\u4ECD\u7EF4\u6301\u6570\u636E\u4E0D\u4E22\u5931\u3002</p><p>\u5F53\u6570\u636E\u5B58\u5165OSS\u540E\uFF0COSS\u4F1A\u68C0\u6D4B\u548C\u4FEE\u590D\u4E22\u5931\u7684\u5197\u4F59\uFF0C\u786E\u4FDD\u6570\u636E\u6301\u4E45\u6027\u548C\u53EF\u7528\u6027\u3002</p><p>OSS\u4F1A\u5468\u671F\u6027\u5730\u901A\u8FC7\u6821\u9A8C\u7B49\u65B9\u5F0F\u9A8C\u8BC1\u6570\u636E\u7684\u5B8C\u6574\u6027\uFF0C\u53CA\u65F6\u53D1\u73B0\u56E0\u786C\u4EF6\u5931\u6548\u7B49\u539F\u56E0\u9020\u6210\u7684\u6570\u636E\u635F\u574F\u3002\u5F53\u68C0\u6D4B\u5230\u6570\u636E\u6709\u90E8\u5206\u635F\u574F\u6216\u4E22\u5931\u65F6\uFF0COSS\u4F1A\u5229\u7528\u5197\u4F59\u7684\u6570\u636E\uFF0C\u8FDB\u884C\u91CD\u5EFA\u5E76\u4FEE\u590D\u635F\u574F\u6570\u636E\u3002</p><h2 id="_3-oss\u4E0E\u6587\u4EF6\u7CFB\u7EDF\u7684\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_3-oss\u4E0E\u6587\u4EF6\u7CFB\u7EDF\u7684\u5BF9\u6BD4" aria-hidden="true">#</a> 3. OSS\u4E0E\u6587\u4EF6\u7CFB\u7EDF\u7684\u5BF9\u6BD4</h2><h3 id="_3-1-oss\u4E0E\u6587\u4EF6\u7CFB\u7EDF\u7684\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_3-1-oss\u4E0E\u6587\u4EF6\u7CFB\u7EDF\u7684\u5BF9\u6BD4" aria-hidden="true">#</a> 3.1 OSS\u4E0E\u6587\u4EF6\u7CFB\u7EDF\u7684\u5BF9\u6BD4</h3><table><thead><tr><th>\u5BF9\u6BD4\u9879</th><th>OSS</th><th>\u6587\u4EF6\u7CFB\u7EDF</th></tr></thead><tbody><tr><td>\u6570\u636E\u6A21\u578B</td><td>OSS\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\uFF0C\u63D0\u4F9B\u7684\u662F\u4E00\u4E2AKey-Value\u5BF9\u5F62\u5F0F\u7684\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\u3002</td><td>\u6587\u4EF6\u7CFB\u7EDF\u662F\u4E00\u79CD\u5178\u578B\u7684\u6811\u72B6\u7D22\u5F15\u7ED3\u6784\u3002</td></tr><tr><td>\u6570\u636E\u83B7\u53D6</td><td>\u6839\u636EObject\u7684\u540D\u79F0\uFF08Key\uFF09\u552F\u4E00\u7684\u83B7\u53D6\u8BE5Object\u7684\u5185\u5BB9\u3002\u867D\u7136\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u7C7B\u4F3Ctest1/test.jpg\u7684\u540D\u5B57\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u8868\u793A\u7528\u6237\u7684Object\u662F\u4FDD\u5B58\u5728test1\u76EE\u5F55\u4E0B\u9762\u7684\u3002\u5BF9\u4E8EOSS\u6765\u8BF4\uFF0Ctest1/test.jpg\u4EC5\u4EC5\u53EA\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E0Eexample.jpg\u5E76\u6CA1\u6709\u672C\u8D28\u7684\u533A\u522B\u3002\u56E0\u6B64\u4E0D\u540C\u540D\u79F0\u7684Object\u4E4B\u95F4\u7684\u8BBF\u95EE\u6D88\u8017\u7684\u8D44\u6E90\u662F\u7C7B\u4F3C\u7684\u3002</td><td>\u4E00\u4E2A\u540D\u4E3Atest1/test.jpg\u7684\u6587\u4EF6\uFF0C\u8BBF\u95EE\u8FC7\u7A0B\u9700\u8981\u5148\u8BBF\u95EE\u5230test1\u8FD9\u4E2A\u76EE\u5F55\uFF0C\u7136\u540E\u518D\u5728\u8BE5\u76EE\u5F55\u4E0B\u67E5\u627E\u540D\u4E3Atest.jpg\u7684\u6587\u4EF6\u3002</td></tr><tr><td>\u4F18\u52BF</td><td>\u652F\u6301\u6D77\u91CF\u7684\u7528\u6237\u5E76\u53D1\u8BBF\u95EE\u3002</td><td>\u652F\u6301\u6587\u4EF6\u7684\u4FEE\u6539\uFF0C\u6BD4\u5982\u4FEE\u6539\u6307\u5B9A\u504F\u79FB\u4F4D\u7F6E\u7684\u5185\u5BB9\u3001\u622A\u65AD\u6587\u4EF6\u5C3E\u90E8\u7B49\u3002\u4E5F\u652F\u6301\u6587\u4EF6\u5939\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982\u91CD\u547D\u540D\u76EE\u5F55\u3001\u5220\u9664\u76EE\u5F55\u3001\u79FB\u52A8\u76EE\u5F55\u7B49\u975E\u5E38\u5BB9\u6613\u3002</td></tr><tr><td>\u52A3\u52BF</td><td>OSS\u4FDD\u5B58\u7684Object\u4E0D\u652F\u6301\u4FEE\u6539\uFF08\u8FFD\u52A0\u5199Object\u9700\u8981\u8C03\u7528\u7279\u5B9A\u7684\u63A5\u53E3\uFF0C\u751F\u6210\u7684Object\u4E5F\u548C\u6B63\u5E38\u4E0A\u4F20\u7684Object\u7C7B\u578B\u4E0A\u6709\u5DEE\u522B\uFF09\u3002\u7528\u6237\u54EA\u6015\u662F\u4EC5\u4EC5\u9700\u8981\u4FEE\u6539\u4E00\u4E2A\u5B57\u8282\u4E5F\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u6574\u4E2AObject\u3002OSS\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u64CD\u4F5C\u6765\u6A21\u62DF\u7C7B\u4F3C\u6587\u4EF6\u5939\u7684\u529F\u80FD\uFF0C\u4F46\u662F\u4EE3\u4EF7\u975E\u5E38\u6602\u8D35\u3002\u6BD4\u5982\u91CD\u547D\u540D\u76EE\u5F55\uFF0C\u5E0C\u671B\u5C06test1\u76EE\u5F55\u91CD\u547D\u540D\u6210test2\uFF0C\u90A3\u4E48OSS\u7684\u5B9E\u9645\u64CD\u4F5C\u662F\u5C06\u6240\u6709\u4EE5test1/\u5F00\u5934\u7684Object\u90FD\u91CD\u65B0\u590D\u5236\u6210\u4EE5test2/\u5F00\u5934\u7684Object\uFF0C\u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u6D88\u8017\u8D44\u6E90\u7684\u64CD\u4F5C\u3002\u56E0\u6B64\u5728\u4F7F\u7528OSS\u7684\u65F6\u5019\u8981\u5C3D\u91CF\u907F\u514D\u7C7B\u4F3C\u7684\u64CD\u4F5C\u3002</td><td>\u53D7\u9650\u4E8E\u5355\u4E2A\u8BBE\u5907\u7684\u6027\u80FD\u3002\u8BBF\u95EE\u8D8A\u6DF1\u7684\u76EE\u5F55\u6D88\u8017\u7684\u8D44\u6E90\u4E5F\u8D8A\u5927\uFF0C\u64CD\u4F5C\u62E5\u6709\u5F88\u591A\u6587\u4EF6\u7684\u76EE\u5F55\u4E5F\u4F1A\u975E\u5E38\u6162\u3002</td></tr></tbody></table><p>\u56E0\u6B64\uFF0C\u5C06OSS\u6620\u5C04\u4E3A\u6587\u4EF6\u7CFB\u7EDF\u662F\u975E\u5E38\u4F4E\u6548\u7684\uFF0C\u4E5F\u662F\u4E0D\u5EFA\u8BAE\u7684\u505A\u6CD5\u3002\u5982\u679C\u4E00\u5B9A\u8981\u6302\u8F7D\u6210\u6587\u4EF6\u7CFB\u7EDF\u7684\u8BDD\uFF0C\u5EFA\u8BAE\u5C3D\u91CF\u53EA\u505A\u5199\u65B0\u6587\u4EF6\u3001\u5220\u9664\u6587\u4EF6\u3001\u8BFB\u53D6\u6587\u4EF6\u8FD9\u51E0\u79CD\u64CD\u4F5C\u3002\u4F7F\u7528OSS\u5E94\u8BE5\u5145\u5206\u53D1\u6325\u5176\u4F18\u70B9\uFF0C\u5373\u6D77\u91CF\u6570\u636E\u5904\u7406\u80FD\u529B\uFF0C\u4F18\u5148\u7528\u6765\u5B58\u50A8\u6D77\u91CF\u7684\u975E\u7ED3\u6784\u5316\u6570\u636E\uFF0C\u6BD4\u5982\u56FE\u7247\u3001\u89C6\u9891\u3001\u6587\u6863\u7B49\u3002</p><h3 id="_3-2-oss\u4E0E\u6587\u4EF6\u7CFB\u7EDF\u7684\u6982\u5FF5\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_3-2-oss\u4E0E\u6587\u4EF6\u7CFB\u7EDF\u7684\u6982\u5FF5\u5BF9\u6BD4" aria-hidden="true">#</a> 3.2 OSS\u4E0E\u6587\u4EF6\u7CFB\u7EDF\u7684\u6982\u5FF5\u5BF9\u6BD4\uFF1A</h3><table><thead><tr><th>\u5BF9\u8C61\u5B58\u50A8 OSS</th><th>\u6587\u4EF6\u7CFB\u7EDF</th></tr></thead><tbody><tr><td>Object</td><td>\u6587\u4EF6</td></tr><tr><td>Bucket</td><td>\u4E3B\u76EE\u5F55</td></tr><tr><td>Region</td><td>\u65E0</td></tr><tr><td>Endpoint</td><td>\u65E0</td></tr><tr><td>AccessKey</td><td>\u65E0</td></tr><tr><td>\u65E0</td><td>\u591A\u7EA7\u76EE\u5F55</td></tr><tr><td>GetService</td><td>\u83B7\u53D6\u4E3B\u76EE\u5F55\u5217\u8868</td></tr><tr><td>GetBucket</td><td>\u83B7\u53D6\u6587\u4EF6\u5217\u8868</td></tr><tr><td>PutObject</td><td>\u5199\u6587\u4EF6</td></tr><tr><td>AppendObject</td><td>\u8FFD\u52A0\u5199\u6587\u4EF6</td></tr><tr><td>GetObject</td><td>\u8BFB\u6587\u4EF6</td></tr><tr><td>DeleteObject</td><td>\u5220\u9664\u6587\u4EF6</td></tr><tr><td>\u65E0</td><td>\u4FEE\u6539\u6587\u4EF6\u5185\u5BB9</td></tr><tr><td>CopyObject</td><td>\uFF08\u76EE\u6807\u6587\u4EF6\u548C\u6E90\u6587\u4EF6\u76F8\u540C\uFF09 \u4FEE\u6539\u6587\u4EF6\u5C5E\u6027</td></tr><tr><td>CopyObject</td><td>\uFF08\u76EE\u6807\u6587\u4EF6\u548C\u6E90\u6587\u4EF6\u4E0D\u540C\uFF09 \u590D\u5236\u6587\u4EF6</td></tr><tr><td>\u65E0</td><td>\u91CD\u547D\u540D\u6587\u4EF6</td></tr></tbody></table><h3 id="_3-3-oss\u672F\u8BED\u8868" tabindex="-1"><a class="header-anchor" href="#_3-3-oss\u672F\u8BED\u8868" aria-hidden="true">#</a> 3.3 OSS\u672F\u8BED\u8868</h3><table><thead><tr><th>\u82F1\u6587</th><th>\u4E2D\u6587</th></tr></thead><tbody><tr><td>Bucket</td><td>\u5B58\u50A8\u7A7A\u95F4</td></tr><tr><td>Object</td><td>\u5BF9\u8C61\u6216\u8005\u6587\u4EF6</td></tr><tr><td>Endpoint</td><td>OSS \u8BBF\u95EE\u57DF\u540D</td></tr><tr><td>Region</td><td>\u5730\u57DF\u6216\u8005\u6570\u636E\u4E2D\u5FC3</td></tr><tr><td>AccessKey</td><td>AccessKeyId\u548CAccessKeySecret\u7684\u7EDF\u79F0\uFF0C\u8BBF\u95EE\u5BC6\u94A5</td></tr><tr><td>Put Object</td><td>\u7B80\u5355\u4E0A\u4F20</td></tr><tr><td>Post Object</td><td>\u8868\u5355\u4E0A\u4F20</td></tr><tr><td>Multipart Upload</td><td>\u5206\u7247\u4E0A\u4F20</td></tr><tr><td>Append Object</td><td>\u8FFD\u52A0\u4E0A\u4F20</td></tr><tr><td>Get Object</td><td>\u7B80\u5355\u4E0B\u8F7D</td></tr><tr><td>Callback</td><td>\u56DE\u8C03</td></tr><tr><td>Object Meta</td><td>\u6587\u4EF6\u5143\u4FE1\u606F\u3002\u7528\u6765\u63CF\u8FF0\u6587\u4EF6\u4FE1\u606F\uFF0C\u4F8B\u5982\u957F\u5EA6\uFF0C\u7C7B\u578B\u7B49</td></tr><tr><td>Data</td><td>\u6587\u4EF6\u6570\u636E</td></tr><tr><td>Key</td><td>\u6587\u4EF6\u540D</td></tr><tr><td>ACL</td><td>(Access Control List) \u5B58\u50A8\u7A7A\u95F4\u6216\u8005\u6587\u4EF6\u7684\u6743\u9650</td></tr></tbody></table><h2 id="_4-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_4-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 4. \u5E94\u7528\u573A\u666F</h2><h3 id="_4-1-\u56FE\u7247\u548C\u97F3\u89C6\u9891\u7B49\u5E94\u7528\u7684\u6D77\u91CF\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#_4-1-\u56FE\u7247\u548C\u97F3\u89C6\u9891\u7B49\u5E94\u7528\u7684\u6D77\u91CF\u5B58\u50A8" aria-hidden="true">#</a> 4.1 \u56FE\u7247\u548C\u97F3\u89C6\u9891\u7B49\u5E94\u7528\u7684\u6D77\u91CF\u5B58\u50A8</h3><p>OSS\u53EF\u7528\u4E8E\u56FE\u7247\u3001\u97F3\u89C6\u9891\u3001\u65E5\u5FD7\u7B49\u6D77\u91CF\u6587\u4EF6\u7684\u5B58\u50A8\u3002\u5404\u79CD\u7EC8\u7AEF\u8BBE\u5907\u3001Web\u7F51\u7AD9\u7A0B\u5E8F\u3001\u79FB\u52A8\u5E94\u7528\u53EF\u4EE5\u76F4\u63A5\u5411OSS\u5199\u5165\u6216\u8BFB\u53D6\u6570\u636E\u3002OSS\u652F\u6301\u6D41\u5F0F\u5199\u5165\u548C\u6587\u4EF6\u5199\u5165\u4E24\u79CD\u65B9\u5F0F\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220722223504937.png" alt="image-20220722223504937"></p><h3 id="_4-2-\u7F51\u9875\u6216\u8005\u79FB\u52A8\u5E94\u7528\u7684\u9759\u6001\u548C\u52A8\u6001\u8D44\u6E90\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#_4-2-\u7F51\u9875\u6216\u8005\u79FB\u52A8\u5E94\u7528\u7684\u9759\u6001\u548C\u52A8\u6001\u8D44\u6E90\u5206\u79BB" aria-hidden="true">#</a> 4.2 \u7F51\u9875\u6216\u8005\u79FB\u52A8\u5E94\u7528\u7684\u9759\u6001\u548C\u52A8\u6001\u8D44\u6E90\u5206\u79BB</h3><p>\u5229\u7528\u6D77\u91CF\u4E92\u8054\u7F51\u5E26\u5BBD\uFF0COSS\u53EF\u4EE5\u5B9E\u73B0\u6D77\u91CF\u6570\u636E\u7684\u4E92\u8054\u7F51\u5E76\u53D1\u4E0B\u8F7D\u3002OSS\u63D0\u4F9B\u539F\u751F\u7684\u4F20\u8F93\u52A0\u901F\u529F\u80FD\uFF0C\u652F\u6301\u4E0A\u4F20\u52A0\u901F\u3001\u4E0B\u8F7D\u52A0\u901F\uFF0C\u63D0\u5347\u8DE8\u56FD\u3001\u8DE8\u6D0B\u6570\u636E\u4E0A\u4F20\u3001\u4E0B\u8F7D\u7684\u4F53\u9A8C\u3002\u540C\u65F6\uFF0COSS\u4E5F\u53EF\u4EE5\u7ED3\u5408CDN\u4EA7\u54C1\uFF0C\u63D0\u4F9B\u9759\u6001\u5185\u5BB9\u5B58\u50A8\u3001\u5206\u53D1\u5230\u8FB9\u7F18\u8282\u70B9\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5229\u7528CDN\u8FB9\u7F18\u8282\u70B9\u7F13\u5B58\u7684\u6570\u636E\uFF0C\u63D0\u5347\u540C\u4E00\u4E2A\u6587\u4EF6\u88AB\u540C\u4E00\u5730\u533A\u5BA2\u6237\u5927\u91CF\u91CD\u590D\u5E76\u53D1\u4E0B\u8F7D\u7684\u4F53\u9A8C\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220722223627660.png" alt="image-20220722223627660"></p><h3 id="_4-3-\u4E91\u7AEF\u6570\u636E\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_4-3-\u4E91\u7AEF\u6570\u636E\u5904\u7406" aria-hidden="true">#</a> 4.3 \u4E91\u7AEF\u6570\u636E\u5904\u7406</h3><p>\u4E0A\u4F20\u6587\u4EF6\u5230OSS\u540E\uFF0C\u53EF\u4EE5\u914D\u5408\u5A92\u4F53\u5904\u7406\u670D\u52A1\u548C\u56FE\u7247\u5904\u7406\u670D\u52A1\u8FDB\u884C\u4E91\u7AEF\u7684\u6570\u636E\u5904\u7406\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220722223702103.png" alt="image-20220722223702103"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',32),_={href:"https://yunyanchengyu.blog.csdn.net/article/details/120835522?spm=1001.2014.3001.5502",target:"_blank",rel:"noopener noreferrer"};function j(g,y){const d=s("ExternalLinkIcon");return n(),i("div",null,[h,e("blockquote",null,[e("p",null,[t("\u6587\u6863\u6765\u6E90\u4E8E"),e("a",l,[t("\u963F\u91CC\u4E91\u5BF9\u8C61\u5B58\u50A8 OSS"),r(d)]),t("\uFF0C"),e("a",S,[t("Minio"),r(d)]),t("\u4E5F\u662F\u5BF9\u8C61\u5B58\u50A8 OSS\uFF0C\u5F88\u591A\u6982\u5FF5\u90FD\u662F\u76F8\u901A\u7684\uFF0C\u6240\u4EE5\u4E86\u89E3\u4E0B\u3002\u5B9E\u9645\u4F01\u4E1A\u5E94\u7528\u4F7F\u7528\u963F\u91CCOSS\u662F\u4E00\u4E2A\u5F88\u4E0D\u9519\u7684\u9009\u62E9\u3002")])]),p,e("p",null,[t("Endpoint\u8868\u793AOSS\u5BF9\u5916\u670D\u52A1\u7684\u8BBF\u95EE\u57DF\u540D\u3002OSS\u4EE5HTTP RESTful API\u7684\u5F62\u5F0F\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u5F53\u8BBF\u95EE\u4E0D\u540C\u7684Region\u7684\u65F6\u5019\uFF0C\u9700\u8981\u4E0D\u540C\u7684\u57DF\u540D\u3002\u901A\u8FC7\u5185\u7F51\u548C\u5916\u7F51\u8BBF\u95EE\u540C\u4E00\u4E2ARegion\u6240\u9700\u8981\u7684Endpoint\u4E5F\u662F\u4E0D\u540C\u7684\u3002"),e("a",b,[t("\u4F8B\u5982\u676D\u5DDERegion\u7684\u5916\u7F51Endpoint\u662Foss-cn-hangzhou.aliyuncs.com"),r(d)]),t("\uFF0C"),e("a",O,[t("\u5185\u7F51Endpoint\u662Foss-cn-hangzhou-internal.aliyuncs.com"),r(d)]),t("\u3002\u5177\u4F53\u7684\u5185\u5BB9\u8BF7\u53C2\u89C1\u5404\u4E2ARegion\u5BF9\u5E94\u7684Endpoint\u3002")]),u,e("p",null,[e("a",_,[t("Minio\u5165\u95E8\u7CFB\u5217\u30107\u3011\u5BF9\u8C61\u5B58\u50A8 OSS\u6982\u8FF0"),r(d)])])])}const k=c(o,[["render",j],["__file","mongodb-backup.html.vue"]]);export{k as default};
