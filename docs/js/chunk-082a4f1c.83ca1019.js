(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-082a4f1c"],{"53ba":function(e,t,r){"use strict";r("8784")},8784:function(e,t,r){},b953:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"view_div"},[t("div",{staticClass:"register_form"},[t("el-form",{ref:"form",attrs:{model:e.registerForm,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"账户名："}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入账户名","prefix-icon":"el-icon-user",type:"text"},model:{value:e.registerForm.userName,callback:function(t){e.$set(e.registerForm,"userName",t)},expression:"registerForm.userName"}})],1),t("el-form-item",{attrs:{label:"密码："}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入密码","prefix-icon":"el-icon-lock","show-password":"",type:"password"},model:{value:e.registerForm.passWord,callback:function(t){e.$set(e.registerForm,"passWord",t)},expression:"registerForm.passWord"}})],1),t("el-form-item",{attrs:{label:"验证码："}},[t("el-input",{attrs:{placeholder:"请输入验证码","prefix-icon":"el-icon-picture",type:"text"},model:{value:e.registerForm.redisValue,callback:function(t){e.$set(e.registerForm,"redisValue",t)},expression:"registerForm.redisValue"}})],1),t("el-form-item",{attrs:{label:"验证码："}},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.captchaImgLoad,expression:"captchaImgLoad"}]},[t("img",{attrs:{src:e.captchaImg,alt:"加载验证码失败",width:"280px"},on:{click:e.getCaptchaImg}})])]),t("el-form-item",{attrs:{label:"绑定邮箱："}},[t("el-input",{attrs:{placeholder:"请输入绑定邮箱","prefix-icon":"el-icon-picture",type:"text"},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}}),t("el-button",{attrs:{type:"primary"},on:{click:e.emailCaptcha}},[e._v("发送邮箱验证码")])],1),t("el-form-item",{attrs:{label:"邮箱验证码："}},[t("el-input",{attrs:{placeholder:"请输入邮箱验证码","prefix-icon":"el-icon-picture",type:"text"},model:{value:e.registerForm.emailValue,callback:function(t){e.$set(e.registerForm,"emailValue",t)},expression:"registerForm.emailValue"}})],1),t("el-form-item",{attrs:{label:"其他："}},[t("el-button",{attrs:{type:"primary"},on:{click:e.toLoginView}},[e._v("返回登录")])],1),t("el-form-item",{attrs:{label:"操作："}},[t("el-button",{attrs:{loading:e.registerSubmitLoad,type:"primary"},on:{click:e.registerSubmit}},[e._v("注册")])],1)],1)],1)])},i=[],s=(r("14d9"),r("37a2")),o={name:"register",components:{},props:{},computed:{},data(){return{name:"register",registerForm:{userName:"",passWord:"",redisUuid:"",redisValue:"",email:"",emailValue:""},captchaImgLoad:!1,captchaImg:"",registerSubmitLoad:!1}},watch:{},methods:{async toNextPage(e,t){await this.$router.push({path:e,query:t})},init(){this.getCaptchaImg()},getCaptchaImg(){this.captchaImgLoad=!0;let e={};Object(s["a"])(e).then(e=>{this.registerForm.redisUuid=e.redisUuid;let t="data:image/png;base64,";this.captchaImg=t+e.imgBytes,this.captchaImgLoad=!1})},emailCaptcha(){let e={email:this.registerForm.email};Object(s["b"])(e).then(e=>{e&&this.$message.info("邮件已发送")}).catch(e=>{})},toLoginView(){this.toNextPage("/login",{})},registerSubmit(){this.registerSubmitLoad=!0;let e=this.registerForm;Object(s["f"])(e).then(e=>{this.$store.commit("set_token",e),this.toNextPage("/",{})}).catch(e=>{this.registerSubmitLoad=!1,this.getCaptchaImg(),console.log(e)})}},created(){},mounted(){this.init()},beforeDestroy(){}},l=o,c=(r("53ba"),r("2877")),m=Object(c["a"])(l,a,i,!1,null,null,null);t["default"]=m.exports}}]);