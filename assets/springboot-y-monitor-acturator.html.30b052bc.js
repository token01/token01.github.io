const t=JSON.parse('{"key":"v-b09fed42","path":"/dependencies/spring-boot/springboot-y-monitor-acturator.html","title":"SpringBoot\u76D1\u63A7 - \u96C6\u6210acturator\u76D1\u63A7\u5DE5\u5177","lang":"zh-CN","frontmatter":{"order":410,"category":["Spring","SpringBoot"],"summary":"SpringBoot\u76D1\u63A7 - \u96C6\u6210acturator\u76D1\u63A7\u5DE5\u5177 \\"\u5F53SpringBoot\u7684\u5E94\u7528\u90E8\u7F72\u5230\u751F\u4EA7\u73AF\u5883\u4E2D\u540E\uFF0C\u5982\u4F55\u76D1\u63A7\u548C\u7BA1\u7406\u5462\uFF1F\u6BD4\u5982\u5BA1\u8BA1\u65E5\u5FD7\uFF0C\u76D1\u63A7\u72B6\u6001\uFF0C\u6307\u6807\u6536\u96C6\u7B49\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CSpringBoot\u63D0\u4F9B\u4E86Actuator\u3002\u672C\u6587\u4E3B\u8981\u4ECB\u7ECDSpring Boot Actuator\u53CA\u5B9E\u73B0\u6848\u4F8B\u3002\\" 1. \u77E5\u8BC6\u51C6\u5907 \\" \u9700\u8981\u4E86\u89E3\u4EC0\u4E48\u662FSpring Boot Act","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/dependencies/spring-boot/springboot-y-monitor-acturator.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"SpringBoot\u76D1\u63A7 - \u96C6\u6210acturator\u76D1\u63A7\u5DE5\u5177"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u77E5\u8BC6\u51C6\u5907","slug":"_1-\u77E5\u8BC6\u51C6\u5907","link":"#_1-\u77E5\u8BC6\u51C6\u5907","children":[{"level":3,"title":"1.1 \u4EC0\u4E48\u662FActuator?","slug":"_1-1-\u4EC0\u4E48\u662Factuator","link":"#_1-1-\u4EC0\u4E48\u662Factuator","children":[]},{"level":3,"title":"1.2 \u4EC0\u4E48\u662FSpring Boot Actuator\uFF1F","slug":"_1-2-\u4EC0\u4E48\u662Fspring-boot-actuator","link":"#_1-2-\u4EC0\u4E48\u662Fspring-boot-actuator","children":[]},{"level":3,"title":"1.3 \u4EC0\u4E48\u662FActuator Endpoints\uFF1F","slug":"_1-3-\u4EC0\u4E48\u662Factuator-endpoints","link":"#_1-3-\u4EC0\u4E48\u662Factuator-endpoints","children":[]}]},{"level":2,"title":"2. \u7B80\u5355\u793A\u4F8B","slug":"_2-\u7B80\u5355\u793A\u4F8B","link":"#_2-\u7B80\u5355\u793A\u4F8B","children":[{"level":3,"title":"2.1 POM\u5F15\u5165actuator\u5305","slug":"_2-1-pom\u5F15\u5165actuator\u5305","link":"#_2-1-pom\u5F15\u5165actuator\u5305","children":[]},{"level":3,"title":"2.2 yml\u914D\u7F6E","slug":"_2-2-yml\u914D\u7F6E","link":"#_2-2-yml\u914D\u7F6E","children":[]}]},{"level":2,"title":"3. endpoints\u7684\u8FDB\u4E00\u6B65\u62D3\u5C55\u914D\u7F6E","slug":"_3-endpoints\u7684\u8FDB\u4E00\u6B65\u62D3\u5C55\u914D\u7F6E","link":"#_3-endpoints\u7684\u8FDB\u4E00\u6B65\u62D3\u5C55\u914D\u7F6E","children":[{"level":3,"title":"3.1 \u4E0ESpringSecurity\u96C6\u6210\u4FDD\u969C\u5B89\u5168","slug":"_3-1-\u4E0Espringsecurity\u96C6\u6210\u4FDD\u969C\u5B89\u5168","link":"#_3-1-\u4E0Espringsecurity\u96C6\u6210\u4FDD\u969C\u5B89\u5168","children":[]},{"level":3,"title":"3.2 Endpoint\u8DE8\u57DF\u8BBF\u95EE","slug":"_3-2-endpoint\u8DE8\u57DF\u8BBF\u95EE","link":"#_3-2-endpoint\u8DE8\u57DF\u8BBF\u95EE","children":[]},{"level":3,"title":"3.3 \u5B9E\u73B0\u81EA\u5DF1\u7684Endpoint","slug":"_3-3-\u5B9E\u73B0\u81EA\u5DF1\u7684endpoint","link":"#_3-3-\u5B9E\u73B0\u81EA\u5DF1\u7684endpoint","children":[]},{"level":3,"title":"3.4 \u7EC4\u4EF6\u7684health\u72B6\u51B5","slug":"_3-4-\u7EC4\u4EF6\u7684health\u72B6\u51B5","link":"#_3-4-\u7EC4\u4EF6\u7684health\u72B6\u51B5","children":[]},{"level":3,"title":"3.5 Metrics\u63A5\u5165\u76D1\u63A7\u7CFB\u7EDF","slug":"_3-5-metrics\u63A5\u5165\u76D1\u63A7\u7CFB\u7EDF","link":"#_3-5-metrics\u63A5\u5165\u76D1\u63A7\u7CFB\u7EDF","children":[]},{"level":3,"title":"3.6 Info\u4FE1\u606F\u5982\u4F55\u83B7\u53D6","slug":"_3-6-info\u4FE1\u606F\u5982\u4F55\u83B7\u53D6","link":"#_3-6-info\u4FE1\u606F\u5982\u4F55\u83B7\u53D6","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":4.82,"words":1446},"filePathRelative":"dependencies/spring-boot/springboot-y-monitor-acturator.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{t as data};
