(this["webpackJsonpshop-list"]=this["webpackJsonpshop-list"]||[]).push([[0],Array(26).concat([function(e,t,n){e.exports=n(62)},,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"loadState",(function(){return m})),n.d(a,"saveState",(function(){return d})),n.d(a,"clearState",(function(){return p}));var i=n(0),o=n.n(i),l=n(8),r=n.n(l),c=n(2),u=n(5),s="MyShoppingList",m=function(){try{var e=localStorage.getItem(s);if(null===e)return;return JSON.parse(e)}catch(t){return}},d=function(e){try{var t=JSON.stringify(e);localStorage.setItem(s,t)}catch(n){}},p=function(){localStorage.removeItem(s)},g=n(22),f=n(3),E=n(6),h=[],b=[],_={uid:null,isLogged:!1},v={language:"en",theme:"light"},C=n(7),O={auth:{isVisible:!1,data:null},sugg:{isVisible:!1,data:null}},N=Object(u.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_ITEM":return[].concat(Object(E.a)(e),[a]);case"UPDATE_ITEM":return e.map((function(e){return e.id===a.id?Object(f.a)(Object(f.a)({},e),a):e}));case"REMOVE_ITEM":return e.filter((function(e){return e.id!==a}));case"GET_ITEMS":return Object(E.a)(a);case"SIGN_OUT":return[];default:return e}},suggestions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_SUGGESTION":return[].concat(Object(E.a)(e),[a]);case"UPDATE_SUGGESTION":return e.map((function(e){return e.id===a.id?Object(f.a)(Object(f.a)({},e),a):e}));case"REMOVE_SUGGESTION":return e.filter((function(e){return e.id!==a}));case"GET_SUGGESTIONS":return Object(E.a)(a);case"SIGN_OUT":return[];default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return{uid:t.payload.uid,email:t.payload.email,isLogged:!0};case"SIGN_OUT":return _;default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_SETTINGS":return Object(f.a)({},a);case"UPDATE_SETTINGS":return Object(f.a)(Object(f.a)({},e),a);default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR":return alert(t.payload),t.payload;default:return e}},modals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SHOW_MODAL":return Object(f.a)(Object(f.a)({},e),{},Object(C.a)({},a.modalName,{isVisible:!0,data:a.data}));case"HIDE_MODAL":return Object(f.a)(Object(f.a)({},e),{},Object(C.a)({},a.modalName,{isVisible:!1,data:a.data}));default:return e}}}),S=m(),T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,I=Object(u.e)(N,S,T(Object(u.a)(g.a)));I.subscribe((function(){var e=I.getState(),t=e.data,n=e.suggestions,a=e.user,i=e.settings;d({data:t,suggestions:n,user:a,settings:i})}));var y=I,A={en:{label:"EN",strings:{SIGN_IN:"Sign In",SIGN_UP:"Sign Up",SIGN_OUT:"Sign Out",ADD_ITEM:"Add",ENTER_ITEM:"Enter new item, e.g Apple",AUTHENIFICATION:"Authenification",YOUR_EMAIL:"Your email",YOUR_PASSWORD:"Your password",CREATE_AN_ACCOUNT:"Create an Account",CONNECT_WITH:"or connect with",FAVORITES_LIST:"Favorites",TOGGLE_THEME:"Change theme"}},ua:{label:"UA",strings:{SIGN_IN:"\u0423\u0432\u0456\u0439\u0442\u0438",SIGN_UP:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c",SIGN_OUT:"\u0412\u0438\u0439\u0442\u0438",ADD_ITEM:"\u0414\u043e\u0434\u0430\u0442\u0438",ENTER_ITEM:"\u0423\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u0432\u0443 \u043f\u043e\u043a\u0443\u043f\u043a\u0443",AUTHENIFICATION:"\u0410\u0443\u0442\u0435\u043d\u0456\u0444\u0456\u043a\u0430\u0446\u0456\u044f",YOUR_EMAIL:"\u0412\u0430\u0448 email",YOUR_PASSWORD:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",CREATE_AN_ACCOUNT:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441",CONNECT_WITH:"\u0430\u0431\u043e \u0443\u0432\u0456\u0439\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e",FAVORITES_LIST:"\u041e\u0431\u0440\u0430\u043d\u0435",TOGGLE_THEME:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u0442\u0435\u043c\u0443"}},ru:{label:"RU",strings:{SIGN_IN:"\u0412\u043e\u0439\u0442\u0438",SIGN_UP:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",SIGN_OUT:"\u0412\u044b\u0439\u0442\u0438",ADD_ITEM:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",ENTER_ITEM:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u043f\u043e\u043a\u0443\u043f\u043a\u0443",AUTHENIFICATION:"\u0410\u0443\u0442\u0435\u043d\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",YOUR_EMAIL:"\u0412\u0430\u0448 email",YOUR_PASSWORD:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",CREATE_AN_ACCOUNT:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c",CONNECT_WITH:"\u0438\u043b\u0438 \u0432\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e",FAVORITES_LIST:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",TOGGLE_THEME:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443"}}},R=Object(E.a)(Object.entries(A)).map((function(e){return{value:e[0],label:e[1].label}})),G=Object(i.createContext)();G.displayName="Localization";var j=function(e){var t,n=Object(c.c)((function(e){return e.settings})).language;return o.a.createElement(G.Provider,{value:(t=n,A[t].strings)},e.children)},U=(n(36),n(23)),k=n(10),D=n.n(k),x=(n(37),n(39),n(63),{apiKey:"AIzaSyD93Y2JvCGJE0TOa1tAjMUctkNziytAauE",authDomain:"shoppinglist-34c59.firebaseapp.com",databaseURL:"https://shoppinglist-34c59.firebaseio.com",projectId:"shoppinglist-34c59",storageBucket:"shoppinglist-34c59.appspot.com",messagingSenderId:"1045807402179",appId:"1:1045807402179:web:cdf533ad8c72bc5c776676",measurementId:"G-JFLG8ZT9QD"}),M=new function e(){var t=this;Object(U.a)(this,e),this.signInWithEmail=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.signUpWithEmail=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.signInWithGoogle=function(){return D.a.auth().signInWithPopup(new D.a.auth.GoogleAuthProvider)},this.signOut=function(){return t.auth.signOut()},this.addItem=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.dataCollection;return t.db.collection(t.rootCollection).doc(e).collection(a).doc(n.id).set(n)},this.updateItem=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.dataCollection;return t.db.collection(t.rootCollection).doc(e).collection(a).doc(n.id).set(n,{merge:!0})},this.removeItem=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.dataCollection;return t.db.collection(t.rootCollection).doc(e).collection(a).doc(n).delete()},this.getItems=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.dataCollection;return t.db.collection(t.rootCollection).doc(e).collection(n).get()},this.getSettings=function(e){return t.db.collection(t.rootCollection).doc(e).collection(t.settingsCollection).doc(t.commonSettingsDoc).get()},this.updateSettings=function(e,n){return t.db.collection(t.rootCollection).doc(e).collection(t.settingsCollection).doc(t.commonSettingsDoc).set(n,{merge:!0})},D.a.initializeApp(x),this.auth=D.a.auth(),this.db=D.a.firestore(),this.rootCollection="data",this.settingsCollection="settings",this.dataCollection="shopping-list",this.commonSettingsDoc="common"};function L(e){return{type:"ERROR",payload:e}}var w=function(e,t){return function(n){e?M.addItem(e,t).then((function(){return n({type:"ADD_ITEM",payload:t})})).catch((function(e){return n(L(e.message))})):n({type:"ADD_ITEM",payload:t})}},P=function(e,t){return function(n){e?M.updateItem(e,t).then((function(){return n({type:"UPDATE_ITEM",payload:t})})).catch((function(e){return n(L(e.message))})):n({type:"UPDATE_ITEM",payload:t})}};function V(e){return{type:"ERROR",payload:e}}var W=function(e,t){return function(n){e?M.updateItem(e,t,"suggestion-list").then((function(){return n({type:"UPDATE_SUGGESTION",payload:t})})).catch((function(e){return n(V(e.message))})):n({type:"UPDATE_SUGGESTION",payload:t})}};function F(e){return{type:"ERROR",payload:e}}function H(e){return{type:"SIGN_IN",payload:{uid:e.user.uid,email:e.user.email}}}function B(e){return{type:"ERROR",payload:e}}var Y=function(e,t){return function(n){e?M.updateSettings(e,t).then((function(){return n({type:"UPDATE_SETTINGS",payload:t})})).catch((function(e){return n(B(e.message))})):n({type:"UPDATE_SETTINGS",payload:t})}},J=function(e){return{type:"SHOW_MODAL",payload:e}},z=function(e){return{type:"HIDE_MODAL",payload:e}},q=(n(42),function(e){var t=e.onClick,n=e.extraClassName,a=e.type,i=e.btnType,l=e.size,r=e.text,c="ui-button ui-button--".concat(i," ui-button--").concat(l," ").concat(n);return o.a.createElement("button",{type:a,className:c,onClick:t},r)});q.defaultProps={extraClassName:"",onClick:null,size:"normal",type:"button",btnType:"default",text:"Some Text"};n(43);var X=function(e){var t=e.icon,n=e.children,a=e.onClick,i=e.extraClassName,l=e.title,r=e.type,c=i?"ui-icon-button ui-icon-button--".concat(t," ").concat(i):"ui-icon-button ui-icon-button--".concat(t);return o.a.createElement("button",{type:r,className:c,onClick:a,title:l},n)};X.defaultProps={icon:"",extraClassName:"",title:"",onClick:null,children:null,type:"button"};var K=n(24),Q=(n(44),function(e){var t=e.type,n=e.value,a=e.onChange,i=e.extraClassName,l=e.placeholder,r=Object(K.a)(e,["type","value","onChange","extraClassName","placeholder"]),c=i?"ui-input ".concat(i):"ui-input";return o.a.createElement("input",Object.assign({type:t,value:n,className:c,onChange:a,placeholder:l},r))});Q.defaultProps={extraClassName:"",onChange:null,value:"",type:"text",placeholder:""};n(45);var Z=function(e){var t=e.value,n=e.onChange,a=e.options,i=e.extraClassName,l=i?"ui-select ".concat(i):"ui-select";return o.a.createElement("select",{onChange:n,value:t,className:l},a.map((function(e){return o.a.createElement("option",{key:e.value,value:e.value,className:"ui-select__option"},e.label)})))};Z.defaultProps={extraClassName:"",onChange:null,value:"",options:[{value:"opt1",label:"Option 1"},{value:"opt2",label:"Option 2"},{value:"opt3",label:"Option 3"}]};var $=n(9),ee=(n(46),function(e){var t=e.extraClassName,n=e.labels,a=e.children,l=e.activeTab,r=e.onTabClick,c="ui-tabs ".concat(t),u=Object(i.useState)(l),s=Object($.a)(u,2),m=s[0],d=s[1];function p(e){d(n.indexOf(e.target.value)),r&&r()}function g(e){return e===m?"ui-tabs__item ui-tabs__item--active":"ui-tabs__item"}return o.a.createElement("div",{className:c},o.a.createElement("ol",{className:"ui-tabs__list"},n.map((function(e,t){return o.a.createElement("li",{key:e,className:g(t)},o.a.createElement("input",{className:"ui-tabs__btn",type:"button",onClick:p,value:e}))}))),o.a.createElement("div",{className:"ui-tabs__content"},a.map((function(e,t){return t!==m?null:e}))))});ee.defaultProps={extraClassName:"",activeTab:0,labels:[],children:null,onTabClick:null};n(47);var te=function(e){var t=e.title,n=e.isVisible,a=e.onClose,i=e.children,r=document.getElementById("modal-root");return Object(l.createPortal)(n&&o.a.createElement("div",{className:"ui-modal__overlay"},o.a.createElement("div",{className:"ui-modal"},o.a.createElement("div",{className:"ui-modal__header"},o.a.createElement("h4",{className:"ui-modal__title"},t),o.a.createElement(X,{extraClassName:"ui-modal__btn-close",icon:"cancel",onClick:a})),o.a.createElement("div",{className:"ui-modal__content"},i))),r)};te.defaultProps={title:"Modal title",isVisible:!1};n(48),n(49);var ne=function(e){var t=e.onSubmit,n=e.onChange,a=e.data,i=a.email,l=a.password,r=e.STR;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:t,className:"signin-form"},o.a.createElement(Q,{value:i,type:"email",name:"email",extraClassName:"signin-form__input",placeholder:r.YOUR_EMAIL,onChange:n,autoComplete:"current-email",required:!0}),o.a.createElement(Q,{type:"password",name:"password",extraClassName:"signin-form__input",value:l,placeholder:r.YOUR_PASSWORD,onChange:n,autoComplete:"current-password",required:!0}),o.a.createElement("div",{className:"signin-form__btns"},o.a.createElement(q,{type:"submit",btnType:"primary",text:r.SIGN_IN,onClick:t}))))};ne.defaultProps={STR:{}};n(50);var ae=function(e){var t=e.onSubmit,n=e.onChange,a=e.data,i=a.email,l=a.password,r=e.STR;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:t,className:"signup-form"},o.a.createElement(Q,{type:"email",name:"email",value:i,extraClassName:"signup-form__input",placeholder:r.YOUR_EMAIL,onChange:n,required:!0}),o.a.createElement(Q,{type:"password",name:"password",value:l,extraClassName:"signup-form__input",placeholder:r.YOUR_PASSWORD,onChange:n,required:!0}),o.a.createElement("div",{className:"signup-form__btns"},o.a.createElement(q,{type:"submit",btnType:"primary",text:r.CREATE_AN_ACCOUNT,onClick:t}))))},ie=(n(51),function(e){var t=e.onSignInWithGoogle,n=e.STR;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"social-login"},o.a.createElement("div",{className:"social-login__label"},n.CONNECT_WITH),o.a.createElement("div",{className:"social-login__btns"},o.a.createElement(X,{icon:"google",extraClassName:"social-login__btn",onClick:t}))))}),oe=(n(52),function(e){var t=e.data,n=e.isVisible,a=e.onClose,l=e.onChange,r=e.onTabClick,c=e.onSignIn,u=e.onSignUp,s=e.onSignInWithGoogle,m=Object(i.useContext)(G);return o.a.createElement(te,{isVisible:n,onClose:a,title:m.AUTHENIFICATION},o.a.createElement(ee,{labels:[m.SIGN_IN,m.SIGN_UP],extraClassName:"auth-form__tabs",onTabClick:r},o.a.createElement(ne,{onSubmit:c,onChange:l,data:t,STR:m}),o.a.createElement(ae,{onSubmit:u,onChange:l,data:t,STR:m})),o.a.createElement(ie,{onSignInWithGoogle:s,STR:m}))}),le=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user.isLogged})),n=Object(c.c)((function(e){return e.modals.auth.isVisible})),a={email:"",password:""},l=Object(i.useState)(a),r=Object($.a)(l,2),u=r[0],s=r[1];return Object(i.useEffect)((function(){t&&(s(a),e(z({modalName:"auth",data:null})))}),[t]),o.a.createElement(oe,{isVisible:n,onClose:function(){s(a),e(z({modalName:"auth",data:null}))},data:u,onChange:function(e){var t=e.target,n=t.name,a=t.value;s(Object(f.a)(Object(f.a)({},u),{},Object(C.a)({},n,a)))},onTabClick:function(){s(a)},onSignIn:function(t){var n,a;u.email&&u.password&&(t.preventDefault(),e((n=u.email,a=u.password,function(e){M.signInWithEmail(n,a).then((function(t){return e(H(t))})).catch((function(t){return e(F(t.message))}))})))},onSignUp:function(t){var n,a;u.email&&u.password&&(t.preventDefault(),e((n=u.email,a=u.password,function(e){M.signUpWithEmail(n,a).then((function(t){return e(H(t))})).catch((function(t){return e(F(t.message))}))})))},onSignInWithGoogle:function(){e((function(e){M.signInWithGoogle().then((function(t){return e(H(t))})).catch((function(t){return e(F(t.message))}))}))}})},re=function(){var e=Object(i.useContext)(G),t=Object(c.b)(),n=Object(c.c)((function(e){return e.user.isLogged})),l=n?"user":"user-o",r=n?e.SIGN_OUT:e.SIGN_IN;return o.a.createElement(X,{extraClassName:"login__btn",icon:l,title:r,onClick:function(){t(n?function(e){M.signOut().then((function(){return e({type:"SIGN_OUT"})})).then((function(){return a.clearState()})).catch((function(t){return e(F(t.message))}))}:J({modalName:"auth",data:null}))}})},ce=(n(53),function(e){var t=e.data,n=e.onCompleteClick,a=e.onRemoveClick,i=e.onBlur,l=e.onAddClick,r=e.onFavClick,c=e.STR;return o.a.createElement("div",{className:"shopping-list"},o.a.createElement(se,{onSubmit:l,onFavClick:r,STR:c}),o.a.createElement("ul",{className:"shopping-list__list"},t.map((function(e){return o.a.createElement(ue,{key:e.id,data:e,onCompleteClick:n,onRemoveClick:a,onBlur:i})}))))}),ue=(n(54),function(e){var t=e.data,n=t.id,a=t.title,i=t.isCompleted,l=e.onCompleteClick,r=e.onRemoveClick,c=e.onBlur;return o.a.createElement("li",{id:n,className:"shopping-list__item"},o.a.createElement("label",{className:"shopping-list__item-lb"},o.a.createElement("input",{type:"checkbox",className:"shopping-list__item-cb",checked:i,onChange:l})),o.a.createElement("input",{type:"text",className:"shopping-list__item-title",defaultValue:a,onBlur:c,maxLength:"50",disabled:!0}),o.a.createElement(X,{id:n,icon:"cancel",onClick:r,extraClassName:"shopping-list__item-btn"}))}),se=(n(55),function(e){var t=e.onSubmit,n=e.STR,a=Object(i.useState)(""),l=Object($.a)(a,2),r=l[0],c=l[1];function u(e){r&&(e.preventDefault(),t(r),c(""))}return o.a.createElement("form",{className:"shopping-list-form",onSubmit:u},o.a.createElement(Q,{extraClassName:"shopping-list-form__input",value:r,onChange:function(e){c(e.target.value)},placeholder:n.ENTER_ITEM,required:!0}),o.a.createElement(X,{icon:"plus",type:"submit",title:n.ADD_ITEM,extraClassName:"shopping-list-form__btn",onClick:u}))}),me=(n(56),function(e){var t=e.data,n=e.onRemoveClick,a=e.onAddClick,i=e.onBlur;return o.a.createElement("ul",{className:"suggestion-list"},t.map((function(e){return o.a.createElement(de,{key:e.id,data:e,onRemoveClick:n,onAddClick:a,onBlur:i})})))}),de=(n(57),function(e){var t=e.data,n=t.id,a=t.title,i=e.onRemoveClick,l=e.onAddClick,r=e.onBlur;return o.a.createElement("li",{id:n,className:"suggestion-list-item"},o.a.createElement(X,{id:n,extraClassName:"suggestion-list-item__btn-add",icon:"plus",onClick:l}),o.a.createElement("input",{type:"text",className:"suggestion-list-item__title",defaultValue:a,onBlur:r,maxLength:"50"}),o.a.createElement(X,{id:n,icon:"trash",onClick:i}))}),pe=n(64),ge=function(e,t){return e.some((function(e){return e.title.toUpperCase()===t.toUpperCase()}))},fe=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e})),n=t.data,a=t.suggestions,l=t.user.uid,r=t.modals.sugg,u=Object(i.useContext)(G);return o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,{data:n,onCompleteClick:function(t){var n=t.target.closest("li").id,a=t.target.checked;e(P(l,{id:n,isCompleted:a}))},onRemoveClick:function(t){var n=t.target.closest("li").id,i=t.target.previousSibling.value;e(function(e,t){return function(n){e?M.removeItem(e,t).then((function(){return n({type:"REMOVE_ITEM",payload:t})})).catch((function(e){return n(L(e.message))})):n({type:"REMOVE_ITEM",payload:t})}}(l,n));var o=a.find((function(e){return e.title===i}));e(W(l,{id:o.id,inList:!1}))},onAddClick:function(t){if(!ge(n,t)){var i={id:Object(pe.a)(),title:t,isCompleted:!1};e(w(l,i)),ge(a,t)||e(function(e,t){return function(n){e?M.addItem(e,t,"suggestion-list").then((function(){return n({type:"ADD_SUGGESTION",payload:t})})).catch((function(e){return n(V(e.message))})):n({type:"ADD_SUGGESTION",payload:t})}}(l,{id:i.id,title:t,inList:!0}))}},onBlur:function(t){var n=t.target.closest("li").id,a=t.target.value;e(P(l,{id:n,title:a}))},STR:u}),o.a.createElement(te,{isVisible:r.isVisible,onClose:function(){e(z({modalName:"sugg",data:null}))},title:u.FAVORITES_LIST},o.a.createElement(Ee,null)))};var Ee=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user.uid})),n=Object(c.c)((function(e){return e.suggestions.filter((function(e){return!0!==e.inList})).sort((function(e,t){return function(e,t){var n=e.toUpperCase(),a=t.toUpperCase();return n<a?-1:n>a?1:0}(e.title,t.title)}))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(me,{data:n,onRemoveClick:function(n){var a=n.target.closest("li").id;e(function(e,t){return function(n){e?M.removeItem(e,t,"suggestion-list").then((function(){return n({type:"REMOVE_SUGGESTION",payload:t})})).catch((function(e){return n(V(e.message))})):n({type:"REMOVE_SUGGESTION",payload:t})}}(t,a))},onAddClick:function(n){var a=n.target.nextSibling.value,i=n.target.closest("li").id,o={id:Object(pe.a)(),title:a,isCompleted:!1};e(w(t,o)),e(W(t,{id:i,inList:!0}))},onBlur:function(n){var a=n.target.closest("li").id,i=n.target.value;e(W(t,{id:a,title:i}))}}))},he=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.suggestions.length})),n=Object(i.useContext)(G);return o.a.createElement(X,{icon:t?"heart":"heart-empty",title:n.FAVORITES_LIST,onClick:function(){e(J({modalName:"sugg",data:null}))}})},be=(n(58),function(e){var t=e.language,n=e.onChange,a=e.options;return o.a.createElement(Z,{value:t,onChange:n,options:a,extraClassName:"language-selector"})}),_e=(n(59),function(e){var t=e.theme,n=e.onClick,a=e.STR,i="light"===t?"sun":"moon";return o.a.createElement(X,{icon:i,onClick:n,title:a.TOGGLE_THEME})}),ve=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.settings.language})),n=Object(c.c)((function(e){return e.user.uid}));return o.a.createElement(be,{language:t,onChange:function(t){var a=t.target.value;e(Y(n,{language:a}))},options:R})},Ce=function(){var e=Object(i.useContext)(G),t=Object(c.b)(),n=Object(c.c)((function(e){return e.settings.theme})),a=Object(c.c)((function(e){return e.user.uid}));return o.a.createElement(_e,{theme:n,onClick:function(){t(Y(a,{theme:"light"===n?"dark":"light"}))},STR:e})},Oe=(n(60),function(){return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header__content wrapper"},o.a.createElement("a",{href:"/",className:"header__logo"},o.a.createElement("span",{className:"header__title"},"ShopList")),o.a.createElement("div",{className:"header__menu"},o.a.createElement(ve,null),o.a.createElement(he,null),o.a.createElement(Ce,null),o.a.createElement(re,null))))}),Ne=(n(61),function(e){var t=e.children;return o.a.createElement("main",{className:"main"},o.a.createElement("div",{className:"main__content wrapper"},t))}),Se=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Oe,null),o.a.createElement(Ne,null,t))},Te=function(){return o.a.createElement(Se,null,o.a.createElement(fe,null))};var Ie=function(){var e=Object(c.c)((function(e){return e.user})),t=Object(c.c)((function(e){return e.settings.theme}));document.documentElement.setAttribute("data-theme",t);var n=e.uid,a=e.isLogged,l=Object(c.b)();return Object(i.useEffect)((function(){a&&(l(function(e){return function(t){var n=[];M.getItems(e).then((function(e){e.forEach((function(e){return n.push(e.data())})),t({type:"GET_ITEMS",payload:n})})).catch((function(e){return t(L(e.message))}))}}(n)),l(function(e){return function(t){var n=[];M.getItems(e,"suggestion-list").then((function(e){e.forEach((function(e){return n.push(e.data())})),t({type:"GET_SUGGESTIONS",payload:n})})).catch((function(e){return t(V(e.message))}))}}(n)),l(function(e){return function(t){M.getSettings(e).then((function(e){e.data()&&t({type:"GET_SETTINGS",payload:e.data()})})).catch((function(e){return t(B(e.message))}))}}(n)))}),[n]),o.a.createElement("div",{className:"App"},o.a.createElement(Te,null),o.a.createElement(le,null))};r.a.render(o.a.createElement(c.a,{store:y},o.a.createElement(j,null,o.a.createElement(Ie,null))),document.getElementById("root"))}]),[[26,1,2]]]);
//# sourceMappingURL=main.87f5d5e7.chunk.js.map