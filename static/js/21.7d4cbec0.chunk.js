"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[21],{21:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a,c,i,u,o,s,p,d=t(439),f=t(791),l=t(689),h=t(163),g=t(168),x=t(444),v=t(87),m=x.ZP.ul(r||(r=(0,g.Z)(["\n display:grid;\n grid-template-columns: repeat(5, 1fr);\n grid-template-rows: repeat(3, 1fr);\n padding-left: 0;\n gap: 10px;\n list-style: none;\n \n\n \n"]))),Z=x.ZP.img(a||(a=(0,g.Z)(["\ndisplay:block;\nheight: 300px;\nwidth: 100%"]))),b=x.ZP.h2(c||(c=(0,g.Z)(["\nfont-size: 14px;\nmargin: 0;\ncolor: white;\n"]))),k=(0,x.ZP)(v.rU)(i||(i=(0,g.Z)(["\ntext-decoration: none;\n"]))),w=x.ZP.div(u||(u=(0,g.Z)(["\nheight: 350px;\nborder: 1px solid black;\n border-radius: 4px;\n background-color: #313131;\n &:hover{\n  box-shadow: 1px 4px 6px 0 rgba(0, 0, 0, 0.16), 0 4px 4px 0 rgba(0, 0, 0, 0.06),\n    0 1px 1px 0 rgba(0, 0, 0, 0.12);\n }\n"]))),y=x.ZP.div(o||(o=(0,g.Z)(["\n\nheight: 50px;\nmargin: 0;\ndisplay: grid;\n    justify-items: center;\n    padding: 5px;\n    \n"]))),j=t(184),_=function(n){var e=n.movies,t=(0,l.TH)();return(0,j.jsx)(m,{children:e.length>0&&e.map((function(n){var e=n.id,r=n.poster_path,a=n.title;return(0,j.jsx)("li",{children:(0,j.jsx)(k,{to:"/movies/".concat(e),state:{from:t},children:(0,j.jsxs)(w,{children:[(0,j.jsx)(Z,{src:r?"".concat("https://image.tmdb.org/t/p/w500").concat(r):h,alt:a}),(0,j.jsx)(y,{children:(0,j.jsx)(b,{children:a})})]})})},e)}))})},P=t(933),U=x.ZP.main(s||(s=(0,g.Z)(["\nmin-height: 100vh;\npadding: 5px;\n\n"]))),S=x.ZP.h2(p||(p=(0,g.Z)(["\ncolor: black;\nmargin: 0;"]))),z=function(){var n=(0,f.useState)([]),e=(0,d.Z)(n,2),t=e[0],r=e[1];return(0,f.useEffect)((function(){(0,P.Df)().then(r)}),[]),(0,j.jsxs)(U,{children:[(0,j.jsx)(S,{children:"Trending today"}),(0,j.jsx)(_,{movies:t})]})}},933:function(n,e,t){t.d(e,{Bc:function(){return s},Df:function(){return o},Ph:function(){return f},tx:function(){return d},zv:function(){return p}});var r=t(861),a=t(757),c=t.n(a),i=t(912),u="7152fe47b59b20f9de7689c6d0de595b";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,t=e.data,n.next=6,t.results;case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},163:function(n,e,t){n.exports=t.p+"static/media/noImage.c7747d1b611ce5dc0cc4.png"}}]);
//# sourceMappingURL=21.7d4cbec0.chunk.js.map