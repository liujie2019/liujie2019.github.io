(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{601:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",[t._v("写作不易，Star是最大鼓励，感觉写的不错的可以给个Star⭐，请多多指教。"),a("a",{attrs:{href:"https://github.com/liujie2019/VuePress-Blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("本博客的Github地址"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"evernotecid://AC85336C-B325-443E-8ED7-E6554790A944/appyinxiangcom/10797539/ENResource/p816",alt:"a8efbbc3f066df4249aa12144162dc99.png"}}),t._v("\nwebpack的编译都按照下面的钩子调用顺序执行：\n"),a("img",{attrs:{src:"evernotecid://AC85336C-B325-443E-8ED7-E6554790A944/appyinxiangcom/10797539/ENResource/p1487",alt:"04a0e0b924433d2869d732bc4a552945.png"}})]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("unseal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SyncHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** @type {SyncHook} */")]),t._v("\nseal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SyncHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优化相关的钩子")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("emit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsyncSeriesHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"compilation"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发射文件钩子")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"webpackoptionsapply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpackoptionsapply","aria-hidden":"true"}},[t._v("#")]),t._v(" WebpackOptionsApply")]),t._v(" "),a("p",[t._v("WebpackOptionsApply作用是：将所有的配置options参数转换成webpack内部插件。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果设置了library，则会使用LibraryTemplatePlugin插件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("library "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("libraryTarget "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"var"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" LibraryTemplatePlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./LibraryTemplatePlugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LibraryTemplatePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("libraryTarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("umdNamedDefine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auxiliaryComment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("libraryExport\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compiler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果设置了externals，则会使用ExternalsPlugin插件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("externals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ExternalsPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./ExternalsPlugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExternalsPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("libraryTarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("externals\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compiler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h2",{attrs:{id:"compiler-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler-hooks","aria-hidden":"true"}},[t._v("#")]),t._v(" Compiler hooks")]),t._v(" "),a("p",[t._v("流程相关：")]),t._v(" "),a("ul",[a("li",[t._v("(before-)run")]),t._v(" "),a("li",[t._v("(before-/after-)compile")]),t._v(" "),a("li",[t._v("make")]),t._v(" "),a("li",[t._v("(after-)emit")]),t._v(" "),a("li",[t._v("done：整个构建完成后触发")])]),t._v(" "),a("p",[t._v("监听相关：")]),t._v(" "),a("ul",[a("li",[t._v("watch-run")]),t._v(" "),a("li",[t._v("watch-close")])]),t._v(" "),a("h2",{attrs:{id:"compliation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compliation","aria-hidden":"true"}},[t._v("#")]),t._v(" Compliation")]),t._v(" "),a("p",[t._v("Compiler调用Compliation生命周期方法。")]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/DDFE/DDFE-blog/issues/36",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack系列之一总览"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ravencrown/noteBook/issues/72",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack打包流程 "),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);