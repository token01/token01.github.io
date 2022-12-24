const e=JSON.parse('{"key":"v-04e306bc","path":"/develop/algorithm/alg-domain-distribute-x-paxos.html","title":"\u5206\u5E03\u5F0F\u7B97\u6CD5-Paxos\u7B97\u6CD5","lang":"zh-CN","frontmatter":{"summary":"\u5206\u5E03\u5F0F\u7B97\u6CD5-Paxos\u7B97\u6CD5 1. Paxos\u7B97\u6CD5\u7B80\u4ECB Paxos\u7B97\u6CD5\u662FLamport\u5B97\u5E08\u63D0\u51FA\u7684\u4E00\u79CD\u57FA\u4E8E\u6D88\u606F\u4F20\u9012\u7684\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\uFF08\u5206\u5E03\u5F0F\u9009\u4E3E\u7B97\u6CD5\uFF09\u7B97\u6CD5\uFF0C\u4F7F\u5176\u83B7\u5F972013\u5E74\u56FE\u7075\u5956\u3002 \\" Paxos\u7531Lamport\u4E8E1998\u5E74\u5728\u300AThe Part-Time Parliament\u300B\u8BBA\u6587\u4E2D\u9996\u6B21\u516C\u5F00\uFF0C\u6700\u521D\u7684\u63CF\u8FF0\u4F7F\u7528\u5E0C\u814A\u7684\u4E00\u4E2A\u5C0F\u5C9BPaxos\u4F5C\u4E3A\u6BD4\u55BB\uFF0C\u63CF\u8FF0\u4E86Paxos\u5C0F\u5C9B\u4E2D\u901A","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/develop/algorithm/alg-domain-distribute-x-paxos.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u5206\u5E03\u5F0F\u7B97\u6CD5-Paxos\u7B97\u6CD5"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. Paxos\u7B97\u6CD5\u7B80\u4ECB","slug":"_1-paxos\u7B97\u6CD5\u7B80\u4ECB","link":"#_1-paxos\u7B97\u6CD5\u7B80\u4ECB","children":[]},{"level":2,"title":"2. Basic Paxos\u7B97\u6CD5\u5B9E\u73B0","slug":"_2-basic-paxos\u7B97\u6CD5\u5B9E\u73B0","link":"#_2-basic-paxos\u7B97\u6CD5\u5B9E\u73B0","children":[{"level":3,"title":"2.1 \u89D2\u8272","slug":"_2-1-\u89D2\u8272","link":"#_2-1-\u89D2\u8272","children":[]},{"level":3,"title":"2.2 \u4E09\u4E2A\u9636\u6BB5","slug":"_2-2-\u4E09\u4E2A\u9636\u6BB5","link":"#_2-2-\u4E09\u4E2A\u9636\u6BB5","children":[]},{"level":3,"title":"2.3 \u4F2A\u4EE3\u7801","slug":"_2-3-\u4F2A\u4EE3\u7801","link":"#_2-3-\u4F2A\u4EE3\u7801","children":[]},{"level":3,"title":"2.4 \u5B9E\u73B0\u4E3E\u4F8B","slug":"_2-4-\u5B9E\u73B0\u4E3E\u4F8B","link":"#_2-4-\u5B9E\u73B0\u4E3E\u4F8B","children":[]}]},{"level":2,"title":"3. Paxos\u7B97\u6CD5\u63A8\u5BFC","slug":"_3-paxos\u7B97\u6CD5\u63A8\u5BFC","link":"#_3-paxos\u7B97\u6CD5\u63A8\u5BFC","children":[]},{"level":2,"title":"4. Paxos\u7B97\u6CD5\u62D3\u5C55","slug":"_4-paxos\u7B97\u6CD5\u62D3\u5C55","link":"#_4-paxos\u7B97\u6CD5\u62D3\u5C55","children":[{"level":3,"title":"4.1 Multi-Paxos\u7B97\u6CD5","slug":"_4-1-multi-paxos\u7B97\u6CD5","link":"#_4-1-multi-paxos\u7B97\u6CD5","children":[]}]},{"level":2,"title":"5. \u5E94\u7528\u573A\u666F","slug":"_5-\u5E94\u7528\u573A\u666F","link":"#_5-\u5E94\u7528\u573A\u666F","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":7.68,"words":2304},"filePathRelative":"develop/algorithm/alg-domain-distribute-x-paxos.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};