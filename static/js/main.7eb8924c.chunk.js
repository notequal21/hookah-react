(this["webpackJsonphookah-react"]=this["webpackJsonphookah-react"]||[]).push([[0],{10:function(t,a,e){t.exports={main:"Login_main__2B0Ip",main__bg:"Login_main__bg__3-Wwt",login:"Login_login__3n-K2",login__title:"Login_login__title__vqXvV",loginBody:"Login_loginBody__2faWC",loginBody__input:"Login_loginBody__input__59Ork",loginBody__btn:"Login_loginBody__btn__3CK_a"}},28:function(t,a,e){},29:function(t,a,e){},36:function(t,a,e){"use strict";e.r(a);var c=e(1),o=e.n(c),n=e(17),r=e.n(n),i=(e(28),e(29),e(18)),l=e(19),s=e(23),m=e(22),_=e(10),g=e.n(_),u=e.p+"static/media/login-bg.40f3806c.jpg",d=e(2),j=e.p+"static/media/01.1994b392.png",h=e(4),b=e.n(h),C=e(9),O=e(0),f=function(t){var a=p.catalog.getCatalog(),e=function(t){return a[t.currentTarget.value-1].inCart?p.removeFromCart(t.currentTarget.value-1):p.addToCart(t.currentTarget.value-1)};return Object(O.jsxs)("div",{className:"".concat(b.a.catalogBody__item),children:[Object(O.jsx)("div",{className:"".concat(b.a.catalogBody__itemImg),children:Object(O.jsx)("img",{src:t.img,alt:""})}),Object(O.jsx)("div",{className:"".concat(b.a.catalogBody__itemName),children:t.name}),Object(O.jsxs)("div",{className:"".concat(b.a.catalogBody__itemPrice),children:[t.price," \u20bd"]}),t.inCart?Object(O.jsx)("button",{value:t.id,onClick:e,className:"".concat(b.a.catalogBody__itemBtn),children:"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"}):Object(O.jsx)("button",{value:t.id,onClick:e,className:"".concat(b.a.catalogBody__itemBtn),children:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})},x=function(){if("null"===p.isAuth)return Object(O.jsx)(d.a,{to:"/login"});var t=p.catalog.getCatalog(),a=t.map((function(t){return Object(O.jsx)(f,{id:t.id,img:t.img,name:t.name,price:t.price,inCart:t.inCart},t.id)})),e=0,c=(t.forEach((function(t){return t.inCart&&(e+=Number(t.price)*Number(t.count)),localStorage.setItem("summary",e)})),0);t.forEach((function(t){return t.inCart&&(c+=t.count),localStorage.setItem("count",c)}));return Object(O.jsx)("div",{className:"".concat(b.a.catalog),children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"".concat(b.a.header),children:[Object(O.jsx)(C.b,{to:"/login",onClick:function(){localStorage.setItem("isAuth","null"),p.updateAuthStatus()},className:"".concat(b.a.logout__btn),children:"\u0412\u044b\u0439\u0442\u0438"}),Object(O.jsx)("div",{className:"".concat(b.a.header__title),children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),Object(O.jsxs)("div",{className:"".concat(b.a.header__info),children:[Object(O.jsxs)("div",{className:"".concat(b.a.header__infoBody),children:[Object(O.jsxs)("div",{className:"".concat(b.a.header__infoGoods),children:[localStorage.getItem("count")," \u0442\u043e\u0432\u0430\u0440\u0430"]}),Object(O.jsxs)("div",{className:"".concat(b.a.header__infoSum),children:["\u043d\u0430 \u0441\u0443\u043c\u043c\u0443 ",localStorage.getItem("summary")," \u20bd"]})]}),Object(O.jsx)(C.b,{to:"/cart",className:"".concat(b.a.header__infoBtn),children:Object(O.jsxs)("svg",{width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("circle",{cx:"25",cy:"25",r:"25",fill:"currentColor"}),Object(O.jsx)("path",{d:"M34.0746 23.2042H30.1774L27.379 15.239C27.2096 14.7569 26.6815 14.5033 26.1992 14.6727C25.717 14.8421 25.4635 15.3703 25.6329 15.8525L28.2157 23.2042H20.7843L23.3671 15.8525C23.5365 15.3703 23.283 14.8421 22.8008 14.6727C22.3187 14.5033 21.7904 14.7569 21.621 15.239L18.8226 23.2042H14.9254C14.4143 23.2042 14 23.6185 14 24.1296C14 24.6407 14.4143 25.055 14.9254 25.055H15.1789L17.4465 33.331C17.6163 33.9505 18.1793 34.3801 18.8217 34.3801H30.2413C30.8871 34.3801 31.4522 33.9461 31.6189 33.3222L33.8274 25.0549H34.0746C34.5857 25.055 35 24.6407 35 24.1296C35 23.6185 34.5857 23.2042 34.0746 23.2042ZM21.4678 31.355C21.4678 31.8661 21.0535 32.2804 20.5425 32.2804C20.0314 32.2804 19.6171 31.8661 19.6171 31.355V26.6562C19.6171 26.1452 20.0314 25.7309 20.5425 25.7309C21.0535 25.7309 21.4678 26.1452 21.4678 26.6562V31.355ZM25.4254 31.355C25.4254 31.8661 25.011 32.2804 24.5 32.2804C23.9889 32.2804 23.5746 31.8661 23.5746 31.355V26.6562C23.5746 26.1452 23.9889 25.7309 24.5 25.7309C25.011 25.7309 25.4254 26.1452 25.4254 26.6562V31.355ZM29.3829 31.355C29.3829 31.8661 28.9686 32.2804 28.4575 32.2804C27.9464 32.2804 27.5321 31.8661 27.5321 31.355V26.6562C27.5321 26.1452 27.9464 25.7309 28.4575 25.7309C28.9686 25.7309 29.3829 26.1452 29.3829 26.6562V31.355Z",fill:"white"})]})})]})]}),Object(O.jsx)("div",{className:"".concat(b.a.catalogBody),children:a})]})})},p={isAuth:localStorage.getItem("isAuth"),updateAuthStatus:function(){this.isAuth=localStorage.getItem("isAuth"),"null"===localStorage.getItem("isAuth")&&(p.catalog.setCatalog(),localStorage.setItem("isAuth","null"),localStorage.setItem("count",0),localStorage.setItem("summary",0))},auth:{login:"root",password:"root"},cart:{count:localStorage.getItem("count"),summary:localStorage.getItem("summary"),getCartSum:function(){return this.summary}},catalog:{_catalog:[{id:1,img:j,name:"Don Smart",price:1e4,inCart:!1,count:0},{id:2,img:j,name:"Don Smart 2",price:5e3,inCart:!1,count:0},{id:3,img:j,name:"Don Smart 3",price:7e3,inCart:!1,count:0},{id:4,img:j,name:"Don Smart 4",price:14e3,inCart:!1,count:0},{id:5,img:j,name:"Don Smart 5",price:17e3,inCart:!1,count:0},{id:6,img:j,name:"Don Smart 6",price:22e3,inCart:!1,count:0}],setCatalog:function(){return localStorage.setItem("catalog",JSON.stringify(this._catalog))},getCatalog:function(){return JSON.parse(localStorage.getItem("catalog"))}},updateCount:function(){var t=0;return JSON.parse(localStorage.getItem("catalog")).forEach((function(a){a.inCart&&(t+=1)})),localStorage.setItem("count",t)},updateCost:function(){var t=0;return JSON.parse(localStorage.getItem("catalog")).forEach((function(a){a.inCart&&(t+=a.price)})),localStorage.setItem("summary",t)},getItemCount:function(t){return JSON.parse(localStorage.getItem("catalog"))[t].count},decrementItem:function(t){var a=JSON.parse(localStorage.getItem("catalog"));if(1!=a[t].count)return a[t].count-=1,localStorage.setItem("catalog",JSON.stringify(a))},incrementItem:function(t){var a=JSON.parse(localStorage.getItem("catalog"));return a[t].count+=1,localStorage.setItem("catalog",JSON.stringify(a))},updateItemCount:function(t,a){var e=JSON.parse(localStorage.getItem("catalog"));return e[t].count<=0?e[t].inCart=!1:e[t].count=a,localStorage.setItem("catalog",JSON.stringify(e))},addToCart:function(t){var a=JSON.parse(localStorage.getItem("catalog"));return a[t].inCart=!0,a[t].count=1,localStorage.setItem("catalog",JSON.stringify(a))},removeFromCart:function(t){var a=JSON.parse(localStorage.getItem("catalog"));return a[t].inCart=!1,a[t].count=0,localStorage.setItem("catalog",JSON.stringify(a))},getCartCount:function(){var t=0;JSON.parse(localStorage.getItem("catalog")).forEach((function(a){return a.inCart&&(t+=1),localStorage.setItem("count",t)}))}},v=function(t){Object(s.a)(e,t);var a=Object(m.a)(e);function e(){return Object(i.a)(this,e),a.apply(this,arguments)}return Object(l.a)(e,[{key:"componentDidUpdate",value:function(t,a,e){if(console.log(p.isAuth),"auth"===p.isAuth)return Object(O.jsx)(d.a,{to:"/catalog"})}},{key:"render",value:function(){if("auth"===p.isAuth)return Object(O.jsx)(d.a,{to:"/catalog"});var t=o.a.createRef(),a=o.a.createRef();return Object(O.jsxs)("div",{className:"".concat(g.a.main),children:[Object(O.jsx)("div",{className:"".concat(g.a.main__bg),children:Object(O.jsx)("img",{src:u,alt:""})}),Object(O.jsxs)("div",{className:"".concat(g.a.login),children:[Object(O.jsx)("div",{className:"".concat(g.a.login__title),children:"\u0432\u0445\u043e\u0434"}),Object(O.jsxs)("form",{onSubmit:function(e){"root"===t.current.value&&"root1"===a.current.value&&(localStorage.setItem("isAuth","auth"),p.updateAuthStatus())},className:"".concat(g.a.loginBody),children:[Object(O.jsx)("div",{className:"".concat(g.a.loginBody__input),children:Object(O.jsx)("input",{ref:t,placeholder:"Login",type:"text"})}),Object(O.jsx)("div",{className:"".concat(g.a.loginBody__input),children:Object(O.jsx)("input",{ref:a,placeholder:"Password",type:"password"})}),Object(O.jsx)("button",{className:"".concat(g.a.loginBody__btn),children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})}}]),e}(o.a.Component),S=e(5),I=e.n(S),N=function(t){p.catalog.getCatalog();return Object(O.jsxs)("div",{className:"".concat(I.a.cartItem),children:[Object(O.jsx)("div",{className:"".concat(I.a.cartItem__img),children:Object(O.jsx)("img",{src:t.img,alt:""})}),Object(O.jsxs)("div",{className:"".concat(I.a.cartItem__name),children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(O.jsx)("span",{children:t.name})]}),Object(O.jsxs)("div",{className:"".concat(I.a.cartItem__price),children:["\u0426\u0435\u043d\u0430: ",Object(O.jsxs)("span",{children:[t.price," \u20bd"]})]}),Object(O.jsxs)("div",{className:"".concat(I.a.cartItem__count),children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e:",Object(O.jsx)("button",{value:t.id,onClick:function(t){var a=t.currentTarget.value-1;p.decrementItem(a)},children:"-"}),Object(O.jsx)("span",{children:Object(O.jsx)("input",{id:t.id,type:"text",value:t.count})}),Object(O.jsx)("button",{value:t.id,onClick:function(t){var a=t.currentTarget.value-1;p.incrementItem(a)},children:"+"})]}),Object(O.jsx)("button",{value:t.id,onClick:function(t){var a=t.currentTarget.value-1;p.removeFromCart(a)},className:"".concat(I.a.cartItem__btn),children:Object(O.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("g",{"clip-path":"url(#clip0_11_153)",children:Object(O.jsx)("path",{d:"M15.7043 15.0789L21.1221 20.4967C21.2726 20.6472 21.2726 20.891 21.1221 21.0415C21.0469 21.1169 20.9482 21.1544 20.8497 21.1544C20.751 21.1544 20.6525 21.1169 20.5774 21.0415L15.1189 15.5831L9.66045 21.0415C9.58509 21.1169 9.4866 21.1544 9.38811 21.1544C9.28961 21.1544 9.19093 21.1169 9.11577 21.0415C8.96525 20.891 8.96525 20.6472 9.11577 20.4967L14.5333 15.0789L9.11213 9.65737C8.96162 9.50686 8.96162 9.26301 9.11213 9.1125C9.26265 8.96218 9.50649 8.96218 9.65681 9.1125L15.1187 14.5748L20.5812 9.11269C20.7317 8.96237 20.9754 8.96237 21.1259 9.11269C21.2764 9.2632 21.2764 9.50705 21.1259 9.65756L15.7043 15.0789Z",fill:"#D58C51"})}),Object(O.jsx)("circle",{cx:"15",cy:"15",r:"14.5",stroke:"#D58C51"}),Object(O.jsx)("defs",{children:Object(O.jsx)("clipPath",{id:"clip0_11_153",children:Object(O.jsx)("rect",{width:"12.24",height:"12.24",fill:"white",transform:"matrix(-1 0 0 1 21.2402 9)"})})})]})})]})},y=function(){if("null"===p.isAuth)return Object(O.jsx)(d.a,{to:"/login"});var t=p.catalog.getCatalog(),a=t.map((function(t){if(t.inCart)return Object(O.jsx)(N,{count:t.count,id:t.id,img:t.img,name:t.name,price:t.price},t.id)})),e=0;t.forEach((function(t){return t.inCart&&(e+=Number(t.price)*Number(t.count)),localStorage.setItem("summary",e)}));return Object(O.jsx)("div",{className:"".concat(I.a.cartCon),children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"".concat(I.a.wrap),children:[Object(O.jsxs)("div",{className:"".concat(I.a.title),children:[Object(O.jsx)(C.b,{to:"/catalog",className:"".concat(I.a.bottom__btn),children:"\u041d\u0430\u0437\u0430\u0434 \u043a \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443"})," \u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u0441 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c\u0438 \u0442\u043e\u0432\u0430\u0440\u0430\u043c\u0438"]}),Object(O.jsx)("div",{className:"".concat(I.a.cart),children:a}),Object(O.jsxs)("div",{className:"".concat(I.a.bottom),children:[Object(O.jsxs)("div",{className:"".concat(I.a.bottom__sum),children:["\u0417\u0430\u043a\u0430\u0437 \u043d\u0430 \u0441\u0443\u043c\u043c\u0443: ",Object(O.jsxs)("span",{children:[localStorage.getItem("summary")," \u20bd"]})]}),Object(O.jsx)("div",{className:"".concat(I.a.bottom__btn),children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})})})};var B=Object(d.f)((function(){return p.updateCost(),p.updateCount(),Object(O.jsxs)("div",{children:[Object(O.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(d.a,{to:"/login"})}}),Object(O.jsx)(d.b,{path:"/login",render:function(){return Object(O.jsx)(v,{})}}),Object(O.jsx)(d.b,{path:"/catalog",render:function(){return Object(O.jsx)(x,{})}}),Object(O.jsx)(d.b,{path:"/cart",render:function(){return Object(O.jsx)(y,{})}})]})})),w=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,37)).then((function(a){var e=a.getCLS,c=a.getFID,o=a.getFCP,n=a.getLCP,r=a.getTTFB;e(t),c(t),o(t),n(t),r(t)}))};localStorage.getItem("catalog")||p.catalog.setCatalog(),localStorage.getItem("isAuth")||localStorage.setItem("isAuth","null"),localStorage.getItem("count")||localStorage.setItem("count",0),localStorage.getItem("summary")||localStorage.setItem("summary",0),setInterval((function(){r.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(C.a,{basename:"/hookah-react",children:Object(O.jsx)(B,{})})}),document.getElementById("root"))}),100),w()},4:function(t,a,e){t.exports={header:"Catalog_header__tXVTf",header__title:"Catalog_header__title__yOoYT",header__info:"Catalog_header__info__3fDJa",header__infoSum:"Catalog_header__infoSum__9QADE",header__infoBtn:"Catalog_header__infoBtn__361zW",catalogBody:"Catalog_catalogBody__2pD2s",catalogBody__item:"Catalog_catalogBody__item__3FKdv",catalogBody__itemImg:"Catalog_catalogBody__itemImg__1gVVa",catalogBody__itemName:"Catalog_catalogBody__itemName__2_Y0d",catalogBody__itemPrice:"Catalog_catalogBody__itemPrice__21reg",catalogBody__itemBtn:"Catalog_catalogBody__itemBtn__ajr5z",logout__btn:"Catalog_logout__btn__6nswo"}},5:function(t,a,e){t.exports={title:"Cart_title__13L31",bottom__btn:"Cart_bottom__btn__3Wnal",cart:"Cart_cart__1L0Je",cartCon:"Cart_cartCon__y53y1",wrap:"Cart_wrap__19-FZ",cartItem:"Cart_cartItem__2ZsqO",cartItem__img:"Cart_cartItem__img__k5q4Z",cartItem__name:"Cart_cartItem__name__3BZWY",cartItem__price:"Cart_cartItem__price__1wS0Y",cartItem__count:"Cart_cartItem__count__BMnIS",cartItem__btn:"Cart_cartItem__btn__r7MbA",bottom:"Cart_bottom__3jKCZ",bottom__sum:"Cart_bottom__sum__1N6Ta"}}},[[36,1,2]]]);
//# sourceMappingURL=main.7eb8924c.chunk.js.map