var t,e,i,n,r={},a=r={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function l(t){if(e===setTimeout)return setTimeout(t,0);if((e===s||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(i){try{return e.call(null,t,0)}catch(i){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:s}catch(t){e=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var c=[],h=!1,d=-1;function p(){h&&n&&(h=!1,n.length?c=n.concat(c):d=-1,c.length&&u())}function u(){if(!h){var t=l(p);h=!0;for(var e=c.length;e;){for(n=c,c=[];++d<e;)n&&n[d].run();d=-1,e=c.length}n=null,h=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function f(){}a.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];c.push(new m(t,e)),1!==c.length||h||l(u)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(t){return[]},a.binding=function(t){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw Error("process.chdir is not supported")},a.umask=function(){return 0};var g=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},v=function t(e,i,n){return(g(i=i||[])?n||(n={}):(n=i,i=[]),e instanceof RegExp)?function(t,e){var i=t.source.match(/\((?!\?)/g);if(i)for(var n=0;n<i.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t.keys=e,t}(e,i,n):g(e)?function(e,i,n){for(var r,a=[],s=0;s<e.length;s++)a.push(t(e[s],i,n).source);return(r=RegExp("(?:"+a.join("|")+")",_(n))).keys=i,r}(e,i,n):function(t,e,i){for(var n=b(t),r=A(n,i),a=0;a<n.length;a++)"string"!=typeof n[a]&&e.push(n[a]);return r.keys=e,r}(e,i,n)},y=RegExp("(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))","g");function b(t){for(var e,i=[],n=0,r=0,a="";null!=(e=y.exec(t));){var s=e[0],o=e[1],l=e.index;if(a+=t.slice(r,l),r=l+s.length,o){a+=o[1];continue}a&&(i.push(a),a="");var c=e[2],h=e[3],d=e[4],p=e[5],u=e[6],m=e[7],f="+"===u||"*"===u,g="?"===u||"*"===u,v=c||"/",b=d||p||(m?".*":"[^"+v+"]+?");i.push({name:h||n++,prefix:c||"",delimiter:v,optional:g,repeat:f,pattern:b.replace(/([=!:$\/()])/g,"\\$1")})}return r<t.length&&(a+=t.substr(r)),a&&i.push(a),i}function $(t){for(var e=Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=RegExp("^"+t[i].pattern+"$"));return function(i){for(var n="",r=i||{},a=0;a<t.length;a++){var s,o=t[a];if("string"==typeof o){n+=o;continue}var l=r[o.name];if(null==l){if(o.optional)continue;throw TypeError('Expected "'+o.name+'" to be defined')}if(g(l)){if(!o.repeat)throw TypeError('Expected "'+o.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(o.optional)continue;throw TypeError('Expected "'+o.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(s=encodeURIComponent(l[c]),!e[a].test(s))throw TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received "'+s+'"');n+=(0===c?o.prefix:o.delimiter)+s}continue}if(s=encodeURIComponent(l),!e[a].test(s))throw TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+s+'"');n+=o.prefix+s}return n}}function w(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function _(t){return t.sensitive?"":"i"}function A(t,e){for(var i=(e=e||{}).strict,n=!1!==e.end,r="",a=t[t.length-1],s="string"==typeof a&&/\/$/.test(a),o=0;o<t.length;o++){var l=t[o];if("string"==typeof l)r+=w(l);else{var c=w(l.prefix),h=l.pattern;l.repeat&&(h+="(?:"+c+h+")*"),r+=h=l.optional?c?"(?:"+c+"("+h+"))?":"("+h+")?":c+"("+h+")"}}return i||(r=(s?r.slice(0,-2):r)+"(?:\\/(?=$))?"),n?r+="$":r+=i&&s?"":"(?=\\/|$)",RegExp("^"+r,_(e))}v.parse=b,v.compile=function(t){return $(b(t))},v.tokensToFunction=$,v.tokensToRegExp=A;var x="undefined"!=typeof document,T="undefined"!=typeof window,E="undefined"!=typeof history,S=void 0!==r,C=x&&document.ontouchstart?"touchstart":"click",k=T&&!!(window.history.location||window.location);function L(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function R(t,e){if("function"==typeof t)return R.call(this,"*",t);if("function"==typeof e)for(var i=new H(t,null,this),n=1;n<arguments.length;++n)this.callbacks.push(i.middleware(arguments[n]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function I(t){if(!t.handled){var e=this._window;(this._hashbang?k&&this._getBase()+e.location.hash.replace("#!",""):k&&e.location.pathname+e.location.search)!==t.canonicalPath&&(this.stop(),t.handled=!1,k&&(e.location.href=t.canonicalPath))}}function N(t,e,i){var n=this.page=i||R,r=n._window,a=n._hashbang,s=n._getBase();"/"===t[0]&&0!==t.indexOf(s)&&(t=s+(a?"#!":"")+t);var o=t.indexOf("?");this.canonicalPath=t;var l=RegExp("^"+s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"));if(this.path=t.replace(l,"")||"/",a&&(this.path=this.path.replace("#!","")||"/"),this.title=x&&r.document.title,this.state=e||{},this.state.path=t,this.querystring=~o?n._decodeURLEncodedURIComponent(t.slice(o+1)):"",this.pathname=n._decodeURLEncodedURIComponent(~o?t.slice(0,o):t),this.params={},this.hash="",!a){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=n._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function H(t,e,i){var n=this.page=i||P,r=e||{};r.strict=r.strict||n._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=v(this.path,this.keys=[],r)}L.prototype.configure=function(t){var e=t||{};this._window=e.window||T&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&T,this._click=!1!==e.click&&x,this._hashbang=!!e.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):T&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(C,this.clickHandler,!1):x&&i.document.removeEventListener(C,this.clickHandler,!1),this._hashbang&&T&&!E?i.addEventListener("hashchange",this._onpopstate,!1):T&&i.removeEventListener("hashchange",this._onpopstate,!1)},L.prototype.base=function(t){if(0==arguments.length)return this._base;this._base=t},L.prototype._getBase=function(){var t=this._base;if(t)return t;var e=T&&this._window&&this._window.location;return T&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},L.prototype.strict=function(t){if(0==arguments.length)return this._strict;this._strict=t},L.prototype.start=function(t){var e,i=t||{};if(this.configure(i),!1!==i.dispatch){if(this._running=!0,k){var n=this._window.location;e=this._hashbang&&~n.hash.indexOf("#!")?n.hash.substr(2)+n.search:this._hashbang?n.search+n.hash:n.pathname+n.search+n.hash}this.replace(e,null,!0,i.dispatch)}},L.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(C,this.clickHandler,!1),T&&t.removeEventListener("popstate",this._onpopstate,!1),T&&t.removeEventListener("hashchange",this._onpopstate,!1)}},L.prototype.show=function(t,e,i,n){var r=new N(t,e,this),a=this.prevContext;return this.prevContext=r,this.current=r.path,!1!==i&&this.dispatch(r,a),!1!==r.handled&&!1!==n&&r.pushState(),r},L.prototype.back=function(t,e){var i=this;if(this.len>0){var n=this._window;E&&n.history.back(),this.len--}else t?setTimeout(function(){i.show(t,e)}):setTimeout(function(){i.show(i._getBase(),e)})},L.prototype.redirect=function(t,e){var i=this;"string"==typeof t&&"string"==typeof e&&R.call(this,t,function(t){setTimeout(function(){i.replace(e)},0)}),"string"==typeof t&&void 0===e&&setTimeout(function(){i.replace(t)},0)},L.prototype.replace=function(t,e,i,n){var r=new N(t,e,this),a=this.prevContext;return this.prevContext=r,this.current=r.path,r.init=i,r.save(),!1!==n&&this.dispatch(r,a),r},L.prototype.dispatch=function(t,e){var i=0,n=0,r=this;function a(){var e=r.callbacks[i++];if(t.path!==r.current){t.handled=!1;return}if(!e)return I.call(r,t);e(t,a)}e?function t(){var i=r.exits[n++];if(!i)return a();i(e,t)}():a()},L.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var i=new H(t,null,this),n=1;n<arguments.length;++n)this.exits.push(i.middleware(arguments[n]))},L.prototype.clickHandler=function(t){if(1===this._which(t)&&!t.metaKey&&!t.ctrlKey&&!t.shiftKey&&!t.defaultPrevented){var e=t.target,i=t.path||(t.composedPath?t.composedPath():null);if(i){for(var n=0;n<i.length;n++)if(i[n].nodeName&&"A"===i[n].nodeName.toUpperCase()&&i[n].href){e=i[n];break}}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var a=e.getAttribute("href");if(!(!this._hashbang&&this._samePath(e)&&(e.hash||"#"===a)||a&&a.indexOf("mailto:")>-1)&&(r?!e.target.baseVal:!e.target)&&(r||this.sameOrigin(e.href))){var s=r?e.href.baseVal:e.pathname+e.search+(e.hash||"");s="/"!==s[0]?"/"+s:s,S&&s.match(/^\/[a-zA-Z]:\//)&&(s=s.replace(/^\/[a-zA-Z]:\//,"/"));var o=s,l=this._getBase();0===s.indexOf(l)&&(s=s.substr(l.length)),this._hashbang&&(s=s.replace("#!","")),(!l||o!==s||k&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(o))}}}}},L.prototype._onpopstate=(t=!1,T?(x&&"complete"===document.readyState?t=!0:window.addEventListener("load",function(){setTimeout(function(){t=!0},0)}),function(e){if(t){if(e.state){var i=e.state.path;this.replace(i,e.state)}else if(k){var n=this._window.location;this.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}}):function(){}),L.prototype._which=function(t){return null==(t=t||T&&this._window.event).which?t.button:t.which},L.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&k)return new URL(t,e.location.toString());if(x){var i=e.document.createElement("a");return i.href=t,i}},L.prototype.sameOrigin=function(t){if(!t||!k)return!1;var e=this._toURL(t),i=this._window.location;return i.protocol===e.protocol&&i.hostname===e.hostname&&(i.port===e.port||""===i.port&&(80==e.port||443==e.port))},L.prototype._samePath=function(t){if(!k)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},L.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},N.prototype.pushState=function(){var t=this.page,e=t._window,i=t._hashbang;t.len++,E&&e.history.pushState(this.state,this.title,i&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},N.prototype.save=function(){var t=this.page;E&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},H.prototype.middleware=function(t){var e=this;return function(i,n){if(e.match(i.path,i.params))return i.routePath=e.path,t(i,n);n()}},H.prototype.match=function(t,e){var i=this.keys,n=t.indexOf("?"),r=~n?t.slice(0,n):t,a=this.regexp.exec(decodeURIComponent(r));if(!a)return!1;delete e[0];for(var s=1,o=a.length;s<o;++s){var l=i[s-1],c=this.page._decodeURLEncodedURIComponent(a[s]);void 0===c&&hasOwnProperty.call(e,l.name)||(e[l.name]=c)}return!0};var P=function t(){var e=new L;function i(){return R.apply(e,arguments)}return i.callbacks=e.callbacks,i.exits=e.exits,i.base=e.base.bind(e),i.strict=e.strict.bind(e),i.start=e.start.bind(e),i.stop=e.stop.bind(e),i.show=e.show.bind(e),i.back=e.back.bind(e),i.redirect=e.redirect.bind(e),i.replace=e.replace.bind(e),i.dispatch=e.dispatch.bind(e),i.exit=e.exit.bind(e),i.configure=e.configure.bind(e),i.sameOrigin=e.sameOrigin.bind(e),i.clickHandler=e.clickHandler.bind(e),i.create=t,Object.defineProperty(i,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(i,"current",{get:function(){return e.current},set:function(t){e.current=t}}),i.Context=N,i.Route=H,i}();P.default=P;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,B=U.trustedTypes,D=B?B.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,F="?"+q,M=`<${F}>`,j=document,V=()=>j.createComment(""),G=t=>null===t||"object"!=typeof t&&"function"!=typeof t,W=Array.isArray,z=t=>W(t)||"function"==typeof t?.[Symbol.iterator],K="[ 	\n\f\r]",Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,X=/>/g,Q=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,tt=/"/g,te=/^(?:script|style|textarea|title)$/i,ti=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),tn=ti(1),tr=(ti(2),Symbol.for("lit-noChange")),ta=Symbol.for("lit-nothing"),ts=new WeakMap,to=j.createTreeWalker(j,129);function tl(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==D?D.createHTML(e):e}const tc=(t,e)=>{let i=t.length-1,n=[],r,a=2===e?"<svg>":"",s=Z;for(let e=0;e<i;e++){let i=t[e],o,l,c=-1,h=0;for(;h<i.length&&(s.lastIndex=h,null!==(l=s.exec(i)));)h=s.lastIndex,s===Z?"!--"===l[1]?s=J:void 0!==l[1]?s=X:void 0!==l[2]?(te.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=Q):void 0!==l[3]&&(s=Q):s===Q?">"===l[0]?(s=r??Z,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?Q:'"'===l[3]?tt:Y):s===tt||s===Y?s=Q:s===J||s===X?s=Z:(s=Q,r=void 0);let d=s===Q&&t[e+1].startsWith("/>")?" ":"";a+=s===Z?i+M:c>=0?(n.push(o),i.slice(0,c)+O+i.slice(c)+q+d):i+q+(-2===c?e:d)}return[tl(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class th{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,a=0,s=t.length-1,o=this.parts,[l,c]=tc(t,e);if(this.el=th.createElement(l,i),to.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=to.nextNode())&&o.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(let t of n.getAttributeNames())if(t.endsWith(O)){let e=c[a++],i=n.getAttribute(t).split(q),s=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?tf:"?"===s[1]?tg:"@"===s[1]?tv:tm}),n.removeAttribute(t)}else t.startsWith(q)&&(o.push({type:6,index:r}),n.removeAttribute(t));if(te.test(n.tagName)){let t=n.textContent.split(q),e=t.length-1;if(e>0){n.textContent=B?B.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],V()),to.nextNode(),o.push({type:2,index:++r});n.append(t[e],V())}}}else if(8===n.nodeType){if(n.data===F)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(q,t+1));)o.push({type:7,index:r}),t+=q.length-1}}r++}}static createElement(t,e){let i=j.createElement("template");return i.innerHTML=t,i}}function td(t,e,i=t,n){if(e===tr)return e;let r=void 0!==n?i._$Co?.[n]:i._$Cl,a=G(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(t))._$AT(t,i,n),void 0!==n?(i._$Co??=[])[n]=r:i._$Cl=r),void 0!==r&&(e=td(t,r._$AS(t,e.values),r,n)),e}class tp{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??j).importNode(e,!0);to.currentNode=n;let r=to.nextNode(),a=0,s=0,o=i[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new tu(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new ty(r,this,t)),this._$AV.push(e),o=i[++s]}a!==o?.index&&(r=to.nextNode(),a++)}return to.currentNode=j,n}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tu{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=ta,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){G(t=td(this,t,e))?t===ta||null==t||""===t?(this._$AH!==ta&&this._$AR(),this._$AH=ta):t!==this._$AH&&t!==tr&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):z(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==ta&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=th.createElement(tl(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{let t=new tp(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=ts.get(t.strings);return void 0===e&&ts.set(t.strings,e=new th(t)),e}k(t){W(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let r of t)n===e.length?e.push(i=new tu(this.S(V()),this.S(V()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tm{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=ta,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ta}_$AI(t,e=this,i,n){let r=this.strings,a=!1;if(void 0===r)(a=!G(t=td(this,t,e,0))||t!==this._$AH&&t!==tr)&&(this._$AH=t);else{let n,s;let o=t;for(t=r[0],n=0;n<r.length-1;n++)(s=td(this,o[i+n],e,n))===tr&&(s=this._$AH[n]),a||=!G(s)||s!==this._$AH[n],s===ta?t=ta:t!==ta&&(t+=(s??"")+r[n+1]),this._$AH[n]=s}a&&!n&&this.j(t)}j(t){t===ta?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tf extends tm{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ta?void 0:t}}class tg extends tm{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ta)}}class tv extends tm{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=td(this,t,e,0)??ta)===tr)return;let i=this._$AH,n=t===ta&&i!==ta||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==ta&&(i===ta||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ty{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){td(this,t)}}const tb=U.litHtmlPolyfillSupport;tb?.(th,tu),(U.litHtmlVersions??=[]).push("3.1.4");const t$=(t,e,i)=>{let n=i?.renderBefore??e,r=n._$litPart$;if(void 0===r){let t=i?.renderBefore??null;n._$litPart$=r=new tu(e.insertBefore(V(),t),t,void 0,i??{})}return r._$AI(t),r},tw="userData";function t_(t){return localStorage.setItem(tw,JSON.stringify(t))}function tA(){return JSON.parse(localStorage.getItem(tw))}function tx(){return localStorage.removeItem(tw)}function tT(t){return function(e){e.preventDefault();let i=e.currentTarget;return t(Object.fromEntries(new FormData(i).entries()),i)}}async function tE(t,e,i){let n={method:t,headers:{}},r=tA();if(r){let t=r.accessToken;n.headers["X-Authorization"]=t}void 0!==i&&(n.headers["Content-Type"]="application/json",n.body=JSON.stringify(i));try{let t;let i=await fetch("https://sports-zone-api-peach.vercel.app"+e,n);if(204!=i.status&&(t=await i.json()),!1==i.ok)throw 403==i.status&&tx(),t;return t}catch(t){throw t.message}}const tS=tE.bind(null,"get"),tC=tE.bind(null,"post"),tk=tE.bind(null,"put");tE.bind(null,"delete");const tL={home:"/news/home",create:"/news/create",getSingleArt:"/news/",addComment:"/news"};async function tR(){return await tS(tL.home)}async function tI(t){return await tC(tL.create,t)}async function tN(t,e,i,n){try{return await tC(`${tL.addComment}/${t}/comment`,{newsId:t,userId:e,username:i,commentText:n})}catch(t){console.log(t)}}async function tH(t){return await tS(`/news/home/${t}`)}async function tP(t){return await tS(`${tL.getSingleArt}${t}`)}async function tU(t){return await tS(`/news/${t}/comments`)}async function tB(t,{sport:e,title:i,matchDescrp:n,image:r}){return await tk(`/news/${t}/edit`,{sport:e,title:i,matchDescrp:n,image:r})}async function tD(){return await tS("/news/latest-comments")}const tO=(t,e)=>tn`
<header>

<a href="/"><h1>Sports News</h1></a>
    <nav>
      <ul>
        <li class="dropdown">
          <a href="#">Sports</a>
          <div class="dropdown-content">
            <a href="/home/Basketball">Basketball</a>
            <a href="/home/Football">Football</a>
            <a href="/home/Tennis">Tennis</a>
            <a href="/home/Volleyball">Volleyball</a>
          </div>
        </li>  
        ${t?tn`
          <li><a href="/create">Create Article</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>
        `:tn`
        
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </nav>
        `}

  </header>
   <main> ${e} </main>

    <footer class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h2>About Us</h2>
        <p>We provide the latest news and updates on various sports, including Football, Basketball, Tennis, and more.</p>
      </div>
      <div class="footer-section contact">
        <h2>Contact Us</h2>
        <p>Email: s.dimitrov2004@gmail.com</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Sports News. All rights reserved.</p>
    </div>
  </footer>
`;async function tq(t,e){return await tS(`//league/${t}/${e}`)}const tF=(t,e,i,n)=>tn`
      
       ${t.length>0?t.map(tM):tn`There arent any news!`}
    
        <aside class="standing-section">
    <h2>League Standings</h2>
    <div class="table-container">
      <div class="sport-buttons">
      <button class="sport-button" data-sport="Football">Football</button>
      <button class="sport-button" data-sport="Basketball">Basketball</button>
      <button class="sport-button" data-sport="Tennis">Tennis</button>
      <button class="sport-button" data-sport="Volleyball">Volleyball</button>
    </div>
        <select id="leagueSelect">
         ${"Tennis"==n?tn`
      <option value="Tennis">ATP Ranking</option>
      `:tn`
      <option value="Bulgaria">Bulgaria</option>
            <option value="France">France</option>
            <option value="England">England</option>
            <option value="Spain">Spain</option>
            <option value="Germany">Germany</option>
      `}
        </select>
        <table id="standingTable">
            <thead>
                <tr>
                    <th>POS</th>
                    <th>CLUB</th>
                    <th>PTS</th>
                    <th>MP</th>
                </tr>
            </thead>
            <tbody>
                ${e?e.map(tj):tn`<tr><td colspan="4">Select a league to see standings.</td></tr>`}
            </tbody>
        </table>
    </div>
    <div class="fan-comments">
          <h2>Recent Comments</h2>
          <ul>
            ${i.map(tV)}
          </ul>
        </div>
</aside>
    `,tM=t=>tn`
  <div class="news-section">
    <article class="big-news">
      <a href="/${t._id}/details"><h2>${t.title}</h2></a>
      <div class="news-content">
        <img src="${t.image}" alt="${t.title}">
        <p>${t.matchDescrp.slice(0,150)+"..."}</p>
        <div class="full-text-overlay">
          <p>${t.matchDescrp.slice(0,300)+"..."}</p>
        </div>
      </div>
    </article>
  </div>
`,tj=(t,e)=>tn`
    <tr>
        <td>${e+1}</td>
        <td>${t.clubName}</td>
        <td>${t.clubPoints}</td>
        <td>${t.matchesPlayed}</td>
    </tr>
    `,tV=t=>tn`
  <li>
    <p><strong>${t.username}</strong> on <a href="${t.articleId._id}/details">${t.articleId.title}</a></p>
    <p>${t.commentText}</p>
  </li>
`;async function tG(t){let e=await tR(),i="Football",n="Bulgaria",r=null,a=await tD();console.log(a);let s=async()=>{try{r=(await tq(i,n)).teams}catch(t){r=null}t.render(tF(e,r,a,i))};t.render(tF(e,r,a)),await s(),document.getElementById("leagueSelect").addEventListener("change",async function(){n=this.value,await s()}),document.querySelectorAll(".sport-button").forEach(t=>{t.addEventListener("click",async function(){i=this.getAttribute("data-sport"),await s()})})}async function tW(t,e,i){t_(await tC("/users/register",{email:t,password:e,username:i}))}async function tz(t,e){t_(await tC("/users/login",{email:t,password:e}))}async function tK(){tS("/users/logout"),tx()}const tZ=t=>tn`

<div class="login-container">
<form id="loginForm" @submit=${t}>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required>
  </div>
  <button type="submit">Login</button>
</form>
<div class="register-link">
  <p>Not registered? <a href="/register">Register here</a></p>
</div>
</div>
`,tJ=t=>tn`
<div class="register-container">
    <form id="registerForm" @submit=${t}>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
      </div>
      <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input type="password" id="repeatPassword" name="repeatPassword" required>
      </div>
      <button type="submit">Register</button>
    </form>
    <div class="login-link">
      <p>Already registered? <a href="/login">Login here</a></p>
    </div>
  </div>
`,tX=t=>tn`
<div class="create-article-container">
        <h1>Create New Article</h1>
        <form id="createArticleForm" enctype="multipart/form-data" @submit=${t}>
            <div class="form-group">
                <label for="sport">Sport</label>
                <input type="text" id="sport" name="sport" required>
            </div>
            <div class="form-group">
                <label for="title">Article Title</label>
                <input type="text" id="title" name="title" required>
            </div>
            <div class="form-group">
                <label for="description">Article Description</label>
                <textarea id="description" name="matchDescrp" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="image">Article Image</label>
                <input type="text" id="image" name="image" required>
            </div>
            <button type="submit">Create Article</button>
        </form>
    </div>
`,tQ=(t,e,i)=>tn`
      
       ${t.length>0?t.map(tY):tn`There arent any news!`}
    
        <aside class="standing-section">
        <h2>League Standings</h2>
        <div class="table-container">
          <select id="leagueSelect">
          ${"Tennis"==i?tn`
            <option value="International">ATP RANKING</option>
            `:tn`
            
         <option value="Bulgaria">Bulgaria</option>
            <option value="France">France</option>
            <option value="England">England</option>
            <option value="Spain">Spain</option>
            <option value="Germany">Germany</option>    
            `}
       
          </select>
          <table id="standingTable">
            <thead>
              <tr>
                <th>POS</th>
                <th>CLUB</th>
                <th>PTS</th>
                <th>MP</th>
              </tr>
            </thead>
            <tbody>
              ${e?e.map(t0):tn`<tr><td colspan="4">Select a league to see standings.</td></tr>`}
            </tbody>
          </table>
          </div>
        </aside>
    `,tY=t=>tn`
    <div class="news-section">
      <article class="big-news">
        <a href="/${t._id}/details"><h2>${t.title}</h2></a>
        <div class="news-content">
          <img src="${t.image}" alt="${t.title}">
          <p>${t.matchDescrp.slice(0,150)+"..."}</p>
          <div class="full-text-overlay">
            <p>${t.matchDescrp.slice(0,300)+"..."}</p>
          </div>
        </div>
      </article>
    </div>
  `,t0=(t,e)=>tn`
    <tr>
        <td>${e+1}</td>
        <td>${t.clubName}</td>
        <td>${t.clubPoints}</td>
        <td>${t.matchesPlayed}</td>
    </tr>
    `;async function t1(t){let e=t.params.sport,i=await tH(e),n=null,r=async()=>{try{n=(await tq(e,"Bulgaria")).teams}catch(t){n=null}t.render(tQ(i,n,e))};t.render(tQ(i,n)),await r(),document.getElementById("leagueSelect").addEventListener("change",async function(){let r=this.value;try{n=(await tq(e,r)).teams}catch(t){n=null}t.render(tQ(i,n))})}const t2=(t,e,i)=>tn`

<body>
    <div class="article-container">
        <div class="article-image">
            <img src=${t.image} alt="Article Image">
        </div>
        <div class="article-content">
            <h1 class="article-title">${t.title}</h1>
            <p class="article-description">${t.matchDescrp}</p>
            ${t.canEdit?tn`
            <div class="article-buttons">
            <a href="/${t._id}/details/edit" class="edit-article-button">Edit</a>
            <button id="delete-article-button">Delete</button>
        </div>
            `:null}
    </div>
    <div class="comment-section">
    <h2>Comments</h2>
    <div id="comments-container">
    ${e&&e.length>0?e.map(t=>tn`
        <div class="comment">
            <strong>${t.username}</strong>: ${t.commentText}
        </div>
        `):tn`<h1>No comments yet!</h1>`}
    </div>
    ${i?tn`
        <textarea id="new-comment" placeholder="Add a comment..."></textarea>
        <button id="add-comment-button">Add Comment</button>
        `:tn``}
</div>
</body>
`;async function t4(t){let e=tA(),i=e?._id,n=e?.username,r=t.params.newsId,a=await tP(r),s=a.comments||[];async function o(){s=await tU(r),t.render(t2(a,s,e))}e&&i===a.ownerId&&(a.canEdit=!0),t.render(t2(a,s,e)),document.getElementById("add-comment-button").addEventListener("click",async function(){let t=document.getElementById("new-comment").value.trim();try{await tN(r,i,n,t),document.getElementById("new-comment").value="",s.push({username:n,commentText:t}),o()}catch(t){console.log(t.message),alert("Failed to add comment.")}}),o()}const t3=(t,e)=>tn`
    <div class="edit-article-container">
        <h1>Edit Article</h1>
        <form id="editArticleForm" @submit=${e}>
            <div class="form-group">
                <label for="sport">Sport</label>
                <input type="text" id="sport" name="sport" .value=${t.sport} required>
            </div>
            <div class="form-group">
                <label for="title">Article Title</label>
                <input type="text" id="title" name="title" .value=${t.title} required>
            </div>
            <div class="form-group">
                <label for="description">Article Description</label>
                <textarea id="description" name="matchDescrp" rows="4" .value=${t.matchDescrp} required></textarea>
            </div>
            <div class="form-group">
                <label for="image">Article Image</label>
                <input type="text" id="image" name="image" .value=${t.image} required>
            </div>
            <button type="submit">Save Changes</button>
        </form>
    </div>
`;async function t5(t){let e=t.params.newsId,i=await tP(e);async function n({sport:i,title:n,matchDescrp:r,image:a}){i=i.trim(),[i,n=n.trim(),r=r.trim(),a=a.trim()].some(t=>""==t)&&alert("All fiedls are required!");try{await tB(e,{sport:i,title:n,matchDescrp:r,image:a}),t.page.redirect(`/${e}/details`)}catch(t){console.log(t)}}t.render(t3(i,tT(n)))}const t6=document.body;async function t7(t){t$(tO(tA(),t),t6)}P(function(t,e){t.render=t7,e()}),P("index.html","/"),P("/",tG),P("/login",function(t){t.render(tZ(tT(e)));async function e({email:e,password:i},n){await tz(e,i),n.reset(),t.page.redirect("/")}}),P("/register",function(t){t.render(tJ(tT(e)));async function e(e){let{email:i,username:n,password:r,repeatPassword:a}=e;if(" "==i||" "==n||" "==r)throw Error("All fields are required");if(r!==a)throw Error("Passwords missmatch!");await tW(i,r,n),t.page.redirect("/")}}),P("/logout",()=>{tK(),P.redirect("/")}),P("/create",function(t){t.render(tX(tT(e)));async function e({sport:e,title:i,matchDescrp:n,image:r}){let a=tA()._id;if([e,i,n,r].some(t=>""==t))throw Error("All fields are required!");await tI({sport:e,title:i,matchDescrp:n,image:r,ownerId:a}),t.page.redirect("/")}}),P("/home/:sport",t1),P("/:newsId/details",t4),P("/:newsId/details/edit",t5),P.start();
//# sourceMappingURL=index.53b13185.js.map
