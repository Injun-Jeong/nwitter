(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(1),c=a.n(r),s=a(28),i=a.n(s),o=a(11),u=a(34),l=a(9),j=a(13),b=a.n(j),d=a(22),p=a(14),f=a(35),O=a(36);a(74),a(80),a(81);O.a.initializeApp({apiKey:"AIzaSyBrVAY7yfQRIVA7oq3z53YsA3cC9ZO1x_M",authDomain:"nwitter-38ab7.firebaseapp.com",projectId:"nwitter-38ab7",storageBucket:"nwitter-38ab7.appspot.com",messagingSenderId:"168205405199",appId:"1:168205405199:web:77ee69a8245840ece0a77a"});var h=O.a,m=O.a.auth(),x=O.a.firestore(),v=O.a.storage(),g=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(r.useState)(""),p=Object(o.a)(j,2),f=p[0],O=p[1],h=Object(r.useState)(!1),x=Object(o.a)(h,2),v=x[0],g=x[1],w=Object(r.useState)(""),y=Object(o.a)(w,2),N=y[0],_=y[1],k=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a?l(n):"passwordConfirm"===a&&O(n)},S=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!v){e.next=10;break}if(u==f){e.next=5;break}return e.abrupt("return",alert("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."));case 5:return e.next=7,m.createUserWithEmailAndPassword(a,u);case 7:return e.abrupt("return",alert("\uacc4\uc815\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 10:return e.next=12,m.signInWithEmailAndPassword(a,u);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),_(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:S,className:"container",children:[Object(n.jsx)("input",{name:"email",type:"email",placeholder:"E-mail",required:!0,value:a,onChange:k,className:"authInput"}),Object(n.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:k,className:"authInput"}),v&&Object(n.jsx)("input",{name:"passwordConfirm",type:"password",placeholder:"Password Confirm",required:!0,value:f,onChange:k,className:"authInput"}),Object(n.jsx)("input",{type:"submit",className:"authInput authSubmit",value:v?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778"}),N&&Object(n.jsx)("span",{className:"authError",children:N})]}),Object(n.jsx)("span",{onClick:function(){_(""),g((function(e){return!e}))},className:"authSwitch",children:v?"\uc774\ubbf8 \ub4f1\ub85d\ub41c \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694?":"\uc0c8\ub85c\uc6b4 \uacc4\uc815\uc744 \ub4f1\ub85d\ud558\uc2dc\ub098\uc694?"})]})},w=function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new h.auth.GoogleAuthProvider:"github"===a&&(n=new h.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"authContainer",children:[Object(n.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(n.jsx)(g,{}),Object(n.jsxs)("div",{className:"authBtns",children:[Object(n.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(n.jsx)(p.a,{icon:f.b})]}),Object(n.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(n.jsx)(p.a,{icon:f.a})]})]})]})},y=a(33),N=a(23),_=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(r.useState)(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],l=Object(r.useState)(t.text),j=Object(o.a)(l,2),f=j[0],O=j[1],h=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you wnat to delete this nweet?")){e.next=5;break}return e.next=4,x.doc("nweets/".concat(t.id)).delete();case 4:""!=t.attachmentUrl&&v.refFromURL(t.attachmentUrl).delete().then((function(){console.log("success delete!!!")})).catch((function(e){console.log("..? what happend?")}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},g=function(){var e=Object(d.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,x.doc("nweets/".concat(t.id)).update({text:f});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"nweet",children:i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(n.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:f,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;O(t)},className:"formInput"}),Object(n.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(n.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{className:"nweet__text",children:t.text}),t.attachmentUrl&&Object(n.jsx)("img",{src:t.attachmentUrl}),a&&Object(n.jsxs)("div",{class:"nweet__actions",children:[Object(n.jsx)("span",{onClick:h,children:Object(n.jsx)(p.a,{icon:N.d})}),Object(n.jsx)("span",{onClick:m,children:Object(n.jsx)(p.a,{icon:N.a})})]})]})})},k=a(84),S=a(83),I=function(e){var t=e.userObj,a=Object(r.useState)(""),c=Object(o.a)(a,2),s=c[0],i=c[1],u=Object(r.useState)(""),l=Object(o.a)(u,2),j=l[0],f=l[1],O=["\uc624\ub298 \ud558\ub8e8 \uc5b4\ub560\ub098\uc694?","\uc798 \uc9c0\ub0b4\uace0 \uacc4\uc2dc\uc8e0?","\uc88b\uc740 \ud558\ub8e8 \ub418\uc138\uc694!","\ub9cc\ub098\uc11c \ubc18\uac11\uc2b5\ub2c8\ub2e4 :)"],h=Boolean(t.displayNmae)?"\ud504\ub85c\ud544\uc5d0\uc11c \uc774\ub984\uc744 \uc5c5\ub370\uc774\ud2b8 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.":"".concat(O[Math.floor(Math.random()*O.length)]),m=function(){var e=Object(d.a)(b.a.mark((function e(a){var n,r,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==s){e.next=5;break}return e.abrupt("return",S.b.warn("\uc785\ub825\ub41c \ub0b4\uc6a9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."));case 5:if(!Boolean(t.displayNmae)){e.next=7;break}return e.abrupt("return",S.b.warn("\ud504\ub85c\ud544\uc5d0\uc11c \uc774\ub984\uc744 \uc5c5\ub370\uc774\ud2b8 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694."));case 7:if(n="",""===j){e.next=16;break}return r=v.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=12,r.putString(j,"data_url");case 12:return c=e.sent,e.next=15,c.ref.getDownloadURL();case 15:n=e.sent;case 16:return o={text:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=19,x.collection("nweets").add(o);case 19:i(""),f("");case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("form",{onSubmit:m,className:"factoryForm",children:[Object(n.jsxs)("div",{className:"factoryInput__container",children:[Object(n.jsx)("input",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:h,maxLength:120}),Object(n.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(n.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(n.jsx)("span",{children:"\uc0ac\uc9c4 \ub4f1\ub85d\ud558\uae30"}),Object(n.jsx)(p.a,{icon:N.b})]}),Object(n.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;f(t)},Boolean(t)&&a.readAsDataURL(t)},style:{opacity:0}}),j&&Object(n.jsxs)("div",{className:"factoryForm__attachment",children:[Object(n.jsx)("img",{src:j,style:{backgroundImage:j}}),Object(n.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return f("")},children:[Object(n.jsx)("span",{children:"Remove"}),Object(n.jsx)(p.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj;console.info("\uc5ec\uae30\ub294 \ud648");var a=Object(r.useState)([]),c=Object(o.a)(a,2),s=c[0],i=c[1];return Object(r.useEffect)((function(){x.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(I,{userObj:t}),Object(n.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(n.jsx)(_,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},U=function(e){var t=e.refreshUser,a=e.userObj;console.info("\uc5ec\uae30\ub294 \ud504\ub85c\ud544");var c="\uc774\ub984 \ub610\ub294 \ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",s=Object(l.f)(),i=Object(r.useState)(a.displayName),u=Object(o.a)(i,2),j=u[0],f=u[1],O=Object(r.useState)(a.photoURL),h=Object(o.a)(O,2),x=h[0],g=h[1],w=function(){var e=Object(d.a)(b.a.mark((function e(n){var r,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),Boolean(j)){e.next=3;break}return e.abrupt("return",alert(c));case 3:if(a.displayName!==j||x!==a.photoURL){e.next=5;break}return e.abrupt("return",alert("\ubcc0\uacbd\ub41c \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."));case 5:if(a.displayName===j){e.next=9;break}return e.next=8,a.updateProfile(Object(y.a)(Object(y.a)({},a),{},{displayName:j}));case 8:t();case 9:if(!Boolean(x)||x===a.photoURL){e.next=22;break}return r="",s=v.ref().child("".concat(a.uid,"/").concat(Object(k.a)())),e.next=14,s.putString(x,"data_url");case 14:return i=e.sent,e.next=17,i.ref.getDownloadURL();case 17:return r=e.sent,e.next=20,a.updateProfile(Object(y.a)(Object(y.a)({},a),{},{photoURL:r}));case 20:t(),g(r);case 22:return e.abrupt("return",alert("\ud504\ub85c\ud544 \uc815\ubcf4\uac00 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container",children:[x?Object(n.jsx)("img",{className:"profile__img",alt:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0",src:x}):Object(n.jsx)("div",{className:"profile__img__container",children:Object(n.jsx)(p.a,{icon:N.f,size:"6x"})}),Object(n.jsxs)("form",{onSubmit:w,className:"profileForm",children:[Object(n.jsxs)("label",{htmlFor:"image-file",className:"profile__label",children:[Object(n.jsx)("span",{children:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"}),Object(n.jsx)(p.a,{icon:N.b})]}),Object(n.jsx)("input",{id:"image-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;g(t)},Boolean(t)&&a.readAsDataURL(t)},style:{opacity:0}}),Object(n.jsx)("input",{type:"text",placeholder:c,value:j,onChange:function(e){var t=e.target.value;f(t)},className:"formInput"}),Object(n.jsx)("input",{type:"submit",value:"\ud504\ub85c\ud544 \uc5c5\ub370\uc774\ud2b8",className:"formBtn",style:{marginTop:10}})]}),Object(n.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),s.push("/")},children:"\ub85c\uadf8 \uc544\uc6c3"})]})},A=function(e){e.userObj;return Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{className:"nav__container",children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.b,{to:"/",style:{marginLeft:10},children:Object(n.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"2x"})})}),Object(n.jsx)("li",{children:Object(n.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(n.jsx)(p.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(n.jsx)("span",{style:{marginTop:10},children:"\ud504\ub85c\ud544"})]})})]})})},B=function(e){var t=e.refreshUser,a=e.isLoggedIn,r=e.userObj;return console.info("\uc5ec\uae30\ub294 \uc571 \ub77c\uc6b0\ud130"),Object(n.jsxs)(u.a,{children:[a&&Object(n.jsx)(A,{userObj:r}),Object(n.jsx)(l.c,{children:a?Object(n.jsxs)("div",{className:"router__container",children:[Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(C,{userObj:r})}),Object(n.jsx)(l.a,{exact:!0,path:"/profile",children:Object(n.jsx)(U,{userObj:r,refreshUser:t})})]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(w,{})})})})]})};var F=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(null),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(r.useEffect)((function(){m.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(n.jsxs)("div",{className:"app__container",children:[a?Object(n.jsx)(B,{refreshUser:function(){var e=m.currentUser;l({displayName:e.displayName,uid:e.uid,photoURL:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing...",Object(n.jsxs)("footer",{children:["\xa9 Injun Jeong ",(new Date).getFullYear()]})]})};a(78);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.59adca07.chunk.js.map