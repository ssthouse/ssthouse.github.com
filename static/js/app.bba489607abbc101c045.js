webpackJsonp([1],{100:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-card",{staticStyle:{margin:"8px"}},[a("mu-card-media",[a("img",{attrs:{src:n(94),alt:"baby_family"}})]),t._v(" "),a("mu-card-title",{staticStyle:{"text-align":"left","padding-left":"20px"},attrs:{title:"已相爱: "+t.getLoveLength()}})],1),t._v(" "),a("a",{attrs:{href:"static/index.html"}},[t._v("哈哈哈")])],1)},staticRenderFns:[]}},101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"phone-viewport",staticStyle:{top:"0",bottom:"0","margin-top":"0"},attrs:{id:"app"}},[n("main-page",{staticStyle:{height:"100%"}})],1)},staticRenderFns:[]}},21:function(t,e,n){"use strict";function a(){s.a.init({appId:"al5DXaGvmjcmCByiGKixzBDb-gzGzoHsz",appKey:"SXrCzX0RMXHDN1HGb8w1oP4i"})}function o(){return new u.a(function(t,e){new s.a.Query("FastNoteBean").equalTo("isCony",!0).limit(1).find().then(function(e){return t(e[0])},function(t){return e(t)})})}function i(){return new u.a(function(t,e){new s.a.Query("FastNoteBean").equalTo("isCony",!1).limit(1).find().then(function(e){return t(e[0])},function(t){return e(t)})})}var r=n(50),u=n.n(r),c=n(92),s=n.n(c);e.a=a,e.b=o,e.c=i},35:function(t,e,n){n(88);var a=n(8)(n(47),n(100),null,null);t.exports=a.exports},36:function(t,e,n){n(87);var a=n(8)(n(48),n(99),null,null);t.exports=a.exports},37:function(t,e,n){n(85);var a=n(8)(n(49),n(97),null,null);t.exports=a.exports},39:function(t,e,n){"use strict";var a=n(4),o=n(102),i=n(35),r=n.n(i),u=n(37),c=n.n(u),s=n(36),l=n.n(s);a.default.use(o.a),e.a=new o.a({routes:[{path:"/",redirect:"/duoduo"},{path:"/duoduo",name:"duoduo",component:r.a},{path:"/little",name:"little",component:c.a},{path:"/giant",name:"giant",component:l.a}]})},40:function(t,e){},41:function(t,e){},43:function(t,e,n){n(89);var a=n(8)(n(45),n(101),null,null);t.exports=a.exports},44:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(43),o=n.n(a),i=n(39),r=n(40),u=(n.n(r),n(41)),c=(n.n(u),n(4)),s=n(42),l=n.n(s);c.default.use(l.a),c.default.config.productionTip=!1,new c.default({el:"#app",router:i.a,template:"<App/>",components:{App:o.a}})},45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(96),o=n.n(a),i=n(4),r=n(21);i.default.component(o.a.name,o.a),e.default={name:"app",created:function(){r.a()}}},46:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),o=n(35),i=n.n(o),r=n(37),u=n.n(r),c=n(36),s=n.n(c);a.default.component(i.a.name,i.a),a.default.component(u.a.name,u.a),a.default.component(s.a.name,s.a),e.default={name:"main-page",data:function(){return{bottomNav:"home",isCony:"don't know"}},props:[],methods:{onChangeBottomNav:function(t){this.$router.push(t),this.bottomNav=t},onMenuClick:function(){java.openDrawer(),console.log("on menu clicked"),console.log("is cony? "+java.isCony()),this.isCony="is cony? "+java.isCony()}},computed:{},created:function(){}}},47:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=new Date(2016,2,14);e.default={name:"duoduo",data:function(){return{}},props:[],methods:{getLoveLength:function(){var t=new Date;return t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),(t.getTime()-a.getTime())/864e5+"天"}},computed:{},created:function(){}}},48:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(21);e.default={name:"favorite",data:function(){return{littleBabyNote:"稍等哦, 大宝在拼命加载...",giantBabyNote:"稍等哦, 大宝在拼命加载...",snackbar:!1}},props:[],methods:{showSnackbar:function(){var t=this;this.snackbar=!0,this.snackbar&&clearTimeout(this.snackTimber),this.snackTimber=setTimeout(function(){t.snackbar=!1},2e3)}},computed:{},created:function(){var t=this;a.b().then(function(e){t.$refs.littleNote.innerHTML=e.attributes.content},function(e){t.showSnackbar()}),a.c().then(function(e){t.$refs.giantNote.innerHTML=e.attributes.content,console.log(e.attributes.content)},function(e){t.showSnackbar()})}}},49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"little",data:function(){return{}},props:[],methods:{},computed:{},created:function(){}}},85:function(t,e){},86:function(t,e){},87:function(t,e){},88:function(t,e){},89:function(t,e){},94:function(t,e,n){t.exports=n.p+"static/img/baby_family.db7a3d3.jpeg"},95:function(t,e,n){t.exports=n.p+"static/img/xiaobao.3379467.png"},96:function(t,e,n){n(86);var a=n(8)(n(46),n(98),null,null);t.exports=a.exports},97:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-card",{staticStyle:{margin:"8px"}},[a("mu-card-media",[a("img",{attrs:{src:n(95),alt:"小宝"}})])],1)],1)},staticRenderFns:[]}},98:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%","overflow-y":"hidden"}},[n("mu-appbar",{staticStyle:{"text-align":"left","font-style":"oblique","font-size":"larger"},attrs:{title:t.isCony}},[n("mu-icon-button",{attrs:{icon:"menu"},on:{click:t.onMenuClick},slot:"left"})],1),t._v(" "),n("div",{staticStyle:{"padding-bottom":"56px",height:"100%"}},[n("keep-alive",[n("router-view")],1)],1),t._v(" "),n("mu-row",{staticClass:"bottom-bar",staticStyle:{height:"56px"}},[n("mu-bottom-nav",{attrs:{value:t.bottomNav,shift:""},on:{change:t.onChangeBottomNav}},[n("mu-bottom-nav-item",{attrs:{value:"duoduo",title:"DuoDuo",icon:"home"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"little",title:"Little",icon:"alarm"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"giant",title:"Giant",icon:"favorite"}})],1)],1)],1)},staticRenderFns:[]}},99:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",width:"100%"}},[n("mu-card",{staticStyle:{height:"50%",width:"100%"}},[n("div",{ref:"littleNote",staticStyle:{height:"100%","text-align":"left","padding-left":"10px","padding-top":"10px","padding-bottom":"10px","font-size":"larger","overflow-y":"scroll"}},[t._v("\n      "+t._s(t.littleBabyNote)+"\n    ")])]),t._v(" "),n("mu-card",{staticStyle:{height:"50%",width:"100%"}},[n("div",{ref:"giantNote",staticStyle:{height:"100%","text-align":"left","padding-left":"10px","padding-top":"10px","padding-bottom":"10px","font-size":"larger","overflow-y":"scroll"}},[t._v(t._s(t.giantBabyNote)+"\n    ")])]),t._v(" "),t.snackbar?n("mu-snackbar",{attrs:{message:"获取fastnote出错 :|"}}):t._e()],1)},staticRenderFns:[]}}},[44]);
//# sourceMappingURL=app.bba489607abbc101c045.js.map