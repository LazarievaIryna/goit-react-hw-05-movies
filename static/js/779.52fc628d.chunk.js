"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,u,c,i=e(439),o=e(791),s=e(689),f=e(933),p=e(168),l=e(444),d=l.ZP.ul(r||(r=(0,p.Z)(["\nlist-style:none;"]))),v=l.ZP.p(a||(a=(0,p.Z)(["\nfont-weight: bold;"]))),h=l.ZP.p(u||(u=(0,p.Z)(["\nfont-style: italic;"]))),g=l.ZP.div(c||(c=(0,p.Z)(["\nfont-style: italic;\nmargin-left: 10px;\npadding-top: 10px;"]))),m=e(184),x=function(){var n=(0,o.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,s.UO)().movieId;if((0,o.useEffect)((function(){a&&(0,f.tx)(a).then((function(n){return r(n)}))}),[a]),e)return(0,m.jsx)("div",{children:0!==e.length?e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,m.jsx)(d,{children:(0,m.jsxs)("li",{children:[(0,m.jsx)(v,{children:e||"No information"}),(0,m.jsx)(h,{children:r||"No information"})]})},t)})):(0,m.jsx)(g,{children:"No information"})})}},933:function(n,t,e){e.d(t,{Bc:function(){return s},Df:function(){return o},Ph:function(){return l},tx:function(){return p},zv:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(912),i="7152fe47b59b20f9de7689c6d0de595b";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.next=6,e.results;case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.52fc628d.chunk.js.map