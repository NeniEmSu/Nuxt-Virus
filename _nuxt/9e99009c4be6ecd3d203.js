(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{818:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMSSURBVHgB7ZnZq05RGMYfDjkyHg4OGT5jJCIUpVBSLgwXKDdu/D/+B7lxoxS5MJTEhSRTZIovs8zzfI7n6f1Ojr3XVmdNX2r/6rnZ69Q+z17rfd611gfU1NT8iyFoHyMHvL+X+ooA2mFkMrWXagx41kfdpfbBTA2aochLN7UDf5sQ+qDzqAnwJKeR4dRGaknF+FPqHTzJZUTv2UCthvudMnCQ+gFPchlZTG2GFXgRFfkR6hYCGIb09MCK22XiJ8zEWQSSekYmUXvgNiHOUOdhqRVEyhkZRW2l5laMX6OOUp8QgVQzooRaR62oGH8LK+4oJkQqIyupTVSHY+wLzMRLRCSFEfWJnahOqEPUJUQmtpGJ1G5YfRTR1uMUrLijE9OIZmAXzIyLy9Rp6jsSECu1NANqeMsqxpvUYeo9EhFrRlZR6yvGvlEHqOdISIwZWUNth0VuESXUfuoREhM6I2p221CdUMepK8hAiJExsITqcoxpy3GBOgnPg9Jg8TWiJbmFmlExfoM6gUQJ5cLXiE5yayvGVBdKqKTFXaQD/iyEe1mp6JVUOoP/QiZ8jegk9wC2p3Kl1TTqQ+tvshAyIzqeqgZmUSMKYzKn+tEu9wkyEGJEPKTGUbNRvlpSJE+h7lAfkZhQI4rZ+7DjbI9jfCw1E7ZRTBrDoUaE6kVfXUup2zHe1dJNJCz+GEaEUkqFvYga7Rif2vqbJiKcz13EMiI+U8+o5Sjv4dSvZOYN7CIuOjGN6Eu/gCXYHJSbbSfsqlQz9wqRiWmkHzVCpZV6iSvJ9PwqbKlFI4URpZMKuyrJxsMurKMmWQojQknWpObD+kwRmdHSU3RHSbJURoQ2j6oZ7ck6C2NacuovKn51/uAkS2lE6B/VNmUpysWvZNP2pkm9RiCpjehLP4Y1yukoF79mSo1UN/FBt46pjfRzHdVJphpqIDDJchlROukCogH3GUbPdHN/EZ7kMiK0dNT5VeSuJNOMnYPnr7u5fwy9Rx2DXdRplvpa6m09815a7fh5Wu9UWi3An/erl9xGxhNlTU3Nf8pvFUuN4hOB7mQAAAAASUVORK5CYII="},819:function(t,e,n){},928:function(t,e,n){"use strict";var o=n(819);n.n(o).a},991:function(t,e,n){"use strict";n.r(e);n(6),n(4),n(5),n(19),n(3),n(2),n(41);var o=n(15),r=n(0),l=n(49),c=n.n(l),m=n(18);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h,v={data:function(){return{mobileModalShow:!1,imageApiUrl:"https://admin.virus.te.ua/api/cockpit/image?token=9fc49d5af4dda3c961d71b489540a4"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.c)(["cart"]),{},Object(m.b)(["cartSize","cartTotalAmount"])),asyncData:(h=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,o,r,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.app,n=e.params,o=e.error,!(r=e.payload)){t.next=3;break}return t.abrupt("return",{product:r});case 3:return t.next=5,c.a.post("https://admin.virus.te.ua/api/collections/get/Product?token=9fc49d5af4dda3c961d71b489540a4&rspc=1",JSON.stringify({filter:{Published:!0,name_slug:n.name_slug},sort:{_created:-1},populate:1}),{headers:{"Content-Type":"application/json"}});case 5:return l=t.sent,t.next=8,c.a.get("https://admin.virus.te.ua/api/collections/get/Product?token=9fc49d5af4dda3c961d71b489540a4&rspc=1",JSON.stringify({filter:{Published:!0},limit:4,sort:{_created:-1},populate:1}),{headers:{"Content-Type":"application/json"}});case 8:if(m=t.sent,l.data.entries&&m.data.entries){t.next=11;break}return t.abrupt("return",o({message:"404 Page not found",statusCode:404}));case 11:return t.abrupt("return",{product:l.data.entries[0],products:m.data.entries.filter((function(t){return t.category===l.data.entries[0].category}))});case 12:case"end":return t.stop()}}),t)}))),function(t){return h.apply(this,arguments)}),methods:{addToCart:function(t){this.$store.dispatch("addToCart",t)}},head:function(){return{title:this.product.name,titleTemplate:"%s! - Virus",meta:[{hid:"description",name:"description",content:this.product.Description}]}}},w=(n(928),n(9)),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container"},[o("nav",{staticClass:"container mb-n4 p-0 desktop-only",attrs:{"aria-label":"breadcrumb"}},[o("ol",{staticClass:"breadcrumb"},[o("li",{staticClass:"breadcrumb-item"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("\n          Головна\n        ")])],1),t._v(" "),o("li",{staticClass:"breadcrumb-item"},[o("nuxt-link",{attrs:{to:"/mahazyn"}},[t._v("\n          магазин\n        ")])],1),t._v(" "),o("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n        "+t._s(t.product.name)+"\n      ")])])]),t._v(" "),o("div",{staticClass:"container pt-5"},[o("div",{staticClass:"row mx-auto"},[o("div",{staticClass:"col-lg-1 mb-3 desktop-only"},[o("nuxt-link",{attrs:{to:"/mahazyn"}},[o("img",{attrs:{src:n(818),alt:"chevron-right"}})])],1),t._v(" "),o("div",{staticClass:"col-12 col-xl-10"},[o("div",{staticClass:"row"},[o("div",{staticClass:"main-image col-4 p-0"},[o("div",{staticClass:"image-showcase col-12 text-center p-0"},[o("client-only",[o("carousel",{attrs:{autoplay:!1,nav:!1,items:1,"lazy-load":!0,"v-lazy":!0,loop:!0,"mouse-drag":!0,"touch-drag":!0}},[o("img",{staticClass:"mx-auto img-fluid",attrs:{src:t.imageApiUrl+"&src="+t.product.Gallery[0].path+"&w=200&h=200&f[brighten]=0&o=true",alt:t.product.Gallery[0].meta.title}}),t._v(" "),o("img",{staticClass:"mx-auto img-fluid",attrs:{src:t.imageApiUrl+"&src="+t.product.Gallery[1].path+"&w=200&h=200&f[brighten]=0&o=true",alt:t.product.Gallery[1].meta.title}}),t._v(" "),o("img",{staticClass:"mx-auto img-fluid",attrs:{src:t.imageApiUrl+"&src="+t.product.Gallery[2].path+"&w=200&h=200&f[brighten]=0&o=true",alt:t.product.Gallery[2].meta.title}})])],1)],1),t._v(" "),o("style",[t._v("\n            .small-more-images {\n              margin-top: -20px;\n            }\n\n            .main-image .owl-theme .owl-dots .owl-dot span {\n              width: 73px !important;\n              height: 73px !important;\n              margin-bottom: -60px;\n              background-color: transparent;\n\n              margin-right: 12.5px;\n              margin-left: 12.5px;\n              display: abslolute;\n            }\n\n            .main-image .owl-theme .owl-dots .owl-dot:hover span {\n              background-color: transparent;\n            }\n\n            .main-image .owl-theme .owl-dots .owl-dot.active span {\n              background-color: transparent;\n            }\n\n            .main-image .owl-theme .owl-dots .owl-dot.active:hover span {\n              background-color: transparent;\n            }\n\n            @media only screen and (min-width: 992px) and (max-width: 1199px) {\n              .main-image .owl-theme .owl-dots .owl-dot span {\n                width: 73px !important;\n                height: 73px !important;\n                margin-bottom: -55px;\n                background-color: transparent;\n\n                margin-right: 12px;\n                margin-left: 12px;\n                display: abslolute;\n              }\n            }\n\n            @media only screen and (min-width: 768px) and (max-width: 992px) {\n              .main-image .owl-theme .owl-dots .owl-dot span {\n                width: 60px !important;\n                height: 60px !important;\n                margin-bottom: -48px;\n                background-color: transparent;\n\n                margin-right: 5.5px;\n                margin-left: 5.6px;\n                display: abslolute;\n              }\n            }\n\n            @media only screen and (min-width: 500px) and (max-width: 767.9px) {\n              .main-image .owl-theme .owl-dots .owl-dot span {\n                width: 10px !important;\n                height: 10px !important;\n                margin-top: -25px;\n                background-color: grey;\n\n                margin-right: 5px;\n                margin-left: 5px;\n              }\n\n              .main-image .owl-theme .owl-dots .owl-dot:hover span {\n                background-color: #d41f26;\n              }\n\n              .main-image .owl-theme .owl-dots {\n                margin-bottom: -30px;\n              }\n\n              .main-image .owl-theme .owl-dots .owl-dot.active span {\n                background-color: #d41f26;\n              }\n\n              .main-image .owl-theme .owl-dots .owl-dot.active:hover span {\n                background-color: red;\n              }\n\n              .small-more-images {\n                margin-top: 0px;\n                display: none;\n              }\n            }\n\n            @media only screen and (max-width: 499.9px) {\n              .main-image .owl-theme .owl-dots .owl-dot span {\n                width: 5px !important;\n                height: 5px !important;\n                margin-top: -29px;\n                background-color: grey;\n\n                margin-right: 5px;\n                margin-left: 5px;\n              }\n\n              .main-image .owl-theme .owl-dots .owl-dot:hover span {\n                background-color: #d41f26;\n              }\n\n              .main-image .owl-theme .owl-dots {\n                margin-bottom: -30px;\n              }\n\n              .main-image .owl-theme .owl-dots .owl-dot.active span {\n                background-color: #d41f26;\n              }\n\n              .main-image .owl-theme .owl-dots .owl-dot.active:hover span {\n                background-color: red;\n              }\n\n              .small-more-images {\n                margin-top: 0px;\n                display: none;\n              }\n            }\n            ")]),t._v(" "),o("div",{staticClass:"small-more-images"},[o("div",{staticClass:"row mx-auto"},[o("img",{staticClass:"col-4 mx-auto mt-n4 more-images",attrs:{src:t.imageApiUrl+"&src="+t.product.Gallery[0].path+"&w=200&h=200&f[brighten]=0&o=true",alt:t.product.Gallery[0].meta.title,title:t.product.Gallery[0].meta.title}}),t._v(" "),o("img",{staticClass:"col-4 mx-auto mt-n4 more-images",attrs:{src:t.imageApiUrl+"&src="+t.product.Gallery[1].path+"&w=200&h=200&f[brighten]=0&o=true",alt:t.product.Gallery[1].meta.title,title:t.product.Gallery[1].meta.title}}),t._v(" "),o("img",{staticClass:"col-4 mx-auto mt-n4 more-images",attrs:{src:t.imageApiUrl+"&src="+t.product.Gallery[2].path+"&w=200&h=200&f[brighten]=0&o=true",alt:t.product.Gallery[2].meta.title,title:t.product.Gallery[2].meta.title}})])])]),t._v(" "),o("div",{staticClass:"main-text col-8 text-center text-md-left"},[o("h1",{staticClass:"details-page-header"},[t._v("\n              "+t._s(t.product.name)+"\n            ")]),t._v(" "),o("style",[t._v("\n            li {\n              margin-left: 20px;\n            }\n            ")]),t._v(" "),o("section",{staticClass:"my-lg-5 desktop-tablet-only markdown"},[o("strong",[t._v(t._s("Бренд: "+t.product.brand))]),t._v(" "),o("div",{domProps:{innerHTML:t._s(t.product.Description+"\nОб'єм:&nbsp;"+t.product.volume)}})]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-6 text-center text-md-left my-auto pr-0"},[o("small",{staticClass:"mb-2 detail-discount-cost"},[o("s",[t._v(t._s(t._f("currency")(t.product.discountPrice,{symbol:"грн",thousandsSeparator:",",fractionCount:"0",fractionSeparator:".",symbolPosition:"back",symbolSpacing:!0})))])]),t._v(" "),o("p",{staticClass:"detail-cost",attrs:{id:"store-item-price"}},[t._v("\n                  "+t._s(t._f("currency")(t.product.Price,{symbol:"",thousandsSeparator:",",fractionCount:"0",fractionSeparator:".",symbolPosition:"back",symbolSpacing:!0}))+"\n\n                  "),o("span",[t._v("ГРН")])])]),t._v(" "),o("div",{staticClass:"col-6 text-center mt-lg-n3 p-0"},[o("small",{directives:[{name:"show",rawName:"v-show",value:!0===t.product.Stock,expression:"product.Stock === true"}],staticClass:"inStock"},[t._v("В наявності")]),t._v(" "),o("small",{directives:[{name:"show",rawName:"v-show",value:!1===t.product.Stock,expression:"product.Stock === false"}],staticClass:"notInStock"},[t._v("Не в наявності")]),t._v(" "),o("br"),t._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:!0===t.product.Stock,expression:"product.Stock === true"}],staticClass:"btn add-to-cart snipcart-add-item card-footer-item",attrs:{disableda:!1===t.product.Stock},on:{click:function(e){return e.preventDefault(),t.addToCart(t.product._id)}}},[t._v("\n                  Додати до корзини +\n                ")]),t._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:!1===t.product.Stock,expression:"product.Stock === false"}],staticClass:"btn add-to-cart card-footer-item",staticStyle:{cursor:"not-allowed"}},[t._v("\n                  Додати до корзини +\n                ")])])])])])]),t._v(" "),o("div",{staticClass:"col-lg-1 mt-2 desktop-only"},[o("div",{staticClass:"cart-icon text-center mx-auto"},[o("div",{staticClass:"cart-icon"},[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-xl-mobile",modifiers:{"modal-xl-mobile":!0}}],attrs:{variant:"link"},on:{click:function(e){t.mobileModalShow=!t.mobileModalShow}}},[o("img",{attrs:{id:"cart",src:n(237),alt:"Cart icon"}})]),t._v(" "),o("div",{staticClass:"text-center justify-center",attrs:{id:"show-total"}},[o("span",{staticClass:"text-center m-auto p-0 snipcart-total-items",attrs:{id:"item-count"}},[t._v(t._s(t.cartSize))])])],1)])])]),t._v(" "),o("div",{staticClass:"mt-3 sm-xsm-xxsm-only",domProps:{innerHTML:t._s(t.product.Description+"\nОб'єм:&nbsp;"+t.product.volume)}}),t._v(" "),o("hr",{staticStyle:{border:"1px solid #C4C4C4",margin:"40px 0",width:"100%"}}),t._v(" "),o("h2",{staticClass:"text-center my-2 relatedProducts"},[t._v("\n      Схожі товари та пропозиції\n    ")]),t._v(" "),o("client-only",[o("carousel",{attrs:{autoplay:!0,nav:!1,items:4,"lazy-load":!0,"v-lazy":!0,loop:!0,"mouse-drag":!0,"touch-drag":!0,"autoplay-hover-pause":!0,responsive:{0:{items:1,nav:!1},350:{items:2,nav:!1},767:{items:2,nav:!1},992:{items:3,nav:!1},1200:{items:4,nav:!1}}}},t._l(t.products,(function(e){return o("card",{key:e._id,staticClass:"mb-5 mx-auto",attrs:{name:e.name,summary:e.Overview,price:e.Price,image:t.imageApiUrl+"&src="+e.Image.path+"&w=200&h=200&f[brighten]=0&o=true",link:"/mahazyn/"+e.name_slug,stock:e.Stock}})})),1)],1)],1)])}),[],!1,null,"751dc4dc",null);e.default=component.exports}}]);