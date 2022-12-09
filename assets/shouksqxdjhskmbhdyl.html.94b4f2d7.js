import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as s,b as n,d as e,e as t,r as l}from"./app.c2a49a29.js";const r={},c=t('<p>Hello，我是musk呀！</p><p>继续跟大家分享一下支付相关的话题：<strong>聚合收款码的支付原理</strong>，这也是我这大半年来一直在做的项目。</p><p>微信/支付宝收款码大家应该不会陌生，线下小微商户收款大多使用这个，就比如下图。</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084835878-1900620469.jpg" alt="" loading="lazy"></p><p>这种收款方式很方便，微信、支付宝后台申请开通，然后还可以免费申请相关物料。</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084836141-145624609.jpg" alt="" loading="lazy"></p><p>不过这种方式用户体验其实不是很好，之前有好几次拿出支付宝，却扫了微信支付码。</p><p>另外，这种个人的收款码通常还有单日收款的上限，比如支付宝单日上限 500元。</p><p>有了需求，自然会有聪明人人想到解决方案，于是有了聚合收款码产品解决方案,如下图。</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084836293-1865437191.png" alt="" loading="lazy"></p><p>一个收款码，支持多种客户端,主流是微信、支付宝，现在常见还会支持银联，QQ 等。</p><p>用户选择任一支持的客户端扫码，都能完成支付，再也不用纠结扫错码的尴尬。</p><p>有没有很神奇？其实底层原理很简单，看完你就明白了，下面就让musk带你解密聚合收款码的底层原理。</p><h2 id="微信相关支付方式" tabindex="-1"><a class="header-anchor" href="#微信相关支付方式" aria-hidden="true">#</a> 微信相关支付方式</h2><p>聚合收款码底层支付其实还是离不开微信、支付宝支持的支付方式，所以我们先从微信支付宝渠道出发，简单介绍这个过程将会使用的支付方式。</p>',15),g={href:"https://pay.weixin.qq.com/wiki/doc/api/index.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084836565-788134085.png" alt="" loading="lazy"></p><p>其中付款码支付在前两篇文章完整介绍过，这里不再介绍，感兴趣的小伙伴可以回头去看看这两篇文章。</p><p><img src="https://files.mdnice.com/user/3903/44920c8c-bcdc-472e-b26d-7d35ef98ac73.png" alt="" loading="lazy"></p><p>首先我们介绍一下<strong>微信Native支付</strong>，引用微信官网的解释：</p><blockquote><p>Native支付是商户系统按微信支付协议生成支付二维码，用户再用微信“扫一扫”完成支付的模式。该模式适用于PC网站支付、实体店单品或订单支付、媒体广告支付等场景。</p></blockquote><p>简单来讲就是商户后台调用微信支付接口，微信返回预支付交易的链接，格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>weixin://wxpay/bizpayurl?sr=123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后商户将其转为二维码，提供给客户使用微信扫码支付。</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084836698-1766666089.jpg" alt="" loading="lazy"></p><p>这种支付方式可以应用在 PC 网站购物场景，比如说英雄联盟官网购买相关游戏道具：</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084836847-1798138956.jpg" alt="" loading="lazy"></p><p>既然<strong>微信Native支付</strong>最后可以变成二维码完成支付，那么聚合收款码是不是可以采用<strong>微信Native支付</strong>这种支付方式呢？</p><p>答案是可以，但是不适合，产品体验不太好。</p><p>最好使用微信支付另外一种支付产品<strong>JSAPI 支付</strong>。</p><p>至于原因，不要急，接下去看就会明白。</p><p><strong>JSAPI 支付</strong>，又被称为公众号支付，名词解释引用一下官网介绍：</p><blockquote><p>JSAPI 支付是用户在微信中打开商户的 H5 页面，商户在 H5 页面通过调用微信支付提供的 JSAPI 接口调起微信支付模块完成支付。</p></blockquote><p>具体业务流程如下：</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084837003-1217243690.jpg" alt="" loading="lazy"></p><p>日常生活中，很多应用场景使用这种支付方式，比如说：极客时间公众号上购买课程</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084837175-1741244885.jpg" alt="" loading="lazy"></p><p>这种支付方式相对于<strong>微信Native支付</strong>，比较麻烦，还需要使用微信公众号登录授权功能，以此获取用户的 openid。</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084837323-1269436908.jpg" alt="" loading="lazy"></p><p>另外当我们调用<strong>微信 JSAPI</strong> 后台接口，拿到微信返回的相关参数之后，我们还需要使用<strong>微信的 JSSDK</strong>，这样才能唤起微信支付。</p><h2 id="聚合收款码核心原理" tabindex="-1"><a class="header-anchor" href="#聚合收款码核心原理" aria-hidden="true">#</a> 聚合收款码核心原理</h2><p>了解完聚合支付的所需要的底层支付方式，下面我们来了解一下聚合收款码的核心原理。</p><p>聚合收款码业务流程如下：</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084837592-1240017064.jpg" alt="" loading="lazy"></p><p>第一步，用户使用微信/支付宝 APP 扫码之后，将会打开一个收银台页面。</p><p>这个收银台页面可以自适应，不同 APP 显示不同的样式，比如支付宝打开收银台显示支付宝的 logo，微信打开就会显示微信的 logo。</p><p>第二步，用户在收银台输入金额，点击支付之后将会唤起 APP 的支付弹窗。</p><p>好了，观察这个流程，我们可以发现扫码之后，后台应用需要识别出当前 APP 到底是微信还是支付宝。</p><p>那如何判断当前使用的 APP 呢？</p><p>其实这个原理很简单，在支付宝/微信打开一个链接，实际将会使用内置的浏览器发起了 HTTP 请求，而 HTTP 的请求头将会携带 <strong>User-Agent(UA)</strong>，用来标识用户代理软件的应用类型、操作系统、软件开发商以及版本号。</p><p>微信/支付宝中浏览器发起 HTTP 请求，携带的 <strong>User-Agent</strong> 分别为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>支付宝
UCBrowser/11.5.0.939 UCBS/2.10.1.6 Mobile Safari/537.36 AliApp(AP/10.0.15.051805) AlipayClient/10.0.15.051805 Language/zh-Hans

微信
MQQBrowser/6.2 TBS 043220 Safari/537.36 MicroMessenger/6.5.8.1060 NetType/4G Language/zh_CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要注意了，不同型号的手机，不同的版本 APP，<strong>User-Agent</strong> 不一定会一样，其实我们只需要判断是否包含某些关键字即可，比如说只要 <strong>User-Agent</strong> 包含 <strong>MicroMessenger</strong> 就是微信，包含 <strong>AlipayClient</strong> 就是支付宝。</p><p>下面使用 Java 代码为例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> userAgent <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;user-agent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>userAgent<span class="token punctuation">,</span> <span class="token string">&quot;AlipayClient&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 支付宝</span>

<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>userAgent<span class="token punctuation">,</span> <span class="token string">&quot;MicroMessenger&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 微信</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个问题解决之后，后面的流程就很简单了，只要调用微信/支付宝的 <strong>JSAPI 支付</strong>接口，拿到相关参数之后，唤起支付。</p><blockquote><p>准确来讲，支付宝那边 JSAPI 支付官方名称为支付宝生活号支付。</p></blockquote><p>这里解释一下上面的问题，为什么聚合收款码不能使用<strong>微信Native支付</strong>呢？</p><p>主要是因为<strong>微信Native支付</strong>接口返回是一个微信自定义 schema 协议，只能通过微信扫码打开，唤起支付。</p><p>如果聚合收款码使用<strong>微信Native支付</strong>，收银台提交金额之后，需要将微信返回交易链接转成二维显示在页面，然后用户使用微信内置识别二维码功能唤起支付。</p><p>这样一来比较影响产品体验，降低支付的成功率。</p><p>支付宝也有类似<strong>微信Native支付</strong>支付接口-<strong>当面付扫码支付</strong>，成功调用之后也会返回支付链接。</p><p>那这里可以给大家提个小问题，聚合收款码是否可以使用<strong>支付宝当面付扫码支付</strong>接口那？</p><p>答案是可以的，而且体验比<strong>微信Native支付</strong>好。</p><p>这是因为支付宝返回链接是一个标准 HTTP 连接，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://qr.alipay.com/xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个链接只要在支付宝内中打开，就可以唤起支付。</p><p>所以如果聚合收款码使用<strong>支付宝当面付扫码支付</strong>接口，收银台金额提交之后，当拿到支付宝返回的支付链接，应用程序内只要使用 HTTP 302 跳转到支付链接，就可以唤起支付宝支付。</p><blockquote><p>画外音：之前我也一直以为支付宝跟微信一样，不能使用。</p></blockquote><p>那这样实际上聚合收款码底层使用支付方式就有了两种方案：</p><ul><li>微信 JSAPI 支付/支付宝生活支付</li><li>微信 JSAPI 支付/支付宝面付扫码支付</li></ul><p>那如何选择那？</p><p>个人建议使用第一种方案，微信、支付宝都采用 JSAPI 支付。</p><p>主要是因为只要 302 跳转唤起支付宝支付，就会关闭我们收银台页面，这样一来整个微信支付与支付宝支付流程就不太一样了</p><p>其次，当用户支付成功之后，JSAPI 支付还可以跳转到一个成功页面，这个页面我们可以支付结果展示，或者骚一点，还可以挂些广告，或者引流其他公号上。</p><p>但是如果使用付宝面付扫码支付，支付完成之后，页面就被关闭了，就没办法完成支付页面跳转。</p><h2 id="聚合收款码核心流程" tabindex="-1"><a class="header-anchor" href="#聚合收款码核心流程" aria-hidden="true">#</a> 聚合收款码核心流程</h2><p>介绍完原理，下面主要介绍一下市面上主流聚合收款码业务流程，其实聚合收款码可以分为三类：</p><ul><li>静态聚合收款码</li><li>动态聚合收款码</li><li>银联静态二维码</li></ul><p>静态聚合收款码就类似如下这种，需要用户主动输入金额，可以无限次使用。</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084837726-948904977.jpg" alt="" loading="lazy"></p><p>而动态聚合收款码是只能使用一次，并且由商家指定金额，用户只要扫码就可以支付指定金额。</p><p>这种应用场景比如 B 站购买大会员：</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084837895-1482620524.jpg" alt="" loading="lazy"></p><p>银联静态二维码其实功能上与静态聚合收款码差不多，但是它多了支持银联支付的功能。</p><p>除了这个以外，最主要的区别是银联静态二维码是银联发码，背后对应的地址是银联的地址，类似如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//qr.95516.com/00010000/xxx</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="静态聚合收款码流程" tabindex="-1"><a class="header-anchor" href="#静态聚合收款码流程" aria-hidden="true">#</a> 静态聚合收款码流程</h3><p>静态聚合收款码主要支付流程主要可以分为二步，第一步为登录授权。</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084838095-1989649474.jpg" alt="" loading="lazy"></p><p>这里的登陆授权一般使用微信、支付宝匿名登录授权功能，这样这个过程普通用户其实是无感知的。</p><blockquote><p>画外音：如果是程序员的话，可能会感受到这个过程经过了多次跳转。</p></blockquote><p>第二步，用户在收银台输入金额之后，应用内部将会创建相应的订单，然后再调用微信/支付宝的 JSAPI 支付。</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084838224-844322765.jpg" alt="聚合收款码-JSAPI支付" loading="lazy"></p><p>另外，如果支付宝采用面付扫码支付这种支付方式的话，那么其实不需要第一步登录授权了，可以直接跳到收银台发起支付。</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084838382-1257375540.jpg" alt="聚合收款码-支付宝 native 支付" loading="lazy"></p><h3 id="动态聚合收款码流程" tabindex="-1"><a class="header-anchor" href="#动态聚合收款码流程" aria-hidden="true">#</a> 动态聚合收款码流程</h3><p>动态聚合收款码其实与静态收款码总体比较类似，只不过创建动态码内部已经创建了相应的订单，后续流程与静态聚合收款码差不多。</p><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084838535-1889083978.jpg" alt="聚合收款码-动态码内部创单" loading="lazy"></p><h3 id="银联静态二维码流程" tabindex="-1"><a class="header-anchor" href="#银联静态二维码流程" aria-hidden="true">#</a> 银联静态二维码流程</h3><p>如果你使用微信、支付宝扫码打开银联二维码，将会打开我们自己收银台页面，后续流程其实跟静态聚合收款码一模一样的。</p><p>但是如果你使用支付银联支付的 APP 扫码，比如说各大银行的手机 APP，美团，京东等，就会在这些 APP 内各自支付页面，然后完成支付。</p><p>我们银联二维码的功能，将会在银联后台报备一个跳转地址，比如说</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://www.heihei.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当用户使用微信/支付宝访问银联二维码，银联后台自己识别访问请求 <strong>User-Agent</strong> ,然后后台根据规则拼接重定向地址。</p><p>拼接规则如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//www.heihei.com?qrCode=URLENCODE(https://qr.95516.com/00010000/xxx)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/other/1419561/202009/1419561-20200928084838683-1907722064.jpg" alt="聚合收款码-银联二维码扫码流程" loading="lazy"></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>聚合收款码统一了用户支付流程，提高商家的收款效率。</p><p>另外聚合收款码其实还可以跟商家后台一些 ERP 等软件打通，这样还提高的商家生产效率。</p><p><em>不得不说，第一个设计出聚合收款码的的产品，真是个鬼才~</em></p><p>聚合收款码，背后原理一点也不难，根据用访问请求的 <strong>User-Agent</strong> ，以此判断用户当前扫码使用的客户端类型。</p><p>然后调用微信/支付宝匿名登录获取用户 id，最后用户输入金额之后，调用微信/支付宝完成支付。</p>`,98),u={href:"https://www.cnblogs.com/goodAndyxublog/p/13743027.html",target:"_blank",rel:"noopener noreferrer"};function m(h,v){const a=l("ExternalLinkIcon");return o(),i("div",null,[c,s("p",null,[n("打开"),s("a",g,[n("微信支付官网"),e(a)]),n("，可以看到很多支付方式。")]),d,s("blockquote",null,[s("p",null,[n("参考链接："),s("a",u,[n("https://www.cnblogs.com/goodAndyxublog/p/13743027.html"),e(a)]),n("，整理：musk")])])])}const x=p(r,[["render",m],["__file","shouksqxdjhskmbhdyl.html.vue"]]);export{x as default};
