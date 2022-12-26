const e=JSON.parse('{"key":"v-110de6d0","path":"/dependencies/spring-boot/springboot-y-permission-whitelist.html","title":"SpringBoot-Starter - \u6743\u9650\u767D\u540D\u5355\u81EA\u52A8\u5316\u914D\u7F6E","lang":"zh-CN","frontmatter":{"summary":"SpringBoot-Starter - \u6743\u9650\u767D\u540D\u5355\u81EA\u52A8\u5316\u914D\u7F6E 1. \u81EA\u5B9A\u4E49\u6B65\u9AA4 1.1 \u5F15\u5165SpringBoot \u81EA\u52A8\u5316\u914D\u7F6E\u4F9D\u8D56 1.2 \u521B\u5EFA\u5C5E\u6027\u7C7B \u521B\u5EFA\u5C5E\u6027\u7C7B\uFF0Cprefix = \u201Cywt.cloud.security\u201D\u4EE3\u8868\u8BE5\u9879\u76EE\u5728\u5C5E\u6027\u6587\u4EF6\u4E2D\u914D\u7F6E\u7684\u524D\u7F00\uFF0C\u5373\u53EF\u4EE5\u5728\u5C5E\u6027\u6587\u4EF6\u4E2D\u901A\u8FC7 ywt.cloud.security.anonUris=/login\uFF0C\u5C31\u53EF\u4EE5\u6539\u53D8","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/dependencies/spring-boot/springboot-y-permission-whitelist.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"SpringBoot-Starter - \u6743\u9650\u767D\u540D\u5355\u81EA\u52A8\u5316\u914D\u7F6E"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T10:41:29.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T10:41:29.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u81EA\u5B9A\u4E49\u6B65\u9AA4","slug":"_1-\u81EA\u5B9A\u4E49\u6B65\u9AA4","link":"#_1-\u81EA\u5B9A\u4E49\u6B65\u9AA4","children":[{"level":3,"title":"1.1 \u5F15\u5165SpringBoot \u81EA\u52A8\u5316\u914D\u7F6E\u4F9D\u8D56","slug":"_1-1-\u5F15\u5165springboot-\u81EA\u52A8\u5316\u914D\u7F6E\u4F9D\u8D56","link":"#_1-1-\u5F15\u5165springboot-\u81EA\u52A8\u5316\u914D\u7F6E\u4F9D\u8D56","children":[]},{"level":3,"title":"1.2 \u521B\u5EFA\u5C5E\u6027\u7C7B","slug":"_1-2-\u521B\u5EFA\u5C5E\u6027\u7C7B","link":"#_1-2-\u521B\u5EFA\u5C5E\u6027\u7C7B","children":[]},{"level":3,"title":"1.3 \u521B\u5EFA\u81EA\u52A8\u914D\u7F6E\u7C7B","slug":"_1-3-\u521B\u5EFA\u81EA\u52A8\u914D\u7F6E\u7C7B","link":"#_1-3-\u521B\u5EFA\u81EA\u52A8\u914D\u7F6E\u7C7B","children":[]},{"level":3,"title":"1.4 META-INF \u76EE\u5F55\u4E0B\u521B\u5EFA spring.factories","slug":"_1-4-meta-inf-\u76EE\u5F55\u4E0B\u521B\u5EFA-spring-factories","link":"#_1-4-meta-inf-\u76EE\u5F55\u4E0B\u521B\u5EFA-spring-factories","children":[]}]},{"level":2,"title":"2. \u5F15\u7528Starter","slug":"_2-\u5F15\u7528starter","link":"#_2-\u5F15\u7528starter","children":[{"level":3,"title":"2.1 \u53E6\u4E00\u4E2A\u9879\u76EE\u5F15\u5165 starter","slug":"_2-1-\u53E6\u4E00\u4E2A\u9879\u76EE\u5F15\u5165-starter","link":"#_2-1-\u53E6\u4E00\u4E2A\u9879\u76EE\u5F15\u5165-starter","children":[]},{"level":3,"title":"2.2 \u8FD9\u6837\u5C31\u914D\u7F6E\u4E86\u514D\u767B\u9646\u7684\u5730\u5740","slug":"_2-2-\u8FD9\u6837\u5C31\u914D\u7F6E\u4E86\u514D\u767B\u9646\u7684\u5730\u5740","link":"#_2-2-\u8FD9\u6837\u5C31\u914D\u7F6E\u4E86\u514D\u767B\u9646\u7684\u5730\u5740","children":[]},{"level":3,"title":"2.3 \u5728 SpringBoot \u4E3B\u7A0B\u5E8F\u4E2D \u4F7F\u7528 @EnableYwtCloudResourceServer","slug":"_2-3-\u5728-springboot-\u4E3B\u7A0B\u5E8F\u4E2D-\u4F7F\u7528-enableywtcloudresourceserver","link":"#_2-3-\u5728-springboot-\u4E3B\u7A0B\u5E8F\u4E2D-\u4F7F\u7528-enableywtcloudresourceserver","children":[]}]},{"level":2,"title":"3. \u6CE8\u89E3@EnableYwtCloudResourceServer \u7684\u6765\u9F99\u53BB\u8109","slug":"_3-\u6CE8\u89E3-enableywtcloudresourceserver-\u7684\u6765\u9F99\u53BB\u8109","link":"#_3-\u6CE8\u89E3-enableywtcloudresourceserver-\u7684\u6765\u9F99\u53BB\u8109","children":[{"level":3,"title":"3.1 \u521B\u5EFA\u6CE8\u89E3\u7C7B","slug":"_3-1-\u521B\u5EFA\u6CE8\u89E3\u7C7B","link":"#_3-1-\u521B\u5EFA\u6CE8\u89E3\u7C7B","children":[]},{"level":3,"title":"3.2 \u76F4\u63A5\u5BFC\u5165\u914D\u7F6E\u7C7B\uFF08@Configuration \u7C7B\uFF09","slug":"_3-2-\u76F4\u63A5\u5BFC\u5165\u914D\u7F6E\u7C7B-configuration-\u7C7B","link":"#_3-2-\u76F4\u63A5\u5BFC\u5165\u914D\u7F6E\u7C7B-configuration-\u7C7B","children":[]}]}],"git":{"createdTime":1671866946000,"updatedTime":1672051289000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":2}]},"readingTime":{"minutes":2.08,"words":625},"filePathRelative":"dependencies/spring-boot/springboot-y-permission-whitelist.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
