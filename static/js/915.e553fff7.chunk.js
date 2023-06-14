"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[915],{915:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,a,i,o,c,u,s,p,d,l,f,h=t(439),x=t(791),g=t(689),m=t(87),v=t(933),Z=t(168),b=t(444),y=b.ZP.div(r||(r=(0,Z.Z)(["\n\nmin-height: 100vh;\n\npadding: 5px;\n\n\n\n"]))),w=(0,b.ZP)(m.rU)(a||(a=(0,Z.Z)(["\ntext-decoration: none;\n"]))),j=b.ZP.p(i||(i=(0,Z.Z)(["\nfont-size: 14px;\nmargin: 0;\ncolor: white;"]))),k=b.ZP.ul(o||(o=(0,Z.Z)(["\ndisplay:grid;\ngrid-template-columns: repeat(5, 1fr);\ngrid-template-rows: repeat(3, 1fr);\npadding-left: 0;\ngap: 10px;\nlist-style: none;\n\n\n\n"]))),P=b.ZP.img(c||(c=(0,Z.Z)(["\ndisplay:block;\nheight: 300px;\nwidth: 100%"]))),S=b.ZP.div(u||(u=(0,Z.Z)(["\nheight: 350px;\nborder: 1px solid black;\n border-radius: 4px;\n background-color: #4b4444;\n &:hover{\n  box-shadow: 1px 4px 6px 0 rgba(0, 0, 0, 0.16), 0 4px 4px 0 rgba(0, 0, 0, 0.06),\n    0 1px 1px 0 rgba(0, 0, 0, 0.12);\n }\n"]))),_=b.ZP.div(s||(s=(0,Z.Z)(["\n\nheight: 50px;\nmargin: 0;\ndisplay: grid;\n    justify-items: center;\n    padding: 5px;\n    \n"]))),U=t(163),q=t(184),C=function(n){var e=n.movies,t=(0,g.TH)();return(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(k,{children:e.length>0&&e.map((function(n){var e=n.id,r=n.poster_path,a=n.title;return(0,q.jsx)("div",{children:(0,q.jsx)(w,{to:"".concat(e),state:{from:t},children:(0,q.jsxs)(S,{children:[(0,q.jsx)(P,{src:r?"".concat("https://image.tmdb.org/t/p/w500").concat(r):U,alt:a}),(0,q.jsx)(_,{children:(0,q.jsx)(j,{children:a})})]})})},e)}))})})},z=t(763),D=t(617),E=b.ZP.div(p||(p=(0,Z.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),F=b.ZP.input(d||(d=(0,Z.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n  border: grey;\n"]))),T=((0,b.ZP)(D.G4C)(l||(l=(0,Z.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),b.ZP.button(f||(f=(0,Z.Z)(["\nbackground-color: transparent;\nborder: none;\nmargin-left: 10px;\n&:hover{\n  cursor: pointer;\n  color: white;\n}\n"])))),B=function(n){var e=n.onSubmit,t=(0,x.useState)(""),r=(0,h.Z)(t,2),a=r[0],i=r[1];return(0,q.jsx)(E,{children:(0,q.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(a),i("")},children:[(0,q.jsx)(F,{type:"text",autoComplete:"off",autoFocus:!0,value:a,placeholder:"Search your movie",onChange:function(n){i(n.target.value)}}),(0,q.jsx)(T,{type:"submit",children:(0,q.jsx)(z.a4h,{})})]})})},G=function(){var n=(0,m.lr)(),e=(0,h.Z)(n,2),t=e[0],r=e[1],a=(0,x.useState)([]),i=(0,h.Z)(a,2),o=i[0],c=i[1],u=(0,x.useState)(!1),s=(0,h.Z)(u,2),p=s[0],d=s[1],l=t.get("query");(0,x.useEffect)((function(){l&&(0,v.Ph)(l).then((function(n){if(!n.length)return d(!0),console.log(p);d(!1),c(n)}))}),[l,p]);return(0,q.jsxs)(y,{children:[(0,q.jsx)(B,{onSubmit:function(n){n?r({query:n}):alert("Empty query")}}),p&&(0,q.jsx)("p",{children:"There is no movies with this request. Please, try again"}),(0,q.jsx)(C,{movies:o}),(0,q.jsx)(g.j3,{})]})}},933:function(n,e,t){t.d(e,{Bc:function(){return s},Df:function(){return u},Ph:function(){return l},tx:function(){return d},zv:function(){return p}});var r=t(861),a=t(757),i=t.n(a),o=t(912),c="7152fe47b59b20f9de7689c6d0de595b";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,t=e.data,n.next=6,t.results;case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},163:function(n,e,t){n.exports=t.p+"static/media/noImage.c7747d1b611ce5dc0cc4.png"}}]);
//# sourceMappingURL=915.e553fff7.chunk.js.map