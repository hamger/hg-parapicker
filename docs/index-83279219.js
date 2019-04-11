!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,i){!function(e,t){if(!x[e]||!w[e])return;for(var i in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,i)&&(v[i]=t[i]);0==--y&&0===m&&k()}(e,i),t&&t(e,i)};var i,n=!0,r="83279219",s=1e4,o={},c=[],a=[];function l(e){var t=T[e];if(!t)return C;var n=function(n){return t.hot.active?(T[n]?-1===T[n].parents.indexOf(e)&&T[n].parents.push(e):(c=[e],i=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),C(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(t){C[e]=t}}};for(var s in C)Object.prototype.hasOwnProperty.call(C,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(n,s,r(s));return n.e=function(e){return"ready"===u&&p("prepare"),m++,C.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===u&&(b[e]||D(e),0===m&&0===y&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),C.t(e,-2&t)},n}function h(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==e,active:!0,accept:function(e,i){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=i||function(){};else t._acceptedDependencies[e]=i||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var i=0;i<e.length;i++)t._declinedDependencies[e[i]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var i=t._disposeHandlers.indexOf(e);i>=0&&t._disposeHandlers.splice(i,1)},check:H,apply:O,status:function(e){if(!e)return u;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:o[e]};return i=void 0,t}var d=[],u="idle";function p(e){u=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var f,v,g,y=0,m=0,b={},w={},x={};function I(e){return+e+""===e?+e:e}function H(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return n=e,p("check"),(t=s,t=t||1e4,new Promise(function(e,i){if("undefined"==typeof XMLHttpRequest)return i(new Error("No browser support"));try{var n=new XMLHttpRequest,s=C.p+""+r+".hot-update.json";n.open("GET",s,!0),n.timeout=t,n.send(null)}catch(e){return i(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)i(new Error("Manifest request to "+s+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)i(new Error("Manifest request to "+s+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void i(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;w={},b={},x=e.c,g=e.h,p("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});v={};return D(0),"prepare"===u&&0===m&&0===y&&k(),t});var t}function D(e){x[e]?(w[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=C.p+""+e+"."+r+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function k(){p("ready");var e=f;if(f=null,e)if(n)Promise.resolve().then(function(){return O(n)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var i in v)Object.prototype.hasOwnProperty.call(v,i)&&t.push(I(i));e.resolve(t)}}function O(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var i,n,s,a,l;function h(e){for(var t=[e],i={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var r=n.pop(),s=r.id,o=r.chain;if((a=T[s])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:s};if(a.hot._main)return{type:"unaccepted",chain:o,moduleId:s};for(var c=0;c<a.parents.length;c++){var l=a.parents[c],h=T[l];if(h){if(h.hot._declinedDependencies[s])return{type:"declined",chain:o.concat([l]),moduleId:s,parentId:l};-1===t.indexOf(l)&&(h.hot._acceptedDependencies[s]?(i[l]||(i[l]=[]),d(i[l],[s])):(delete i[l],t.push(l),n.push({chain:o.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:i}}function d(e,t){for(var i=0;i<t.length;i++){var n=t[i];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var f={},y=[],m={},b=function(){console.warn("[HMR] unexpected require("+H.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var H;l=I(w);var D=!1,k=!1,O=!1,E="";switch((H=v[w]?h(l):{type:"disposed",moduleId:w}).chain&&(E="\nUpdate propagation: "+H.chain.join(" -> ")),H.type){case"self-declined":t.onDeclined&&t.onDeclined(H),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+H.moduleId+E));break;case"declined":t.onDeclined&&t.onDeclined(H),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+H.moduleId+" in "+H.parentId+E));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(H),t.ignoreUnaccepted||(D=new Error("Aborted because "+l+" is not accepted"+E));break;case"accepted":t.onAccepted&&t.onAccepted(H),k=!0;break;case"disposed":t.onDisposed&&t.onDisposed(H),O=!0;break;default:throw new Error("Unexception type "+H.type)}if(D)return p("abort"),Promise.reject(D);if(k)for(l in m[l]=v[l],d(y,H.outdatedModules),H.outdatedDependencies)Object.prototype.hasOwnProperty.call(H.outdatedDependencies,l)&&(f[l]||(f[l]=[]),d(f[l],H.outdatedDependencies[l]));O&&(d(y,[H.moduleId]),m[l]=b)}var _,j=[];for(n=0;n<y.length;n++)l=y[n],T[l]&&T[l].hot._selfAccepted&&j.push({module:l,errorHandler:T[l].hot._selfAccepted});p("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)});for(var U,P,L=y.slice();L.length>0;)if(l=L.pop(),a=T[l]){var M={},S=a.hot._disposeHandlers;for(s=0;s<S.length;s++)(i=S[s])(M);for(o[l]=M,a.hot.active=!1,delete T[l],delete f[l],s=0;s<a.children.length;s++){var N=T[a.children[s]];N&&((_=N.parents.indexOf(l))>=0&&N.parents.splice(_,1))}}for(l in f)if(Object.prototype.hasOwnProperty.call(f,l)&&(a=T[l]))for(P=f[l],s=0;s<P.length;s++)U=P[s],(_=a.children.indexOf(U))>=0&&a.children.splice(_,1);for(l in p("apply"),r=g,m)Object.prototype.hasOwnProperty.call(m,l)&&(e[l]=m[l]);var A=null;for(l in f)if(Object.prototype.hasOwnProperty.call(f,l)&&(a=T[l])){P=f[l];var Y=[];for(n=0;n<P.length;n++)if(U=P[n],i=a.hot._acceptedDependencies[U]){if(-1!==Y.indexOf(i))continue;Y.push(i)}for(n=0;n<Y.length;n++){i=Y[n];try{i(P)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:P[n],error:e}),t.ignoreErrored||A||(A=e)}}}for(n=0;n<j.length;n++){var R=j[n];l=R.module,c=[l];try{C(l)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(i){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:i,originalError:e}),t.ignoreErrored||A||(A=i),A||(A=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||A||(A=e)}}return A?(p("fail"),Promise.reject(A)):(p("idle"),new Promise(function(e){e(y)}))}var T={};function C(t){if(T[t])return T[t].exports;var i=T[t]={i:t,l:!1,exports:{},hot:h(t),parents:(a=c,c=[],a),children:[]};return e[t].call(i.exports,i,i.exports,l(t)),i.l=!0,i.exports}C.m=e,C.c=T,C.d=function(e,t,i){C.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},C.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.t=function(e,t){if(1&t&&(e=C(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(C.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)C.d(i,n,function(t){return e[t]}.bind(null,n));return i},C.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(t,"a",t),t},C.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C.p="",C.h=function(){return r},l(1)(C.s=1)}([function(e,t,i){},function(e,t,i){"use strict";function n(e){return document.getElementById(e)}function r(e,t,i){for(var n=e.children,r=0;r<n.length;r++)n[r].style[t]=i}i.r(t);i(0);var s=new(function(){function e(e){this.data=e.data,this.valueKey=e.valueKey||"value",this.childKey=e.childKey||"child",this.success=e.success,this.cancel=e.cancel||null,this.title=e.title||"",this.sureText=e.sureText||"确定",this.cancelText=e.cancelText||"取消",this.a=e.a||.001,this.style=e.style,this.initTab(),this.initUI(),this.initEvent()}var t=e.prototype;return t.initTab=function(){var e;this.wrapId=(e=(new Date).getTime(),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var i=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?i:7&i|8).toString(16)})+"-wrap"),this.paraIndex=[],this.ulCount=this.data.length,this.liNum=[];for(var t=0;t<this.ulCount;t++)this.liNum[t]=this.data[t].length;this.liHeight=this.style&&this.style.liHeight?this.style.liHeight:40,this.btnHeight=this.style&&this.style.btnHeight?this.style.btnHeight:44,this.paraUl=[],this.curDis=[],this.curPos=[],this.startY=0,this.startTime=0,this.endTime=0,this.moveY=0,this.moveTime=0,this.moveNumber=1,this.moveSpeed=[],this.abled=!0,this.containerId=this.wrapId+"-container",this.boxId=this.wrapId+"-box",this.contentId=this.wrapId+"-content",this.abolishId=this.wrapId+"-abolish",this.sureId=this.wrapId+"-sure",this.titleId=this.wrapId+"-title"},t.initUI=function(){this.createContainer(),this.renderContent()},t.initEvent=function(){var e=this;this.container=n(this.containerId),n(this.sureId).addEventListener("click",function(){e.success(e.getResult()),e.hide()}),n(this.abolishId).addEventListener("click",function(){e.cancel&&e.cancel(),e.hide()}),this.wrap.addEventListener("click",function(t){t.target.id===e.wrapId&&e.wrap.classList.contains("hg-picker-bg-show")&&(e.cancel&&e.cancel(),e.hide())})},t.createContainer=function(){var e=document.createElement("div");e.id=this.wrapId,document.body.appendChild(e),this.wrap=n(this.wrapId),this.wrap.classList.add("hg-picker-bg")},t.getValue=function(e){for(var t=[],i=0;i<e.length;i++)"object"==typeof e[i]?t.push(e[i][this.valueKey]):t.push(e[i]);return t},t.renderContent=function(){var e='<div class="hg-picker-btn-box" id="'+this.boxId+'"><div class="hg-picker-btn" id="'+this.abolishId+'">'+this.cancelText+'</div><div class="hg-picker-btn" id="'+this.sureId+'">'+this.sureText+'</div><span id="'+this.titleId+'" >'+this.title+"</span> </div>",t='<div class="hg-picker-content" id="'+this.contentId+'"><div class="hg-picker-up-shadow"></div><div class="hg-picker-down-shadow"></div><div class="hg-picker-line"></div></div>',i="";i=this.style&&"bottom"===this.style.btnLocation?'<div  class="hg-picker-container" id="'+this.containerId+'">'+t+e+"</div>":'<div  class="hg-picker-container" id="'+this.containerId+'">'+e+t+"</div>",this.wrap.innerHTML=i;for(var n=0;n<this.ulCount;n++)this.renderUl(n),this.paraIndex[n]=0,this.curDis[n]=0*this.liHeight,this.bindRoll(n);this.setStyle(),this.setUlWidth()},t.setStyle=function(){if(this.style){var e=this.style,t=n(this.containerId),i=n(this.contentId),s=n(this.boxId),o=n(this.sureId),c=n(this.abolishId),a=i.children.length;if(40!==e.liHeight){for(var l=0;l<this.ulCount;l++)r(i.children[l],"height",this.liHeight+"px");i.children[a-3].style.height=2*this.liHeight+"px",i.children[a-2].style.height=2*this.liHeight+"px",i.children[a-1].style.height=this.liHeight+"px",i.children[a-1].style.top=2*this.liHeight+"px",i.style.height=5*this.liHeight+"px",i.style.lineHeight=this.liHeight+"px"}44!==e.btnHeight&&(s.style.height=this.btnHeight+"px",s.style.lineHeight=this.btnHeight+"px"),e.btnOffset&&(o.style.marginRight=e.btnOffset,c.style.marginLeft=e.btnOffset),40===e.liHeight&&44===e.btnHeight||(t.style.height=5*this.liHeight+this.btnHeight+"px"),e.titleColor&&(s.style.color=e.titleColor),e.sureColor&&(o.style.color=e.sureColor),e.cancelColor&&(c.style.color=e.cancelColor),e.btnBgColor&&(s.style.backgroundColor=e.btnBgColor),e.contentColor&&(i.style.color=e.contentColor),e.contentBgColor&&(i.style.backgroundColor=e.contentBgColor),e.upShadowColor&&(i.children[a-3].style.backgroundImage=e.upShadowColor),e.downShadowColor&&(i.children[a-2].style.backgroundImage=e.downShadowColor),e.lineColor&&(i.children[a-1].style.borderColor=e.lineColor)}},t.renderUl=function(e){var t=n(this.contentId),i=document.createElement("ul");i.setAttribute("id",this.wrapId+"-ul-"+e),t.insertBefore(i,t.children[t.children.length-3]),this.paraUl[e]=n(this.wrapId+"-ul-"+e),this.renderLi(e)},t.renderLi=function(e){this.paraUl[e].innerHTML="";var t="<li></li><li></li>";this.getValue(this.data[e]).forEach(function(e){t+="<li>"+e+"</li>"}),t+="<li></li><li></li>",this.paraUl[e].innerHTML=t,40!==this.liHeight&&r(this.paraUl[e],"height",this.liHeight+"px")},t.setUlWidth=function(){for(var e=0;e<this.ulCount;e++)this.paraUl[e].style.width=(100/this.ulCount).toFixed(2)+"%"},t.bindRoll=function(e){var t=this;this.paraUl[e].addEventListener("touchstart",function(){t.touch(e)},!1),this.paraUl[e].addEventListener("touchmove",function(){t.touch(e)},!1),this.paraUl[e].addEventListener("touchend",function(){t.touch(e)},!0)},t.roll=function(e,t){(this.curDis[e]||0===this.curDis[e])&&(this.paraUl[e].style.transform="translate3d(0, "+this.curDis[e]+"px, 0)",this.paraUl[e].style.webkitTransform="translate3d(0, "+this.curDis[e]+"px, 0)",t&&(this.paraUl[e].style.transition="transform "+t+"s ease-out",this.paraUl[e].style.webkitTransition="-webkit-transform "+t+"s ease-out"))},t.touch=function(e){var t,i,n=window.event;switch(n.preventDefault(),n.type){case"touchstart":if(this.startTime=new Date,this.startTime-this.endTime<200)return void(this.abled=!1);this.abled=!0,this.startY=n.touches[0].clientY,this.curPos[e]=this.curDis[e],this.moveNumber=1,this.moveSpeed=[];break;case"touchmove":if(!this.abled)return;n.preventDefault(),this.moveY=n.touches[0].clientY;var r=this.startY-this.moveY;this.curDis[e]=this.curPos[e]-r,this.curDis[e]>=1.5*this.liHeight&&(this.curDis[e]=1.5*this.liHeight),this.curDis[e]<=-1*(this.liNum[e]-1+1.5)*this.liHeight&&(this.curDis[e]=-1*(this.liNum[e]-1+1.5)*this.liHeight),this.roll(e),this.moveTime-this.startTime>=130*this.moveNumber&&(this.moveNumber++,this.moveSpeed.push(r/(this.moveTime-this.startTime)));break;case"touchend":if(!this.abled)return;this.endTime=Date.now();var s=0;s=1===this.moveNumber?(this.startY-n.changedTouches[0].clientY)/(this.endTime-this.startTime):this.moveSpeed[this.moveSpeed.length-1],this.curDis[e]=this.curDis[e]-(t=s,i=this.a,Math.abs(t)<.25?0:t/Math.abs(t)*(.5*t*t/i)),this.fixate(e)}},t.fixate=function(e){this.getPosition(e),this.roll(e,.2)},t.getPosition=function(e){this.curDis[e]<=-1*(this.liNum[e]-1)*this.liHeight?this.paraIndex[e]=this.liNum[e]-1:this.curDis[e]>=0?this.paraIndex[e]=0:this.paraIndex[e]=-1*Math.round(this.curDis[e]/this.liHeight),this.curDis[e]=-1*this.liHeight*this.paraIndex[e]},t.getResult=function(){var e=this;return new Array(this.ulCount).fill(1).reduce(function(t,i,n){return t.push(e.data[n][e.paraIndex[n]]),t},[])},t.show=function(){this.wrap.classList.add("hg-picker-bg-show"),this.container.classList.add("hg-picker-container-up")},t.hide=function(){this.wrap.classList.remove("hg-picker-bg-show"),this.container.classList.remove("hg-picker-container-up")},t.setTitle=function(e){n(this.titleId).innerHTML=e},e}())({data:[["平民","狼人","预言家","女巫","猎人","白痴"],["存活","死亡","吃刀","票出","吃毒","中枪"]],title:"玩家属性",cancel:function(){console.log("取消选择")},success:function(e){console.log(e),document.getElementById("para-input"+this.playerNumber).innerHTML=e}});window.select=function(e){s.playerNumber=e,s.setTitle(e+"号玩家"),s.show()}}]);