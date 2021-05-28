(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{435:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"restful-api-的产生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful-api-的产生","aria-hidden":"true"}},[t._v("#")]),t._v(" RESTful API 的产生")]),t._v(" "),a("p",[t._v("当前的发展趋势，就是前端设备层出不穷（手机、平板、桌面电脑、其他专用设备......）。\n因此，必须有一种统一的机制，方便不同的前端设备与后端进行通信，在这种情况下RESTful API产生了。")]),t._v(" "),a("h2",{attrs:{id:"协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 协议")]),t._v(" "),a("p",[t._v("HTTP、HTTPS 应用层协议。\n联网的设备 和 服务器之前的通信。")]),t._v(" "),a("h2",{attrs:{id:"域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名")]),t._v(" "),a("p",[t._v("1.应该尽量将API部署在专用域名之下。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("2.如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本","aria-hidden":"true"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),a("p",[t._v("应该将API的版本号放入URL。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"路径（endpoint）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径（endpoint）","aria-hidden":"true"}},[t._v("#")]),t._v(" 路径（Endpoint）")]),t._v(" "),a("p",[t._v('路径又称"终点"（endpoint），表示API的具体网址。\n在RESTful架构中，每个网址代表一种资源（resource），所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表格名对应。一般来说，数据库中的表都是同种记录的"集合"（collection），所以API中的名词也应该使用复数。\n举例来说，有一个API提供动物园（zoo）的信息，还包括各种动物和雇员的信息，则它的路径应该设计成下面这样:')]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("zoos\nhttps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("animals\nhttps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("employees\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"http动词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http动词","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP动词")]),t._v(" "),a("p",[t._v("对于资源的具体操作类型，由HTTP动词表示。\n常用的HTTP动词有下面五个（括号里是对应的SQL命令）:")]),t._v(" "),a("ul",[a("li",[t._v("GET（SELECT）：从服务器取出资源（一项或多项）。")]),t._v(" "),a("li",[t._v("POST（CREATE）：在服务器新建一个资源。")]),t._v(" "),a("li",[t._v("PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。")]),t._v(" "),a("li",[t._v("PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。")]),t._v(" "),a("li",[t._v("DELETE（DELETE）：从服务器删除资源。")])]),t._v(" "),a("p",[a("strong",[t._v("还有两个不常用的HTTP动词")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("HEAD：获取资源的元数据。")]),t._v(" "),a("li",[t._v("OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。")])]),t._v(" "),a("p",[a("strong",[t._v("相关例子")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("GET /zoos：列出所有动物园")]),t._v(" "),a("li",[t._v("POST /zoos：新建一个动物园")]),t._v(" "),a("li",[t._v("GET /zoos/ID：获取某个指定动物园的信息")]),t._v(" "),a("li",[t._v("PUT /zoos/ID：更新某个指定动物园的信息（提供该动物园的全部信息）")]),t._v(" "),a("li",[t._v("PATCH /zoos/ID：更新某个指定动物园的信息（提供该动物园的部分信息）")]),t._v(" "),a("li",[t._v("DELETE /zoos/ID：删除某个动物园")]),t._v(" "),a("li",[t._v("GET /zoos/ID/animals：列出某个指定动物园的所有动物")]),t._v(" "),a("li",[t._v("DELETE /zoos/ID/animals/ID：删除某个指定动物园的指定动物")])]),t._v(" "),a("h2",{attrs:{id:"过滤信息（filtering）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过滤信息（filtering）","aria-hidden":"true"}},[t._v("#")]),t._v(" 过滤信息（Filtering）")]),t._v(" "),a("p",[t._v("如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果。\n下面是一些常见的参数：")]),t._v(" "),a("ul",[a("li",[t._v("?limit=10：指定返回记录的数量")]),t._v(" "),a("li",[t._v("?offset=10：指定返回记录的开始位置。")]),t._v(" "),a("li",[t._v("?page=2&per_page=100：指定第几页，以及每页的记录数。")]),t._v(" "),a("li",[t._v("?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。")]),t._v(" "),a("li",[t._v("?animal_type_id=1：指定筛选条件")])]),t._v(" "),a("p",[a("strong",[t._v("需要注意")]),t._v("：参数的设计允许存在冗余，即允许API路径和URL参数偶尔有重复。比如，GET /zoo/ID/animals 与 GET /animals?zoo_id=ID 的含义是相同的。")]),t._v(" "),a("h2",{attrs:{id:"状态码（status-codes）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态码（status-codes）","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态码（Status Codes）")]),t._v(" "),a("p",[t._v("服务器向用户返回的状态码和提示信息，常见的有以下一些（方括号中是该状态码对应的HTTP动词）。")]),t._v(" "),a("ul",[a("li",[t._v("200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。")]),t._v(" "),a("li",[t._v("201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。")]),t._v(" "),a("li",[t._v("202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）")]),t._v(" "),a("li",[t._v("204 NO CONTENT - [DELETE]：用户删除数据成功。")]),t._v(" "),a("li",[t._v("400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。")]),t._v(" "),a("li",[t._v("401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。")]),t._v(" "),a("li",[t._v("403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。")]),t._v(" "),a("li",[t._v("404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。")]),t._v(" "),a("li",[t._v("406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。")]),t._v(" "),a("li",[t._v("410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。")]),t._v(" "),a("li",[t._v("422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。")]),t._v(" "),a("li",[t._v("500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。")])]),t._v(" "),a("h2",{attrs:{id:"错误处理（error-handling）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误处理（error-handling）","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误处理（Error handling）")]),t._v(" "),a("p",[t._v("如果状态码是4xx，就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名，出错信息作为键值即可。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    errorCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定错误码")]),t._v("\n    errorMsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"准确的错误信息"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"返回结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回结果","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回结果")]),t._v(" "),a("p",[t._v("针对不同操作，服务器向用户返回的结果应该符合以下规范：")]),t._v(" "),a("ul",[a("li",[t._v("GET /collection：返回资源对象的列表（数组）")]),t._v(" "),a("li",[t._v("GET /collection/resource：返回单个资源对象")]),t._v(" "),a("li",[t._v("POST /collection：返回新生成的资源对象")]),t._v(" "),a("li",[t._v("PUT /collection/resource：返回完整的资源对象")]),t._v(" "),a("li",[t._v("PATCH /collection/resource：返回完整的资源对象")]),t._v(" "),a("li",[t._v("DELETE /collection/resource：返回一个空文档")])]),t._v(" "),a("h2",{attrs:{id:"hypermedia-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hypermedia-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Hypermedia API")]),t._v(" "),a("p",[t._v("RESTful API最好做到Hypermedia，即返回结果中提供链接，连向其他API方法，使得用户不查文档，也知道下一步应该做什么。\n比如，当用户向api.example.com的根目录发出请求，会得到这样一个文档。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"collection https://www.example.com/zoos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"href"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.example.com/zoos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"List of zoos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/vnd.yourformat+json"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("上面代码表示，文档中有一个link属性，用户读取这个属性就知道下一步该调用什么API了。rel表示这个API与当前网址的关系（collection关系，并给出该collection的网址），href表示API的路径，title表示API的标题，type表示返回类型。\nHypermedia API的设计被称为HATEOAS。Github的API就是这种设计，访问api.github.com会得到一个所有可用API的网址列表。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"current_user_url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authorizations_url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/authorizations"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("从上面可以看到，如果想获取当前用户的信息，应该去访问"),a("code",[t._v("api.github.com/user")]),t._v("，然后就得到了下面结果。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Requires authentication"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"documentation_url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://developer.github.com/v3"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("上面代码表示，服务器给出了提示信息，以及文档的网址。")]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://baike.baidu.com/item/RESTful",target:"_blank",rel:"noopener noreferrer"}},[t._v("百科"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2011/09/restful.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解RESTful架构"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/05/restful_api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RESTful API 设计指南"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://yq.aliyun.com/articles/773",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于swagger的RESTful API开发实践"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/JoiT/p/6378086.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swagger入门教程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RESTful API 最佳实践"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);