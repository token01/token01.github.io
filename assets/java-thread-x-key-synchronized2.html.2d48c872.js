import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as i,f as r}from"./app.62e9bec7.js";const s={},a=r(`<h1 id="synchronized\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#synchronized\u5173\u952E\u5B57" aria-hidden="true">#</a> synchronized\u5173\u952E\u5B57</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>synchronized\u5173\u952E\u5B57\u89E3\u51B3\u7684\u662F<strong>\u591A\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u8BBF\u95EE\u8D44\u6E90\u7684\u540C\u6B65\u6027</strong>\uFF0Csynchronize\u5173\u952E\u5B57\u53EF\u4EE5\u4FDD\u8BC1\u88AB\u5B83\u4FEE\u9970\u7684\u65B9\u6CD5\u6216\u8005\u4EE3\u7801\u5757\u5728\u4EFB\u610F\u65F6\u523B\u53EA\u80FD\u6709\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C</p><h3 id="_1-1-synchronized-\u5982\u4F55\u4FDD\u8BC1\u591A\u7EBF\u7A0B\u4E4B\u95F4\u8BBF\u95EE\u8D44\u6E90\u7684\u540C\u6B65\u6027" tabindex="-1"><a class="header-anchor" href="#_1-1-synchronized-\u5982\u4F55\u4FDD\u8BC1\u591A\u7EBF\u7A0B\u4E4B\u95F4\u8BBF\u95EE\u8D44\u6E90\u7684\u540C\u6B65\u6027" aria-hidden="true">#</a> 1.1 synchronized \u5982\u4F55\u4FDD\u8BC1\u591A\u7EBF\u7A0B\u4E4B\u95F4\u8BBF\u95EE\u8D44\u6E90\u7684\u540C\u6B65\u6027</h3><ul><li>\u539F\u5B50\u6027</li><li>\u53EF\u89C1\u6027</li><li>\u6709\u5E8F\u6027</li></ul><p>\u5177\u4F53\u53EF\u53C2\u7167<a href="./volatile%E5%85%B3%E9%94%AE%E5%AD%97">volatile\u5173\u952E\u5B57</a></p><h3 id="_1-2-java\u65E9\u671Fsynchronized\u6548\u7387\u4E3A\u4EC0\u4E48\u4F4E" tabindex="-1"><a class="header-anchor" href="#_1-2-java\u65E9\u671Fsynchronized\u6548\u7387\u4E3A\u4EC0\u4E48\u4F4E" aria-hidden="true">#</a> 1.2 java\u65E9\u671Fsynchronized\u6548\u7387\u4E3A\u4EC0\u4E48\u4F4E</h3><p>\u5728 Java \u65E9\u671F\u7248\u672C\u4E2D\uFF0Csynchronized\u5C5E\u4E8E\u91CD\u91CF\u7EA7\u9501\uFF0C\u6548\u7387\u4F4E\u4E0B\uFF0C\u56E0\u4E3A<strong>\u76D1\u89C6\u5668\u9501\uFF08monitor\uFF09\u662F\u4F9D\u8D56\u4E8E\u5E95\u5C42\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7684 \u4E92\u65A5\u9501\uFF08Mutex Lock \uFF09\u6765\u5B9E\u73B0\u7684</strong>\uFF0CJava \u7684\u7EBF\u7A0B\u662F\u6620\u5C04\u5230\u64CD\u4F5C\u7CFB\u7EDF\u7684\u539F\u751F\u7EBF\u7A0B\u4E4B\u4E0A\u7684\u3002\u5982\u679C\u8981\u6302\u8D77\u6216\u8005\u5524\u9192\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u90FD\u9700\u8981\u64CD\u4F5C\u7CFB\u7EDF\u5E2E\u5FD9\u5B8C\u6210\uFF0C\u800C\u64CD\u4F5C\u7CFB\u7EDF\u5B9E\u73B0\u7EBF\u7A0B\u4E4B\u95F4\u7684\u5207\u6362\u65F6\u9700\u8981\u4ECE\u7528\u6237\u6001\u8F6C\u6362\u5230\u5185\u6838\u6001\uFF0C\u8FD9\u4E2A\u72B6\u6001\u4E4B\u95F4\u7684\u8F6C\u6362\u9700\u8981<strong>\u76F8\u5BF9\u6BD4\u8F83\u957F\u7684\u65F6\u95F4\uFF0C\u65F6\u95F4\u6210\u672C\u76F8\u5BF9\u8F83\u9AD8</strong>\uFF0C\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u65E9\u671F\u7684 synchronized \u6548\u7387\u4F4E\u7684\u539F\u56E0\u3002</p><h4 id="_1-2-1-java-6\u4E4B\u540E\u6548\u7387\u63D0\u9AD8\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_1-2-1-java-6\u4E4B\u540E\u6548\u7387\u63D0\u9AD8\u539F\u56E0" aria-hidden="true">#</a> 1.2.1 Java 6\u4E4B\u540E\u6548\u7387\u63D0\u9AD8\u539F\u56E0</h4><p>\u5E86\u5E78\u7684\u662F\u5728 Java 6 \u4E4B\u540E Java \u5B98\u65B9\u5BF9\u4ECE JVM \u5C42\u9762\u5BF9synchronized \u8F83\u5927\u4F18\u5316\uFF0C\u6240\u4EE5\u73B0\u5728\u7684 synchronized \u9501\u6548\u7387\u4E5F\u4F18\u5316\u5F97\u5F88\u4E0D\u9519\u4E86\u3002<strong>JDK1.6\u5BF9\u9501\u7684\u5B9E\u73B0\u5F15\u5165\u4E86\u5927\u91CF\u7684\u4F18\u5316\uFF0C\u5982\u81EA\u65CB\u9501\u3001\u9002\u5E94\u6027\u81EA\u65CB\u9501\u3001\u9501\u6D88\u9664\u3001\u9501\u7C97\u5316\u3001\u504F\u5411\u9501\u3001\u8F7B\u91CF\u7EA7\u9501\u7B49\u6280\u672F\u6765\u51CF\u5C11\u9501\u64CD\u4F5C\u7684\u5F00\u9500\u3002</strong></p><h2 id="_2-synchronized\u5173\u952E\u5B57\u6700\u4E3B\u8981\u7684\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-synchronized\u5173\u952E\u5B57\u6700\u4E3B\u8981\u7684\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> 2. synchronized\u5173\u952E\u5B57\u6700\u4E3B\u8981\u7684\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F</h2><ul><li><strong>\u4FEE\u9970\u5B9E\u4F8B\u65B9\u6CD5:</strong> \u4F5C\u7528\u4E8E\u5F53\u524D\u5BF9\u8C61\u5B9E\u4F8B\u52A0\u9501\uFF0C\u8FDB\u5165\u540C\u6B65\u4EE3\u7801\u524D\u8981\u83B7\u5F97\u5F53\u524D\u5BF9\u8C61\u5B9E\u4F8B\u7684\u9501</li><li><strong>\u4FEE\u9970\u9759\u6001\u65B9\u6CD5:</strong> :\u4E5F\u5C31\u662F\u7ED9\u5F53\u524D\u7C7B\u52A0\u9501\uFF0C\u4F1A\u4F5C\u7528\u4E8E\u7C7B\u7684\u6240\u6709\u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u56E0\u4E3A\u9759\u6001\u6210\u5458\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u662F\u7C7B\u6210\u5458\uFF08 static \u8868\u660E\u8FD9\u662F\u8BE5\u7C7B\u7684\u4E00\u4E2A\u9759\u6001\u8D44\u6E90\uFF0C\u4E0D\u7BA1new\u4E86\u591A\u5C11\u4E2A\u5BF9\u8C61\uFF0C\u53EA\u6709\u4E00\u4EFD\uFF09\u3002\u6240\u4EE5\u5982\u679C\u4E00\u4E2A\u7EBF\u7A0BA\u8C03\u7528\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u975E\u9759\u6001 synchronized \u65B9\u6CD5\uFF0C\u800C\u7EBF\u7A0BB\u9700\u8981\u8C03\u7528\u8FD9\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u6240\u5C5E\u7C7B\u7684\u9759\u6001 synchronized \u65B9\u6CD5\uFF0C\u662F\u5141\u8BB8\u7684\uFF0C\u4E0D\u4F1A\u53D1\u751F\u4E92\u65A5\u73B0\u8C61\uFF0C<strong>\u56E0\u4E3A\u8BBF\u95EE\u9759\u6001 synchronized \u65B9\u6CD5\u5360\u7528\u7684\u9501\u662F\u5F53\u524D\u7C7B\u7684\u9501\uFF0C\u800C\u8BBF\u95EE\u975E\u9759\u6001 synchronized \u65B9\u6CD5\u5360\u7528\u7684\u9501\u662F\u5F53\u524D\u5B9E\u4F8B\u5BF9\u8C61\u9501</strong>\u3002</li><li><strong>\u4FEE\u9970\u4EE3\u7801\u5757:</strong> \u6307\u5B9A\u52A0\u9501\u5BF9\u8C61\uFF0C\u5BF9\u7ED9\u5B9A\u5BF9\u8C61\u52A0\u9501\uFF0C\u8FDB\u5165\u540C\u6B65\u4EE3\u7801\u5E93\u524D\u8981\u83B7\u5F97\u7ED9\u5B9A\u5BF9\u8C61\u7684\u9501\u3002</li></ul><p><strong>\u603B\u7ED3\uFF1A</strong> synchronized \u5173\u952E\u5B57\u52A0\u5230 static \u9759\u6001\u65B9\u6CD5\u548C synchronized(class)\u4EE3\u7801\u5757\u4E0A\u90FD\u662F\u662F\u7ED9 Class \u7C7B\u4E0A\u9501\u3002synchronized \u5173\u952E\u5B57\u52A0\u5230\u5B9E\u4F8B\u65B9\u6CD5\u4E0A\u662F\u7ED9\u5BF9\u8C61\u5B9E\u4F8B\u4E0A\u9501\u3002\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528 synchronized(String a) \u56E0\u4E3AJVM\u4E2D\uFF0C\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u5177\u6709\u7F13\u5B58\u529F\u80FD\uFF01</p><h3 id="_2-1-\u5355\u4F8B\u6A21\u5F0F\u4E2D\u53CC\u5C42\u6821\u9A8C\u9501" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5355\u4F8B\u6A21\u5F0F\u4E2D\u53CC\u5C42\u6821\u9A8C\u9501" aria-hidden="true">#</a> 2.1 \u5355\u4F8B\u6A21\u5F0F\u4E2D\u53CC\u5C42\u6821\u9A8C\u9501</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Singleton {

    private volatile static Singleton instance;

    private Singleton() {
    }

    public static Singleton getiInstance() {
       //\u5148\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u5DF2\u7ECF\u5B9E\u4F8B\u8FC7\uFF0C\u6CA1\u6709\u5B9E\u4F8B\u5316\u8FC7\u624D\u8FDB\u5165\u52A0\u9501\u4EE3\u7801
        if (instance == null) {
            //\u7C7B\u5BF9\u8C61\u52A0\u9501
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\uFF0C\u9700\u8981\u6CE8\u610F instance \u91C7\u7528 volatile \u5173\u952E\u5B57\u4FEE\u9970\u4E5F\u662F\u5F88\u6709\u5FC5\u8981\u3002</p><p>instance = new Singleton(); <strong>\u8FD9\u6BB5\u4EE3\u7801\u5176\u5B9E\u662F\u5206\u4E3A\u4E09\u6B65\u6267\u884C</strong>\uFF1A</p><ol><li>\u4E3A instance \u5206\u914D\u5185\u5B58\u7A7A\u95F4</li><li>\u521D\u59CB\u5316 instance</li><li>\u5C06 instance \u6307\u5411\u5206\u914D\u7684\u5185\u5B58\u5730\u5740</li></ol><p>\u4F46\u662F\u7531\u4E8E JVM \u5177\u6709\u6307\u4EE4\u91CD\u6392\u7684\u7279\u6027\uFF0C\u6267\u884C\u987A\u5E8F\u6709<strong>\u53EF\u80FD\u53D8\u6210 1-&gt;3-&gt;2</strong>\u3002\u6307\u4EE4\u91CD\u6392\u5728\u5355\u7EBF\u7A0B\u73AF\u5883\u4E0B\u4E0D\u4F1A\u51FA\u5148\u95EE\u9898\uFF0C\u4F46\u662F\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u4F1A\u5BFC\u81F4\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u5F97\u8FD8\u6CA1\u6709\u521D\u59CB\u5316\u7684\u5B9E\u4F8B\u3002\u4F8B\u5982\uFF0C\u7EBF\u7A0B T1 \u6267\u884C\u4E86 1 \u548C 3\uFF0C\u6B64\u65F6 T2 \u8C03\u7528 getInstance() \u540E\u53D1\u73B0 instance \u4E0D\u4E3A\u7A7A\uFF0C\u56E0\u6B64\u8FD4\u56DE instance\uFF0C\u4F46\u6B64\u65F6 instance \u8FD8\u672A\u88AB\u521D\u59CB\u5316\u3002</p><p><strong>\u4F7F\u7528 volatile \u53EF\u4EE5\u7981\u6B62 JVM \u7684\u6307\u4EE4\u91CD\u6392\uFF0C\u4FDD\u8BC1\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u4E5F\u80FD\u6B63\u5E38\u8FD0\u884C\u3002</strong></p><h2 id="_3-synchronized-\u5173\u952E\u5B57\u7684\u5E95\u5C42\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-synchronized-\u5173\u952E\u5B57\u7684\u5E95\u5C42\u539F\u7406" aria-hidden="true">#</a> 3. synchronized \u5173\u952E\u5B57\u7684\u5E95\u5C42\u539F\u7406</h2><p><strong>synchronized \u5173\u952E\u5B57\u5E95\u5C42\u539F\u7406\u5C5E\u4E8E JVM \u5C42\u9762\u3002</strong></p><h3 id="_3-1-synchronized-\u540C\u6B65\u8BED\u53E5\u5757\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_3-1-synchronized-\u540C\u6B65\u8BED\u53E5\u5757\u7684\u60C5\u51B5" aria-hidden="true">#</a> 3.1 <strong>synchronized \u540C\u6B65\u8BED\u53E5\u5757\u7684\u60C5\u51B5</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class SynchronizedDemo {
	public void method() {
		synchronized (this) {
			System.out.println(&quot;synchronized \u4EE3\u7801\u5757&quot;);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7 JDK \u81EA\u5E26\u7684 javap \u547D\u4EE4\u67E5\u770B SynchronizedDemo \u7C7B\u7684\u76F8\u5173\u5B57\u8282\u7801\u4FE1\u606F\uFF1A\u9996\u5148\u5207\u6362\u5230\u7C7B\u7684\u5BF9\u5E94\u76EE\u5F55\u6267\u884C <code>javac SynchronizedDemo.java</code> \u547D\u4EE4\u751F\u6210\u7F16\u8BD1\u540E\u7684 .class \u6587\u4EF6\uFF0C\u7136\u540E\u6267\u884C<code>javap -c -s -v -l SynchronizedDemo.class</code>\u3002</p><p>![image-20190915222328171](/Users/zhangshengzhong/Library/Application Support/typora-user-images/image-20190915222328171.png)</p><p>\u4ECE\u4E0A\u9762\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF1A</p><p><strong>synchronized \u540C\u6B65\u8BED\u53E5\u5757\u7684\u5B9E\u73B0\u4F7F\u7528\u7684\u662F monitorenter \u548C monitorexit \u6307\u4EE4\uFF0C\u5176\u4E2D monitorenter \u6307\u4EE4\u6307\u5411\u540C\u6B65\u4EE3\u7801\u5757\u7684\u5F00\u59CB\u4F4D\u7F6E\uFF0Cmonitorexit \u6307\u4EE4\u5219\u6307\u660E\u540C\u6B65\u4EE3\u7801\u5757\u7684\u7ED3\u675F\u4F4D\u7F6E\u3002</strong> \u5F53\u6267\u884C monitorenter \u6307\u4EE4\u65F6\uFF0C\u7EBF\u7A0B\u8BD5\u56FE\u83B7\u53D6\u9501\u4E5F\u5C31\u662F\u83B7\u53D6 monitor(monitor\u5BF9\u8C61\u5B58\u5728\u4E8E\u6BCF\u4E2AJava\u5BF9\u8C61\u7684\u5BF9\u8C61\u5934\u4E2D\uFF0Csynchronized \u9501\u4FBF\u662F\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u83B7\u53D6\u9501\u7684\uFF0C\u4E5F\u662F\u4E3A\u4EC0\u4E48Java\u4E2D\u4EFB\u610F\u5BF9\u8C61\u53EF\u4EE5\u4F5C\u4E3A\u9501\u7684\u539F\u56E0) \u7684\u6301\u6709\u6743\u3002\u5F53\u8BA1\u6570\u5668\u4E3A0\u5219\u53EF\u4EE5\u6210\u529F\u83B7\u53D6\uFF0C\u83B7\u53D6\u540E\u5C06\u9501\u8BA1\u6570\u5668\u8BBE\u4E3A1\u4E5F\u5C31\u662F\u52A01\u3002\u76F8\u5E94\u7684\u5728\u6267\u884C monitorexit \u6307\u4EE4\u540E\uFF0C\u5C06\u9501\u8BA1\u6570\u5668\u8BBE\u4E3A0\uFF0C\u8868\u660E\u9501\u88AB\u91CA\u653E\u3002\u5982\u679C\u83B7\u53D6\u5BF9\u8C61\u9501\u5931\u8D25\uFF0C\u90A3\u5F53\u524D\u7EBF\u7A0B\u5C31\u8981\u963B\u585E\u7B49\u5F85\uFF0C\u76F4\u5230\u9501\u88AB\u53E6\u5916\u4E00\u4E2A\u7EBF\u7A0B\u91CA\u653E\u4E3A\u6B62\u3002</p><h3 id="_3-2-ynchronized-\u4FEE\u9970\u65B9\u6CD5\u7684\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_3-2-ynchronized-\u4FEE\u9970\u65B9\u6CD5\u7684\u7684\u60C5\u51B5" aria-hidden="true">#</a> 3.2 <strong>ynchronized \u4FEE\u9970\u65B9\u6CD5\u7684\u7684\u60C5\u51B5</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class SynchronizedDemo2 {
	public synchronized void method() {
		System.out.println(&quot;synchronized \u65B9\u6CD5&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190915222505021.png" alt="image-20190915222505021"></p><p>synchronized \u4FEE\u9970\u7684\u65B9\u6CD5\u5E76\u6CA1\u6709 monitorenter \u6307\u4EE4\u548C monitorexit \u6307\u4EE4\uFF0C\u53D6\u5F97\u4EE3\u4E4B\u7684\u786E\u5B9E\u662F ACC_SYNCHRONIZED \u6807\u8BC6\uFF0C\u8BE5\u6807\u8BC6\u6307\u660E\u4E86\u8BE5\u65B9\u6CD5\u662F\u4E00\u4E2A\u540C\u6B65\u65B9\u6CD5\uFF0C<strong>JVM \u901A\u8FC7\u8BE5 ACC_SYNCHRONIZED \u8BBF\u95EE\u6807\u5FD7\u6765\u8FA8\u522B\u4E00\u4E2A\u65B9\u6CD5\u662F\u5426\u58F0\u660E\u4E3A\u540C\u6B65\u65B9\u6CD5</strong>\uFF0C\u4ECE\u800C\u6267\u884C\u76F8\u5E94\u7684\u540C\u6B65\u8C03\u7528\u3002</p><h2 id="_4-jdk1-6-\u4E4B\u540E\u7684synchronized-\u5173\u952E\u5B57\u5E95\u5C42\u505A\u4E86\u54EA\u4E9B\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_4-jdk1-6-\u4E4B\u540E\u7684synchronized-\u5173\u952E\u5B57\u5E95\u5C42\u505A\u4E86\u54EA\u4E9B\u4F18\u5316" aria-hidden="true">#</a> 4. JDK1.6 \u4E4B\u540E\u7684synchronized \u5173\u952E\u5B57\u5E95\u5C42\u505A\u4E86\u54EA\u4E9B\u4F18\u5316</h2><p>JDK1.6 \u5BF9\u9501\u7684\u5B9E\u73B0\u5F15\u5165\u4E86\u5927\u91CF\u7684\u4F18\u5316\uFF0C\u5982\u504F\u5411\u9501\u3001\u8F7B\u91CF\u7EA7\u9501\u3001\u81EA\u65CB\u9501\u3001\u9002\u5E94\u6027\u81EA\u65CB\u9501\u3001\u9501\u6D88\u9664\u3001\u9501\u7C97\u5316\u7B49\u6280\u672F\u6765\u51CF\u5C11\u9501\u64CD\u4F5C\u7684\u5F00\u9500\u3002</p><p>\u9501\u4E3B\u8981\u5B58\u5728\u56DB\u79CD\u72B6\u6001\uFF0C\u4F9D\u6B21\u662F\uFF1A\u65E0\u9501\u72B6\u6001\u3001\u504F\u5411\u9501\u72B6\u6001\u3001\u8F7B\u91CF\u7EA7\u9501\u72B6\u6001\u3001\u91CD\u91CF\u7EA7\u9501\u72B6\u6001\uFF0C\u4ED6\u4EEC\u4F1A\u968F\u7740\u7ADE\u4E89\u7684\u6FC0\u70C8\u800C\u9010\u6E10\u5347\u7EA7\u3002\u6CE8\u610F\u9501\u53EF\u4EE5\u5347\u7EA7\u4E0D\u53EF\u964D\u7EA7\uFF0C\u8FD9\u79CD\u7B56\u7565\u662F\u4E3A\u4E86\u63D0\u9AD8\u83B7\u5F97\u9501\u548C\u91CA\u653E\u9501\u7684\u6548\u7387\u3002</p><h2 id="_5-\u8C08\u8C08-synchronized\u548Creentrantlock-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_5-\u8C08\u8C08-synchronized\u548Creentrantlock-\u7684\u533A\u522B" aria-hidden="true">#</a> 5. \u8C08\u8C08 synchronized\u548CReentrantLock \u7684\u533A\u522B</h2><p><strong>\u2460 \u4E24\u8005\u90FD\u662F\u53EF\u91CD\u5165\u9501</strong></p><p>\u4E24\u8005\u90FD\u662F\u53EF\u91CD\u5165\u9501\u3002\u201C\u53EF\u91CD\u5165\u9501\u201D\u6982\u5FF5\u662F\uFF1A\u81EA\u5DF1\u53EF\u4EE5\u518D\u6B21\u83B7\u53D6\u81EA\u5DF1\u7684\u5185\u90E8\u9501\u3002\u6BD4\u5982\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u5F97\u4E86\u67D0\u4E2A\u5BF9\u8C61\u7684\u9501\uFF0C\u6B64\u65F6\u8FD9\u4E2A\u5BF9\u8C61\u9501\u8FD8\u6CA1\u6709\u91CA\u653E\uFF0C\u5F53\u5176\u518D\u6B21\u60F3\u8981\u83B7\u53D6\u8FD9\u4E2A\u5BF9\u8C61\u7684\u9501\u7684\u65F6\u5019\u8FD8\u662F\u53EF\u4EE5\u83B7\u53D6\u7684\uFF0C\u5982\u679C\u4E0D\u53EF\u9501\u91CD\u5165\u7684\u8BDD\uFF0C\u5C31\u4F1A\u9020\u6210\u6B7B\u9501\u3002\u540C\u4E00\u4E2A\u7EBF\u7A0B\u6BCF\u6B21\u83B7\u53D6\u9501\uFF0C\u9501\u7684\u8BA1\u6570\u5668\u90FD\u81EA\u589E1\uFF0C\u6240\u4EE5\u8981\u7B49\u5230\u9501\u7684\u8BA1\u6570\u5668\u4E0B\u964D\u4E3A0\u65F6\u624D\u80FD\u91CA\u653E\u9501\u3002</p><p><strong>\u2461 synchronized \u4F9D\u8D56\u4E8E JVM \u800C ReentrantLock \u4F9D\u8D56\u4E8E API</strong></p><p>synchronized \u662F\u4F9D\u8D56\u4E8E JVM \u5B9E\u73B0\u7684\uFF0C\u524D\u9762\u6211\u4EEC\u4E5F\u8BB2\u5230\u4E86 \u865A\u62DF\u673A\u56E2\u961F\u5728 JDK1.6 \u4E3A synchronized \u5173\u952E\u5B57\u8FDB\u884C\u4E86\u5F88\u591A\u4F18\u5316\uFF0C\u4F46\u662F\u8FD9\u4E9B\u4F18\u5316\u90FD\u662F\u5728\u865A\u62DF\u673A\u5C42\u9762\u5B9E\u73B0\u7684\uFF0C\u5E76\u6CA1\u6709\u76F4\u63A5\u66B4\u9732\u7ED9\u6211\u4EEC\u3002ReentrantLock \u662F JDK \u5C42\u9762\u5B9E\u73B0\u7684\uFF08\u4E5F\u5C31\u662F API \u5C42\u9762\uFF0C\u9700\u8981 lock() \u548C unlock() \u65B9\u6CD5\u914D\u5408 try/finally \u8BED\u53E5\u5757\u6765\u5B8C\u6210\uFF09\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u67E5\u770B\u5B83\u7684\u6E90\u4EE3\u7801\uFF0C\u6765\u770B\u5B83\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u3002</p><p><strong>\u2462 ReentrantLock \u6BD4 synchronized \u589E\u52A0\u4E86\u4E00\u4E9B\u9AD8\u7EA7\u529F\u80FD</strong></p><p>\u76F8\u6BD4synchronized\uFF0CReentrantLock\u589E\u52A0\u4E86\u4E00\u4E9B\u9AD8\u7EA7\u529F\u80FD\u3002\u4E3B\u8981\u6765\u8BF4\u4E3B\u8981\u6709\u4E09\u70B9\uFF1A<strong>\u2460\u7B49\u5F85\u53EF\u4E2D\u65AD\uFF1B\u2461\u53EF\u5B9E\u73B0\u516C\u5E73\u9501\uFF1B\u2462\u53EF\u5B9E\u73B0\u9009\u62E9\u6027\u901A\u77E5\uFF08\u9501\u53EF\u4EE5\u7ED1\u5B9A\u591A\u4E2A\u6761\u4EF6\uFF09</strong></p><ul><li><strong>ReentrantLock\u63D0\u4F9B\u4E86\u4E00\u79CD\u80FD\u591F\u4E2D\u65AD\u7B49\u5F85\u9501\u7684\u7EBF\u7A0B\u7684\u673A\u5236</strong>\uFF0C\u901A\u8FC7lock.lockInterruptibly()\u6765\u5B9E\u73B0\u8FD9\u4E2A\u673A\u5236\u3002\u4E5F\u5C31\u662F\u8BF4\u6B63\u5728\u7B49\u5F85\u7684\u7EBF\u7A0B\u53EF\u4EE5\u9009\u62E9\u653E\u5F03\u7B49\u5F85\uFF0C\u6539\u4E3A\u5904\u7406\u5176\u4ED6\u4E8B\u60C5\u3002</li><li><strong>ReentrantLock\u53EF\u4EE5\u6307\u5B9A\u662F\u516C\u5E73\u9501\u8FD8\u662F\u975E\u516C\u5E73\u9501\u3002\u800Csynchronized\u53EA\u80FD\u662F\u975E\u516C\u5E73\u9501\u3002\u6240\u8C13\u7684\u516C\u5E73\u9501\u5C31\u662F\u5148\u7B49\u5F85\u7684\u7EBF\u7A0B\u5148\u83B7\u5F97\u9501\u3002</strong> ReentrantLock\u9ED8\u8BA4\u60C5\u51B5\u662F\u975E\u516C\u5E73\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7 ReentrantLock\u7C7B\u7684<code>ReentrantLock(boolean fair)</code>\u6784\u9020\u65B9\u6CD5\u6765\u5236\u5B9A\u662F\u5426\u662F\u516C\u5E73\u7684\u3002</li><li>synchronized\u5173\u952E\u5B57\u4E0Ewait()\u548Cnotify()/notifyAll()\u65B9\u6CD5\u76F8\u7ED3\u5408\u53EF\u4EE5\u5B9E\u73B0\u7B49\u5F85/\u901A\u77E5\u673A\u5236\uFF0CReentrantLock\u7C7B\u5F53\u7136\u4E5F\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u4F46\u662F\u9700\u8981\u501F\u52A9\u4E8ECondition\u63A5\u53E3\u4E0EnewCondition() \u65B9\u6CD5\u3002Condition\u662FJDK1.5\u4E4B\u540E\u624D\u6709\u7684\uFF0C\u5B83\u5177\u6709\u5F88\u597D\u7684\u7075\u6D3B\u6027\uFF0C\u6BD4\u5982\u53EF\u4EE5\u5B9E\u73B0\u591A\u8DEF\u901A\u77E5\u529F\u80FD\u4E5F\u5C31\u662F\u5728\u4E00\u4E2ALock\u5BF9\u8C61\u4E2D\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2ACondition\u5B9E\u4F8B\uFF08\u5373\u5BF9\u8C61\u76D1\u89C6\u5668\uFF09\uFF0C<strong>\u7EBF\u7A0B\u5BF9\u8C61\u53EF\u4EE5\u6CE8\u518C\u5728\u6307\u5B9A\u7684Condition\u4E2D\uFF0C\u4ECE\u800C\u53EF\u4EE5\u6709\u9009\u62E9\u6027\u7684\u8FDB\u884C\u7EBF\u7A0B\u901A\u77E5\uFF0C\u5728\u8C03\u5EA6\u7EBF\u7A0B\u4E0A\u66F4\u52A0\u7075\u6D3B\u3002 \u5728\u4F7F\u7528notify()/notifyAll()\u65B9\u6CD5\u8FDB\u884C\u901A\u77E5\u65F6\uFF0C\u88AB\u901A\u77E5\u7684\u7EBF\u7A0B\u662F\u7531 JVM \u9009\u62E9\u7684\uFF0C\u7528ReentrantLock\u7C7B\u7ED3\u5408Condition\u5B9E\u4F8B\u53EF\u4EE5\u5B9E\u73B0\u201C\u9009\u62E9\u6027\u901A\u77E5\u201D</strong> \uFF0C\u8FD9\u4E2A\u529F\u80FD\u975E\u5E38\u91CD\u8981\uFF0C\u800C\u4E14\u662FCondition\u63A5\u53E3\u9ED8\u8BA4\u63D0\u4F9B\u7684\u3002\u800Csynchronized\u5173\u952E\u5B57\u5C31\u76F8\u5F53\u4E8E\u6574\u4E2ALock\u5BF9\u8C61\u4E2D\u53EA\u6709\u4E00\u4E2ACondition\u5B9E\u4F8B\uFF0C\u6240\u6709\u7684\u7EBF\u7A0B\u90FD\u6CE8\u518C\u5728\u5B83\u4E00\u4E2A\u8EAB\u4E0A\u3002\u5982\u679C\u6267\u884CnotifyAll()\u65B9\u6CD5\u7684\u8BDD\u5C31\u4F1A\u901A\u77E5\u6240\u6709\u5904\u4E8E\u7B49\u5F85\u72B6\u6001\u7684\u7EBF\u7A0B\u8FD9\u6837\u4F1A\u9020\u6210\u5F88\u5927\u7684\u6548\u7387\u95EE\u9898\uFF0C\u800CCondition\u5B9E\u4F8B\u7684signalAll()\u65B9\u6CD5 \u53EA\u4F1A\u5524\u9192\u6CE8\u518C\u5728\u8BE5Condition\u5B9E\u4F8B\u4E2D\u7684\u6240\u6709\u7B49\u5F85\u7EBF\u7A0B\u3002</li></ul><p>\u5982\u679C\u4F60\u60F3\u4F7F\u7528\u4E0A\u8FF0\u529F\u80FD\uFF0C\u90A3\u4E48\u9009\u62E9ReentrantLock\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\u3002</p><p><strong>\u2463 \u6027\u80FD\u5DF2\u4E0D\u662F\u9009\u62E9\u6807\u51C6</strong></p>`,45),o=[a];function t(d,c){return e(),i("div",null,o)}const v=n(s,[["render",t],["__file","java-thread-x-key-synchronized2.html.vue"]]);export{v as default};
