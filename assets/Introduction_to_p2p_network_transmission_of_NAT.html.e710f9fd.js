import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as e,b as a,d as n,e as h,r as s}from"./app.c2a49a29.js";const d={},c={href:"https://www.jianshu.com/p/f71707892eb2",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"nat简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nat简介","aria-hidden":"true"},"#"),a(" NAT简介")],-1),l=e("p",null,"NAT（Network Address Translation，网络地址转换），也叫做网络掩蔽或者IP掩蔽。NAT是一种网络地址翻译技术，主要是将内部的私有IP地址（private IP）转换成可以在公网使用的公网IP（public IP）",-1),_=e("h2",{id:"nat类型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nat类型","aria-hidden":"true"},"#"),a(" NAT类型")],-1),I={href:"https://info.support.huawei.com/info-finder/encyclopedia/zh/STUN.html",target:"_blank",rel:"noopener noreferrer"},P=h('<p><img src="https://tva1.sinaimg.cn/large/008vxvgGgy1h74z5hxjujj311y0q042f.jpg" alt="image-20221014180441215" loading="lazy"></p><h3 id="完全锥型nat" tabindex="-1"><a class="header-anchor" href="#完全锥型nat" aria-hidden="true">#</a> 完全锥型NAT</h3><p>所有从同一个私网IP地址和端口（IP1:Port1）发送过来的请求都会被映射成同一个公网IP地址和端口（IP:Port）。并且，任何外部主机通过向映射的公网IP地址和端口发送报文，都可以实现和内部主机进行通信。</p><p>这是一种比较宽松的策略，只要建立了私网IP地址和端口与公网IP地址和端口的映射关系，所有的Internet上的主机都可以访问该NAT之后的主机。</p><h3 id="限制锥型nat" tabindex="-1"><a class="header-anchor" href="#限制锥型nat" aria-hidden="true">#</a> 限制锥型NAT</h3><p>所有从同一个私网IP地址和端口（IP1:Port1）发送过来的请求都会被映射成同一个公网IP和端口号（IP:Port）。与完全锥型NAT不同的是，当且仅当内部主机之前已经向公网主机发送过报文，此时公网主机才能向私网主机发送报文。</p><h3 id="端口限制锥型nat" tabindex="-1"><a class="header-anchor" href="#端口限制锥型nat" aria-hidden="true">#</a> 端口限制锥型NAT</h3><p>与限制锥型NAT很相似，只不过它包括端口号。也就是说，一台公网主机（IP2:Port2）想给私网主机发送报文，必须是这台私网主机先前已经给这个IP地址和端口发送过报文。</p><h3 id="对称nat" tabindex="-1"><a class="header-anchor" href="#对称nat" aria-hidden="true">#</a> 对称NAT</h3><p>所有从同一个私网IP地址和端口发送到一个特定的目的IP地址和端口的请求，都会被映射到同一个IP地址和端口。如果同一台主机使用相同的源地址和端口号发送报文，但是发往不同的目的地，NAT将会使用不同的映射。此外，只有收到数据的公网主机才可以反过来向私网主机发送报文。</p><p>这和端口限制锥型NAT不同，端口限制锥型NAT是所有请求映射到相同的公网IP地址和端口，而对称NAT是不同的请求有不同的映射。</p><h2 id="nat工作原理" tabindex="-1"><a class="header-anchor" href="#nat工作原理" aria-hidden="true">#</a> NAT工作原理</h2>',12);function f(N,u){const t=s("ExternalLinkIcon");return o(),i("div",null,[e("blockquote",null,[e("p",null,[e("a",c,[a("https://www.jianshu.com/p/f71707892eb2"),n(t)])])]),p,l,_,e("p",null,[a("在"),e("a",I,[a("STUN"),n(t)]),a("标准中，根据私网IP地址和端口到NAT出口的公网IP地址和端口的映射方式，把NAT分为如下四种类型，详见下图。")]),P])}const m=r(d,[["render",f],["__file","Introduction_to_p2p_network_transmission_of_NAT.html.vue"]]);export{m as default};
