(this.webpackJsonpchuck=this.webpackJsonpchuck||[]).push([[0],{27:function(e,t,a){e.exports={burgerMenu:"style_burgerMenu__MOg3i"}},28:function(e,t,a){e.exports={title:"style_title__3GLSw"}},33:function(e,t,a){},4:function(e,t,a){e.exports={itemBlock:"style_itemBlock__1TDTa",itemContainer:"style_itemContainer__18TCv",itemLike:"style_itemLike__14_5y",itemMessage:"style_itemMessage__3nEKE",itemId:"style_itemId__xK9u1",itemLink:"style_itemLink__3Sfn_",itemText:"style_itemText__27q6c",itemInfo:"style_itemInfo__iv-po",itemData:"style_itemData__G6EMG",itemCategories:"style_itemCategories__3gZBp",itemContent:"style_itemContent__BBDii"}},6:function(e,t,a){e.exports={button:"style_button__1z6WP",searchForm:"style_searchForm__2lJJo",categories:"style_categories__1Kafa",active:"style_active__10avD",h2:"style_h2__2cLXA",h3:"style_h3__3cmsW"}},60:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(10),r=a.n(c),i=(a(33),a(5)),s=a.n(i),o=a(14),l=a(13),u=a(15),j=a(7),h=a.n(j),d=a(3),m="ADD_ITEM",b="GET_CATEGORIES",f=a(6),O=a.n(f),p=a(0);var g=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.categories})),a=Object(n.useState)(""),c=Object(u.a)(a,2),r=c[0],i=c[1],j=Object(n.useState)(null),b=Object(u.a)(j,2),f=b[0],g=b[1],x=Object(n.useState)(""),v=Object(u.a)(x,2),_=v[0],y=v[1],k=Object(l.a)({},{RandomName:"Random",categoriesName:"From categories",SearchName:"Search"}),w=k.RandomName,N=k.categoriesName,S=k.SearchName,E=function(){var t=Object(o.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("https://api.chucknorris.io/jokes/random");case 3:a=t.sent,e({type:m,payload:a.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("https://api.chucknorris.io/jokes/random?category=".concat(a));case 3:n=t.sent,e({type:m,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(o.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("https://api.chucknorris.io/jokes/search?query=".concat(a));case 3:n=t.sent,e({type:m,payload:n.data.result[Math.floor(Math.random()*n.data.result.length-1)]}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:O.a.h2,children:"Hey!"}),Object(p.jsx)("h3",{className:O.a.h3,children:"Let\u2019s try to find a joke for you:"}),Object(p.jsxs)("form",{className:O.a.searchForm,onSubmit:function(e){if(e.preventDefault(),r===w)E();else if(r===N)C(f);else{if(r!==S)return alert("\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e");D(_)}},children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"chuck",value:w,onChange:function(e){return i(e.target.value)}}),w]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"chuck",value:N,onChange:function(e){return i(e.target.value)}}),N,r===N?Object(p.jsx)("div",{className:"categoriesList",children:t.map((function(e,t){return Object(p.jsxs)("label",{className:f===e?"".concat(O.a.categories," active"):O.a.categories,children:[Object(p.jsx)("input",{type:"radio",name:"categories",value:e,onChange:function(e){return g(e.target.value)}}),e]},t)}))}):null]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"chuck",value:S,id:S,onChange:function(e){return i(e.target.value)}}),S]}),r===S?Object(p.jsx)("input",{type:"text",name:"Search",onChange:function(e){return y(e.target.value)},style:{maxWidth:"250px"}}):null,Object(p.jsx)("button",{className:O.a.button,children:"Get a joke"})]})]})},x=a(27),v=a.n(x),_=function(){return Object(p.jsxs)("header",{style:{textAlign:"left"},children:["MSI 2020",Object(p.jsxs)("div",{className:v.a.burgerMenu,onClick:I,children:[Object(p.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(p.jsx)("circle",{cx:"14",cy:"14",r:"14",fill:"#333333"}),Object(p.jsx)("rect",{x:"7",y:"16",width:"14",height:"2",rx:"1",fill:"white"}),Object(p.jsx)("rect",{x:"7",y:"10",width:"14",height:"2",rx:"1",fill:"white"})]}),Object(p.jsx)("span",{children:"Favourite"})]})]})},y="ADD_FAVOURITE",k="DELETE_FAVOURITE",w=a(4),N=a.n(w);var S=function(e){var t=e.joke,a=Object(d.b)(),n=Object(d.c)((function(e){return e.favourite})),c=Boolean(n.find((function(e){return e.id===t.id})));return!!t&&Object(p.jsxs)("div",{className:N.a.itemBlock,children:[c?Object(p.jsx)("div",{className:N.a.itemLike,children:Object(p.jsx)("img",{src:"/img/like.svg",alt:"like",onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));a({type:k,payload:t})}(t.id)}})}):Object(p.jsx)("div",{className:N.a.itemLike,children:Object(p.jsx)("img",{src:"/img/unlike.svg",alt:"like",onClick:function(){return a({type:y,payload:t})}})}),Object(p.jsxs)("div",{className:N.a.itemContainer,children:[Object(p.jsx)("div",{className:N.a.itemMessage,children:Object(p.jsx)("img",{src:"/img/message.jpg",alt:""})}),Object(p.jsxs)("div",{className:N.a.itemContent,children:[Object(p.jsxs)("p",{className:N.a.itemId,children:["ID:",Object(p.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:[t.id,Object(p.jsx)("img",{className:N.a.itemLink,src:"/img/link.svg",alt:""})," "]})]}),Object(p.jsx)("p",{className:N.a.itemText,children:t.value}),Object(p.jsxs)("div",{className:N.a.itemInfo,children:[Object(p.jsxs)("span",{className:N.a.itemData,children:["Last update: ",t.updated_at.substring(0,10)]}),t.categories.length>0?Object(p.jsx)("span",{className:N.a.itemCategories,children:t.categories}):null]})]})]})]})},E=a(28),C=a.n(E),D=function(){var e=Object(d.c)((function(e){return e.favourite}));return Object(p.jsxs)("div",{id:"burger",className:"favourite",children:[Object(p.jsxs)("p",{className:C.a.title,children:[Object(p.jsx)("span",{onClick:function(){return I()},children:Object(p.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(p.jsx)("circle",{cx:"14",cy:"14",r:"14",fill:"#333333"}),Object(p.jsx)("rect",{width:"14.8492",height:"2.12131",rx:"1.06065",transform:"matrix(0.707103 -0.707111 0.707103 0.707111 8 18.5)",fill:"white"}),Object(p.jsx)("rect",{width:"14.8492",height:"2.12131",rx:"1.06065",transform:"matrix(0.707103 0.707111 -0.707103 0.707111 9.5 8)",fill:"white"})]})}),"Favourite"]}),e.length>0?e.map((function(e,t){return Object(p.jsx)(S,{joke:e},t)})):Object(p.jsx)("div",{children:"\u041d\u0435\u0442 \u0437\u0430\u043a\u043b\u0430\u0434\u043e\u043a"})]})};var I=function(){document.body.classList.toggle("overflow"),document.querySelector("#burger").classList.toggle("active")},L=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.item}));return Object(n.useEffect)((function(){h.a.get("https://api.chucknorris.io/jokes/categories").then((function(t){e({type:b,payload:t.data})}))}),[e]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(_,{}),Object(p.jsx)(g,{}),!!t&&Object(p.jsx)(S,{joke:t}),Object(p.jsx)(D,{})]})},T=a(12),M=a(8);var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return[].concat(Object(M.a)(e),[t.payload]);case k:return Object(M.a)(t.payload);default:return e}},A=Object(T.a)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(l.a)({},t.payload);default:return e}},favourite:B,categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return[].concat(Object(M.a)(e),Object(M.a)(t.payload));default:return e}}}),F=Object(T.b)(A,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return{favourite:JSON.parse(e)}}catch(t){return void console.warn(t)}}(),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());F.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(a){console.warn(a)}}(F.getState().favourite)}));var R=F;r.a.render(Object(p.jsx)(d.a,{store:R,children:Object(p.jsx)(L,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.3177180c.chunk.js.map