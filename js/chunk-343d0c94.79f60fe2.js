(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-343d0c94"],{1791:function(e,t,a){"use strict";var n=a("cecd"),l=a.n(n);l.a},b18c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-col",{staticClass:"order-container",attrs:{span:21}},[a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","max-height":700}},[a("el-table-column",{attrs:{prop:"date",label:"铲屎官姓名","header-align":"center"}}),a("el-table-column",{attrs:{prop:"name",label:"申请时间","header-align":"center"}}),a("el-table-column",{attrs:{prop:"address",label:"申请报销金额","header-align":"center"}}),a("el-table-column",{attrs:{prop:"address",label:"发票张数","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.gotoInvoiceDetail(t.$index,e.tableData)}}},[e._v(e._s(e.tableData[t.$index].invoice)+"张")])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"120","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.mark(t.$index,e.tableData)}}},[e._v("标记已报销")]),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.Refuse(t.$index,e.tableData)}}},[e._v("驳回")])]}}])})],1),a("el-dialog",{attrs:{title:"确认驳回？",visible:e.reject,width:"30%"},on:{"update:visible":function(t){e.reject=t}}},[a("el-input",{staticStyle:{"margin-top":"30px"},attrs:{type:"textarea",placeholder:"请输入驳回原因","show-word-limit":""},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.reject=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.reject=!1}}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"确认标记为已报销？",visible:e.withdrawModel,width:"30%"},on:{"update:visible":function(t){e.withdrawModel=t}}},[a("el-form",{attrs:{"label-width":"160px"}},[a("el-form-item",{attrs:{label:"实际报销金额(元)"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入报销金额"},model:{value:e.reimbursement,callback:function(t){e.reimbursement=t},expression:"reimbursement"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.withdrawModel=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.withdrawModel=!1}}},[e._v("确 定")])],1)],1)],1)},l=[],o={name:"Reimbursement",data:function(){return{reject:!1,withdrawModel:!1,group2:"",reason:"",reimbursement:"",options:[{value:"0",label:"全部订单"},{value:"1",label:"已完成订单"},{value:"2",label:"未完成订单"}],tableData:[{date:"2016-05-03",name:"王小虎",invoice:4,address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎",invoice:4,address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",invoice:4,address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",invoice:4,address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-08",name:"王小虎",invoice:4,address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-06",name:"王小虎",invoice:4,address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-07",name:"王小虎",invoice:4,address:"上海市普陀区金沙江路 1518 弄"}]}},created:function(){},watch:{},methods:{mark:function(e,t){this.withdrawModel=!0,console.log("params:",e,t)},Refuse:function(e,t){this.reject=!0,console.log("params:",e,t)},gotoInvoiceDetail:function(e,t){this.$router.push("/invoicedetail"),console.log("params:",e,t)}}},r=o,i=(a("1791"),a("2877")),s=Object(i["a"])(r,n,l,!1,null,"388b702c",null);t["default"]=s.exports},cecd:function(e,t,a){}}]);
//# sourceMappingURL=chunk-343d0c94.79f60fe2.js.map