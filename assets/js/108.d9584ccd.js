(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{490:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"清除浮动方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动方法","aria-hidden":"true"}},[s._v("#")]),s._v(" 清除浮动方法")]),s._v(" "),a("h3",{attrs:{id:"触发父元素的bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发父元素的bfc","aria-hidden":"true"}},[s._v("#")]),s._v(" 触发父元素的BFC")]),s._v(" "),a("blockquote",[a("p",[s._v("给父元素添加如下任意属性：")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("// position\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fixed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n// display\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" table-cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" table-caption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n// overflow\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" scroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" overlay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"父元素也浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父元素也浮动","aria-hidden":"true"}},[s._v("#")]),s._v(" 父元素也浮动")]),s._v(" "),a("p",[s._v("这样一来父元素和子元素一起脱离文档流，这样父元素就能自适应子元素的高度。这种方法的缺点：会直接影响父元素之后的元素排列，从而引发其他问题。")]),s._v(" "),a("h3",{attrs:{id:"给父元素设置固定高度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给父元素设置固定高度","aria-hidden":"true"}},[s._v("#")]),s._v(" 给父元素设置固定高度")]),s._v(" "),a("p",[s._v("但是这个方法只适用于已知子元素高度的情况，该方法缺点：不灵活，难以维护。")]),s._v(" "),a("h3",{attrs:{id:"在浮动元素后添加空元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在浮动元素后添加空元素","aria-hidden":"true"}},[s._v("#")]),s._v(" 在浮动元素后添加空元素")]),s._v(" "),a("p",[s._v("在浮动元素后添加空元素，通过给空元素添加"),a("code",[s._v("clear:both;")]),s._v("来达到清除浮动的目的。该方法缺点：会增加无意义的标签。")]),s._v(" "),a("h3",{attrs:{id:"伪元素-after-最佳常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素-after-最佳常用","aria-hidden":"true"}},[s._v("#")]),s._v(" 伪元素"),a("code",[s._v("::after")]),s._v("(最佳常用)")]),s._v(" "),a("p",[s._v("为浮动的最后一个子元素设置伪元素"),a("code",[s._v("::after")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box::after")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);