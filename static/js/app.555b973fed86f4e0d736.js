webpackJsonp([1],{"/vYs":function(t,e){},"8rVV":function(t,e){},Bk3E:function(t,e){},Ezyu:function(t,e){},HRs4:function(t,e){},Hc0d:function(t,e){},I5cQ:function(t,e){},NHnr:function(t,e,n){"use strict";function a(t){n("Xo8c")}function s(t){n("aSGG")}function c(t){n("Ezyu")}function i(t){n("/vYs")}function r(t){n("Bk3E")}function o(t){n("xz9U")}function u(t){n("I5cQ")}function l(t){n("x8UQ")}function m(t){n("kUqa")}function h(t){n("spTr")}function d(t){n("bmDt")}function _(t){n("gPHb")}function v(t){n("Hc0d")}function f(t){n("XnDl")}function p(t){n("f7KI")}function C(t){n("yq88")}function w(t){n("8rVV")}Object.defineProperty(e,"__esModule",{value:!0});var x=n("qRXP"),b=n("HVJf"),g=["1000","1001"],y=g,k=[{userName:"123",avatar:"/static/deep.png",msg:[{time:"11:40",content:"Ass We Can"},{time:"11:40",content:"Balbabla"}]},{userName:"456",avatar:"/static/van.png",msg:[{time:"11:40",content:"呵呵呵呵呵"},{time:"11:40",content:"发送到发送到"}]}],j=k,A={1000:{userName:"Charlotte",avatar:"./static/av1.jpg",bio:"Most men die at 27， we just bury them at 72.",sex:"female",remarks:"",location:"New Zealand"},1001:{userName:"大象",avatar:"./static/av2.jpg",bio:"果然还是太傻了。",sex:"male",remarks:"",location:"广东 深圳"},1002:{userName:"叫我爸爸",avatar:"./static/av3.jpg",bio:"螃蟹在剥我的壳，笔记本在写我，漫天的我落在雪花上。",sex:"male",remarks:"土鳖",location:"Amsterdam"},1003:{userName:"我他妈社保",avatar:"./static/av4.jpg",bio:"其实我很乖",sex:"male",remarks:"蛾子",location:""},1004:{userName:"蒟蒻",avatar:"./static/av5.jpg",bio:"观察大佬的操作",sex:"male",remarks:"Nbsaw",location:"广东 深圳"},1005:{userName:"zhihao",avatar:"./static/av6.jpg",bio:"",sex:"female",remarks:"",location:"Hokkaido"},1006:{userName:"Z.",avatar:"./static/av7.jpg",bio:"慢热 ！",sex:"male",remarks:"张尻乐",location:"上海 虹口"}},I=A,E=function(t,e){return{msg:t,time:e,self:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}},N={1000:[E("cnbb",new Date,!0),E("????",new Date),E("rnmm",new Date,!0),E("cnm?",new Date)],1001:[E("hahahah",new Date),E("2333333",new Date)]},M=N,S={currentView:"chat",chat:y,subject:j,contact:I,chatsHistory:M,currentChatId:null,currentSubjectId:null,currentContactId:null,menuStatus:!1,currentMenu:"ChatListMenu",position:{top:"0px",left:"0px"}},$=S,O=n("4YfN"),R=n.n(O),H=n("dLdd"),X=n.n(H),L=n("7jxY"),F=n.n(L),T=function(t){var e=F()(t).charAt(0);return/[a-zA-Z]/.test(e)?e.toUpperCase():"~"},V=function(t){return X()(t).toPairs().sortBy(0).fromPairs().value()},D=function(t){return(""+t.getHours()).padStart(2,"0")+":"+(""+t.getMinutes()).padStart(2,"0")},q={chatList:function(t){var e={};return t.chat.forEach(function(n){var a=X.a.last(t.chatsHistory[n]);e["_"+n]=a?R()({},t.contact[n],{time:D(a.time),content:a.msg}):R()({},t.contact[n],{time:"",content:""})}),e},contactList:function(t){var e={};return X.a.forEach(t.contact,function(t,n){var a=T(""!==t.remarks?t.remarks:t.userName);e[a]||(e[a]={}),e[a][n]=t}),V(e)},currentChat:function(t){return t.contact[t.currentChatId]?t.contact[t.currentChatId]:""},currentContact:function(t){return t.currentContactId?t.contact[t.currentContactId]:""},historys:function(t){return t.chatsHistory[t.currentChatId]}},W=q,z=n("t7M8"),P=function(t,e){U(t,e),t.unshift(e)},U=function(t,e){for(var n=0;n<t.length;n++)if(t[n]===e){t.splice(n,1);break}},Y={viewChange:function(t,e){t.currentView=e},chatChange:function(t,e){t.currentChatId=e},subjectChange:function(t,e){t.currentSubjectId=e},contactChange:function(t,e){t.currentContactId=e},showMenu:function(t,e){var n=(e.$event,e.chatId),a=e.menuName,s=event;t.menuStatus=!0,t.currentMenu=a,t.position={top:s.clientY+"px",left:s.clientX+"px"},t.menuChatId=n.substr(1)},closeMenu:function(t){t.menuStatus=!1},sendMessage:function(t,e){P(t.chat,t.currentChatId),X.a.isEmpty(t.chatsHistory[t.currentChatId])&&z.a.set(t.chatsHistory,t.currentChatId,[]),t.chatsHistory[t.currentChatId].push({msg:e,time:new Date,self:!0});var n=t.currentChatId;t.currentChatId=0,t.currentChatId=n},newChat:function(t,e){P(t.chat,e),t.currentChatId=e,t.currentView="chat"},closeChat:function(t){U(t.chat,t.menuChatId),z.a.delete(t.chatsHistory,t.menuChatId),t.currentChatId=void 0,t.menuStatus=!1},clearHistory:function(t,e){z.a.delete(t.chatsHistory,e),t.menuStatus=!1},addContact:function(t){}},B=Y;x.a.use(b.a);var G=new b.a.Store({state:$,getters:W,mutations:B}),Q=G,K={name:"Profile"},Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wx-profile clearfix"},[n("img",{staticClass:"wx-profile__avatar",attrs:{src:"static/mine.png",alt:""}}),t._v(" "),n("span",{staticClass:"wx-profile__username"},[t._v("Nbsaw")]),t._v(" "),n("i",{staticClass:"wx-profile__menu iconfont icon-menu"})])}],tt={render:Z,staticRenderFns:J},et=tt,nt=n("/Xao"),at=a,st=nt(K,et,!1,at,null,null),ct=st.exports,it={name:"Search",data:function(){return{show:!1,keyword:""}},computed:R()({},Object(b.d)(["contact"]),{isEmpty:function(t){var e=t.result;return X.a.isEmpty(e)},result:function(){var t=this,e=X.a.trim(this.keyword);if(X.a.isEmpty(e))return void(this.show=!1);this.show=!0;var n=F()(e),a=new RegExp(n,"i"),s={};return X.a.filter(this.contact,function(e,n){var c=e.remarks,i=e.userName,r=a.test(F()(c||i));return r&&(s[n]=t.contact[n]),r}),s}}),methods:R()({},Object(b.c)(["newChat"]),{_newChat:function(t){this.newChat(t),this.closeSearch()},closeSearch:function(){this.show=!1},search:X.a.debounce(function(t){this.keyword=t.target.value},200)})},rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeSearch,expression:"closeSearch"}],staticClass:"wx-search"},[n("i",{staticClass:"iconfont icon-sousuo wx-search__icon"}),t._v(" "),n("input",{staticClass:"wx-search__input",attrs:{type:"text",placeholder:"搜索",spellcheck:"false"},on:{input:t.search}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"wx-search-container"},[t.isEmpty?n("div",{staticClass:"wx-search-container__et"},[t._v("找不到匹配的结果")]):n("div",{staticClass:"wx-search-result"},[n("div",{staticClass:"wx-search-result__tips"},[t._v("\n        好友\n      ")]),t._v(" "),t._l(t.result,function(e,a,s){return n("div",{key:a,staticClass:"wx-search-result-item clearfix",class:{"is-first":0===s},on:{click:function(e){t._newChat(a)}}},[n("img",{staticClass:"wx-search-result-item__avatar",attrs:{src:e.avatar}}),t._v(" "),n("div",{staticClass:"wx-search-result-item__username"},[t._v(t._s(e.remarks||e.userName))])])})],2)])])},ot=[],ut={render:rt,staticRenderFns:ot},lt=ut,mt=n("/Xao"),ht=s,dt=mt(it,lt,!1,ht,null,null),_t=dt.exports,vt={name:"Tab",data:function(){return{views:[{viewName:"chat",iconName:"icon-qipao"},{viewName:"subject",iconName:"icon-wenzhang_weixuanzhong"},{viewName:"contact",iconName:"icon-lianxiren"}]}},computed:R()({},Object(b.d)(["currentView"])),methods:R()({},Object(b.c)(["viewChange"]))},ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wx-aside-tab clearfix"},t._l(t.views,function(e,a){var s=e.iconName,c=e.viewName;return n("div",{key:a,staticClass:"wx-aside-tab-container",on:{click:function(e){t.viewChange(c)}}},[n("i",{staticClass:"iconfont wx-aside-tab-container__icons",class:[s,{"is-active":c===t.currentView}]})])}))},pt=[],Ct={render:ft,staticRenderFns:pt},wt=Ct,xt=n("/Xao"),bt=c,gt=xt(vt,wt,!1,bt,null,null),yt=gt.exports,kt={name:"Header",components:{Profile:ct,Tab:yt,Search:_t}},jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wx-aside-header"},[n("profile"),t._v(" "),n("search"),t._v(" "),n("tab")],1)},At=[],It={render:jt,staticRenderFns:At},Et=It,Nt=n("/Xao"),Mt=i,St=Nt(kt,Et,!1,Mt,null,null),$t=St.exports,Ot={name:"ChatList",data:function(){return{tips:"哇呜好可怜没有人和你交流...",menuName:"ChatListMenu"}},computed:R()({},Object(b.d)(["currentChatId"]),Object(b.b)(["chatList"]),{itemsEmpty:function(){return X.a.isEmpty(this.chatList)}}),methods:R()({},Object(b.c)(["showMenu","chatChange"]),{_chatId:function(t){return t.substr(1)}})},Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wx-chat"},[t.itemsEmpty?n("div",{staticClass:"wx-chat-list__tips"},[t._v(t._s(t.tips))]):t._e(),t._v(" "),t._l(t.chatList,function(e,a){return n("div",{key:t._chatId(a),staticClass:"wx-chat-list__item",class:{"is-active":t._chatId(a)===t.currentChatId},on:{contextmenu:function(e){e.preventDefault(),t.showMenu({$event:e,chatId:a,menuName:t.menuName})},click:function(e){t.chatChange(t._chatId(a))}}},[n("img",{staticClass:"wx-chat-list__avatar",attrs:{src:e.avatar,alt:"头像"}}),t._v(" "),n("div",{staticClass:"wx-chat-list-info"},[n("span",{staticClass:"wx-chat-list-info__username"},[t._v("\n          "+t._s(e.remarks||e.userName)+"\n        "),n("span",{staticClass:"wx-chat-list-info__time"},[t._v("\n          "+t._s(e.time)+"\n        ")])]),t._v(" "),n("span",{staticClass:"wx-chat-list-info__lastMsg"},[t._v("\n          "+t._s(e.content)+"\n      ")])])])})],2)},Ht=[],Xt={render:Rt,staticRenderFns:Ht},Lt=Xt,Ft=n("/Xao"),Tt=r,Vt=Ft(Ot,Lt,!1,Tt,null,null),Dt=Vt.exports,qt={name:"SubjectList",data:function(){return{emptyTips:"暂无文章...",items:[]}},methods:{subjectChange:function(t){this.$store.commit("subjectChange",t)}},computed:R()({},Object(b.d)(["currentSubject","subject"]),{isEmpty:function(){return X.a.isEmpty(this.items)}})},Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wx-subject-list"},[t.isEmpty?n("div",{staticClass:"wx-subject-list__et"},[t._v(t._s(t.emptyTips))]):t._e(),t._v(" "),t._l(t.items,function(e,a){return n("div",{key:a,staticClass:"wx-subject-list__item",on:{click:function(e){t.subjectChange(a)}}})})],2)},zt=[],Pt={render:Wt,staticRenderFns:zt},Ut=Pt,Yt=n("/Xao"),Bt=o,Gt=Yt(qt,Ut,!1,Bt,null,null),Qt=Gt.exports,Kt={name:"ContactList",data:function(){return{emptyTips:"咦 你一个联系人都没有..."}},computed:R()({},Object(b.d)(["currentContactId"]),Object(b.b)(["contactList"]),{isEmpty:function(){return X.a.isEmpty(this.contactList)}}),methods:R()({},Object(b.c)(["contactChange"]))},Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wx-contact-list"},[t.isEmpty?n("div",{staticClass:"wx-contact-list__tips"},[t._v(t._s(t.emptyTips))]):t._e(),t._v(" "),t._l(t.contactList,function(e,a){return n("div",{key:a},[n("h4",{staticClass:"wx-contact-list__group-title"},[t._v(t._s(a))]),t._v(" "),t._l(e,function(e,a){return n("div",{key:a,staticClass:"wx-contact-list__item clearfix",class:{"is-active":a==t.currentContactId},on:{click:function(e){t.contactChange(a)}}},[n("img",{staticClass:"wx-contact-list__item__avatar",attrs:{src:e.avatar}}),t._v(" "),n("div",{staticClass:"wx-contact-list__item__name"},[t._v(t._s(e.remarks?e.remarks:e.userName))])])})],2)})],2)},Jt=[],te={render:Zt,staticRenderFns:Jt},ee=te,ne=n("/Xao"),ae=u,se=ne(Kt,ee,!1,ae,null,null),ce=se.exports,ie={chat:{aside:"ChatList",main:"ChatArea"},contact:{aside:"ContactList",main:"ContactArea"},subject:{aside:"SubjectList",main:"SubjectArea"}},re={name:"Aside",components:{AsideHeader:$t,ChatList:Dt,SubjectList:Qt,ContactList:ce},computed:R()({},Object(b.d)(["currentView"]),{viewName:function(){return ie[this.currentView].aside}})},oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wx-aside clearfix"},[n("aside-header"),t._v(" "),n("keep-alive",[n(t.viewName,{tag:"component"})],1)],1)},ue=[],le={render:oe,staticRenderFns:ue},me=le,he=n("/Xao"),de=l,_e=he(re,me,!1,de,null,null),ve=_e.exports,fe={name:"title"},pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wx-main-title"},[n("span",[t._t("default")],2)])},Ce=[],we={render:pe,staticRenderFns:Ce},xe=we,be=n("/Xao"),ge=m,ye=be(fe,xe,!1,ge,null,null),ke=ye.exports,je={},Ae={name:"ChatArea",components:{ChatTitle:ke},data:function(){return{menuShow:!1,menuName:"ChatAreaMenu"}},computed:R()({},Object(b.d)(["currentChatId","contact"]),Object(b.b)(["currentChat","historys"])),watch:{currentChatId:function(){this.currentChatId&&this.$nextTick(function(){var t=this.$el.querySelector(".wx-chatArea-content");t.scrollTop=t.scrollHeight;var e=this.$el.querySelector("textarea");e.value=je[this.currentChatId]||"",e.focus()})}},methods:R()({},Object(b.c)(["showMenu"]),{type:function(t){je[this.currentChatId]=t.target.value},submit:function(t){this.$store.commit("sendMessage",je[this.currentChatId]),this.$el.querySelector("textarea").value="",je[this.currentChatId]="",this.$nextTick(function(){var t=this.$el.querySelector(".wx-chatArea-content");t.scrollTop=t.scrollHeight})}})},Ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("chat-title",[t._v(t._s(t.currentChat.userName))]),t._v(" "),t.currentChatId?n("div",{staticClass:"wx-chatArea-content",on:{contextmenu:function(e){e.preventDefault(),t.showMenu({$event:e,menuName:t.menuName})}}},[n("p",{staticClass:"wx-chatArea-content__time"},[t._v("11:23")]),t._v(" "),t._l(t.historys,function(e,a){return n("div",{key:a,staticClass:"wx-chatArea-message clearfix",class:{"is-self":e.self}},[n("img",{staticClass:"wx-chatArea-message__avatar",attrs:{src:e.self?"./static/mine.png":t.contact[t.currentChatId].avatar}}),t._v(" "),n("div",{staticClass:"wx-chatArea-message__bubble"},[t._v(t._s(e.msg))])])})],2):t._e(),t._v(" "),t.currentChatId?n("div",{staticClass:"wx-chatArea-messageArea"},[t._m(0,!1,!1),t._v(" "),n("div",{staticClass:"wx-chatArea-messageArea-text-box"},[n("div",{staticClass:"wx-chatArea-messageArea-text-box__wrapper"},[n("textarea",{attrs:{spellcheck:"false"},on:{input:t.type,keydown:function(e){return("button"in e||!t._k(e.keyCode,"enter",13,e.key))&&e.ctrlKey?void t.submit(e):null}}})])]),t._v(" "),n("div",{staticClass:"wx-chatArea-messageArea-btn-container"},[n("span",{staticClass:"wx-chatArea-messageArea-btn-container__describe"},[t._v("按下Ctrl+Enter发送")]),t._v(" "),n("button",{staticClass:"wx-chatArea-messageArea-btn-container__send",on:{click:t.submit}},[t._v("发送")])])]):n("div",{staticClass:"wx-chatArea-tip-wrapper"},[n("i",{staticClass:"wx-chatArea-tip-wrapper__icon iconfont icon-weixin"}),t._v(" "),n("p",{staticClass:"wx-chatArea-tip-wrapper__tip"},[t._v("未选择聊天")])])],1)},Ee=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wx-chatArea-messageArea__bar"},[n("i",{staticClass:"wx-chatArea-messageArea__icon iconfont icon-face"})])}],Ne={render:Ie,staticRenderFns:Ee},Me=Ne,Se=n("/Xao"),$e=h,Oe=Se(Ae,Me,!1,$e,null,null),Re=Oe.exports,He={name:"SubjectArea",components:{SubjectTitle:ke}},Xe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("subject-title")],1)},Le=[],Fe={render:Xe,staticRenderFns:Le},Te=Fe,Ve=n("/Xao"),De=d,qe=Ve(He,Te,!1,De,null,null),We=qe.exports,ze={name:"ContactArea",components:{ContactTitle:ke},computed:R()({},Object(b.d)(["currentContactId"]),Object(b.b)(["currentContact"])),methods:R()({},Object(b.c)(["newChat"]))},Pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("contact-title",[t._v("详细信息")]),t._v(" "),t.currentContact?n("div",{staticClass:"wx-contactArea"},[n("img",{staticClass:"wx-contactArea__avatar",attrs:{src:t.currentContact.avatar,alt:""}}),t._v(" "),n("div",[n("h4",{staticClass:"wx-contactArea__username"},[t._v(t._s(t.currentContact.userName))]),t._v(" "),n("i",{staticClass:"iconfont wx-contactArea__icon",class:["male"===t.currentContact.sex?"icon-nanren is-male":"icon-nvrentouxiang is-female"]})]),t._v(" "),t.currentContact.bio?n("p",{staticClass:"wx-contactArea__bio"},[t._v(t._s(t.currentContact.bio))]):t._e(),t._v(" "),n("div",{staticClass:"wx-contactArea__another-info"},[t.currentContact.remarks?n("p",[n("label",[t._v("备注 :   ")]),t._v(t._s(t.currentContact.remarks))]):t._e(),t._v(" "),t.currentContact.location?n("p",[n("label",[t._v("地区 :   ")]),t._v(t._s(t.currentContact.location))]):t._e()]),t._v(" "),n("button",{staticClass:"wx-contactArea__newChat-btn",on:{click:function(e){t.newChat(t.currentContactId)}}},[t._v("发消息")])]):n("div",{staticClass:"wx-contactArea-tip-wrapper"},[n("i",{staticClass:"iconfont icons icon-yonghurenxiang wx-contactArea-tip-wrapper__icon"})])],1)},Ue=[],Ye={render:Pe,staticRenderFns:Ue},Be=Ye,Ge=n("/Xao"),Qe=_,Ke=Ge(ze,Be,!1,Qe,null,null),Ze=Ke.exports,Je={name:"Main",components:{ChatArea:Re,SubjectArea:We,ContactArea:Ze},computed:R()({},Object(b.d)(["currentView"]),{viewName:function(){return ie[this.currentView].main}})},tn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("keep-alive",[n(t.viewName,{tag:"component",staticClass:"wx-main"})],1)},en=[],nn={render:tn,staticRenderFns:en},an=nn,sn=n("/Xao"),cn=v,rn=sn(Je,an,!1,cn,null,null),on=rn.exports,un={name:"CopyRight"},ln=function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"wx-copyright"},[t._v("© 1998 - 2017 Tencent Inc. All Rights Reserved 帮助")])},mn=[],hn={render:ln,staticRenderFns:mn},dn=hn,_n=n("/Xao"),vn=f,fn=_n(un,dn,!1,vn,null,null),pn=fn.exports,Cn={name:"Menu",props:{position:{type:Object,required:!0}}},wn=function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{staticClass:"wx-menu",style:t.position},[t._t("default")],2)},xn=[],bn={render:wn,staticRenderFns:xn},gn=bn,yn=n("/Xao"),kn=p,jn=yn(Cn,gn,!1,kn,null,null),An=jn.exports,In={name:"Menu-Item"},En=function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{staticClass:"wx-menu-item"},[t._t("default")],2)},Nn=[],Mn={render:En,staticRenderFns:Nn},Sn=Mn,$n=n("/Xao"),On=C,Rn=$n(In,Sn,!1,On,null,null),Hn=Rn.exports,Xn={name:"ChatListMenu",components:{WxMenu:An,WxMenuItem:Hn},props:["position"],computed:R()({},Object(b.d)(["currentChatId"])),methods:R()({},Object(b.c)(["closeMenu","closeChat"]),{topChat:function(t){this.closeMenu()}})},Ln=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("wx-menu",{attrs:{position:t.position}},[n("wx-menu-item",{nativeOn:{click:function(e){t.topChat(e)}}},[t._v("置顶")]),t._v(" "),n("wx-menu-item",{nativeOn:{click:function(e){t.closeChat(e)}}},[t._v("关闭聊天")])],1)},Fn=[],Tn={render:Ln,staticRenderFns:Fn},Vn=Tn,Dn=n("/Xao"),qn=Dn(Xn,Vn,!1,null,null,null),Wn=qn.exports,zn={name:"ChatAreaMenu",components:{WxMenu:An,WxMenuItem:Hn},props:["position"],computed:R()({},Object(b.d)(["currentChatId"])),methods:R()({},Object(b.c)(["clearHistory"]))},Pn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("wx-menu",{attrs:{position:t.position}},[n("wx-menu-item",{nativeOn:{click:function(e){t.clearHistory(t.currentChatId)}}},[t._v("清屏")])],1)},Un=[],Yn={render:Pn,staticRenderFns:Un},Bn=Yn,Gn=n("/Xao"),Qn=Gn(zn,Bn,!1,null,null,null),Kn=Qn.exports,Zn={name:"App",components:{WxAside:ve,WxMain:on,CopyRight:pn,ChatListMenu:Wn,ChatAreaMenu:Kn},computed:R()({},Object(b.d)(["currentMenu","menuStatus","position","menuStatus"])),methods:R()({},Object(b.c)(["closeMenu"]),{_closeMenu:function(){this.menuStatus&&this.$store.commit("closeMenu")}})},Jn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wx-app"},[n("WxAside"),t._v(" "),n("WxMain"),t._v(" "),n("CopyRight"),t._v(" "),n(t.currentMenu,{directives:[{name:"show",rawName:"v-show",value:t.menuStatus,expression:"menuStatus"},{name:"click-outside",rawName:"v-click-outside",value:t._closeMenu,expression:"_closeMenu"}],tag:"component",attrs:{position:t.position}})],1)},ta=[],ea={render:Jn,staticRenderFns:ta},na=ea,aa=n("/Xao"),sa=w,ca=aa(Zn,na,!1,sa,null,null),ia=ca.exports,ra=function(){};ra.install=function(t,e){t.directive("click-outside",{bind:function(t,e,n){t.event=function(a){t===a.target||t.contains(a.target)||n.context[e.expression](a)},document.body.addEventListener("click",t.event)},unbind:function(t){document.body.removeEventListener("click",t.event)}})};var oa=ra;n("HRs4");x.a.config.devtools=!0,x.a.config.productionTip=!1,x.a.use(oa),new x.a({el:"#app",components:{App:ia},store:Q})},XnDl:function(t,e){},Xo8c:function(t,e){},aSGG:function(t,e){},bmDt:function(t,e){},f7KI:function(t,e){},gPHb:function(t,e){},kUqa:function(t,e){},spTr:function(t,e){},x8UQ:function(t,e){},xz9U:function(t,e){},yq88:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.555b973fed86f4e0d736.js.map