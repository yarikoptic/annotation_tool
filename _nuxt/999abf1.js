(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{346:function(e,t,r){"use strict";r.r(t);var l={props:{categoryClasses:{type:Object,required:!0},columnToCategoryMap:{type:Object,required:!0},fields:{type:Array,required:!0},selectedCategory:{type:String,required:!0},tableData:{type:Array,required:!0}},methods:{applyCategory:function(e,t,r){this.$emit("column-name-selected",{column:e.column})},styleTableRow:function(e,t){var r=this.columnToCategoryMap[e.column];return null===r?"":this.categoryClasses[r]}}},o=r(57),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-table",{attrs:{bordered:"",outlined:"",fields:e.fields,"head-variant":"dark",items:e.tableData,"tbody-tr-class":e.styleTableRow},on:{"row-clicked":e.applyCategory}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);