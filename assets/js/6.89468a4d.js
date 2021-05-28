(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{326:function(s,t,a){s.exports=a.p+"assets/img/module1.2d5ddc0b.png"},327:function(s,t,a){s.exports=a.p+"assets/img/module2.c335a7ac.png"},328:function(s,t,a){s.exports=a.p+"assets/img/module3.341f3028.png"},329:function(s,t,a){s.exports=a.p+"assets/img/module4.9b064f6d.png"},330:function(s,t,a){s.exports=a.p+"assets/img/module5.e7b62d37.png"},331:function(s,t,a){s.exports=a.p+"assets/img/module6.bc1ca40a.png"},332:function(s,t,a){s.exports=a.p+"assets/img/module7.019a980c.png"},333:function(s,t,a){s.exports=a.p+"assets/img/image-20200608121953719.9bb00bbd.png"},334:function(s,t,a){s.exports=a.p+"assets/img/image-20200608122033898.aa711fb7.png"},335:function(s,t,a){s.exports=a.p+"assets/img/image-20200608122226305.49541d73.png"},336:function(s,t,a){s.exports=a.p+"assets/img/image-20200608122302501.d81612be.png"},337:function(s,t,a){s.exports=a.p+"assets/img/image-20200608122335955.1296c4b6.png"},604:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",[s._v("写作不易，Star是最大鼓励，感觉写的不错的可以给个Star⭐，请多多指教。"),n("a",{attrs:{href:"https://github.com/liujie2019/VuePress-Blog",target:"_blank",rel:"noopener noreferrer"}},[s._v("本博客的Github地址"),n("OutboundLink")],1),s._v("。")])]),s._v(" "),n("p",[s._v("[TOC]")]),s._v(" "),n("h2",{attrs:{id:"module、chunk和bundle的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#module、chunk和bundle的区别","aria-hidden":"true"}},[s._v("#")]),s._v(" module、chunk和bundle的区别")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/util.js'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("这里有两个入口，一个是index.js，另一个是util.js。")]),s._v(" "),n("p",[s._v("index.js内容如下：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./style/index.css'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./common'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:a(326),alt:""}})]),s._v(" "),n("p",[s._v("从上图中，我们可以看出index.css"),n("code",[s._v("和common.js在index.js中被引入，打包生成的")]),s._v("index.bundle.css"),n("code",[s._v("和")]),s._v("index.bundle.js"),n("code",[s._v("都属于")]),s._v("chunk 0"),n("code",[s._v("，")]),s._v("util.js"),n("code",[s._v("因为是独立打包的，它生成的")]),s._v("util.bundle.js"),n("code",[s._v("属于")]),s._v("chunk 1`。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(327),alt:""}})]),s._v(" "),n("p",[s._v("看这个图就很清晰了：")]),s._v(" "),n("ul",[n("li",[s._v("对于一份同逻辑的代码，当我们手写下一个一个的文件，它们无论是ES module还是commonJS或是AMD，他们都是module；")]),s._v(" "),n("li",[s._v("当我们写的 module 源文件传到 webpack 进行打包时，webpack 会根据文件引用关系生成 chunk 文件，webpack 会对这个 chunk 文件进行一些操作；")]),s._v(" "),n("li",[s._v("webpack 处理好 chunk 文件后，最后会输出 bundle 文件，这个 bundle 文件包含了经过加载和编译的最终源文件，所以它可以直接在浏览器中运行。")])]),s._v(" "),n("p",[s._v("一般来说，"),n("strong",[s._v("一个chunk对应一个bundle")]),s._v("，比如上图中的 utils.js -> chunks 1 -> utils.bundle.js；但也有例外，比如说上图中，用 MiniCssExtractPlugin 从 chunks 0 中抽离出了 index.bundle.css 文件。")]),s._v(" "),n("p",[s._v("一句话总结：module，chunk 和 bundle 其实就是同一份逻辑代码在不同转换场景下的取了三个名字：\n我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。")]),s._v(" "),n("h2",{attrs:{id:"filename和chunkfilename的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filename和chunkfilename的区别","aria-hidden":"true"}},[s._v("#")]),s._v(" filename和chunkFilename的区别")]),s._v(" "),n("p",[n("img",{attrs:{src:a(328),alt:""}})]),s._v(" "),n("p",[n("code",[s._v("2.min.js")]),s._v("就是异步加载的"),n("code",[s._v("chunk")]),s._v("文件。weboack文档里这么解释："),n("code",[s._v("output.chunkFilename")]),s._v("默认使用"),n("code",[s._v("[id].js")]),s._v("或从 "),n("code",[s._v("output.filename")]),s._v("中推断出的值（[name]会被预先替换为 [id]或[id].）。")]),s._v(" "),n("p",[s._v("结合上面的例子来看："),n("code",[s._v("output.filename")]),s._v("的输出文件名是 "),n("code",[s._v("[name].min.js")]),s._v("，"),n("code",[s._v("[name]")]),s._v("根据"),n("code",[s._v("entry")]),s._v("的配置推断为 index，所以输出为"),n("code",[s._v("index.min.js")]),s._v("；")]),s._v(" "),n("p",[s._v("由于"),n("code",[s._v("output.chunkFilename")]),s._v("没有显示指定，就会把[name]替换为chunk文件的id号，这里文件的id号是2，所以文件名就是"),n("code",[s._v("2.min.js")]),s._v("。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(329),alt:""}})]),s._v(" "),n("p",[s._v("如果我们显式配置"),n("code",[s._v("chunkFilename")]),s._v("，就会按配置的名字生成文件：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/util.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\noutput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name].min.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出 index.js 和 utils.js")]),s._v("\n    chunkFilename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bundle.js'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("一句话总结：filename指列在entry中，打包后输出的文件的名称。chunkFilename指未列在entry中，却又需要被打包出来的文件的名称。")]),s._v(" "),n("h2",{attrs:{id:"webpackprefetch、webpackpreload和webpackchunkname"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpackprefetch、webpackpreload和webpackchunkname","aria-hidden":"true"}},[s._v("#")]),s._v(" webpackPrefetch、webpackPreload和webpackChunkName")]),s._v(" "),n("p",[n("img",{attrs:{src:a(330),alt:""}})]),s._v(" "),n("p",[s._v("lodash是我们取的名字，按道理来说应该生成 "),n("code",[s._v("lodash.bundle.js")]),s._v("，前面的"),n("code",[s._v("vendors~")]),s._v("是什么鬼？\n其实webpack懒加载是用内置的一个插件 SplitChunksPlugin实现的，这个插件里面有些默认配置项，比如说"),n("code",[s._v("automaticNameDelimiter")]),s._v("，默认的分割符就是 "),n("code",[s._v("~")]),s._v("，所以最后的文件名才会出现这个符号。")]),s._v(" "),n("h3",{attrs:{id:"webpackprefetch和webpackpreload"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpackprefetch和webpackpreload","aria-hidden":"true"}},[s._v("#")]),s._v(" webpackPrefetch和webpackPreload")]),s._v(" "),n("p",[s._v("这两个配置一个叫预拉取（Prefetch），一个叫预加载（Preload），两者有些细微的不同。")]),s._v(" "),n("p",[s._v("在上面的懒加载代码里，我们是"),n("strong",[s._v("点击按钮")]),s._v("时，才会触发异步加载lodash的动作，这时候会动态的生成一个script标签，加载到head头里：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(331),alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:a(332),alt:""}})]),s._v(" "),n("p",[s._v("这个异步加载的代码不需要手动点击button触发，webpack会在父chunk完成加载后，闲时加载lodash文件。")]),s._v(" "),n("p",[s._v("webpackPreload是预加载当前导航下可能需要资源，它和 webpackPrefetch的主要区别是：")]),s._v(" "),n("ul",[n("li",[s._v("preload chunk会在父chunk加载时，以并行方式开始加载。prefetch chunk会在父chunk加载结束后开始加载。")]),s._v(" "),n("li",[s._v("preload chunk 具有中等优先级，并立即下载。prefetch chunk 在浏览器闲置时下载。")]),s._v(" "),n("li",[s._v("preload chunk 会在父 chunk 中立即请求，用于当下时刻。prefetch chunk用于未来的某个时刻。")])]),s._v(" "),n("p",[s._v("一句话总结：webpackChunkName是为懒加载的文件取别名，webpackPrefetch会在浏览器闲置下载文件，webpackPreload会在父chunk加载时并行下载文件。")]),s._v(" "),n("h2",{attrs:{id:"文件指纹-hash、chunkhash、contenthash的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件指纹-hash、chunkhash、contenthash的区别","aria-hidden":"true"}},[s._v("#")]),s._v(" 文件指纹(hash、chunkhash、contenthash的区别)")]),s._v(" "),n("p",[s._v("文件指纹：打包后输出的文件名的后缀，可以用来做版本管理。设置了文件指纹后，对于没有修改的文件，可以更好的利用浏览器的缓存，从而加速页面的访问速度。")]),s._v(" "),n("p",[s._v("什么是chunk？")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/util.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("所谓chunk，我们可以简单理解为entry中定义的入口，当然对于异步加载的模块而言，每个异步加载的模块都对应一个chunk。")]),s._v(" "),n("ul",[n("li",[s._v("hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的hash值就会更改；")]),s._v(" "),n("li",[s._v("chunkhash：和webpack打包的chunk有关，不同的entry会生成不同的chunkhash值，在打包过程中需要保证一个entry中的内容发生了变化，并不会影响其他entry的文件指纹，这就需要用到chunkhash，来保证每个entry的文件指纹的独立；")]),s._v(" "),n("li",[s._v("contenthash：根据文件内容来定义hash，文件内容不变，则contenthash不变。")])]),s._v(" "),n("h2",{attrs:{id:"文件指纹使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件指纹使用场景","aria-hidden":"true"}},[s._v("#")]),s._v(" 文件指纹使用场景")]),s._v(" "),n("h3",{attrs:{id:"js文件指纹设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js文件指纹设置","aria-hidden":"true"}},[s._v("#")]),s._v(" js文件指纹设置")]),s._v(" "),n("p",[s._v("对于js文件一般采用chunkhash。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    vender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vuex'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\noutput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name].[chunkhash:8].js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 改为chunkhash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("在有多个入口文件时，一般会将一些第三方包打包成"),n("code",[s._v("vender")]),s._v("一个单独的"),n("code",[s._v("chunk")]),s._v("。因为这些包的源码，只要我们不升级是不发生变化的，而"),n("code",[s._v("index")]),s._v("对应的chunk是我们的业务代码，是经常发生变化的，因此对于多个入口的话，需要采用"),n("code",[s._v("chunkhash")]),s._v("。")]),s._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",[s._v("需要注意chunkhash不能与热更新插件HotModuleReplacementPlugin一同使用。")])]),s._v(" "),n("h3",{attrs:{id:"css文件指纹设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css文件指纹设置","aria-hidden":"true"}},[s._v("#")]),s._v(" css文件指纹设置")]),s._v(" "),n("p",[s._v("对于css文件采用contenthash而不是使用chunkhash，原因在于：假如一个页面同时使用了js和css，但是只有js发生了改变，而css并未发生改变，那么css文件的文件指纹也会发生变化。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MiniCssExtractPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name].[contenthash:8].css'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"图片或者字体的文件指纹设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片或者字体的文件指纹设置","aria-hidden":"true"}},[s._v("#")]),s._v(" 图片或者字体的文件指纹设置")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.(png|jpg|gif|svg|jpeg)$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    use"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        loader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            limit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'img/[name].[hash:8].[ext]'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("table",[n("thead",[n("tr",[n("th",[s._v("占位符名称")]),s._v(" "),n("th",{staticStyle:{"text-align":"center"}},[s._v("含义")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("[ext]")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("资源后缀名")])]),s._v(" "),n("tr",[n("td",[s._v("[name]")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("文件名称")])]),s._v(" "),n("tr",[n("td",[s._v("[path]")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("文件的相对路径")])]),s._v(" "),n("tr",[n("td",[s._v("[folder]")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("文件所在的文件夹")])]),s._v(" "),n("tr",[n("td",[s._v("[contenthash]")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("文件的内容hash，默认是md5生成")])]),s._v(" "),n("tr",[n("td",[s._v("[hash]")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("文件的内容Hash(默认32位，一般取前8位)，默认是md5生成")])]),s._v(" "),n("tr",[n("td",[s._v("[emoji]")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("一个随机的指代文件内容的emoji")])])])]),s._v(" "),n("h3",{attrs:{id:"runtimechunk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#runtimechunk","aria-hidden":"true"}},[s._v("#")]),s._v(" runtimeChunk")]),s._v(" "),n("p",[s._v("runtimeChunk: 将webpack相关代码单独打包。在有新的模块加入的时候，webpack会给新模块增加一个id。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("runtimeChunk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"代码压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩","aria-hidden":"true"}},[s._v("#")]),s._v(" 代码压缩")]),s._v(" "),n("h3",{attrs:{id:"html压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html压缩","aria-hidden":"true"}},[s._v("#")]),s._v(" html压缩")]),s._v(" "),n("p",[s._v("修改"),n("code",[s._v("html-webpack-plugin")]),s._v("，设置压缩参数。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HtmlWebpackPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/index.html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'search.html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    chunks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'search'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定要使用的chunk")]),s._v("\n    inject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动注入打包后的chunk")]),s._v("\n    minify"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        html5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        collapseWhitespace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        preserveLineBreaks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        minifyCSS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        minifyJS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        removeComments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"js压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js压缩","aria-hidden":"true"}},[s._v("#")]),s._v(" js压缩")]),s._v(" "),n("p",[s._v("在webpack4.x版本中，内置了"),n("code",[s._v("uglifyjs-webpack-plugin")]),s._v("。因此，生产环境下打包后的js代码默认就是压缩过的。当然，我们也可以安装"),n("code",[s._v("uglifyjs-webpack-plugin")]),s._v("插件，并为其设置一些参数，比如开启并行压缩等。")]),s._v(" "),n("h3",{attrs:{id:"css压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css压缩","aria-hidden":"true"}},[s._v("#")]),s._v(" css压缩")]),s._v(" "),n("p",[s._v("在webpack4.x版本中，压缩css需要使用"),n("code",[s._v("optimize-css-assets-webpack-plugin")]),s._v("插件，同时使用cssnano。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("yarn add optimize"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("css"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("assets"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webpack"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"sourse-map中eval、cheap、inline和module的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sourse-map中eval、cheap、inline和module的区别","aria-hidden":"true"}},[s._v("#")]),s._v(" sourse-map中eval、cheap、inline和module的区别")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("参数")]),s._v(" "),n("th",[s._v("参数解释")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("eval")]),s._v(" "),n("td",[s._v("打包后的模块都使用 eval() 执行，行映射可能不准；不产生独立的 map 文件")])]),s._v(" "),n("tr",[n("td",[s._v("cheap")]),s._v(" "),n("td",[s._v("map映射只显示行不显示列，忽略源自loader 的source map")])]),s._v(" "),n("tr",[n("td",[s._v("inline")]),s._v(" "),n("td",[s._v("映射文件以base64格式编码，加在bundle 文件最后，不产生独立的map文件")])]),s._v(" "),n("tr",[n("td",[s._v("module")]),s._v(" "),n("td",[s._v("增加对loader source map和第三方模块的映射")])])])]),s._v(" "),n("h3",{attrs:{id:"source-map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#source-map","aria-hidden":"true"}},[s._v("#")]),s._v(" source-map")]),s._v(" "),n("p",[s._v("source-map是最大而全的，会生成独立map文件。\n"),n("img",{attrs:{src:a(333),alt:"image-20200608121953719"}})]),s._v(" "),n("p",[s._v("注意下图光标的位置，source-map会"),n("strong",[s._v("显示报错的行列信息")]),s._v("：\n"),n("img",{staticStyle:{zoom:"50%"},attrs:{src:a(334),alt:"image-20200608122033898"}})]),s._v(" "),n("h3",{attrs:{id:"cheap-sourse-map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cheap-sourse-map","aria-hidden":"true"}},[s._v("#")]),s._v(" cheap-sourse-map")]),s._v(" "),n("p",[s._v("cheap，就是廉价的意思，它"),n("strong",[s._v("不会产生列映射")]),s._v("，相应的体积会小很多，我们和sourse-map的打包结果比一下，只有原来的 1/4。\n"),n("img",{staticStyle:{zoom:"50%"},attrs:{src:"assets/image-20200608122123216.png",alt:"./image-20200608122123216"}})]),s._v(" "),n("h3",{attrs:{id:"eval-source-map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eval-source-map","aria-hidden":"true"}},[s._v("#")]),s._v(" eval-source-map")]),s._v(" "),n("p",[s._v("eval-source-map会以eval()函数打包运行模块，不产生独立的map文件，会显示报错的行列信息。每个module会通过 eval()来执行，并且生成一个DataUrl形式的SourceMap。\n"),n("img",{attrs:{src:a(335),alt:"image-20200608122226305"}})]),s._v(" "),n("h3",{attrs:{id:"inline-source-map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inline-source-map","aria-hidden":"true"}},[s._v("#")]),s._v(" inline-source-map")]),s._v(" "),n("p",[s._v("映射文件以base64格式编码，加在bundle文件最后，不产生独立的map文件。加入map文件后，我们可以明显的看到包体积变大了。\n"),n("img",{staticStyle:{zoom:"50%"},attrs:{src:a(336),alt:"image-20200608122302501"}}),s._v("\n在打包后的bundle.js文件的最后，可以看到以base64格式编码的映射文件。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(337),alt:"image-20200608122335955"}})]),s._v(" "),n("h3",{attrs:{id:"hidden-source-map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hidden-source-map","aria-hidden":"true"}},[s._v("#")]),s._v(" hidden-source-map")]),s._v(" "),n("p",[s._v("与source-map相比少了末尾的注释，但dist目录下的 bundle.js.map没有少。")]),s._v(" "),n("h3",{attrs:{id:"常用配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用配置")]),s._v(" "),n("p",[s._v("上面的几个例子都是演示，结合官网推荐和实际经验，常用的配置其实是这几个：")]),s._v(" "),n("ol",[n("li",[s._v("source-map")])]),s._v(" "),n("p",[s._v("大而全，啥都有，就因为啥都有可能会让 webpack 构建时间变长，看情况使用。")]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("cheap-module-eval-source-map")])]),s._v(" "),n("p",[s._v("这个一般是开发环境（dev）推荐使用，在构建速度报错提醒上做了比较好的均衡。")]),s._v(" "),n("p",[s._v("cheap(不产生列映射)和eval(不会生成单独的source-map文件)的组合。")]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("cheap-module-source-map")])]),s._v(" "),n("p",[s._v("一般来说，生产环境是不配 source-map 的，如果想捕捉线上的代码报错，我们可以用这个。")]),s._v(" "),n("h2",{attrs:{id:"参考文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文档","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://skychx.github.io/blog/scaffold/webpackConfuse.html#_1-webpack-%E4%B8%AD%EF%BC%8Cmodule%EF%BC%8Cchunk-%E5%92%8C-bundle-%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"}},[s._v("面试必备！webpack 中那些最易混淆的 5 个知识点"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/9464984.html#_labelTop",target:"_blank",rel:"noopener noreferrer"}},[s._v("深入浅出的webpack构建工具---devTool中SourceMap模式详解(四)"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);