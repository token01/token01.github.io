import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,a,b as e,d as r,e as s,r as c}from"./app.af6359e2.js";const d={},o=s(`<h2 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> Elasticsearch</h2><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2><ul><li><p>Cluster：集群。</p><p>ES可以作为一个独立的单个搜索服务器。不过，为了处理大型数据集，实现容错和高可用性，ES可以运行在许多互相合作的服务器上。这些服务器的集合称为集群。</p></li><li><p>Node：节点。 形成集群的每个服务器称为节点。</p></li><li><p>Shard：分片。</p><p>当有大量的文档时，由于内存的限制、磁盘处理能力不足、无法足够快的响应客户端的请求等，一个节点可能不够。这种情况下，数据可以分为较小的分片。每个分片放到不同的服务器上。 当你查询的索引分布在多个分片上时，ES会把查询发送给每个相关的分片，并将结果组合在一起，而应用程序并不知道分片的存在。即：这个过程对用户来说是透明的。</p></li><li><p>Replia：副本。</p><p>为提高查询吞吐量或实现高可用性，可以使用分片副本。 副本是一个分片的精确复制，每个分片可以有零个或多个副本。ES中可以有许多相同的分片，其中之一被选择更改索引操作，这种特殊的分片称为主分片。 当主分片丢失时，如：该分片所在的数据不可用时，集群将副本提升为新的主分片。</p></li><li><p>全文检索。</p><p>全文检索就是对一篇文章进行索引，可以根据关键字搜索，类似于mysql里的like语句。 全文索引就是把内容根据词的意义进行分词，然后分别创建索引，例如”你们的激情是因为什么事情来的” 可能会被分词成：“你们“，”激情“，“什么事情“，”来“ 等token，这样当你搜索“你们” 或者 “激情” 都会把这句搜出来。</p></li></ul><table><thead><tr><th>Elasticsearch</th><th>MySQL</th></tr></thead><tbody><tr><td>Index</td><td>Database</td></tr><tr><td>Type</td><td>Table</td></tr><tr><td>Mapping</td><td>Schema</td></tr><tr><td>Document</td><td>Row</td></tr><tr><td>Field</td><td>Column</td></tr><tr><td>Query DSL</td><td>SQL</td></tr><tr><td>Restful API</td><td>insert select update delete</td></tr></tbody></table><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><ul><li>Docker</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> elasticsearch <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always elasticsearch:6.8.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),p={href:"http://gateway.infinilabs.com/zh/",target:"_blank",rel:"noopener noreferrer"},u=s(`<h3 id="常用api" tabindex="-1"><a class="header-anchor" href="#常用api" aria-hidden="true">#</a> 常用API</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 所有节点
<span class="token function">curl</span> http://127.0.0.1:9200/_cat/nodes?v
-- 所有 index
<span class="token function">curl</span> <span class="token string">&#39;localhost:9200/_cat/indices?v&#39;</span>

-- 导入导出 https://github.com/elasticsearch-dump/elasticsearch-dump
elasticdump <span class="token parameter variable">--input</span><span class="token operator">=</span>http://localhost:9200/index-law <span class="token parameter variable">--output</span><span class="token operator">=</span>my_index.json <span class="token parameter variable">--type</span><span class="token operator">=</span>data

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="备份" tabindex="-1"><a class="header-anchor" href="#备份" aria-hidden="true">#</a> 备份</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/elasticsearch/elasticsearch.yml
path.repo: <span class="token string">&quot;/data/elasticsearch/backup

curl -XPOST -H &#39;Content-Type: application/json&#39; http://127.0.0.1:9200/_snapshot/my_es_backup -d &#39;
{
    &quot;</span><span class="token builtin class-name">type</span><span class="token string">&quot;: &quot;</span>fs<span class="token string">&quot;,
    &quot;</span>settings<span class="token string">&quot;: {
        &quot;</span>location<span class="token string">&quot;: &quot;</span>/home/sdb1/my_es_backup<span class="token string">&quot;,
        &quot;</span>max_snapshot_bytes_per_sec<span class="token string">&quot; : &quot;</span>100mb<span class="token string">&quot;,
        &quot;</span>max_restore_bytes_per_sec<span class="token string">&quot; : &quot;</span>100mb<span class="token string">&quot;,
        &quot;</span>compress<span class="token string">&quot; : true
    }
}&#39;

-- 查看
curl -XGET &quot;</span>localhost:9200/_snapshot/my_es_backup/_all?pretty&quot;
-- 恢复
<span class="token function">curl</span> <span class="token parameter variable">-XPOST</span> http://127.0.0.1:9200/_snapshot/my_es_backup/snapshot_1/_restore?wait_for_completion<span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elasticsearch-head" tabindex="-1"><a class="header-anchor" href="#elasticsearch-head" aria-hidden="true">#</a> elasticsearch-head</h2><blockquote><p>A web front end for an elastic search cluster</p></blockquote><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3><ul><li>Docker</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> es-head <span class="token parameter variable">-p</span> <span class="token number">9100</span>:9100 mobz/elasticsearch-head:5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>跨域问题 <code>No &#39;Access-Control-Allow-Origin&#39;</code></p><p><strong>修改 elasticsearch 配置文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/share/elasticsearch/config/elasticsearch.yml

<span class="token comment">#开启跨域访问支持，默认为false</span>
http.cors.enabled: <span class="token boolean">true</span>
<span class="token comment">#跨域访问允许的域名地址，(允许所有域名)以上使用正则</span>
http.cors.allow-origin: /.*/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>请求方式错误 <code>406 Not Acceptable</code></p><p>一般在使用elasticsearch 6.x 才会出现，因为<code>elasticsearch-head</code> 只适配到了5，而6.X 请求方式变成 <code>json</code> 方式请求<br><strong>修改 elasticsearch-head 源码</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/src/app/_site/vendor.js

将
contentType: <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span>
改为
contentType: <span class="token string">&quot;application/json&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,10);function h(v,m){const n=c("ExternalLinkIcon");return i(),l("div",null,[o,a("ul",null,[a("li",null,[e("极限网关 "),a("a",p,[e("http://gateway.infinilabs.com/zh/"),r(n)])])]),u])}const g=t(d,[["render",h],["__file","Elasticsearch.html.vue"]]);export{g as default};
