"use strict";(self.webpackChunktech_part_followers=self.webpackChunktech_part_followers||[]).push([[694],{694:function(A,p,n){n.r(p),n.d(p,{default:function(){return B}});var t=n(433),e=n(439),l=n(165),d=n(861),s=n(243);s.Z.defaults.baseURL="https://645e153212e0a87ac0e71f94.mockapi.io/";var a="users",k=function(){var A=(0,d.Z)((0,l.Z)().mark((function A(p){return(0,l.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,s.Z.put("".concat(a,"/").concat(p.id),p);case 3:return A.abrupt("return",A.sent);case 6:A.prev=6,A.t0=A.catch(0),console.log(A.t0.message);case 9:case"end":return A.stop()}}),A,null,[[0,6]])})));return function(p){return A.apply(this,arguments)}}(),c=n(791),o=n(683),r="TweetsCard_wrapper__sDQFP",i="TweetsCard_divider__znpqh",T="TweetsCard_thumb__2m8Vy",S="TweetsCard_avatar__D9-pC",g="TweetsCard_infoBox__sKHOG",Q="TweetsCard_tweets__yXity",D="TweetsCard_followers__sRfXZ",M="TweetsCard_button__8nwHL",O="TweetsCard_btnFollow__OOoJ5",I="TweetsCard_btnFollowing__OcMRj",w=n(184),m=function(A){var p=A.user,n=p.tweets,t=p.followers,l=p.avatar,d=p.following,s=void 0!==d&&d,a=(0,c.useState)(s),m=(0,e.Z)(a,2),u=m[0],B=m[1],U=(0,c.useState)(t),K=(0,e.Z)(U,2),C=K[0],Z=K[1],h=function(){var A=(0,o.Z)({},p);u?(A.followers=A.followers-1,A.following=!1):(A.followers=A.followers+1,A.following=!0),k(A).then((function(A){Z(A.data.followers)})),B(!u)};return(0,w.jsxs)("div",{className:r,children:[(0,w.jsx)("div",{className:i}),(0,w.jsx)("div",{className:T,children:(0,w.jsx)("img",{src:l,alt:"avatar",className:S})}),(0,w.jsxs)("div",{className:g,children:[(0,w.jsxs)("span",{className:Q,children:[n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," tweets"]}),(0,w.jsxs)("span",{className:D,children:[C.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," ","followers"]}),u?(0,w.jsx)("button",{type:"button",onClick:h,className:"".concat(M," ").concat(I),children:"Following"}):(0,w.jsx)("button",{type:"button",onClick:h,className:"".concat(M," ").concat(O),children:"Follow"})]})]})},u={list:"Tweets_list__J2xhl",button:"Tweets_button__8EO35"},B=function(){var A=(0,c.useState)([]),p=(0,e.Z)(A,2),n=p[0],l=p[1],d=(0,c.useState)(1),k=(0,e.Z)(d,2),o=k[0],r=k[1],i=(0,c.useState)(1),T=(0,e.Z)(i,2),S=T[0],g=T[1],Q=(0,c.useState)(!0),D=(0,e.Z)(Q,2),M=D[0],O=D[1];return(0,c.useEffect)((function(){(function(){try{return s.Z.get("".concat(a))}catch(A){console.log(A)}})().then((function(A){var p=A.data.length/3;g(p)}))}),[S]),(0,c.useEffect)((function(){(function(A){try{return s.Z.get("".concat(a),{params:{limit:3,page:A}})}catch(p){console.log(p)}})(o).then((function(A){l((function(p){return[].concat((0,t.Z)(p),(0,t.Z)(A.data))})),O(!1)})).catch((function(A){console.log(A)}))}),[o]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("ul",{className:u.list,children:M?(0,w.jsx)("li",{className:u.item,children:(0,w.jsx)("img",{src:"data:image/png;base64,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",alt:"default"})}):n.length>0&&n.map((function(A){return(0,w.jsx)("li",{className:u.item,children:(0,w.jsx)(m,{user:A})},A.id)}))}),o<S&&(0,w.jsx)("button",{type:"button",onClick:function(){r(o+1)},className:u.button,children:"Load more"})]})}}}]);
//# sourceMappingURL=694.8921b7f0.chunk.js.map