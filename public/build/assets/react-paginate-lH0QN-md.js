import{g as Za,R as ga,r as Qa,f as en}from"../.vite/manifest.json";function Wt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Wt(Object(a),!0).forEach(function(n){U(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Wt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function tt(e){"@babel/helpers - typeof";return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(e)}function tn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bt(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function an(e,t,a){return t&&Bt(e.prototype,t),a&&Bt(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function U(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Lt(e,t){return rn(e)||sn(e,t)||ba(e,t)||fn()}function ze(e){return nn(e)||on(e)||ba(e)||ln()}function nn(e){if(Array.isArray(e))return gt(e)}function rn(e){if(Array.isArray(e))return e}function on(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sn(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n=[],r=!0,i=!1,o,s;try{for(a=a.call(e);!(r=(o=a.next()).done)&&(n.push(o.value),!(t&&n.length===t));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return n}}function ba(e,t){if(e){if(typeof e=="string")return gt(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return gt(e,t)}}function gt(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function ln(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ht=function(){},Tt={},ha={},ya=null,ka={mark:Ht,measure:Ht};try{typeof window<"u"&&(Tt=window),typeof document<"u"&&(ha=document),typeof MutationObserver<"u"&&(ya=MutationObserver),typeof performance<"u"&&(ka=performance)}catch{}var cn=Tt.navigator||{},Gt=cn.userAgent,Xt=Gt===void 0?"":Gt,me=Tt,T=ha,qt=ya,Be=ka;me.document;var ne=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",xa=~Xt.indexOf("MSIE")||~Xt.indexOf("Trident/"),He,Ge,Xe,qe,Ve,ee="___FONT_AWESOME___",bt=16,wa="fa",Pa="svg-inline--fa",ke="data-fa-i2svg",ht="data-fa-pseudo-element",un="data-fa-pseudo-element-pending",It="data-prefix",_t="data-icon",Vt="fontawesome-i2svg",mn="async",dn=["HTML","HEAD","STYLE","SCRIPT"],Aa=function(){try{return!0}catch{return!1}}(),L="classic",D="sharp",Rt=[L,D];function Ye(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[L]}})}var Re=Ye((He={},U(He,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),U(He,D,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),He)),je=Ye((Ge={},U(Ge,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),U(Ge,D,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ge)),Me=Ye((Xe={},U(Xe,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),U(Xe,D,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Xe)),pn=Ye((qe={},U(qe,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),U(qe,D,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),qe)),vn=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ca="fa-layers-text",gn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bn=Ye((Ve={},U(Ve,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),U(Ve,D,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ve)),Oa=[1,2,3,4,5,6,7,8,9,10],hn=Oa.concat([11,12,13,14,15,16,17,18,19,20]),yn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],he={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},De=new Set;Object.keys(je[L]).map(De.add.bind(De));Object.keys(je[D]).map(De.add.bind(De));var kn=[].concat(Rt,ze(De),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",he.GROUP,he.SWAP_OPACITY,he.PRIMARY,he.SECONDARY]).concat(Oa.map(function(e){return"".concat(e,"x")})).concat(hn.map(function(e){return"w-".concat(e)})),Ie=me.FontAwesomeConfig||{};function xn(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function wn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var Pn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pn.forEach(function(e){var t=Lt(e,2),a=t[0],n=t[1],r=wn(xn(a));r!=null&&(Ie[n]=r)})}var Ea={styleDefault:"solid",familyDefault:"classic",cssPrefix:wa,replacementClass:Pa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ie.familyPrefix&&(Ie.cssPrefix=Ie.familyPrefix);var Ee=d(d({},Ea),Ie);Ee.autoReplaceSvg||(Ee.observeMutations=!1);var p={};Object.keys(Ea).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(a){Ee[e]=a,_e.forEach(function(n){return n(p)})},get:function(){return Ee[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){Ee.cssPrefix=t,_e.forEach(function(a){return a(p)})},get:function(){return Ee.cssPrefix}});me.FontAwesomeConfig=p;var _e=[];function An(e){return _e.push(e),function(){_e.splice(_e.indexOf(e),1)}}var ce=bt,Q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Cn(e){if(!(!e||!ne)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=T.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return T.head.insertBefore(t,n),e}}var On="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fe(){for(var e=12,t="";e-- >0;)t+=On[Math.random()*62|0];return t}function Ne(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function jt(e){return e.classList?Ne(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Na(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function En(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Na(e[a]),'" ')},"").trim()}function it(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Mt(e){return e.size!==Q.size||e.x!==Q.x||e.y!==Q.y||e.rotate!==Q.rotate||e.flipX||e.flipY}function Nn(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Sn(e){var t=e.transform,a=e.width,n=a===void 0?bt:a,r=e.height,i=r===void 0?bt:r,o=e.startCentered,s=o===void 0?!1:o,f="";return s&&xa?f+="translate(".concat(t.x/ce-n/2,"em, ").concat(t.y/ce-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/ce,"em), calc(-50% + ").concat(t.y/ce,"em)) "):f+="translate(".concat(t.x/ce,"em, ").concat(t.y/ce,"em) "),f+="scale(".concat(t.size/ce*(t.flipX?-1:1),", ").concat(t.size/ce*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var Ln=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Sa(){var e=wa,t=Pa,a=p.cssPrefix,n=p.replacementClass,r=Ln;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var Kt=!1;function ut(){p.autoAddCss&&!Kt&&(Cn(Sa()),Kt=!0)}var Tn={mixout:function(){return{dom:{css:Sa,insertCss:ut}}},hooks:function(){return{beforeDOMElementCreation:function(){ut()},beforeI2svg:function(){ut()}}}},te=me||{};te[ee]||(te[ee]={});te[ee].styles||(te[ee].styles={});te[ee].hooks||(te[ee].hooks={});te[ee].shims||(te[ee].shims=[]);var J=te[ee],La=[],In=function e(){T.removeEventListener("DOMContentLoaded",e),at=1,La.map(function(t){return t()})},at=!1;ne&&(at=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),at||T.addEventListener("DOMContentLoaded",In));function _n(e){ne&&(at?setTimeout(e,0):La.push(e))}function $e(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Na(e):"<".concat(t," ").concat(En(n),">").concat(i.map($e).join(""),"</").concat(t,">")}function Jt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Rn=function(t,a){return function(n,r,i,o){return t.call(a,n,r,i,o)}},mt=function(t,a,n,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Rn(a,r):a,f,c,l;for(n===void 0?(f=1,l=t[i[0]]):(f=0,l=n);f<o;f++)c=i[f],l=s(l,t[c],c,t);return l};function jn(e){for(var t=[],a=0,n=e.length;a<n;){var r=e.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var i=e.charCodeAt(a++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function yt(e){var t=jn(e);return t.length===1?t[0].toString(16):null}function Mn(e,t){var a=e.length,n=e.charCodeAt(t),r;return n>=55296&&n<=56319&&a>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function Zt(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function kt(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=Zt(t);typeof J.hooks.addPack=="function"&&!r?J.hooks.addPack(e,Zt(t)):J.styles[e]=d(d({},J.styles[e]||{}),i),e==="fas"&&kt("fa",t)}var Ke,Je,Ze,Pe=J.styles,Dn=J.shims,Fn=(Ke={},U(Ke,L,Object.values(Me[L])),U(Ke,D,Object.values(Me[D])),Ke),Dt=null,Ta={},Ia={},_a={},Ra={},ja={},zn=(Je={},U(Je,L,Object.keys(Re[L])),U(Je,D,Object.keys(Re[D])),Je);function Yn(e){return~kn.indexOf(e)}function $n(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!Yn(r)?r:null}var Ma=function(){var t=function(i){return mt(Pe,function(o,s,f){return o[f]=mt(s,i,{}),o},{})};Ta=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Ia=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ja=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in Pe||p.autoFetchSvg,n=mt(Dn,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});_a=n.names,Ra=n.unicodes,Dt=ot(p.styleDefault,{family:p.familyDefault})};An(function(e){Dt=ot(e.styleDefault,{family:p.familyDefault})});Ma();function Ft(e,t){return(Ta[e]||{})[t]}function Un(e,t){return(Ia[e]||{})[t]}function ye(e,t){return(ja[e]||{})[t]}function Da(e){return _a[e]||{prefix:null,iconName:null}}function Wn(e){var t=Ra[e],a=Ft("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function de(){return Dt}var zt=function(){return{prefix:null,iconName:null,rest:[]}};function ot(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?L:a,r=Re[n][e],i=je[n][e]||je[n][r],o=e in J.styles?e:null;return i||o||null}var Qt=(Ze={},U(Ze,L,Object.keys(Me[L])),U(Ze,D,Object.keys(Me[D])),Ze);function st(e){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,r=n===void 0?!1:n,i=(t={},U(t,L,"".concat(p.cssPrefix,"-").concat(L)),U(t,D,"".concat(p.cssPrefix,"-").concat(D)),t),o=null,s=L;(e.includes(i[L])||e.some(function(c){return Qt[L].includes(c)}))&&(s=L),(e.includes(i[D])||e.some(function(c){return Qt[D].includes(c)}))&&(s=D);var f=e.reduce(function(c,l){var m=$n(p.cssPrefix,l);if(Pe[l]?(l=Fn[s].includes(l)?pn[s][l]:l,o=l,c.prefix=l):zn[s].indexOf(l)>-1?(o=l,c.prefix=ot(l,{family:s})):m?c.iconName=m:l!==p.replacementClass&&l!==i[L]&&l!==i[D]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var k=o==="fa"?Da(c.iconName):{},b=ye(c.prefix,c.iconName);k.prefix&&(o=null),c.iconName=k.iconName||b||c.iconName,c.prefix=k.prefix||c.prefix,c.prefix==="far"&&!Pe.far&&Pe.fas&&!p.autoFetchSvg&&(c.prefix="fas")}return c},zt());return(e.includes("fa-brands")||e.includes("fab"))&&(f.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===D&&(Pe.fass||p.autoFetchSvg)&&(f.prefix="fass",f.iconName=ye(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=de()||"fas"),f}var Bn=function(){function e(){tn(this,e),this.definitions={}}return an(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=d(d({},a.definitions[s]||{}),o[s]),kt(s,o[s]);var f=Me[L][s];f&&kt(f,o[s]),Ma()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];a[s]||(a[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(a[s][m]=c)}),a[s][f]=c}),a}}]),e}(),ea=[],Ae={},Oe={},Hn=Object.keys(Oe);function Gn(e,t){var a=t.mixoutsTo;return ea=e,Ae={},Object.keys(Oe).forEach(function(n){Hn.indexOf(n)===-1&&delete Oe[n]}),ea.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),tt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){Ae[o]||(Ae[o]=[]),Ae[o].push(i[o])})}n.provides&&n.provides(Oe)}),a}function xt(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=Ae[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function xe(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=Ae[e]||[];r.forEach(function(i){i.apply(null,a)})}function ae(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Oe[e]?Oe[e].apply(null,t):void 0}function wt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||de();if(t)return t=ye(a,t)||t,Jt(Fa.definitions,a,t)||Jt(J.styles,a,t)}var Fa=new Bn,Xn=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,xe("noAuto")},qn={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ne?(xe("beforeI2svg",t),ae("pseudoElements2svg",t),ae("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,_n(function(){Kn({autoReplaceSvgRoot:a}),xe("watch",t)})}},Vn={icon:function(t){if(t===null)return null;if(tt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ye(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ot(t[0]);return{prefix:n,iconName:ye(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(vn))){var r=st(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||de(),iconName:ye(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=de();return{prefix:i,iconName:ye(i,t)||t}}}},G={noAuto:Xn,config:p,dom:qn,parse:Vn,library:Fa,findIconDefinition:wt,toHtml:$e},Kn=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?T:a;(Object.keys(J.styles).length>0||p.autoFetchSvg)&&ne&&p.autoReplaceSvg&&G.dom.i2svg({node:n})};function lt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return $e(n)})}}),Object.defineProperty(e,"node",{get:function(){if(ne){var n=T.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Jn(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Mt(o)&&a.found&&!n.found){var s=a.width,f=a.height,c={x:s/f/2,y:.5};r.style=it(d(d({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Zn(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:o}),children:n}]}]}function Yt(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,f=e.title,c=e.maskId,l=e.titleId,m=e.extra,k=e.watchable,b=k===void 0?!1:k,A=n.found?n:a,I=A.width,_=A.height,R=r==="fak",N=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(M){return m.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(m.classes).join(" "),S={children:[],attributes:d(d({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:N,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(_)})},W=R&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/_*16*.0625,"em")}:{};b&&(S.attributes[ke]=""),f&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(l||Fe())},children:[f]}),delete S.attributes.title);var j=d(d({},S),{},{prefix:r,iconName:i,main:a,mask:n,maskId:c,transform:o,symbol:s,styles:d(d({},W),m.styles)}),X=n.found&&a.found?ae("generateAbstractMask",j)||{children:[],attributes:{}}:ae("generateAbstractIcon",j)||{children:[],attributes:{}},z=X.children,re=X.attributes;return j.children=z,j.attributes=re,s?Zn(j):Jn(j)}function ta(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,f=s===void 0?!1:s,c=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[ke]="");var l=d({},o.styles);Mt(r)&&(l.transform=Sn({transform:r,startCentered:!0,width:a,height:n}),l["-webkit-transform"]=l.transform);var m=it(l);m.length>0&&(c.style=m);var k=[];return k.push({tag:"span",attributes:c,children:[t]}),i&&k.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),k}function Qn(e){var t=e.content,a=e.title,n=e.extra,r=d(d(d({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),i=it(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var dt=J.styles;function Pt(e){var t=e[0],a=e[1],n=e.slice(4),r=Lt(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(he.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(he.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(he.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var er={found:!1,width:512,height:512};function tr(e,t){!Aa&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function At(e,t){var a=t;return t==="fa"&&p.styleDefault!==null&&(t=de()),new Promise(function(n,r){if(ae("missingIconAbstract"),a==="fa"){var i=Da(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&dt[t]&&dt[t][e]){var o=dt[t][e];return n(Pt(o))}tr(e,t),n(d(d({},er),{},{icon:p.showMissingIcons&&e?ae("missingIconAbstract")||{}:{}}))})}var aa=function(){},Ct=p.measurePerformance&&Be&&Be.mark&&Be.measure?Be:{mark:aa,measure:aa},Te='FA "6.5.1"',ar=function(t){return Ct.mark("".concat(Te," ").concat(t," begins")),function(){return za(t)}},za=function(t){Ct.mark("".concat(Te," ").concat(t," ends")),Ct.measure("".concat(Te," ").concat(t),"".concat(Te," ").concat(t," begins"),"".concat(Te," ").concat(t," ends"))},$t={begin:ar,end:za},Qe=function(){};function na(e){var t=e.getAttribute?e.getAttribute(ke):null;return typeof t=="string"}function nr(e){var t=e.getAttribute?e.getAttribute(It):null,a=e.getAttribute?e.getAttribute(_t):null;return t&&a}function rr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function ir(){if(p.autoReplaceSvg===!0)return et.replace;var e=et[p.autoReplaceSvg];return e||et.replace}function or(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function sr(e){return T.createElement(e)}function Ya(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?or:sr:a;if(typeof e=="string")return T.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Ya(o,{ceFn:n}))}),r}function lr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var et={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Ya(r),a)}),a.getAttribute(ke)===null&&p.keepOriginalSource){var n=T.createComment(lr(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~jt(a).indexOf(p.replacementClass))return et.replace(t);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,f){return f===p.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return $e(s)}).join(`
`);a.setAttribute(ke,""),a.innerHTML=o}};function ra(e){e()}function $a(e,t){var a=typeof t=="function"?t:Qe;if(e.length===0)a();else{var n=ra;p.mutateApproach===mn&&(n=me.requestAnimationFrame||ra),n(function(){var r=ir(),i=$t.begin("mutate");e.map(r),i(),a()})}}var Ut=!1;function Ua(){Ut=!0}function Ot(){Ut=!1}var nt=null;function ia(e){if(qt&&p.observeMutations){var t=e.treeCallback,a=t===void 0?Qe:t,n=e.nodeCallback,r=n===void 0?Qe:n,i=e.pseudoElementsCallback,o=i===void 0?Qe:i,s=e.observeMutationsRoot,f=s===void 0?T:s;nt=new qt(function(c){if(!Ut){var l=de();Ne(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!na(m.addedNodes[0])&&(p.searchPseudoElements&&o(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&p.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&na(m.target)&&~yn.indexOf(m.attributeName))if(m.attributeName==="class"&&nr(m.target)){var k=st(jt(m.target)),b=k.prefix,A=k.iconName;m.target.setAttribute(It,b||l),A&&m.target.setAttribute(_t,A)}else rr(m.target)&&r(m.target)})}}),ne&&nt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fr(){nt&&nt.disconnect()}function cr(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function ur(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=st(jt(e));return r.prefix||(r.prefix=de()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Un(r.prefix,e.innerText)||Ft(r.prefix,yt(e.innerText))),!r.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function mr(e){var t=Ne(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return p.autoA11y&&(a?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(n||Fe()):(t["aria-hidden"]="true",t.focusable="false")),t}function dr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Q,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function oa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=ur(e),n=a.iconName,r=a.prefix,i=a.rest,o=mr(e),s=xt("parseNodeAttributes",{},e),f=t.styleParser?cr(e):[];return d({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Q,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var pr=J.styles;function Wa(e){var t=p.autoReplaceSvg==="nest"?oa(e,{styleParser:!1}):oa(e);return~t.extra.classes.indexOf(Ca)?ae("generateLayersText",e,t):ae("generateSvgReplacementMutation",e,t)}var pe=new Set;Rt.map(function(e){pe.add("fa-".concat(e))});Object.keys(Re[L]).map(pe.add.bind(pe));Object.keys(Re[D]).map(pe.add.bind(pe));pe=ze(pe);function sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ne)return Promise.resolve();var a=T.documentElement.classList,n=function(m){return a.add("".concat(Vt,"-").concat(m))},r=function(m){return a.remove("".concat(Vt,"-").concat(m))},i=p.autoFetchSvg?pe:Rt.map(function(l){return"fa-".concat(l)}).concat(Object.keys(pr));i.includes("fa")||i.push("fa");var o=[".".concat(Ca,":not([").concat(ke,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(ke,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ne(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var f=$t.begin("onTree"),c=s.reduce(function(l,m){try{var k=Wa(m);k&&l.push(k)}catch(b){Aa||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(k){$a(k,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),f(),l()})}).catch(function(k){f(),m(k)})})}function vr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wa(e).then(function(a){a&&$a([a],t)})}function gr(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:wt(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:wt(r||{})),e(n,d(d({},a),{},{mask:r}))}}var br=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?Q:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,c=a.maskId,l=c===void 0?null:c,m=a.title,k=m===void 0?null:m,b=a.titleId,A=b===void 0?null:b,I=a.classes,_=I===void 0?[]:I,R=a.attributes,N=R===void 0?{}:R,S=a.styles,W=S===void 0?{}:S;if(t){var j=t.prefix,X=t.iconName,z=t.icon;return lt(d({type:"icon"},t),function(){return xe("beforeDOMElementCreation",{iconDefinition:t,params:a}),p.autoA11y&&(k?N["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(A||Fe()):(N["aria-hidden"]="true",N.focusable="false")),Yt({icons:{main:Pt(z),mask:f?Pt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:j,iconName:X,transform:d(d({},Q),r),symbol:o,title:k,maskId:l,titleId:A,extra:{attributes:N,styles:W,classes:_}})})}},hr={mixout:function(){return{icon:gr(br)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=sa,a.nodeCallback=vr,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?T:n,i=a.callback,o=i===void 0?function(){}:i;return sa(r,o)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.title,o=n.titleId,s=n.prefix,f=n.transform,c=n.symbol,l=n.mask,m=n.maskId,k=n.extra;return new Promise(function(b,A){Promise.all([At(r,s),l.iconName?At(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var _=Lt(I,2),R=_[0],N=_[1];b([a,Yt({icons:{main:R,mask:N},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:i,titleId:o,extra:k,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=it(s);f.length>0&&(r.style=f);var c;return Mt(o)&&(c=ae("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:r}}}},yr={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return lt({type:"layer"},function(){xe("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(ze(i)).join(" ")},children:o}]})}}}},kr={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,o=n.classes,s=o===void 0?[]:o,f=n.attributes,c=f===void 0?{}:f,l=n.styles,m=l===void 0?{}:l;return lt({type:"counter",content:a},function(){return xe("beforeDOMElementCreation",{content:a,params:n}),Qn({content:a.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(ze(s))}})})}}}},xr={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Q:r,o=n.title,s=o===void 0?null:o,f=n.classes,c=f===void 0?[]:f,l=n.attributes,m=l===void 0?{}:l,k=n.styles,b=k===void 0?{}:k;return lt({type:"text",content:a},function(){return xe("beforeDOMElementCreation",{content:a,params:n}),ta({content:a,transform:d(d({},Q),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(p.cssPrefix,"-layers-text")].concat(ze(c))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.title,i=n.transform,o=n.extra,s=null,f=null;if(xa){var c=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();s=l.width/c,f=l.height/c}return p.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,ta({content:a.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},wr=new RegExp('"',"ug"),la=[1105920,1112319];function Pr(e){var t=e.replace(wr,""),a=Mn(t,0),n=a>=la[0]&&a<=la[1],r=t.length===2?t[0]===t[1]:!1;return{value:yt(r?t[0]:t),isSecondary:n||r}}function fa(e,t){var a="".concat(un).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=Ne(e.children),o=i.filter(function(z){return z.getAttribute(ht)===t})[0],s=me.getComputedStyle(e,t),f=s.getPropertyValue("font-family").match(gn),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),n();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),k=~["Sharp"].indexOf(f[2])?D:L,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?je[k][f[2].toLowerCase()]:bn[k][c],A=Pr(m),I=A.value,_=A.isSecondary,R=f[0].startsWith("FontAwesome"),N=Ft(b,I),S=N;if(R){var W=Wn(I);W.iconName&&W.prefix&&(N=W.iconName,b=W.prefix)}if(N&&!_&&(!o||o.getAttribute(It)!==b||o.getAttribute(_t)!==S)){e.setAttribute(a,S),o&&e.removeChild(o);var j=dr(),X=j.extra;X.attributes[ht]=t,At(N,b).then(function(z){var re=Yt(d(d({},j),{},{icons:{main:z,mask:zt()},prefix:b,iconName:S,extra:X,watchable:!0})),M=T.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=re.map(function(Se){return $e(Se)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function Ar(e){return Promise.all([fa(e,"::before"),fa(e,"::after")])}function Cr(e){return e.parentNode!==document.head&&!~dn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ht)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ca(e){if(ne)return new Promise(function(t,a){var n=Ne(e.querySelectorAll("*")).filter(Cr).map(Ar),r=$t.begin("searchPseudoElements");Ua(),Promise.all(n).then(function(){r(),Ot(),t()}).catch(function(){r(),Ot(),a()})})}var Or={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=ca,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?T:n;p.searchPseudoElements&&ca(r)}}},ua=!1,Er={mixout:function(){return{dom:{unwatch:function(){Ua(),ua=!0}}}},hooks:function(){return{bootstrap:function(){ia(xt("mutationObserverCallbacks",{}))},noAuto:function(){fr()},watch:function(a){var n=a.observeMutationsRoot;ua?Ot():ia(xt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},ma=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},Nr={mixout:function(){return{parse:{transform:function(a){return ma(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=ma(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},k={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:k};return{tag:"g",attributes:d({},b.outer),children:[{tag:"g",attributes:d({},b.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),b.path)}]}]}}}},pt={x:0,y:0,width:"100%",height:"100%"};function da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Sr(e){return e.tag==="g"?e.children:[e]}var Lr={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?st(r.split(" ").map(function(o){return o.trim()})):zt();return i.prefix||(i.prefix=de()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,c=i.width,l=i.icon,m=o.width,k=o.icon,b=Nn({transform:f,containerWidth:m,iconWidth:c}),A={tag:"rect",attributes:d(d({},pt),{},{fill:"white"})},I=l.children?{children:l.children.map(da)}:{},_={tag:"g",attributes:d({},b.inner),children:[da(d({tag:l.tag,attributes:d(d({},l.attributes),b.path)},I))]},R={tag:"g",attributes:d({},b.outer),children:[_]},N="mask-".concat(s||Fe()),S="clip-".concat(s||Fe()),W={tag:"mask",attributes:d(d({},pt),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,R]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Sr(k)},W]};return n.push(j,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(N,")")},pt)}),{children:n,attributes:r}}}},Tr={provides:function(t){var a=!1;me.matchMedia&&(a=me.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ir={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},_r=[Tn,hr,yr,kr,xr,Or,Er,Nr,Lr,Tr,Ir];Gn(_r,{mixoutsTo:G});G.noAuto;G.config;G.library;G.dom;var Et=G.parse;G.findIconDefinition;G.toHtml;var Rr=G.icon;G.layer;G.text;G.counter;var Ba={exports:{}},jr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Mr=jr,Dr=Mr;function Ha(){}function Ga(){}Ga.resetWarningCache=Ha;var Fr=function(){function e(n,r,i,o,s,f){if(f!==Dr){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ga,resetWarningCache:Ha};return a.PropTypes=a,a};Ba.exports=Fr();var zr=Ba.exports;const w=Za(zr);function pa(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?pa(Object(a),!0).forEach(function(n){Ce(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pa(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function rt(e){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(e)}function Ce(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Yr(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++)r=n[i],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function $r(e,t){if(e==null)return{};var a=Yr(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Nt(e){return Ur(e)||Wr(e)||Br(e)||Hr()}function Ur(e){if(Array.isArray(e))return St(e)}function Wr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Br(e,t){if(e){if(typeof e=="string")return St(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return St(e,t)}}function St(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Hr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gr(e){var t,a=e.beat,n=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,f=e.spin,c=e.spinPulse,l=e.spinReverse,m=e.pulse,k=e.fixedWidth,b=e.inverse,A=e.border,I=e.listItem,_=e.flip,R=e.size,N=e.rotation,S=e.pull,W=(t={"fa-beat":a,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":k,"fa-inverse":b,"fa-border":A,"fa-li":I,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},Ce(t,"fa-".concat(R),typeof R<"u"&&R!==null),Ce(t,"fa-rotate-".concat(N),typeof N<"u"&&N!==null&&N!==0),Ce(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),Ce(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(W).map(function(j){return W[j]?j:null}).filter(function(j){return j})}function Xr(e){return e=e-0,e===e}function Xa(e){return Xr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var qr=["style"];function Vr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Kr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var n=a.indexOf(":"),r=Xa(a.slice(0,n)),i=a.slice(n+1).trim();return r.startsWith("webkit")?t[Vr(r)]=i:t[r]=i,t},{})}function qa(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(f){return qa(e,f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var l=t.attributes[c];switch(c){case"class":f.attrs.className=l,delete t.attributes.class;break;case"style":f.attrs.style=Kr(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[Xa(c)]=l}return f},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=$r(a,qr);return r.attrs.style=ue(ue({},r.attrs.style),o),e.apply(void 0,[t.tag,ue(ue({},r.attrs),s)].concat(Nt(n)))}var Va=!1;try{Va=!0}catch{}function Jr(){if(!Va&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function va(e){if(e&&rt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Et.icon)return Et.icon(e);if(e===null)return null;if(e&&rt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function vt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ce({},e,t):{}}var ft=ga.forwardRef(function(e,t){var a=e.icon,n=e.mask,r=e.symbol,i=e.className,o=e.title,s=e.titleId,f=e.maskId,c=va(a),l=vt("classes",[].concat(Nt(Gr(e)),Nt(i.split(" ")))),m=vt("transform",typeof e.transform=="string"?Et.transform(e.transform):e.transform),k=vt("mask",va(n)),b=Rr(c,ue(ue(ue(ue({},l),m),k),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!b)return Jr("Could not find icon",c),null;var A=b.abstract,I={ref:t};return Object.keys(e).forEach(function(_){ft.defaultProps.hasOwnProperty(_)||(I[_]=e[_])}),Zr(A[0],I)});ft.displayName="FontAwesomeIcon";ft.propTypes={beat:w.bool,border:w.bool,beatFade:w.bool,bounce:w.bool,className:w.string,fade:w.bool,flash:w.bool,mask:w.oneOfType([w.object,w.array,w.string]),maskId:w.string,fixedWidth:w.bool,inverse:w.bool,flip:w.oneOf([!0,!1,"horizontal","vertical","both"]),icon:w.oneOfType([w.object,w.array,w.string]),listItem:w.bool,pull:w.oneOf(["right","left"]),pulse:w.bool,rotation:w.oneOf([0,90,180,270]),shake:w.bool,size:w.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:w.bool,spinPulse:w.bool,spinReverse:w.bool,symbol:w.oneOfType([w.bool,w.string]),title:w.string,titleId:w.string,transform:w.oneOfType([w.string,w.object]),swapOpacity:w.bool};ft.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Zr=qa.bind(null,ga.createElement),Qr={exports:{}};(function(e,t){(function(a,n){e.exports=n(Qa)})(en,a=>(()=>{var n={703:(s,f,c)=>{var l=c(414);function m(){}function k(){}k.resetWarningCache=m,s.exports=function(){function b(_,R,N,S,W,j){if(j!==l){var X=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw X.name="Invariant Violation",X}}function A(){return b}b.isRequired=b;var I={array:b,bigint:b,bool:b,func:b,number:b,object:b,string:b,symbol:b,any:b,arrayOf:A,element:b,elementType:b,instanceOf:A,node:b,objectOf:A,oneOf:A,oneOfType:A,shape:A,exact:A,checkPropTypes:k,resetWarningCache:m};return I.PropTypes=I,I}},697:(s,f,c)=>{s.exports=c(703)()},414:s=>{s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:s=>{s.exports=a}},r={};function i(s){var f=r[s];if(f!==void 0)return f.exports;var c=r[s]={exports:{}};return n[s](c,c.exports,i),c.exports}i.n=s=>{var f=s&&s.__esModule?()=>s.default:()=>s;return i.d(f,{a:f}),f},i.d=(s,f)=>{for(var c in f)i.o(f,c)&&!i.o(s,c)&&Object.defineProperty(s,c,{enumerable:!0,get:f[c]})},i.o=(s,f)=>Object.prototype.hasOwnProperty.call(s,f),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{default:()=>Ka});var s=i(98),f=i.n(s),c=i(697),l=i.n(c);function m(){return m=Object.assign?Object.assign.bind():function(g){for(var y=1;y<arguments.length;y++){var P=arguments[y];for(var C in P)Object.prototype.hasOwnProperty.call(P,C)&&(g[C]=P[C])}return g},m.apply(this,arguments)}var k=function(g){var y=g.pageClassName,P=g.pageLinkClassName,C=g.page,ve=g.selected,ge=g.activeClassName,K=g.activeLinkClassName,v=g.getEventListener,u=g.pageSelectedHandler,E=g.href,h=g.extraAriaContext,x=g.pageLabelBuilder,O=g.rel,Y=g.ariaLabel||"Page "+C+(h?" "+h:""),B=null;return ve&&(B="page",Y=g.ariaLabel||"Page "+C+" is your current page",y=y!==void 0?y+" "+ge:ge,P!==void 0?K!==void 0&&(P=P+" "+K):P=K),f().createElement("li",{className:y},f().createElement("a",m({rel:O,role:E?void 0:"button",className:P,href:E,tabIndex:ve?"-1":"0","aria-label":Y,"aria-current":B,onKeyPress:u},v(u)),x(C)))};k.propTypes={pageSelectedHandler:l().func.isRequired,selected:l().bool.isRequired,pageClassName:l().string,pageLinkClassName:l().string,activeClassName:l().string,activeLinkClassName:l().string,extraAriaContext:l().string,href:l().string,ariaLabel:l().string,page:l().number.isRequired,getEventListener:l().func.isRequired,pageLabelBuilder:l().func.isRequired,rel:l().string};const b=k;function A(){return A=Object.assign?Object.assign.bind():function(g){for(var y=1;y<arguments.length;y++){var P=arguments[y];for(var C in P)Object.prototype.hasOwnProperty.call(P,C)&&(g[C]=P[C])}return g},A.apply(this,arguments)}var I=function(g){var y=g.breakLabel,P=g.breakAriaLabel,C=g.breakClassName,ve=g.breakLinkClassName,ge=g.breakHandler,K=g.getEventListener,v=C||"break";return f().createElement("li",{className:v},f().createElement("a",A({className:ve,role:"button",tabIndex:"0","aria-label":P,onKeyPress:ge},K(ge)),y))};I.propTypes={breakLabel:l().oneOfType([l().string,l().node]),breakAriaLabel:l().string,breakClassName:l().string,breakLinkClassName:l().string,breakHandler:l().func.isRequired,getEventListener:l().func.isRequired};const _=I;function R(g){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return g??y}function N(g){return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},N(g)}function S(){return S=Object.assign?Object.assign.bind():function(g){for(var y=1;y<arguments.length;y++){var P=arguments[y];for(var C in P)Object.prototype.hasOwnProperty.call(P,C)&&(g[C]=P[C])}return g},S.apply(this,arguments)}function W(g,y){for(var P=0;P<y.length;P++){var C=y[P];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(g,C.key,C)}}function j(g,y){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(P,C){return P.__proto__=C,P},j(g,y)}function X(g,y){if(y&&(N(y)==="object"||typeof y=="function"))return y;if(y!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return z(g)}function z(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function re(g){return re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(y){return y.__proto__||Object.getPrototypeOf(y)},re(g)}function M(g,y,P){return y in g?Object.defineProperty(g,y,{value:P,enumerable:!0,configurable:!0,writable:!0}):g[y]=P,g}var Se=function(g){(function(v,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");v.prototype=Object.create(u&&u.prototype,{constructor:{value:v,writable:!0,configurable:!0}}),Object.defineProperty(v,"prototype",{writable:!1}),u&&j(v,u)})(K,g);var y,P,C,ve,ge=(C=K,ve=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var v,u=re(C);if(ve){var E=re(this).constructor;v=Reflect.construct(u,arguments,E)}else v=u.apply(this,arguments);return X(this,v)});function K(v){var u,E;return function(h,x){if(!(h instanceof x))throw new TypeError("Cannot call a class as a function")}(this,K),M(z(u=ge.call(this,v)),"handlePreviousPage",function(h){var x=u.state.selected;u.handleClick(h,null,x>0?x-1:void 0,{isPrevious:!0})}),M(z(u),"handleNextPage",function(h){var x=u.state.selected,O=u.props.pageCount;u.handleClick(h,null,x<O-1?x+1:void 0,{isNext:!0})}),M(z(u),"handlePageSelected",function(h,x){if(u.state.selected===h)return u.callActiveCallback(h),void u.handleClick(x,null,void 0,{isActive:!0});u.handleClick(x,null,h)}),M(z(u),"handlePageChange",function(h){u.state.selected!==h&&(u.setState({selected:h}),u.callCallback(h))}),M(z(u),"getEventListener",function(h){return M({},u.props.eventListener,h)}),M(z(u),"handleClick",function(h,x,O){var Y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},B=Y.isPrevious,Z=B!==void 0&&B,we=Y.isNext,Le=we!==void 0&&we,be=Y.isBreak,q=be!==void 0&&be,ie=Y.isActive,oe=ie!==void 0&&ie;h.preventDefault?h.preventDefault():h.returnValue=!1;var se=u.state.selected,F=u.props.onClick,V=O;if(F){var H=F({index:x,selected:se,nextSelectedPage:O,event:h,isPrevious:Z,isNext:Le,isBreak:q,isActive:oe});if(H===!1)return;Number.isInteger(H)&&(V=H)}V!==void 0&&u.handlePageChange(V)}),M(z(u),"handleBreakClick",function(h,x){var O=u.state.selected;u.handleClick(x,h,O<h?u.getForwardJump():u.getBackwardJump(),{isBreak:!0})}),M(z(u),"callCallback",function(h){u.props.onPageChange!==void 0&&typeof u.props.onPageChange=="function"&&u.props.onPageChange({selected:h})}),M(z(u),"callActiveCallback",function(h){u.props.onPageActive!==void 0&&typeof u.props.onPageActive=="function"&&u.props.onPageActive({selected:h})}),M(z(u),"getElementPageRel",function(h){var x=u.state.selected,O=u.props,Y=O.nextPageRel,B=O.prevPageRel,Z=O.selectedPageRel;return x-1===h?B:x===h?Z:x+1===h?Y:void 0}),M(z(u),"pagination",function(){var h=[],x=u.props,O=x.pageRangeDisplayed,Y=x.pageCount,B=x.marginPagesDisplayed,Z=x.breakLabel,we=x.breakClassName,Le=x.breakLinkClassName,be=x.breakAriaLabels,q=u.state.selected;if(Y<=O)for(var ie=0;ie<Y;ie++)h.push(u.getPageElement(ie));else{var oe=O/2,se=O-oe;q>Y-O/2?oe=O-(se=Y-q):q<O/2&&(se=O-(oe=q));var F,V,H=function(le){return u.getPageElement(le)},$=[];for(F=0;F<Y;F++){var Ue=F+1;if(Ue<=B)$.push({type:"page",index:F,display:H(F)});else if(Ue>Y-B)$.push({type:"page",index:F,display:H(F)});else if(F>=q-oe&&F<=q+(q===0&&O>1?se-1:se))$.push({type:"page",index:F,display:H(F)});else if(Z&&$.length>0&&$[$.length-1].display!==V&&(O>0||B>0)){var ct=F<q?be.backward:be.forward;V=f().createElement(_,{key:F,breakAriaLabel:ct,breakLabel:Z,breakClassName:we,breakLinkClassName:Le,breakHandler:u.handleBreakClick.bind(null,F),getEventListener:u.getEventListener}),$.push({type:"break",index:F,display:V})}}$.forEach(function(le,fe){var We=le;le.type==="break"&&$[fe-1]&&$[fe-1].type==="page"&&$[fe+1]&&$[fe+1].type==="page"&&$[fe+1].index-$[fe-1].index<=2&&(We={type:"page",index:le.index,display:H(le.index)}),h.push(We.display)})}return h}),v.initialPage!==void 0&&v.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(v.initialPage,") and forcePage (").concat(v.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),E=v.initialPage?v.initialPage:v.forcePage?v.forcePage:0,u.state={selected:E},u}return y=K,(P=[{key:"componentDidMount",value:function(){var v=this.props,u=v.initialPage,E=v.disableInitialCallback,h=v.extraAriaContext,x=v.pageCount,O=v.forcePage;u===void 0||E||this.callCallback(u),h&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(x)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(x,"). Did you forget a Math.ceil()?")),u!==void 0&&u>x-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(u," > ").concat(x-1,").")),O!==void 0&&O>x-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(O," > ").concat(x-1,")."))}},{key:"componentDidUpdate",value:function(v){this.props.forcePage!==void 0&&this.props.forcePage!==v.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(v.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var v=this.state.selected,u=this.props,E=u.pageCount,h=v+u.pageRangeDisplayed;return h>=E?E-1:h}},{key:"getBackwardJump",value:function(){var v=this.state.selected-this.props.pageRangeDisplayed;return v<0?0:v}},{key:"getElementHref",value:function(v){var u=this.props,E=u.hrefBuilder,h=u.pageCount,x=u.hrefAllControls;if(E)return x||v>=0&&v<h?E(v+1,h,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(v){var u=v===this.state.selected;if(this.props.ariaLabelBuilder&&v>=0&&v<this.props.pageCount){var E=this.props.ariaLabelBuilder(v+1,u);return this.props.extraAriaContext&&!u&&(E=E+" "+this.props.extraAriaContext),E}}},{key:"getPageElement",value:function(v){var u=this.state.selected,E=this.props,h=E.pageClassName,x=E.pageLinkClassName,O=E.activeClassName,Y=E.activeLinkClassName,B=E.extraAriaContext,Z=E.pageLabelBuilder;return f().createElement(b,{key:v,pageSelectedHandler:this.handlePageSelected.bind(null,v),selected:u===v,rel:this.getElementPageRel(v),pageClassName:h,pageLinkClassName:x,activeClassName:O,activeLinkClassName:Y,extraAriaContext:B,href:this.getElementHref(v),ariaLabel:this.ariaLabelBuilder(v),page:v+1,pageLabelBuilder:Z,getEventListener:this.getEventListener})}},{key:"render",value:function(){var v=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&v!==void 0)return v&&v(this.props);var u=this.props,E=u.disabledClassName,h=u.disabledLinkClassName,x=u.pageCount,O=u.className,Y=u.containerClassName,B=u.previousLabel,Z=u.previousClassName,we=u.previousLinkClassName,Le=u.previousAriaLabel,be=u.prevRel,q=u.nextLabel,ie=u.nextClassName,oe=u.nextLinkClassName,se=u.nextAriaLabel,F=u.nextRel,V=this.state.selected,H=V===0,$=V===x-1,Ue="".concat(R(Z)).concat(H?" ".concat(R(E)):""),ct="".concat(R(ie)).concat($?" ".concat(R(E)):""),le="".concat(R(we)).concat(H?" ".concat(R(h)):""),fe="".concat(R(oe)).concat($?" ".concat(R(h)):""),We=H?"true":"false",Ja=$?"true":"false";return f().createElement("ul",{className:O||Y,role:"navigation","aria-label":"Pagination"},f().createElement("li",{className:Ue},f().createElement("a",S({className:le,href:this.getElementHref(V-1),tabIndex:H?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":We,"aria-label":Le,rel:be},this.getEventListener(this.handlePreviousPage)),B)),this.pagination(),f().createElement("li",{className:ct},f().createElement("a",S({className:fe,href:this.getElementHref(V+1),tabIndex:$?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":Ja,"aria-label":se,rel:F},this.getEventListener(this.handleNextPage)),q)))}}])&&W(y.prototype,P),Object.defineProperty(y,"prototype",{writable:!1}),K}(s.Component);M(Se,"propTypes",{pageCount:l().number.isRequired,pageRangeDisplayed:l().number,marginPagesDisplayed:l().number,previousLabel:l().node,previousAriaLabel:l().string,prevPageRel:l().string,prevRel:l().string,nextLabel:l().node,nextAriaLabel:l().string,nextPageRel:l().string,nextRel:l().string,breakLabel:l().oneOfType([l().string,l().node]),breakAriaLabels:l().shape({forward:l().string,backward:l().string}),hrefBuilder:l().func,hrefAllControls:l().bool,onPageChange:l().func,onPageActive:l().func,onClick:l().func,initialPage:l().number,forcePage:l().number,disableInitialCallback:l().bool,containerClassName:l().string,className:l().string,pageClassName:l().string,pageLinkClassName:l().string,pageLabelBuilder:l().func,activeClassName:l().string,activeLinkClassName:l().string,previousClassName:l().string,nextClassName:l().string,previousLinkClassName:l().string,nextLinkClassName:l().string,disabledClassName:l().string,disabledLinkClassName:l().string,breakClassName:l().string,breakLinkClassName:l().string,extraAriaContext:l().string,ariaLabelBuilder:l().func,eventListener:l().string,renderOnZeroPageCount:l().func,selectedPageRel:l().string}),M(Se,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(g){return g},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const Ka=Se})(),o})())})(Qr);export{ft as F};
