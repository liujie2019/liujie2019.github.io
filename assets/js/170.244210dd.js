(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{560:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("[TOC]")]),s._v(" "),a("h2",{attrs:{id:"安装-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-node","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 Node")]),s._v(" "),a("p",[s._v("安装 Node 非常简单，只要到 Node 官网下载一个最新版本就可以了，安装好后，可以打开命令行工具，同时按下 win+R，然后输入 cmd 就可以打开，打开后输入。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nnpm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果看到版本号说明已经安装成功了，看不到版本号就说明你的 node.js 没有安装成功。")]),s._v(" "),a("h2",{attrs:{id:"typescript-安装和编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-安装和编译","aria-hidden":"true"}},[s._v("#")]),s._v(" TypeScript 安装和编译")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局安装")]),s._v("\nyarn global add typescript\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者")]),s._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g typescript\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("以上命令会在全局环境下安装"),a("code",[s._v("tsc")]),s._v("命令，安装完成之后，我们就可以在任何地方执行"),a("code",[s._v("tsc")]),s._v("命令了。\n需要注意的是：如果是 mac 电脑，要使用"),a("code",[s._v("sudo npm install typescript -g")]),s._v("指令进行安装。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看版本")]),s._v("\ntsc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("version\nVersion "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("编译一个"),a("code",[s._v("TypeScript")]),s._v("文件很简单：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译ts文件")]),s._v("\ntsc hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("编译的原因在于：浏览器不能识别以"),a("code",[s._v(".ts")]),s._v("结尾的文件，需要将"),a("code",[s._v(".ts")]),s._v("结尾的文件编译成"),a("code",[s._v(".js")]),s._v("结尾的文件。")]),s._v(" "),a("p",[s._v("我们约定使用"),a("code",[s._v("TypeScript")]),s._v("编写的文件以"),a("code",[s._v(".ts")]),s._v("为后缀，用 TypeScript 编写 React 时，以"),a("code",[s._v(".tsx")]),s._v("为后缀。")]),s._v(" "),a("p",[s._v("新建 demo.ts：")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("Hello， ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("person"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lisi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("TypeScript 中，使用"),a("code",[s._v(":")]),s._v("指定变量的类型，"),a("code",[s._v(":")]),s._v("的前后有没有空格都可以。\n上述例子中，我们用"),a("code",[s._v(":")]),s._v("指定 person 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。\nTypeScript 只会进行"),a("strong",[s._v("静态检查")]),s._v("，如果发现有错误，编译的时候就会报错。")]),s._v(" "),a("blockquote",[a("p",[s._v("运行：tsc demo.ts 编译当前文件，结果如下：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("Hello， ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("person"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lisi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"配置-vscode-自动编译-ts文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-vscode-自动编译-ts文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 vscode 自动编译"),a("code",[s._v(".ts")]),s._v("文件")]),s._v(" "),a("ol",[a("li",[s._v("第一步：创建"),a("code",[s._v("tsconfig.json")]),s._v("文件，该文件是 TypeScript 项目的配置文件(通过"),a("code",[s._v("tsc --init")]),s._v("命令来生成配置文件)，可以通过读取它来设置 TypeScript 编译器的编译参数；")]),s._v(" "),a("li",[s._v("第二步：点击菜单栏->终端-运行任务，点击 tsc：监视-tsconfig.json，然后就可以自动生成代码了。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"evernotecid://AC85336C-B325-443E-8ED7-E6554790A944/appyinxiangcom/10797539/ENResource/p1892",alt:"bf4d6645dac468bef6e293bc78a444f4.png"}})]),s._v(" "),a("blockquote",[a("p",[s._v("需要注意：需要 watch 当前文件目录中的"),a("code",[s._v("tsconfig.json")]),s._v("文件。")])]),s._v(" "),a("blockquote",[a("p",[s._v("修改编译后的 js 文件输出目录为：将 tsconfig.json 文件中的 outDir 设置成："),a("code",[s._v('"outDir": "./js"')]),s._v("。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"evernotecid://AC85336C-B325-443E-8ED7-E6554790A944/appyinxiangcom/10797539/ENResource/p1893",alt:"c4f87c7ebe5a5b44d7ff67852e5be72c.png"}}),s._v(" "),a("img",{attrs:{src:"evernotecid://AC85336C-B325-443E-8ED7-E6554790A944/appyinxiangcom/10797539/ENResource/p1894",alt:"75420ad04ba75469f29c1cc7fa043bbb.png"}})]),s._v(" "),a("h3",{attrs:{id:"命令行编译执行-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行编译执行-ts","aria-hidden":"true"}},[s._v("#")]),s._v(" 命令行编译执行 ts")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("yarn add ts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行如下命令")]),s._v("\nnpx ts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"编写-helloworld-程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-helloworld-程序","aria-hidden":"true"}},[s._v("#")]),s._v(" 编写 HelloWorld 程序")]),s._v(" "),a("ol",[a("li",[s._v("初始化项目：进入你的编程文件夹后，可以使用"),a("code",[s._v("npm init -y")]),s._v("来初始化项目，生成 package.json 文件。")]),s._v(" "),a("li",[s._v("创建 tsconfig.json 文件，在终端中输入"),a("code",[s._v("tsc --init")]),s._v("：它是一个 TypeScript 项目的配置文件，可以通过读取它来设置 TypeScript 编译器的编译参数。")]),s._v(" "),a("li",[s._v("安装"),a("code",[s._v("@types/node")]),s._v("，使用"),a("code",[s._v("npm install @types/node -D")]),s._v("进行安装。这个主要是解决模块的声明文件问题。")]),s._v(" "),a("li",[s._v("编写 HelloWorld.ts 文件，然后进行保存，代码如下。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HelloWorld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("在 Vscode 的任务菜单下，打开运行生成任务，然后选择 tsc：构建-tsconfig.json，这时候就会生成一个 helloWorld.js 文件。")]),s._v(" "),a("li",[s._v("在终端中输入"),a("code",[s._v("node helloWorld.js")]),s._v("就可以看到结果了。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);