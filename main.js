!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".tap-target");M.TapTarget.init(e)}));var o=e=>{var t,n=document.querySelectorAll(".tap-target"),o=e,r=--e;r>=0&&((t=M.TapTarget.getInstance(n[r])).close(),t.destroy()),(t=M.TapTarget.getInstance(n[o])).open()};var r={events:{},subscribe:function(e,t){console.log("PUBSUB: someone just subscribed to know about "+e),this.events[e]=this.events[e]||[],this.events[e].push(t)},unsubscribe:function(e,t){console.log("PUBSUB: someone just UNsubscribed from "+e),this.events[e]&&(this.events[e]=this.events[e].filter(e=>e!==t))},publish:function(e,t){console.log(`PUBSUB: Making an broadcast about ${e} with ${t}`),this.events[e]&&this.events[e].forEach(e=>{e(t)})}};var u={submit:()=>{document.getElementById("addProjectBtn").addEventListener("click",(function(){let e=document.getElementById("project_title").value,t=document.getElementById("projectDescription").value;console.log(`PROJECTS FORM: projectAdded '${e}': '${t}'`),r.publish("projectAdded",e,t,[])}))}};const c=document.getElementById("helpBtn"),i=document.getElementById("nextHelp");c.addEventListener("click",(function(){o(0)})),i.addEventListener("click",(function(){o(1)})),u.submit(),M.AutoInit()}]);