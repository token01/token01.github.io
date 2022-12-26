import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as l,f as n}from"./app.ea05b52c.js";const i={},s=n(`<h2 id="handler-go-\u5904\u7406\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#handler-go-\u5904\u7406\u6D88\u606F" aria-hidden="true">#</a> handler.go \uFF08\u5904\u7406\u6D88\u606F\uFF09</h2><h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h3><ol><li>startNewRound(common.Big0)</li><li>subscribeEvents()</li><li>handleEvents() <ul><li>istanbul.RequestEvent{}</li><li>istanbul.MessageEvent{}</li><li>backlogEvent{}</li><li>timeoutEvent{}</li><li>istanbul.FinalCommittedEvent{}</li></ul></li></ol><h3 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> stop</h3><ol><li>roundChangeTimer.Stop()</li><li>unsubscribeEvents() <ul><li>events.Unsubscribe()timeoutSub.Unsubscribe()</li><li>finalCommittedSub.Unsubscribe()</li></ul></li><li>\u4F7F\u5F97handler\u5904\u4E8Ewait\u72B6\u6001</li></ol><h3 id="handlemsg-handletimeoutmsg" tabindex="-1"><a class="header-anchor" href="#handlemsg-handletimeoutmsg" aria-hidden="true">#</a> handleMsg&amp;handleTimeoutMsg</h3><ol><li>\u5148\u8FDB\u884Cmsg\u7684check</li><li>\u5982\u679C\u662FfutureMsg\uFF0C\u76F4\u63A5\u5B58\u50A8\u5E76returnErr</li><li>\u63A5\u4E0B\u6765\u5904\u74064\u4E2Amsg</li></ol><h2 id="startnewround" tabindex="-1"><a class="header-anchor" href="#startnewround" aria-hidden="true">#</a> startNewRound</h2><ol><li><p>\u9996\u5148\u8BBE\u7F6EroundChange \u4E3Afalse\uFF0C\u5982\u679C\u6700\u65B0\u7684proposer\u548Cproposal\u4E0D\u5B58\u5728\uFF0C\u76F4\u63A5return</p></li><li><p>\u7B2C\u4E8C\u4E2A\u6B65\u9AA4\u6709\u51E0\u4E2Aif else \u9700\u8981\u62C6\u89E3\uFF08TODO\uFF09</p></li><li><p>\u5982\u679CroundChange\u4E3Atrue\uFF0C\u65B0\u5EFA\u4E00\u4E2AView\uFF0C\u5982\u679C\u4E3Afalse\uFF0Csequence\u52A01</p></li><li><p>\u9009\u51FAproposer\uFF08CalcProposer\uFF09\uFF0C\u6839\u636Evalset\u3001lastprotser\u3001round\u8FDB\u884C\u9009\u62E9</p></li><li><p>\u8BBE\u7F6E\u72B6\u6001\u4E3A\u63A5\u6536\u8BF7\u6C42c.setState(StateAcceptRequest)\u3002</p><ul><li><p>\u53D1\u9001istanbul.RequestEvent\uFF08\u628Aproposal\u6254\u51FA\u53BB\uFF09</p></li><li><p>\u5904\u7406\u79EF\u538B\u6D88\u606F\uFF08Preprepare\uFF09</p></li><li><p>\u53D1\u9001backlogEvent\u4E8B\u4EF6</p></li><li><p>endPreprepare\uFF1A</p></li><li><p>\u5982\u679C\u81EA\u5DF1\u662Fproposer\u5E76\u4E14\u548Cproposal\u6709\u7740\u76F8\u540C\u7684sequence\uFF0C\u90A3\u5C31\u5E7F\u64ADpreprepare\u6D88\u606F</p></li><li><p>\u5E7F\u64AD\u9014\u4E2D\u5C06\u6D88\u606F\u8F6C\u6362\u6210payload \u5E76\u8FD4\u56DE</p></li></ul></li></ol><h2 id="handlepreprepare" tabindex="-1"><a class="header-anchor" href="#handlepreprepare" aria-hidden="true">#</a> handlePreprepare</h2><ul><li>\u6821\u9A8Cmessage \uFF0C\u5982\u679C\u662F\u8001\u7684prepare\u6D88\u606F\uFF0C\u8981commit \u8FD9\u4E2Aproposal,\u76F4\u63A5\u4F1A\u5230\u5E7F\u64ADcomiit\u6D88\u606F</li><li>\u6821\u9A8C\u6D88\u606F\u6765\u81EA\u5F53\u524D\u7684proposer</li><li>\u6821\u9A8C\u6211\u4EEC\u63A5\u6536\u5230\u7684proposal <ul><li>check \u574F\u5757</li><li>check block body(rehash)</li><li>verifyHeader (TODO,\u91CD\u70B9\u4E86\u89E3)</li></ul></li><li>\u6821\u9A8C\u4E4B\u540E\uFF0C\uFF08TODO\uFF0C\u903B\u8F91\uFF1F\uFF09</li></ul><p>6.\u5982\u679C\u9501\u5B9A\u7684proposal\u548C\u63A5\u6536\u5230\u7684proposal\u4E0D\u4E00\u81F4\u5C31sendNextRoundChange\uFF0C\u5982\u679C\u4E00\u6837\uFF0C\u5C31\u63A5\u6536prepare\u6D88\u606F\u5E76\u8BBE\u7F6E\u72B6\u6001\u4E3AStatePreprepared\u5E76\u4E14\u53D1\u9001commit\u6D88\u606F</p><h2 id="handlecommit" tabindex="-1"><a class="header-anchor" href="#handlecommit" aria-hidden="true">#</a> handleCommit</h2><ol><li>checkMessage</li><li>verifyCommit</li><li>acceptCommit(\u6DFB\u52A0\u5230commits\u4E2D)</li><li>\u6709\u4E86\u8DB3\u591F\u7684commit messages\u5E76\u4E14\u4E0D\u662Fcomiited\u72B6\u6001\u5C06commit proposal</li><li>Commit <ul><li>\u8BBE\u7F6E\u72B6\u6001\u4E3Acomitted</li><li>\u521B\u5EFAcommitSeals</li><li>\u8FDB\u5165\u6700\u7EC8\u7684commit\u4EE3\u7801 <ul><li>\u6821\u9A8Cproposal\u662F\u4E00\u4E2A\u6709\u6548\u5757</li><li>seals\u5199\u5165\u5230extra-data\u4E2D\uFF08writeCommittedSeals \u5173\u952E\u4EE3\u7801\uFF09</li><li>\u66F4\u65B0block\u7684header</li><li>\u5982\u679CproposedBlockHash == commitedBlockHash ,\u90A3\u4E48\u5C31\u628Ablock \u6254\u5230commitCh\u4E2D\u53BBseal\u5E76\u4E14\u7B49\u5F85seal\u7ED3\u679C\uFF08\u8FD9\u662Fproposer\u624D\u4F1A\u8D70\u7684\u901A\u9053\uFF09\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF1B\u5982\u679C\u4E0D\u4E00\u6837\uFF0C\u76F4\u63A5\u585E\u5165\u5230enqueue\u4E2D\uFF08sb.broadcaster.Enqueue(fetcherID, block)\uFF09</li></ul></li></ul></li></ol><h2 id="handleroundchange" tabindex="-1"><a class="header-anchor" href="#handleroundchange" aria-hidden="true">#</a> handleRoundChange</h2><ol><li>checkMessage</li><li>roundChangeSet \u6DFB\u52A0\u6D88\u606F</li><li>\u53EA\u8981\u8FBE\u5230\u4E86F+1\u4E2AroundChange\u5C31\u6784\u6210\u4E86\u4E00\u4E2Aweak proof ,\u5C31\u53EF\u4EE5\u68C0\u67E5\u6B64\u65F6\u7684round\u662F\u5426\u6BD4\u6211\u4EEC\u7684round\u5C0F\uFF0C\u5982\u679C\u5C0F\u5C31CatchUp,\u7136\u540EstartNewRound\uFF08\u9700\u89812F+1\uFF09</li></ol><h2 id="engine-go" tabindex="-1"><a class="header-anchor" href="#engine-go" aria-hidden="true">#</a> engine.go</h2><h3 id="prepare" tabindex="-1"><a class="header-anchor" href="#prepare" aria-hidden="true">#</a> prepare</h3><p>\u51C6\u5907header</p><ol><li><p>sb.snapshot</p></li><li><p>\u4ECEcandidates\u4E2D\u968F\u673A\u8BBE\u7F6Ecoinbase</p></li><li><p>prepareExtra\uFF08\u5C06\u5FEB\u7167\u4E2D\u7684validators\u6DFB\u52A0\u5230extraData\u7684validators\u4E2D\uFF09\uFF0Cpayload \u6570\u636E\u5C31\u662F\u7F16\u7801\u540E\u7684IstanbulExtra\uFF0C\u4F5C\u4E3Aextra</p><blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>types<span class="token punctuation">.</span>IstanbulExtra<span class="token punctuation">{</span>
   Validators<span class="token punctuation">:</span>    vals<span class="token punctuation">,</span>
   Seal<span class="token punctuation">:</span>          <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   CommittedSeal<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li></ol><h3 id="finalizeandassemble" tabindex="-1"><a class="header-anchor" href="#finalizeandassemble" aria-hidden="true">#</a> FinalizeAndAssemble</h3><p>\u8FD0\u884C\u4EA4\u6613\u540E\u72B6\u6001\u66F4\u6539\uFF0C\u7EC4\u88C5\u6210\u6700\u7EC8\u7684block</p><h3 id="seal" tabindex="-1"><a class="header-anchor" href="#seal" aria-hidden="true">#</a> seal</h3><p>\u751F\u6210\u4E00\u4E2A\u65B0\u5757\u653E\u5165\u7ED9\u5B9A\u901A\u9053</p><ol><li>\u4E3B\u5757\u5224\u65AD\u662F\u5426\u662Fvalidator\uFF0C\u5B50\u94FE\u8FD8\u5FC5\u987B\u5224\u65AD\u662F\u4E0D\u662F\u5B50validator</li><li>\u66F4\u65B0\u5757\uFF08updateBlock\uFF09\uFF0Cproposer\u7528\u81EA\u5DF1\u7684\u79C1\u94A5\u7ED9\u5757\u7B7E\u540D\u751F\u6210seal\uFF0C\u5E76\u5199\u5165IstanbulExtra\u7684seal\u4E2D\uFF0C\u5305\u62EC\u81EA\u5DF1\u7684\u7B7E\u540D\u7684\u6807\u8BB0\u548C\u5176\u4ED6\u4EBA\u7B7E\u540D\u7684\u6807\u8BB0\uFF0C\u5176\u5B9E\u5C31\u662F\u8FD4\u56DE\u5E26\u7B7E\u540D\u7684\u5757</li><li>\u628A\u5757\u4E22\u5230\u5171\u8BC6\u5F15\u64CE\u4E2D\uFF0C\u901A\u8FC7\u4E8B\u4EF6istanbul.RequestEvent\u4F20\u64AD\uFF0C\u4ECE\u800C\u8FDB\u5165\u5230handleRequest\uFF0C\u5F00\u542FsendPrepeare\uFF0Cresult\u7B49\u5F85\u7684\u5C31\u662Fsb.commitCh\u4E2D\u7684\u6570\u636E</li></ol>`,25),t=[s];function o(r,p){return a(),l("div",null,t)}const u=e(i,[["render",o],["__file","11.Istanbul_consensus_source_analysis.html.vue"]]);export{u as default};
