(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c347df6c"],{"13a7":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"view_div"},[e("el-dropdown",[e("el-badge",{staticClass:"item",attrs:{"is-dot":"",type:t.wsFlag}},[e("el-button",{attrs:{type:"primary",icon:"el-icon-user",circle:""}})],1),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t.token?t._e():e("el-dropdown-item",{nativeOn:{click:function(e){return t.toLoginView.apply(null,arguments)}}},[t._v("去登陆")]),t.token?e("el-dropdown-item",{nativeOn:{click:function(e){return t.toUserInfoView.apply(null,arguments)}}},[t._v("账户信息")]):t._e(),t.token?e("el-dropdown-item",{nativeOn:{click:function(e){return t.removeToken.apply(null,arguments)}}},[t._v("退出系统")]):t._e()],1)],1)],1)},o=[],a=(s("14d9"),s("4360"));const r=()=>{let t=a["a"].state.token,e=a["a"].state.wsStore.wsFlag,s=a["a"].state.wsStore.sockjs,n=a["a"].state.wsStore.stompClient;if(t&&"success"!==e){let e="/api/websocket/ws?token="+t;s=new SockJS(e),a["a"].commit("wsStore/set_sockjs",s),n=Stomp.over(s),n.debug=function(t){},a["a"].commit("wsStore/set_stompClient",n),n.connect({},(function(){a["a"].commit("wsStore/set_ws_flag","success"),i("/topic/public"),i("/user/topic/chat"),i("/user/topic/logout")}),(function(){a["a"].commit("wsStore/set_ws_flag","warning")}))}},i=t=>{let e=a["a"].state.token,s=a["a"].state.wsStore.wsFlag,n=a["a"].state.wsStore.sockjs,o=a["a"].state.wsStore.stompClient;if(e&&"success"===s&&n&&o){o.subscribe(t,(function(t){a["a"].commit("wsStore/set_message",t.body)}),(function(t){console.log(t)}))}},c=()=>{let t=a["a"].state.token,e=a["a"].state.wsStore.wsFlag,s=a["a"].state.wsStore.sockjs,n=a["a"].state.wsStore.stompClient;t&&"success"===e&&(s&&(n&&(n.disconnect(),n=null),s.close(),s=null),a["a"].commit("wsStore/set_ws_flag","warning"))};var l={name:"zfjUserIcon",components:{},props:{},computed:{token(){return this.$store.state.token},wsFlag(){return this.$store.state.wsStore.wsFlag},wsMessage(){return this.$store.state.wsStore.wsMessage}},watch:{wsFlag:{handler(t,e){console.log(t),"success"!==t&&r()},deep:!0,immediate:!0}},methods:{async toNextPage(t,e){await this.$router.push({path:t,query:e})},cronMethod(){console.log("one cron"),r()},openCron(){console.log("open cron"),this.wsCron=setInterval(this.cronMethod,5e3)},init(){setTimeout(this.openCron,1e4)},destroy(){c(),this.wsCron&&clearInterval(this.wsCron)},toUserInfoView(){this.toNextPage("/user/userAccount")},toLoginView(){this.toNextPage("/login")},removeToken(){this.$store.commit("del_token"),location.reload()}},data(){return{wsCron:null}},mounted(){this.init()},beforeDestroy(){this.destroy()}},u=l,d=s("2877"),m=Object(d["a"])(u,n,o,!1,null,"cc9d3b30",null);e["default"]=m.exports},1414:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"view_div"},[e("div",{staticClass:"m_font"},[e("p",[t._v("个人网站，请大家多多关注，多多转发")])])])}],a={name:"footer",components:{},props:{},methods:{init(){}},computed:{},watch:{},data(){return{name:"footer"}},mounted(){this.init()},beforeDestroy(){}},r=a,i=(s("1e7c"),s("2877")),c=Object(i["a"])(r,n,o,!1,null,"492989c2",null);e["default"]=c.exports},"1e7c":function(t,e,s){"use strict";s("ab21")},3540:function(t,e,s){"use strict";s("5f59")},"44bc":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"view_div"},[e("el-row",[e("el-col",{attrs:{span:8}},[e("div",{staticClass:"m_img"},[e("a",{attrs:{href:""}},[e("img",{attrs:{src:t.logoImg,alt:""}})])])]),e("el-col",{attrs:{span:12}},[t._v("111")]),e("el-col",{attrs:{span:4}},[e("el-row",[e("el-col",{attrs:{span:6}}),e("el-col",{attrs:{span:6}}),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"user"},[e("zfj-user-icon")],1)]),e("el-col",{attrs:{span:6}})],1)],1)],1)],1)},o=[],a=(s("14d9"),s("13a7")),r=s("b640"),i=s.n(r),c={name:"header",components:{zfjUserIcon:a["default"]},props:{},methods:{async toNextPage(t){await this.$router.push({path:t,params:{}})},init(){}},computed:{},watch:{},data(){return{name:"zfjHeader.vue",logoImg:i.a,page:{total:0,current:0,size:10,orders:[]}}},mounted(){this.init()},beforeDestroy(){}},l=c,u=(s("3540"),s("2877")),d=Object(u["a"])(l,n,o,!1,null,"f0c53656",null);e["default"]=d.exports},"5b41":function(t,e,s){"use strict";s("e291")},"5f59":function(t,e,s){},"93c5":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"view_div"},[e("el-container",{staticClass:"a_container"},[e("el-header",{staticClass:"h_container"},[e("zfj-header")],1),e("el-container",{staticClass:"m_container"},[e("el-header",{staticClass:"nav_container"},[e("zfj-header-menu")],1),e("el-main",[e("transition",{attrs:{name:"el-zoom-in-top"}},[e("router-view",{key:t.$route.fullPath})],1)],1)],1),e("el-footer",{staticClass:"f_container"},[e("zfj-footer")],1)],1)],1)},o=[],a=s("44bc"),r=s("93f0"),i=s("1414"),c={name:"container",components:{zfjHeader:a["default"],zfjHeaderMenu:r["default"],zfjFooter:i["default"]},props:{},methods:{init(){}},computed:{token(){return this.$store.state.token}},watch:{token:{handler(t,e){},deep:!0}},data(){return{name:"container"}},created(){console.log("container created")},mounted(){console.log("container mounted"),this.init()},beforeDestroy(){console.log("container beforeDestroy")}},l=c,u=(s("e142"),s("2877")),d=Object(u["a"])(l,n,o,!1,null,"fc5f521e",null);e["default"]=d.exports},"93f0":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"view_div"},[e("el-menu",{attrs:{mode:"horizontal","default-active":t.activeIndex,router:""},on:{select:t.handleSelect}},[e("zfj-menu-temple",{attrs:{menuList:t.menu}})],1)],1)},o=[],a=s("9a99"),r={name:"headerMenu",components:{zfjMenuTemple:a["default"]},props:{},methods:{init(){},handleSelect(t,e){}},computed:{activeIndex(){return this.$route.path},menu(){return this.$store.state.menu}},watch:{},data(){return{name:"headerMenu"}},mounted(){this.init()},beforeDestroy(){}},i=r,c=s("2877"),l=Object(c["a"])(i,n,o,!1,null,"7e661a20",null);e["default"]=l.exports},"9a99":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"view_div"},[t._l(t.menuList,(function(s){return[s.showFlag?[s.children&&s.children.length>0?e("el-submenu",{attrs:{index:s.path}},[e("template",{slot:"title"},[e("i",{class:s.iconFlag}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(s.name))])]),e("zfj-menu-template",{attrs:{menuList:s.children}})],2):e("el-menu-item",{attrs:{index:s.path}},[e("i",{class:s.iconFlag}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(s.name))])])]:t._e()]}))],2)},o=[],a={name:"zfjMenuTemplate",components:{},props:{menuList:{type:Array,required:!0,default:[]}},methods:{init(){}},computed:{},watch:{},data(){return{name:""}},mounted(){this.init()},beforeDestroy(){}},r=a,i=(s("5b41"),s("2877")),c=Object(i["a"])(r,n,o,!1,null,null,null);e["default"]=c.exports},ab21:function(t,e,s){},b640:function(t,e,s){t.exports=s.p+"img/logo.904b01a1.jpg"},c815:function(t,e,s){},e142:function(t,e,s){"use strict";s("c815")},e291:function(t,e,s){}}]);