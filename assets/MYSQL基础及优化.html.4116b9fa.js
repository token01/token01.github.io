import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as t,a as n,b as s,d,e,r as o}from"./app.af6359e2.js";const r="/assets/mysql-explain.b1e580b8.png",c={},p=e(`<h2 id="基本常用操作" tabindex="-1"><a class="header-anchor" href="#基本常用操作" aria-hidden="true">#</a> 基本常用操作</h2><h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库" aria-hidden="true">#</a> 创建数据库</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--创建数据库，并设定编码集为utf8</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> database_name <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span> utf8 <span class="token keyword">COLLATE</span> utf8_general_ci<span class="token punctuation">;</span>
<span class="token comment">--但其实MySQL中的UTF-8不是正在的UTF-8应该转为utf8mb4,如果已经设置了建议修改</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> database_name <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci<span class="token punctuation">;</span>
<span class="token comment">-- For each database:</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> database_name <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8mb4 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8mb4_unicode_ci<span class="token punctuation">;</span>
<span class="token comment">-- For each table:</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name <span class="token keyword">CONVERT</span> <span class="token keyword">TO</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci<span class="token punctuation">;</span>
<span class="token comment">-- For each column:</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name CHANGE column_name column_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">191</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci<span class="token punctuation">;</span>
<span class="token comment">-- 删除数据库</span>
<span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> database_name<span class="token punctuation">;</span>

<span class="token comment">--查看当前登录用户</span>
<span class="token keyword">select</span> <span class="token keyword">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/etc/mysql/my.cnf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[client]
default-character-set = utf8mb4

[mysql]
default-character-set = utf8mb4

[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; SHOW VARIABLES WHERE Variable_name LIKE &#39;character\\_set\\_%&#39; OR Variable_name LIKE &#39;collation%&#39;;
+--------------------------+--------------------+
| Variable_name            | Value              |
+--------------------------+--------------------+
| character_set_client     | utf8mb4            |
| character_set_connection | utf8mb4            |
| character_set_database   | utf8mb4            |
| character_set_filesystem | binary             |
| character_set_results    | utf8mb4            |
| character_set_server     | utf8mb4            |
| character_set_system     | utf8               |
| collation_connection     | utf8mb4_unicode_ci |
| collation_database       | utf8mb4_unicode_ci |
| collation_server         | utf8mb4_unicode_ci |
+--------------------------+--------------------+
10 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建用户并授权" tabindex="-1"><a class="header-anchor" href="#创建用户并授权" aria-hidden="true">#</a> 创建用户并授权</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--创建了一个名为：test 密码为：1234 的用户</span>
 <span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">&#39;test&#39;</span><span class="token variable">@&#39;localhost&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;1234&#39;</span><span class="token punctuation">;</span>


<span class="token comment">--删除用户“test”</span>
<span class="token keyword">drop</span> <span class="token keyword">user</span> <span class="token string">&#39;test&#39;</span><span class="token variable">@&#39;localhost&#39;</span> <span class="token punctuation">;</span>
<span class="token comment">--若创建的用户允许任何电脑登陆，删除用户如下</span>
<span class="token keyword">drop</span> <span class="token keyword">user</span> <span class="token string">&#39;test&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>


<span class="token comment">--修改用户密码</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">set</span> password <span class="token keyword">for</span> test <span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">&#39;1122&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">set</span> password <span class="token keyword">for</span> root<span class="token variable">@localhost</span> <span class="token operator">=</span> password<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">--mysql8删除了password函数,需要刷新</span>
<span class="token keyword">alter</span> <span class="token keyword">user</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;123123&#39;</span>
<span class="token comment">--需要刷新</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">update</span>  mysql<span class="token punctuation">.</span><span class="token keyword">user</span> <span class="token keyword">set</span>  password<span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">&#39;1234&#39;</span><span class="token punctuation">)</span>  <span class="token keyword">where</span> <span class="token keyword">user</span><span class="token operator">=</span><span class="token string">&#39;test&#39;</span>


<span class="token comment">--授予用户通过任意IP对数据库“testdb”的全部权限</span>
<span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">privileges</span> <span class="token keyword">on</span> testdb<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;test&#39;</span><span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;1234&#39;</span><span class="token punctuation">;</span>  
<span class="token keyword">grant</span> <span class="token keyword">create</span><span class="token punctuation">,</span><span class="token keyword">alter</span><span class="token punctuation">,</span><span class="token keyword">drop</span><span class="token punctuation">,</span><span class="token keyword">select</span><span class="token punctuation">,</span><span class="token keyword">insert</span><span class="token punctuation">,</span><span class="token keyword">update</span><span class="token punctuation">,</span><span class="token keyword">delete</span> <span class="token keyword">on</span> testdb<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> test<span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span> <span class="token keyword">WITH</span> <span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span><span class="token punctuation">;</span>

<span class="token comment">--刷新权限</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>

<span class="token comment">--查看用户权限</span>
<span class="token keyword">show</span> grants <span class="token keyword">for</span> test<span class="token punctuation">;</span>
<span class="token comment">--查看表状态</span>
<span class="token keyword">show</span> <span class="token keyword">table</span> <span class="token keyword">status</span> \\G

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="忘记root密码" tabindex="-1"><a class="header-anchor" href="#忘记root密码" aria-hidden="true">#</a> 忘记ROOT密码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/my.cnf

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span> 下添加 skip-grant-tables

重启 mysql 服务

MySQL<span class="token operator">&gt;</span> UPDATE mysql.user SET <span class="token assign-left variable">Password</span><span class="token operator">=</span>PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;新密码&#39;</span><span class="token punctuation">)</span> where <span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span> 下删除 skip-grant-tables

重启 mysql 服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入导出数据" tabindex="-1"><a class="header-anchor" href="#导入导出数据" aria-hidden="true">#</a> 导入导出数据</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#导出</span>
mysqldump <span class="token parameter variable">-udbuser</span> <span class="token parameter variable">-p</span> 数据库名 <span class="token operator">&gt;</span> dbname.sql
mysqldump <span class="token parameter variable">-udbuser</span> <span class="token parameter variable">-p</span> 数据库名 表名<span class="token operator">&gt;</span> dbname_tables.sql
mysqldump <span class="token parameter variable">-udbuser</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-d</span> --add-drop-table dbname <span class="token operator">&gt;</span>d:/dbname_db.sql
<span class="token comment">#-d 没有数据 --add-drop-table 在每个create语句之前增加一个drop table</span>

<span class="token comment">#导入</span>
login mysql then:
<span class="token builtin class-name">source</span> /home/ubuntu/dbname.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2><ul><li>数据库查询语言（DQL Data Query Language）：select</li><li>数据库定义语言（DDL Data Definition Language）：create database、drop database 、create table、drop table、alter</li><li>数据库操作语言（DML Data Manipulation Language）：update 、insert 、delete</li></ul><h2 id="索引基础" tabindex="-1"><a class="header-anchor" href="#索引基础" aria-hidden="true">#</a> 索引基础</h2><p>与CPU类似为了提高性能，CPU寄存器向内存取数据时可能会连带数据的邻居数据一起取出，这是CPU的<code>缓存行对齐</code>以64个字节为一个基本单位取数据。（这部分在其他笔记中记载了，可以在整个笔记中搜索<code>缓存行对齐</code>查找）。MySQL 数据库也使用类似的方式，减少对磁盘的IO次数以提高性能，MySQL 中使用了 <code>Page</code> 页，在InnoDb引擎中页的大小是16KB，插入数据时进行排序形成多个页目录，最终形成索引结构 <code>B+树</code> 优化查询效率。<br> 在联合索引中排序有这么一个原则，从左往右依次比较大小也就是<code>最左前缀匹配原则</code>。如联合索引(key1,key2,key3)，相当于创建了（key1）、(key1,key2)和(key1,key2,key3)三个索引，这就是最左匹配原则</p><h3 id="聚簇索引" tabindex="-1"><a class="header-anchor" href="#聚簇索引" aria-hidden="true">#</a> 聚簇索引</h3><p>所谓聚簇索引，就是将索引和数据放到一起，找到索引也就找到了数据，我们刚才看到的B+树索引就是一种聚簇索引，而非聚簇索引就是将数据和索引分开，查找时需要先查找到索引，然后通过索引回表找到相应的数据。InnoDB有且只有一个聚簇索引，而MyISAM中都是非聚簇索引。</p><h3 id="覆盖索引" tabindex="-1"><a class="header-anchor" href="#覆盖索引" aria-hidden="true">#</a> 覆盖索引</h3><p>覆盖索引（covering index）指一个查询语句的执行只用从索引中就能够取得，不必从数据表中读取。也可以称之为实现了索引覆盖。 当一条查询语句符合覆盖索引条件时，MySQL只需要通过索引就可以返回查询所需要的数据，这样避免了查到索引后再返回表操作，减少I/O提高效率。 如，表covering_index_sample中有一个普通索引 idx_key1_key2(key1,key2)。当我们通过SQL语句：select key2 from covering_index_sample where key1 = &#39;keytest&#39;;的时候，就可以通过覆盖索引查询，无需回表。</p><h3 id="索引下推" tabindex="-1"><a class="header-anchor" href="#索引下推" aria-hidden="true">#</a> 索引下推</h3><p>MySQL5.6引入了索引下推优化，默认开启，使用<code>SET optimizer_switch = &#39;index_condition_pushdown=off&#39;</code>;可以将其关闭。<br> 官方文档中给的例子和解释如下： <code>people</code>表中<code>（zipcode，lastname，firstname）</code>构成一个索引</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> people <span class="token keyword">WHERE</span> zipcode<span class="token operator">=</span><span class="token string">&#39;95054&#39;</span> <span class="token operator">AND</span> lastname <span class="token operator">LIKE</span> <span class="token string">&#39;%etrunia%&#39;</span> <span class="token operator">AND</span> address <span class="token operator">LIKE</span> <span class="token string">&#39;%Main Street%&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有使用索引下推技术，则MySQL会通过<code>zipcode=&#39;95054&#39;</code>从存储引擎中查询对应的数据，返回到MySQL服务端，然后MySQL服务端基于<code>lastname LIKE &#39;%etrunia%&#39;和address LIKE &#39;%Main Street%&#39;</code>来判断数据是否符合条件。<br> 如果使用了索引下推技术，则MYSQL首先会返回符合<code>zipcode=&#39;95054&#39;</code>的索引，然后根据<code>lastname LIKE &#39;%etrunia%&#39;和address LIKE &#39;%Main Street%&#39;</code>来判断索引是否符合条件。如果符合条件，则根据该索引来定位对应的数据，如果不符合，则直接reject掉。 有了索引下推优化，<strong>可以在有like条件查询的情况下，减少回表次数</strong>。</p><p><code>SELECT COUNT(*) FROM table_name</code> 也不一定会进行全表扫描。针对无 where_clause 的 <code>COUNT(*)</code>，MySQL 是有优化的，优化器会选择成本最小的辅助索引查询计数，其实反而性能最高。可以使用<code>EXPLAIN SELECT COUNT(*) FROM table_name</code> 验证</p><h3 id="查询优化器" tabindex="-1"><a class="header-anchor" href="#查询优化器" aria-hidden="true">#</a> 查询优化器</h3><p>一条SQL语句的查询，可以有不同的执行方案，至于最终选择哪种方案，需要通过优化器进行选择，选择执行成本最低的方案。 在一条单表查询语句真正执行之前，MySQL的查询优化器会找出执行该语句所有可能使用的方案，对比之后找出成本最低的方案。这个成本最低的方案就是所谓的执行计划。 优化过程大致如下：</p><ol><li>根据搜索条件，找出所有可能使用的索引</li><li>计算全表扫描的代价</li><li>计算使用不同索引执行查询的代价</li><li>对比各种执行方案的代价，找出成本最低的那一个</li></ol><p>所以并非创建索引就一定会通过索引来查找</p><h3 id="测试表" tabindex="-1"><a class="header-anchor" href="#测试表" aria-hidden="true">#</a> 测试表</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 创建表
CREATE TABLE \`person\` (
  \`id\` bigint(20) NOT NULL AUTO_INCREMENT,
  \`name\` varchar(255) NOT NULL,
  \`score\` int(11) NOT NULL,
  \`create_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`),
  KEY \`name_score\` (\`name\`(191),\`score\`),
  KEY \`create_time\` (\`create_time\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
-- 使用存储过程模拟100W条数据
CREATE PROCEDURE insert_person()
begin
    declare c_id integer default 1;
    while c_id&lt;=1000000 do
    insert into person values(c_id, concat(&#39;name&#39;,c_id), c_id+100, date_sub(NOW(), interval c_id second));
    set c_id=c_id+1;
    end while;
end
-- 执行存储过程
call insert_person()
-- 查询索引使用情况
explain select count(*) from person;
+----+-------------+--------+-------+---------------+-------------+---------+------+---------+-------------+
| id | select_type | table  | type  | possible_keys | key         | key_len | ref  | rows    | Extra       |
+----+-------------+--------+-------+---------------+-------------+---------+------+---------+-------------+
|  1 | SIMPLE      | person | index | NULL          | create_time | 4       | NULL | 3023554 | Using index |
+----+-------------+--------+-------+---------------+-------------+---------+------+---------+-------------+

-- optimizer trace 功能来查看优化器生成计划的整个过程
SET optimizer_trace=&quot;enabled=on&quot;;
SELECT create_time FROM person WHERE NAME &gt;&#39;name84059&#39; AND create_time &gt; &#39;2020-05-23 14:39:18&#39;;
SELECT * FROM information_schema.OPTIMIZER_TRACE;
SET optimizer_trace=&quot;enabled=off&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="mysql explain" loading="lazy"></p><h2 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h2><ul><li>读未提交（read uncommitted）：一个事务还没有提交时，它做的变更就能被别的事务看到。</li><li>读提交（read committed）：一个事物提交之后，它做的变更才会被其他事务看到。</li><li>可重复读（repeatable read）：一个事物执行过程中看到的数据，总是跟这个事务在启动时看到的数据是一致的。未提交变更对其他事务也是不可见的。</li><li>串行化（serializable）：对于同一行记录，写会加“写锁”，读会加“读锁”，当出现锁冲突时，后访问的事务需要等前一个事务执行完成，才能继续执行。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--默认REPEATABLE-READ</span>
<span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;tx_isolation&#39;</span><span class="token punctuation">;</span>
<span class="token comment">--查看没有提交的事务</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> information_schema<span class="token punctuation">.</span>innodb_trx<span class="token punctuation">;</span>
<span class="token comment">--查找持续时间超过 60s 的事务,一般都超时了，默认 50s</span>
<span class="token comment">--my.ini innodb_lock_wait_timeout = 50</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> information_schema<span class="token punctuation">.</span>innodb_trx <span class="token keyword">where</span> TIME_TO_SEC<span class="token punctuation">(</span>timediff<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>trx_started<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">60</span><span class="token punctuation">;</span>
<span class="token comment">--查看进程</span>
<span class="token keyword">show</span> <span class="token keyword">full</span> processlist<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>事务A</th><th>|</th><th>事务B</th></tr></thead><tbody><tr><td>开启事务 <code>mysql&gt; start transaction;</code></td><td>|</td><td>开启事务</td></tr><tr><td>查询得到值：1 <code>select val from mytable where id=1;</code></td><td>|</td><td>查询得到值：1</td></tr><tr><td></td><td>|</td><td>将1改成2 <code>update mytable set val=2 where id=1</code></td></tr><tr><td>查询得到值：v1</td><td>|</td><td></td></tr><tr><td></td><td>|</td><td>提交事务B <code>commit</code></td></tr><tr><td>查询得到值：v2</td><td>|</td><td></td></tr><tr><td>提交事务A</td><td>|</td><td></td></tr><tr><td>查询得到值：v3</td><td>v</td><td></td></tr></tbody></table><p>在不同的隔离级别下，事务A查到的结果是不一样的：</p><ul><li><strong>读未提交</strong>: v1 的值是2，这时候事务 B 虽然还没有提交，但是结果已经被事务 A 看到了，因此 v2、v3 也都是2。</li><li><strong>读提交</strong>: v1 是1，v2 的值是 2 ，事务 B 的更新在提交后才被事务 A 看到。所以 v3 的值也是 2。</li><li><strong>可重复读</strong>: v1、v2是 1，v3 是2，之所以 v2 还是1，遵循的就是这个要求：事务在执行期间看到的数据前后必须是一致的。</li><li><strong>串行化</strong>: 则在事务 B 执行“将 1 改成 2”的时候，会被锁住，直到事务 A 提交后，事务 B 才可以继续执行，所以从事务 A 的角度看，v1、v2的值是1，v3的值是2。</li></ul><p>在实现上，数据库里面会创建一个视图，访问的时候以视图的逻辑结果为准。在“可重复读”隔离级别下，这个视图是在事务启动时创建的，整个事务存在期间都用这个视图。在“读提交”隔离级别下，这个视图是在每个SQL语句开始执行的时候创建的。这里需要注意的是，“读未提交”隔离界别下直接返回记录上的最新值，没有视图概念；而“串行化”隔离级别下直接用加锁的方式来避免并行访问。</p><ul><li><strong>脏读</strong> : 当前事务可以查看到别的事务未提交的数据（侧重点在于别的事务未提交）。</li><li><strong>不可重读</strong> : 不可重读的侧重点在于更新修改数据。表示在同一事务中，查询相同的数据范围时，同一个数据资源莫名的改变了。</li><li><strong>幻读</strong> : 幻读的侧重点在于新增和删除。表示在同一事务中，使用相同的查询语句，第二次查询时，莫名的多出了一些之前不存在数据，或者莫名的不见了一些数据。</li></ul><p>事务的隔离级别越高，隔离性越强，所拥有的问题越少，并发能力越弱，所以，我们可以用如下表格进行总结</p><table><thead><tr><th>隔离级别\\问题</th><th>脏读 (Dirty)</th><th>不可重读 (NonRepeatable Read)</th><th>幻读 （Phantom Read）</th></tr></thead><tbody><tr><td>读未提交</td><td>o</td><td>o</td><td>o</td></tr><tr><td>读提交</td><td>x</td><td>o</td><td>o</td></tr><tr><td>可重复读</td><td>x</td><td>x</td><td>o</td></tr><tr><td>串行化</td><td>x</td><td>x</td><td>x</td></tr></tbody></table><h2 id="binlog" tabindex="-1"><a class="header-anchor" href="#binlog" aria-hidden="true">#</a> Binlog</h2><p>MySQL二进制日志,用于记录用户对数据库操作的SQL语句（(除了数据查询语句）信息。可以使用mysqlbin命令查看二进制日志的内容。</p><h3 id="模式分类" tabindex="-1"><a class="header-anchor" href="#模式分类" aria-hidden="true">#</a> 模式分类</h3><ul><li><p>STATMENT<br> 基于SQL语句的复制(statement-based replication, SBR)，每一条会修改数据的sql语句会记录到binlog中。</p><ul><li>优点：不需要记录每一条SQL语句与每行的数据变化，这样子binlog的日志也会比较少，减少了磁盘IO，提高性能。</li><li>缺点：在某些情况下会导致master-slave中的数据不一致(如sleep()函数， last_insert_id()，以及user-defined functions(udf)等会出现问题)</li></ul></li><li><p>ROW<br> 基于行的复制(row-based replication, RBR)：不记录每一条SQL语句的上下文信息，仅需记录哪条数据被修改了，修改成了什么样子了。</p><ul><li>优点：不会出现某些特定情况下的存储过程、或function、或trigger的调用和触发无法被正确复制的问题。</li><li>缺点：会产生大量的日志，尤其是alter table的时候会让日志暴涨。</li></ul></li><li><p>MIXED<br> 混合模式复制(mixed-based replication, MBR)：以上两种模式的混合使用，一般的复制使用STATEMENT模式保存binlog，对于STATEMENT模式无法复制的操作使用ROW模式保存binlog，MySQL会根据执行的SQL语句选择日志保存方式。</p></li></ul><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-cnf line-numbers-mode" data-ext="cnf"><pre class="language-cnf"><code>[mysqld]

#设置日志格式
binlog_format = mixed

#设置日志路径，注意路经需要mysql用户有权限写
log-bin = /data/mysql/logs/mysql-bin.log

#设置binlog清理时间
expire_logs_days = 7

#binlog每个日志文件大小
max_binlog_size = 100m

#binlog缓存大小
binlog_cache_size = 4m

#最大binlog缓存大小
max_binlog_cache_size = 512m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><ul><li><code>show variables like &#39;log_%&#39;</code> 查看binlog日志是否开启</li><li><code>show master logs</code> 查看所有binlog日志列表</li><li><code>mysqlbinlog mysql-bin.0000001</code> 查看具体日志</li></ul><h2 id="sql基础优化" tabindex="-1"><a class="header-anchor" href="#sql基础优化" aria-hidden="true">#</a> SQL基础优化</h2><h3 id="limit-1000000-10" tabindex="-1"><a class="header-anchor" href="#limit-1000000-10" aria-hidden="true">#</a> LIMIT 1000000,10</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT *
FROM   operation
WHERE  type = &#39;SQLStats&#39;
       AND name = &#39;SlowLog&#39;
ORDER  BY create_time
LIMIT  1000, 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况在type, name, create_time字段上加组合索引，这样条件排序都能有效的利用到索引，性能迅速提升。<br> 但当 LIMIT 子句变成 “LIMIT 1000000,10”，会发现我只取10条记录为什么还是慢，知道数据库也并不知道第1000000条记录从什么地方开始，即使有索引也需要从头计算一次。<br> 解决：在前端数据浏览翻页，或者大数据分批导出等场景下，是可以将上一页的最大值当成参数作为查询条件的。SQL重新设计如下,查询时间基本固定，不会随着数据量的增长而发生变化。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT   *
FROM     operation
WHERE    type = &#39;SQLStats&#39;
AND      name = &#39;SlowLog&#39;
AND      create_time &gt; &#39;2017-03-16 14:00:00&#39;
ORDER BY create_time limit 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐式转换" tabindex="-1"><a class="header-anchor" href="#隐式转换" aria-hidden="true">#</a> 隐式转换</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>mysql&gt; explain extended SELECT *
     &gt; FROM   my_balance b
     &gt; WHERE  b.bpn = 14000000123
     &gt;       AND b.isverified IS NULL ;
mysql&gt; show warnings;
| Warning | 1739 | Cannot use ref access on index &#39;bpn&#39; due to type or collation conversion on field &#39;bpn&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段bpn的定义为varchar(20)，MySQL的策略是将字符串转换为数字之后再比较。<strong>函数作用于表字段，索引失效</strong>。</p><h3 id="exists语句" tabindex="-1"><a class="header-anchor" href="#exists语句" aria-hidden="true">#</a> EXISTS语句</h3><p>MySQL对待EXISTS子句时，仍然采用嵌套子查询的执行方式。如下面的SQL语句：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT *
FROM   my_neighbor n
       LEFT JOIN my_neighbor_apply sra
              ON n.id = sra.neighbor_id
                 AND sra.user_id = &#39;xxx&#39;
WHERE  n.topic_status &lt; 4
       AND EXISTS(SELECT 1
                  FROM   message_info m
                  WHERE  n.id = m.neighbor_id
                         AND m.inuser = &#39;xxx&#39;)
       AND n.topic_type &lt;&gt; 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+--------------------+-------+------+-----+------------------------------------------+---------+-------+---------+ -----+
| id | select_type        | table | type | possible_keys     | key   | key_len | ref   | rows    | Extra   |
+----+--------------------+-------+------+ -----+------------------------------------------+---------+-------+---------+ -----+
|  1 | PRIMARY            | n     | ALL  |  | NULL     | NULL    | NULL  | 1086041 | Using where                   |
|  1 | PRIMARY            | sra   | ref  |  | idx_user_id | 123     | const |       1 | Using where          |
|  2 | DEPENDENT SUBQUERY | m     | ref  |  | idx_message_info   | 122     | const |       1 | Using index condition; Using where |
+----+--------------------+-------+------+ -----+------------------------------------------+---------+-------+---------+ -----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>去掉exists更改为join，能够避免嵌套子查询，将执行时间从1.93秒降低为1毫秒。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT *
FROM   my_neighbor n
       INNER JOIN message_info m
               ON n.id = m.neighbor_id
                  AND m.inuser = &#39;xxx&#39;
       LEFT JOIN my_neighbor_apply sra
              ON n.id = sra.neighbor_id
                 AND sra.user_id = &#39;xxx&#39;
WHERE  n.topic_status &lt; 4
       AND n.topic_type &lt;&gt; 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+-------------+-------+--------+ -----+------------------------------------------+---------+ -----+------+ -----+
| id | select_type | table | type   | possible_keys     | key       | key_len | ref   | rows | Extra                 |
+----+-------------+-------+--------+ -----+------------------------------------------+---------+ -----+------+ -----+
|  1 | SIMPLE      | m     | ref    | | idx_message_info   | 122     | const    |    1 | Using index condition |
|  1 | SIMPLE      | n     | eq_ref | | PRIMARY   | 122     | ighbor_id |    1 | Using where      |
|  1 | SIMPLE      | sra   | ref    | | idx_user_id | 123     | const     |    1 | Using where           |
+----+-------------+-------+--------+ -----+------------------------------------------+---------+ -----+------+ -----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),u={href:"https://developer.aliyun.com/article/72501",target:"_blank",rel:"noopener noreferrer"},v=e(`<h3 id="select-执行顺序" tabindex="-1"><a class="header-anchor" href="#select-执行顺序" aria-hidden="true">#</a> SELECT 执行顺序</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">FROM</span>
<span class="token operator">&lt;</span>表名<span class="token operator">&gt;</span> <span class="token comment"># 选取表，将多个表数据通过笛卡尔积变成一个表。</span>
<span class="token keyword">ON</span>
<span class="token operator">&lt;</span>筛选条件<span class="token operator">&gt;</span> <span class="token comment"># 对笛卡尔积的虚表进行筛选</span>
<span class="token keyword">JOIN</span> <span class="token operator">&lt;</span><span class="token keyword">join</span><span class="token punctuation">,</span> <span class="token keyword">left</span> <span class="token keyword">join</span><span class="token punctuation">,</span> <span class="token keyword">right</span> <span class="token keyword">join</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token keyword">join</span>表<span class="token operator">&gt;</span> <span class="token comment"># 指定join，用于添加数据到on之后的虚表中，例如left join会将左表的剩余数据添加到虚表中</span>
<span class="token keyword">WHERE</span>
<span class="token operator">&lt;</span><span class="token keyword">where</span>条件<span class="token operator">&gt;</span> <span class="token comment"># 对上述虚表进行筛选</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
<span class="token operator">&lt;</span>分组条件<span class="token operator">&gt;</span> <span class="token comment"># 分组</span>
<span class="token operator">&lt;</span><span class="token function">SUM</span><span class="token punctuation">(</span><span class="token punctuation">)</span>等聚合函数<span class="token operator">&gt;</span> <span class="token comment"># 用于having子句进行判断，在书写上这类聚合函数是写在having判断里面的</span>
<span class="token keyword">HAVING</span>
<span class="token operator">&lt;</span>分组筛选<span class="token operator">&gt;</span> <span class="token comment"># 对分组后的结果进行聚合筛选</span>
<span class="token keyword">SELECT</span>
<span class="token operator">&lt;</span>返回数据列表<span class="token operator">&gt;</span> <span class="token comment"># 返回的单列必须在group by子句中，聚合函数除外</span>
<span class="token keyword">DISTINCT</span>
<span class="token comment"># 数据除重</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
<span class="token operator">&lt;</span>排序条件<span class="token operator">&gt;</span> <span class="token comment"># 排序</span>
<span class="token keyword">LIMIT</span>
<span class="token operator">&lt;</span>行数限制<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>比较运算符能用 “=”就不用“&lt;&gt;”</li></ul><blockquote><p>“=”增加了索引的使用几率</p></blockquote><ul><li>明知只有一条查询结果，使用 “LIMIT 1”</li></ul><blockquote><p>“LIMIT 1”可以避免全表扫描，找到对应结果就不会再继续扫描</p></blockquote><ul><li>为列选择合适的数据类型</li></ul><blockquote><p>能用TINYINT就不用SMALLINT，能用SMALLINT就不用INT，磁盘和内存消耗越小越好</p></blockquote><ul><li><p>最好都加默认值</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>--尽量避免进行 null 值的判断，会导致数据库引擎放弃索引进行全表扫描
SELECT * FROM t WHERE score IS NULL
--有默认值就能解决这问题
SELECT * FROM t WHERE score = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将大的DELETE，UPDATE or INSERT 查询变成多个小查询</p></li></ul><blockquote><p>能写一个几十行、几百行的SQL语句是不是显得逼格很高？然而，为了达到更好的性能以及更好的数据控制，你可以将他们变成多个小查询。</p></blockquote><ul><li>使用UNION ALL 代替 UNION</li></ul><blockquote><p>前提是结果集允许重复。因为 UNION ALL 不去重，效率高于 UNION。</p></blockquote><ul><li>为获得相同结果集的多次执行，请保持SQL语句前后一致</li></ul><blockquote><p>这样做的目的是为了充分利用查询缓冲。 比如根据地域和产品id查询产品价格，第一次使用了：</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> price <span class="token keyword">from</span> orders <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token string">&#39;123&#39;</span> <span class="token operator">and</span> regin<span class="token operator">=</span><span class="token string">&#39;beijing&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>那么第二次同样的查询，请保持以上语句的一致性，比如不要将where语句里面的id和region位置调换顺序。</p></blockquote><ul><li>尽量避免使用 <code>SELECT *</code></li></ul><blockquote><p>如果不查询表中所有的列，尽量避免使用 <code>SELECT *</code>，因为它会进行全表扫描，不能有效利用索引，增大了数据库服务器的负担，以及它与应用程序客户端之间的网络IO开销。</p></blockquote><ul><li><p>尽量避免在字段开头模糊查询</p><ul><li>❌<code>WHERE username LIKE &#39;%陈%&#39;</code></li><li>✅<code>WHERE username LIKE &#39;陈%&#39;</code></li><li>考虑使用 FullText 全文索引，用 match against 检索</li><li>考虑使用函数 <code>INSTR</code></li><li>考虑使用 ElasticSearch、Solr</li></ul></li><li><p>尽量避免 <code>in</code></p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 不走索引
select * from A where A.id in (select id from B);
-- 走索引
select * from A where exists (select * from B where B.id = A.id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>WHERE , JOIN , ORDER BY 子句里面的列尽量被索引</p><blockquote><p>只是“尽量”，并不是说所有的列。根据实际情况进行调整，因为有时索引太多也会降低性能。</p></blockquote><blockquote><p>order by 条件要与 where 中条件一致，否则 order by 不会利用索引进行排序</p></blockquote></li><li><p>使用 LIMIT 实现分页逻辑</p></li></ul><blockquote><p>不仅提高了性能，同时减少了不必要的数据库和应用间的网络传输</p></blockquote><p>如果条件允许，可以使用 <code>Cursor Pagination</code> 优化 <code>limit</code> 效率</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tablename <span class="token keyword">limit</span> <span class="token number">20</span> <span class="token keyword">offset</span> <span class="token number">800001</span>
<span class="token number">10</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">12.80</span> sec<span class="token punctuation">)</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tablename <span class="token keyword">where</span> id<span class="token operator">&gt;</span><span class="token number">800000</span> <span class="token keyword">limit</span> <span class="token number">20</span>
<span class="token number">10</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 EXPLAIN 关键字去查看执行计划</li></ul><blockquote><p>EXPLAIN 可以检查索引使用情况以及扫描的行。</p></blockquote>`,24);function m(k,b){const a=o("ExternalLinkIcon");return l(),t("div",null,[p,n("p",null,[s("出自："),n("a",u,[s("https://developer.aliyun.com/article/72501"),d(a)])]),v])}const y=i(c,[["render",m],["__file","MYSQL基础及优化.html.vue"]]);export{y as default};
