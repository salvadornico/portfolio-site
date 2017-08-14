"use strict";function startCarousel(){window.scrollAction=setInterval(function(){$(".carousel").carousel("next")},3e3)}function popOutFAB(){$("#scrollToTopFAB").addClass("scale-in pulse"),setTimeout(function(){$("#scrollToTopFAB").removeClass("scale-out scale-in")},500),setTimeout(function(){$("#scrollToTopFAB").removeClass("pulse")},1e4)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=t(e):e.SmoothScroll=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:void 0,function(e){var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++){var o=arguments[t];!function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}(o)}return e},a=function(t){return parseInt(e.getComputedStyle(t).height,10)},l=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,l="",r=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");l+=t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===r?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+l},r=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},c=function(){return parseInt(e.getComputedStyle(document.documentElement).height,10)},i=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)},s=function(e){return e?a(e)+e.offsetTop:0},u=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},f=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(a,d){var p,m,h,g,b,y,v,A={};A.cancelScroll=function(){cancelAnimationFrame(v)},A.animateScroll=function(t,a,l){var f=o(p||n,l||{}),d="[object Number]"===Object.prototype.toString.call(t),m=d||!t.tagName?null:t;if(d||m){var h=e.pageYOffset;f.header&&!g&&(g=document.querySelector(f.header)),b||(b=s(g));var y,v,S,w=d?t:i(m,b,parseInt("function"==typeof f.offset?f.offset():f.offset,10)),T=w-h,C=c(),I=0,O=function(n,o){var l=e.pageYOffset;if(n==o||l==o||(h<o&&e.innerHeight+l)>=C)return A.cancelScroll(),u(t,o,d),f.after(t,a),y=null,!0};0===e.pageYOffset&&e.scrollTo(0,0),f.before(t,a),A.cancelScroll(),e.requestAnimationFrame(function t(n){y||(y=n),v=(I+=n-y)/parseInt(f.speed,10),S=h+T*r(f,v=v>1?1:v),e.scrollTo(0,Math.floor(S)),O(S,w)||(e.requestAnimationFrame(t),y=n)})}};var S=function(e){m&&(m.id=m.getAttribute("data-scroll-id"),A.animateScroll(m,h),m=null,h=null)},w=function(t){if(!f()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(h=t.target.closest(a))&&"a"===h.tagName.toLowerCase()&&!t.target.closest(p.ignore)&&h.hostname===e.location.hostname&&h.pathname===e.location.pathname&&/#/.test(h.href)){var n;try{n=l(decodeURIComponent(h.hash))}catch(e){n=l(h.hash)}if("#"===n){t.preventDefault();var o=(m=document.body).id?m.id:"smooth-scroll-top";return m.setAttribute("data-scroll-id",o),m.id="",void(e.location.hash.substring(1)===o?S():e.location.hash=o)}(m=document.querySelector(n))&&(m.setAttribute("data-scroll-id",m.id),m.id="",h.hash===e.location.hash&&(t.preventDefault(),S()))}},T=function(e){y||(y=setTimeout(function(){y=null,b=s(g)},66))};return A.destroy=function(){p&&(document.removeEventListener("click",w,!1),e.removeEventListener("resize",T,!1),A.cancelScroll(),p=null,m=null,h=null,g=null,b=null,y=null,v=null)},A.init=function(a){t&&(A.destroy(),p=o(n,a||{}),g=p.header?document.querySelector(p.header):null,b=s(g),document.addEventListener("click",w,!1),e.addEventListener("hashchange",S,!1),g&&e.addEventListener("resize",T,!1))},A.init(d),A}}),function(e,t,n,o,a,l,r){e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,l=t.createElement(n),r=t.getElementsByTagName(n)[0],l.async=1,l.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(l,r)}(window,document,"script",0,"ga"),ga("create","UA-92196324-1","auto"),ga("send","pageview"),$(document).ready(function(){$("#scrollDownBtn").click(function(){popOutFAB()}),$("#scrollToTopFAB").click(function(){$("#scrollToTopFAB").addClass("scale-out"),$("#scrollToTopFAB").removeClass("pulse")}),$(".parallax").parallax();var e=[{selector:"#collapsible-1",offset:250,callback:function(){$(".collapsible").collapsible("open",0),$(".carousel.carousel-slider").carousel({fullWidth:!0}),startCarousel()}},{selector:"#collapsible-2",offset:250,callback:function(){$(".collapsible").collapsible("open",1),popOutFAB()}},{selector:"#collapsible-3",offset:250,callback:function(){$(".collapsible").collapsible("open",2)}},{selector:"#collapsible-4",offset:250,callback:function(){$(".collapsible").collapsible("open",3)}}];Materialize.scrollFire(e),$(".carousel").mouseenter(function(){clearInterval(window.scrollAction)}),$(".carousel").mouseleave(function(){startCarousel()})});