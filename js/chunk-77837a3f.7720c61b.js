(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77837a3f"],{"0a04":function(t,e,n){"use strict";var a=n("0c71"),o=n.n(a);o.a},"0c71":function(t,e,n){},"2f24":function(t,e,n){"use strict";var a=n("31f6"),o=n.n(a);o.a},"31f6":function(t,e,n){},"9b34":function(t,e,n){"use strict";var a=n("a99a"),o=n.n(a);o.a},a99a:function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"out-container"},[n("LeftNav"),n("TopHeader"),n("el-col",{staticClass:"breadcrumb",attrs:{span:21}},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",[t._v("首页")])],1)],1),n("router-view")],1)},o=[],r=[{title:"首页",path:"/homeindex"},{title:"订单管理",path:"/order"},{title:"训练师管理",children:[{title:"训练师列表",path:"/trainerlist"},{title:"训练师分组",path:"/trainergroup"}]},{title:"客户管理",path:"/clientmanage"},{title:"服务管理",path:"/servicemanage"},{title:"活动管理",children:[{title:"首页banner",path:"/activitymanage"}]},{title:"财务管理",children:[{title:"提现",path:"/withdraw"},{title:"报销",path:"/reimbursement"}]}],l=r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-col",{staticClass:"nav-container",attrs:{span:3}},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"system-title"},[t._v("摩法猫管理后台")]),n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":this.$route.path,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen,close:t.handleClose}},[t._l(t.routerConfig,function(e,a){return[e.children&&e.children.length?n("el-submenu",{key:a,attrs:{index:e.path||e.title}},[n("template",{slot:"title"},[n("span",[t._v(t._s(e.title))])]),t._l(e.children,function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.path||e.title,route:e}},[t._v(t._s(e.title))])})],2):n("el-menu-item",{key:a,attrs:{index:e.path||e.title,route:e}},[n("template",{slot:"title"},[n("span",[t._v(t._s(e.title))])])],2)]})],2)],1)],1)},c=[],s={name:"LeftNav",components:{},computed:{routerConfig:function(){return l}},data:function(){return{}},created:function(){},watch:{},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},u=s,d=(n("9b34"),n("2877")),p=Object(d["a"])(u,i,c,!1,null,"158072ca",null),f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-col",{staticClass:"top-header",attrs:{span:21}},[n("el-dropdown",{on:{command:t.linkTo}},[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"el-icon-s-custom"}),n("span",[t._v("管理员")]),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"/password"}},[t._v("修改密码")]),n("el-dropdown-item",{attrs:{command:"/login"}},[t._v("退出登录")])],1)],1)],1)},m=[],v={name:"TopHeader",data:function(){return{}},created:function(){},watch:{},methods:{linkTo:function(t){this.$router.push(t)}}},w=v,b=(n("0a04"),Object(d["a"])(w,h,m,!1,null,"4147155c",null)),_=b.exports,g={name:"Home",components:{LeftNav:f,TopHeader:_},computed:{routerConfig:function(){return l}},data:function(){return{}},created:function(){},watch:{},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},linkTo:function(t){t.path&&this.router.push(t.path)}}},C=g,k=(n("2f24"),Object(d["a"])(C,a,o,!1,null,"1c3d4f49",null));e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-77837a3f.7720c61b.js.map