(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{326:function(e,t,r){var content=r(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("a534156c",content,!0,{sourceMap:!1})},334:function(e,t,r){"use strict";r(326)},335:function(e,t,r){var o=r(65)(!1);o.push([e.i,".category-transparent{opacity:.5}.category-opaque{opacity:1}",""]),e.exports=o},345:function(e,t,r){"use strict";r.r(t);r(16);var o={props:{categories:{type:Array,required:!0},categoryClasses:{type:Object,required:!0},instructions:{type:String,required:!0},title:{type:String,required:!0}},data:function(){return{selectedCategory:this.categories[0]}},computed:{categoryTable:function(){return this.categories.map((function(e){return{category:e}}))}},methods:{selectCategory:function(e){0!==e.length&&(this.selectedCategory=e[0].category,this.$emit("category-select",{category:this.selectedCategory}))},styleTableRow:function(e,t){return[this.selectedCategory!==e.category?"category-transparent":"category-opaque",this.categoryClasses[e.category]]}}},c=(r(334),r(57)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("h3",[e._v(e._s(e.title))])]),e._v(" "),r("b-row",[r("p",{staticClass:"instructions-text"},[e._v("\n            "+e._s(e.instructions)+"\n        ")])]),e._v(" "),r("b-row",[r("b-table",{attrs:{outlined:"",selectable:"","head-variant":"dark",items:e.categoryTable,"select-mode":"single","selected-variant":"","tbody-tr-class":e.styleTableRow,"thead-class":"hidden"},on:{"row-selected":e.selectCategory}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);