import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as s,b as c,d as l,f as p,r as i}from"./app.ec219279.js";const o={},r=p(`<h1 id="es\u8BE6\u89E3-docker\u5B89\u88C5elk" tabindex="-1"><a class="header-anchor" href="#es\u8BE6\u89E3-docker\u5B89\u88C5elk" aria-hidden="true">#</a> ES\u8BE6\u89E3 - Docker\u5B89\u88C5Elk</h1><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803230055166.png" alt="image-20220803230055166"></p><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>ELK\u662FElasticsearch+Logstash+Kibana\u7B80\u79F0</p><ul><li>Elasticsearch \u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684\u641C\u7D22\u548C\u5206\u6790\u5F15\u64CE\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5168\u6587\u68C0\u7D22\u3001\u7ED3\u6784\u5316\u68C0\u7D22\u548C\u5206\u6790\uFF0C\u5E76\u80FD\u5C06\u8FD9\u4E09\u8005\u7ED3\u5408\u8D77\u6765\u3002Elasticsearch \u57FA\u4E8E Lucene \u5F00\u53D1\uFF0C\u73B0\u5728\u662F\u4F7F\u7528\u6700\u5E7F\u7684\u5F00\u6E90\u641C\u7D22\u5F15\u64CE\u4E4B\u4E00\u3002</li><li>Logstash \u7B80\u5355\u6765\u8BF4\u5C31\u662F\u4E00\u6839\u5177\u5907\u5B9E\u65F6\u6570\u636E\u4F20\u8F93\u80FD\u529B\u7684\u7BA1\u9053\uFF0C\u8D1F\u8D23\u5C06\u6570\u636E\u4FE1\u606F\u4ECE\u7BA1\u9053\u7684\u8F93\u5165\u7AEF\u4F20\u8F93\u5230\u7BA1\u9053\u7684\u8F93\u51FA\u7AEF\uFF0C\u4E0E\u6B64\u540C\u65F6\u8FD9\u6839\u7BA1\u9053\u8FD8\u53EF\u4EE5\u8BA9\u4F60\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u5728\u4E2D\u95F4\u52A0\u4E0A\u6EE4\u7F51\uFF0CLogstash\u63D0\u4F9B\u4E86\u5F88\u591A\u529F\u80FD\u5F3A\u5927\u7684\u6EE4\u7F51\u4EE5\u6EE1\u8DB3\u4F60\u7684\u5404\u79CD\u5E94\u7528\u573A\u666F\u3002</li><li>Kibana \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5206\u6790\u4E0E\u53EF\u89C6\u5316\u5E73\u53F0\uFF0C\u8BBE\u8BA1\u51FA\u6765\u7528\u4E8E\u548CElasticsearch\u4E00\u8D77\u4F7F\u7528\u7684\u3002\u4F60\u53EF\u4EE5\u7528kibana\u641C\u7D22\u3001\u67E5\u770B\u3001\u4EA4\u4E92\u5B58\u653E\u5728Elasticsearch\u7D22\u5F15\u91CC\u7684\u6570\u636E\uFF0C\u4F7F\u7528\u5404\u79CD\u4E0D\u540C\u7684\u56FE\u6807\u3001\u8868\u683C\u3001\u5730\u56FE\u7B49\uFF0Ckibana\u80FD\u591F\u5F88\u8F7B\u6613\u7684\u5C55\u793A\u9AD8\u7EA7\u6570\u636E\u5206\u6790\u4E0E\u53EF\u89C6\u5316\u3002</li></ul><h2 id="_2-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5" aria-hidden="true">#</a> 2. \u5B89\u88C5</h2><h3 id="_2-1-\u7F16\u5199docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7F16\u5199docker-compose-yml" aria-hidden="true">#</a> 2.1 \u7F16\u5199docker-compose.yml</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> elasticsearch<span class="token punctuation">:</span>7.7.0  <span class="token comment">#\u955C\u50CF</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> elk_elasticsearch  <span class="token comment">#\u5B9A\u4E49\u5BB9\u5668\u540D\u79F0</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always  <span class="token comment">#\u5F00\u673A\u542F\u52A8\uFF0C\u5931\u8D25\u4E5F\u4F1A\u4E00\u76F4\u91CD\u542F</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;cluster.name=elasticsearch&quot;</span> <span class="token comment">#\u8BBE\u7F6E\u96C6\u7FA4\u540D\u79F0\u4E3Aelasticsearch</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token comment">#\u4EE5\u5355\u4E00\u8282\u70B9\u6A21\u5F0F\u542F\u52A8</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms512m -Xmx1024m&quot;</span> <span class="token comment">#\u8BBE\u7F6E\u4F7F\u7528jvm\u5185\u5B58\u5927\u5C0F</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./elasticsearch/plugins<span class="token punctuation">:</span>/usr/share/elasticsearch/plugins <span class="token comment">#\u63D2\u4EF6\u6587\u4EF6\u6302\u8F7D</span>
      <span class="token punctuation">-</span> ./elasticsearch/data<span class="token punctuation">:</span>/usr/share/elasticsearch/data <span class="token comment">#\u6570\u636E\u6587\u4EF6\u6302\u8F7D</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9200<span class="token punctuation">:</span><span class="token number">9200</span>
  <span class="token key atrule">kibana</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> kibana<span class="token punctuation">:</span>7.7.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> elk_kibana
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elasticsearch <span class="token comment">#kibana\u5728elasticsearch\u542F\u52A8\u4E4B\u540E\u518D\u542F\u52A8</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ELASTICSEARCH_URL=http<span class="token punctuation">:</span>//elasticsearch<span class="token punctuation">:</span><span class="token number">9200</span> <span class="token comment">#\u8BBE\u7F6E\u8BBF\u95EEelasticsearch\u7684\u5730\u5740</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5601<span class="token punctuation">:</span><span class="token number">5601</span>
  <span class="token key atrule">logstash</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> logstash<span class="token punctuation">:</span>7.7.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> elk_logstash
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./logstash/logstash<span class="token punctuation">-</span>springboot.conf<span class="token punctuation">:</span>/usr/share/logstash/pipeline/logstash.conf <span class="token comment">#\u6302\u8F7Dlogstash\u7684\u914D\u7F6E\u6587\u4EF6</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elasticsearch <span class="token comment">#kibana\u5728elasticsearch\u542F\u52A8\u4E4B\u540E\u518D\u542F\u52A8</span>
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elasticsearch<span class="token punctuation">:</span>es <span class="token comment">#\u53EF\u4EE5\u7528es\u8FD9\u4E2A\u57DF\u540D\u8BBF\u95EEelasticsearch\u670D\u52A1</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 4560<span class="token punctuation">:</span><span class="token number">4560</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u65B0\u5EFAlogstash-logstash-springboot-conf\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B0\u5EFAlogstash-logstash-springboot-conf\u6587\u4EF6" aria-hidden="true">#</a> 2.2 \u65B0\u5EFAlogstash/logstash-springboot.conf\u6587\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>input <span class="token punctuation">{</span>
  tcp <span class="token punctuation">{</span>
    <span class="token parameter">mode</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;server&quot;</span>
    <span class="token parameter">host</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;0.0.0.0&quot;</span>
    <span class="token parameter">port</span> <span class="token operator">=&gt;</span> <span class="token number">4560</span>
    <span class="token parameter">codec</span> <span class="token operator">=&gt;</span> json_lines
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
  elasticsearch <span class="token punctuation">{</span>
    <span class="token parameter">hosts</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;es:9200&quot;</span>
    <span class="token parameter">index</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;springboot-logstash-%{+YYYY.MM.dd}&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u5B89\u88C5-\u8FD0\u884Celk" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5B89\u88C5-\u8FD0\u884Celk" aria-hidden="true">#</a> 2.3 \u5B89\u88C5\uFF0C\u8FD0\u884CELK</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>docker<span class="token operator">-</span>compose up <span class="token operator">-</span>d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-\u8BBF\u95EEkibana" tabindex="-1"><a class="header-anchor" href="#_2-4-\u8BBF\u95EEkibana" aria-hidden="true">#</a> 2.4 \u8BBF\u95EEKibana</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803230538798.png" alt="image-20220803230538798"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,15),u={href:"https://www.jianshu.com/p/2d78ce6bc504",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const n=i("ExternalLinkIcon");return e(),t("div",null,[r,s("p",null,[s("a",u,[c("docker-compose\u5B89\u88C5ELK"),l(n)])])])}const b=a(o,[["render",d],["__file","elasticsearch-install.html.vue"]]);export{b as default};
