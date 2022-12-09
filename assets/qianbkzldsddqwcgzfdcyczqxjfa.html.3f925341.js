const e=JSON.parse('{"key":"v-0fcece96","path":"/nice-article/cnblog/qianbkzldsddqwcgzfdcyczqxjfa.html","title":"钱被扣走了，但是订单却未成功！支付掉单该怎么办？","lang":"zh-CN","frontmatter":{"title":"钱被扣走了，但是订单却未成功！支付掉单该怎么办？","shortTitle":"钱被扣走了，但是订单却未成功！支付掉单异常最全解决方案","author":"楼下小黑哥","category":["博客园"],"summary":"掉单异常 一个最常见的支付平台架构关系如下所示： \\" 上图我们是站在第三方支付公司支付角度，如果是自己公司的内部支付系统，那么外部商户这一块其实就是公司内部一些系统，比如说订单系统，而外部支付渠道其实就是第三方支付公司\\" 我们以携程为例，在其上面发起一笔订单支付，将会经过三个系统： 1. 携程创建订单，向第三方支付公司发起支付请求 2. 第三方支付公司创建订","head":[["meta",{"property":"og:url","content":"https://newzone.top/nice-article/cnblog/qianbkzldsddqwcgzfdcyczqxjfa.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"钱被扣走了，但是订单却未成功！支付掉单该怎么办？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:05:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"楼下小黑哥"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:05:30.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"掉单异常","slug":"掉单异常","link":"#掉单异常","children":[]},{"level":2,"title":"外部掉单","slug":"外部掉单","link":"#外部掉单","children":[{"level":3,"title":"增加超时时间","slug":"增加超时时间","link":"#增加超时时间","children":[]},{"level":3,"title":"接收异步通知","slug":"接收异步通知","link":"#接收异步通知","children":[]},{"level":3,"title":"掉单查询","slug":"掉单查询","link":"#掉单查询","children":[]},{"level":3,"title":"对账","slug":"对账","link":"#对账","children":[]}]},{"level":2,"title":"内部掉单异常","slug":"内部掉单异常","link":"#内部掉单异常","children":[{"level":3,"title":"支付公司内部订单关系","slug":"支付公司内部订单关系","link":"#支付公司内部订单关系","children":[]},{"level":3,"title":"内部掉单异常的原因","slug":"内部掉单异常的原因","link":"#内部掉单异常的原因","children":[]},{"level":3,"title":"内部掉单异常解决办法","slug":"内部掉单异常解决办法","link":"#内部掉单异常解决办法","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1669017288000,"updatedTime":1670565930000,"contributors":[{"name":"Kong Ming(空明)","email":"token01@126.com","commits":4}]},"readingTime":{"minutes":9.35,"words":2805},"filePathRelative":"nice-article/cnblog/qianbkzldsddqwcgzfdcyczqxjfa.md","localizedDate":"2022年11月21日"}');export{e as data};