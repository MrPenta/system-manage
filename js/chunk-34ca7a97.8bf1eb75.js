(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34ca7a97"],{"148f":function(e,t,a){e.exports=a.p+"img/test.f8fc6f64.jpeg"},"7d04":function(e,t,a){},b1b9:function(e,t,a){"use strict";var n=a("7d04"),i=a.n(n);i.a},c80a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-col",{staticClass:"order-container",attrs:{span:21}},[n("div",{staticClass:"form-container"},[n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.addBanner(t)}}},[e._v("新增")])],1)],1),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","max-height":700}},[n("el-table-column",{attrs:{prop:"date",label:"banner名称","header-align":"center",align:"center"}}),n("el-table-column",{attrs:{prop:"name",label:"焦点图","header-align":"center",align:"center"}},[[n("img",{staticClass:"banner-img",attrs:{src:a("148f"),alt:""}})]],2),n("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.deleteBanner(t.$index,e.tableData)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{title:"新增banner",visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("div",{staticClass:"dialog-flex"},[n("el-input",{attrs:{autocomplete:"off",placeholder:"请输入banner名称"},model:{value:e.serviceName,callback:function(t){e.serviceName=t},expression:"serviceName"}}),n("span",{staticClass:"upload-title"},[e._v("上传焦点图：高度xxx * 宽度xxx")]),n("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?n("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("保 存")])],1)])],1)},i=[],s={name:"ActivityManage",data:function(){return{imageUrl:"",dialogFormVisible:!1,serviceName:"",tableData:[{date:"2016-05-03",name:"王小虎"},{date:"2016-05-03",name:"王小虎"},{date:"2016-05-03",name:"王小虎"},{date:"2016-05-03",name:"王小虎"},{date:"2016-05-03",name:"王小虎"}]}},created:function(){},watch:{},methods:{addBanner:function(e,t){console.log("params:",e,t),this.dialogFormVisible=!0},deleteBanner:function(e,t){var a=this;console.log("params:",e,t),this.$confirm("确定删除banner吗?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a}}},r=s,l=(a("d845"),a("b1b9"),a("2877")),o=Object(l["a"])(r,n,i,!1,null,"d9a8e232",null);t["default"]=o.exports},d845:function(e,t,a){"use strict";var n=a("ee69"),i=a.n(n);i.a},ee69:function(e,t,a){}}]);
//# sourceMappingURL=chunk-34ca7a97.8bf1eb75.js.map