import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,b as s,d as o,e as c,r as l}from"./app.1ee57811.js";const i={},u=c(`<p>何谓转换流？为何由来？让我们暂时带着这两个问题来了解了解字符编码和字符集！</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/io/char-byte-86699b2c-4f24-492a-ba68-62c3be0f86bc.png" alt="" loading="lazy"></p><h2 id="字符编码与解码" tabindex="-1"><a class="header-anchor" href="#字符编码与解码" aria-hidden="true">#</a> 字符编码与解码</h2><p>众所周知，计算机中储存的信息都是用二进制数表示的，而我们在屏幕上看到的数字、英文、标点符号、汉字等字符是二进制数转换之后的结果。</p><p>按照某种规则，将字符存储到计算机中，称为<strong>编码</strong> 。反之，将存储在计算机中的二进制数按照某种规则解析显示出来，称为<strong>解码</strong> 。比如说，按照<code>A</code>规则存储，同样按照<code>A</code>规则解析，那么就能显示正确的文本符号。反之，按照<code>A</code>规则存储，再按照<code>B</code>规则解析，就会导致乱码现象。</p><p>简单一点的说就是：</p><blockquote><p>编码:字符(能看懂的)--字节(看不懂的)</p><p>解码:字节(看不懂的)--&gt;字符(能看懂的)</p></blockquote><p>代码解释则是</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes<span class="token punctuation">,</span> <span class="token class-name">String</span> charsetName<span class="token punctuation">)</span><span class="token operator">:</span>通过指定的字符集解码字节数组
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">String</span> charsetName<span class="token punctuation">)</span><span class="token operator">:</span>使用指定的字符集合把字符串编码为字节数组

编码<span class="token operator">:</span>把看得懂的变成看不懂的
<span class="token class-name">String</span> <span class="token operator">--</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

解码<span class="token operator">:</span>把看不懂的变成看得懂的
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">--</span> <span class="token class-name">String</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>字符编码</strong> <code>Character Encoding</code>: 就是一套自然语言的字符与二进制数之间的对应规则。</li></ul><p>而<strong>编码表</strong>则是生活中文字和计算机中二进制的对应规则</p><h2 id="字符集" tabindex="-1"><a class="header-anchor" href="#字符集" aria-hidden="true">#</a> 字符集</h2><ul><li><strong>字符集</strong> <code>Charset</code>：也叫<strong>编码表</strong>。是一个系统支持的所有字符的集合，包括各国家文字、标点符号、图形符号、数字等。</li></ul><p>计算机要准确的存储和识别各种字符集符号，需要进行字符编码，一套字符集必然至少有一套字符编码。常见的字符集有<code>ASCII</code>字符集、<code>GBK</code>字符集、<code>Unicode</code>字符集等。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/io/char-byte-eafc0ac8-ce5b-4183-9a7e-9498e23b2d4e.png" alt="" loading="lazy"></p><p>可见，当指定了<strong>编码</strong>，它所对应的<strong>字符集</strong>自然就指定了，所以<strong>编码</strong>才是我们最终要关心的。</p><ul><li><strong>ASCII字符集</strong> ：</li><li>ASCII（American Standard Code for Information Interchange，美国信息交换标准代码）是基于拉丁字母的一套电脑编码系统，用于显示现代英语，主要包括控制字符（回车键、退格、换行键等）和可显示字符（英文大小写字符、阿拉伯数字和西文符号）。</li><li>基本的ASCII字符集，使用7位（bits）表示一个字符，共128字符。ASCII的扩展字符集使用8位（bits）表示一个字符，共256字符，方便支持欧洲常用字符。</li><li><strong>ISO-8859-1字符集</strong>：</li><li>拉丁码表，别名Latin-1，用于显示欧洲使用的语言，包括荷兰、丹麦、德语、意大利语、西班牙语等。</li><li>ISO-8859-1使用单字节编码，兼容ASCII编码。</li><li><strong>GBxxx字符集</strong>：</li><li>GB就是国标的意思，是为了显示中文而设计的一套字符集。</li><li><strong>GB2312</strong>：简体中文码表。一个小于127的字符的意义与原来相同。但两个大于127的字符连在一起时，就表示一个汉字，这样大约可以组合了包含7000多个简体汉字，此外数学符号、罗马希腊的字母、日文的假名们都编进去了，连在ASCII里本来就有的数字、标点、字母都统统重新编了两个字节长的编码，这就是常说的&quot;全角&quot;字符，而原来在127号以下的那些就叫&quot;半角&quot;字符。</li><li><strong>GBK</strong>：最常用的中文码表。是在GB2312标准基础上的扩展规范，使用了双字节编码方案，共收录了21003个汉字，完全兼容GB2312标准，同时支持繁体汉字以及日韩汉字等。</li><li><strong>GB18030</strong>：最新的中文码表。收录汉字70244个，采用多字节编码，每个字可以由1个、2个或4个字节组成。支持中国国内少数民族的文字，同时支持繁体汉字以及日韩汉字等。</li><li><strong>Unicode字符集</strong> ：</li><li>Unicode编码系统为表达任意语言的任意字符而设计，是业界的一种标准，也称为统一码、标准万国码。</li><li>它最多使用4个字节的数字来表达每个字母、符号，或者文字。有三种编码方案，UTF-8、UTF-16和UTF-32。最为常用的UTF-8编码。</li><li>UTF-8编码，可以用来表示Unicode标准中任何字符，它是电子邮件、网页及其他存储或传送文字的应用中，优先采用的编码。互联网工程工作小组（IETF）要求所有互联网协议都必须支持UTF-8编码。所以，我们开发Web应用，也要使用UTF-8编码。它使用一至四个字节为每个字符编码，编码规则：</li></ul><ol><li>128个US-ASCII字符，只需一个字节编码。</li><li>拉丁文等字符，需要二个字节编码。</li><li>大部分常用字（含中文），使用三个字节编码。</li><li>其他极少使用的Unicode辅助字符，使用四字节编码。</li></ol><h2 id="编码问题导致乱码" tabindex="-1"><a class="header-anchor" href="#编码问题导致乱码" aria-hidden="true">#</a> 编码问题导致乱码</h2><p>在java开发工具IDEA中，使用<code>FileReader</code> 读取项目中的文本文件。由于IDEA的设置，都是默认的<code>UTF-8</code>编码，所以没有任何问题。但是，当读取Windows系统中创建的文本文件时，由于Windows系统默认的是GBK编码，就会出现乱码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReaderDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">FileReader</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> read<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>read <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fileReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
输出结果：���
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么如何读取GBK编码的文件呢？ 这个时候就得讲讲转换流了！</p><blockquote><p>从另一角度来讲：<strong>字符流=字节流+编码表</strong></p></blockquote><h2 id="inputstreamreader类-字节流到字符流的桥梁" tabindex="-1"><a class="header-anchor" href="#inputstreamreader类-字节流到字符流的桥梁" aria-hidden="true">#</a> InputStreamReader类--(字节流到字符流的桥梁)</h2><p>转换流<code>java.io.InputStreamReader</code>，是<code>Reader</code>的子类，从字面意思可以看出它是从字节流到字符流的桥梁。它读取字节，并使用指定的字符集将其解码为字符。它的字符集可以由名称指定，也可以接受平台的默认字符集。</p><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><blockquote><p><code>InputStreamReader(InputStream in)</code>: 创建一个使用默认字符集的字符流。</p><p><code>InputStreamReader(InputStream in, String charsetName)</code>: 创建一个指定字符集的字符流。</p></blockquote><p>构造代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">InputStreamReader</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;in.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">InputStreamReader</span> isr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;in.txt&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用转换流解决编码问题" tabindex="-1"><a class="header-anchor" href="#使用转换流解决编码问题" aria-hidden="true">#</a> 使用转换流解决编码问题</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReaderDemo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
      	<span class="token comment">// 定义文件路径,文件为gbk编码</span>
        <span class="token class-name">String</span> <span class="token class-name">FileName</span> <span class="token operator">=</span> <span class="token string">&quot;C:\\\\A.txt&quot;</span><span class="token punctuation">;</span>
      	<span class="token comment">// 创建流对象,默认UTF8编码</span>
        <span class="token class-name">InputStreamReader</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token class-name">FileName</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	<span class="token comment">// 创建流对象,指定GBK编码</span>
        <span class="token class-name">InputStreamReader</span> isr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token class-name">FileName</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 定义变量,保存字符</span>
        <span class="token keyword">int</span> read<span class="token punctuation">;</span>
      	<span class="token comment">// 使用默认编码字符流读取,乱码</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>read <span class="token operator">=</span> isr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// �����ʺ      </span>
        <span class="token punctuation">}</span>
        isr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      	<span class="token comment">// 使用指定编码字符流读取,正常解析</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>read <span class="token operator">=</span> isr2<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// musk</span>
        <span class="token punctuation">}</span>
        isr2<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-outputstreamwriter类-字符流到字节流的桥梁" tabindex="-1"><a class="header-anchor" href="#_2-4-outputstreamwriter类-字符流到字节流的桥梁" aria-hidden="true">#</a> 2.4 OutputStreamWriter类--(字符流到字节流的桥梁)</h2><p>转换流<code>java.io.OutputStreamWriter</code> ，是Writer的子类，字面看容易混淆会误以为是转为字符流，其实不然，OutputStreamWriter为从字符流到字节流的桥梁。使用指定的字符集将字符编码为字节。它的字符集可以由名称指定，也可以接受平台的默认字符集。</p><h3 id="构造方法-1" tabindex="-1"><a class="header-anchor" href="#构造方法-1" aria-hidden="true">#</a> 构造方法</h3><blockquote><p><code>OutputStreamWriter(OutputStream in)</code>: 创建一个使用默认字符集的字符流。</p><p><code>OutputStreamWriter(OutputStream in, String charsetName)</code>: 创建一个指定字符集的字符流。</p></blockquote><p>构造举例，代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">OutputStreamWriter</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">OutputStreamWriter</span> isr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;b.txt&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定编码构造代码" tabindex="-1"><a class="header-anchor" href="#指定编码构造代码" aria-hidden="true">#</a> 指定编码构造代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OutputDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
      	<span class="token comment">// 定义文件路径</span>
        <span class="token class-name">String</span> <span class="token class-name">FileName</span> <span class="token operator">=</span> <span class="token string">&quot;C:\\\\s.txt&quot;</span><span class="token punctuation">;</span>
      	<span class="token comment">// 创建流对象,默认UTF8编码</span>
        <span class="token class-name">OutputStreamWriter</span> osw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token class-name">FileName</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 写出数据</span>
      	osw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;沉默&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 保存为6个字节</span>
        osw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	
		<span class="token comment">// 定义文件路径</span>
		<span class="token class-name">String</span> <span class="token class-name">FileName2</span> <span class="token operator">=</span> <span class="token string">&quot;D:\\\\A.txt&quot;</span><span class="token punctuation">;</span>
     	<span class="token comment">// 创建流对象,指定GBK编码</span>
        <span class="token class-name">OutputStreamWriter</span> osw2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token class-name">FileName2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 写出数据</span>
      	osw2<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;musk&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 保存为4个字节</span>
        osw2<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/io/char-byte-61d3a7e6-365e-41d3-8c4a-bc9e680c70a6.png" alt="" loading="lazy"></p><p>为了达到<strong>最高效率</strong>，可以考虑在 <code>BufferedReader</code> 内包装 <code>InputStreamReader</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BufferedReader</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span>；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,42),r={href:"https://www.cnblogs.com/yichunguo/p/11775270.html",target:"_blank",rel:"noopener noreferrer"},k=n("hr",null,null,-1);function d(m,v){const a=l("ExternalLinkIcon");return e(),p("div",null,[u,n("blockquote",null,[n("p",null,[s("参考链接："),n("a",r,[s("https://www.cnblogs.com/yichunguo/p/11775270.html"),o(a)]),s("，整理：musk")])]),k])}const h=t(i,[["render",d],["__file","char-byte.html.vue"]]);export{h as default};