!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".tap-target");M.TapTarget.init(e)}));var s=e=>{var t,n=document.querySelectorAll(".tap-target"),s=e,o=--e;o>=0&&((t=M.TapTarget.getInstance(n[o])).close(),t.destroy()),(t=M.TapTarget.getInstance(n[s])).open()};var o={events:{},subscribe:function(e,t){console.log("PUBSUB: someone just subscribed to know about "+e),this.events[e]=this.events[e]||[],this.events[e].push(t)},unsubscribe:function(e,t){console.log("PUBSUB: someone just UNsubscribed from "+e),this.events[e]&&(this.events[e]=this.events[e].filter(e=>e!==t))},publish:function(e,t){console.log(`PUBSUB: Making an broadcast about ${e} with ${t}`),this.events[e]&&this.events[e].forEach(e=>{e(t)})}};var r=(e,t,n)=>{let s=document.createElement("div");return s.setAttribute("class","row"),s.setAttribute("project-name",""+e),s.innerHTML=`\n    \n    <div class="col s12 project collection-item tooltipped" data-position="right" data-tooltip="${t}">\n          \n          <i class="material-icons delProj">delete</i>\n          <span class="name">${e}</span>\n          <span class="new badge" data-badge-caption="tasks">${n}</span>           \n\n    </div>\n\n    `,s};var a=(()=>{let e=[];const t=document.getElementById("projects"),n=e=>{t.append(r(e.projectName,e.projectDescription,e.tasks.length)),document.querySelectorAll(".delProj").forEach(e=>e.addEventListener("click",a)),document.querySelectorAll(".project").forEach(e=>e.addEventListener("click",l))},s=t=>{if(e.find(e=>e.projectName===t.projectName))return alert("Project exists");e.push(t),console.log(e),o.publish("updatedList",e),n(t)},a=n=>{let s=n.target.closest(".row"),r=s.getAttribute("project-name");e=e.filter(e=>e.projectName!==r),o.publish("projectDeleted",e),t.removeChild(s),console.log(e)},l=t=>{let n=t.target.closest(".collection-item");document.querySelectorAll(".collection-item").forEach(e=>e.classList.remove("active")),n.classList.add("active");let s=t.target.closest(".row").getAttribute("project-name"),r=e.find(e=>e.projectName===s);o.publish("taskOpened",r)},c=e=>{document.querySelector(".active > span.badge").innerHTML=""+e.length};return{listen:()=>{o.subscribe("projectAdded",s),o.subscribe("updatedTaskList",c)},render:n,list:e,deleteProject:a,updateCounter:c}})();var l=(e,t,n,s)=>{let o=document.createElement("div");return o.setAttribute("class","row"),o.setAttribute("task-name",""+e),o.innerHTML=`\n    \n   \n    <div class="col s12">\n       <div class="card">\n          <div class="card-content">\n             <span class="card-title name">${e}</span>\n             <p class="description"> ${t} </p>\n             <a class ="dueDate">${n}</a>\n             <a class="priority">${s}</a>\n             <label>\n                <input type="checkbox" class="filled-in" checked="checked">\n                <span>Mark as done</span>\n              </label>       \n          <div class="card-action">\n             <a class='editTask modal-trigger' href="#editTaskModal">EDIT</a>\n             <a href="#"><i class="material-icons delTask">delete</i></a>\n          </div>\n          </div>\n       </div>\n    </div> \n \n\n    `,o};var c=(()=>{let e=[];const t=document.getElementById("tasks"),n=e=>{console.log("instancia render"),t.append(l(e.taskName,e.taskDescription,e.dueDate,e.priority)),document.querySelectorAll(".delTask").forEach(e=>e.addEventListener("click",a)),document.querySelectorAll(".editTask").forEach(e=>e.addEventListener("click",c))},s=s=>{console.log(s);let o=s.tasks;e=[],e=o,(e=>{if(e.hasChildNodes())for(;e.hasChildNodes();)e.removeChild(e.lastChild);else;})(t),o.forEach(e=>n(e))},r=t=>e.find(e=>e.taskName===t.taskName)?alert("task exists"):(e.push(t),console.log("this is the current list: "+e),o.publish("updatedTaskList",e),n(t)),a=n=>{console.log("deleted");let s=n.target.closest(".row"),r=s.getAttribute("task-name");e=e.filter(e=>e.taskName!==r),o.publish("updatedTaskList",e),t.removeChild(s),console.log(e)},c=t=>{console.log("edit");let n=t.target.closest(".row").getAttribute("task-name"),s=e.filter(e=>e.taskName===n);console.log(s)};return{listen:()=>{o.subscribe("taskOpened",s),o.subscribe("taskAdded",r)},render:n,list:e,deleteTask:a}})();var i={submit:()=>{document.getElementById("addProjectBtn").addEventListener("click",(function(){let e=document.getElementById("project_title").value,t=document.getElementById("projectDescription").value;console.log(`PROJECTS FORM: projectAdded '${e}': '${t}'`),o.publish("projectAdded",{projectName:e,projectDescription:t,tasks:[]})}))}};var d={submit:()=>{document.getElementById("addTaskBtn").addEventListener("click",(function(){let e=document.getElementById("task_name").value,t=document.getElementById("taskDescription").value,n=document.getElementById("dueDate").value,s=document.getElementById("priority").value;console.log(`TASKS FORM: projectAdded '${e}': '${t}'`),o.publish("taskAdded",{taskName:e,taskDescription:t,dueDate:n,priority:s})}))}};const u=document.getElementById("helpBtn"),p=document.getElementById("nextHelp");u.addEventListener("click",(function(){s(0)})),p.addEventListener("click",(function(){s(1)})),i.submit(),a.listen(),d.submit(),c.listen(),M.AutoInit()}]);