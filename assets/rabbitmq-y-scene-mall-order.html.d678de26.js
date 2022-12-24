const e=JSON.parse('{"key":"v-0e902cd7","path":"/deploy/mq-rabbitmq/rabbitmq-y-scene-mall-order.html","title":"RabbitMQ\u5B9E\u6218 - \u5EF6\u8FDF\u6D88\u606F-\u5546\u57CE\u4E0B\u5355\uFF0C\u8D85\u65F6\u53D6\u6D88\u8BA2\u5355","lang":"zh-CN","frontmatter":{"order":520,"category":["RabbitMQ","MQ"],"summary":"RabbitMQ\u5B9E\u6218 - \u5EF6\u8FDF\u6D88\u606F-\u5546\u57CE\u4E0B\u5355\uFF0C\u8D85\u65F6\u53D6\u6D88\u8BA2\u5355 1. \u4E1A\u52A1\u573A\u666F \\"\u7528\u4E8E\u89E3\u51B3\u7528\u6237\u4E0B\u5355\u4EE5\u540E\uFF0C\u8BA2\u5355\u8D85\u65F6\u5982\u4F55\u53D6\u6D88\u8BA2\u5355\u7684\u95EE\u9898\u3002\\" \\"\u4E3A\u4EC0\u4E48\u9700\u8981\u4F7F\u7528\u5EF6\u8FDF\u961F\u5217\uFF1F\u9002\u7528\u4E8E\u4EC0\u4E48\u573A\u666F\uFF1F \\" \\"\\" \\"\u8BA2\u5355\u4E0B\u5355\u4E4B\u540E30\u5206\u949F\u540E\uFF0C\u5982\u679C\u7528\u6237\u6CA1\u6709\u4ED8\u94B1\uFF0C\u5219\u7CFB\u7EDF\u81EA\u52A8\u53D6\u6D88\u8BA2\u5355\u3002 \u8FD9\u6837\u7C7B\u4F3C\u7684\u9700\u6C42\u662F\u6211\u4EEC\u7ECF\u5E38\u4F1A\u9047\u89C1\u7684\u95EE\u9898\u3002\u6700\u5E38\u7528\u7684\u65B9\u6CD5\u662F\u5B9A\u671F\u8F6E\u8BAD\u6570\u636E\u5E93\uFF0C\u8BBE\u7F6E\u72B6\u6001\u3002\u5728\u6570\u636E\u91CF\u5C0F\u7684\u65F6\u5019\u5E76\u6CA1\u6709\u4EC0\u4E48\u5927\u7684","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/deploy/mq-rabbitmq/rabbitmq-y-scene-mall-order.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"RabbitMQ\u5B9E\u6218 - \u5EF6\u8FDF\u6D88\u606F-\u5546\u57CE\u4E0B\u5355\uFF0C\u8D85\u65F6\u53D6\u6D88\u8BA2\u5355"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T07:29:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T07:29:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4E1A\u52A1\u573A\u666F","slug":"_1-\u4E1A\u52A1\u573A\u666F","link":"#_1-\u4E1A\u52A1\u573A\u666F","children":[]},{"level":2,"title":"2. \u6574\u5408RabbitMQ\u5B9E\u73B0\u5EF6\u8FDF\u6D88\u606F(\u4E0A)","slug":"_2-\u6574\u5408rabbitmq\u5B9E\u73B0\u5EF6\u8FDF\u6D88\u606F-\u4E0A","link":"#_2-\u6574\u5408rabbitmq\u5B9E\u73B0\u5EF6\u8FDF\u6D88\u606F-\u4E0A","children":[{"level":3,"title":"2.1 \u5728pom.xml\u4E2D\u6DFB\u52A0\u76F8\u5173\u4F9D\u8D56","slug":"_2-1-\u5728pom-xml\u4E2D\u6DFB\u52A0\u76F8\u5173\u4F9D\u8D56","link":"#_2-1-\u5728pom-xml\u4E2D\u6DFB\u52A0\u76F8\u5173\u4F9D\u8D56","children":[]},{"level":3,"title":"2.2 \u4FEE\u6539SpringBoot\u914D\u7F6E\u6587\u4EF6","slug":"_2-2-\u4FEE\u6539springboot\u914D\u7F6E\u6587\u4EF6","link":"#_2-2-\u4FEE\u6539springboot\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":3,"title":"2.3 \u6DFB\u52A0\u6D88\u606F\u961F\u5217\u7684\u679A\u4E3E\u914D\u7F6E\u7C7BQueueEnum","slug":"_2-3-\u6DFB\u52A0\u6D88\u606F\u961F\u5217\u7684\u679A\u4E3E\u914D\u7F6E\u7C7Bqueueenum","link":"#_2-3-\u6DFB\u52A0\u6D88\u606F\u961F\u5217\u7684\u679A\u4E3E\u914D\u7F6E\u7C7Bqueueenum","children":[]},{"level":3,"title":"2.4 \u6DFB\u52A0RabbitMQ\u7684\u914D\u7F6E","slug":"_2-4-\u6DFB\u52A0rabbitmq\u7684\u914D\u7F6E","link":"#_2-4-\u6DFB\u52A0rabbitmq\u7684\u914D\u7F6E","children":[]},{"level":3,"title":"2.5 \u5728RabbitMQ\u7BA1\u7406\u9875\u9762\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u4EA4\u6362\u673A\u548C\u961F\u5217","slug":"_2-5-\u5728rabbitmq\u7BA1\u7406\u9875\u9762\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u4EA4\u6362\u673A\u548C\u961F\u5217","link":"#_2-5-\u5728rabbitmq\u7BA1\u7406\u9875\u9762\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u4EA4\u6362\u673A\u548C\u961F\u5217","children":[]}]},{"level":2,"title":"3. \u6574\u5408RabbitMQ\u5B9E\u73B0\u5EF6\u8FDF\u6D88\u606F(\u4E0B)","slug":"_3-\u6574\u5408rabbitmq\u5B9E\u73B0\u5EF6\u8FDF\u6D88\u606F-\u4E0B","link":"#_3-\u6574\u5408rabbitmq\u5B9E\u73B0\u5EF6\u8FDF\u6D88\u606F-\u4E0B","children":[{"level":3,"title":"3.1 \u6DFB\u52A0\u5EF6\u8FDF\u6D88\u606F\u7684\u53D1\u9001\u8005CancelOrderSender","slug":"_3-1-\u6DFB\u52A0\u5EF6\u8FDF\u6D88\u606F\u7684\u53D1\u9001\u8005cancelordersender","link":"#_3-1-\u6DFB\u52A0\u5EF6\u8FDF\u6D88\u606F\u7684\u53D1\u9001\u8005cancelordersender","children":[]},{"level":3,"title":"3.2 \u6DFB\u52A0\u53D6\u6D88\u8BA2\u5355\u6D88\u606F\u7684\u63A5\u6536\u8005CancelOrderReceiver","slug":"_3-2-\u6DFB\u52A0\u53D6\u6D88\u8BA2\u5355\u6D88\u606F\u7684\u63A5\u6536\u8005cancelorderreceiver","link":"#_3-2-\u6DFB\u52A0\u53D6\u6D88\u8BA2\u5355\u6D88\u606F\u7684\u63A5\u6536\u8005cancelorderreceiver","children":[]},{"level":3,"title":"3.3 \u6DFB\u52A0OmsPortalOrderService\u63A5\u53E3","slug":"_3-3-\u6DFB\u52A0omsportalorderservice\u63A5\u53E3","link":"#_3-3-\u6DFB\u52A0omsportalorderservice\u63A5\u53E3","children":[]},{"level":3,"title":"3.4 \u6DFB\u52A0OmsPortalOrderService\u7684\u5B9E\u73B0\u7C7BOmsPortalOrderServiceImpl","slug":"_3-4-\u6DFB\u52A0omsportalorderservice\u7684\u5B9E\u73B0\u7C7Bomsportalorderserviceimpl","link":"#_3-4-\u6DFB\u52A0omsportalorderservice\u7684\u5B9E\u73B0\u7C7Bomsportalorderserviceimpl","children":[]},{"level":3,"title":"3.5 \u6DFB\u52A0OmsPortalOrderController","slug":"_3-5-\u6DFB\u52A0omsportalordercontroller","link":"#_3-5-\u6DFB\u52A0omsportalordercontroller","children":[]}]},{"level":2,"title":"4. \u4E0B\u5355\u6D4B\u8BD5","slug":"_4-\u4E0B\u5355\u6D4B\u8BD5","link":"#_4-\u4E0B\u5355\u6D4B\u8BD5","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671866946000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":5.35,"words":1604},"filePathRelative":"deploy/mq-rabbitmq/rabbitmq-y-scene-mall-order.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};