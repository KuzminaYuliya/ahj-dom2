(()=>{var t={3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},9670:(t,r,e)=>{var n=e(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},8533:(t,r,e)=>{"use strict";var n=e(2092).forEach,o=e(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,r,e)=>{var n=e(5656),o=e(7466),i=e(1400),a=function(t){return function(r,e,a){var c,u=n(r),f=o(u.length),s=i(a,f);if(t&&e!=e){for(;f>s;)if((c=u[s++])!=c)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,r,e)=>{var n=e(9974),o=e(8361),i=e(7908),a=e(7466),c=e(5417),u=[].push,f=function(t){var r=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=7==t,v=5==t||l;return function(h,d,y,b){for(var g,x,m=i(h),S=o(m),w=n(d,y,3),T=a(S.length),E=0,L=b||c,O=r?L(h,T):e||p?L(h,0):void 0;T>E;E++)if((v||E in S)&&(x=w(g=S[E],E,m),t))if(r)O[E]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:u.call(O,g)}else switch(t){case 4:return!1;case 7:u.call(O,g)}return l?-1:f||s?s:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},1194:(t,r,e)=>{var n=e(7293),o=e(5112),i=e(7392),a=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[];return(r.constructor={})[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},9341:(t,r,e)=>{"use strict";var n=e(7293);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},7475:(t,r,e)=>{var n=e(111),o=e(3157),i=e(5112)("species");t.exports=function(t){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),void 0===r?Array:r}},5417:(t,r,e)=>{var n=e(7475);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},4326:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},9920:(t,r,e)=>{var n=e(6656),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,r){for(var e=o(r),c=a.f,u=i.f,f=0;f<e.length;f++){var s=e[f];n(t,s)||c(t,s,u(r,s))}}},8880:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},6135:(t,r,e)=>{"use strict";var n=e(4948),o=e(3070),i=e(9114);t.exports=function(t,r,e){var a=n(r);a in t?o.f(t,a,i(0,e)):t[a]=e}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,i=e(7854),a=e(8113),c=i.process,u=i.Deno,f=c&&c.versions||u&&u.version,s=f&&f.v8;s?o=(n=s.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),a=e(1320),c=e(3505),u=e(9920),f=e(4705);t.exports=function(t,r){var e,s,l,p,v,h=t.target,d=t.global,y=t.stat;if(e=d?n:y?n[h]||c(h,{}):(n[h]||{}).prototype)for(s in r){if(p=r[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(d?s:h+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(e,s,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,r,e)=>{var n=e(3099);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},5005:(t,r,e)=>{var n=e(7854),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?o(n[t]):n[t]&&n[t][r]}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:(t,r,e)=>{var n=e(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,r){return o.call(n(t),r)}},3501:t=>{t.exports={}},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,r,e)=>{var n=e(7293),o=e(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,r,e)=>{var n=e(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,r,e)=>{var n,o,i,a=e(8536),c=e(7854),u=e(111),f=e(8880),s=e(6656),l=e(5465),p=e(6200),v=e(3501),h="Object already initialized",d=c.WeakMap;if(a||l.state){var y=l.state||(l.state=new d),b=y.get,g=y.has,x=y.set;n=function(t,r){if(g.call(y,t))throw new TypeError(h);return r.facade=t,x.call(y,t,r),r},o=function(t){return b.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var m=p("state");v[m]=!0,n=function(t,r){if(s(t,m))throw new TypeError(h);return r.facade=t,f(t,m,r),r},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!u(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},3157:(t,r,e)=>{var n=e(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:(t,r,e)=>{var n=e(7293),o=/#|\.prototype\./,i=function(t,r){var e=c[a(t)];return e==f||e!=u&&("function"==typeof r?n(r):!!r)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},2190:(t,r,e)=>{var n=e(5005),o=e(3307);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return"function"==typeof r&&Object(t)instanceof r}},133:(t,r,e)=>{var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,r,e)=>{var n=e(7854),o=e(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3070:(t,r,e)=>{var n=e(9781),o=e(4664),i=e(9670),a=e(4948),c=Object.defineProperty;r.f=n?c:function(t,r,e){if(i(t),r=a(r),i(e),o)try{return c(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(5296),i=e(9114),a=e(5656),c=e(4948),u=e(6656),f=e(4664),s=Object.getOwnPropertyDescriptor;r.f=n?s:function(t,r){if(t=a(t),r=c(r),f)try{return s(t,r)}catch(t){}if(u(t,r))return i(!o.f.call(t,r),t[r])}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},6324:(t,r,e)=>{var n=e(6656),o=e(5656),i=e(1318).indexOf,a=e(3501);t.exports=function(t,r){var e,c=o(t),u=0,f=[];for(e in c)!n(a,e)&&n(c,e)&&f.push(e);for(;r.length>u;)n(c,e=r[u++])&&(~i(f,e)||f.push(e));return f}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},2140:(t,r,e)=>{var n=e(111);t.exports=function(t,r){var e,o;if("string"===r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if("string"!==r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},3887:(t,r,e)=>{var n=e(5005),o=e(8006),i=e(5181),a=e(9670);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(a(t)),e=i.f;return e?r.concat(e(t)):r}},1320:(t,r,e)=>{var n=e(7854),o=e(8880),i=e(6656),a=e(3505),c=e(2788),u=e(9909),f=u.get,s=u.enforce,l=String(String).split("String");(t.exports=function(t,r,e,c){var u,f=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),(u=s(e)).source||(u.source=l.join("string"==typeof r?r:""))),t!==n?(f?!v&&t[r]&&(p=!0):delete t[r],p?t[r]=e:o(t,r,e)):p?t[r]=e:a(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,r,e)=>{var n=e(7854);t.exports=function(t,r){try{Object.defineProperty(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.16.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8415:(t,r,e)=>{"use strict";var n=e(9958),o=e(1340),i=e(4488);t.exports=function(t){var r=o(i(this)),e="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(r+=r))1&a&&(e+=r);return e}},863:(t,r,e)=>{var n=e(4326);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},1400:(t,r,e)=>{var n=e(9958),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},7466:(t,r,e)=>{var n=e(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(4488);t.exports=function(t){return Object(n(t))}},7593:(t,r,e)=>{var n=e(111),o=e(2190),i=e(2140),a=e(5112)("toPrimitive");t.exports=function(t,r){if(!n(t)||o(t))return t;var e,c=t[a];if(void 0!==c){if(void 0===r&&(r="default"),e=c.call(t,r),!n(e)||o(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===r&&(r="number"),i(t,r)}},4948:(t,r,e)=>{var n=e(7593),o=e(2190);t.exports=function(t){var r=n(t,"string");return o(r)?r:String(r)}},1340:(t,r,e)=>{var n=e(2190);t.exports=function(t){if(n(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},9711:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},3307:(t,r,e)=>{var n=e(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(6656),a=e(9711),c=e(133),u=e(3307),f=o("wks"),s=n.Symbol,l=u?s:s&&s.withoutSetter||a;t.exports=function(t){return i(f,t)&&(c||"string"==typeof f[t])||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},2222:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(3157),a=e(111),c=e(7908),u=e(7466),f=e(6135),s=e(5417),l=e(1194),p=e(5112),v=e(7392),h=p("isConcatSpreadable"),d=9007199254740991,y="Maximum allowed index exceeded",b=v>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=l("concat"),x=function(t){if(!a(t))return!1;var r=t[h];return void 0!==r?!!r:i(t)};n({target:"Array",proto:!0,forced:!b||!g},{concat:function(t){var r,e,n,o,i,a=c(this),l=s(a,0),p=0;for(r=-1,n=arguments.length;r<n;r++)if(x(i=-1===r?a:arguments[r])){if(p+(o=u(i.length))>d)throw TypeError(y);for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=d)throw TypeError(y);f(l,p++,i)}return l.length=p,l}})},9554:(t,r,e)=>{"use strict";var n=e(2109),o=e(8533);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},6977:(t,r,e)=>{"use strict";var n=e(2109),o=e(9958),i=e(863),a=e(8415),c=e(7293),u=1..toFixed,f=Math.floor,s=function(t,r,e){return 0===r?e:r%2==1?s(t,r-1,e*t):s(t*t,r/2,e)},l=function(t,r,e){for(var n=-1,o=e;++n<6;)o+=r*t[n],t[n]=o%1e7,o=f(o/1e7)},p=function(t,r){for(var e=6,n=0;--e>=0;)n+=t[e],t[e]=f(n/r),n=n%r*1e7},v=function(t){for(var r=6,e="";--r>=0;)if(""!==e||0===r||0!==t[r]){var n=String(t[r]);e=""===e?n:e+a.call("0",7-n.length)+n}return e};n({target:"Number",proto:!0,forced:u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}))},{toFixed:function(t){var r,e,n,c,u=i(this),f=o(t),h=[0,0,0,0,0,0],d="",y="0";if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(d="-",u=-u),u>1e-21)if(e=(r=function(t){for(var r=0,e=t;e>=4096;)r+=12,e/=4096;for(;e>=2;)r+=1,e/=2;return r}(u*s(2,69,1))-69)<0?u*s(2,-r,1):u/s(2,r,1),e*=4503599627370496,(r=52-r)>0){for(l(h,0,e),n=f;n>=7;)l(h,1e7,0),n-=7;for(l(h,s(10,n,1),0),n=r-1;n>=23;)p(h,1<<23),n-=23;p(h,1<<n),l(h,1,1),p(h,2),y=v(h)}else l(h,0,e),l(h,1<<-r,0),y=v(h)+a.call("0",f);return f>0?d+((c=y.length)<=f?"0."+a.call("0",f-c)+y:y.slice(0,c-f)+"."+y.slice(c-f)):d+y}})},4747:(t,r,e)=>{var n=e(7854),o=e(8324),i=e(8533),a=e(8880);for(var c in o){var u=n[c],f=u&&u.prototype;if(f&&f.forEach!==i)try{a(f,"forEach",i)}catch(t){f.forEach=i}}}},r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e(2222),e(9554),e(6977),e(4747);var r=new(function(){function r(t){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),this.data=t,this.container=null,this.sort=!0}var e,n;return e=r,(n=[{key:"init",value:function(){this.drawTable()}},{key:"bindToDom",value:function(t){if(!(t instanceof HTMLElement))throw new Error("bad container");this.container=t}},{key:"drawTable",value:function(t){this.container.innerHTML="";var r=document.createElement("table");r.innerHTML="<tr><th>id</th><th>title</th><th>year</th><th>imdb</th></tr>",this.data.forEach((function(t){var e=t.id,n=t.title,o=t.imdb,i=t.year,a='\n\t\t\t<tr data-id="'.concat(e,'" data-title="').concat(n,'" data-year="').concat(i,'" data-imdb="').concat(o.toFixed(2),'">\n\t\t\t<td>').concat(e,"</td><td>").concat(n,"</td><td>(").concat(i,")</td><td>imdb: ").concat(o.toFixed(2),"</td>\n\t\t\t</tr>\n\t\t\t");r.innerHTML+=a})),this.container.append(r),this.addArrow(t)}},{key:"addArrow",value:function(t){var r=this;this.container.querySelectorAll("th").forEach((function(e){e.textContent===t&&r.sort?(e.textContent+="↓",r.sort=!1):e.textContent!==t||r.sort||(e.textContent+="↑",r.sort=!0)}))}},{key:"getSort",value:function(t){this.sort&&("title"===t?this.data.sort((function(t,r){return t.title>r.title?1:t.title<r.title?-1:0})):this.data.sort((function(r,e){return r[t]-e[t]}))),this.sort||("title"===t?this.data.sort((function(t,r){return t.title>r.title?-1:t.title<r.title?1:0})):this.data.sort((function(r,e){return e[t]-r[t]}))),this.drawTable(t)}}])&&t(e.prototype,n),r}())([{id:26,title:"Побег из Шоушенка",imdb:9.3,year:1994},{id:25,title:"Крёстный отец",imdb:9.2,year:1972},{id:27,title:"Крёстный отец 2",imdb:9,year:1974},{id:1047,title:"Тёмный рыцарь",imdb:9,year:2008},{id:223,title:"Криминальное чтиво",imdb:8.9,year:1994}]);r.bindToDom(document.querySelector(".container")),r.init();var n=["id","id","title","title","year","year","imdb","imdb"],o=0;setInterval((function(){r.getSort(n[o]),(o+=1)===n.length&&(o=0)}),2e3)})()})();