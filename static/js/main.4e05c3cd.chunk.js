(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(14),r=c.n(a),i=(c(23),c(3)),l=(c(24),c(6)),o=c(2),d=(c(25),"https://api.themoviedb.org/3/movie/popular?api_key="),j="https://api.themoviedb.org/3/search/movie?api_key=",u="https://image.tmdb.org/t/p",b="//api.themoviedb.org/3/discover/movie?api_key=",p="https://api.themoviedb.org/3/movie/",h=c(0),m=function(){var e=Object(o.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),d=i[0],u=i[1],b=Object(n.useState)(null),p=Object(l.a)(b,2),m=p[0],g=p[1];Object(n.useEffect)((function(){var e=new AbortController;return fetch(j+"415156bd1fea240753b98479def9c8fc&query="+d,{signal:e.signal}).then((function(e){return e.json()})).then((function(e){return g(e.results.slice(0,5))})).catch((function(e){console.log(e)})),function(){e.abort()}}),[d]);Object(n.useEffect)((function(){var e=setTimeout((function(){u(s)}),400);return function(){clearTimeout(e)}}),[s]);return m&&function(){var e=document.getElementById("suggestions");""==d&&null==d||(e.style.display="flex"),""!=d&&null!=d||(e.style.display="none")}(),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!=!s&&null!=!s||(e.push("/results/".concat(s,"/page1")),a(""))},children:[Object(h.jsx)("input",{type:"text",id:"header-search",placeholder:"search a movie",name:"s",value:s,autocomplete:"off",onChange:function(e){a(e.target.value),u(""),g([])}}),Object(h.jsx)("div",{id:"suggestions",children:m&&m.map((function(t){return Object(h.jsxs)("div",{id:"sug",onClick:function(){u(""),a(""),g([]),e.push("/moviedetails/".concat(t.id))},children:[t.title," ",Object(h.jsx)("span",{children:t.release_date.substring(0,4)})]})}))})]})})},g=function(){return window.onclick=function(e){if(!e.target.matches(".burger")){var t=document.getElementById("menu");"block"===t.style.display&&(t.style.display="none")}},Object(h.jsxs)("div",{className:"navbar ",children:[Object(h.jsxs)("div",{className:"burger-icon",children:[" ",Object(h.jsx)("button",{className:"burger",onClick:function(){var e=document.getElementById("menu");"block"===e.style.display?e.style.display="none":e.style.display="block"}})]}),Object(h.jsx)("div",{className:"logo ",children:" app logo"}),Object(h.jsxs)("ul",{id:"menu",children:[Object(h.jsx)(i.b,{to:"/",children:Object(h.jsx)("li",{children:"Home"})}),Object(h.jsx)(i.b,{to:"/results/newreleases/page1",children:Object(h.jsx)("li",{children:"New Releases"})}),Object(h.jsx)(i.b,{to:"/results/popular/page1",children:Object(h.jsx)("li",{children:"Popular"})})]}),Object(h.jsx)("div",{className:"search-bar",children:Object(h.jsx)(m,{})})]})},O=(c(34),c(12)),v=c.n(O),f=c(17),A=function(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!0),i=Object(l.a)(r,2),o=i[0],d=i[1],j=Object(n.useState)(null),u=Object(l.a)(j,2),b=u[0],p=u[1];function h(){return h=Object(f.a)(v.a.mark((function t(){var c,n,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=new AbortController,t.next=3,fetch(e,{signal:c.signal});case 3:if((n=t.sent).ok){t.next=6;break}throw new Error(n.text()+"Satus: ".concat(n.status));case 6:return t.next=8,n.json();case 8:return s=t.sent,t.abrupt("return",s);case 10:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}return console.log(e),Object(n.useEffect)((function(){(function(){return h.apply(this,arguments)})().then((function(e){a(e),d(!1)})).catch((function(e){p(e),d(!1)}))}),[e]),{data:s,pending:o,error:b}},x=(c(36),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABgSURBVHgB7dHRCYAwDATQixM4giM4km7iKG7SUTqCI5wRFcU/ISmU5kHI3yUhQAjFkRy00tFh7QrPPCVY+oRn0wuqDu9f4ZvXYyc+Fnhoe0iHH0Rk1Tbf8+BFtx8RQjE7zh2g2vm/2rUAAAAASUVORK5CYII="),w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABkSURBVHgB7c3BCYAwEETRwQosYUuwI0vRUuzEUlKCJYwrDuhJJSQHwz5YcgnzgRAOJAfU4uMzTyMydB/+UO+SG3kvkBMvEXkMmN+mQPLrUYrG023cUMp/xxVYq40rYIoYQmjTDsh6n8+/J6bYAAAAAElFTkSuQmCC",y=function(){var e=A(d+"415156bd1fea240753b98479def9c8fc"),t=e.data,c=e.pending,s=(e.error_movies,Object(n.useState)(0)),a=Object(l.a)(s,2),r=a[0],o=a[1];if(Object(n.useEffect)((function(){var e=r,c=setInterval((function(){e==t.results.length-1?e=0:e++,o(e)}),12e3);return function(){return clearInterval(c)}}),t),c)return Object(h.jsx)("div",{children:"LOADING......."});var j=t.results.map((function(e){return"".concat(u,"/w780/").concat(e.backdrop_path)}));return Object(h.jsxs)("div",{className:"body",children:[Object(h.jsxs)("div",{className:"image-banner",children:[Object(h.jsx)("img",{src:j[r],alt:""}),Object(h.jsxs)("div",{className:"btn left",children:[" ",Object(h.jsx)("img",{src:x,alt:"left popular arrow",onClick:function(){o(r>0?r-1:t.results.length-1)}})]}),Object(h.jsx)("div",{className:"btn right",children:Object(h.jsx)("img",{src:w,alt:"right popular arrow",onClick:function(){r<t.results.length-1?o(r+1):o(0)}})})]}),Object(h.jsx)("section",{id:"details",children:Object(h.jsxs)("div",{className:" movie-details ",children:[Object(h.jsx)(i.b,{to:"/moviedetails/".concat(t.results[r].id),children:Object(h.jsx)("h1",{children:t.results[r].title})}),Object(h.jsx)("div",{id:"rating",children:Object(h.jsx)("span",{children:t.results[r].vote_average})}),Object(h.jsx)("p",{id:"summary",children:t.results[r].overview})]})})]})},N=(c(37),function(e){var t=e.movie,c=t.poster_path?"".concat(u,"/original/").concat(t.poster_path):"https://st.depositphotos.com/1987177/3470/v/950/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg";return Object(h.jsx)("div",{className:"container",onClick:function(){return console.log(t.original_title)},children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"poster",children:Object(h.jsx)("img",{src:c,alt:""})}),Object(h.jsx)("div",{className:"line"}),Object(h.jsx)("div",{className:"tittle",children:t.title}),Object(h.jsx)("div",{className:"rating",children:Object(h.jsxs)("p",{children:["Rating: ",t.vote_average]})})]})})}),_=(c(38),function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),c=String(e.getMonth()+1).padStart(2,"0"),s=e.getFullYear(),a="".concat(s,"-").concat(c,"-").concat(t),r=A(b+"415156bd1fea240753b98479def9c8fc&sort_by=primary_release_date.desc&primary_release_date.gte=1900-01-01&primary_release_date.lte="+a+"&with_release_type=2%7C3"),l=r.data,o=(r.isPendingnew,r.errornew,Object(n.useRef)(null)),d=function(e){o.current.scrollLeft+=e};return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"new-releases",children:[Object(h.jsx)("div",{id:"line",children:Object(h.jsx)(i.b,{to:"/results/newreleases/page1",children:Object(h.jsx)("h2",{children:"New Releases"})})}),Object(h.jsxs)("div",{className:"cards",ref:o,children:[l&&l.results.map((function(e){return Object(h.jsx)("div",{className:"new-movie",children:Object(h.jsx)(i.b,{to:"/moviedetails/".concat(e.id),children:Object(h.jsx)(N,{movie:e})})})})),Object(h.jsxs)("div",{className:"btn left",children:[" ",Object(h.jsx)("img",{src:x,alt:"left popular arrow",onClick:function(){return d(.75*-window.innerWidth)}})]}),Object(h.jsx)("div",{className:"btn right",children:Object(h.jsx)("img",{src:w,alt:"right popular arrow",onClick:function(){return d(.75*window.innerWidth)}})})]})]})})}),k=(c(39),function(){var e=Object(o.g)().id,t=A(p+e+"?api_key=415156bd1fea240753b98479def9c8fc"),c=t.data,n=t.pending;t.error;if(n)return Object(h.jsx)("div",{children:" LOADING........ "});var s=c.poster_path?"".concat(u,"/original/").concat(c.poster_path):"https://st.depositphotos.com/1987177/3470/v/950/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg";return console.log(c),Object(h.jsxs)("div",{className:"m-details",children:[Object(h.jsxs)("div",{className:"m-title",children:[Object(h.jsx)("h1",{children:c.original_title})," "]}),Object(h.jsx)("div",{className:"m-runtime",children:Object(h.jsxs)("p",{children:[" ",c.runtime," min"]})}),Object(h.jsxs)("div",{className:"m-poster_summary",children:[Object(h.jsxs)("div",{className:"m-poster",children:[" ",Object(h.jsx)("img",{src:s,alt:""})]}),Object(h.jsx)("p",{children:c.overview})]})]})}),C=c(18),S=c.n(C),R=(c(40),function(){var e=Object(o.g)().searchcontent,t=Object(o.g)().page_number,c="415156bd1fea240753b98479def9c8fc",s=Object(n.useState)(""),a=Object(l.a)(s,2),r=a[0],u=a[1],p=Object(o.f)(),m=new Date,g=String(m.getDate()).padStart(2,"0"),O=String(m.getMonth()+1).padStart(2,"0"),v=m.getFullYear(),f="".concat(v,"-").concat(O,"-").concat(g);Object(n.useEffect)((function(){u("popular"===e?d+c+"&page="+t:"newreleases"===e?b+c+"&sort_by=primary_release_date.desc&primary_release_date.gte=1900-01-01&primary_release_date.lte="+f+"&with_release_type=2%7C3&page="+t:j+c+"&query="+e+"&page="+t)}),[e,t]);var x=A(r),w=x.data,y=x.pending;x.error_movies;if(y)return Object(h.jsx)("div",{children:"LOADING"});console.log(w);return Object(h.jsxs)("div",{className:"r-page",children:[w&&w.results.map((function(e){return Object(h.jsx)("div",{className:"r-movie",children:Object(h.jsx)(i.b,{to:"/moviedetails/".concat(e.id),children:Object(h.jsx)(N,{movie:e})})})})),w&&Object(h.jsx)(S.a,{previousLabel:"Previous",nextLabel:"Next",breakLabel:". . .",breakClassName:"break",pageCount:w.total_pages,marginPagesDisplayed:2,pageRangeDisplayed:4,onPageChange:function(t){var c=t.selected;p.push("/results/".concat(e,"/page").concat(c+1)),window.scrollTo(0,0)},containerClassName:"pagination",activeClassName:"active"})]})});var U=function(){return Object(h.jsx)(i.a,{children:Object(h.jsxs)("div",{className:"App ",children:[Object(h.jsx)(g,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsxs)(o.a,{exact:!0,path:"/",children:[Object(h.jsx)(y,{}),Object(h.jsx)(_,{})]}),Object(h.jsx)(o.a,{path:"/moviedetails/:id",children:Object(h.jsx)(k,{})}),Object(h.jsx)(o.a,{path:"/results/:searchcontent/page:page_number",children:Object(h.jsx)(R,{})})]})]})})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.4e05c3cd.chunk.js.map