import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as s,d as e,e as t,r as i}from"./app.c2a49a29.js";const l={},u=t(`<h2 id="spring-data-jpa-简介" tabindex="-1"><a class="header-anchor" href="#spring-data-jpa-简介" aria-hidden="true">#</a> Spring Data JPA 简介</h2><p>Spring Data 是 Spring 提供的一个操作数据的框架，Spring Data JPA是 Spring Data 下的一个基于 JPA 标准的操作数据的模块。</p><p>JPA（Java Persistence API）是 Java 亲妈 Sun 公司提出的一套 Java 持久化规范。所谓规范，就是只定义标准，不提供实现。</p><p>JPA 的提出主要是为了整合市面上已有的 ORM 框架，比如说 Hibernate、EclipseLink 等。官方觉得你们搞框架可以，但不要乱搞，得按照我的标准来。</p><p>Spring Data JPA 只是一个抽象层，它上接 JPA 下接 ORM 框架，通过基于 JPA 的 Respository 接口极大地减少了 JPA 作为数据访问方案的代码量，简化了持久层开发并且屏蔽了各大 ORM 框架的差异。</p><p>总结一下就是：</p><ul><li>JPA 是规范，统一了规范才便于使用。</li><li>Hibernate 是 JPA 的实现，是一套成熟的 ORM 框架。</li><li>Spring Data JPA 是 Spring 提出的，它增加了一个抽象层，用来屏蔽不同 ORM 框架的差异。</li></ul><h2 id="spring-boot-整合-spring-data-jpa" tabindex="-1"><a class="header-anchor" href="#spring-boot-整合-spring-data-jpa" aria-hidden="true">#</a> Spring Boot 整合 Spring Data JPA</h2><p>第一步，在 pom.xml 文件中添加 JPA 的 starter 依赖。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，在 application.yml 文件中添加数据库连接信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  datasource:
    username: codingmore-mysql
    password: dddd
    url: jdbc:mysql://xxxx:3306/codingmore-mysql?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=Asia/Shanghai&amp;useSSL=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，新建实体类 User.java。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Entity</span>
<span class="token annotation punctuation">@Table</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>@Data</code> 注解为 lombok 注解，会自动为该类添加 getter/setter 方法。</li><li><code>@Entity</code> 和 <code>@Table</code> 注解都是 JDK 1.5 以后引入的元数据注解，遵循 JPA 规范中定义的查询语言 JPQL，类似 SQL 语法，适用于 Java 类。</li><li><code>@Entity</code> 表明该类是一个实体类，默认使用 ORM 规则，即类名为数据库表名，类中的字段名为数据库表中的字段名。</li><li><code>@Table</code> 注解是非必选项，它的优先级高于 <code>@Entity</code> 注解，比如说 <code>@Entity(name=&quot;user&quot;)</code> 和 <code>@Table(name=&quot;users&quot;)</code> 同时存在的话，对应的表名为 users。</li><li><code>@Id</code> 表名该字段为主键字段，当声明了 @Entity 注解，<code>@Id</code> 就必须也得声明。</li></ul><p>这里推荐大家在 Intellij IDEA 中安装 JPA Buddy 插件，该插件提供了可视化的代码生成器，可以帮我们简化 JPA 的开发工作。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/jpa-dbd461e0-f74b-4914-9f79-37c09bce8db4.png" alt="" loading="lazy"></p><p>安装完 JPA Buddy 插件后，当我们创建好实体类后，会自动打开三个面板：JPA Structure，JPA Palette和JPA Inspector。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/jpa-f8e43568-d286-4da6-a61a-c88b50642824.png" alt="" loading="lazy"></p>`,19),r={href:"https://codingdict.com/blog/1406",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>在JPA Buddy 插件的帮助下，我们其实可以直接在项目的目录上右键选择通过 JPA 的方式创建实体类。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/jpa-ef1d4416-1ac5-4ad8-b305-dafd454cec3b.png" alt="" loading="lazy"></p><p>选择数据表。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/jpa-64ad825d-2e53-4315-9fad-3d053d958303.png" alt="" loading="lazy"></p><p>代码如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Entity</span>
<span class="token annotation punctuation">@Table</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> nullable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> nullable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> length <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> nullable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> length <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> nullable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

    <span class="token comment">// 省略 getter/setter</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四步，新建 UserRepository 接口。</p><p>在项目路径上右键，选择新建 JPA Repository。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/jpa-1114773a-a507-48e9-a1a1-781a89cc517e.png" alt="" loading="lazy"></p><p>生成的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserRepository</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只是简单的对表进行增删改查操作，那么只需要继承 JpaRepository 接口，并传递两个参数（第一个为实体类，第二个为主键类型）即可。</p><p>第五步，新建服务接口 UserService 和实现类 UserServiceImpl。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">User</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserService 定义了 4 个方法：</p><ul><li>findById 根据 ID 查询单条记录</li><li>findAll 查询所有</li><li>save 用来保存和更新</li><li>delete 用来删除</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">UserRepository</span> userRepository<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userRepository<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userRepository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userRepository<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>@Service</code> 注解用在服务层，和 <code>@Component</code> 注解作用类似（通用注解），Spring Boot 会自动扫描该类注解注解的类，并把它们假如到 Spring 容器中。</li><li><code>@Resource</code> 和 <code>@Autowired</code> 注解都是用来自动装配对象的，可以用在字段上，也可以用在 setter 方法上。@Autowired 是 Spring 提供的注解，@Resource 是 Java 提供的注解，也就是说，如果项目没有使用 Spring 框架而是 JFinal 框架，@Resource 注解也是支持的。另外，@Resource 是 byName 自动装配，@Autowired 是 byType 自动装配，当有两个类型完全一样的对象时，@Autowired 就会出错了。</li></ul>`,18),k={href:"https://www.zhihu.com/question/39356740",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>当然了，只是简单的增删改查已经不能提起我们学习的兴趣了，必须得来点不一样的，所以我们在 UserService 接口中添加一个分页的接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实现类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> userRepository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span>pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Pageable 是 Spring 提供的一个分页查询接口，查询的时候只需要传入一个 Pageable 接口的实现类，指定第几页（pageNumber）和页面大小（pageSize）即可。</li><li>Page 是 Spring 提供的一个分页返回结果接口。</li></ul><p>再增加一个自定义查询接口（按照 name 的模糊查询）吧。</p><p>首先是 UserRepository，直接用 JPA Buddy 插件：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/jpa-d4f2619a-85ea-437f-860d-3738669b4582.png" alt="" loading="lazy"></p><p>生成的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserRepository</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByNameLikeIgnoreCase</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后是 UserService 接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByNameLikeIgnoreCase</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后是 UserServiceImpl：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByNameLikeIgnoreCase</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> userRepository<span class="token punctuation">.</span><span class="token function">findByNameLikeIgnoreCase</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试-spring-data-jpa" tabindex="-1"><a class="header-anchor" href="#测试-spring-data-jpa" aria-hidden="true">#</a> 测试 Spring Data JPA</h2><p>在测试类中对服务类中的 5 个接口进行测试，顺带在application.yml 中开启 SQL 语句的输出，看看 JPA 自动生成的 SQL 语句到底长什么样子。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/jpa-a3d8641a-c701-47bb-ae44-f53eb8e05f65.png" alt="" loading="lazy"></p><p>测试类非常简单哈：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">class</span> <span class="token class-name">CodingmoreJpaApplicationTests</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 查询所有</span>
        userService<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>user <span class="token operator">-&gt;</span> log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;查询所有{}&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 新增数据</span>
        userService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王五&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 分页查询</span>
        userService<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">PageRequest</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>user <span class="token operator">-&gt;</span> log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;分页查询{}&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 模糊查询</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;模糊查询{}&quot;</span><span class="token punctuation">,</span>userService<span class="token punctuation">.</span><span class="token function">findByNameLike</span><span class="token punctuation">(</span><span class="token string">&quot;沉默&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 删除</span>
        userService<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从日志当中可以看得出，Spring Data JPA 默认使用的是 Hibernate 框架，这是查询全部：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hibernate: select user0_.id as id1_0_, user0_.age as age2_0_, user0_.name as name3_0_, user0_.password as password4_0_ from user user0_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是保存：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hibernate: insert into user (age, name, password, id) values (?, ?, ?, ?)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是更新：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hibernate: update user set age=?, name=?, password=? where id=?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是分页：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hibernate: select user0_.id as id1_0_, user0_.age as age2_0_, user0_.name as name3_0_, user0_.password as password4_0_ from user user0_ limit ?, ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是模糊查询：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hibernate: select user0_.id as id1_0_, user0_.age as age2_0_, user0_.name as name3_0_, user0_.password as password4_0_ from user user0_ where user0_.name like ? escape ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过，这个模糊查询不符合我们的预期，没有前后的 <code>%</code>，我们可以选择 Spring Data 提供的 <code>@Query</code> 来自定义 SQL 语句。</p><p>默认情况下，<code>@Query</code> 注解会使用 JPQL 来进行查询。举个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span><span class="token string">&quot;select u from User u where u.name like concat(&#39;%&#39;,?1,&#39;%&#39;)&quot;</span><span class="token punctuation">)</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByNameLike</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@Query</code> 注解中的 “User” 为实体类的类名，而非数据库的表名 user，这就是 JPQL 和原生 SQL 的区别。来看原生 SQL 的写法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM user u WHERE u.name like &#39;%&#39;|| ?1 || &#39;%&#39;&quot;</span><span class="token punctuation">,</span>
        nativeQuery <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByNameLikeNativeQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@Query</code> 注解中的 “user” 为数据库表名，另外需要加上参数 nativeQuery，默认值为 false，设为 true 表明开启原生 SQL 查询。注意这次我们用“||”替换了“concat” 方法。</p><p>除了使用 <code>?1</code>、<code>?2</code> 的形式来动态传递参数，我们还可以使用 <code>@Param</code> 注解的形式来传递参数，此时的 SQL 语句中采用 <code>:param</code> 形式来接收参数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span><span class="token string">&quot;select u from User u where u.name like concat(&#39;%&#39;,:name,&#39;%&#39;)&quot;</span><span class="token punctuation">)</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByNameLikeParam</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是删除：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hibernate: delete from user where id=?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="spring-data-jpa-和-mybatis-的对比" tabindex="-1"><a class="header-anchor" href="#spring-data-jpa-和-mybatis-的对比" aria-hidden="true">#</a> Spring Data JPA 和 MyBatis 的对比</h2><hr>`,41),m={href:"https://tobebetterjavaer.com/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,"编程喵",-1),b=n("hr",null,null,-1),f=n("h2",{id:"源码地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#源码地址","aria-hidden":"true"},"#"),s(" 源码地址：")],-1),y={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-jpa",target:"_blank",rel:"noopener noreferrer"},_=n("hr",null,null,-1);function w(j,S){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[n("p",null,[s("更多详细介绍："),n("a",r,[s("https://codingdict.com/blog/1406"),e(a)])])]),d,n("blockquote",null,[n("p",null,[s("苏三写了一篇@Autowired的文章，很不错："),n("a",k,[s("https://www.zhihu.com/question/39356740"),e(a)])])]),v,n("p",null,[s("更多内容，只针对《Java 程序员进阶之路》星球用户开放，需要的小伙伴可以"),n("a",m,[s("戳链接🔗"),e(a)]),s("加入我们的星球，一起学习，一起卷。。"),g,s("🐱是一个 Spring Boot+Vue 的前后端分离项目，融合了市面上绝大多数流行的技术要点。通过学习实战项目，你可以将所学的知识通过实践进行检验、你可以拓宽自己的技术边界，你可以掌握一个真正的实战项目是如何从 0 到 1 的。")]),b,f,n("blockquote",null,[n("ul",null,[n("li",null,[s("编程喵："),n("a",y,[s("https://github.com/itwanger/coding-more"),e(a)])]),n("li",null,[s("Spring Boot 整合 JPA："),n("a",h,[s("https://github.com/itwanger/codingmore-learning/tree/main/codingmore-jpa"),e(a)])])])]),_])}const A=p(l,[["render",w],["__file","jpa.html.vue"]]);export{A as default};
