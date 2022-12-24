const e=JSON.parse('{"key":"v-7ed89d52","path":"/blockchain/Technical_discussion/consensus_algorithm/5.Paxos.html","title":"\u6D45\u8C08\u5171\u8BC6\u7B97\u6CD5|Paxos\u7B97\u6CD5","lang":"zh-CN","frontmatter":{"title":"\u6D45\u8C08\u5171\u8BC6\u7B97\u6CD5|Paxos\u7B97\u6CD5","shortTitle":"\u6D45\u8C08\u5171\u8BC6\u7B97\u6CD5|Paxos\u7B97\u6CD5","category":["\u533A\u5757\u94FE"],"tag":["\u6D45\u8C08\u5171\u8BC6\u7B97\u6CD5|Paxos\u7B97\u6CD5"],"description":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF web3.0 \u533A\u5757\u94FE \u533A\u5757\u94FE\u57FA\u7840\u77E5\u8BC6","head":[["meta",{"name":"keywords","content":"web3.0 \u533A\u5757\u94FE \u57FA\u7840\u77E5\u8BC6 P2P\u7F51\u7EDC"}],["meta",{"property":"og:url","content":"https://bytecodes.tech/blockchain/Technical_discussion/consensus_algorithm/5.Paxos.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u6D45\u8C08\u5171\u8BC6\u7B97\u6CD5|Paxos\u7B97\u6CD5"}],["meta",{"property":"og:description","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF web3.0 \u533A\u5757\u94FE \u533A\u5757\u94FE\u57FA\u7840\u77E5\u8BC6"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-12T03:19:12.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"\u6D45\u8C08\u5171\u8BC6\u7B97\u6CD5|Paxos\u7B97\u6CD5"}],["meta",{"property":"article:modified_time","content":"2022-12-12T03:19:12.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Paxos\u662F\u4EC0\u4E48","slug":"paxos\u662F\u4EC0\u4E48","link":"#paxos\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"Paxos\u76F8\u5173\u6982\u5FF5","slug":"paxos\u76F8\u5173\u6982\u5FF5","link":"#paxos\u76F8\u5173\u6982\u5FF5","children":[]},{"level":2,"title":"paxos\u7B97\u6CD5\u6D41\u7A0B","slug":"paxos\u7B97\u6CD5\u6D41\u7A0B","link":"#paxos\u7B97\u6CD5\u6D41\u7A0B","children":[]},{"level":2,"title":"\u6848\u4F8B\u5206\u6790","slug":"\u6848\u4F8B\u5206\u6790","link":"#\u6848\u4F8B\u5206\u6790","children":[]},{"level":2,"title":"Multi-Paxos\u7B97\u6CD5","slug":"multi-paxos\u7B97\u6CD5","link":"#multi-paxos\u7B97\u6CD5","children":[]},{"level":2,"title":"Paxos\u63A8\u5BFC\u8FC7\u7A0B","slug":"paxos\u63A8\u5BFC\u8FC7\u7A0B","link":"#paxos\u63A8\u5BFC\u8FC7\u7A0B","children":[]},{"level":2,"title":"\u53EA\u6709\u4E00\u4E2AAcceptor","slug":"\u53EA\u6709\u4E00\u4E2Aacceptor","link":"#\u53EA\u6709\u4E00\u4E2Aacceptor","children":[]},{"level":2,"title":"\u591A\u4E2AAcceptor","slug":"\u591A\u4E2Aacceptor","link":"#\u591A\u4E2Aacceptor","children":[]},{"level":2,"title":"Proposer\u751F\u6210\u63D0\u6848","slug":"proposer\u751F\u6210\u63D0\u6848","link":"#proposer\u751F\u6210\u63D0\u6848","children":[]},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981 Propose \u9636\u6BB5","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981-propose-\u9636\u6BB5","link":"#\u4E3A\u4EC0\u4E48\u9700\u8981-propose-\u9636\u6BB5","children":[{"level":3,"title":"Paxos Propose \u7684\u610F\u4E49","slug":"paxos-propose-\u7684\u610F\u4E49","link":"#paxos-propose-\u7684\u610F\u4E49","children":[]}]},{"level":2,"title":"Acceptor\u63A5\u53D7\u63D0\u6848","slug":"acceptor\u63A5\u53D7\u63D0\u6848","link":"#acceptor\u63A5\u53D7\u63D0\u6848","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"git":{"createdTime":1670420212000,"updatedTime":1670815152000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":6}]},"readingTime":{"minutes":14.44,"words":4331},"filePathRelative":"blockchain/Technical_discussion/consensus_algorithm/5.Paxos.md","localizedDate":"2022\u5E7412\u67087\u65E5"}');export{e as data};