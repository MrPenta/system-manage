(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-254776bb"],{"36a5":function(e,t,a){"use strict";var l=a("3d68"),n=a.n(l);n.a},"3d68":function(e,t,a){},fee0:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-col",{staticClass:"order-container",attrs:{span:21}},[a("div",{staticClass:"form-container"},[a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.addService(t)}}},[e._v("新增服务")])],1)],1),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","max-height":700}},[a("el-table-column",{attrs:{prop:"date",label:"服务名称","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"所属宠物","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"所属分类","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"服务价格(元)","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"服务备注","header-align":"center",align:"center"}}),a("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.addService(t.$index,e.tableData)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.deleteService(t.$index,e.tableData)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{title:"新建/编辑服务",visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("div",{staticClass:"dialog-flex"},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入服务名称"},model:{value:e.serviceName,callback:function(t){e.serviceName=t},expression:"serviceName"}}),a("el-select",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"},attrs:{placeholder:"请选择所属宠物"},model:{value:e.pet,callback:function(t){e.pet=t},expression:"pet"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),a("el-select",{attrs:{placeholder:"请选择服务类型"},model:{value:e.serviceType,callback:function(t){e.serviceType=t},expression:"serviceType"}},e._l(e.options2,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("保 存")])],1)])],1)},n=[],i={name:"ServiceManage",data:function(){return{dialogFormVisible:!1,serviceName:"",pet:"",serviceType:"",options:[{value:"0",label:"猫"},{value:"1",label:"狗"}],options2:[{value:"0",label:"全部订单"},{value:"1",label:"已完成订单"},{value:"2",label:"未完成订单"}],tableData:[{date:"2016-05-03",name:"王小虎"},{date:"2016-05-03",name:"王小虎"},{date:"2016-05-03",name:"王小虎"},{date:"2016-05-03",name:"王小虎"},{date:"2016-05-03",name:"王小虎"}]}},created:function(){},watch:{},methods:{addService:function(e,t){console.log("params:",e,t),this.dialogFormVisible=!0},deleteService:function(e,t){var a=this;console.log("params:",e,t),this.$confirm("确定删除服务吗?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})}}},r=i,o=(a("36a5"),a("2877")),c=Object(o["a"])(r,l,n,!1,null,"4c8d999e",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-254776bb.5420fda2.js.map