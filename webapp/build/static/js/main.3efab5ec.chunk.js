(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{48:function(e,t,a){},74:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(24),c=a.n(r),l=(a(48),a(13)),o=a.n(l),i=a(19),b=a(10),j=a(12),d=a(4),u=a(16),h=a.n(u),m=Object(n.createContext)(null),p=a(1);function x(){var e=Object(n.useContext)(m),t=e.userData,a=e.setUserData,s=Object(d.f)();return Object(p.jsx)("nav",{className:"auth-options",children:t.user?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{class:"btn btn-outline-secondary mx-2",onClick:function(){a({token:void 0,user:void 0}),localStorage.setItem("auth-token",""),localStorage.setItem("User_id",""),s.push("/login")},style:{borderRadius:"4rem"},children:"Log out"})}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{class:"btn btn-outline-secondary mx-2",onClick:function(){return s.push("/register")},style:{borderRadius:"4rem"},children:"Sign Up"}),Object(p.jsx)("button",{class:"btn btn-outline-secondary mx-2",onClick:function(){return s.push("/login")},style:{borderRadius:"4rem"},children:"Login"})]})})}function O(e){return Object(p.jsxs)("div",{className:"error-notice",children:[Object(p.jsx)("span",{children:e.message}),Object(p.jsx)("button",{onClick:e.clearError,children:"X"})]})}var g=a.p+"static/media/cal.1eb4d6f8.png",v={backend_url:"https://hackathonback.herokuapp.com"};function f(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(),c=Object(b.a)(r,2),l=c[0],j=c[1],u=Object(n.useState)(),x=Object(b.a)(u,2),f=x[0],k=x[1],y=Object(n.useContext)(m).setUserData,w=Object(d.f)(),N=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:l},e.next=5,h.a.post(v.backend_url+"/users/login",n);case 5:s=e.sent,y({token:s.data.token,user:s.data.user}),localStorage.setItem("auth-token",s.data.token),w.push("/dashboard"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response.data.msg&&k(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsx)("div",{class:"  p-3 mb-2  text-white ",children:Object(p.jsx)("div",{class:"container-lg  shadow p-3 mb-5  text-dark  ",style:{marginTop:"4%",backgroundColor:"white"},children:Object(p.jsxs)("div",{class:"row row-cols-2",style:{marginTop:"1%"},children:[Object(p.jsx)("div",{class:"col  ",children:Object(p.jsx)("img",{src:g,class:"img-thumbnail",alt:"..."})}),Object(p.jsx)("div",{class:"col ",children:Object(p.jsx)("div",{class:"container-sm   p-3 mb-5 bg-body rounded bg-light text-dark ",style:{marginTop:"13%",height:"90%"},children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{class:"mx-auto",children:Object(p.jsx)("h2",{children:"Login"})}),Object(p.jsx)("p",{children:"Please Login to your Acount"}),f&&Object(p.jsx)(O,{message:f,clearError:function(){return k(void 0)}}),Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:N,children:[Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email"}),Object(p.jsx)("input",{type:"email",className:"form-control",id:"login-email",onChange:function(e){return s(e.target.value)}})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"login-password",onChange:function(e){return j(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-dark ml-150 px-5",value:"Log in",children:"Sign In"})]})})]})})})]})})})})}a(74);function k(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(),c=Object(b.a)(r,2),l=c[0],j=c[1],u=Object(n.useState)(),x=Object(b.a)(u,2),f=x[0],k=x[1],y=Object(n.useState)(),w=Object(b.a)(y,2),N=w[0],S=w[1],C=Object(n.useState)(),I=Object(b.a)(C,2),P=I[0],F=I[1],D=Object(n.useContext)(m).setUserData,T=Object(d.f)(),E=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:l,passwordCheck:f,displayName:N},e.next=5,h.a.post(v.backend_url+"/users/register",n);case 5:return e.next=7,h.a.post(v.backend_url+"/users/login",{email:a,password:l});case 7:s=e.sent,D({token:s.data.token,user:s.data.user}),localStorage.setItem("auth-token",s.data.token),T.push("/dashboard"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),e.t0.response.data.msg&&F(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsx)("div",{class:"  p-3 mb-2  text-white ",children:Object(p.jsx)("div",{class:"container-lg  shadow p-3 mb-5  text-dark  ",style:{marginTop:"5%",backgroundColor:"white"},children:Object(p.jsxs)("div",{class:"row row-cols-2",children:[Object(p.jsx)("div",{class:"col",children:Object(p.jsx)("img",{src:g,class:"img-thumbnail",alt:"..."})}),Object(p.jsx)("div",{class:"col",children:Object(p.jsx)("div",{class:"container-sm   p-3 mb-5 bg-body rounded bg-light text-dark ",style:{marginTop:"0%",height:"97.6%"},children:Object(p.jsxs)("div",{style:{marginTop:"7%"},children:[Object(p.jsx)("div",{class:"mx-auto",children:Object(p.jsx)("h2",{children:"Sign Up"})}),Object(p.jsx)("p",{children:"Please Signup Before login to your Acount"}),P&&Object(p.jsx)(O,{message:P,clearError:function(){return F(void 0)}}),Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:E,children:[Object(p.jsxs)("div",{className:"mb-2",children:[Object(p.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email"}),Object(p.jsx)("input",{type:"email",className:"form-control",id:"register-email","aria-describedby":"emailHelp",onChange:function(e){return s(e.target.value)}})]}),Object(p.jsxs)("div",{className:"mb-2",children:[Object(p.jsx)("label",{className:"form-label",children:"User Name"}),Object(p.jsx)("input",{type:"text",id:"register-display-name",className:"form-control",onChange:function(e){return S(e.target.value)}})]}),Object(p.jsxs)("div",{className:"mb-2",children:[Object(p.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"register-password",onChange:function(e){return j(e.target.value)}})]}),Object(p.jsxs)("div",{className:"mb-4",children:[Object(p.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Verify Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"Verify password",onChange:function(e){return k(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-dark ml-150 px-5",value:"Register",children:"Sign Up"})]})}),Object(p.jsx)("p",{})]})})})]})})})})}var y=a(20),w=a(21),N=a(23),S=a(22),C=a(82),I=a(81),P=a(83),F=function(e){Object(N.a)(a,e);var t=Object(S.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return Object(p.jsx)(C.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(p.jsxs)(I.a,{fluid:!0,children:[Object(p.jsx)(j.b,{class:"navbar-brand",to:"/",children:"TLD APP"}),Object(p.jsx)(C.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsxs)(C.a.Collapse,{id:"responsive-navbar-nav",children:[Object(p.jsx)(P.a,{className:"me-auto"}),Object(p.jsx)(P.a,{children:Object(p.jsx)(P.a.Link,{eventKey:2,children:Object(p.jsx)(x,{})})})]})]})})}}]),a}(n.Component),D=(n.Component,function(e){Object(N.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(w.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"Dashboard"})})}}]),a}(n.Component));function T(){var e=Object(n.useState)({token:void 0,user:void 0}),t=Object(b.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),t=""),e.next=4,h.a.post(v.backend_url+"/users/tokenIsValid",null,{headers:{"x-auth-token":t}});case 4:if(a=e.sent,console.log(a.data),!a.data){e.next=11;break}return e.next=9,h.a.get(v.backend_url+"/users/",{headers:{"x-auth-token":t}});case 9:n=e.sent,s({token:t,user:n.data});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(j.a,{children:Object(p.jsxs)(m.Provider,{value:{userData:a,setUserData:s},children:[Object(p.jsx)(F,{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/dashboard",component:D}),Object(p.jsx)(d.a,{path:"/register",component:k}),Object(p.jsx)(d.a,{path:"/",component:f})]})})]})})})}var E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),E()}},[[78,1,2]]]);
//# sourceMappingURL=main.3efab5ec.chunk.js.map