(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{710:function(e,a,n){"use strict";n.r(a);var t={data:function(){return{selected:[],users:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}]}},methods:{handleSearch:function(e){var a="The user searched for: ".concat(e,"\n");this.$refs.pre.appendChild(document.createTextNode(a))},handleChangePage:function(e){var a="The user changed the page to: ".concat(e,"\n");this.$refs.pre.appendChild(document.createTextNode(a))},handleSort:function(e,a){var n="the user ordered: ".concat(e," ").concat(a,"\n");this.$refs.pre.appendChild(document.createTextNode(n))}}},s=n(1),r=Object(s.a)(t,function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("vs-table",{attrs:{sst:!0,pagination:"","max-items":"3",search:"",data:e.users},on:{search:e.handleSearch,"change-page":e.handleChangePage,sort:e.handleSort},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.data;return e._l(t,function(a,s){return n("vs-tr",{key:s,attrs:{data:a}},[n("vs-td",{attrs:{data:t[s].email}},[e._v("\n          "+e._s(t[s].email)+"\n        ")]),e._v(" "),n("vs-td",{attrs:{data:t[s].username}},[e._v("\n          "+e._s(t[s].username)+"\n        ")]),e._v(" "),n("vs-td",{attrs:{data:t[s].id}},[e._v("\n          "+e._s(t[s].website)+"\n        ")]),e._v(" "),n("vs-td",{attrs:{data:t[s].id}},[e._v("\n          "+e._s(t[s].id)+"\n        ")])],1)})}}]),model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}},[n("template",{slot:"header"},[n("h3",[e._v("\n        Users\n      ")])]),e._v(" "),n("template",{slot:"thead"},[n("vs-th",{attrs:{"sort-key":"email"}},[e._v("\n        Email\n      ")]),e._v(" "),n("vs-th",{attrs:{"sort-key":"username"}},[e._v("\n        Name\n      ")]),e._v(" "),n("vs-th",{attrs:{"sort-key":"website"}},[e._v("\n        Website\n      ")]),e._v(" "),n("vs-th",{attrs:{"sort-key":"id"}},[e._v("\n        Nro\n      ")])],1)],2),e._v(" "),n("pre",{ref:"pre"})],1)},[],!1,null,null,null);r.options.__file="sst.vue";a.default=r.exports}}]);