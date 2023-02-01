/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{329:function(e,t,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("6799e812",content,!0,{sourceMap:!1})},338:function(e,t,n){var r,o,h;o=[],r=function s(){"use strict";var e="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{},t=!e.document&&!!e.postMessage,n=t&&/blob:/i.test((e.location||{}).protocol),a={},r=0,b={parse:function(t,n){var i=(n=n||{}).dynamicTyping||!1;if(k(i)&&(n.dynamicTypingFunction=i,i={}),n.dynamicTyping=i,n.transform=!!k(n.transform)&&n.transform,n.worker&&b.WORKERS_SUPPORTED){var o=function(){if(!b.WORKERS_SUPPORTED)return!1;var i,t,n=(i=e.URL||e.webkitURL||null,t=s.toString(),b.BLOB_URL||(b.BLOB_URL=i.createObjectURL(new Blob(["(",t,")();"],{type:"text/javascript"})))),o=new e.Worker(n);return o.onmessage=d,o.id=r++,a[o.id]=o}();return o.userStep=n.step,o.userChunk=n.chunk,o.userComplete=n.complete,o.userError=n.error,n.step=k(n.step),n.chunk=k(n.chunk),n.complete=k(n.complete),n.error=k(n.error),delete n.worker,void o.postMessage({input:t,config:n,workerId:o.id})}var f=null;return b.NODE_STREAM_INPUT,"string"==typeof t?f=n.download?new h(n):new p(n):!0===t.readable&&k(t.read)&&k(t.on)?f=new g(n):(e.File&&t instanceof File||t instanceof Object)&&(f=new l(n)),f.stream(t)},unparse:function(e,t){var n=!1,r=!0,o=",",h="\r\n",s='"',a=s+s,i=!1,l=null,c=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(o=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines),"string"==typeof t.newline&&(h=t.newline),"string"==typeof t.quoteChar&&(s=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");l=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s),"boolean"==typeof t.escapeFormulae&&(c=t.escapeFormulae)}}();var d=new RegExp(f(s),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,i);if("object"==typeof e[0])return u(l||Object.keys(e[0]),e,i)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function u(e,t,i){var n="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var l=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(l&&r){for(var a=0;a<e.length;a++)0<a&&(n+=o),n+=m(e[a],a);0<t.length&&(n+=h)}for(var f=0;f<t.length;f++){var c=l?e.length:t[f].length,u=!1,d=l?0===Object.keys(t[f]).length:0===t[f].length;if(i&&!l&&(u="greedy"===i?""===t[f].join("").trim():1===t[f].length&&0===t[f][0].length),"greedy"===i&&l){for(var _=[],y=0;y<c;y++){var v=s?e[y]:y;_.push(t[f][v])}u=""===_.join("").trim()}if(!u){for(var p=0;p<c;p++){0<p&&!d&&(n+=o);var g=l&&s?e[p]:p;n+=m(t[f][g],p)}f<t.length-1&&(!i||0<c&&!d)&&(n+=h)}}return n}function m(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===c&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var i=e.toString().replace(d,a),r="boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(o)||" "===i.charAt(0)||" "===i.charAt(i.length-1);return r?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!t&&!!e.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=c,b.ParserHandle=i,b.NetworkStreamer=h,b.FileStreamer=l,b.StringStreamer=p,b.ReadableStreamStreamer=g,e.jQuery){var o=e.jQuery;o.fn.parse=function(t){var i=t.config||{},n=[];return this.each((function(t){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!e.FileReader||!this.files||0===this.files.length)return!0;for(var r=0;r<this.files.length;r++)n.push({file:this.files[r],inputElem:this,instanceConfig:o.extend({},i)})})),r(),this;function r(){if(0!==n.length){var e,r,i,h,l=n[0];if(k(t.before)){var s=t.before(l.file,l.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",r=l.file,i=l.inputElem,h=s.reason,void(k(t.error)&&t.error({name:e},r,i,h));if("skip"===s.action)return void u();"object"==typeof s.config&&(l.instanceConfig=o.extend(l.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=l.instanceConfig.complete;l.instanceConfig.complete=function(e){k(a)&&a(e,l.file,l.inputElem),u()},b.parse(l.file,l.instanceConfig)}else k(t.complete)&&t.complete()}function u(){n.splice(0,1),r()}}}function u(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new i(t),(this._handle.streamer=this)._config=t}.call(this,t),this.parseChunk=function(t,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(t);void 0!==i&&(t=i)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+t;this._partialLine="";var h=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=h.meta.cursor;this._finished||(this._partialLine=o.substring(s-this._baseIndex),this._baseIndex=s),h&&h.data&&(this._rowCount+=h.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)e.postMessage({results:h,workerId:b.WORKER_ID,finished:a});else if(k(this._config.chunk)&&!r){if(this._config.chunk(h,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);h=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(h.data),this._completeResults.errors=this._completeResults.errors.concat(h.errors),this._completeResults.meta=h.meta),this._completed||!a||!k(this._config.complete)||h&&h.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||h&&h.meta.paused||this._nextChunk(),h}this._halted=!0},this._sendError=function(t){k(this._config.error)?this._config.error(t):n&&this._config.error&&e.postMessage({workerId:b.WORKER_ID,error:t,finished:!1})}}function h(e){var n;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=t?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(n=new XMLHttpRequest,this._config.withCredentials&&(n.withCredentials=this._config.withCredentials),t||(n.onload=v(this._chunkLoaded,this),n.onerror=v(this._chunkError,this)),n.open(this._config.downloadRequestBody?"POST":"GET",this._input,!t),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)n.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;n.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{n.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}t&&0===n.status&&this._chunkError()}},this._chunkLoaded=function(){4===n.readyState&&(n.status<200||400<=n.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:n.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(n),this.parseChunk(n.responseText)))},this._chunkError=function(e){var t=n.statusText||e;this._sendError(new Error(t))}}function l(e){var t,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((t=new FileReader).onload=v(this._chunkLoaded,this),t.onerror=v(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var r=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,r)}var i=t.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function p(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=i.substring(0,t),i=i.substring(t)):(e=i,i=""),this._finished=!i,this.parseChunk(e)}}}function g(e){u.call(this,e=e||{});var t=[],i=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=v((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=v((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=v((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=v((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function i(e){var a,t,n,r=Math.pow(2,53),o=-r,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,h=this,i=0,l=0,d=!1,m=!1,_=[],v={data:[],errors:[],meta:{}};if(k(e.step)){var p=e.step;e.step=function(n){if(v=n,E())g();else{if(g(),0===v.data.length)return;i+=n.data.length,e.preview&&i>e.preview?t.abort():(v.data=v.data[0],p(v,h))}}}function w(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function g(){if(v&&n&&(R("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines)for(var t=0;t<v.data.length;t++)w(v.data[t])&&v.data.splice(t--,1);return E()&&function(){if(v)if(Array.isArray(v.data[0])){for(var t=0;E()&&t<v.data.length;t++)v.data[t].forEach(n);v.data.splice(0,1)}else v.data.forEach(n);function n(t,n){k(e.transformHeader)&&(t=e.transformHeader(t,n)),_.push(t)}}(),function(){if(!v||!e.header&&!e.dynamicTyping&&!e.transform)return v;function t(t,n){var i,r=e.header?{}:[];for(i=0;i<t.length;i++){var o=i,s=t[i];e.header&&(o=i>=_.length?"__parsed_extra":_[i]),e.transform&&(s=e.transform(s,o)),s=C(o,s),"__parsed_extra"===o?(r[o]=r[o]||[],r[o].push(s)):r[o]=s}return e.header&&(i>_.length?R("FieldMismatch","TooManyFields","Too many fields: expected "+_.length+" fields but parsed "+i,l+n):i<_.length&&R("FieldMismatch","TooFewFields","Too few fields: expected "+_.length+" fields but parsed "+i,l+n)),r}var n=1;return!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(t),n=v.data.length):v.data=t(v.data,0),e.header&&v.meta&&(v.meta.fields=_),l+=n,v}()}function E(){return e.header&&0===_.length}function C(t,n){return i=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[i]&&(e.dynamicTyping[i]=e.dynamicTypingFunction(i)),!0===(e.dynamicTyping[i]||e.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(function(e){if(s.test(e)){var t=parseFloat(e);if(o<t&&t<r)return!0}return!1}(n)?parseFloat(n):u.test(n)?new Date(n):""===n?null:n):n;var i}function R(e,t,i,n){var r={type:e,code:t,message:i};void 0!==n&&(r.row=n),v.errors.push(r)}this.parse=function(r,o,i){var h=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(f(t)+"([^]*?)"+f(t),"gm"),n=(e=e.replace(i,"")).split("\r"),r=e.split("\n"),s=1<r.length&&r[0].length<n[0].length;if(1===n.length||s)return"\n";for(var a=0,o=0;o<n.length;o++)"\n"===n[o][0]&&a++;return a>=n.length/2?"\r\n":"\r"}(r,h)),n=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(r),v.meta.delimiter=e.delimiter);else{var l=function(t,n,i,r,o){var s,a,h,l;o=o||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<o.length;u++){var f=o[u],d=0,m=0,_=0;h=void 0;for(var p=new c({comments:r,delimiter:f,newline:n,preview:10}).parse(t),g=0;g<p.data.length;g++)if(i&&w(p.data[g]))_++;else{var y=p.data[g].length;m+=y,void 0!==h?0<y&&(d+=Math.abs(y-h),h=y):h=y}0<p.data.length&&(m/=p.data.length-_),(void 0===a||d<=a)&&(void 0===l||l<m)&&1.99<m&&(a=d,s=f,l=m)}return{successful:!!(e.delimiter=s),bestDelimiter:s}}(r,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);l.successful?e.delimiter=l.bestDelimiter:(n=!0,e.delimiter=b.DefaultDelimiter),v.meta.delimiter=e.delimiter}var s=y(e);return e.preview&&e.header&&s.preview++,a=r,t=new c(s),v=t.parse(a,o,i),g(),d?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,t.abort(),a=k(e.chunk)?"":a.substring(t.getCharIndex())},this.resume=function(){h.streamer._halted?(d=!1,h.streamer.parseChunk(a,!0)):setTimeout(h.resume,3)},this.aborted=function(){return m},this.abort=function(){m=!0,t.abort(),v.meta.aborted=!0,k(e.complete)&&e.complete(v),a=""}}function f(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function c(e){var t,n=(e=e||{}).delimiter,r=e.newline,o=e.comments,h=e.step,l=e.preview,c=e.fastMode,d=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(d=e.escapeChar),("string"!=typeof n||-1<b.BAD_DELIMITERS.indexOf(n))&&(n=","),o===n)throw new Error("Comment character same as delimiter");!0===o?o="#":("string"!=typeof o||-1<b.BAD_DELIMITERS.indexOf(o))&&(o=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var m=0,_=!1;this.parse=function(e,y,i){if("string"!=typeof e)throw new Error("Input must be a string");var v=e.length,w=n.length,s=r.length,a=o.length,E=k(h),C=[],u=[],R=[],x=m=0;if(!e)return z();if(c||!1!==c&&-1===e.indexOf(t)){for(var S=e.split(r),O=0;O<S.length;O++){if(R=S[O],m+=R.length,O!==S.length-1)m+=r.length;else if(i)return z();if(!o||R.substring(0,a)!==o){if(E){if(C=[],L(R.split(n)),M(),_)return z()}else L(R.split(n));if(l&&l<=O)return C=C.slice(0,l),z(!0)}}return z()}for(var p=e.indexOf(n,m),g=e.indexOf(r,m),T=new RegExp(f(d)+f(t),"g"),I=e.indexOf(t,m);;)if(e[m]!==t)if(o&&0===R.length&&e.substring(m,m+a)===o){if(-1===g)return z();m=g+s,g=e.indexOf(r,m),p=e.indexOf(n,m)}else if(-1!==p&&(p<g||-1===g))R.push(e.substring(m,p)),m=p+w,p=e.indexOf(n,m);else{if(-1===g)break;if(R.push(e.substring(m,g)),j(g+s),E&&(M(),_))return z();if(l&&C.length>=l)return z(!0)}else for(I=m,m++;;){if(-1===(I=e.indexOf(t,I+1)))return i||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:C.length,index:m}),F();if(I===v-1)return F(e.substring(m,I).replace(T,t));if(t!==d||e[I+1]!==d){if(t===d||0===I||e[I-1]!==d){-1!==p&&p<I+1&&(p=e.indexOf(n,I+1)),-1!==g&&g<I+1&&(g=e.indexOf(r,I+1));var A=b(-1===g?p:Math.min(p,g));if(e[I+1+A]===n){R.push(e.substring(m,I).replace(T,t)),e[m=I+1+A+w]!==t&&(I=e.indexOf(t,m)),p=e.indexOf(n,m),g=e.indexOf(r,m);break}var D=b(g);if(e.substring(I+1+D,I+1+D+s)===r){if(R.push(e.substring(m,I).replace(T,t)),j(I+1+D+s),p=e.indexOf(n,m),I=e.indexOf(t,m),E&&(M(),_))return z();if(l&&C.length>=l)return z(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:C.length,index:m}),I++}}else I++}return F();function L(e){C.push(e),x=m}function b(t){var n=0;if(-1!==t){var i=e.substring(I+1,t);i&&""===i.trim()&&(n=i.length)}return n}function F(t){return i||(void 0===t&&(t=e.substring(m)),R.push(t),m=v,L(R),E&&M()),z()}function j(t){m=t,L(R),R=[],g=e.indexOf(r,m)}function z(e){return{data:C,errors:u,meta:{delimiter:n,linebreak:r,aborted:_,truncated:!!e,cursor:x+(y||0)}}}function M(){h(z()),C=[],u=[]}},this.abort=function(){_=!0},this.getCharIndex=function(){return m}}function d(e){var t=e.data,i=a[t.workerId],n=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var r={abort:function(){n=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:_,resume:_};if(k(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},r),!n);s++);delete t.results}else k(i.userChunk)&&(i.userChunk(t.results,r,t.file),delete t.results)}t.finished&&!n&&m(t.workerId,t.results)}function m(e,t){var i=a[e];k(i.userComplete)&&i.userComplete(t),i.terminate(),delete a[e]}function _(){throw new Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=y(e[i]);return t}function v(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return n&&(e.onmessage=function(t){var n=t.data;if(void 0===b.WORKER_ID&&n&&(b.WORKER_ID=n.workerId),"string"==typeof n.input)e.postMessage({workerId:b.WORKER_ID,results:b.parse(n.input,n.config),finished:!0});else if(e.File&&n.input instanceof File||n.input instanceof Object){var i=b.parse(n.input,n.config);i&&e.postMessage({workerId:b.WORKER_ID,results:i,finished:!0})}}),(h.prototype=Object.create(u.prototype)).constructor=h,(l.prototype=Object.create(u.prototype)).constructor=l,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,b},void 0===(h="function"==typeof r?r.apply(t,o):r)||(e.exports=h)},339:function(e,t,n){"use strict";n(329)},340:function(e,t,n){var r=n(65)(!1);r.push([e.i,"input[type=file]{display:none}.custom-file-upload{border:1px solid #ccc;cursor:pointer;display:inline-block;padding:6px 12px}.file-selector-button{background-color:#28a745;border-color:#28a745;border-radius:5px;color:#fff;padding:.5em .75em}.file-selector-button:hover{background-color:green;border-color:green;color:#fff}.file-selector-button:active{background:#e5e5e5;box-shadow:inset 0 0 5px #c1c1c1;-moz-box-shadow:inset 0 0 5px #c1c1c1;-webkit-box-shadow:inset 0 0 5px #c1c1c1;outline:none}.file-selector-row{margin-left:0!important;padding-left:0!important}",""]),e.exports=r},348:function(e,t,n){"use strict";n.r(t);n(22);var r=n(338),o=n.n(r),h={props:{contentType:{type:String,required:!0}},data:function(){return{knownContentTypes:{json:"application/json",tsv:"text/tab-separated-values"},fileInput:null,uiText:{instructions:"Choose file"}}},computed:{fileName:function(){return null===this.fileInput?"":this.fileInput.name}},methods:{onFileSelected:function(e){var t=this;if(0!==e.target.files.length)if(this.fileInput=e.target.files[0],this.knownContentTypes.tsv===this.contentType)o.a.parse(this.fileInput,{complete:function(e){var n={data:e.data,filename:t.fileInput.name};t.$emit("file-selected",n)}});else if(this.knownContentTypes.json===this.contentType){var n={},r=new FileReader;r.onload=function(e){n.data=e.target.result,n.filename=t.fileInput.name,t.$emit("file-selected",n)},r.readAsText(this.fileInput)}}}},l=(n(339),n(57)),component=Object(l.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",{staticClass:"file-selector-row"},[n("b-form",[n("label",{staticClass:"file-selector-button btn"},[e._v("\n                "+e._s(e.uiText.instructions)+"\n                "),n("input",{attrs:{type:"file",accept:e.contentType},on:{change:e.onFileSelected}})]),e._v(" "),n("span",[e._v(e._s(e.fileName))])])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);