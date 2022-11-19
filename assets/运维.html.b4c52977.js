import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.1ed5bacd.js";const i={},t=e(`<h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2><p>系统查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看PCI总线信息</span>
lspci
<span class="token comment"># 硬件组件</span>
lshw <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
<span class="token comment"># 显卡GPU</span>
nvidia-smi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监控" tabindex="-1"><a class="header-anchor" href="#监控" aria-hidden="true">#</a> 监控</h2><p>DataDog、Sysdig、Prometheus</p><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location ^~/user/ <span class="token punctuation">{</span>
    proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
    proxy_set_header  X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header  X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
    proxy_set_header X-NginX-Proxy <span class="token boolean">true</span><span class="token punctuation">;</span>

    proxy_pass http://user/<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location ^~/user/ <span class="token punctuation">{</span>
  proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
  proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
  proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
  proxy_set_header X-NginX-Proxy <span class="token boolean">true</span><span class="token punctuation">;</span>

  rewrite ^/user/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /<span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
  proxy_pass http://user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[t];function o(r,c){return s(),a("div",null,l)}const u=n(i,[["render",o],["__file","运维.html.vue"]]);export{u as default};
