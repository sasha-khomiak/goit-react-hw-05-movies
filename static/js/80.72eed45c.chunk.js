"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[80],{6457:function(n,t,e){e.d(t,{Z:function(){return w}});var r,o,i,a,c,s=e(1087),l=e(7689),u=e(168),d=e(6444),f=d.ZP.li(r||(r=(0,u.Z)(["\n  /*----\u0411\u0430\u0437\u043e\u0432\u0438\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u043c\u043e\u0431\u0456\u043b\u043a\u0438 \u0434\u043e 479 (\u0440\u0435\u0441\u043f\u043e\u043d\u0441\u0438\u0432\u043d\u0438\u0439)----*/\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  /* gap: 20px; */\n\n  /*----\u0411\u0430\u0437\u043e\u0432\u0438\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u043c\u043e\u0431\u0456\u043b\u043a\u0438 480-767 (\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u0438\u0439)----*/\n  @media screen and (min-width: 480px) {\n    max-width: 220px;\n  }\n\n  /*----\u0421\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u0430 768-1200----*/\n\n  @media screen and (min-width: 768px) {\n    max-width: 177px;\n  }\n\n  /*----\u0421\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u0430 \u0432\u0456\u0434 1200----*/\n\n  @media screen and (min-width: 1200px) {\n    max-width: 226px;\n  }\n"]))),p=d.ZP.div(o||(o=(0,u.Z)(["\n  height: 100%;\n  border-radius: 15px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n  cursor: pointer;\n\n  /*----\u0411\u0430\u0437\u043e\u0432\u0438\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u043c\u043e\u0431\u0456\u043b\u043a\u0438 480-767 (\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u0438\u0439)----*/\n  @media screen and (min-width: 480px) {\n    max-width: 220px;\n    height: 330px;\n  }\n\n  /*----\u0421\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u0430 768-1200----*/\n\n  @media screen and (min-width: 768px) {\n    max-width: 177px;\n    height: 265px;\n  }\n\n  /*----\u0421\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u0430 \u0432\u0456\u0434 1200----*/\n\n  @media screen and (min-width: 1200px) {\n    max-width: 226px;\n    height: 339px;\n  }\n"]))),x=d.ZP.img(i||(i=(0,u.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: scale 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n\n  &:hover {\n    scale: 1.1;\n  }\n"]))),h=(0,d.ZP)(s.OL)(a||(a=(0,u.Z)(["\n  display: flex;\n  height: 100% !important;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n\n  height: auto;\n  text-decoration: none;\n  color: #ff6b17;\n  padding: 9px 5px;\n  background: #ffe9dc;\n  border: 2px solid rgba(255, 107, 23, 0.15);\n  border-radius: 15px;\n\n  :hover {\n    background: #ff6b17;\n    color: #f5f5f5;\n  }\n"]))),m=e(2905),g=e(184),b=function(n){var t=n.movie,e=(0,l.TH)(),r=m;return t.poster_path&&(r="https://image.tmdb.org/t/p/w500".concat(t.poster_path)),(0,g.jsxs)(f,{children:[(0,g.jsx)(s.rU,{to:"/movies/".concat(t.id),state:{from:e},children:(0,g.jsx)(p,{children:(0,g.jsx)(x,{src:r,width:"100%",alt:"preview"})})}),t.title&&(0,g.jsx)(h,{to:"/movies/".concat(t.id),state:{from:e},children:(0,g.jsx)("span",{children:t.title})}),t.name&&(0,g.jsx)(h,{to:"/movies/".concat(t.id),state:{from:e},children:(0,g.jsx)("span",{children:t.name})})]})},v=d.ZP.ul(c||(c=(0,u.Z)(["\n  /*----\u0411\u0430\u0437\u043e\u0432\u0438\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u043c\u043e\u0431\u0456\u043b\u043a\u0438 \u0434\u043e 479 (\u0440\u0435\u0441\u043f\u043e\u043d\u0441\u0438\u0432\u043d\u0438\u0439)----*/\n  /* border: 2px solid tomato; */\n  list-style: none;\n  padding: 0;\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  /*----\u0411\u0430\u0437\u043e\u0432\u0438\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u043c\u043e\u0431\u0456\u043b\u043a\u0438 480-767 (\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u0438\u0439)----*/\n  @media screen and (min-width: 480px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n"]))),w=function(n){var t=n.trendingMovies;return(0,g.jsx)(v,{children:t.map((function(n){return(0,g.jsx)(b,{movie:n},n.id)}))})}},1454:function(n,t,e){e.d(t,{Z:function(){return u}});var r,o=e(5243),i=e(4164),a=e(168),c=e(6444).ZP.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1);\n"]))),s=e(184),l=document.querySelector("#loader-root"),u=function(){return(0,i.createPortal)((0,s.jsx)(c,{children:(0,s.jsx)(o.yk,{height:"150",width:"300",color:"#ff6b17",wrapperStyle:{},wrapperClass:"",visible:!0,outerCircleColor:"",innerCircleColor:"",barColor:"",ariaLabel:"circles-with-bar-loading"})}),l)}},1192:function(n,t,e){e.d(t,{Z:function(){return c}});var r,o=e(168),i=e(6444).ZP.h1(r||(r=(0,o.Z)(["\n  color: #ff6b17;\n  text-align: center;\n  margin: 0;\n  margin-bottom: 10px;\n"]))),a=e(184),c=function(n){var t=n.text;return(0,a.jsx)(i,{children:t})}},6259:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var r,o,i,a,c=e(3433),s=e(9439),l=e(2791),u=e(1087),d=e(8524),f=(e(5462),e(9086)),p=e(1192),x=e(168),h=e(6444),m=e(8948),g=h.ZP.form(r||(r=(0,x.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  /* justify-content: center; */\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n"]))),b=h.ZP.button(o||(o=(0,x.Z)(["\n  position: absolute;\n  z-index: 1000;\n  background-color: transparent;\n  border: none;\n  margin-left: 10px;\n  margin-right: auto;\n  /* padding: 0; */\n  /* width: 20px; */\n  /* height: 20px; */\n  cursor: pointer;\n  color: rgba(255, 107, 23, 0.5);\n  /* display: flex; */\n  /* align-items: center; */\n  /* justify-content: center; */\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    transform: scale(1.1);\n    color: rgba(255, 107, 23, 1);\n    /* background-color: rgba(255, 107, 23, 1); */\n  }\n"]))),v=(0,h.ZP)(m.Q)(i||(i=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  fill: currentColor;\n  /* fill: black; */\n"]))),w=h.ZP.input(a||(a=(0,x.Z)(["\n  /* position: absolute; */\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n  padding: 20px 30px;\n  padding-left: 48px;\n  /* gap: 10px; */\n\n  width: 300px;\n  height: 48px;\n\n  background: #ffe9dc;\n  border: 2px solid rgba(255, 107, 23, 0.15);\n  border-radius: 50px;\n  font-weight: bold;\n  color: rgba(255, 107, 23, 1);\n\n  &:focus {\n    outline: 2px solid rgba(255, 107, 23, 1);\n  }\n\n  ::placeholder {\n    color: rgba(255, 107, 23, 1);\n    font-weight: 300;\n  }\n"])));var j,Z=e.p+"static/media/search-loop.e28494c9a031110c53bf3b54eecaad20.svg",y=e(184),_=function(n){var t=n.onSubmit,e=(0,l.useState)(""),r=(0,s.Z)(e,2),o=r[0],i=r[1];return(0,y.jsxs)(g,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(t(o.trim()),i("")):i("")},children:[(0,y.jsxs)(b,{type:"submit",children:[(0,y.jsx)(v,{src:Z}),(0,y.jsx)("span",{role:"img","aria-label":"search movie"})]}),(0,y.jsx)(w,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",value:o,onChange:function(n){i(n.currentTarget.value)}})]})},k=e(6457),P=e(1454),S=h.ZP.button(j||(j=(0,x.Z)(["\n  color: #ff6b17;\n  text-decoration: none;\n  background: #ffe9dc;\n  border: 2px solid rgb(164, 71, 17);\n  border-radius: 50px;\n  padding: 9px 30px;\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 250ms linear, background-color 250ms linear,\n    color 250ms linear;\n  margin: 10px auto 30px auto;\n\n  &:hover {\n    transform: scale(1.1);\n    background: #ff6b17;\n    color: #ffe9dc;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }\n"]))),C=function(n){var t=n.loadMoreMovies;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(S,{onClick:t,children:"Load more"})})},M=e(2606),A=e.p+"static/media/searching.c67411f636d1af2e678a.gif",q=function(){var n=(0,l.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],o=(0,l.useState)(1),i=(0,s.Z)(o,2),a=i[0],x=i[1],h=(0,l.useState)(!1),m=(0,s.Z)(h,2),g=m[0],b=m[1],v=(0,l.useState)(!1),w=(0,s.Z)(v,2),j=w[0],Z=w[1],S=(0,u.lr)(),q=(0,s.Z)(S,2),U=q[0],z=q[1],F=U.get("query");(0,l.useEffect)((function(){F&&(Z(!0),(0,f.fw)(F,1).then((function(n){r((0,c.Z)(n.results));20<n.total_results&&b(!0)})).finally((function(){Z(!1)})))}),[]);var L=function(n,t){Z(!0),(0,f.fw)(n,t).then((function(e){if(e.total_results<1)d.Am.error('\u0417\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c "'.concat(n,'" \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432 \u043d\u0435\u043c\u0430!')),x(1),z({}),b(!1);else if(0!==e.total_results){r((function(n){return[].concat((0,c.Z)(n),(0,c.Z)(e.results))}));var o=20*t;if(o<e.total_results){if(1===t)(0,d.Am)('\u0417\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c "'.concat(n,'" \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0444\u0456\u043b\u044c\u043c\u0456\u0432: ').concat(e.total_results,'. \u041d\u0430\u0442\u0438\u0441\u043d\u0438 "\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435", \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0449\u0435 20 \u0444\u0456\u043b\u044c\u043c\u0456\u0432!'));else{var i=e.total_results-o;(0,d.Am)('\u0417\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c "'.concat(n,'" \u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044f \u0449\u0435 \u0444\u0456\u043b\u044c\u043c\u0456\u0432: ').concat(i," \u0456\u0437 ").concat(e.total_results,'. \u041d\u0430\u0442\u0438\u0441\u043d\u0438 "\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435", \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0449\u0435 20 \u0444\u0456\u043b\u044c\u043c\u0456\u0432!'))}b(!0)}else(0,d.Am)('\u0426\u0435 \u0432\u0441\u0456 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u0437\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c "'.concat(n,'". \u0411\u0456\u043b\u044c\u0448\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432 \u043d\u0435\u043c\u0430!')),b(!1)}})).finally((function(){Z(!1)}))};return(0,y.jsxs)(y.Fragment,{children:[j&&(0,y.jsx)(P.Z,{}),(0,y.jsx)(d.Ix,{autoClose:2e3}),(0,y.jsx)("section",{children:(0,y.jsxs)(M.W,{children:[(0,y.jsx)(p.Z,{text:"Search movies"}),(0,y.jsx)(_,{onSubmit:function(n){n!==F?(r([]),x(1),L(n,1),z({query:n})):(0,d.Am)('\u0412\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043d\u0430\u043c\u0430\u0433\u0430\u0454\u0442\u0435\u0441\u044c \u0437\u043d\u0430\u0439\u0442\u0438 \u0432\u0456\u0434\u0435\u043e \u043f\u0440\u043e: "'.concat(n,'"!'))}}),0===e.length&&(0,y.jsx)("img",{src:A,alt:"searching"}),0!==e.length&&(0,y.jsx)(k.Z,{trendingMovies:e}),g&&(0,y.jsx)(C,{loadMoreMovies:function(){L(F,a+1),x((function(n){return n+1}))}})]})})]})}},9086:function(n,t,e){e.d(t,{$w:function(){return d},Pg:function(){return l},TQ:function(){return s},f6:function(){return f},fw:function(){return u}});var r=e(5861),o=e(4687),i=e.n(o),a="f051ac50d3bfe0c3fd75f02c1ff7b688",c="https://api.themoviedb.org/",s=function(){var n="".concat(c,"3/movie/popular?api_key=").concat(a,"&page=1");return fetch(n).then((function(n){return n.json()}))},l=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(c,"3/movie/").concat(t,"?api_key=").concat(a),n.next=4,fetch(e);case 4:return r=n.sent,n.next=7,r.json();case 7:return o=n.sent,n.abrupt("return",o);case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(t){return n.apply(this,arguments)}}(),u=function(n,t){var e="".concat(c,"3/search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=").concat(t,"&api_key=").concat(a);return fetch(e).then((function(n){return n.json()}))},d=function(n){var t="".concat(c,"3/movie/").concat(n,"/credits?language=en-US&api_key=").concat(a);return fetch(t).then((function(n){return n.json()}))},f=function(n){var t="".concat(c,"3/movie/").concat(n,"/reviews?language=en-US&api_key=").concat(a,"&page=1");return fetch(t).then((function(n){return n.json()}))}},2905:function(n,t,e){n.exports=e.p+"static/media/noPoster.1f7e17b0bed8e5c7a998.jpg"}}]);
//# sourceMappingURL=80.72eed45c.chunk.js.map