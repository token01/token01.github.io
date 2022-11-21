import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as l,a as e,b as n,d as s,e as r,r as o}from"./app.9fe353dd.js";const d={},c=e("h2",{id:"jupyter-notebook",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jupyter-notebook","aria-hidden":"true"},"#"),n(" Jupyter Notebook")],-1),p={href:"https://jupyter.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/jupyterhub/jupyterhub",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/twosigma/beakerx",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zeppelin.apache.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/Netflix/metaflow",target:"_blank",rel:"noopener noreferrer"},h=r(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> notebook

jupyter notebook <span class="token parameter variable">--port</span> <span class="token number">8888</span> <span class="token parameter variable">--ip</span> <span class="token number">192.168</span>.0.100

jupyter notebook <span class="token parameter variable">--help</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用虚拟环境</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
pip <span class="token function">install</span> virtualenv
<span class="token comment"># 创建虚拟环境</span>
virtualenv --no-site-packages my_venv
<span class="token comment"># 进入虚拟环境</span>
<span class="token builtin class-name">source</span> my_venv/bin/activate

pip <span class="token function">install</span> ipykernel
<span class="token comment"># 将 Virtualenv 加入IPykernel中</span>
<span class="token comment"># ipython kernel install --user --name=my_venv</span>
python <span class="token parameter variable">-m</span> ipykernel <span class="token function">install</span> <span class="token parameter variable">--user</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>my_venv

<span class="token comment"># 启动jupyter</span>
jupyter notebook

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>conda create -n name python=3.6
conda info --envs
conda activate name
conda deactivate
conda remove -n name --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pip源" tabindex="-1"><a class="header-anchor" href="#pip源" aria-hidden="true">#</a> pip源</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span> <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple --trusted-host pypi.tuna.tsinghua.edu.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install jupyter_contrib_nbextensions
jupyter contrib nbextension install --user
pip install jupyter_nbextensions_configurator
jupyter nbextensions_configurator enable --user
重启 Jupyter Notebook， 便可以看到nbextension
jupyter nbextension enable execute_time/Exec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%magic #显示所有魔术命令的详细文档
%prun statement #通过 cProfile 执行对 statement 的逐行性能分析
%time statement #测试 statement 的执行时间
%timeit statement #多次测试 statement 的执行时间并计算平均值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function k(_,g){const a=o("ExternalLinkIcon");return t(),l("div",null,[c,e("ul",null,[e("li",null,[e("a",p,[n("jupyter notebook"),s(a)]),e("ul",null,[e("li",null,[e("a",u,[n("JupyterHub"),s(a)])]),e("li",null,[e("a",v,[n("Beaker Extensions"),s(a)])])])]),e("li",null,[e("a",m,[n("zeppelin notebook"),s(a)])]),e("li",null,[e("a",b,[n("metaflow"),s(a)])])]),h])}const y=i(d,[["render",k],["__file","JupyterNotebook.html.vue"]]);export{y as default};
