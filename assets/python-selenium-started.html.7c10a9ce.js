import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as t,a as e,b as i,d as s,f as d,r}from"./app.89148984.js";const o={},c=d(`<h1 id="selenium\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#selenium\u5165\u95E8" aria-hidden="true">#</a> Selenium\u5165\u95E8</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Selenium\u662F \u81EA\u52A8\u5316\u6D4B\u8BD5\u5DE5\u5177\u3002\u5B83\u652F\u6301\u5404\u79CD\u6D4F\u89C8\u5668\uFF0C\u5305\u62EC Chrome\uFF0CSafari\uFF0CFirefox \u7B49\u4E3B\u6D41\u754C\u9762\u5F0F\u6D4F\u89C8\u5668\u3002\u4E3B\u8981\u7528\u7535\u8111\u6A21\u62DF\u4EBA\u64CD\u4F5C\u6D4F\u89C8\u5668\u7F51\u9875\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u81EA\u52A8\u5316\uFF0C\u6D4B\u8BD5\u7B49</p><h2 id="_2-\u521D\u6B65\u4F53\u9A8C" tabindex="-1"><a class="header-anchor" href="#_2-\u521D\u6B65\u4F53\u9A8C" aria-hidden="true">#</a> 2. \u521D\u6B65\u4F53\u9A8C</h2><blockquote><p>\u5FFD\u7565\u5B89\u88C5Selenium \u548C \u6D4F\u89C8\u5668\u9A71\u52A8\u5B89\u88C5\u548C\u914D\u7F6E\uFF0C\u5982\u6709\u9700\u6C42\u81EA\u884C\u767E\u5EA6</p></blockquote><p>\u8FD0\u884C\u5982\u4E0B\u4EE3\u7801\uFF0C\u4F1A\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u7136\u540E\u8BBF\u95EE\u767E\u5EA6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from selenium import webdriver

browser = webdriver.Chrome()
# browser = webdriver.Chrome(r&quot;C:\\Users\\Administrator\\Downloads\\chromedriver_win32\\chromedriver.exe&quot;)
browser.get(&#39;http://www.baidu.com/&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210204133157683.png" alt="image-20210204133157683"></p><h2 id="_3-\u6A21\u62DF\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#_3-\u6A21\u62DF\u63D0\u4EA4" aria-hidden="true">#</a> 3. \u6A21\u62DF\u63D0\u4EA4</h2><p>\u4E0B\u9762\u7684\u4EE3\u7801\u5B9E\u73B0\u6A21\u62DF\u63D0\u4EA4\u641C\u7D22\u529F\u80FD\uFF0C\u9996\u5148\u7B49\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\uFF0C\u7136\u540E\u8F93\u5165\u5230\u641C\u7D22\u6846\u6587\u672C\uFF0C\u70B9\u51FB\u63D0\u4EA4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# driver = webdriver.Firefox()
driver = webdriver.Chrome(r&quot;C:\\Users\\Administrator\\Downloads\\chromedriver_win32\\chromedriver.exe&quot;)
driver.get(&quot;http://www.python.org&quot;)
assert &quot;Python&quot; in driver.title
elem = driver.find_element_by_name(&quot;q&quot;)
elem.clear()
elem.send_keys(&quot;pycon&quot;)
elem.send_keys(Keys.RETURN)
assert &quot;No results found.&quot; not in driver.page_source
driver.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u5176\u4E2D driver.get \u65B9\u6CD5\u4F1A\u6253\u5F00\u8BF7\u6C42\u7684 URL\uFF0CWebDriver \u4F1A\u7B49\u5F85\u9875\u9762\u5B8C\u5168\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u624D\u4F1A\u8FD4\u56DE\uFF0C\u5373\u7A0B\u5E8F\u4F1A\u7B49\u5F85\u9875\u9762\u7684\u6240\u6709\u5185\u5BB9\u52A0\u8F7D\u5B8C\u6210\uFF0CJS \u6E32\u67D3\u5B8C\u6BD5\u4E4B\u540E\u624D\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u8FD9\u91CC\u7528\u5230\u4E86\u7279\u522B\u591A\u7684 Ajax \u7684\u8BDD\uFF0C\u7A0B\u5E8F\u53EF\u80FD\u4E0D\u77E5\u9053\u662F\u5426\u5DF2\u7ECF\u5B8C\u5168\u52A0\u8F7D\u5B8C\u6BD5\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.python.org&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>WebDriver \u63D0\u4F9B\u4E86\u5927\u91CF\u7684\u65B9\u6CD5\u8BA9\u4F60\u53BB\u67E5\u8BE2\u9875\u9762\u4E2D\u7684\u5143\u7D20\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u5F62\u5982\uFF1A find_element_by_*\u3002 \u4F8B\u5982\uFF1A\u5305\u542B name \u5C5E\u6027\u7684input\u8F93\u5165\u6846\u53EF\u4EE5\u901A\u8FC7 find_element_by_name \u65B9\u6CD5\u67E5\u627E\u5230\uFF0C \u8BE6\u7EC6\u7684\u67E5\u627E\u65B9\u6CD5\u53EF\u4EE5\u5728\u7B2C\u56DB\u8282\u5143\u7D20\u67E5\u627E\u4E2D\u67E5\u770B</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>elem <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_name<span class="token punctuation">(</span><span class="token string">&quot;q&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6211\u4EEC\u53D1\u9001\u4E86\u4E00\u4E2A\u5173\u952E\u5B57\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u7684\u4F5C\u7528\u7C7B\u4F3C\u4E8E\u4F60\u7528\u952E\u76D8\u8F93\u5165\u5173\u952E\u5B57</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>elem<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
elem<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;pycon&quot;</span><span class="token punctuation">)</span>
elem<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>RETURN<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_4-\u5143\u7D20\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#_4-\u5143\u7D20\u5B9A\u4F4D" aria-hidden="true">#</a> 4. \u5143\u7D20\u5B9A\u4F4D</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find_element_by_id()
find_element_by_name()
find_element_by_class_name()
find_element_by_tag_name()
find_element_by_link_text()
find_element_by_partial_link_text()
find_element_by_xpath()
find_element_by_css_selector()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<code>element</code>\u53D8\u6210<code>elements</code>\u5C31\u662F\u627E\u6240\u6709\u6EE1\u8DB3\u7684\u6761\u4EF6\uFF0C\u8FD4\u56DE\u6570\u7EC4\u3002</p><p>\u4E00\u822C\u6211\u90FD\u81EA\u5DF1\u91C7\u7528 <strong>xpath</strong> \u83B7\u53D6\u5143\u7D20\u7684\uFF0C\u590D\u5236\u5373\u53EF</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210204134742935.png" alt="image-20210204134742935"></p><h2 id="_5-\u63A7\u5236\u6D4F\u89C8\u5668\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_5-\u63A7\u5236\u6D4F\u89C8\u5668\u64CD\u4F5C" aria-hidden="true">#</a> 5. \u63A7\u5236\u6D4F\u89C8\u5668\u64CD\u4F5C</h2><ul><li>\u63A7\u5236\u6D4F\u89C8\u5668\u7A97\u53E3\u5927\u5C0F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>driver.set_window_size(480, 800)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6D4F\u89C8\u5668\u540E\u9000\uFF0C\u524D\u8FDB</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u540E\u9000 driver.back()
# \u524D\u8FDB driver.forward()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5237\u65B0</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>driver.refresh() # \u5237\u65B0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-webelement\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_6-webelement\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> 6. Webelement\u5E38\u7528\u65B9\u6CD5</h2><ul><li>\u70B9\u51FB\u548C\u8F93\u5165</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>driver.find_element_by_id(&quot;kw&quot;).clear() # \u6E05\u9664\u6587\u672C driver.find_element_by_id(&quot;kw&quot;).send_keys(&quot;selenium&quot;) # \u6A21\u62DF\u6309\u952E\u8F93\u5165 driver.find_element_by_id(&quot;su&quot;).click() # \u5355\u673A\u5143\u7D20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u63D0\u4EA4</li></ul><p>\u53EF\u4EE5\u5728\u641C\u7D22\u6846\u6A21\u62DF\u56DE\u8F66\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>search_text = driver.find_element_by_id(&#39;kw&#39;) search_text.send_keys(&#39;selenium&#39;) search_text.submit()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5176\u4ED6</li></ul><p>size\uFF1A \u8FD4\u56DE\u5143\u7D20\u7684\u5C3A\u5BF8\u3002</p><p>text\uFF1A \u83B7\u53D6\u5143\u7D20\u7684\u6587\u672C\u3002</p><p>get_attribute(name)\uFF1A \u83B7\u5F97\u5C5E\u6027\u503C\u3002</p><p>is_displayed()\uFF1A \u8BBE\u7F6E\u8BE5\u5143\u7D20\u662F\u5426\u7528\u6237\u53EF\u89C1\u3002</p><h2 id="_7-\u9F20\u6807\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_7-\u9F20\u6807\u64CD\u4F5C" aria-hidden="true">#</a> 7. \u9F20\u6807\u64CD\u4F5C</h2><p>\u5728 WebDriver \u4E2D\uFF0C \u5C06\u8FD9\u4E9B\u5173\u4E8E\u9F20\u6807\u64CD\u4F5C\u7684\u65B9\u6CD5\u5C01\u88C5\u5728 ActionChains \u7C7B\u63D0\u4F9B\u3002</p><p>ActionChains \u7C7B\u63D0\u4F9B\u4E86\u9F20\u6807\u64CD\u4F5C\u7684\u5E38\u7528\u65B9\u6CD5\uFF1A</p><ul><li>perform()\uFF1A \u6267\u884C\u6240\u6709 ActionChains \u4E2D\u5B58\u50A8\u7684\u884C\u4E3A\uFF1B</li><li>context_click()\uFF1A \u53F3\u51FB\uFF1B</li><li>double_click()\uFF1A \u53CC\u51FB\uFF1B</li><li>drag_and_drop()\uFF1A \u62D6\u52A8\uFF1B</li><li>move_to_element()\uFF1A \u9F20\u6807\u60AC\u505C\u3002</li></ul><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token comment"># \u5F15\u5165 ActionChains \u7C7B</span>
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>action_chains <span class="token keyword">import</span> ActionChains

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.cn&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u5B9A\u4F4D\u5230\u8981\u60AC\u505C\u7684\u5143\u7D20</span>
above <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_link_text<span class="token punctuation">(</span><span class="token string">&quot;\u8BBE\u7F6E&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># \u5BF9\u5B9A\u4F4D\u5230\u7684\u5143\u7D20\u6267\u884C\u9F20\u6807\u60AC\u505C\u64CD\u4F5C</span>
ActionChains<span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">.</span>move_to_element<span class="token punctuation">(</span>above<span class="token punctuation">)</span><span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u952E\u76D8\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-\u952E\u76D8\u4E8B\u4EF6" aria-hidden="true">#</a> 8. \u952E\u76D8\u4E8B\u4EF6</h2><p>\u4EE5\u4E0B\u4E3A\u5E38\u7528\u7684\u952E\u76D8\u64CD\u4F5C\uFF1A</p><ul><li>send_keys(Keys.BACK_SPACE) \u5220\u9664\u952E\uFF08BackSpace\uFF09</li><li>send_keys(Keys.SPACE) \u7A7A\u683C\u952E(Space)</li><li>send_keys(Keys.TAB) \u5236\u8868\u952E(Tab)</li><li>send_keys(Keys.ESCAPE) \u56DE\u9000\u952E\uFF08Esc\uFF09</li><li>send_keys(Keys.ENTER) \u56DE\u8F66\u952E\uFF08Enter\uFF09</li><li>send_keys(Keys.CONTROL,&#39;a&#39;) \u5168\u9009\uFF08Ctrl+A\uFF09</li><li>send_keys(Keys.CONTROL,&#39;c&#39;) \u590D\u5236\uFF08Ctrl+C\uFF09</li><li>send_keys(Keys.CONTROL,&#39;x&#39;) \u526A\u5207\uFF08Ctrl+X\uFF09</li><li>send_keys(Keys.CONTROL,&#39;v&#39;) \u7C98\u8D34\uFF08Ctrl+V\uFF09</li><li>send_keys(Keys.F1) \u952E\u76D8 F1</li><li>\u2026\u2026</li><li>send_keys(Keys.F12) \u952E\u76D8 F12</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8F93\u5165\u6846\u8F93\u5165\u5185\u5BB9
driver.find_element_by_id(&quot;kw&quot;).send_keys(&quot;seleniumm&quot;)

# \u5220\u9664\u591A\u8F93\u5165\u7684\u4E00\u4E2A m
driver.find_element_by_id(&quot;kw&quot;).send_keys(Keys.BACK_SPACE)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-\u8B66\u544A\u6846\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_9-\u8B66\u544A\u6846\u5904\u7406" aria-hidden="true">#</a> 9. \u8B66\u544A\u6846\u5904\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>alert = driver.switch_to_alert()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>text\uFF1A\u8FD4\u56DE alert/confirm/prompt \u4E2D\u7684\u6587\u5B57\u4FE1\u606F\u3002</li><li>accept()\uFF1A\u63A5\u53D7\u73B0\u6709\u8B66\u544A\u6846\u3002</li><li>dismiss()\uFF1A\u89E3\u6563\u73B0\u6709\u8B66\u544A\u6846\u3002</li><li>send_keys(keysToSend)\uFF1A\u53D1\u9001\u6587\u672C\u81F3\u8B66\u544A\u6846\u3002keysToSend\uFF1A\u5C06\u6587\u672C\u53D1\u9001\u81F3\u8B66\u544A\u6846\u3002</li></ul><h2 id="_10-\u4E0B\u62C9\u6846\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#_10-\u4E0B\u62C9\u6846\u9009\u62E9" aria-hidden="true">#</a> 10. \u4E0B\u62C9\u6846\u9009\u62E9</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from selenium import webdriver
from selenium.webdriver.support.select import Select
from time import sleep

driver = webdriver.Chrome()
driver.implicitly_wait(10)
driver.get(&#39;http://www.baidu.com&#39;)
sel = driver.find_element_by_xpath(&quot;//select[@id=&#39;nr&#39;]&quot;)
Select(sel).select_by_value(&#39;50&#39;)  # \u663E\u793A50\u6761
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#_11-\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> 11. \u6587\u4EF6\u4E0A\u4F20</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>driver.find_element_by_name(&quot;file&quot;).send_keys(&#39;D:\\\\upload_file.txt&#39;)  # # \u5B9A\u4F4D\u4E0A\u4F20\u6309\u94AE\uFF0C\u6DFB\u52A0\u672C\u5730\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_12-cookie\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_12-cookie\u64CD\u4F5C" aria-hidden="true">#</a> 12. cookie\u64CD\u4F5C</h2><p>WebDriver\u64CD\u4F5Ccookie\u7684\u65B9\u6CD5\uFF1A</p><ul><li>get_cookies()\uFF1A \u83B7\u5F97\u6240\u6709cookie\u4FE1\u606F\u3002</li><li>get_cookie(name)\uFF1A \u8FD4\u56DE\u5B57\u5178\u7684key\u4E3A\u201Cname\u201D\u7684cookie\u4FE1\u606F\u3002</li><li>add_cookie(cookie_dict) \uFF1A \u6DFB\u52A0cookie\u3002\u201Ccookie_dict\u201D\u6307\u5B57\u5178\u5BF9\u8C61\uFF0C\u5FC5\u987B\u6709name \u548Cvalue \u503C\u3002</li><li>delete_cookie(name,optionsString)\uFF1A\u5220\u9664cookie\u4FE1\u606F\u3002\u201Cname\u201D\u662F\u8981\u5220\u9664\u7684cookie\u7684\u540D\u79F0\uFF0C\u201CoptionsString\u201D\u662F\u8BE5cookie\u7684\u9009\u9879\uFF0C\u76EE\u524D\u652F\u6301\u7684\u9009\u9879\u5305\u62EC\u201C\u8DEF\u5F84\u201D\uFF0C\u201C\u57DF\u201D\u3002</li><li>delete_all_cookies()\uFF1A \u5220\u9664\u6240\u6709cookie\u4FE1\u606F</li></ul><h2 id="_13-\u8C03\u7528javascript\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_13-\u8C03\u7528javascript\u4EE3\u7801" aria-hidden="true">#</a> 13. \u8C03\u7528JavaScript\u4EE3\u7801</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>js=&quot;window.scrollTo(100,450);&quot;
driver.execute_script(js) # \u901A\u8FC7javascript\u8BBE\u7F6E\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u6EDA\u52A8\u6761\u4F4D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7execute_script()\u65B9\u6CD5\u6267\u884CJavaScripts\u4EE3\u7801\u6765\u79FB\u52A8\u6EDA\u52A8\u6761\u7684\u4F4D\u7F6E\u3002</p><h2 id="_14-\u7A97\u53E3\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#_14-\u7A97\u53E3\u622A\u56FE" aria-hidden="true">#</a> 14. \u7A97\u53E3\u622A\u56FE</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>driver.get_screenshot_as_file(&quot;D:\\\\baidu_img.jpg&quot;) # \u622A\u53D6\u5F53\u524D\u7A97\u53E3\uFF0C\u5E76\u6307\u5B9A\u622A\u56FE\u56FE\u7247\u7684\u4FDD\u5B58\u4F4D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_15-\u5173\u95ED\u6D4F\u89C8\u5668" tabindex="-1"><a class="header-anchor" href="#_15-\u5173\u95ED\u6D4F\u89C8\u5668" aria-hidden="true">#</a> 15. \u5173\u95ED\u6D4F\u89C8\u5668</h2><ul><li>close() \u5173\u95ED\u5355\u4E2A\u7A97\u53E3</li><li>quit() \u5173\u95ED\u6240\u6709\u7A97\u53E3</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,63),u={href:"https://zhuanlan.zhihu.com/p/111859925",target:"_blank",rel:"noopener noreferrer"},p={href:"https://selenium-python-zh.readthedocs.io/en/latest/locating-elements.html",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const n=r("ExternalLinkIcon");return l(),t("div",null,[c,e("p",null,[e("a",u,[i("Selenium Python \u6559\u7A0B"),s(n)])]),e("p",null,[e("a",p,[i("selenium\u5B98\u65B9\u6587\u6863"),s(n)])])])}const k=a(o,[["render",v],["__file","python-selenium-started.html.vue"]]);export{k as default};
