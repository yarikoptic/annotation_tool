(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5],{328:function(t,e,n){var r=n(12),o=n(243).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},341:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("128062c9",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n.r(e);var r={props:{items:{type:Array,default:function(){return[]}}},name:"ContinuousTable",data:function(){return{column:"cell(raw)"}}},o=n(57),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-table",{attrs:{hover:"",striped:"",id:"annotation-table",items:t.items}})}),[],!1,null,null,null);e.default=component.exports},369:function(t,e,n){"use strict";n(341)},370:function(t,e,n){var r=n(65)(!1);r.push([t.i,".age-values-card-body[data-v-2f2ad966]{height:300px;overflow-y:scroll;position:relative}",""]),t.exports=r},376:function(t,e,n){"use strict";n.r(e);var r=n(25),o=n(34);n(76),n(11),n(38),n(17),n(241),n(5),n(1),n(240),n(73),n(75),n(19),n(16),n(28),n(36),n(2),n(244),n(242),n(328),n(18),n(22),n(63),n(50),n(4),n(64),n(74),n(51);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f={props:{relevantColumns:{type:Array,required:!0},title:{type:String,required:!0},uniqueValues:{type:Object,required:!0}},inject:["dataTable","missingValueLabel"],name:"SubNumericValidation",data:function(){return{saveButtonDisabled:!1,regularExpressions:["(?<float>\\d+\\.\\d+)","(?<bounded>\\d+\\+)","(?<euro>\\d+,\\d+)","(?<range>\\d+-\\d+)","(?<int>^\\d+$)","(?<string>^\\D+$)","(?<isoyear>\\d+Y)?(?<isomonth>\\d+M)?"],uiText:{instructions:"Review the age harmonization",saveButton:"Save Annotation"},unique_range:{start:0,end:3}}},computed:{ageRegex:function(){return new RegExp(this.regularExpressions.join("|"))},columnTransformHeuristics:function(){var t,e={},n=l(this.relevantColumns);try{for(n.s();!(t=n.n()).done;){var r=t.value;e[r]=this.detectColumnAgeFormat(r)}}catch(t){n.e(t)}finally{n.f()}return e},saveButtonColor:function(){return this.saveButtonDisabled?"secondary":"success"},uniqueTableData:function(){var t,e=[],n=l(this.relevantColumns);try{for(n.s();!(t=n.n()).done;)for(var r=t.value,o=this.unique_range.start;o<this.unique_range.end;o++){var c=this.columnTransformHeuristics[r],f=this.uniqueValues[r][o];e.push({column_name:r,heuristic:c,raw_value:f,transformed_value:this.convertAge(f,c)})}}catch(t){n.e(t)}finally{n.f()}return e}},methods:{applyAnnotation:function(){for(var t=structuredClone(this.dataTable.annotated),e=0;e<t.length;e++)for(var n in t[e])this.relevantColumns.includes(n)&&(t[e][n]=this.transformedValue(n,t[e][n]));this.$emit("update:dataTable",{transformedTable:t})},convertAge:function(t,e){var n="";switch(e){case"float":n=parseFloat(t);break;case"bounded":n=parseInt(t.replace("+",""));break;case"euro":n=parseFloat(t.replace(",","."));break;case"range":var r=t.split("-").map((function(t){return parseFloat(t.trim())})),l=Object(o.a)(r,2);n=(l[0]+l[1])/2;break;case"int":n=parseInt(t);break;case"string":n=this.missingValueLabel;break;case"isoyear":var c=this.detectAgeFormat(t),f=parseInt(c.isoyear.replace("Y","")),d=Object.keys(c).includes("isomonth")?parseInt(c.isomonth.replace("M",""))/12:0;n="".concat(f+d)}return n},detectAgeFormat:function(t){var e=this.ageRegex.exec(t);if(null!==e){var n=Object.keys(e.groups).filter((function(t){return void 0!==e.groups[t]}));return Object.fromEntries(n.map((function(t){return[t,e.groups[t]]})))}},detectColumnAgeFormat:function(t){var e,n={},r=l(this.uniqueValues[t]);try{for(r.s();!(e=r.n()).done;){var o=e.value,c=Object.keys(this.detectAgeFormat(o))[0];c in n?n[c]+=1:n[c]=1}}catch(t){r.e(t)}finally{r.f()}return this.getMostCommonFormat(n)},getMostCommonFormat:function(t){if(Object.keys(t).includes("string")&&1===Object.keys(t).length)return"string";var e=Object.fromEntries(Object.entries(t).filter((function(t){var e=Object(o.a)(t,2),n=e[0];e[1];return"string"!==n}))),n=Object.values(e),l=n.indexOf(Math.max.apply(Math,Object(r.a)(n)));return Object.keys(e)[l]},transformedValue:function(t,e){return this.convertAge(e,this.columnTransformHeuristics[t])}}},d=(n(369),n(57)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"annotation-card",attrs:{"no-body":""}},[n("b-card-header",[t._v(t._s(t.uiText.instructions))]),t._v(" "),n("b-card-body",{staticClass:"age-values-card-body"},[n("annot-continuous-values",{attrs:{items:t.uniqueTableData}})],1)],1),t._v(" "),n("b-row",[n("b-button",{attrs:{"data-cy":"save-button-"+t.title,disabled:t.saveButtonDisabled,variant:t.saveButtonColor},on:{click:t.applyAnnotation}},[t._v("\n            "+t._s(t.uiText.saveButton)+"\n        ")])],1)],1)}),[],!1,null,"2f2ad966",null);e.default=component.exports;installComponents(component,{AnnotContinuousValues:n(349).default})}}]);