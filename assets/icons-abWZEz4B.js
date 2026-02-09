import{d as La,w as za,c as Y,h as Da}from"./vendor-D_LTRO9P.js";function Ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function Ra(e){if(Array.isArray(e))return e}function Wa(e){if(Array.isArray(e))return Ie(e)}function Ua(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ya(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Nt(r.key),r)}}function Ba(e,t,a){return t&&Ya(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Ue(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function g(e,t,a){return(t=Nt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Ha(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ga(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,n=c}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function Ka(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function et(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?et(Object(a),!0).forEach(function(r){g(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):et(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function de(e,t){return Ra(e)||Ga(e,t)||Ue(e,t)||Ka()}function C(e){return Wa(e)||Ha(e)||Ue(e)||Xa()}function Va(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nt(e){var t=Va(e,"string");return typeof t=="symbol"?t:t+""}function le(e){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},le(e)}function Ue(e,t){if(e){if(typeof e=="string")return Ie(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ie(e,t):void 0}}var tt=function(){},Ye={},_t={},Tt=null,Mt={mark:tt,measure:tt};try{typeof window<"u"&&(Ye=window),typeof document<"u"&&(_t=document),typeof MutationObserver<"u"&&(Tt=MutationObserver),typeof performance<"u"&&(Mt=performance)}catch{}var Ja=Ye.navigator||{},at=Ja.userAgent,rt=at===void 0?"":at,$=Ye,x=_t,nt=Tt,re=Mt;$.document;var M=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",$t=~rt.indexOf("MSIE")||~rt.indexOf("Trident/"),ye,qa=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Qa=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Lt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Za={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},zt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],k="classic",ee="duotone",Dt="sharp",Rt="sharp-duotone",Wt="chisel",Ut="etch",Yt="jelly",Bt="jelly-duo",Ht="jelly-fill",Gt="notdog",Kt="notdog-duo",Xt="slab",Vt="slab-press",Jt="thumbprint",qt="utility",Qt="utility-duo",Zt="utility-fill",ea="whiteboard",er="Classic",tr="Duotone",ar="Sharp",rr="Sharp Duotone",nr="Chisel",ir="Etch",or="Jelly",sr="Jelly Duo",lr="Jelly Fill",fr="Notdog",ur="Notdog Duo",cr="Slab",dr="Slab Press",mr="Thumbprint",vr="Utility",hr="Utility Duo",gr="Utility Fill",pr="Whiteboard",ta=[k,ee,Dt,Rt,Wt,Ut,Yt,Bt,Ht,Gt,Kt,Xt,Vt,Jt,qt,Qt,Zt,ea];ye={},g(g(g(g(g(g(g(g(g(g(ye,k,er),ee,tr),Dt,ar),Rt,rr),Wt,nr),Ut,ir),Yt,or),Bt,sr),Ht,lr),Gt,fr),g(g(g(g(g(g(g(g(ye,Kt,ur),Xt,cr),Vt,dr),Jt,mr),qt,vr),Qt,hr),Zt,gr),ea,pr);var yr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},br={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},xr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),wr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},aa=["fak","fa-kit","fakd","fa-kit-duotone"],it={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Sr=["kit"],Ar="kit",kr="kit-duotone",Pr="Kit",Ir="Kit Duotone";g(g({},Ar,Pr),kr,Ir);var Or={kit:{"fa-kit":"fak"}},Er={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Fr={kit:{fak:"fa-kit"}},ot={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},be,ne={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Cr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],jr="classic",Nr="duotone",_r="sharp",Tr="sharp-duotone",Mr="chisel",$r="etch",Lr="jelly",zr="jelly-duo",Dr="jelly-fill",Rr="notdog",Wr="notdog-duo",Ur="slab",Yr="slab-press",Br="thumbprint",Hr="utility",Gr="utility-duo",Kr="utility-fill",Xr="whiteboard",Vr="Classic",Jr="Duotone",qr="Sharp",Qr="Sharp Duotone",Zr="Chisel",en="Etch",tn="Jelly",an="Jelly Duo",rn="Jelly Fill",nn="Notdog",on="Notdog Duo",sn="Slab",ln="Slab Press",fn="Thumbprint",un="Utility",cn="Utility Duo",dn="Utility Fill",mn="Whiteboard";be={},g(g(g(g(g(g(g(g(g(g(be,jr,Vr),Nr,Jr),_r,qr),Tr,Qr),Mr,Zr),$r,en),Lr,tn),zr,an),Dr,rn),Rr,nn),g(g(g(g(g(g(g(g(be,Wr,on),Ur,sn),Yr,ln),Br,fn),Hr,un),Gr,cn),Kr,dn),Xr,mn);var vn="kit",hn="kit-duotone",gn="Kit",pn="Kit Duotone";g(g({},vn,gn),hn,pn);var yn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},bn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Oe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},xn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ra=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Cr,xn),wn=["solid","regular","light","thin","duotone","brands","semibold"],na=[1,2,3,4,5,6,7,8,9,10],Sn=na.concat([11,12,13,14,15,16,17,18,19,20]),An=["aw","fw","pull-left","pull-right"],kn=[].concat(C(Object.keys(bn)),wn,An,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ne.GROUP,ne.SWAP_OPACITY,ne.PRIMARY,ne.SECONDARY]).concat(na.map(function(e){return"".concat(e,"x")})).concat(Sn.map(function(e){return"w-".concat(e)})),Pn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_="___FONT_AWESOME___",Ee=16,ia="fa",oa="svg-inline--fa",R="data-fa-i2svg",Fe="data-fa-pseudo-element",In="data-fa-pseudo-element-pending",Be="data-prefix",He="data-icon",st="fontawesome-i2svg",On="async",En=["HTML","HEAD","STYLE","SCRIPT"],sa=["::before","::after",":before",":after"],la=(function(){try{return!0}catch{return!1}})();function te(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[k]}})}var fa=f({},Lt);fa[k]=f(f(f(f({},{"fa-duotone":"duotone"}),Lt[k]),it.kit),it["kit-duotone"]);var Fn=te(fa),Ce=f({},wr);Ce[k]=f(f(f(f({},{duotone:"fad"}),Ce[k]),ot.kit),ot["kit-duotone"]);var lt=te(Ce),je=f({},Oe);je[k]=f(f({},je[k]),Fr.kit);var Ge=te(je),Ne=f({},yn);Ne[k]=f(f({},Ne[k]),Or.kit);te(Ne);var Cn=qa,ua="fa-layers-text",jn=Qa,Nn=f({},yr);te(Nn);var _n=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xe=Za,Tn=[].concat(C(Sr),C(kn)),q=$.FontAwesomeConfig||{};function Mn(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $n(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Ln=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ln.forEach(function(e){var t=de(e,2),a=t[0],r=t[1],n=$n(Mn(a));n!=null&&(q[r]=n)})}var ca={styleDefault:"solid",familyDefault:k,cssPrefix:ia,replacementClass:oa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};q.familyPrefix&&(q.cssPrefix=q.familyPrefix);var K=f(f({},ca),q);K.autoReplaceSvg||(K.observeMutations=!1);var v={};Object.keys(ca).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(a){K[e]=a,Q.forEach(function(r){return r(v)})},get:function(){return K[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){K.cssPrefix=t,Q.forEach(function(a){return a(v)})},get:function(){return K.cssPrefix}});$.FontAwesomeConfig=v;var Q=[];function zn(e){return Q.push(e),function(){Q.splice(Q.indexOf(e),1)}}var B=Ee,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dn(e){if(!(!e||!M)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=x.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return x.head.insertBefore(t,r),e}}var Rn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ft(){for(var e=12,t="";e-- >0;)t+=Rn[Math.random()*62|0];return t}function X(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Ke(e){return e.classList?X(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function da(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(da(e[a]),'" ')},"").trim()}function me(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Xe(e){return e.size!==j.size||e.x!==j.x||e.y!==j.y||e.rotate!==j.rotate||e.flipX||e.flipY}function Un(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function Yn(e){var t=e.transform,a=e.width,r=a===void 0?Ee:a,n=e.height,i=n===void 0?Ee:n,o="";return $t?o+="translate(".concat(t.x/B-r/2,"em, ").concat(t.y/B-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/B,"em), calc(-50% + ").concat(t.y/B,"em)) "),o+="scale(".concat(t.size/B*(t.flipX?-1:1),", ").concat(t.size/B*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Bn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
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
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
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
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ma(){var e=ia,t=oa,a=v.cssPrefix,r=v.replacementClass,n=Bn;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var ut=!1;function we(){v.autoAddCss&&!ut&&(Dn(ma()),ut=!0)}var Hn={mixout:function(){return{dom:{css:ma,insertCss:we}}},hooks:function(){return{beforeDOMElementCreation:function(){we()},beforeI2svg:function(){we()}}}},T=$||{};T[_]||(T[_]={});T[_].styles||(T[_].styles={});T[_].hooks||(T[_].hooks={});T[_].shims||(T[_].shims=[]);var F=T[_],va=[],ha=function(){x.removeEventListener("DOMContentLoaded",ha),fe=1,va.map(function(t){return t()})},fe=!1;M&&(fe=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),fe||x.addEventListener("DOMContentLoaded",ha));function Gn(e){M&&(fe?setTimeout(e,0):va.push(e))}function ae(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?da(e):"<".concat(t," ").concat(Wn(r),">").concat(i.map(ae).join(""),"</").concat(t,">")}function ct(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Se=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function ga(e){return C(e).length!==1?null:e.codePointAt(0).toString(16)}function dt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function _e(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=dt(t);typeof F.hooks.addPack=="function"&&!n?F.hooks.addPack(e,dt(t)):F.styles[e]=f(f({},F.styles[e]||{}),i),e==="fas"&&_e("fa",t)}var Z=F.styles,Kn=F.shims,pa=Object.keys(Ge),Xn=pa.reduce(function(e,t){return e[t]=Object.keys(Ge[t]),e},{}),Ve=null,ya={},ba={},xa={},wa={},Sa={};function Vn(e){return~Tn.indexOf(e)}function Jn(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!Vn(n)?n:null}var Aa=function(){var t=function(i){return Se(Z,function(o,s,l){return o[l]=Se(s,i,{}),o},{})};ya=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),ba=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Sa=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in Z||v.autoFetchSvg,r=Se(Kn,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});xa=r.names,wa=r.unicodes,Ve=ve(v.styleDefault,{family:v.familyDefault})};zn(function(e){Ve=ve(e.styleDefault,{family:v.familyDefault})});Aa();function Je(e,t){return(ya[e]||{})[t]}function qn(e,t){return(ba[e]||{})[t]}function D(e,t){return(Sa[e]||{})[t]}function ka(e){return xa[e]||{prefix:null,iconName:null}}function Qn(e){var t=wa[e],a=Je("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function L(){return Ve}var Pa=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(e){var t=k,a=pa.reduce(function(r,n){return r[n]="".concat(v.cssPrefix,"-").concat(n),r},{});return ta.forEach(function(r){(e.includes(a[r])||e.some(function(n){return Xn[r].includes(n)}))&&(t=r)}),t}function ve(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?k:a,n=Fn[r][e];if(r===ee&&!e)return"fad";var i=lt[r][e]||lt[r][n],o=e in F.styles?e:null,s=i||o||null;return s}function ei(e){var t=[],a=null;return e.forEach(function(r){var n=Jn(v.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function mt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var vt=ra.concat(aa);function he(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=mt(e.filter(function(p){return vt.includes(p)})),o=mt(e.filter(function(p){return!vt.includes(p)})),s=i.filter(function(p){return n=p,!zt.includes(p)}),l=de(s,1),u=l[0],c=u===void 0?null:u,m=Zn(i),y=f(f({},ei(o)),{},{prefix:ve(c,{family:m})});return f(f(f({},y),ni({values:e,family:m,styles:Z,config:v,canonical:y,givenPrefix:n})),ti(r,n,y))}function ti(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?ka(n):{},o=D(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!Z.far&&Z.fas&&!v.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var ai=ta.filter(function(e){return e!==k||e!==ee}),ri=Object.keys(Oe).filter(function(e){return e!==k}).map(function(e){return Object.keys(Oe[e])}).flat();function ni(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,c=a===ee,m=t.includes("fa-duotone")||t.includes("fad"),y=u.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(m||y||p)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ai.includes(a)){var S=Object.keys(s).find(function(A){return ri.includes(A)});if(S||u.autoFetchSvg){var b=xr.get(a).defaultShortPrefixId;r.prefix=b,r.iconName=D(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=L()||"fas"),r}var ii=(function(){function e(){Ua(this,e),this.definitions={}}return Ba(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),_e(s,o[s]);var l=Ge[k][s];l&&_e(l,o[s]),Aa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(a[s][m]=u)}),a[s][l]=u}),a}}])})(),ht=[],H={},G={},oi=Object.keys(G);function si(e,t){var a=t.mixoutsTo;return ht=e,H={},Object.keys(G).forEach(function(r){oi.indexOf(r)===-1&&delete G[r]}),ht.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),le(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){H[o]||(H[o]=[]),H[o].push(i[o])})}r.provides&&r.provides(G)}),a}function Te(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=H[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function W(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=H[e]||[];n.forEach(function(i){i.apply(null,a)})}function z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return G[e]?G[e].apply(null,t):void 0}function Me(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||L();if(t)return t=D(a,t)||t,ct(Ia.definitions,a,t)||ct(F.styles,a,t)}var Ia=new ii,li=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,W("noAuto")},fi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(W("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Gn(function(){ci({autoReplaceSvgRoot:a}),W("watch",t)})}},ui={icon:function(t){if(t===null)return null;if(le(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:D(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ve(t[0]);return{prefix:r,iconName:D(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(Cn))){var n=he(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||L(),iconName:D(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=L();return{prefix:i,iconName:D(i,t)||t}}}},E={noAuto:li,config:v,dom:fi,parse:ui,library:Ia,findIconDefinition:Me,toHtml:ae},ci=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?x:a;(Object.keys(F.styles).length>0||v.autoFetchSvg)&&M&&v.autoReplaceSvg&&E.dom.i2svg({node:r})};function ge(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ae(r)})}}),Object.defineProperty(e,"node",{get:function(){if(M){var r=x.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function di(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(Xe(o)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=me(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function mi(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:o}),children:r}]}]}function vi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function qe(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,c=e.watchable,m=c===void 0?!1:c,y=r.found?r:a,p=y.width,S=y.height,b=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(O){return u.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(u.classes).join(" "),A={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(S)})};!vi(u.attributes)&&!u.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),m&&(A.attributes[R]="");var d=f(f({},A),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),h=r.found&&a.found?z("generateAbstractMask",d)||{children:[],attributes:{}}:z("generateAbstractIcon",d)||{children:[],attributes:{}},w=h.children,P=h.attributes;return d.children=w,d.attributes=P,s?mi(d):di(d)}function gt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[R]="");var u=f({},i.styles);Xe(n)&&(u.transform=Yn({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var c=me(u);c.length>0&&(l.style=c);var m=[];return m.push({tag:"span",attributes:l,children:[t]}),m}function hi(e){var t=e.content,a=e.extra,r=f(f({},a.attributes),{},{class:a.classes.join(" ")}),n=me(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Ae=F.styles;function $e(e){var t=e[0],a=e[1],r=e.slice(4),n=de(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(xe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(xe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(xe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var gi={found:!1,width:512,height:512};function pi(e,t){!la&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Le(e,t){var a=t;return t==="fa"&&v.styleDefault!==null&&(t=L()),new Promise(function(r,n){if(a==="fa"){var i=ka(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ae[t]&&Ae[t][e]){var o=Ae[t][e];return r($e(o))}pi(e,t),r(f(f({},gi),{},{icon:v.showMissingIcons&&e?z("missingIconAbstract")||{}:{}}))})}var pt=function(){},ze=v.measurePerformance&&re&&re.mark&&re.measure?re:{mark:pt,measure:pt},J='FA "7.1.0"',yi=function(t){return ze.mark("".concat(J," ").concat(t," begins")),function(){return Oa(t)}},Oa=function(t){ze.mark("".concat(J," ").concat(t," ends")),ze.measure("".concat(J," ").concat(t),"".concat(J," ").concat(t," begins"),"".concat(J," ").concat(t," ends"))},Qe={begin:yi,end:Oa},oe=function(){};function yt(e){var t=e.getAttribute?e.getAttribute(R):null;return typeof t=="string"}function bi(e){var t=e.getAttribute?e.getAttribute(Be):null,a=e.getAttribute?e.getAttribute(He):null;return t&&a}function xi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function wi(){if(v.autoReplaceSvg===!0)return se.replace;var e=se[v.autoReplaceSvg];return e||se.replace}function Si(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function Ai(e){return x.createElement(e)}function Ea(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Si:Ai:a;if(typeof e=="string")return x.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Ea(o,{ceFn:r}))}),n}function ki(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var se={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Ea(n),a)}),a.getAttribute(R)===null&&v.keepOriginalSource){var r=x.createComment(ki(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~Ke(a).indexOf(v.replacementClass))return se.replace(t);var n=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ae(s)}).join(`
`);a.setAttribute(R,""),a.innerHTML=o}};function bt(e){e()}function Fa(e,t){var a=typeof t=="function"?t:oe;if(e.length===0)a();else{var r=bt;v.mutateApproach===On&&(r=$.requestAnimationFrame||bt),r(function(){var n=wi(),i=Qe.begin("mutate");e.map(n),i(),a()})}}var Ze=!1;function Ca(){Ze=!0}function De(){Ze=!1}var ue=null;function xt(e){if(nt&&v.observeMutations){var t=e.treeCallback,a=t===void 0?oe:t,r=e.nodeCallback,n=r===void 0?oe:r,i=e.pseudoElementsCallback,o=i===void 0?oe:i,s=e.observeMutationsRoot,l=s===void 0?x:s;ue=new nt(function(u){if(!Ze){var c=L();X(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!yt(m.addedNodes[0])&&(v.searchPseudoElements&&o(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&o([m.target],!0),m.type==="attributes"&&yt(m.target)&&~_n.indexOf(m.attributeName))if(m.attributeName==="class"&&bi(m.target)){var y=he(Ke(m.target)),p=y.prefix,S=y.iconName;m.target.setAttribute(Be,p||c),S&&m.target.setAttribute(He,S)}else xi(m.target)&&n(m.target)})}}),M&&ue.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pi(){ue&&ue.disconnect()}function Ii(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function Oi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=he(Ke(e));return n.prefix||(n.prefix=L()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=qn(n.prefix,e.innerText)||Je(n.prefix,ga(e.innerText))),!n.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Ei(e){var t=X(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function Fi(){return{iconName:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Oi(e),r=a.iconName,n=a.prefix,i=a.rest,o=Ei(e),s=Te("parseNodeAttributes",{},e),l=t.styleParser?Ii(e):[];return f({iconName:r,prefix:n,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ci=F.styles;function ja(e){var t=v.autoReplaceSvg==="nest"?wt(e,{styleParser:!1}):wt(e);return~t.extra.classes.indexOf(ua)?z("generateLayersText",e,t):z("generateSvgReplacementMutation",e,t)}function ji(){return[].concat(C(aa),C(ra))}function St(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var a=x.documentElement.classList,r=function(m){return a.add("".concat(st,"-").concat(m))},n=function(m){return a.remove("".concat(st,"-").concat(m))},i=v.autoFetchSvg?ji():zt.concat(Object.keys(Ci));i.includes("fa")||i.push("fa");var o=[".".concat(ua,":not([").concat(R,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(R,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=X(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=Qe.begin("onTree"),u=s.reduce(function(c,m){try{var y=ja(m);y&&c.push(y)}catch(p){la||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(y){Fa(y,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(y){l(),m(y)})})}function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ja(e).then(function(a){a&&Fa([a],t)})}function _i(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Me(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Me(n||{})),e(r,f(f({},a),{},{mask:n}))}}var Ti=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?j:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,c=u===void 0?null:u,m=a.classes,y=m===void 0?[]:m,p=a.attributes,S=p===void 0?{}:p,b=a.styles,A=b===void 0?{}:b;if(t){var d=t.prefix,h=t.iconName,w=t.icon;return ge(f({type:"icon"},t),function(){return W("beforeDOMElementCreation",{iconDefinition:t,params:a}),qe({icons:{main:$e(w),mask:l?$e(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:h,transform:f(f({},j),n),symbol:o,maskId:c,extra:{attributes:S,styles:A,classes:y}})})}},Mi={mixout:function(){return{icon:_i(Ti)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=St,a.nodeCallback=Ni,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?x:r,i=a.callback,o=i===void 0?function(){}:i;return St(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,u=r.maskId,c=r.extra;return new Promise(function(m,y){Promise.all([Le(n,i),l.iconName?Le(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var S=de(p,2),b=S[0],A=S[1];m([a,qe({icons:{main:b,mask:A},prefix:i,iconName:n,transform:o,symbol:s,maskId:u,extra:c,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=me(s);l.length>0&&(n.style=l);var u;return Xe(o)&&(u=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},$i={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return ge({type:"layer"},function(){W("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(C(i)).join(" ")},children:o}]})}}}},Li={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return ge({type:"counter",content:a},function(){return W("beforeDOMElementCreation",{content:a,params:r}),hi({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(C(i))}})})}}}},zi={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?j:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return ge({type:"text",content:a},function(){return W("beforeDOMElementCreation",{content:a,params:r}),gt({content:a,transform:f(f({},j),i),extra:{attributes:u,styles:m,classes:["".concat(v.cssPrefix,"-layers-text")].concat(C(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if($t){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,gt({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Na=new RegExp('"',"ug"),At=[1105920,1112319],kt=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),br),Pn),Er),Re=Object.keys(kt).reduce(function(e,t){return e[t.toLowerCase()]=kt[t],e},{}),Di=Object.keys(Re).reduce(function(e,t){var a=Re[t];return e[t]=a[900]||C(Object.entries(a))[0][1],e},{});function Ri(e){var t=e.replace(Na,"");return ga(C(t)[0]||"")}function Wi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Na,""),n=r.codePointAt(0),i=n>=At[0]&&n<=At[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function Ui(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Re[a]||{})[n]||Di[a]}function Pt(e,t){var a="".concat(In).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=X(e.children),o=i.filter(function(U){return U.getAttribute(Fe)===t})[0],s=$.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(jn),c=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&m!=="none"&&m!==""){var y=s.getPropertyValue("content"),p=Ui(l,c),S=Ri(y),b=u[0].startsWith("FontAwesome"),A=Wi(s),d=Je(p,S),h=d;if(b){var w=Qn(S);w.iconName&&w.prefix&&(d=w.iconName,p=w.prefix)}if(d&&!A&&(!o||o.getAttribute(Be)!==p||o.getAttribute(He)!==h)){e.setAttribute(a,h),o&&e.removeChild(o);var P=Fi(),O=P.extra;O.attributes[Fe]=t,Le(d,p).then(function(U){var V=qe(f(f({},P),{},{icons:{main:U,mask:Pa()},prefix:p,iconName:h,extra:O,watchable:!0})),pe=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(pe,e.firstChild):e.appendChild(pe),pe.outerHTML=V.map(function($a){return ae($a)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function Yi(e){return Promise.all([Pt(e,"::before"),Pt(e,"::after")])}function Bi(e){return e.parentNode!==document.head&&!~En.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Hi=function(t){return!!t&&sa.some(function(a){return t.includes(a)})},Gi=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var n=ie(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(Hi(o)){var s=sa.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){n.e(l)}finally{n.f()}return a};function It(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(M){var a;if(t)a=e;else if(v.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=ie(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=ie(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,c=Gi(u.selectorText),m=ie(c),y;try{for(m.s();!(y=m.n()).done;){var p=y.value;r.add(p)}}catch(b){m.e(b)}finally{m.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){v.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){n.e(b)}finally{n.f()}if(!r.size)return;var S=Array.from(r).join(", ");try{a=e.querySelectorAll(S)}catch{}}return new Promise(function(b,A){var d=X(a).filter(Bi).map(Yi),h=Qe.begin("searchPseudoElements");Ca(),Promise.all(d).then(function(){h(),De(),b()}).catch(function(){h(),De(),A()})})}}var Ki={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=It,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?x:r;v.searchPseudoElements&&It(n)}}},Ot=!1,Xi={mixout:function(){return{dom:{unwatch:function(){Ca(),Ot=!0}}}},hooks:function(){return{bootstrap:function(){xt(Te("mutationObserverCallbacks",{}))},noAuto:function(){Pi()},watch:function(a){var r=a.observeMutationsRoot;Ot?De():xt(Te("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Et=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},Vi={mixout:function(){return{parse:{transform:function(a){return Et(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Et(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(c)},y={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:m,path:y};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),p.path)}]}]}}}},ke={x:0,y:0,width:"100%",height:"100%"};function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ji(e){return e.tag==="g"?e.children:[e]}var qi={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?he(n.split(" ").map(function(o){return o.trim()})):Pa();return i.prefix||(i.prefix=L()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,c=i.icon,m=o.width,y=o.icon,p=Un({transform:l,containerWidth:m,iconWidth:u}),S={tag:"rect",attributes:f(f({},ke),{},{fill:"white"})},b=c.children?{children:c.children.map(Ft)}:{},A={tag:"g",attributes:f({},p.inner),children:[Ft(f({tag:c.tag,attributes:f(f({},c.attributes),p.path)},b))]},d={tag:"g",attributes:f({},p.outer),children:[A]},h="mask-".concat(s||ft()),w="clip-".concat(s||ft()),P={tag:"mask",attributes:f(f({},ke),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,d]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Ji(y)},P]};return r.push(O,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(h,")")},ke)}),{children:r,attributes:n}}}},Qi={provides:function(t){var a=!1;$.matchMedia&&(a=$.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Zi={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},eo=[Hn,Mi,$i,Li,zi,Ki,Xi,Vi,qi,Qi,Zi];si(eo,{mixoutsTo:E});E.noAuto;E.config;var po=E.library;E.dom;var We=E.parse;E.findIconDefinition;E.toHtml;var to=E.icon;E.layer;E.text;E.counter;var yo={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},ao={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},bo=ao,xo={prefix:"fas",iconName:"map",icon:[512,512,[128506,62072],"f279","M512 48c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4L349.5 77.5 170.1 17.6c-8.1-2.7-16.8-2.1-24.4 1.7l-128 64C6.8 88.8 0 99.9 0 112L0 464c0 11.1 5.7 21.4 15.2 27.2s21.2 6.4 31.1 1.4l116.1-58.1 179.4 59.8c8.1 2.7 16.8 2.1 24.4-1.7l128-64c10.8-5.4 17.7-16.5 17.7-28.6l0-352zM192 376.9l0-284.5 128 42.7 0 284.5-128-42.7z"]},wo={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},So={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Ao={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"]},ro={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},ko=ro;function I(e,t,a){return(t=so(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Ct(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ct(Object(a),!0).forEach(function(r){I(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ct(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function no(e,t){if(e==null)return{};var a,r,n=io(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function io(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function oo(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function so(e){var t=oo(e,"string");return typeof t=="symbol"?t:t+""}function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ce(e)}function Pe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?I({},e,t):{}}function lo(e){var t,a=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},I(I(I(I(I(I(I(I(I(I(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-rotate-by",e.rotateBy),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),I(I(I(I(t,"fa-flash",e.flash),"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse),"fa-width-auto",e.widthAuto));return Object.keys(a).map(function(r){return a[r]?r:null}).filter(function(r){return r})}var fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_a={exports:{}};(function(e){(function(t){var a=function(d,h,w){if(!u(h)||m(h)||y(h)||p(h)||l(h))return h;var P,O=0,U=0;if(c(h))for(P=[],U=h.length;O<U;O++)P.push(a(d,h[O],w));else{P={};for(var V in h)Object.prototype.hasOwnProperty.call(h,V)&&(P[d(V,w)]=a(d,h[V],w))}return P},r=function(d,h){h=h||{};var w=h.separator||"_",P=h.split||/(?=[A-Z])/;return d.split(P).join(w)},n=function(d){return S(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(h,w){return w?w.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},i=function(d){var h=n(d);return h.substr(0,1).toUpperCase()+h.substr(1)},o=function(d,h){return r(d,h).toLowerCase()},s=Object.prototype.toString,l=function(d){return typeof d=="function"},u=function(d){return d===Object(d)},c=function(d){return s.call(d)=="[object Array]"},m=function(d){return s.call(d)=="[object Date]"},y=function(d){return s.call(d)=="[object RegExp]"},p=function(d){return s.call(d)=="[object Boolean]"},S=function(d){return d=d-0,d===d},b=function(d,h){var w=h&&"process"in h?h.process:h;return typeof w!="function"?d:function(P,O){return w(P,d,O)}},A={camelize:n,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(d,h){return a(b(n,h),d)},decamelizeKeys:function(d,h){return a(b(o,h),d,h)},pascalizeKeys:function(d,h){return a(b(i,h),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=A:t.humps=A})(fo)})(_a);var uo=_a.exports,co=["class","style"];function mo(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=uo.camelize(a.slice(0,r)),i=a.slice(r+1).trim();return t[n]=i,t},{})}function vo(e){return e.split(/\s+/).reduce(function(t,a){return t[a]=!0,t},{})}function Ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ta(l)}),n=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=vo(c);break;case"style":l.style=mo(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});a.class;var i=a.style,o=i===void 0?{}:i,s=no(a,co);return Da(e.tag,N(N(N({},t),{},{class:n.class,style:N(N({},n.style),o)},n.attrs),s),r)}var Ma=!1;try{Ma=!0}catch{}function ho(){if(!Ma&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function jt(e){if(e&&ce(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(We.icon)return We.icon(e);if(e===null)return null;if(ce(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Po=La({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(t,a){var r=a.attrs,n=Y(function(){return jt(t.icon)}),i=Y(function(){return Pe("classes",lo(t))}),o=Y(function(){return Pe("transform",typeof t.transform=="string"?We.transform(t.transform):t.transform)}),s=Y(function(){return Pe("mask",jt(t.mask))}),l=Y(function(){var c=N(N(N(N({},i.value),o.value),s.value),{},{symbol:t.symbol,maskId:t.maskId});return c.title=t.title,c.titleId=t.titleId,to(n.value,c)});za(l,function(c){if(!c)return ho("Could not find one or more icon(s)",n.value,s.value)},{immediate:!0});var u=Y(function(){return l.value?Ta(l.value.abstract[0],{},r):null});return function(){return u.value}}});export{Po as F,wo as a,Ao as b,xo as c,So as d,ko as e,yo as f,bo as g,po as l};
