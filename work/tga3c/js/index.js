(function(){var k=this;function aa(){}
function l(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function m(a){return"string"==typeof a}function p(a){return"function"==l(a)}var q="closure_uid_"+(1E9*Math.random()>>>0),r=0;function ba(a,b,c){return a.call.apply(a.bind,arguments)}
function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function s(a,b,c){s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return s.apply(null,arguments)}var da=Date.now||function(){return+new Date};
function t(a,b){function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.aa=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function u(a,b){return a<b?-1:a>b?1:0};var v=Array.prototype,w=v.indexOf?function(a,b,c){return v.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ea=v.forEach?function(a,b,c){v.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fa=v.filter?function(a,b,c){return v.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=m(a)?
a.split(""):a,h=0;h<d;h++)if(h in g){var n=g[h];b.call(c,n,h,a)&&(e[f++]=n)}return e};function ga(a){var b=x,c;for(c in b)a.call(void 0,b[c],c,b)}function ha(){var a=x,b;for(b in a)return!1;return!0}var ia="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ja(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ia.length;f++)c=ia[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var y;a:{var ka=k.navigator;if(ka){var la=ka.userAgent;if(la){y=la;break a}}y=""};var ma=-1!=y.indexOf("Opera")||-1!=y.indexOf("OPR"),z=-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"),A=-1!=y.indexOf("Gecko")&&-1==y.toLowerCase().indexOf("webkit")&&!(-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE")),B=-1!=y.toLowerCase().indexOf("webkit");function na(){var a=k.document;return a?a.documentMode:void 0}
var oa=function(){var a="",b;if(ma&&k.opera)return a=k.opera.version,p(a)?a():a;A?b=/rv\:([^\);]+)(\)|;)/:z?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:B&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(y))?a[1]:"");return z&&(b=na(),b>parseFloat(a))?String(b):a}(),pa={};
function C(a){var b;if(!(b=pa[a])){b=0;for(var c=String(oa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",n=RegExp("(\\d*)(\\D*)","g"),Oa=RegExp("(\\d*)(\\D*)","g");do{var J=n.exec(g)||["","",""],K=Oa.exec(h)||["","",""];if(0==J[0].length&&0==K[0].length)break;b=u(0==J[1].length?0:parseInt(J[1],10),0==K[1].length?0:parseInt(K[1],10))||u(0==J[2].length,0==K[2].length)||
u(J[2],K[2])}while(0==b)}b=pa[a]=0<=b}return b}var qa=k.document,ra=qa&&z?na()||("CSS1Compat"==qa.compatMode?parseInt(oa,10):5):void 0;!A&&!z||z&&z&&9<=ra||A&&C("1.9.1");z&&C("9");function sa(a){var b=ta,c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):ua(a,b)}
function ua(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var g=c.getElementsByClassName(a);return g}g=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=g[d];d++){var h=c.className,n;if(n="function"==typeof h.split)n=0<=w(h.split(/\s+/),a);n&&(f[e++]=c)}f.length=e;return f}return g};var D="closure_listenable_"+(1E6*Math.random()|0),va=0;function wa(a,b,c,d,e){this.e=a;this.v=null;this.src=b;this.type=c;this.q=!!d;this.t=e;this.key=++va;this.l=this.p=!1}function E(a){a.l=!0;a.e=null;a.v=null;a.src=null;a.t=null};function F(a){this.src=a;this.b={};this.w=0}F.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.b[f];a||(a=this.b[f]=[],this.w++);var g=G(a,b,d,e);-1<g?(b=a[g],c||(b.p=!1)):(b=new wa(b,this.src,f,!!d,e),b.p=c,a.push(b));return b};F.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=G(e,b,c,d);return-1<b?(E(e[b]),v.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.w--),!0):!1};
function H(a,b){var c=b.type;if(c in a.b){var d=a.b[c],e=w(d,b),f;(f=0<=e)&&v.splice.call(d,e,1);f&&(E(b),0==a.b[c].length&&(delete a.b[c],a.w--))}}F.prototype.B=function(a,b,c,d){a=this.b[a.toString()];var e=-1;a&&(e=G(a,b,c,d));return-1<e?a[e]:null};function G(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.l&&f.e==b&&f.q==!!c&&f.t==d)return e}return-1};var xa=!z||z&&9<=ra,ya=z&&!C("9");!B||C("528");A&&C("1.9b")||z&&C("8")||ma&&C("9.5")||B&&C("528");A&&!C("8")||z&&C("9");function I(){0!=za&&(this[q]||(this[q]=++r));this.L=this.L;this.Z=this.Z}var za=0;I.prototype.L=!1;function L(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.g=!1;this.Q=!0}L.prototype.stopPropagation=function(){this.g=!0};L.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Q=!1};function M(a){M[" "](a);return a}M[" "]=aa;function N(a,b){L.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.m=this.state=null;if(a){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(A){var e;a:{try{M(d.nodeName);e=!0;break a}catch(f){}e=!1}e||(d=null)}}else"mouseover"==c?d=
a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=B||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=B||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.state=a.state;this.m=a;a.defaultPrevented&&this.preventDefault()}}t(N,L);N.prototype.stopPropagation=function(){N.o.stopPropagation.call(this);this.m.stopPropagation?this.m.stopPropagation():this.m.cancelBubble=!0};N.prototype.preventDefault=function(){N.o.preventDefault.call(this);var a=this.m;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ya)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var O="closure_lm_"+(1E6*Math.random()|0),Aa={},Ba=0;function Ca(a,b,c,d,e){if("array"==l(b))for(var f=0;f<b.length;f++)Ca(a,b[f],c,d,e);else if(c=Da(c),a&&a[D])a.i.add(String(b),c,!1,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=P(a);g||(a[O]=g=new F(a));c=g.add(b,c,!1,d,e);c.v||(d=Ea(),c.v=d,d.src=a,d.e=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(Fa(b.toString()),d),Ba++)}}
function Ea(){var a=Ga,b=xa?function(c){return a.call(b.src,b.e,c)}:function(c){c=a.call(b.src,b.e,c);if(!c)return c};return b}function Ha(a,b,c,d,e){if("array"==l(b))for(var f=0;f<b.length;f++)Ha(a,b[f],c,d,e);else c=Da(c),a&&a[D]?a.i.remove(String(b),c,d,e):a&&(a=P(a))&&(b=a.B(b,c,!!d,e))&&Ia(b)}
function Ia(a){if("number"!=typeof a&&a&&!a.l){var b=a.src;if(b&&b[D])H(b.i,a);else{var c=a.type,d=a.v;b.removeEventListener?b.removeEventListener(c,d,a.q):b.detachEvent&&b.detachEvent(Fa(c),d);Ba--;(c=P(b))?(H(c,a),0==c.w&&(c.src=null,b[O]=null)):E(a)}}}function Fa(a){return a in Aa?Aa[a]:Aa[a]="on"+a}function Ja(a,b,c,d){var e=1;if(a=P(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.q==c&&!f.l&&(e&=!1!==Ka(f,d))}return Boolean(e)}
function Ka(a,b){var c=a.e,d=a.t||a.src;a.p&&Ia(a);return c.call(d,b)}
function Ga(a,b){if(a.l)return!0;if(!xa){var c;if(!(c=b))a:{c=["window","event"];for(var d=k,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new N(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;!c.g&&0<=h;h--)c.currentTarget=e[h],d&=Ja(e[h],f,!0,c);for(h=0;!c.g&&h<e.length;h++)c.currentTarget=
e[h],d&=Ja(e[h],f,!1,c)}return d}return Ka(a,new N(b,this))}function P(a){a=a[O];return a instanceof F?a:null}var La="__closure_events_fn_"+(1E9*Math.random()>>>0);function Da(a){if(p(a))return a;a[La]||(a[La]=function(b){return a.handleEvent(b)});return a[La]};function Q(){I.call(this);this.i=new F(this);this.T=this;this.P=null}t(Q,I);Q.prototype[D]=!0;Q.prototype.addEventListener=function(a,b,c,d){Ca(this,a,b,c,d)};Q.prototype.removeEventListener=function(a,b,c,d){Ha(this,a,b,c,d)};
Q.prototype.dispatchEvent=function(a){var b,c=this.P;if(c)for(b=[];c;c=c.P)b.push(c);var c=this.T,d=a.type||a;if(m(a))a=new L(a,c);else if(a instanceof L)a.target=a.target||c;else{var e=a;a=new L(d,c);ja(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.g&&0<=g;g--)f=a.currentTarget=b[g],e=R(f,d,!0,a)&&e;a.g||(f=a.currentTarget=c,e=R(f,d,!0,a)&&e,a.g||(e=R(f,d,!1,a)&&e));if(b)for(g=0;!a.g&&g<b.length;g++)f=a.currentTarget=b[g],e=R(f,d,!1,a)&&e;return e};
function R(a,b,c,d){b=a.i.b[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.l&&g.q==c){var h=g.e,n=g.t||g.src;g.p&&H(a.i,g);e=!1!==h.call(n,d)&&e}}return e&&0!=d.Q}Q.prototype.B=function(a,b,c,d){return this.i.B(String(a),b,c,d)};function S(a,b,c){I.call(this);this.N=a;this.Y=b||0;this.X=c;this.U=s(this.V,this)}t(S,I);S.prototype.j=0;S.prototype.start=function(a){this.stop();var b=this.U;a=void 0!==a?a:this.Y;if(!p(b))if(b&&"function"==typeof b.handleEvent)b=s(b.handleEvent,b);else throw Error("Invalid listener argument");this.j=2147483647<a?-1:k.setTimeout(b,a||0)};S.prototype.stop=function(){0!=this.j&&k.clearTimeout(this.j);this.j=0};S.prototype.V=function(){this.j=0;this.N&&this.N.call(this.X)};var x={},T=null;function U(a){a=a[q]||(a[q]=++r);delete x[a];ha()&&T&&T.stop()}function Ma(){T||(T=new S(function(){Na()},20));var a=T;0!=a.j||a.start()}function Na(){var a=da();ga(function(b){Pa(b,a)});ha()||Ma()};function V(){Q.call(this);this.a=W;this.endTime=this.startTime=null}t(V,Q);var W=0;V.prototype.F=function(){this.d("begin")};V.prototype.u=function(){this.d("end")};V.prototype.d=function(a){this.dispatchEvent(a)};function X(a,b,c,d){V.call(this);if("array"!=l(a)||"array"!=l(b))throw Error("Start and end parameters must be arrays");if(a.length!=b.length)throw Error("Start and end points must be the same length");this.n=a;this.W=b;this.duration=c;this.I=d;this.coords=[]}t(X,V);X.prototype.c=0;
X.prototype.play=function(a){if(a||this.a==W)this.c=0,this.coords=this.n;else if(1==this.a)return!1;U(this);this.startTime=a=da();-1==this.a&&(this.startTime-=this.duration*this.c);this.endTime=this.startTime+this.duration;this.c||this.F();this.d("play");-1==this.a&&this.d("resume");this.a=1;var b=this[q]||(this[q]=++r);b in x||(x[b]=this);Ma();Pa(this,a);return!0};X.prototype.stop=function(a){U(this);this.a=W;a&&(this.c=1);Qa(this,this.c);this.d("stop");this.u()};
X.prototype.pause=function(){1==this.a&&(U(this),this.a=-1,this.d("pause"))};function Pa(a,b){a.c=(b-a.startTime)/(a.endTime-a.startTime);1<=a.c&&(a.c=1);Qa(a,a.c);1==a.c?(a.a=W,U(a),a.d("finish"),a.u()):1==a.a&&a.D()}function Qa(a,b){p(a.I)&&(b=a.I(b));a.coords=Array(a.n.length);for(var c=0;c<a.n.length;c++)a.coords[c]=(a.W[c]-a.n[c])*b+a.n[c]}X.prototype.D=function(){this.d("animate")};X.prototype.d=function(a){this.dispatchEvent(new Ra(a,this))};
function Ra(a,b){L.call(this,a);this.coords=b.coords;this.x=b.coords[0];this.y=b.coords[1];this.z=b.coords[2];this.duration=b.duration;this.c=b.c;this.state=b.a}t(Ra,L);function Y(a,b,c,d,e){X.call(this,b,c,d,e);this.element=a}t(Y,X);Y.prototype.A=aa;Y.prototype.D=function(){this.A();Y.o.D.call(this)};Y.prototype.u=function(){this.A();Y.o.u.call(this)};Y.prototype.F=function(){this.A();Y.o.F.call(this)};function Z(a,b,c,d,e){"number"==typeof b&&(b=[b]);"number"==typeof c&&(c=[c]);Y.call(this,a,b,c,d,e);if(1!=b.length||1!=c.length)throw Error("Start and end points must be 1D");}t(Z,Y);
Z.prototype.A=function(){var a=this.coords[0],b=this.element.style;"opacity"in b?b.opacity=a:"MozOpacity"in b?b.MozOpacity=a:"filter"in b&&(b.filter=""===a?"":"alpha(opacity="+100*a+")")};Z.prototype.show=function(){this.element.style.display=""};function Sa(a,b,c){Z.call(this,a,1,0,b,c)}t(Sa,Z);function Ta(a,b,c){Z.call(this,a,0,1,b,c)}t(Ta,Z);function Ua(a){if(a.classList)return a.classList;a=a.className;return m(a)&&a.match(/\S+/g)||[]}function Va(a,b){var c;a.classList?c=a.classList.contains(b):(c=Ua(a),c=0<=w(c,b));return c}function Wa(a,b){a.classList?a.classList.add(b):Va(a,b)||(a.className+=0<a.className.length?" "+b:b)}function Xa(a,b){a.classList?a.classList.remove(b):Va(a,b)&&(a.className=fa(Ua(a),function(a){return a!=b}).join(" "))};function $(a){this.h=a||0}$.prototype.create=function(a,b,c){this.k=a;this.f=b||[];this.K=c&&"undefined"!=typeof c.J?c.J:!1;this.G=c&&"undefined"!=typeof c.M?c.M:"selected";this.H=c&&"undefined"!=typeof c.O?c.O:"selected";this.C=0<this.f.length?Math.min(this.k.length,this.f.length):this.k.length;this.$=c&&"undefined"!=typeof c.speed?c.speed:3;this.R=300;Ya(this)};
function Ya(a){0<a.f.length&&ea(a.f,function(a,c){Ca(a,"click",function(){this.show(c);this.start()},!1,this)},a);a.show(a.h);a.start()}$.prototype.next=function(){this.show(this.h+1);this.start()};$.prototype.start=function(){this.K&&(clearTimeout(this.S),this.S=window.setTimeout(s(this.next,this),1E3*this.$))};$.prototype.stop=function(){window.clearTimeout(this.S)};
$.prototype.show=function(a){if(this.K)0>a&&(a=this.C-1),a>this.C-1&&(a=0);else if(0>a||a>this.C-1)return;0<this.f.length&&(ea(this.f,function(a){Xa(a,this.H)},this),Wa(this.f[a],this.H));if(this.r&&1==this.r.a||this.s&&1==this.s.a)this.r.stop(!0),this.s.stop(!0);Xa(this.k[a],this.G);this.r=new Ta(this.k[a],this.R);this.r.play();a!=this.h&&(Xa(this.k[this.h],this.G),this.s=new Sa(this.k[this.h],this.R),this.s.play());this.h=a};var ta,Za=document;ta=m("gallery")?Za.getElementById("gallery"):"gallery";var $a=sa("tag3c-gallery-item"),ab=sa("tga3c-gallery-control");(new $).create($a,ab,{J:!0,speed:5,M:"tag3c-gallery-item-sel",O:"tga3c-gallery-control-sel"});})();
