(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{500:function(t,e,r){"use strict";r.r(e);var a=r(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"译者注"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#译者注"}},[t._v("#")]),t._v(" 译者注")]),t._v(" "),r("blockquote",[r("p",[t._v("原文: 来自 D3.js 作者 Mike Bostock 的 "),r("a",{attrs:{href:"https://medium.com/@mbostock/introducing-d3-shape-73f8367e6d12",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introducing d3-shape"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("译者: "),r("a",{attrs:{href:"https://github.com/ssthouse",target:"_blank",rel:"noopener noreferrer"}},[t._v("ssthouse"),r("OutboundLink")],1),t._v("\n联系译者: 邮箱(ssthouse@163.com) & 微信(wssst123456789)")])]),t._v(" "),r("h2",{attrs:{id:"译文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#译文"}},[t._v("#")]),t._v(" 译文")]),t._v(" "),r("p",[t._v("假设你现在想创建一个用于学习特定数据集的工具, 你最容易想到的呈现方式是什么呢? 一个可以自定义的 chart? 一个抽象的坐标系统? 将数据编码成图像来表示?")]),t._v(" "),r("p",[t._v("每一种方法都有它的好处. 比如你想做探索性的数据可视化, 你可能会更偏向于快速(高效)的方法, 因为这样你可以快速的测试各种不同的可视化效果.\n如果是做讲解性质的数据可视化, 你可能会选择能精细控制的方法, 以让你的观众能精准的理解你的意图.")]),t._v(" "),r("p",[t._v("不管你选择的哪种方法, 你最终都需要将实际的图形画在屏幕上, 也就是说你需要用你的数据生成一些能代表这些数据的图形.")]),t._v(" "),r("h3",{attrs:{id:"那么-你打算如何画出图形呢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#那么-你打算如何画出图形呢"}},[t._v("#")]),t._v(" 那么, 你打算如何画出图形呢?")]),t._v(" "),r("p",[t._v("一些简单的图形, 比如柱状图, 通过 canvas 的 api 就可以轻松的画出: "),r("a",{attrs:{href:"https://www.w3.org/TR/2dcontext/#dom-context-2d-fillrect",target:"_blank",rel:"noopener noreferrer"}},[t._v("fillRect"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/2/1645a68fd374cf9d?w=960&h=500&f=png&s=10680",alt:"bar chart"}})]),t._v(" "),r("p",[t._v("如果要画出一些直线, 或者折线也不难, 使用 canvas 的 "),r("a",{attrs:{href:"http://www.w3.org/TR/2dcontext/#dom-context-2d-moveto",target:"_blank",rel:"noopener noreferrer"}},[t._v("moveTo"),r("OutboundLink")],1),t._v(" , "),r("a",{attrs:{href:"http://www.w3.org/TR/2dcontext/#dom-context-2d-lineto",target:"_blank",rel:"noopener noreferrer"}},[t._v("lineTo"),r("OutboundLink")],1),t._v(" 方法即可:")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/2/1645a68fd31def0f?w=888&h=240&f=png&s=6603",alt:"line chart"}})]),t._v(" "),r("p",[t._v("但若是想画出曲线图呢? 想要画出 "),r("a",{attrs:{href:"http://www.cemyuksel.com/research/catmullrom_param/",target:"_blank",rel:"noopener noreferrer"}},[t._v("圆滑的曲线"),r("OutboundLink")],1),t._v(" 似乎开始变得不那么容易了:")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/2/1645a68fcca20dbe?w=888&h=240&f=png&s=26325",alt:"smooth line"}})]),t._v(" "),r("p",[t._v("我们再增加一点难度, 如果我们想要曲线圆滑的同时, 还要保持数据的"),r("a",{attrs:{href:"http://adsabs.harvard.edu/full/1990A%26A...239..443S",target:"_blank",rel:"noopener noreferrer"}},[t._v("单调性"),r("OutboundLink")],1),t._v("呢?")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/2/1645a68fcdefc090?w=888&h=240&f=png&s=9320",alt:"monotonicity slice"}})]),t._v(" "),r("p",[t._v("再者, 如果我们想画出扇形切片呢? 如果我们还想给扇形切片加上圆角, 加上切片之间的间距呢,")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/2/1645a68fcda64380?w=500&h=500&f=png&s=41618",alt:"donut line"}})]),t._v(" "),r("p",[t._v("怎么样, 是不是觉得有些"),r("strong",[t._v("挑战")]),t._v("了呢?")]),t._v(" "),r("p",[t._v("这时候该 "),r("strong",[t._v("d3-shape")]),t._v(" 出场了:\nd3-shape 是一个用于绘制数据可视化中常见的几何图形的库. 它非常的小巧, 而且可以同时和 SVG 和 Canvas 协同工作.")]),t._v(" "),r("h3",{attrs:{id:"d3-shape-有多小"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#d3-shape-有多小"}},[t._v("#")]),t._v(" d3-shape 有多小?")]),t._v(" "),r("p",[t._v("大概 28kb, 压缩后仅仅 6kb. 它还包括了 "),r("a",{attrs:{href:"https://github.com/d3/d3-path",target:"_blank",rel:"noopener noreferrer"}},[r("em",[t._v("d3-path")]),r("OutboundLink")],1),t._v(" . 它总共代码仅仅 1500 行, 所以我非常推荐你看看它的"),r("a",{attrs:{href:"https://github.com/d3/d3-shape/tree/master/src",target:"_blank",rel:"noopener noreferrer"}},[t._v("源代码"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"使用-d3-shape-你将得到什么呢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-d3-shape-你将得到什么呢"}},[t._v("#")]),t._v(" 使用 d3-shape 你将得到什么呢?")]),t._v(" "),r("p",[t._v("简单的说, 你将得到绘制 "),r("a",{attrs:{href:"https://github.com/d3/d3-shape#lines",target:"_blank",rel:"noopener noreferrer"}},[r("em",[t._v("线")]),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://github.com/d3/d3-shape#areas",target:"_blank",rel:"noopener noreferrer"}},[r("em",[t._v("面")]),r("OutboundLink")],1),t._v(" 的能力. 包括: 各种各样的曲线, 派图, 扇形图, 散点图等等.")]),t._v(" "),r("p",[t._v("除此之外还有更多, "),r("a",{attrs:{href:"https://github.com/d3/d3-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[r("em",[t._v("d3-hierarchy")]),r("OutboundLink")],1),t._v(" 模块包括了绘制包含层级结构数据的功能(比如树状图). 还有更多独立的模块能够帮助你绘制出更多定制化的图形: 比如 绘制地理位置的图像, 绘制模拟物理系统的网络图等等.")]),t._v(" "),r("h3",{attrs:{id:"d3-shape-的目的是什么呢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#d3-shape-的目的是什么呢"}},[t._v("#")]),t._v(" d3-shape 的目的是什么呢?")]),t._v(" "),r("p",[t._v("d3-shape 是一个让你进行数据可视化的工具. 它特别适合和已有的操作 DOM 的框架一同使用(意味着不需要 d3-selection), 比如 Angular, Vue, React. d3-js 中还有许多方便的模块, 配合着使用能更好的提升你的数据可视化效率, 比如: "),r("a",{attrs:{href:"https://github.com/d3/d3-color",target:"_blank",rel:"noopener noreferrer"}},[t._v("d3-color"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/d3/d3-format",target:"_blank",rel:"noopener noreferrer"}},[t._v("d3-format"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/d3/d3-time",target:"_blank",rel:"noopener noreferrer"}},[t._v("d3-time"),r("OutboundLink")],1),t._v(" and "),r("a",{attrs:{href:"https://github.com/d3/d3-scale",target:"_blank",rel:"noopener noreferrer"}},[t._v("d3-scale"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"想要贡献代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#想要贡献代码"}},[t._v("#")]),t._v(" 想要贡献代码?")]),t._v(" "),r("p",[t._v("想要自己实现一个曲线生成的算法? 想要创建一种消除数据噪点的曲线? 查看源代码, 在 github 上提交 pull request. 或者查看编写 d3 插件的文章, 创建并发布你自己的 "),r("a",{attrs:{href:"https://medium.com/@mbostock/let-s-make-a-d3-plugin-c8e697599f48",target:"_blank",rel:"noopener noreferrer"}},[t._v("d3 插件"),r("OutboundLink")],1),t._v(" 模块.")]),t._v(" "),r("p",[t._v("祝你 d3-shape 使用愉快!")]),t._v(" "),r("h2",{attrs:{id:"想继续了解-d3-js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#想继续了解-d3-js"}},[t._v("#")]),t._v(" 想继续了解 D3.js")]),t._v(" "),r("p",[t._v("这里是我的 "),r("em",[t._v("D3.js")]),t._v(" 、 "),r("em",[t._v("数据可视化")]),t._v(" 的github 地址, 欢迎 start & fork 🎉")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ssthouse/d3-blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("D3-blog"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"如果觉得不错的话-不妨点击下面的链接关注一下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如果觉得不错的话-不妨点击下面的链接关注一下"}},[t._v("#")]),t._v(" 如果觉得不错的话, 不妨点击下面的链接关注一下 : )")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ssthouse",target:"_blank",rel:"noopener noreferrer"}},[t._v("github主页"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/c_196857379",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎专栏"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/user/57bc46c8efa631005a891573/posts",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);