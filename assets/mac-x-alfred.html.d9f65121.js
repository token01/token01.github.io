import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as t,a as e,b as a,d as n,f as s,r as l}from"./app.ec51a1ed.js";const c={},o=s(`<h1 id="mac\u4E4Balfred\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#mac\u4E4Balfred\u4F7F\u7528" aria-hidden="true">#</a> Mac\u4E4BAlfred\u4F7F\u7528</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Mac\u7684Alfred\u8F6F\u4EF6\u4E3B\u8981\u7684\u529F\u80FD\u662F</p><blockquote><p>\u672C\u5730\u641C\u7D22\u53CA\u5E94\u7528\u5FEB\u901F\u542F\u52A8</p></blockquote><h2 id="_2-\u6838\u5FC3\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_2-\u6838\u5FC3\u529F\u80FD" aria-hidden="true">#</a> 2. \u6838\u5FC3\u529F\u80FD</h2><h3 id="_2-1-\u5E94\u7528\u5FEB\u901F\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5E94\u7528\u5FEB\u901F\u542F\u52A8" aria-hidden="true">#</a> 2.1 \u5E94\u7528\u5FEB\u901F\u542F\u52A8</h3><p>\u5524\u9192\u540E\uFF0C\u76F4\u63A5\u641C\u7D22\u4F60\u8981\u7684\u8F6F\u4EF6\u5373\u53EF</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211027194637166.png" alt="image-20211027194637166"></p><h3 id="_2-2-\u672C\u5730\u641C\u7D22\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-2-\u672C\u5730\u641C\u7D22\u6587\u4EF6" aria-hidden="true">#</a> 2.2 \u672C\u5730\u641C\u7D22\u6587\u4EF6</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211027194750573.png" alt="image-20211027194750573"></p><ol><li><p>\u6309\u7A7A\u683C \u540E\u7D27\u8DDF\u6587\u4EF6\u540D\u5C31\u53EF\u4EE5\u5FEB\u901F\u641C\u7D22\u6587\u4EF6</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211027194903719.png" alt="image-20211027194903719"></p></li><li><p>\u6253\u5F00\u6587\u4EF6 open\uFF1A</p><p>open + \u7A7A\u683C+\u6587\u4EF6\u540D\u79F0</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211027194945335.png" alt="image-20211027194945335"></p></li><li><p>\u5728finder \u4E2D\u663E\u793A</p><p>find \u7A7A\u683C \u6587\u4EF6\u540D\u79F0</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211027195159561.png" alt="image-20211027195159561"></p></li><li><p>\u5185\u90E8\u6587\u4EF6 in</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>in \u7A7A\u683C \u6587\u4EF6\u5185\u5BB9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211027195433389.png" alt="image-20211027195433389"></p></li></ol><h3 id="_2-3-\u7CFB\u7EDF\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_2-3-\u7CFB\u7EDF\u529F\u80FD" aria-hidden="true">#</a> 2.3 \u7CFB\u7EDF\u529F\u80FD</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211027200437225.png" alt="image-20211027200437225"></p><h3 id="_2-4-\u7EC8\u7AEF" tabindex="-1"><a class="header-anchor" href="#_2-4-\u7EC8\u7AEF" aria-hidden="true">#</a> 2.4 \u7EC8\u7AEF</h3><p>Alfred \u9ED8\u8BA4\u7528\u7684\u662F Mac \u81EA\u5E26\u7684\u7EC8\u7AEF\uFF0C\u5982\u5982\u679C\u4F7F\u7528\u7684 iTerm \u53EF\u4EE5\u6839\u636E\u4E0B\u56FE\u8BBE\u7F6E\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211028164643029.png" alt="image-20211028164643029"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>on alfred_script(q)
    tell application &quot;iTerm&quot;
        set _length to count window
    if _length = 0 then
        create window with default profile
    end if
    set aa to (get miniaturized of current window)
    if aa then
        set miniaturized of current window to false
    end if
    set bb to (get visible of current window)
    if bb is false then
        set visible of current window to true
    end if
    set cc to frontmost
    if cc is false then
        activate
    end if
        (*if _length = 0 then*)
            set theResult to current tab of current window
        (*else
            set theResult to (create tab with default profile) of current window
        end if*)
        write session of theResult text q
end tell
end alfred_script
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837 Alfred \u5728\u6267\u884C\u547D\u4EE4\u662F\u5C31\u4F1A\u8C03\u7528 iTerm\u3002</p><h2 id="_3-\u5DE5\u4F5C\u6D41" tabindex="-1"><a class="header-anchor" href="#_3-\u5DE5\u4F5C\u6D41" aria-hidden="true">#</a> 3. \u5DE5\u4F5C\u6D41</h2><h3 id="_3-1-codevar" tabindex="-1"><a class="header-anchor" href="#_3-1-codevar" aria-hidden="true">#</a> 3.1 CodeVar</h3><blockquote><p>\u751F\u6210\u53D8\u91CF\u540D\uFF0C\u652F\u6301\u5927\u5C0F\u9A7C\u5CF0\u3001\u5E38\u91CF\u3001\u4E0B\u5212\u7EBF\uFF0C\u5F00\u53D1\u8005\u5FC5\u5907\u7684\u5DE5\u4F5C\u6D41</p></blockquote><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211027195753852.png" alt="image-20211027195753852"></p>`,22),p={href:"https://github.com/xudaolong/CodeVar",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"_3-2-ip-address",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-2-ip-address","aria-hidden":"true"},"#"),a(" 3.2 IP Address")],-1),h=e("blockquote",null,[e("p",null,"\u5FEB\u901F\u67E5\u8BE2\u672C\u5730ip\u548C\u516C\u7F51\u51FA\u53E3ip\uFF0C\u518D\u4E5F\u4E0D\u7528\u5230ipip.net\u4E0A\u53BB\u67E5\u8BE2\u4E86")],-1),u=e("p",null,[e("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211027195918998.png",alt:"image-20211027195918998"})],-1),g={href:"https://github.com/zenorocha/alfred-workflows/raw/master/ip-address/ip-address.alfredworkflow",target:"_blank",rel:"noopener noreferrer"},b=s(`<h2 id="_4-\u81EA\u5B9A\u4E49\u5DE5\u4F5C\u6D41" tabindex="-1"><a class="header-anchor" href="#_4-\u81EA\u5B9A\u4E49\u5DE5\u4F5C\u6D41" aria-hidden="true">#</a> 4. \u81EA\u5B9A\u4E49\u5DE5\u4F5C\u6D41</h2><h3 id="_4-1-\u7EC8\u7AEF\u8FD0\u884C\u4E00\u6BB5\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_4-1-\u7EC8\u7AEF\u8FD0\u884C\u4E00\u6BB5\u4EE3\u7801" aria-hidden="true">#</a> 4.1 \u7EC8\u7AEF\u8FD0\u884C\u4E00\u6BB5\u4EE3\u7801</h3><p>\u6211\u4EEC\u516C\u53F8\u7F51\u7EDC\u6BD4\u8F83\u5947\u8469\u3002\u5185\u5916\u7F51\u6B63\u5E38\u60C5\u51B5\u662F\u4E0D\u80FD\u540C\u65F6\u4E0A\u7684\uFF0C\u540E\u9762\u89E3\u51B3\u65B9\u6848\u662F\u52A0\u4E0Anetmask</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo route -n add -net 192.168.0.0 -netmask 255.255.0.0 10.8.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u8FD8\u4E0D\u80FD\u8BBE\u7F6E\u4E3A\u5168\u5C40\u7684\uFF0C\u90A3\u6837\u6211\u5728\u5BB6\u5C31\u4E0D\u80FD\u4E0A\u7F51\u4E86</p><p>\u6240\u4EE5\u6211\u6BCF\u5929\u7684\u6D41\u7A0B</p><ol><li><p>\u6253\u5F00\u7B14\u8BB0</p></li><li><p>\u590D\u5236\u547D\u4EE4</p></li><li><p>\u6253\u5F00\u7EC8\u7AEF</p></li><li><p>\u9ECF\u8D34\u547D\u4EE4</p></li></ol><p>\u5B9E\u5728\u662F\u9EBB\u70E6</p><h4 id="_4-1-1-\u7F16\u5199\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u7F16\u5199\u811A\u672C" aria-hidden="true">#</a> 4.1.1 \u7F16\u5199\u811A\u672C</h4><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211028165130836.png" alt="image-20211028165130836"></p><p>\u586B\u5199 Workflow \u7684\u540D\u79F0\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u56FE\u7247\u62D6\u5230\u53F3\u4FA7\u6846\u5185\uFF0C\u5373\u53EF\u5F53\u4F5C\u56FE\u6807\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211028165214358.png" alt="image-20211028165214358"></p><p>\u53CC\u51FB\u5DE6\u4FA7\u7684\u6A21\u5757\u8BBE\u7F6E\u89E6\u53D1\u5173\u952E\u8BCD\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211028165306093.png" alt="image-20211028165306093"></p><h4 id="_4-1-2-\u8BBE\u7F6E\u7EC8\u7AEF\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-1-2-\u8BBE\u7F6E\u7EC8\u7AEF\u547D\u4EE4" aria-hidden="true">#</a> 4.1.2 \u8BBE\u7F6E\u7EC8\u7AEF\u547D\u4EE4</h4><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211028165357352.png" alt="image-20211028165357352"></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211028165420447.png" alt="image-20211028165420447"></p><h4 id="_4-1-3-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_4-1-3-\u6D4B\u8BD5" aria-hidden="true">#</a> 4.1.3 \u6D4B\u8BD5</h4><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211028165502964.png" alt="image-20211028165502964"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,20),f={href:"https://suncle.me/2020/12/09/tool-recommendation-useful-alfred-workflow/",target:"_blank",rel:"noopener noreferrer"};function v(_,x){const i=l("ExternalLinkIcon");return r(),t("div",null,[o,e("p",null,[a("\u4E0B\u8F7D\u5730\u5740\uFF1A"),e("a",p,[a("https://github.com/xudaolong/CodeVar"),n(i)])]),m,h,u,e("p",null,[a("\u4E0B\u8F7D\u5730\u5740\uFF1A"),e("a",g,[a("https://github.com/zenorocha/alfred-workflows/raw/master/ip-address/ip-address.alfredworkflow"),n(i)])]),b,e("p",null,[e("a",f,[a("\u795E\u5175\u5229\u5668\u63A8\u8350\u2014\u2014\u4F60\u4E00\u5B9A\u4E0D\u80FD\u9519\u8FC7\u7684mac alfred\u5DE5\u4F5C\u6D41"),n(i)])])])}const k=d(c,[["render",v],["__file","mac-x-alfred.html.vue"]]);export{k as default};
