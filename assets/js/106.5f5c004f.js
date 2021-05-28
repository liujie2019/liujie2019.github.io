(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{488:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"概念上的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念上的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 概念上的区别")]),t._v(" "),a("p",[t._v("从概念上来区分，大致有以下几点：")]),t._v(" "),a("h3",{attrs:{id:"伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类","aria-hidden":"true"}},[t._v("#")]),t._v(" 伪类")]),t._v(" "),a("p",[t._v("伪类更多的定义的是状态。常见的伪类有: "),a("code",[t._v(":hover，:active，:focus，:visited，:link，:not，:first-child，:last-child")]),t._v("等等。")]),t._v(" "),a("h3",{attrs:{id:"伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 伪元素")]),t._v(" "),a("p",[t._v("伪元素是不存在于DOM树中的虚拟元素，它们可以像正常的html元素一样定义css，但"),a("strong",[t._v("无法使用JavaScript获取")]),t._v("。常见伪元素有 "),a("code",[t._v("::before，::after，::first-letter，::first-line")]),t._v("等等。")]),t._v(" "),a("blockquote",[a("p",[t._v("CSS3明确规定了：伪类用一个冒号(:)来表示，而伪元素则用两个冒号(::)来表示。但目前因为兼容性的问题，它们的写法可以是一致的，都用一个冒号(:)就可以了，所以非常容易混淆。")])]),t._v(" "),a("h2",{attrs:{id:"常见伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见伪类","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见伪类")]),t._v(" "),a("p",[t._v("伪类包含两种：状态伪类和结构性伪类")]),t._v(" "),a("h3",{attrs:{id:"状态伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态伪类","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态伪类")]),t._v(" "),a("p",[t._v("状态伪类是基于元素当前状态进行选择的。在与用户的交互过程中元素的状态是动态变化的，因此该元素会根据其状态呈现不同的样式。当元素处于某状态时会呈现该样式，而进入另一状态后，该样式也会失去。常见的状态伪类主要包括：")]),t._v(" "),a("ul",[a("li",[t._v(":link 应用于未被访问过的链接；")]),t._v(" "),a("li",[t._v(":hover 应用于鼠标悬停到的元素；")]),t._v(" "),a("li",[t._v(":active 应用于被激活的元素；")]),t._v(" "),a("li",[t._v(":visited 应用于被访问过的链接，与:link互斥。")]),t._v(" "),a("li",[t._v(":focus 应用于拥有键盘输入焦点的元素。")])]),t._v(" "),a("h3",{attrs:{id:"结构性伪类-css3新增选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构性伪类-css3新增选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" 结构性伪类(CSS3新增选择器)")]),t._v(" "),a("p",[t._v("结构性伪类是CSS3新增选择器，用于对dom树进行元素过滤，通过文档结构的互相关系来匹配元素，能够减少class和id属性的定义，使文档结构更简洁。常见的包括：")]),t._v(" "),a("ul",[a("li",[t._v(":root 选择文档的根元素，等同于html元素")]),t._v(" "),a("li",[t._v(":empty 选择没有子元素的元素")]),t._v(" "),a("li",[t._v(":target 选取当前活动的目标元素")]),t._v(" "),a("li",[t._v(":not(selector) 选择除selector元素以外的元素")]),t._v(" "),a("li",[t._v(":enabled 选择可用的表单元素")]),t._v(" "),a("li",[t._v(":disabled 选择禁用的表单元素")]),t._v(" "),a("li",[t._v(":checked 选择被选中的表单元素")]),t._v(" "),a("li",[t._v(":nth-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n")]),t._v(" "),a("li",[t._v(":nth-last-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n，从后向前数")]),t._v(" "),a("li",[t._v(":nth-child(odd)")]),t._v(" "),a("li",[t._v(":nth-child(even)")]),t._v(" "),a("li",[t._v(":nth-child(3n+1)")]),t._v(" "),a("li",[t._v(":first-child 选择某个元素的第一个子元素")]),t._v(" "),a("li",[t._v(":last-child 选择某个元素的最后一个子元素")]),t._v(" "),a("li",[t._v(":only-child")]),t._v(" "),a("li",[t._v(":nth-of-type(n) 匹配父元素下指定子元素，在同类子元素中排序第n")]),t._v(" "),a("li",[t._v(":nth-last-of-type(n) 匹配父元素下指定子元素，在同类子元素中排序第n，从后向前数")]),t._v(" "),a("li",[t._v(":nth-of-type() 选择指定的元素；")]),t._v(" "),a("li",[t._v(":nth-last-of-type() 选择指定的元素，从元素的最后一个开始计算；")]),t._v(" "),a("li",[t._v(":first-of-type 选择一个上级元素下的第一个同类子元素；")]),t._v(" "),a("li",[t._v(":last-of-type 选择一个上级元素的最后一个同类子元素；")]),t._v(" "),a("li",[t._v(":only-child 选择的元素是它的父元素的唯一一个子元素；")]),t._v(" "),a("li",[t._v(":only-of-type 选择一个元素是它的上级元素的唯一一个相同类型的子元素；")]),t._v(" "),a("li",[t._v(":nth-of-type(odd)")]),t._v(" "),a("li",[t._v(":nth-of-type(even)")]),t._v(" "),a("li",[t._v(":nth-of-type(3n+1)")])]),t._v(" "),a("h2",{attrs:{id:"css3中的伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3中的伪元素","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3中的伪元素")]),t._v(" "),a("p",[t._v("伪元素是对元素中的特定内容进行操作，而不是描述状态。它的操作层次比伪类更深一层，因此动态性比伪类低很多。实际上，伪元素就是选取某些元素前面或后面这种普通选择器无法完成的工作。控制的内容和元素是相同的，但它本身是基于元素的抽象，并不存在于文档结构中。")]),t._v(" "),a("ul",[a("li",[t._v("::first-letter 选择元素文本的第一个字（母）")]),t._v(" "),a("li",[t._v("::first-line 选择元素文本的第一行")]),t._v(" "),a("li",[t._v("::before 在元素内容的最前面添加新内容")]),t._v(" "),a("li",[t._v("::after 在元素内容的最后面添加新内容")]),t._v(" "),a("li",[t._v("::first-letter 选中某个款级元素的第一行的第一个字母")]),t._v(" "),a("li",[t._v("::first-line 匹配某个块级元素的第一行")]),t._v(" "),a("li",[t._v("::selection 匹配用户划词时的高亮部分")])]),t._v(" "),a("h2",{attrs:{id:"伪元素的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素的应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 伪元素的应用")]),t._v(" "),a("h3",{attrs:{id:"清除浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动","aria-hidden":"true"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box::after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"画分割线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#画分割线","aria-hidden":"true"}},[t._v("#")]),t._v(" 画分割线")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".spliter::before, .spliter::after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("spliter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("分割线"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"美化选中的文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#美化选中的文本","aria-hidden":"true"}},[t._v("#")]),t._v(" 美化选中的文本")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("::selection")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aqua"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blanchedalmond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000017784553",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端面试题系列3」伪类与伪元素的区别及实战"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000012156828",target:"_blank",rel:"noopener noreferrer"}},[t._v("谈谈css伪类与伪元素"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);