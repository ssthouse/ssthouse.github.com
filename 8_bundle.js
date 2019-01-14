(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(t,e,n){var i=n(175);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(5).default)("10cc82e7",i,!1,{})},147:function(t,e,n){var i=n(177);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(5).default)("8dc7d404",i,!1,{})},174:function(t,e,n){"use strict";var i=n(146);n.n(i).a},175:function(t,e,n){(t.exports=n(4)(void 0)).push([t.i,"\n.project-card[data-v-49e27517] {\n  padding: 0;\n  margin: 16px;\n  position: relative;\n  width: 360px;\n  height: 480px !important;\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.project-card .img-container[data-v-49e27517] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.project-card .project-title[data-v-49e27517] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n  width: 100%;\n  text-align: left;\n  justify-self: flex-start;\n  font-size: 1.6rem;\n  z-index: 1;\n  background-color: rgba(238, 238, 238, 0.746);\n}\n.project-card .project-title .github-link[data-v-49e27517] {\n  margin-left: 8px;\n}\n.project-card .project-title .github-link img[data-v-49e27517] {\n  transition-property: box-shadow;\n  transition-duration: 1s;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n}\n.project-card .project-title .github-link:hover img[data-v-49e27517] {\n  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 2px 3px 0 rgba(0, 0, 0, 0.12);\n}\n.project-card .project-description[data-v-49e27517] {\n  justify-self: flex-end;\n  padding: 4px;\n  width: 100%;\n  text-align: left;\n  z-index: 1;\n  transition-property: opacity, background-color;\n  transition-duration: 1s;\n  background-color: transparent;\n  font-size: 1.4rem;\n  opacity: 0;\n}\n.project-card:hover .project-description[data-v-49e27517] {\n  opacity: 1;\n  background-color: rgba(238, 238, 238, 0.746);\n}\n",""])},176:function(t,e,n){"use strict";var i=n(147);n.n(i).a},177:function(t,e,n){(t.exports=n(4)(void 0)).push([t.i,"",""])},180:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},t._l(t.projectList,function(t){return n("project-card",{key:t.title,attrs:{project:t}})}))},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"project-card"},[n("div",{staticClass:"img-container"},[n("img",{attrs:{src:t.project.img,height:"100%"}})]),t._v(" "),n("div",{staticClass:"project-title"},[n("a",{attrs:{href:t.project.href,target:"_blank"}},[n("span",[t._v("\n        "+t._s(t.project.title)+"\n      ")])]),t._v(" "),n("a",{staticClass:"github-link",attrs:{target:"_blank",href:t.project.sourceCodeHref}},[n("img",{attrs:{src:"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"}})])]),t._v(" "),t.project.description?n("span",{staticClass:"project-description"},[t._v("\n    "+t._s(t.project.description)+"\n  ")]):t._e()])};o._withStripped=i._withStripped=!0;var s={props:["project"],data:function(){return{}}},r=(n(174),n(13)),a=Object(r.a)(s,o,[],!1,null,"49e27517",null);a.options.__file="src/components/code/ProjectCard.vue";var c={components:{ProjectCard:a.exports},data:function(){return{projectList:[{title:"Github Repository 可视化",description:"可视化展示个人及following people的github 仓库",href:"https://ssthouse.github.io/github-visualization/#/main",sourceCodeHref:"https://github.com/ssthouse/github-visualization",img:"https://raw.githubusercontent.com/ssthouse/d3-blog/master/github-visualization/img/visual-github-repo.gif"},{title:"可视化讲解 DOM 构建过程",description:"可视化分析浏览器构建DOM的过程",href:"https://ssthouse.github.io/visual-explain/#/list/domRender",sourceCodeHref:"https://github.com/ssthouse/visual-explain",img:"https://raw.githubusercontent.com/ssthouse/d3-blog/master/dom-render/img/step9.png"},{title:"可视化讲解 深度优先遍历",description:"可视化分析深度遍历过程中栈的变化",href:"https://ssthouse.github.io/visual-explain/#/list/dft",sourceCodeHref:"https://github.com/ssthouse/visual-explain",img:"https://raw.githubusercontent.com/ssthouse/d3-blog/master/viz-depth-first-traversal/img/demo.gif"},{title:"用 D3.js 画一个手机专利关系图",href:"https://ssthouse.github.io/visual-explain/#/list/patent-suit",sourceCodeHref:"https://github.com/ssthouse/visual-explain",img:"https://raw.githubusercontent.com/ssthouse/d3-blog/master/mobile-patent-suit/img/demo.gif"}]}},props:[],methods:{},computed:{},created:function(){},mounted:function(){}},p=(n(176),Object(r.a)(c,i,[],!1,null,null,null));p.options.__file="src/components/code/Code.vue";e.default=p.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2RlL1Byb2plY3RDYXJkLnZ1ZT9jMjk0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvZGUvQ29kZS52dWU/NTc1YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2RlL1Byb2plY3RDYXJkLnZ1ZT8wY2U2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvZGUvUHJvamVjdENhcmQudnVlP2ZiNjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29kZS9Db2RlLnZ1ZT83ZTRlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvZGUvQ29kZS52dWU/MmEwOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2RlL0NvZGUudnVlP2Y2NDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29kZS9Qcm9qZWN0Q2FyZC52dWU/Yzk0YSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29kZS9Qcm9qZWN0Q2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29kZS9Qcm9qZWN0Q2FyZC52dWU/OWNkNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2RlL1Byb2plY3RDYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2RlL0NvZGUudnVlPzVmNzQiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2NvZGUvQ29kZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29kZS9Db2RlLnZ1ZSJdLCJuYW1lcyI6WyJjb250ZW50IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZSIsImkiLCJsb2NhbHMiLCJleHBvcnRzIiwiYWRkIiwiZGVmYXVsdCIsIl9ub2RlX21vZHVsZXNfdnVlX3N0eWxlX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfbm9kZV9tb2R1bGVzX2xlc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX25vZGVfbW9kdWxlc192dWVfbG9hZGVyX2xpYl9pbmRleF9qc192dWVfbG9hZGVyX29wdGlvbnNfUHJvamVjdENhcmRfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfaWRfNDllMjc1MTdfbGFuZ19sZXNzX3Njb3BlZF90cnVlX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwibiIsInVuZGVmaW5lZCIsInB1c2giLCJfbm9kZV9tb2R1bGVzX3Z1ZV9zdHlsZV9sb2FkZXJfaW5kZXhfanNfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfaW5kZXhfanNfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX25vZGVfbW9kdWxlc19sZXNzX2xvYWRlcl9kaXN0X2Nqc19qc19ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX0NvZGVfdnVlX3Z1ZV90eXBlX3N0eWxlX2luZGV4XzBfbGFuZ19jc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJfbCIsInByb2plY3RMaXN0IiwicHJvamVjdCIsImtleSIsInRpdGxlIiwiYXR0cnMiLCJQcm9qZWN0Q2FyZHZ1ZV90eXBlX3RlbXBsYXRlX2lkXzQ5ZTI3NTE3X3Njb3BlZF90cnVlX3JlbmRlciIsInN0YXRpY0NsYXNzIiwic3JjIiwiaW1nIiwiaGVpZ2h0IiwiX3YiLCJocmVmIiwidGFyZ2V0IiwiX3MiLCJzb3VyY2VDb2RlSHJlZiIsImRlc2NyaXB0aW9uIiwiX2UiLCJfd2l0aFN0cmlwcGVkIiwiY29kZV9Qcm9qZWN0Q2FyZHZ1ZV90eXBlX3NjcmlwdF9sYW5nX2pzXyIsInByb3BzIiwiZGF0YSIsImNvbXBvbmVudCIsIk9iamVjdCIsImNvbXBvbmVudE5vcm1hbGl6ZXIiLCJvcHRpb25zIiwiX19maWxlIiwiY29kZV9Db2RldnVlX3R5cGVfc2NyaXB0X2xhbmdfanNfIiwiY29tcG9uZW50cyIsIlByb2plY3RDYXJkIiwibWV0aG9kcyIsImNvbXB1dGVkIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJDb2RlX2NvbXBvbmVudCIsIl9fd2VicGFja19leHBvcnRzX18iXSwibWFwcGluZ3MiOiI2RUFHQSxJQUFBQSxFQUFjQyxFQUFRLEtBQ3RCLGlCQUFBRCxNQUFBLEVBQTRDRSxFQUFBQyxFQUFTSCxFQUFBLE1BQ3JEQSxFQUFBSSxTQUFBRixFQUFBRyxRQUFBTCxFQUFBSSxTQUdBRSxFQURVTCxFQUFRLEdBQWdFTSxTQUNsRixXQUFBUCxHQUFBLDJCQ0xBLElBQUFBLEVBQWNDLEVBQVEsS0FDdEIsaUJBQUFELE1BQUEsRUFBNENFLEVBQUFDLEVBQVNILEVBQUEsTUFDckRBLEVBQUFJLFNBQUFGLEVBQUFHLFFBQUFMLEVBQUFJLFNBR0FFLEVBRFVMLEVBQVEsR0FBZ0VNLFNBQ2xGLFdBQUFQLEdBQUEsd0NDUkEsSUFBQVEsRUFBQVAsRUFBQSxLQUFBQSxFQUFBUSxFQUFBRCxHQUE2WCx3QkNBN1hOLEVBQUFHLFFBQTJCSixFQUFRLEVBQVJBLE1BQTBEUyxJQUtyRkMsS0FBQSxDQUFjVCxFQUFBQyxFQUFTLGduREFBOG1ELHVDQ0xyb0QsSUFBQVMsRUFBQVgsRUFBQSxLQUFBQSxFQUFBUSxFQUFBRyxHQUE2Vix3QkNBN1ZWLEVBQUFHLFFBQTJCSixFQUFRLEVBQVJBLE1BQTBEUyxJQUtyRkMsS0FBQSxDQUFjVCxFQUFBQyxFQUFTLGlEQ0x2QixJQUFBVSxFQUFBLFdBQ0EsSUFBQUMsRUFBQUMsS0FDQUMsRUFBQUYsRUFBQUcsZUFDQUMsRUFBQUosRUFBQUssTUFBQUQsSUFBQUYsRUFDQSxPQUFBRSxFQUNBLE1BQ0EsR0FDQUosRUFBQU0sR0FBQU4sRUFBQU8sWUFBQSxTQUFBQyxHQUNBLE9BQUFKLEVBQUEsZ0JBQ0FLLElBQUFELEVBQUFFLE1BQ0FDLE1BQUEsQ0FBZ0JILGlCQ1ZaSSxFQUFNLFdBQ1YsSUFBQVosRUFBQUMsS0FDQUMsRUFBQUYsRUFBQUcsZUFDQUMsRUFBQUosRUFBQUssTUFBQUQsSUFBQUYsRUFDQSxPQUFBRSxFQUFBLFVBQXVCUyxZQUFBLGdCQUE4QixDQUNyRFQsRUFBQSxPQUFlUyxZQUFBLGlCQUErQixDQUM5Q1QsRUFBQSxPQUFpQk8sTUFBQSxDQUFTRyxJQUFBZCxFQUFBUSxRQUFBTyxJQUFBQyxPQUFBLFlBRTFCaEIsRUFBQWlCLEdBQUEsS0FDQWIsRUFBQSxPQUFlUyxZQUFBLGlCQUErQixDQUM5Q1QsRUFBQSxLQUFlTyxNQUFBLENBQVNPLEtBQUFsQixFQUFBUSxRQUFBVSxLQUFBQyxPQUFBLFdBQTZDLENBQ3JFZixFQUFBLFFBQ0FKLEVBQUFpQixHQUFBLGFBQUFqQixFQUFBb0IsR0FBQXBCLEVBQUFRLFFBQUFFLE9BQUEsZ0JBR0FWLEVBQUFpQixHQUFBLEtBQ0FiLEVBQ0EsSUFDQSxDQUNBUyxZQUFBLGNBQ0FGLE1BQUEsQ0FBa0JRLE9BQUEsU0FBQUQsS0FBQWxCLEVBQUFRLFFBQUFhLGlCQUVsQixDQUNBakIsRUFBQSxPQUNBTyxNQUFBLENBQ0FHLElBQ0EsaUZBTUFkLEVBQUFpQixHQUFBLEtBQ0FqQixFQUFBUSxRQUFBYyxZQUNBbEIsRUFBQSxRQUFvQlMsWUFBQSx1QkFBcUMsQ0FDekRiLEVBQUFpQixHQUFBLFNBQUFqQixFQUFBb0IsR0FBQXBCLEVBQUFRLFFBQUFjLGFBQUEsVUFFQXRCLEVBQUF1QixRQUlBWCxFQUFNWSxjRHpCTnpCLEVBQUF5QixlQUFBLEVFTUEsSUN0QmlNQyxFRHNCak0sQ0FDQUMsTUFBQSxZQUNBQyxLQUZBLFdBR0EsNEJFakJBQyxFQUFnQkMsT0FBQUMsRUFBQSxFQUFBRCxDQUNkSixFQUNBYixFSDhCaUIsSUc1Qm5CLEVBQ0EsS0FDQSxXQUNBLE1BdUJBZ0IsRUFBQUcsUUFBQUMsT0FBQSxzQ0FDZSxJQ3ZDMktDLEVDVTFMLENBQ0FDLFdBQUEsQ0FBQUMsWUY0QmVQLFdFM0JmRCxLQUZBLFdBR0EsT0FDQXBCLFlBQUEsQ0FDQSxDQUNBRyxNQUFBLHdCQUNBWSxZQUFBLHFDQUNBSixLQUFBLHlEQUNBRyxlQUFBLG1EQUNBTixJQUNBLDZHQUVBLENBQ0FMLE1BQUEsaUJBQ0FZLFlBQUEsbUJBQ0FKLEtBQUEsNkRBQ0FHLGVBQUEsNkNBQ0FOLElBQ0Esc0ZBRUEsQ0FDQUwsTUFBQSxlQUNBWSxZQUFBLG1CQUNBSixLQUFBLHVEQUNBRyxlQUFBLDZDQUNBTixJQUNBLG9HQUVBLENBQ0FMLE1BQUEscUJBQ0FRLEtBQUEsK0RBQ0FHLGVBQUEsNkNBQ0FOLElBQ0EsZ0dBS0FXLE1BQUEsR0FDQVUsUUFBQSxHQUNBQyxTQUFBLEdBQ0FDLFFBQUEsYUFDQUMsUUFBQSxjQzdDSUMsVUFBWVgsT0FBQUMsRUFBQSxFQUFBRCxDQUNkSSxFQUNBbEMsRVBLRixJT0hBLEVBQ0EsS0FDQSxLQUNBLE9BdUJBeUMsRUFBU1QsUUFBQUMsT0FBQSwrQkFDTVMsRUFBQSxRQUFBRCIsImZpbGUiOiI4X2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvamVjdENhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDllMjc1MTcmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxMGNjODJlN1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3RDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ5ZTI3NTE3Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3RDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ5ZTI3NTE3Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiOGRjN2Q0MDRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3RDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ5ZTI3NTE3Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvamVjdENhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDllMjc1MTcmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnByb2plY3QtY2FyZFtkYXRhLXYtNDllMjc1MTddIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDE2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMzYwcHg7XFxuICBoZWlnaHQ6IDQ4MHB4ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0LWNhcmQgLmltZy1jb250YWluZXJbZGF0YS12LTQ5ZTI3NTE3XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG59XFxuLnByb2plY3QtY2FyZCAucHJvamVjdC10aXRsZVtkYXRhLXYtNDllMjc1MTddIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjc0Nik7XFxufVxcbi5wcm9qZWN0LWNhcmQgLnByb2plY3QtdGl0bGUgLmdpdGh1Yi1saW5rW2RhdGEtdi00OWUyNzUxN10ge1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLnByb2plY3QtY2FyZCAucHJvamVjdC10aXRsZSAuZ2l0aHViLWxpbmsgaW1nW2RhdGEtdi00OWUyNzUxN10ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcbi5wcm9qZWN0LWNhcmQgLnByb2plY3QtdGl0bGUgLmdpdGh1Yi1saW5rOmhvdmVyIGltZ1tkYXRhLXYtNDllMjc1MTddIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLnByb2plY3QtY2FyZCAucHJvamVjdC1kZXNjcmlwdGlvbltkYXRhLXYtNDllMjc1MTddIHtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgYmFja2dyb3VuZC1jb2xvcjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIgLnByb2plY3QtZGVzY3JpcHRpb25bZGF0YS12LTQ5ZTI3NTE3XSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjc0Nik7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge30sXG4gICAgX3ZtLl9sKF92bS5wcm9qZWN0TGlzdCwgZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgcmV0dXJuIF9jKFwicHJvamVjdC1jYXJkXCIsIHtcbiAgICAgICAga2V5OiBwcm9qZWN0LnRpdGxlLFxuICAgICAgICBhdHRyczogeyBwcm9qZWN0OiBwcm9qZWN0IH1cbiAgICAgIH0pXG4gICAgfSlcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2LWNhcmRcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9qZWN0LWNhcmRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWctY29udGFpbmVyXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5wcm9qZWN0LmltZywgaGVpZ2h0OiBcIjEwMCVcIiB9IH0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2plY3QtdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0ucHJvamVjdC5ocmVmLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0ucHJvamVjdC50aXRsZSkgKyBcIlxcbiAgICAgIFwiKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2l0aHViLWxpbmtcIixcbiAgICAgICAgICBhdHRyczogeyB0YXJnZXQ6IFwiX2JsYW5rXCIsIGhyZWY6IF92bS5wcm9qZWN0LnNvdXJjZUNvZGVIcmVmIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2ltYWdlcy9tb2R1bGVzL2xvZ29zX3BhZ2UvR2l0SHViLU1hcmsucG5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucHJvamVjdC5kZXNjcmlwdGlvblxuICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0ucHJvamVjdC5kZXNjcmlwdGlvbikgKyBcIlxcbiAgXCIpXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICA8di1jYXJkIGNsYXNzPVwicHJvamVjdC1jYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgOnNyYz1cInByb2plY3QuaW1nXCIgaGVpZ2h0PVwiMTAwJVwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5cbiAgICAgIDxhIDpocmVmPVwicHJvamVjdC5ocmVmXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHt7cHJvamVjdC50aXRsZX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZ2l0aHViLWxpbmtcIiA6aHJlZj1cInByb2plY3Quc291cmNlQ29kZUhyZWZcIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9pbWFnZXMvbW9kdWxlcy9sb2dvc19wYWdlL0dpdEh1Yi1NYXJrLnBuZ1wiIC8+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG5cbiAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIiB2LWlmPVwicHJvamVjdC5kZXNjcmlwdGlvblwiPlxuICAgICAge3twcm9qZWN0LmRlc2NyaXB0aW9ufX1cbiAgICA8L3NwYW4+XG4gIDwvdi1jYXJkPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbJ3Byb2plY3QnXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxufVxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG4ucHJvamVjdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzNjBweDtcbiAgaGVpZ2h0OiA0ODBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5pbWctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLnByb2plY3QtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjc0Nik7XG5cbiAgICAuZ2l0aHViLWxpbmsge1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZ2l0aHViLWxpbms6aG92ZXIge1xuICAgICAgaW1nIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLnByb2plY3QtY2FyZDpob3ZlciB7XG4gIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC43NDYpO1xuICB9XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3RDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3RDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvamVjdENhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5ZTI3NTE3JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2plY3RDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvamVjdENhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Byb2plY3RDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ5ZTI3NTE3Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDllMjc1MTdcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90cmF2aXMvYnVpbGQvc3N0aG91c2Uvc3N0aG91c2UuZ2l0aHViLmNvbS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDllMjc1MTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDllMjc1MTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Byb2plY3RDYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OWUyNzUxNyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0OWUyNzUxNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvY29kZS9Qcm9qZWN0Q2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBzdHlsZT1cIlwiPlxuICAgIDxwcm9qZWN0LWNhcmQgdi1mb3I9XCJwcm9qZWN0IGluIHByb2plY3RMaXN0XCIgOmtleT1cInByb2plY3QudGl0bGVcIiA6cHJvamVjdD1cInByb2plY3RcIj48L3Byb2plY3QtY2FyZD5cbiAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnLi9Qcm9qZWN0Q2FyZC52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBQcm9qZWN0Q2FyZCB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0TGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdHaXRodWIgUmVwb3NpdG9yeSDlj6/op4bljJYnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5Y+v6KeG5YyW5bGV56S65Liq5Lq65Y+KZm9sbG93aW5nIHBlb3BsZeeahGdpdGh1YiDku5PlupMnLFxuICAgICAgICAgIGhyZWY6ICdodHRwczovL3NzdGhvdXNlLmdpdGh1Yi5pby9naXRodWItdmlzdWFsaXphdGlvbi8jL21haW4nLFxuICAgICAgICAgIHNvdXJjZUNvZGVIcmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL3NzdGhvdXNlL2dpdGh1Yi12aXN1YWxpemF0aW9uJyxcbiAgICAgICAgICBpbWc6XG4gICAgICAgICAgICAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NzdGhvdXNlL2QzLWJsb2cvbWFzdGVyL2dpdGh1Yi12aXN1YWxpemF0aW9uL2ltZy92aXN1YWwtZ2l0aHViLXJlcG8uZ2lmJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICflj6/op4bljJborrLop6MgRE9NIOaehOW7uui/h+eoiycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICflj6/op4bljJbliIbmnpDmtY/op4jlmajmnoTlu7pET03nmoTov4fnqIsnLFxuICAgICAgICAgIGhyZWY6ICdodHRwczovL3NzdGhvdXNlLmdpdGh1Yi5pby92aXN1YWwtZXhwbGFpbi8jL2xpc3QvZG9tUmVuZGVyJyxcbiAgICAgICAgICBzb3VyY2VDb2RlSHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zc3Rob3VzZS92aXN1YWwtZXhwbGFpbicsXG4gICAgICAgICAgaW1nOlxuICAgICAgICAgICAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zc3Rob3VzZS9kMy1ibG9nL21hc3Rlci9kb20tcmVuZGVyL2ltZy9zdGVwOS5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+WPr+inhuWMluiusuinoyDmt7HluqbkvJjlhYjpgY3ljoYnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5Y+v6KeG5YyW5YiG5p6Q5rex5bqm6YGN5Y6G6L+H56iL5Lit5qCI55qE5Y+Y5YyWJyxcbiAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9zc3Rob3VzZS5naXRodWIuaW8vdmlzdWFsLWV4cGxhaW4vIy9saXN0L2RmdCcsXG4gICAgICAgICAgc291cmNlQ29kZUhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vc3N0aG91c2UvdmlzdWFsLWV4cGxhaW4nLFxuICAgICAgICAgIGltZzpcbiAgICAgICAgICAgICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc3N0aG91c2UvZDMtYmxvZy9tYXN0ZXIvdml6LWRlcHRoLWZpcnN0LXRyYXZlcnNhbC9pbWcvZGVtby5naWYnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+eUqCBEMy5qcyDnlLvkuIDkuKrmiYvmnLrkuJPliKnlhbPns7vlm74nLFxuICAgICAgICAgIGhyZWY6ICdodHRwczovL3NzdGhvdXNlLmdpdGh1Yi5pby92aXN1YWwtZXhwbGFpbi8jL2xpc3QvcGF0ZW50LXN1aXQnLFxuICAgICAgICAgIHNvdXJjZUNvZGVIcmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL3NzdGhvdXNlL3Zpc3VhbC1leHBsYWluJyxcbiAgICAgICAgICBpbWc6XG4gICAgICAgICAgICAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NzdGhvdXNlL2QzLWJsb2cvbWFzdGVyL21vYmlsZS1wYXRlbnQtc3VpdC9pbWcvZGVtby5naWYnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHByb3BzOiBbXSxcbiAgbWV0aG9kczoge30sXG4gIGNvbXB1dGVkOiB7fSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7fSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7fVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiNjdhY2UyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Db2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90cmF2aXMvYnVpbGQvc3N0aG91c2Uvc3N0aG91c2UuZ2l0aHViLmNvbS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmI2N2FjZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmI2N2FjZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiNjdhY2UyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZiNjdhY2UyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jb2RlL0NvZGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==