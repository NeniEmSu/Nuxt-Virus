(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{817:function(t,e,n){},927:function(t,e,n){"use strict";var r=n(817);n.n(r).a},990:function(t,e,n){"use strict";n.r(e);n(3),n(2),n(41);var r,o=n(15),c={components:{},computed:{comments:function(){return this.post.comments?this.post.comments.filter((function(t){return!t.parent_id})):[]}},asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c,l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.app,r=e.params,o=e.error,!(c=e.payload)){t.next=5;break}return t.abrupt("return",{post:c});case 5:return t.next=7,n.$axios.post("https://admin.virus.te.ua/api/collections/get/posts?token=9fc49d5af4dda3c961d71b489540a4&rspc=1",JSON.stringify({filter:{published:!0,title_slug:r.title_slug},sort:{_created:-1},populate:1}),{headers:{"Content-Type":"application/json"}});case 7:if(l=t.sent,(data=l.data).entries){t.next=11;break}return t.abrupt("return",o({message:"404 Page not found",statusCode:404}));case 11:return t.abrupt("return",{post:data.entries[0]});case 12:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),head:function(){return{title:this.post.title.slice(0,60),meta:[{hid:"description",name:"description",content:"".concat(this.post.title," - ").concat(this.post.excerpt).slice(0,320)}]}}},l=(n(927),n(9)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("nav",{staticClass:"container mb-n4 p-0 desktop-only",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("\n          Головна\n        ")])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:"/blog"}},[t._v("\n          Блог\n        ")])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n        "+t._s(t.post.title)+"\n      ")])])]),t._v(" "),n("article",{staticClass:"py-5"},[n("div",{staticClass:"text-grey-dark font-bold text-sm tracking-wide"},[n("p",{staticClass:"row"},[n("span",{staticClass:"mx-auto  col-md-3"},[t._v("Опубліковано: "+t._s(t._f("toDate")(t.post._created)))]),t._v(" "),n("br"),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.post._modified!==t.post._created,expression:"post._modified !== post._created"}],staticClass:"mx-auto col-md-3"},[t._v("Оновлено: "+t._s(t._f("toDate")(t.post._modified)))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:" mx-auto col-md-3 "},[t._v("Теги:\n          "),t._l(t.post.tags,(function(e){return n("nuxt-link",{key:e,staticClass:"text-capitalize text-link",attrs:{to:"/blog/category/"+e}},[t._v("\n            "+t._s(""+e)+"  \n          ")])}))],2)])]),t._v(" "),n("h1",{staticClass:"mt-2"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),n("div",{},[t._v("\n      "+t._s(t.post.excerpt)+"\n    ")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.post.content)}}),t._v(" "),n("div",{staticClass:"mt-5 text-center"},[n("nuxt-link",{staticClass:"pr-2 text-link",attrs:{to:"/blog"}},[t._v("\n        Знайти більше повідомлень у блогах!\n      ")])],1)])])}),[],!1,null,"21df4067",null);e.default=component.exports}}]);