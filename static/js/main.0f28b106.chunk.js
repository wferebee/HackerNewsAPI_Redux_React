(this.webpackJsonprts=this.webpackJsonprts||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),l=a.n(s),c=a(12),u=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("h1",{className:"HeaderText"}," Hacker News API Search "))},o=function(e){return r.a.createElement("div",{className:"AllResults"},r.a.createElement("dt",{className:"ResultsTable",key:e.id},e.id+1,".",r.a.createElement("a",{href:"".concat(e.URL),target:"_blank"}," ",r.a.createElement("span",{className:"ResultInfo TitleInfo"},e.Title)," ")," ",r.a.createElement("br",null),"  ",r.a.createElement("div",{className:" ExtraInfo"},r.a.createElement("span",{className:"ResultDescriptor Author"},"Author"),r.a.createElement("span",{className:"ResultInfo AuthorInfo"},e.Author),"\xa0 ",r.a.createElement("span",{className:"ResultDescriptor Comments"},"Comments"),r.a.createElement("span",{className:"ResultInfo CommentsInfo"},"(",e.Comments,")"),"\xa0 ",r.a.createElement("span",{className:"ResultDescriptor Points"},"Points"),r.a.createElement("span",{className:"ResultInfo PointsInfo"},"(",e.Points,")"))),r.a.createElement("br",null)," ")};var i=function(e,t){return{type:"GET_QUERY",payload:{Query:e,QueryId:t}}},m=a(5),E=a(1),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_DATA":return n;default:return e}},f=a(13),p=0,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_QUERY":return[].concat(Object(f.a)(e),[{id:p++,text:t.payload.Query}]);default:return e}},y=[a(11).a],v=Object(E.c)({results:h,queries:d}),g=Object(E.d)(v,{results:[],queries:[]},E.a.apply(void 0,y));var N=Object(m.b)((function(e){return{results:e.results}}),(function(e){return{getQuery:function(t){return e(i(t))},fetchData:function(t){return e(function(e){return function(t){fetch("https://hn.algolia.com/api/v1/search?query=".concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_DATA",payload:e})}))}}(t))}}}))((function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),s=a[0],l=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("div",{className:"head"},r.a.createElement("input",{className:"SearchBox",onChange:function(e){return l(s=e.target.value)},onKeyUp:function(t){"Enter"===t.key&&(e.getQuery(s),e.fetchData(s),console.log(g.getState().queries))},value:s,placeholder:"search",type:"text"}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),e.getQuery(s),e.fetchData(s),console.log(g.getState().queries)}},"Go!"),"            "),e.results&&0!==e.results.length?r.a.createElement("div",{className:"SearchResultsBox"},"                           ",e.results.hits.map((function(e,t){return r.a.createElement(o,{key:t,id:t,URL:e.url,Title:e.title,Author:e.author,Comments:e.num_comments,Points:e.points})}))):r.a.createElement("div",{className:" NoResultsHeaders"},r.a.createElement("h1",null,"WELCOME TO THE HACKER NEWS API"),r.a.createElement("h3",null,"Try Searching Something Interesting")),"         ")}));a(25);l.a.render(r.a.createElement(m.a,{store:g},r.a.createElement(N,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0f28b106.chunk.js.map