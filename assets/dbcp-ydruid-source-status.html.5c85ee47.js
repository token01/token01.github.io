import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as e,f as a}from"./app.2a33308c.js";const o={},r=a('<h1 id="druid\u6E90\u7801\u5B66\u4E60-\u4E5D-druiddatasource\u548Cdruidconnection\u4E2D\u7684\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#druid\u6E90\u7801\u5B66\u4E60-\u4E5D-druiddatasource\u548Cdruidconnection\u4E2D\u7684\u72B6\u6001" aria-hidden="true">#</a> Druid\u6E90\u7801\u5B66\u4E60\uFF08\u4E5D\uFF09-DruidDataSource\u548CDruidConnection\u4E2D\u7684\u72B6\u6001</h1><h2 id="_1-druidpooledconnection\u4E2D\u7684\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_1-druidpooledconnection\u4E2D\u7684\u72B6\u6001" aria-hidden="true">#</a> 1. DruidPooledConnection\u4E2D\u7684\u72B6\u6001\uFF1A</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u6240\u5728\u7C7B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>closed</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>\u5173\u95ED\u72B6\u6001\uFF0Crecycle\u5230\u8FDE\u63A5\u6C60\u4E2D\u7684\u8FDE\u63A5\u4F1A\u4FEE\u6539\u4E3Atrue\u3002\u4F46\u662F\u8FD9\u4E2A\u72B6\u6001\u901A\u5E38\u53EA\u5728checkStateInternal\u4E2D\u5355\u72EC\u4F7F\u7528\u3002\u5224\u65AD\u8FDE\u63A5\u662F\u5426\u5173\u95ED\u9700\u8981\u7ED3\u5408(closed or disable)</td></tr><tr><td>disable</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>\u4E0D\u53EF\u7528\u72B6\u6001\uFF0C\u5F53\u8FDE\u63A5\u51FA\u73B0\u5F02\u5E38\u8C03\u7528handleFatalError\u4E4B\u540E\uFF0C\u5C06\u6B64\u72B6\u6001\u8BBE\u7F6E\u4E3Atrue.\u4E4B\u540E\u8FDE\u63A5\u5904\u4E8E\u4E0D\u53EF\u7528\u72B6\u6001\u3002</td></tr><tr><td>traceEnable</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>traceEnable\u8DDF\u8E2A\u5F00\u5173\uFF0C\u9ED8\u8BA4\u4E3Afalse,\u8FD9\u4E2A\u5F00\u5173\u914D\u5408abandoned\u4F7F\u7528\uFF0C\u5F53DruidDataSource\u5F00\u542FremoveAbandoned\u4E4B\u540E\uFF0C\u8FD9\u4E2A\u72B6\u6001\u8BBE\u7F6E\u4E3Atrue,\u5F53\u8FDE\u63A5\u4ECEactiveConnections\u4E2D\u53D6\u51FA\u7684\u65F6\u5019\uFF0C\u8BBE\u7F6E\u4E3Afalse.</td></tr><tr><td>abandoned</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>\u8FDE\u63A5\u6CC4\u9732\u68C0\u6D4B\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3Afalse,\u5F53removeAbandoned\u5F00\u59CB\u6267\u884C\u4E4B\u540E\uFF0C\u5BF9\u7B26\u5408\u6761\u4EF6\u7684\u8FDE\u63A5\uFF0C\u5C06\u5176\u8BBE\u7F6E\u4E3Atrue\u7684\u65F6\u5019\u5F00\u542F\u8FDE\u63A5\u6CC4\u9732\u68C0\u6D4B\u3002</td></tr><tr><td>running</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>\u8FD0\u884C\u72B6\u6001\uFF0C\u6267\u884CStatement\u4E4B\u524D\u7684beforeExecute\u8BBE\u7F6E\u4E3Atrue,\u6267\u884C\u5B8C\u6210\u4E4B\u540EafterExecute\u65B9\u6CD5\u8BBE\u7F6E\u4E3Afalse.</td></tr><tr><td>active</td><td>volatile boolean</td><td>DruidConnectionHolder</td><td>FALSE</td><td>\u6D3B\u52A8\u72B6\u6001,\u9ED8\u8BA4\u503C\u4E3Afalse,getConnectionInternal\u4E4B\u540E\u8BBE\u7F6E\u4E3Atrue,discardConnection\u8BBE\u7F6E\u4E3Afalse,recycle\u5982\u679C\u7269\u7406\u8FDE\u63A5\u88AB\u5173\u95ED\u6216\u8005\u6D4B\u8BD5\u8FDE\u63A5\u4E0D\u901A\uFF0C\u4EE5\u53CA\u56DE\u6536\u6210\u529F\uFF0C\u90FD\u4FEE\u6539\u4E3Afalse\u3002\u8FD9\u662F\u8FDE\u63A5\u88AB\u7528\u6237\u7EBF\u7A0B\u8C03\u7528\u7684\u6301\u6709\u72B6\u6001\u3002\u6807\u8BC6\u8FDE\u63A5\u88AB\u7528\u6237\u7EBF\u7A0B\u6301\u6709\u3002</td></tr><tr><td>discard</td><td>volatile boolean</td><td>DruidConnectionHolder</td><td>FALSE</td><td>\u5173\u95ED\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3Afalse,\u8C03\u7528discardConnection\u65B9\u6CD5 \u6216\u8005recycle\u51FA\u73B0\u5F02\u5E38\u7684\u65F6\u5019\u6539\u4E3Atrue,\u4E4B\u540E\u5173\u95ED\u8FDE\u63A5\uFF0C</td></tr></tbody></table><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220525225828469.png" alt="image-20220525225828469"></p><h2 id="_2-druiddatasource\u4E2D\u7684\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_2-druiddatasource\u4E2D\u7684\u72B6\u6001" aria-hidden="true">#</a> 2. DruidDataSource\u4E2D\u7684\u72B6\u6001\uFF1A</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u6240\u5728\u7C7B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>closing</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>\u5173\u95ED\u4E2D\u72B6\u6001\uFF0C\u8C03\u7528close\u65B9\u6CD5\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5982\u679C\u5173\u95ED\u5B8C\u6210\uFF0C\u5219\u8FD9\u4E2A\u72B6\u6001\u8BBE\u7F6E\u4E3Afalse.</td></tr><tr><td>closed</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>\u5173\u95ED\u5B8C\u6210\u72B6\u6001,close\u65B9\u6CD5\u8C03\u7528\u5B8C\u6210\u4E3Atrue.\u8FD9\u6837\u8FDE\u63A5\u6C60\u5C06\u4E0D\u53EF\u4F7F\u7528\u3002</td></tr><tr><td>enable</td><td>volatile boolean</td><td>DruidDataSource</td><td>TRUE</td><td>\u53EF\u7528\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3Atrue,\u5F53\u8C03\u7528close\u5B8C\u6210\u4E4B\u540E\uFF0C\u8BBE\u7F6E\u4E3Afalse\u3002\u8FD9\u6837\u8FDE\u63A5\u6C60\u5C06\u4E0D\u53EF\u7528\u3002</td></tr><tr><td>keepAlive</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>keepAlive\u5F00\u5173\uFF0C\u7531\u7528\u6237\u81EA\u884C\u8BBE\u7F6E\uFF0C\u5982\u679C\u5F00\u542F\u4E86keepAlive\uFF0C\u5219\u5728shrink\u65B9\u6CD5\u4E2D\u5C06\u7B26\u5408\u6761\u4EF6\u7684\u8FDE\u63A5\u56DE\u6536\u5230keepAliveConnections\u4E2D\uFF0C\u5E76\u8FDB\u884C\u590D\u7528\u3002</td></tr><tr><td>inited</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>\u521D\u59CB\u5316\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3Afalse,\u8C03\u7528init\u4E4B\u540E\u8BBE\u7F6E\u4E3Atrue\u6807\u8BC6\u521D\u59CB\u5316\u5B8C\u6210\uFF0C\u4E4B\u540E\u8C03\u7528restart\u8BBE\u7F6E\u4E3Afalse\u3002</td></tr></tbody></table><p>\u5404\u72B6\u6001\u5173\u7CFB\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/6cbb8cdd3d29cf99c3e4f012a37640a2.png" alt="6cbb8cdd3d29cf99c3e4f012a37640a2"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2><p><a href="Druid%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB9-DruidDataSource%E5%92%8CDruidConnection%E4%B8%AD%E7%9A%84%E7%8A%B6%E6%80%81">https://blog.csdn.net/dhaibo1986/article/details/121407085?spm=1001.2014.3001.5502</a></p>',10),n=[r];function i(c,l){return d(),e("div",null,n)}const h=t(o,[["render",i],["__file","dbcp-ydruid-source-status.html.vue"]]);export{h as default};
