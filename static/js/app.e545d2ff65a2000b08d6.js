webpackJsonp([2],Array(18).concat([function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o="update_time_span"},,,,,,,,,function(t,e,n){n(134);var o=n(2)(n(69),n(157),null,null);t.exports=o.exports},function(t,e,n){n(133);var o=n(2)(n(70),n(156),null,null);t.exports=o.exports},function(t,e,n){n(128);var o=n(2)(n(73),n(151),null,null);t.exports=o.exports},function(t,e,n){"use strict";function o(t){return new s.a(function(e,n){new l.a.Query("CountDown").equalTo("is_cony",t).find().then(function(t){return e(t)},function(t){return n(t)})})}function i(t,e,n){return new s.a(function(o,i){(new(l.a.Object.extend("CountDown"))).save({is_cony:t,content:e,target_date:n}).then(function(t){console.log(t),o()},function(t){return i(t)})})}e.a=o,e.b=i;var a=n(35),s=n.n(a),r=n(26),l=n.n(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(168),i={};o.keys().forEach(function(t){"./index.js"!==t&&(i[t.replace(/(\.\/|\.js)/g,"")]=o(t).default)}),e.default=i},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var o=n(3),i={};i.install=function(t,e){t.prototype.$eventbus=new o.default,t.prototype.EventType={OPEN_COUNT_DOWN_DIALOG:"little/open_count_down_dialog",UPDATE_COUNT_DOWN_LIST:"little/update_count_down_list",TIME_SPAN_CHANGE:"music-clock/update_time_span"}},e.a=i},function(t,e,n){"use strict";var o=n(3),i=n(160),a=n(27),s=n.n(a),r=n(29),l=n.n(r),c=n(28),u=n.n(c),d=n(146),v=n.n(d),f=n(147),m=n.n(f),p=n(148),h=n.n(p);o.default.use(i.a),e.a=new i.a({routes:[{path:"/",redirect:"/duoduo"},{path:"/duoduo",name:"duoduo",component:s.a},{path:"/little",name:"little",component:l.a},{path:"/giant",name:"giant",component:u.a},{path:"/music-clock",name:"musicClock",component:v.a},{path:"/music-list",name:"musicList",component:m.a},{path:"/music-setting",name:"musicSetting",component:h.a}]})},function(t,e,n){"use strict";var o=n(167),i=n(3),a=n(31);i.default.use(o.a);var s=new o.a.Store({modules:a.default});e.a=s},function(t,e,n){"use strict";var o=n(139),i=n.n(o),a={};a.install=function(t,e){t.prototype.$storage=i.a},e.a=a},,function(t,e,n){n(135);var o=n(2)(n(66),n(158),null,null);t.exports=o.exports},,,function(t,e,n){"use strict";function o(){a.a.init({appId:"al5DXaGvmjcmCByiGKixzBDb-gzGzoHsz",appKey:"SXrCzX0RMXHDN1HGb8w1oP4i"})}e.a=o;var i=n(26),a=n.n(i)},function(t,e,n){"use strict";function o(){return new s.a(function(t,e){new l.a.Query("FastNoteBean").equalTo("isCony",!0).limit(1).find().then(function(e){return t(e[0])},function(t){return e(t)})})}function i(){return new s.a(function(t,e){new l.a.Query("FastNoteBean").equalTo("isCony",!1).limit(1).find().then(function(e){return t(e[0])},function(t){return e(t)})})}e.a=o,e.b=i;var a=n(35),s=n.n(a),r=n(26),l=n.n(r)},function(t,e,n){"use strict";var o=n(77),i=n.n(o),a=n(78),s=n.n(a),r=function(){function t(){i()(this,t)}return s()(t,null,[{key:"isEmpty",value:function(t){return null===t||void 0===t||0===t.length}},{key:"getFormatDateStr",value:function(t){return void 0===t||null===t?"":t instanceof Date?t.toISOString().slice(0,10):""}}]),t}();e.a=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(57),i=n.n(o),a=n(53),s=n(3),r=n(56),l=n.n(r),c=n(58),u=n.n(c),d=n(52),v=n(55),f=n(54);n.e(0).then(n.bind(null,125)),s.default.use(u.a),s.default.use(l.a),s.default.use(d.a),s.default.use(v.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:a.a,store:f.a,template:"<App/>",components:{App:i.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={main:0},i={DECREMENT_MAIN_COUNTER:function(t){t.main--},INCREMENT_MAIN_COUNTER:function(t){t.main++}},a={someAsyncTask:function(t){(0,t.commit)("INCREMENT_MAIN_COUNTER")}};e.default={state:o,mutations:i,actions:a}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(79),i=n.n(o),a=n(32),s=n.n(a),r=n(33),l=n.n(r),c=n(18),u={timeSpan:20},d=i()({},c.a,function(t,e){e=l()(e),s()(e)&&(t.timeSpan=e)});e.default={state:u,mutations:d}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(143),i=n.n(o),a=n(142),s=n.n(a),r=n(3),l=n(60);r.default.component(i.a.name,i.a),r.default.component(s.a.name,s.a),e.default={name:"app",created:function(){l.a()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(27),a=n.n(i),s=n(29),r=n.n(s),l=n(28),c=n.n(l),u=n(162);o.default.component(a.a.name,a.a),o.default.component(r.a.name,r.a),o.default.component(c.a.name,c.a),e.default={components:{VListGroup:u.a},name:"home-page",data:function(){return{bottomNav:"home",drawerOpen:!1,store:this.store}},props:[],methods:{onChangeBottomNav:function(t){this.$router.push(t),this.bottomNav=t},onMenuClick:function(){this.drawerOpen=!this.drawerOpen}},computed:{},created:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(27),a=n.n(i),s=n(29),r=n.n(s),l=n(28),c=n.n(l);o.default.component(a.a.name,a.a),o.default.component(r.a.name,r.a),o.default.component(c.a.name,c.a),e.default={name:"main-page",data:function(){return{bottomNav:"home",drawerOpen:!1,store:this.store}},props:[],methods:{onChangeBottomNav:function(t){this.$router.push(t),this.bottomNav=t},onMenuClick:function(){this.drawerOpen=!this.drawerOpen}},computed:{},created:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=new Date(2016,2,14);e.default={name:"duoduo",data:function(){return{}},props:[],methods:{getLoveLength:function(){var t=new Date;return t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),(t.getTime()-o.getTime())/864e5+"天"}},computed:{},created:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(61);e.default={name:"favorite",data:function(){return{littleBabyNote:"稍等哦, 大宝在拼命加载...",giantBabyNote:"稍等哦, 大宝在拼命加载...",snackbar:!1}},props:[],methods:{showSnackbar:function(){var t=this;this.snackbar=!0,this.snackbar&&clearTimeout(this.snackTimber),this.snackTimber=setTimeout(function(){t.snackbar=!1},2e3)}},computed:{},created:function(){var t=this;o.a().then(function(e){t.$refs.littleNote.innerHTML=e.attributes.content},function(e){t.showSnackbar()}),o.b().then(function(e){t.$refs.giantNote.innerHTML=e.attributes.content,console.log(e.attributes.content)},function(e){t.showSnackbar()})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"count-down",data:function(){return{dayNum:10}},props:["countDown"],methods:{onClickDelete:function(){var t=this;this.countDown.destroy().then(function(e){console.log("delete success"),t.$eventbus.$emit(t.EventType.UPDATE_COUNT_DOWN_LIST)},function(t){console.log("delete err"+t)})},removeRestTime:function(t){return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}},computed:{},created:function(){var t=new Date,e=this.countDown.attributes.target_date;t=this.removeRestTime(t),e=this.removeRestTime(e),this.dayNum=(e.getTime()-t.getTime())/864e5,console.log(t),console.log(e),console.log(this.dayNum),console.log(e.getMilliseconds()-t.getMilliseconds())}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(62),i=n(30);e.default={name:"count-down-dialog",data:function(){return{show:!1,dateStr:"",targetDate:new Date,content:""}},props:["showAddDialog"],methods:{close:function(){this.show=!1},onCancelClick:function(){this.show=!1},onSureClick:function(){var t=this;o.a.isEmpty(this.content)||(this.targetDate=new Date(this.dateStr),i.b(this.$store.state.isCony,this.content,this.targetDate).then(function(e){t.$eventbus.$emit(t.EventType.UPDATE_COUNT_DOWN_LIST)},function(t){console.log("create new countdown fail...")}),this.show=!1)}},computed:{},created:function(){var t=this;this.$eventbus.$on(this.EventType.OPEN_COUNT_DOWN_DIALOG,function(){t.show=!0})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(30),i=n(144),a=n.n(i),s=n(145),r=n.n(s);e.default={name:"little",components:{"count-down":a.a,"count-down-dialog":r.a},data:function(){return{countDowns:[],refreshing:!1,trigger:null}},props:[],methods:{refresh:function(){this.refreshing=!0,this.fetchCountDownArray()},fetchCountDownArray:function(){var t=this;o.a(this.$store.state.isCony).then(function(e){void 0!==e&&null!==e&&(t.countDowns=e,console.log(e)),t.refreshing=!1},function(e){console.log(e),t.refreshing=!1})},onClickAddCountDown:function(){this.$eventbus.$emit(this.EventType.OPEN_COUNT_DOWN_DIALOG)}},computed:{countDownArray:function(){return this.countDowns}},created:function(){var t=this;this.fetchCountDownArray(),this.$eventbus.$on(this.EventType.UPDATE_COUNT_DOWN_LIST,function(){t.fetchCountDownArray(),console.log("get teh event to update conunt down list")})},mounted:function(){this.trigger=this.$refs.page}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(33),i=n.n(o),a=n(59),s=n.n(a),r=n(18);e.default={data:function(){return{timeSpan:100,musicPlayer:null,countDown:{running:!1,startTime:null,currentCountDownLabel:this.getCountDownLabel(60*this.$store.state.Setting.timeSpan)}}},name:"music-clock",components:{},methods:{initMusicPlayer:function(){this.musicPlayer=new s.a({element:document.getElementById("music-player"),narrow:!1,autoplay:!1,mutex:!0,theme:"#e6d0b2",mode:"random",preload:"metadata",listmaxheight:"513px",music:{title:"Have a rest bao 🤔",author:"liuxy",url:this.randomOneSongUrl(),pic:"http://devtest.qiniudn.com/Preparation.jpg"}})},onMusicClockFabClick:function(){this.countDown.running?this.endCountDown():(this.initMusicPlayer(),this.startCountDown())},randomOneSongUrl:function(){var t=["Everglow.mp3","Fix-you.mp3","The-Scientist.mp3","Yellow.mp3","只因当时太紧张.mp3"];return"http://ssthouse.github.io/static/music/"+t[Math.floor(Math.random()*t.length)]},getCountDownLabel:function(t){var e=i()(t/60),n=i()(t%60);return e+":"+(n>=10?n:"0"+n)},startCountDown:function(){var t=this;this.initMusicPlayer(),this.$refs.fabIcon.textContent="pause";var e=new Date;this.countDown.running=!0,this.countDown.startTime=e,this.countDownHandler=setInterval(function(){var e=new Date,n=Math.floor((e-t.countDown.startTime)/1e3),o=60*t.$store.state.Setting.timeSpan-n;t.countDown.currentCountDownLabel=t.getCountDownLabel(o),0===o&&(alert("Time to have a rest 🤘"),t.musicPlayer.play(),t.endCountDown())},1e3)},endCountDown:function(){clearInterval(this.countDownHandler),this.countDown.running=!1,this.countDown.currentCountDownLabel=this.getCountDownLabel(60*this.$store.state.Setting.timeSpan),this.$refs.fabIcon.textContent="play_arrow"},initListener:function(){var t=this;this.$eventbus.$on(this.EventType.TIME_SPAN_CHANGE,function(e){!0!==t.countDown.running&&(t.countDown.currentCountDownLabel=t.getCountDownLabel(60*e))})}},created:function(){var t=this;this.initListener(),this.$storage.getItem("timeSpan").then(function(e){void 0!==e&&null!==e&&(t.$eventbus.$emit(t.EventType.TIME_SPAN_CHANGE,e),t.$store.commit(r.a,e))})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{musicList:[],items:[{avatar:"/static/coldplay_demo.jpg",title:"Brunch this weekend?"},{divider:!0,inset:!0},{avatar:"/static/coldplay_demo.jpg",title:"Summer BBQ"},{divider:!0,inset:!0},{avatar:"/static/coldplay_demo.jpg",title:"Oui oui"}]}},name:"music-list",components:{},methods:{},created:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(32),i=n.n(o),a=n(18);e.default={name:"setting",data:function(){return{timeSpan:20,numberRule:function(t){return!!i()(Number(t))||"Time need to be int ;)"}}},components:{},methods:{onTimeSpanChange:function(t){this.$store.commit(a.a,t),this.$eventbus.$emit(this.EventType.TIME_SPAN_CHANGE,t),this.$storage.setItem("timeSpan",t)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,function(t,e,n){n(126);var o=n(2)(n(67),n(149),null,null);t.exports=o.exports},function(t,e,n){n(132);var o=n(2)(n(68),n(155),null,null);t.exports=o.exports},function(t,e,n){n(127);var o=n(2)(n(71),n(150),null,null);t.exports=o.exports},function(t,e,n){n(129);var o=n(2)(n(72),n(152),null,null);t.exports=o.exports},function(t,e,n){n(130);var o=n(2)(n(74),n(153),null,null);t.exports=o.exports},function(t,e,n){n(131);var o=n(2)(n(75),n(154),null,null);t.exports=o.exports},function(t,e,n){n(136);var o=n(2)(n(76),n(159),null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{clipped:"",fixed:"",app:""},model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}},[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{attrs:{to:"duoduo"}},[n("v-list-tile-action",[n("v-icon",[t._v("pets")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"larger-menu"},[t._v("Duo 🐶")])],1)],1),t._v(" "),n("v-list-tile",{attrs:{to:"little"}},[n("v-list-tile-action",[n("v-icon",[t._v("alarm")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"larger-menu"},[t._v("Little 🐷")])],1)],1),t._v(" "),n("v-list-tile",{attrs:{to:"giant"}},[n("v-list-tile-action",[n("v-icon",[t._v("favorite")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"larger-menu"},[t._v("Giant 🐹")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-tile",{attrs:{to:"music-clock"}},[n("v-list-tile-action",[n("v-icon",[t._v("music_note")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"larger-menu"},[t._v("Music Clock")])],1)],1),t._v(" "),n("v-list-tile",{attrs:{to:"music-list"}},[n("v-list-tile-action",[n("v-icon",[t._v("queue_music")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"larger-menu"},[t._v("List")])],1)],1),t._v(" "),n("v-list-tile",{attrs:{to:"music-setting"}},[n("v-list-tile-action",[n("v-icon",[t._v("settings")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"larger-menu"},[t._v("Clock Setting")])],1)],1)],1)],1),t._v(" "),n("v-toolbar",{attrs:{color:"blue darken-3",dark:"",app:"","clipped-left":"",fixed:""}},[n("v-toolbar-title",{staticClass:"ml-0 pl-3 toolbar-title",staticStyle:{width:"300px"}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.onMenuClick()}}}),t._v(" "),n("span",[t._v("💃💃💃 🏃🏃🏃")])],1),t._v(" "),n("div",{staticClass:"d-flex align-center",staticStyle:{"margin-left":"auto"}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("apps")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("notifications")])],1)],1)],1),t._v(" "),n("v-content",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mu-card",{staticStyle:{"margin-bottom":"8px",padding:"8px"}},[n("mu-row",[n("mu-col",{attrs:{width:"70"}},[n("a",{staticStyle:{"font-size":"large",color:"black"}},[t._v(t._s(t.countDown.attributes.content))]),t._v(" "),n("br"),t._v(" "),n("a",[t._v(t._s("还有"+t.dayNum+"天!"))])]),t._v(" "),n("mu-col",{staticStyle:{"vertical-align":"middle",margin:"auto"},attrs:{width:"30"}},[n("mu-raised-button",{staticStyle:{"vertical-align":"middle"},attrs:{label:"delete",color:"blue500"},on:{click:function(e){t.onClickDelete()}}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("mu-refresh-control",{attrs:{refreshing:t.refreshing,trigger:t.trigger},on:{refresh:t.refresh}}),t._v(" "),n("div",{ref:"page"},[n("div",t._l(t.countDownArray,function(t){return n("count-down",{attrs:{countDown:t}})})),t._v(" "),n("count-down-dialog")],1),t._v(" "),n("div",{staticClass:"add-count-down"},[n("mu-float-button",{attrs:{icon:"add",secondary:""},on:{click:function(e){t.onClickAddCountDown()}}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mu-dialog",{attrs:{open:t.show,title:"增加倒计时"},on:{close:t.close}},[n("mu-date-picker",{attrs:{hintText:"日期: "},model:{value:t.dateStr,callback:function(e){t.dateStr=e},expression:"dateStr"}}),t._v(" "),n("br"),t._v(" "),n("mu-text-field",{attrs:{hintText:"时间内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("br"),t._v(" "),n("mu-flat-button",{attrs:{slot:"actions",primary:"",label:"取消"},on:{click:function(e){t.onCancelClick()}},slot:"actions"}),t._v(" "),n("mu-flat-button",{attrs:{slot:"actions",primary:"",label:"确定"},on:{click:function(e){t.onSureClick()}},slot:"actions"})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg6:"",sm6:"",xs12:""}},[n("v-card",[n("v-card-media",{attrs:{src:"static/coldplay_demo.jpg",height:"300px"}}),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v("Cold play       ~~~It's so cold now 🐹🐷")])]),t._v(" "),n("div",{staticClass:"aplayer",staticStyle:{width:"100%"},attrs:{id:"music-player"}})])],1)],1),t._v(" "),n("v-flex",{attrs:{lg6:""}},[n("div",{staticClass:"d-flex align-center",staticStyle:{"margin-left":"auto"}},[n("v-chip",{staticClass:"top-count-down",staticStyle:{"margin-left":"16px","margin-right":"16px"},attrs:{disabled:"",color:"pink","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("alarm")]),t._v(" "),n("span",{staticClass:"count-time-label"},[t._v(t._s(t.countDown.currentCountDownLabel))])],1)],1)])],1),t._v(" "),n("v-layout",{attrs:{lg6:"",xs12:""}}),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-fab-transition",[n("v-btn",{attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"pink"},on:{click:function(e){e.stopPropagation(),t.onMusicClockFabClick(e)}}},[n("v-icon",{ref:"fabIcon"},[t._v("play_arrow")])],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:""}},[n("v-list",{staticStyle:{width:"100%"},attrs:{"two-line":""}},[t._l(t.items,function(e){return[e.header?n("v-subheader",{domProps:{textContent:t._s(e.header)}}):e.divider?n("v-divider",{attrs:{inset:e.inset}}):n("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:function(t){}}},[n("v-list-tile-avatar",[n("img",{attrs:{src:e.avatar}})]),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]})],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{height:"100vh","overflow-y":"hidden"}},[n("mu-appbar",{staticStyle:{"text-align":"left","font-style":"oblique","font-size":"larger"},attrs:{title:"For you 🐳"}},[n("mu-icon-button",{attrs:{slot:"left",icon:"menu"},on:{click:t.onMenuClick},slot:"left"})],1),t._v(" "),n("mu-row",{staticStyle:{position:"absolute",top:"56px",bottom:"56px",width:"100%"}},[n("mu-col",{staticClass:"drawer-bar",attrs:{desktop:"20"}},[n("mu-drawer",{staticClass:"drawer-container",attrs:{open:t.drawerOpen},on:{close:t.onMenuClick}},[n("mu-list",[n("mu-list-item",{attrs:{title:"Hi my bao",to:"duoduo"}},[n("mu-icon",{attrs:{slot:"left",value:"chat_bubble"},slot:"left"})],1),t._v(" "),n("mu-list-item",{attrs:{title:"Menu Item 2",to:"little"}}),t._v(" "),n("mu-list-item",{attrs:{title:"Menu Item 3",to:"giant"}})],1)],1)],1),t._v(" "),n("mu-col",{attrs:{desktop:"80"}},[n("keep-alive",[n("router-view")],1)],1)],1),t._v(" "),n("mu-row",{staticClass:"bottom-bar",staticStyle:{height:"56px"}},[n("mu-bottom-nav",{attrs:{value:t.bottomNav,shift:""},on:{change:t.onChangeBottomNav}},[n("mu-bottom-nav-item",{attrs:{value:"duoduo",title:"Hi bao",icon:"home"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"little",title:"Little",icon:"alarm"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"giant",title:"Giant",icon:"favorite"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%",height:"100%"}},[n("mu-flexbox",{staticStyle:{height:"100%"},attrs:{orient:"vertical"}},[n("mu-flexbox-item",{staticClass:"flex-demo"},[n("mu-card",{staticStyle:{height:"50%",width:"100%"}},[n("div",{ref:"littleNote",staticStyle:{height:"100%","text-align":"left","padding-left":"10px","padding-top":"10px","padding-bottom":"10px","font-size":"larger","overflow-y":"scroll"}},[t._v("\n          "+t._s(t.littleBabyNote)+"\n        ")])])],1),t._v(" "),n("mu-flexbox-item",{staticClass:"flex-demo"},[n("mu-card",{staticStyle:{height:"50%",width:"100%"}},[n("div",{ref:"giantNote",staticStyle:{height:"100%","text-align":"left","padding-left":"10px","padding-top":"10px","padding-bottom":"10px","font-size":"larger","overflow-y":"scroll"}},[t._v(t._s(t.giantBabyNote)+"\n        ")])])],1)],1),t._v(" "),t.snackbar?n("mu-snackbar",{attrs:{message:"获取fastnote出错 :|"}}):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",lg6:""}},[n("v-card",{staticClass:"main-banner"},[n("v-card-media",{staticClass:"main-page-card-media",attrs:{src:"../static/little.jpg",height:"240px",alt:"baby_family"}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs6:""}},[n("span",{staticClass:"headline"},[t._v(t._s("已相爱: "+t.getLoveLength()))])])],1)],1)],1),t._v(" "),n("v-card-title",[n("div",[n("span",{staticClass:"grey--text"},[t._v("Number 10")]),n("br"),t._v(" "),n("span",[t._v("Whitehaven Beach")]),n("br"),t._v(" "),n("span",[t._v("Whitsunday Island, Whitsunday Islands")])])])],1)],1)],1),t._v(" "),n("div",[n("div",{staticStyle:{display:"inline-block",width:"400px",height:"200px","background-color":"#2c3e50",float:"left","border-radius":"8px"}},[n("div",[n("span",{staticStyle:{color:"#FFF",float:"left","margin-left":"20%","font-size":"24px",position:"relative"}},[t._v("Hi, wo de bao!")]),t._v(" "),n("span",{staticStyle:{top:"10px",left:"-40px",position:"relative",color:"#FFF"}},[t._v("left small pin")])])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("home-page",{staticStyle:{height:"100%"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs8:""}},[n("v-text-field",{attrs:{value:t.timeSpan,label:"Time span",suffix:"min",rules:[t.numberRule]},on:{change:t.onTimeSpanChange}})],1)],1)],1)},staticRenderFns:[]}},,,,,,,,,function(t,e,n){function o(t){return n(i(t))}function i(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./Counter.js":64,"./Setting.js":65,"./index.js":31};o.keys=function(){return Object.keys(a)},o.resolve=i,t.exports=o,o.id=168}]),[63]);
//# sourceMappingURL=app.e545d2ff65a2000b08d6.js.map