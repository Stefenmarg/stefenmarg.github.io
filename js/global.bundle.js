var Web=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n={getCookie:function(e){const t=document.cookie.split(";");for(let n of t){const[t,o]=n.trim().split("=");if(t===e)return o}return null},setCookie:function(e,t){let n=`${e}=${t}; path=/`;const o=new Date;o.setTime(o.getTime()+6048e5),n+="; expires="+o.toUTCString(),n+="; SameSite=Strict",document.cookie=n}};t.ThemeManager=()=>{const e=[{Hex:"#000000"},{Hex:"#FFFFFF"}];function t(t){t=Math.abs(t%2),function(e,t){if(!e||!t)throw"Not enough arguments given to ColorChangeItems();";const n=document.getElementsByClassName(e);for(let e=0;e<n.length;e++)n[e].style.color=t}("nav-links",e[1-t].Hex);const o=document.getElementById("Body");o.style.color=e[1-t].Hex,o.style.background=e[t].Hex,n.setCookie("mode",t)}return{toggleTheme:function(){t(1-parseInt(n.getCookie("mode"))||0)},SyncCookieTheme:function(){const e=n.getCookie("mode");t(null!==e?parseInt(e):0)}}}}]);