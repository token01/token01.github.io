const e=JSON.parse('{"key":"v-c5f01dbc","path":"/deploy/nginx/nginx-y-linux-install.html","title":"Linux\u5B89\u88C5nginx","lang":"zh-CN","frontmatter":{"summary":"Linux\u5B89\u88C5nginx 1. \u5B89\u88C5\u6B65\u9AA4 1.1 \u5B89\u88C5\u4F9D\u8D56\u5305 1.2 \u4E0B\u8F7D\u5E76\u89E3\u538B\u5B89\u88C5\u5305 wget \u4E0B\u8F7D\u7684tar\u5305\u7248\u672C\u53EF\u4EE5\u901A\u8FC7nginx\u5B98\u7F51\u67E5\u770B 1.3 \u5B89\u88C5nginx \u5B89\u88C5\u5B8C\u6210\u4F1A\u5728/usr/local\u76EE\u5F55\u4E0B\u51FA\u73B0nginx \u6CE8\uFF1A\u5982\u679C\u9700\u8981\u652F\u6301http\u9700\u8981\u52A0\u5982\u4E0A; 1.4 \u914D\u7F6Enginx.conf \u6309\u9700\u4FEE\u6539\u914D\u7F6E \u5982\u9ED8\u8BA4\u7AEF\u53E3\u4E3A80\uFF0C\u53EF\u4EE5\u4FEE\u6539\u6210\u60F3\u8981\u7684\u5730\u5740 1.5 \u542F\u52A8","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/deploy/nginx/nginx-y-linux-install.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Linux\u5B89\u88C5nginx"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T10:02:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T10:02:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5B89\u88C5\u6B65\u9AA4","slug":"_1-\u5B89\u88C5\u6B65\u9AA4","link":"#_1-\u5B89\u88C5\u6B65\u9AA4","children":[{"level":3,"title":"1.1 \u5B89\u88C5\u4F9D\u8D56\u5305","slug":"_1-1-\u5B89\u88C5\u4F9D\u8D56\u5305","link":"#_1-1-\u5B89\u88C5\u4F9D\u8D56\u5305","children":[]},{"level":3,"title":"1.2 \u4E0B\u8F7D\u5E76\u89E3\u538B\u5B89\u88C5\u5305","slug":"_1-2-\u4E0B\u8F7D\u5E76\u89E3\u538B\u5B89\u88C5\u5305","link":"#_1-2-\u4E0B\u8F7D\u5E76\u89E3\u538B\u5B89\u88C5\u5305","children":[]},{"level":3,"title":"1.3 \u5B89\u88C5nginx","slug":"_1-3-\u5B89\u88C5nginx","link":"#_1-3-\u5B89\u88C5nginx","children":[]},{"level":3,"title":"1.4 \u914D\u7F6Enginx.conf","slug":"_1-4-\u914D\u7F6Enginx-conf","link":"#_1-4-\u914D\u7F6Enginx-conf","children":[]},{"level":3,"title":"1.5 \u542F\u52A8nginx","slug":"_1-5-\u542F\u52A8nginx","link":"#_1-5-\u542F\u52A8nginx","children":[]},{"level":3,"title":"1.6 \u6D4F\u89C8\u5668\u6253\u5F00","slug":"_1-6-\u6D4F\u89C8\u5668\u6253\u5F00","link":"#_1-6-\u6D4F\u89C8\u5668\u6253\u5F00","children":[]}]},{"level":2,"title":"2. \u542F\u52A8\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898","slug":"_2-\u542F\u52A8\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898","link":"#_2-\u542F\u52A8\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898","children":[{"level":3,"title":"2.1 logs \u6587\u4EF6\u5939\u76EE\u5F55\u6CA1\u6709","slug":"_2-1-logs-\u6587\u4EF6\u5939\u76EE\u5F55\u6CA1\u6709","link":"#_2-1-logs-\u6587\u4EF6\u5939\u76EE\u5F55\u6CA1\u6709","children":[]},{"level":3,"title":"2.2 nginx.pid \u5F02\u5E38","slug":"_2-2-nginx-pid-\u5F02\u5E38","link":"#_2-2-nginx-pid-\u5F02\u5E38","children":[]},{"level":3,"title":"2.3 \u542F\u52A8\u65E0\u53CD\u5E94\uFF0Cerror.log \u75AF\u72C2\u6253\u5370 worker process 22327 exited on signal","slug":"_2-3-\u542F\u52A8\u65E0\u53CD\u5E94-error-log-\u75AF\u72C2\u6253\u5370-worker-process-22327-exited-on-signal","link":"#_2-3-\u542F\u52A8\u65E0\u53CD\u5E94-error-log-\u75AF\u72C2\u6253\u5370-worker-process-22327-exited-on-signal","children":[]}]},{"level":2,"title":"3. nginx \u547D\u4EE4","slug":"_3-nginx-\u547D\u4EE4","link":"#_3-nginx-\u547D\u4EE4","children":[]},{"level":2,"title":"4. \u9644\u5F55","slug":"_4-\u9644\u5F55","link":"#_4-\u9644\u5F55","children":[{"level":3,"title":"4.1 rpm \u7248\u672C Nginx \u90E8\u7F72","slug":"_4-1-rpm-\u7248\u672C-nginx-\u90E8\u7F72","link":"#_4-1-rpm-\u7248\u672C-nginx-\u90E8\u7F72","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671876161000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":2}]},"readingTime":{"minutes":1.69,"words":507},"filePathRelative":"deploy/nginx/nginx-y-linux-install.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};