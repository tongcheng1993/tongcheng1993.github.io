(function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)})({0:function(e,t,n){e.exports=n("56d7")},2877:function(e,t,n){"use strict";function a(e,t,n,a,o,i,s,r){var l,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):o&&(l=r?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}n.d(t,"a",(function(){return a}))},"3dfd":function(e,t,n){"use strict";var a=n("dff2"),o=n("42d8"),i=(n("a48a"),n("2877")),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"a539e6f0",null);t["default"]=s.exports},"42d8":function(e,t,n){"use strict";var a=n("8533"),o=n.n(a);t["default"]=o.a},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("3dfd"),o=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-header",[t("el-row",[t("el-col",{attrs:{span:4}},[t("router-link",{attrs:{to:"/"}},[t("div",{staticClass:"logo"},[e._v("/")])])],1),t("el-col",{attrs:{span:16}},[t("el-menu",{attrs:{mode:"horizontal",router:"true"}},[t("el-menu-item",{attrs:{index:"/dash"}},[t("i",{staticClass:"el-icon-menu"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页 ")])]),t("el-submenu",{attrs:{index:"/study"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",[e._v("工商管理")])]),t("el-menu-item",{attrs:{index:"/study/college_english"}},[t("i",{staticClass:"el-icon-menu"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("大学英语")])])],2),t("el-submenu",{attrs:{index:"/it"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",[e._v("软考")])]),t("el-submenu",{attrs:{index:"/it/first"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",[e._v("初级")])]),t("el-menu-item",{attrs:{index:"/it/first/chengxuyuan"}},[t("i",{staticClass:"el-icon-menu"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("程序员")])])],2),t("el-submenu",{attrs:{index:"/it/second"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",[e._v("中级")])]),t("el-menu-item",{attrs:{index:"/it/second/ruanjianshejishi"}},[t("i",{staticClass:"el-icon-menu"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("软件设计师")])])],2),t("el-submenu",{attrs:{index:"/it/third"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",[e._v("高级")])]),t("el-menu-item",{attrs:{index:"/it/third/xitongjiagoushi"}},[t("i",{staticClass:"el-icon-menu"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("系统架构设计师")])])],2)],2),t("el-submenu",{attrs:{index:"/ai"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",[e._v("人工智能")])]),t("el-menu-item",{attrs:{index:"/ai/chat"}},[t("i",{staticClass:"el-icon-menu"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("机器人聊天")])])],2)],1)],1),t("el-col",{attrs:{span:4}})],1)],1),t("el-main",[t("router-view")],1),t("el-footer")],1)],1)},i=[],s={name:"contain"},r=s,l=(n("b9b5"),n("2877")),u=Object(l["a"])(r,o,i,!1,null,"cc205064",null),c=u.exports,d=function(){var e=this;e._self._c;return e._m(0)},h=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("This is an dash page")])])}],p={name:"dash"},m=p,g=Object(l["a"])(m,d,h,!1,null,"56bcc358",null),y=g.exports,f=function(){var e=this,t=e._self._c;return t("div",[t("div",{domProps:{innerHTML:e._s(e.text)}})])},v=[],w={name:"college_english",data(){return{text:' <p style="font-size: 20px;text-align: center">some <strong> strategies </strong>for learning english</p>\n        <p>\n            learning english is <strong>by no means</strong> easy. it takes great <strong>diligence</strong> and\n            <strong>prolonged effort</strong>.\n        </p>\n        <p>\n            <strong>nevertheless</strong>,while you cannot <strong>expect</strong> to gain a good command of english\n            without sustained hard work,there are\n            various helpful learning strategies you can employ to make the task easier.here are some of them.\n        </p>\n        <p>\n            1.do not treat all new words in exactly the same way.have you ever complained about your memory because you\n            find it simply impossible to memorize all the new words you are learning?but,in fact,it is not your memory\n            that is at fault.if you cram your head with too many new words at a time,some of them ard bound to be\n            crowded out. what you need to do is to deal with new words in different ways according to how frequently\n            they occur in everyday use.while active words demand constant practice and useful words must be committed to\n            memory,words that do not often occur in everyday situations require just a nodding acquaintance.you will\n            find concentrating on active and useful words the most effective route to enlarging your vocabulary.\n        </p>\n        <p>\n            2.watch out for idiomatic ways of saying things.have you ever wondered why we say,"i am interested in\n            english",but "i am good at french"?and have you ever asked yourself why native english speakers say,"learn\n            the news or secret",but"learn of someone\'s success or arrival"?these are all examples of idiomatic usage.in\n            learning english,you must pay attention not only to the morning of a word,but also to the way native\n            speakers use it in their daily lives.\n        </p>\n        <p>\n            3.listen to english every day.listening to english on a regular basis will not only improve your ear,but\n            will also help you build your speaking skills.in addition to language tapes especially prepared for your\n            course,you can also listen to english radio broadcasts,watch english tv,and see english movies.the first\n            time you listen to a taped conversation or passage in english,you may not be able to catch a great deal.try\n            to get its general meaning first and listen to it over and over again. you will find that with each\n            repetition you will get something more.\n        </p>\n        <p>\n            3.listen to english every day.listening to english on a regular basis will not only improve your ear,but\n            will also help you build your speaking skills.in addition to language tapes especially prepared for your\n            course,you can also listen to english radio broadcasts,watch english tv,and see english movies.the first\n            time you listen to a taped conversation or passage in english,you may not be able to catch a great deal.try\n            to get its general meaning first and listen to it over and over again. you will find that with each\n            repetition you will get something more.\n        </p>\n        <p>\n            3.listen to english every day.listening to english on a regular basis will not only improve your ear,but\n            will also help you build your speaking skills.in addition to language tapes especially prepared for your\n            course,you can also listen to english radio broadcasts,watch english tv,and see english movies.the first\n            time you listen to a taped conversation or passage in english,you may not be able to catch a great deal.try\n            to get its general meaning first and listen to it over and over again. you will find that with each\n            repetition you will get something more.\n        </p>\n        <p>\n            4.seize opportunities to speak.it is true that there are few situations at school where you have to\n            communicate in english.talking with your classmates,for example,can be an easy and enjoyable way to get some\n            practice.also try to find native speakers on your campus and feel free to talk with them.perhaps the easiest\n            way to practice speaking is to rehearse aloud,since this can be done at any time,in any place,and without a\n            partner.for instance,you can look at pictures or objects around you and try to describe them in detail.you\n            can also rehearse everyday situations.after you have made a purchase in a shop or finished a meal in a\n            restaurant and paid the check,pretend that all this happened in an english-speaking country and try to act\n            it out in english.\n        </p>\n        <p>\n            5.read widely.it is important to read widely because in our learning environment,reading is the main and\n            most reliable source of language input.when you choose reading materials,look for things that you find\n            interesting,that you can understand without relying too much on a dictionary.a page a day is a good way to\n            start.as you go on,you will find that you can do more pages a day and handle materials at a higher level of\n            difficulty.\n        </p>\n        <p>\n            6.write regularly.writing is a good way to practice what you already know.apart from compositions assigned\n            by your teacher,you may find your own reasons for writing.a pen pal provides good motivation;you will learn\n            a lot by trying to communicate with someone who shares your interests,but comes from a different\n            culture.other ways to write regularly include keeping a diary,writing a short story and summarizing the\n            daily news.\n        </p>\n        <p>\n            language learning is a process of accumulation. it pays to absorb as much as you can from reading and\n            listening and then try to put what you have learned into practice through speaking and writing.\n        </p>'}}},b=w,_=Object(l["a"])(b,f,v,!1,null,"5d055b07",null),x=_.exports,j=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{margin:"20px"}})},k=[],V={name:"date_tool",components:{},data(){return{dateFormat:"YYYY-MM-DD HH:mm:ss",intValue:0,formatIntValue:"",dateValue:null,formatDateValue:0,formatDateValueAll:0}},mounted(){this.init()},methods:{init(){},exchangeToDate(){let e=this;const t=""+e.intValue;13===t.length?e.formatIntValue=new Date(parseInt(t)).toLocaleString():10===t.length?e.formatIntValue=new Date(1e3*parseInt(t)).toLocaleString():alert("当前时间戳有问题")},exchangeToInt(){let e=this;e.formatDateValue=e.dateValue.unix(),e.formatDateValueAll=1e3*e.formatDateValue}}},C=V,O=Object(l["a"])(C,j,k,!1,null,"7957d1ac",null),S=O.exports,T=function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v(e._s(e.name))])])},D=[],I={name:"chengxuyuan",data(){return{name:"程序员"}}},M=I,P=Object(l["a"])(M,T,D,!1,null,"007df9a9",null),R=P.exports,$=function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v(e._s(e.name))])])},z=[],E={name:"ruanjianshejishi",data(){return{name:"软件设计师"}}},Y=E,q=Object(l["a"])(Y,$,z,!1,null,"619a403d",null),H=q.exports,L=function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v(e._s(e.name))])])},A=[],F={name:"xitongjiagoushi",data(){return{name:"系统架构师"}}},N=F,U=Object(l["a"])(N,L,A,!1,null,"7e3b1e4a",null),X=U.exports,B=function(){var e=this,t=e._self._c;return t("div")},G=[],J={name:"chat"},K=J,Q=Object(l["a"])(K,B,G,!1,null,"71946baa",null),W=Q.exports;Vue.use(VueRouter);const Z=[{path:"/",component:c,children:[{path:"dash",component:y},{path:"study/college_english",component:x},{path:"my_tool/date_tool",component:S},{path:"it/first/chengxuyuan",component:R},{path:"it/second/ruanjianshejishi",component:H},{path:"it/third/xitongjiagoushi",component:X},{path:"ai/chat",component:W}]}],ee=new VueRouter({routes:Z});var te=ee;Vue.use(Vuex);var ne=new Vuex.Store({state:{},mutations:{},actions:{},modules:{}});Vue.config.productionTip=!1,new Vue({router:te,store:ne,render:e=>e(a["default"])}).$mount("#app")},8533:function(e,t){},a48a:function(e,t,n){"use strict";n("c5ec")},b9b5:function(e,t,n){"use strict";n("d52c")},c5ec:function(e,t,n){},d52c:function(e,t,n){},dff2:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[]}});
//# sourceMappingURL=app.100c3151.js.map