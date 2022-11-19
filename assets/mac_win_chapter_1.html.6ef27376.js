import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as p,a as n,b as a,d as t,e as l,r as c}from"./app.1ed5bacd.js";const o={},d=l(`<h2 id="碎碎念-可以不看" tabindex="-1"><a class="header-anchor" href="#碎碎念-可以不看" aria-hidden="true">#</a> 碎碎念，可以不看</h2><p>最早使用 mac 还得追溯到 2011 年，当时移动应用开发刚刚兴起，我在一家小公司，既做服务端，又做客户端，当时在一台 PC 上装上了 hackintosh （黑苹果），就这样用 XCode 开发了一个 iOS 应用。</p><p>后来买了一台 mac mini，当时云存储不像现在这样方便，在 PC 和 Mac 上切换使用还是不太方便，于是过了一年多就把这台 mac mini 给卖掉了。</p><p>再后来我买了台 macbook pro，依靠 OneDrive 解决了数据同步问题，在 win 上使用机械键盘或静电容键盘，macbook pro 则一般使用笔记本形态，由于对键盘也存在某种肌肉记忆，在两个设备上也能够自如地切换使用。</p><p>由于做架构工作，在编码或审查代码工作较多的时候，我往往需要用 IDE 打开许多项目，这时 win 仍然是我的主力开发工具。</p><p>前两年苹果的 M1 Pro 问世了，macbook pro 的性能也可以用来当作主力开发了，于是我开始高频地在 mac 和 win 上切换使用。</p><p>除了 Macintosh 和 Windows，我平时还会偶尔使用 Linux 桌面系统，在切换使用这些系统的过程中其实并没有多少不便，一方面自己对多个系统都具备了相当的使用经验，另一方面高频使用的应用无非就是浏览器、IDE、聊天工具这类。</p><p>如果能够适应的话，倒也无需额外的工具，但本着精益求精的精神，在切换使用的过程中，我也摸索出一套适合自己的工具，使用这些工具能够更顺畅地切换使用这两个系统。</p><p>我用的这套方法并不复杂，下面做个简单的分享，第一部分先讲一讲快捷键的设置。</p><h2 id="一套快捷键兼容多个系统" tabindex="-1"><a class="header-anchor" href="#一套快捷键兼容多个系统" aria-hidden="true">#</a> 一套快捷键兼容多个系统</h2><p>有一些方案是修改系统的键位，比如在 Windows 下将 Win 键与 Ctrl 键调换，这种方案对系统侵入性较强，所以个人不是很喜欢，我采用的方案是<strong>增加新的快捷键使其匹配另一个系统的功能，令一套快捷键兼容多个系统</strong>。</p><h2 id="mac-上的设置" tabindex="-1"><a class="header-anchor" href="#mac-上的设置" aria-hidden="true">#</a> Mac 上的设置</h2><p>为方便对照，先回顾下 Mac 键盘与 Windows 键盘中两个修饰键位置的对应关系：<code>Opt -&gt; Win</code>、<code>Cmd -&gt; Alt</code> 。</p><p>Mac 上使用 <code>Thor</code> 、<code>Raycast</code>、<code>Karabiner-Elements</code> 和<code>系统设置</code>来配置快捷键，以下设置在 Windows 上都有对应的功能。</p><h3 id="thor-的设置" tabindex="-1"><a class="header-anchor" href="#thor-的设置" aria-hidden="true">#</a> Thor 的设置</h3><table><thead><tr><th>快捷键</th><th>功能</th></tr></thead><tbody><tr><td>Opt + R</td><td>打开 Raycast</td></tr></tbody></table><p>设置原因：</p><ul><li>在 Windows 上常用 Win+R 来进行快速启动。</li><li>方便单手打开 Raycast 。</li><li>这个免费的小工具设置起来方便，虽然大多数快捷键交由 Raycast 设置了，仍然保留了该工具。</li></ul><p>设置建议：</p><ul><li>Raycast 中的快捷键设置也可以由 Thor 来完成。</li><li>这个设置可有可无，也可用其他工具来配置。</li></ul><h3 id="raycast" tabindex="-1"><a class="header-anchor" href="#raycast" aria-hidden="true">#</a> Raycast</h3><table><thead><tr><th>快捷键</th><th>功能</th></tr></thead><tbody><tr><td>Opt + E</td><td>打开 Finder</td></tr><tr><td>Opt + Tab</td><td>打开 Mission Control</td></tr><tr><td>Ctrl + Cmd + Z</td><td>打开/关闭 Telegram 窗口</td></tr><tr><td>Ctrl + Cmd + C</td><td>打开/关闭 Chrome 窗口</td></tr><tr><td>Ctrl + Cmd + X</td><td>打开/关闭 VS Code 窗口</td></tr></tbody></table><p>设置原因：</p><ul><li>Windows 上常用 Win + E 打开资源管理器、Win + Tab 切换窗口。</li><li>Ctrl + Cmd/Alt + Z 是早期使用 QQ 留下的习惯。</li><li>另外两个设置沿用了 <code>Ctrl + Cmd + 字母</code> 打开窗口的设置，方便打开高频使用的应用。</li><li>Raycast 上还有许多好用的功能，于是作为一个必装工具，快捷键设置的任务也就交给它了。</li></ul><h3 id="karabiner-elements" tabindex="-1"><a class="header-anchor" href="#karabiner-elements" aria-hidden="true">#</a> Karabiner-Elements</h3><table><thead><tr><th>快捷键</th><th>功能</th></tr></thead><tbody><tr><td>Ctrl/RCmd + H</td><td>Move Left</td></tr><tr><td>Ctrl/RCmd + J</td><td>Move Down</td></tr><tr><td>Ctrl/RCmd + K</td><td>Move Up</td></tr><tr><td>Ctrl/RCmd + L</td><td>Move Right</td></tr></tbody></table><p>设置原因：</p><ul><li>方便 Vim 党操作。</li><li>使用 Ctrl 和 RCmd（右 Cmd） 作为触发键不与现有快捷键冲突。</li></ul><p>设置建议：</p><ul><li>若不使用 Cmd + H 隐藏窗口，Move 操作设置的 Ctrl 触发改为 <code>LCmd</code> 触发更为合适，具体哪种合适也取决于使用的是什么键盘，比如使用 Magic Keyboard 时使用 Cmd 或 <code>fn</code> 更加方便，使用键程较长的键盘时用 Ctrl 也很方便。</li></ul><h3 id="系统设置" tabindex="-1"><a class="header-anchor" href="#系统设置" aria-hidden="true">#</a> 系统设置</h3><p>Mac 中可使用系统设置来配置应用内快捷键，这部分设置其实可有可无。</p><p>在 Keyboard -&gt; App Shortcuts 中配置 Chrome 快捷键，配置时注意功能名称需与菜单名称保持完全一致；</p><table><thead><tr><th>快捷键</th><th>功能名称</th></tr></thead><tbody><tr><td>Cmd + D</td><td>Open Location…</td></tr><tr><td>Cmd + L</td><td>Bookmark This Page…</td></tr></tbody></table><p>设置原因：</p><ul><li>将 Chrome 常用的「回到 Url 输入框」功能设置为与 Win 上的 <code>Alt + D</code> 一致，方便单手操作的同时也避免和 Cmd + H/J/K/L 快捷键冲突。</li></ul><h2 id="windows-上的设置" tabindex="-1"><a class="header-anchor" href="#windows-上的设置" aria-hidden="true">#</a> Windows 上的设置</h2><p>Win 上使用 <code>AutoHotKey</code> 来进行快捷键设置，对应的功能与上面提到的 Mac 设置一致，另外将常用的 Mac 快捷键操作设置到 Win 中。</p><h3 id="autohotkey" tabindex="-1"><a class="header-anchor" href="#autohotkey" aria-hidden="true">#</a> AutoHotKey</h3><table><thead><tr><th>快捷键</th><th>功能</th></tr></thead><tbody><tr><td>Alt + C</td><td>复制</td></tr><tr><td>Alt + X</td><td>剪切</td></tr><tr><td>Alt + V</td><td>粘贴</td></tr><tr><td>Alt + A</td><td>全选</td></tr><tr><td>Alt + W</td><td>关闭窗口</td></tr><tr><td>Alt + Z</td><td>撤销</td></tr><tr><td>Alt + F</td><td>搜索</td></tr><tr><td>Alt + Q</td><td>退出</td></tr><tr><td>Alt + Left</td><td>Home</td></tr><tr><td>Alt + Right</td><td>End</td></tr><tr><td>Alt + Shift + [</td><td>「</td></tr><tr><td>Alt + Shift + ]</td><td>」</td></tr><tr><td>Alt + [ （资源管理器、chrome）</td><td>返回</td></tr><tr><td>Alt + ] （资源管理器、chrome）</td><td>前进</td></tr></tbody></table><p>除了 Mac 的常用快捷键外，还增加了一个鼠标的组合按键用于切换桌面。</p><table><thead><tr><th>快捷键</th><th>功能</th></tr></thead><tbody><tr><td>按住鼠标左键 + 鼠标前进键</td><td>向左移动桌面</td></tr><tr><td>按住鼠标左键 + 鼠标后退键</td><td>向右移动桌面</td></tr></tbody></table><p>设置原因：</p><ul><li>Mac 的一大优势是多桌面，将多桌面的使用习惯应用到 Windows 上。</li><li>使用鼠标切换桌面本可以用罗技的 Anywhere 或 Master 系列鼠标来实现，但个人认为其过于臃肿导致软硬件不稳定，在使用体验上并不怎么样，所以才使用 AutoHotKey 来实现。</li></ul><p>部分配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">;</span> ------- mac -------

<span class="token variable">$!</span>c::
 Send <span class="token punctuation">{</span>Ctrl Down<span class="token punctuation">}</span><span class="token punctuation">{</span>c<span class="token punctuation">}</span><span class="token punctuation">{</span>Ctrl Up<span class="token punctuation">}</span>
Return
<span class="token variable">$!</span>x::
 Send <span class="token punctuation">{</span>Ctrl Down<span class="token punctuation">}</span><span class="token punctuation">{</span>x<span class="token punctuation">}</span><span class="token punctuation">{</span>Ctrl Up<span class="token punctuation">}</span>
Return
<span class="token variable">$!</span>v::
 Send <span class="token punctuation">{</span>Ctrl Down<span class="token punctuation">}</span><span class="token punctuation">{</span>v<span class="token punctuation">}</span><span class="token punctuation">{</span>Ctrl Up<span class="token punctuation">}</span>
Return
<span class="token variable">$!</span>a::
 Send <span class="token punctuation">{</span>Ctrl Down<span class="token punctuation">}</span><span class="token punctuation">{</span>a<span class="token punctuation">}</span><span class="token punctuation">{</span>Ctrl Up<span class="token punctuation">}</span>
Return
<span class="token variable">$!</span>s::
 Send <span class="token punctuation">{</span>Ctrl Down<span class="token punctuation">}</span><span class="token punctuation">{</span>s<span class="token punctuation">}</span><span class="token punctuation">{</span>Ctrl Up<span class="token punctuation">}</span>
Return
<span class="token variable">$!</span>w::
 Send <span class="token punctuation">{</span>Ctrl Down<span class="token punctuation">}</span><span class="token punctuation">{</span>w<span class="token punctuation">}</span><span class="token punctuation">{</span>Ctrl Up<span class="token punctuation">}</span>
Return
<span class="token variable">$!</span>z::
 Send <span class="token punctuation">{</span>Ctrl Down<span class="token punctuation">}</span><span class="token punctuation">{</span>z<span class="token punctuation">}</span><span class="token punctuation">{</span>Ctrl Up<span class="token punctuation">}</span>
Return
<span class="token variable">$!</span>f::
 Send <span class="token punctuation">{</span>Ctrl Down<span class="token punctuation">}</span><span class="token punctuation">{</span>f<span class="token punctuation">}</span><span class="token punctuation">{</span>Ctrl Up<span class="token punctuation">}</span>
Return
<span class="token variable">$!</span>q::
 Send <span class="token punctuation">{</span>Alt Down<span class="token punctuation">}</span><span class="token punctuation">{</span>F4<span class="token punctuation">}</span><span class="token punctuation">{</span>Alt Up<span class="token punctuation">}</span>
Return

<span class="token variable">$!</span>Left::
 Send <span class="token punctuation">{</span>Home<span class="token punctuation">}</span>
Return

<span class="token variable">$!</span>Right::
 Send <span class="token punctuation">{</span>End<span class="token punctuation">}</span>
Return

<span class="token variable">$!</span>+Left::
 Send +<span class="token punctuation">{</span>Home<span class="token punctuation">}</span>
Return

<span class="token variable">$!</span>+Right::
 Send +<span class="token punctuation">{</span>End<span class="token punctuation">}</span>
Return


<span class="token punctuation">;</span> ----- display ------

~LButton <span class="token operator">&amp;</span> XButton1::send <span class="token comment">#^{Right}</span>
<span class="token builtin class-name">return</span>

~LButton <span class="token operator">&amp;</span> XButton2::send <span class="token comment">#^{left}</span>
<span class="token builtin class-name">return</span>

<span class="token punctuation">;</span>~MButton <span class="token operator">&amp;</span> RButton::send <span class="token comment">#^{Right}</span>
<span class="token punctuation">;</span><span class="token builtin class-name">return</span>

<span class="token punctuation">;</span>~MButton <span class="token operator">&amp;</span> LButton::send <span class="token comment">#^{left}</span>
<span class="token punctuation">;</span><span class="token builtin class-name">return</span>

<span class="token punctuation">;</span> ------ <span class="token function">vim</span> -----

<span class="token operator">!</span>k::   <span class="token punctuation">;</span><span class="token punctuation">;</span> <span class="token operator">!</span>-<span class="token operator">&gt;</span>alt   k-<span class="token operator">&gt;</span>字母键k
Send <span class="token punctuation">{</span>Up<span class="token punctuation">}</span>   <span class="token punctuation">;</span><span class="token punctuation">;</span>输入 上 键
<span class="token builtin class-name">return</span>
<span class="token operator">!</span>j::
Send <span class="token punctuation">{</span>Down<span class="token punctuation">}</span>
<span class="token builtin class-name">return</span>
<span class="token operator">!</span>h::
Send <span class="token punctuation">{</span>Left<span class="token punctuation">}</span>
<span class="token builtin class-name">return</span>
<span class="token operator">!</span>l::
Send <span class="token punctuation">{</span>Right<span class="token punctuation">}</span>
<span class="token builtin class-name">return</span>

<span class="token punctuation">;</span> // 中文直角引号

<span class="token operator">!</span>+<span class="token punctuation">[</span>::send,<span class="token punctuation">{</span>U+300C<span class="token punctuation">}</span>            <span class="token punctuation">;</span>// alt + <span class="token builtin class-name">shift</span> + <span class="token punctuation">[</span>  转换为「
<span class="token operator">!</span>+<span class="token punctuation">]</span>::send,<span class="token punctuation">{</span>U+300D<span class="token punctuation">}</span>            <span class="token punctuation">;</span>// alt + <span class="token builtin class-name">shift</span> + <span class="token punctuation">]</span>  转换为 」

<span class="token punctuation">;</span> // 音量调节
<span class="token operator">!</span>-::send,<span class="token punctuation">{</span>Volume_Down<span class="token punctuation">}</span>
<span class="token operator">!=</span>::send,<span class="token punctuation">{</span>Volume_Up<span class="token punctuation">}</span>

<span class="token punctuation">;</span> ----- explorer ---------

<span class="token comment">#IfWinActive ahk_class CabinetWClass</span>
<span class="token punctuation">{</span>
<span class="token operator">!</span><span class="token punctuation">[</span>::Send <span class="token operator">!</span><span class="token punctuation">{</span>Left<span class="token punctuation">}</span>
Return

<span class="token operator">!</span><span class="token punctuation">]</span>::Send <span class="token operator">!</span><span class="token punctuation">{</span>Right<span class="token punctuation">}</span>
Return
<span class="token punctuation">}</span>


<span class="token punctuation">;</span> ----- chrome ---------

<span class="token comment">#IfWinActive ahk_exe chrome.exe</span>
<span class="token punctuation">{</span>
<span class="token operator">!</span><span class="token punctuation">[</span>::Send <span class="token operator">!</span><span class="token punctuation">{</span>Left<span class="token punctuation">}</span>
Return

<span class="token operator">!</span><span class="token punctuation">]</span>::Send <span class="token operator">!</span><span class="token punctuation">{</span>Right<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>y::Send ^<span class="token punctuation">{</span>h<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>t::Send ^<span class="token punctuation">{</span>t<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>+t::Send ^+<span class="token punctuation">{</span>t<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>r::Send ^<span class="token punctuation">{</span>r<span class="token punctuation">}</span>
Return
<span class="token punctuation">}</span>

<span class="token comment">#IfWinActive ahk_exe Code.exe</span>
<span class="token punctuation">{</span>
<span class="token operator">!</span><span class="token punctuation">[</span>::Send <span class="token operator">!</span><span class="token punctuation">{</span>Left<span class="token punctuation">}</span>
Return

<span class="token operator">!</span><span class="token punctuation">]</span>::Send <span class="token operator">!</span><span class="token punctuation">{</span>Right<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>p::Send ^<span class="token punctuation">{</span>p<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>+p::Send ^+<span class="token punctuation">{</span>p<span class="token punctuation">}</span>
<span class="token builtin class-name">return</span>
<span class="token punctuation">}</span>

<span class="token comment">#IfWinActive ahk_exe Obsidian.exe</span>
<span class="token punctuation">{</span>
<span class="token operator">!</span><span class="token punctuation">[</span>::Send <span class="token operator">!</span><span class="token punctuation">{</span>Left<span class="token punctuation">}</span>
Return

<span class="token operator">!</span><span class="token punctuation">]</span>::Send <span class="token operator">!</span><span class="token punctuation">{</span>Right<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>p::Send ^<span class="token punctuation">{</span>p<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>e::Send ^<span class="token punctuation">{</span>e<span class="token punctuation">}</span>
Return

<span class="token operator">!</span><span class="token comment">#e::Send ^!{e}</span>
Return

<span class="token operator">!</span>+d::Send ^+<span class="token punctuation">{</span>d<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>o::Send ^<span class="token punctuation">{</span>o<span class="token punctuation">}</span>
Return
<span class="token punctuation">}</span>

<span class="token comment">#IfWinActive ahk_exe webstorm64.exe</span>
<span class="token punctuation">{</span>
<span class="token operator">!</span><span class="token punctuation">[</span>::Send ^<span class="token operator">!</span><span class="token punctuation">{</span>Left<span class="token punctuation">}</span>
Return

<span class="token operator">!</span><span class="token punctuation">]</span>::Send ^<span class="token operator">!</span><span class="token punctuation">{</span>Right<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>e::Send ^<span class="token punctuation">{</span>e<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>o::Send ^<span class="token punctuation">{</span>n<span class="token punctuation">}</span>
Return

<span class="token operator">!</span>+o::Send ^+<span class="token punctuation">{</span>n<span class="token punctuation">}</span>
Return
<span class="token punctuation">}</span>

<span class="token punctuation">;</span> ----- telegram ---------

<span class="token comment">#IfWinActive ahk_exe Telegram.exe</span>
<span class="token punctuation">{</span>
^<span class="token operator">!</span>z::Send <span class="token punctuation">{</span>Ctrl Down<span class="token punctuation">}</span><span class="token punctuation">{</span>w<span class="token punctuation">}</span><span class="token punctuation">{</span>Ctrl Up<span class="token punctuation">}</span>
Return
<span class="token punctuation">}</span>

<span class="token comment">#IfWinActive</span>

^<span class="token operator">!</span>z::Run <span class="token string">&quot;C:\\Users\\who\\AppData\\Roaming\\Telegram Desktop\\Telegram.exe&quot;</span>
Return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="尾声" tabindex="-1"><a class="header-anchor" href="#尾声" aria-hidden="true">#</a> 尾声</h2><p>以上配置的内容实际上很少，操作方法也非常简单，因此未写出具体实现步骤。</p><p>配置好以后并不产生新的学习成本（如果你熟悉 vim 的话），也不增加心智负担。</p><p>有这么多强大的软件，当然也还可以再进一步地提升双系统的使用效率啦，这个留待下次有机会再写吧 🤓 。</p><h2 id="推荐阅读-参考" tabindex="-1"><a class="header-anchor" href="#推荐阅读-参考" aria-hidden="true">#</a> 推荐阅读 &amp; 参考</h2>`,51),u={href:"https://cloud.tencent.com/developer/article/1873835",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.mdnice.com/writing/4223f9ad2f6f415d9907d8266e85fc4e",target:"_blank",rel:"noopener noreferrer"};function v(m,k){const s=c("ExternalLinkIcon");return i(),p("div",null,[d,n("ul",null,[n("li",null,[n("a",u,[a("Karabiner-Elements 之 介绍和使用（part 1）"),t(s)])]),n("li",null,[n("a",r,[a("【AutoHotkey】windows和mac统一映射方案"),t(s)])])])])}const R=e(o,[["render",v],["__file","mac_win_chapter_1.html.vue"]]);export{R as default};
