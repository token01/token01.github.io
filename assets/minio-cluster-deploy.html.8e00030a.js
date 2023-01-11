import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as n,b as a,d as e,f as i,r}from"./app.ec51a1ed.js";const d={},c=i('<h1 id="minio\u90E8\u7F72-minio\u5206\u5E03\u5F0F\u96C6\u7FA4\u642D\u5EFA\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#minio\u90E8\u7F72-minio\u5206\u5E03\u5F0F\u96C6\u7FA4\u642D\u5EFA\u90E8\u7F72" aria-hidden="true">#</a> Minio\u90E8\u7F72 - Minio\u5206\u5E03\u5F0F\u96C6\u7FA4\u642D\u5EFA\u90E8\u7F72</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5206\u5E03\u5F0F Minio \u53EF\u4EE5\u8BA9\u4F60\u5C06\u591A\u5757\u786C\u76D8\u6216\u8005\u591A\u53F0\u670D\u52A1\u5668\u7EC4\u6210\u4E00\u4E2A\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\u3002\u7531\u4E8E\u786C\u76D8\u5206\u5E03\u5728\u4E0D\u540C\u7684\u8282\u70B9\u4E0A\uFF0C\u5206\u5E03\u5F0F Minio \u907F\u514D\u4E86\u5355\u70B9\u6545\u969C\u3002MinioMinio\u5206\u5E03\u5F0F\u6A21\u5F0F\u53EF\u4EE5\u5E2E\u52A9\u4F60\u642D\u5EFA\u4E00\u4E2A\u9AD8\u53EF\u7528\u7684\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u5B58\u50A8\u8BBE\u5907\uFF0C\u800C\u4E0D\u7528\u8003\u8651\u5176\u771F\u5B9E\u7269\u7406\u4F4D\u7F6E\u3002</p><h2 id="_2-minio\u5206\u5E03\u5F0F\u90E8\u7F72\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_2-minio\u5206\u5E03\u5F0F\u90E8\u7F72\u7684\u4F18\u52BF" aria-hidden="true">#</a> 2. Minio\u5206\u5E03\u5F0F\u90E8\u7F72\u7684\u4F18\u52BF</h2><h3 id="_2-1-\u6570\u636E\u4FDD\u62A4" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6570\u636E\u4FDD\u62A4" aria-hidden="true">#</a> 2.1 \u6570\u636E\u4FDD\u62A4</h3><ul><li>\u5206\u5E03\u5F0F Minio \u91C7\u7528\u7EA0\u5220\u7801\u6765\u9632\u8303\u591A\u4E2A\u8282\u70B9\u5B95\u673A\u548C\u4F4D\u8870\u51CF\u3002</li><li>\u5206\u5E03\u5F0F Minio \u81F3\u5C11\u9700\u8981 4 \u4E2A\u8282\u70B9\uFF084\u53F0\u670D\u52A1\u5668\uFF09\uFF0C\u4F7F\u7528\u5206\u5E03\u5F0F Minio \u5C31 \u81EA\u52A8\u5F15\u5165\u4E86\u7EA0\u5220\u7801\u529F\u80FD\u3002</li><li>\u7EA0\u5220\u7801\u662F\u4E00\u79CD\u6062\u590D\u4E22\u5931\u548C\u635F\u574F\u6570\u636E\u7684\u6570\u5B66\u7B97\u6CD5\uFF0C Minio \u91C7\u7528 Reed-Solomon code \u5C06\u5BF9\u8C61\u62C6\u5206\u6210 N/2 \u6570\u636E\u548C N/2 \u5947\u5076\u6821\u9A8C\u5757\u3002 \u8FD9\u5C31\u610F\u5473\u7740\u5982\u679C\u662F 12 \u5757\u76D8\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u4F1A\u88AB\u5206\u6210 6 \u4E2A\u6570\u636E\u5757\u30016 \u4E2A\u5947\u5076\u6821\u9A8C\u5757\uFF0C\u4F60\u53EF\u4EE5\u4E22\u5931\u4EFB\u610F 6 \u5757\u76D8\uFF08\u4E0D\u7BA1\u5176\u662F\u5B58\u653E\u7684\u6570\u636E\u5757\u8FD8\u662F\u5947\u5076\u6821\u9A8C\u5757\uFF09\uFF0C\u4F60\u4ECD\u53EF\u4EE5\u4ECE\u5269\u4E0B\u7684\u76D8\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u6062\u590D\u3002</li><li>\u7EA0\u5220\u7801\u7684\u5DE5\u4F5C\u539F\u7406\u548C RAID \u6216\u8005\u590D\u5236\u4E0D\u540C\uFF0C\u50CF RAID6 \u53EF\u4EE5\u5728\u635F\u5931\u4E24\u5757\u76D8\u7684\u60C5\u51B5\u4E0B\u4E0D\u4E22\u6570\u636E\uFF0C\u800C Minio \u7EA0\u5220\u7801\u53EF\u4EE5\u5728\u4E22\u5931\u4E00\u534A\u7684\u76D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u4ECD\u53EF\u4EE5\u4FDD\u8BC1\u6570\u636E\u5B89\u5168\u3002 \u800C\u4E14 Minio \u7EA0\u5220\u7801\u662F\u4F5C\u7528\u5728\u5BF9\u8C61\u7EA7\u522B\uFF0C\u53EF\u4EE5\u4E00\u6B21\u6062\u590D\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u800CRAID \u662F\u4F5C\u7528\u5728\u5377\u7EA7\u522B\uFF0C\u6570\u636E\u6062\u590D\u65F6\u95F4\u5F88\u957F\u3002 Minio \u5BF9\u6BCF\u4E2A\u5BF9\u8C61\u5355\u72EC\u7F16\u7801\uFF0C\u5B58\u50A8\u670D\u52A1\u4E00\u7ECF\u90E8\u7F72\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u662F\u4E0D\u9700\u8981\u66F4\u6362\u786C\u76D8\u6216\u8005\u4FEE\u590D\u3002Minio \u7EA0\u5220\u7801\u7684\u8BBE\u8BA1\u76EE\u6807\u662F\u4E3A\u4E86\u6027\u80FD\u548C\u5C3D\u53EF\u80FD\u7684\u4F7F\u7528\u786C\u4EF6\u52A0\u901F\u3002</li><li>\u4F4D\u8870\u51CF\u53C8\u88AB\u79F0\u4E3A\u6570\u636E\u8150\u5316 Data Rot\u3001\u65E0\u58F0\u6570\u636E\u635F\u574F Silent Data Corruption \uFF0C\u662F\u76EE\u524D\u786C\u76D8\u6570\u636E\u7684\u4E00\u79CD\u4E25\u91CD\u6570\u636E\u4E22\u5931\u95EE\u9898\u3002\u786C\u76D8\u4E0A\u7684\u6570\u636E\u53EF\u80FD\u4F1A\u795E\u4E0D\u77E5\u9B3C\u4E0D\u89C9\u5C31\u635F\u574F\u4E86\uFF0C\u4E5F\u6CA1\u6709\u4EC0\u4E48\u9519\u8BEF\u65E5\u5FD7\u3002\u6B63\u6240\u8C13\u660E\u67AA\u6613\u8EB2\uFF0C\u6697\u7BAD\u96BE\u9632\uFF0C\u8FD9\u79CD\u80CC\u5730\u91CC\u72AF\u7684\u9519\u6BD4\u786C\u76D8\u76F4\u63A5\u6545\u969C\u8FD8\u5371\u9669\u3002 \u6240\u4EE5 Minio \u7EA0\u5220\u7801\u91C7\u7528\u4E86\u9AD8\u901F HighwayHash \u57FA\u4E8E\u54C8\u5E0C\u7684\u6821\u9A8C\u548C\u6765\u9632\u8303\u4F4D\u8870\u51CF\u3002</li></ul><h3 id="_2-2-\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#_2-2-\u9AD8\u53EF\u7528" aria-hidden="true">#</a> 2.2 \u9AD8\u53EF\u7528</h3><ul><li>\u5355\u673A Minio \u670D\u52A1\u5B58\u5728\u5355\u70B9\u6545\u969C\uFF0C\u76F8\u53CD\uFF0C\u5982\u679C\u662F\u4E00\u4E2A N \u8282\u70B9\u7684\u5206\u5E03\u5F0F Minio ,\u53EA\u8981\u6709 N/2 \u8282\u70B9\u5728\u7EBF\uFF0C\u4F60\u7684\u6570\u636E\u5C31\u662F\u5B89\u5168\u7684\u3002\u4E0D\u8FC7\u4F60\u9700\u8981\u81F3\u5C11\u6709 N/2+1 \u4E2A\u8282\u70B9\u6765\u521B\u5EFA\u65B0\u7684\u5BF9\u8C61\u3002</li><li>\u4F8B\u5982\uFF0C\u4E00\u4E2A 8 \u8282\u70B9\u7684 Minio \u96C6\u7FA4\uFF0C\u6BCF\u4E2A\u8282\u70B9\u4E00\u5757\u76D8\uFF0C\u5C31\u7B97 4 \u4E2A\u8282\u70B9\u5B95\u673A\uFF0C\u8FD9\u4E2A\u96C6\u7FA4\u4ECD\u7136\u662F\u53EF\u8BFB\u7684\uFF0C\u4E0D\u8FC7\u4F60\u9700\u8981 5 \u4E2A\u8282\u70B9\u624D\u80FD\u5199\u6570\u636E\u3002</li></ul><h3 id="_2-3-\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#_2-3-\u9650\u5236" aria-hidden="true">#</a> 2.3 \u9650\u5236</h3><ul><li>\u5206\u5E03\u5F0F Minio \u5355\u79DF\u6237\u5B58\u5728\u6700\u5C11 4 \u4E2A\u76D8\u6700\u591A 16 \u4E2A\u76D8\u7684\u9650\u5236\uFF08\u53D7\u9650\u4E8E\u7EA0\u5220\u7801\uFF09\u3002\u8FD9\u79CD\u9650\u5236\u786E\u4FDD\u4E86 Minio \u7684\u7B80\u6D01\uFF0C\u540C\u65F6\u4ECD\u62E5\u6709\u4F38\u7F29\u6027\u3002\u5982\u679C\u4F60\u9700\u8981\u642D\u5EFA\u4E00\u4E2A\u591A\u79DF\u6237\u73AF\u5883\uFF0C\u4F60\u53EF\u4EE5\u8F7B\u677E\u7684\u4F7F\u7528\u7F16\u6392\u5DE5\u5177\uFF08Kubernetes\uFF09\u6765\u7BA1\u7406\u591A\u4E2AMinio\u5B9E\u4F8B\u3002</li><li>\u6CE8\u610F\uFF0C\u53EA\u8981\u9075\u5B88\u5206\u5E03\u5F0F Minio \u7684\u9650\u5236\uFF0C\u4F60\u53EF\u4EE5\u7EC4\u5408\u4E0D\u540C\u7684\u8282\u70B9\u548C\u6BCF\u4E2A\u8282\u70B9\u51E0\u5757\u76D8\u3002\u6BD4\u5982\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 2 \u4E2A\u8282\u70B9\uFF0C\u6BCF\u4E2A\u8282\u70B9 4 \u5757\u76D8\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 4 \u4E2A\u8282\u70B9\uFF0C\u6BCF\u4E2A\u8282\u70B9\u4E24\u5757\u76D8\uFF0C\u8BF8\u5982\u6B64\u7C7B\u3002</li></ul><h3 id="_2-4-\u4E00\u81F4\u6027" tabindex="-1"><a class="header-anchor" href="#_2-4-\u4E00\u81F4\u6027" aria-hidden="true">#</a> 2.4 \u4E00\u81F4\u6027</h3><ul><li>Minio \u5728\u5206\u5E03\u5F0F\u548C\u5355\u673A\u6A21\u5F0F\u4E0B\uFF0C\u6240\u6709\u8BFB\u5199\u64CD\u4F5C\u90FD\u4E25\u683C\u9075\u5B88 read-after-write \u4E00\u81F4\u6027\u6A21\u578B\u3002</li></ul><h2 id="minio\u5206\u5E03\u5F0F\u96C6\u7FA4\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#minio\u5206\u5E03\u5F0F\u96C6\u7FA4\u642D\u5EFA" aria-hidden="true">#</a> Minio\u5206\u5E03\u5F0F\u96C6\u7FA4\u642D\u5EFA</h2><h3 id="_3-1-\u73AF\u5883\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_3-1-\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> 3.1 \u73AF\u5883\u51C6\u5907</h3><table><thead><tr><th>\u8282\u70B9</th><th>\u76EE\u5F55</th></tr></thead><tbody><tr><td>192.168.1.1</td><td>/data/minio/data</td></tr><tr><td>192.168.1.2</td><td>/data/minio/data</td></tr><tr><td>192.168.1.3</td><td>/data/minio/data</td></tr><tr><td>192.168.1.4</td><td>/data/minio/data</td></tr></tbody></table>',15),p={href:"https://dl.min.io/server/minio/release/linux-amd64/minio",target:"_blank",rel:"noopener noreferrer"},u=i(`<h3 id="_3-2-\u76EE\u5F55\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#_3-2-\u76EE\u5F55\u521B\u5EFA" aria-hidden="true">#</a> 3.2 \u76EE\u5F55\u521B\u5EFA</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/minio/<span class="token punctuation">{</span>run,data<span class="token punctuation">}</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>run\uFF1A\u542F\u52A8\u811A\u672C\u53CA\u4E8C\u8FDB\u5236\u6587\u4EF6\u76EE\u5F55\uFF1B data\uFF1A\u6570\u636E\u5B58\u50A8\u76EE\u5F55\uFF1B /etc/minio\uFF1A\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\uFF1B</p><h3 id="_3-3-\u96C6\u7FA4\u542F\u52A8\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-3-\u96C6\u7FA4\u542F\u52A8\u6587\u4EF6" aria-hidden="true">#</a> 3.3 \u96C6\u7FA4\u542F\u52A8\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vim</span> /data/minio/run/run.sh
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MINIO_ACCESS_KEY</span><span class="token operator">=</span>Minio
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MINIO_SECRET_KEY</span><span class="token operator">=</span>Test1234<span class="token operator">!</span>
 
/data/minio/run/minio server --config-dir /etc/minio <span class="token punctuation">\\</span>
http://192.168.99.1/data/minio/data <span class="token punctuation">\\</span>
http://192.168.99.2/data/minio/data <span class="token punctuation">\\</span>
http://192.168.99.3/data/minio/data <span class="token punctuation">\\</span>
http://192.168.99.4/data/minio/data <span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>MINIO_ACCESS_KEY</code>\uFF1A\u7528\u6237\u540D\uFF0C\u957F\u5EA6\u6700\u5C0F\u662F5\u4E2A\u5B57\u7B26\uFF1B</li><li><code>MINIO_SECRET_KEY</code>\uFF1A\u5BC6\u7801\uFF0C\u5BC6\u7801\u4E0D\u80FD\u8BBE\u7F6E\u8FC7\u4E8E\u7B80\u5355\uFF0C\u4E0D\u7136minio\u4F1A\u542F\u52A8\u5931\u8D25\uFF0C\u957F\u5EA6\u6700\u5C0F\u662F8\u4E2A\u5B57\u7B26\uFF1B</li><li><code>\u2013config-dir</code>\uFF1A\u6307\u5B9A\u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\uFF1B</li></ul><h3 id="_3-4-\u914D\u7F6E\u4E3A\u7CFB\u7EDF\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-4-\u914D\u7F6E\u4E3A\u7CFB\u7EDF\u670D\u52A1" aria-hidden="true">#</a> 3.4 \u914D\u7F6E\u4E3A\u7CFB\u7EDF\u670D\u52A1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vim</span> /usr/lib/systemd/system/minio.service
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Minio <span class="token function">service</span>
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://docs.minio.io/
 
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/data/minio/run/
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/data/minio/run/run.sh
 
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">5</span>
 
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li><strong>\u5C06minio\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E0A\u4F20\u5230<code>/data/minio/run</code>\u76EE\u5F55\uFF01</strong></li><li><strong>\u7ED9\u6240\u6709\u6D89\u53CA\u5230\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u6DFB\u52A0\u6743\u9650\uFF01</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">chmod</span> +x /data/minio/run/minio <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x /data/minio/run/run.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-5-\u542F\u52A8\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_3-5-\u542F\u52A8\u96C6\u7FA4" aria-hidden="true">#</a> 3.5 \u542F\u52A8\u96C6\u7FA4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ systemctl daemon-reload
$ systemctl <span class="token builtin class-name">enable</span> minio <span class="token operator">&amp;&amp;</span> systemctl start minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-\u4EE3\u7406\u96C6\u7FA4-nginx\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#_3-6-\u4EE3\u7406\u96C6\u7FA4-nginx\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> 3.6 \u4EE3\u7406\u96C6\u7FA4\uFF08nginx\u8D1F\u8F7D\u5747\u8861\uFF09</h3><p>\u751F\u4EA7\u73AF\u5883\u9700\u8981\u4F7F\u7528Nginx\u5C06\u96C6\u7FA4\u5730\u5740\u8FDB\u884C\u4EE3\u7406\uFF0C\u5BF9\u5916\u7EDF\u4E00\u5165\u53E3\uFF01</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> minio</span><span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.99.1:9000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.99.2:9000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.99.3:9000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.99.4:9000</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">9000</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> minio</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">proxy_pass</span> http://minio</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">1000m</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-\u8BBF\u95EE\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-7-\u8BBF\u95EE\u6D4B\u8BD5" aria-hidden="true">#</a> 3.7 \u8BBF\u95EE\u6D4B\u8BD5</h3><p>\u6D4F\u89C8\u5668\u8BBF\u95EEminio\u96C6\u7FA4\u4EE3\u7406\u5730\u5740+9000\u7AEF\u53E3\uFF0C\u7528\u6237\u540D\u5BC6\u7801\u4E3A\u4E0A\u6587\u4E2D\u542F\u52A8\u6587\u4EF6run.sh\u4E2D\u6211\u4EEC\u8BBE\u7F6E\u7684\uFF01</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,19),h={href:"https://www.cnblogs.com/lvzhenjiang/p/14943939.html",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const s=r("ExternalLinkIcon");return o(),l("div",null,[c,n("p",null,[a("\u4ECE"),n("a",p,[a("\u5B98\u7F51"),e(s)]),a("\u83B7\u53D6Minio\uFF01")]),u,n("p",null,[n("a",h,[a("Minio\u5206\u5E03\u5F0F\u96C6\u7FA4\u642D\u5EFA\u90E8\u7F72"),e(s)])])])}const g=t(d,[["render",m],["__file","minio-cluster-deploy.html.vue"]]);export{g as default};
