!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".tap-target");M.TapTarget.init(e)}));var s=e=>{var t,n=document.querySelectorAll(".tap-target"),s=e,r=--e;r>=0&&((t=M.TapTarget.getInstance(n[r])).close(),t.destroy()),(t=M.TapTarget.getInstance(n[s])).open()};var r={events:{},subscribe:function(e,t){console.log("PUBSUB: someone just subscribed to know about "+e),this.events[e]=this.events[e]||[],this.events[e].push(t)},unsubscribe:function(e,t){console.log("PUBSUB: someone just UNsubscribed from "+e),this.events[e]&&(this.events[e]=this.events[e].filter(e=>e!==t))},publish:function(e,t){console.log(`PUBSUB: Making an broadcast about ${e} with ${t}`),this.events[e]&&this.events[e].forEach(e=>{e(t)})}};var a=(e,t,n)=>{let s=document.createElement("div");return s.setAttribute("class","row"),s.setAttribute("project-name",""+e),s.innerHTML=`\n    \n    <div class="col s12 project collection-item tooltipped" data-position="right" data-tooltip='${t}'>\n          \n          <i class="material-icons delProj">delete</i>\n          <span class="name">${e}</span>\n          <span class="new badge" data-badge-caption="tasks">${n}</span>           \n\n    </div>\n\n    `,s};var i=(()=>{let e=[];const t=document.getElementById("projects"),n=e=>{t.append(a(e.projectName,e.projectDescription,e.tasks.length)),document.querySelectorAll(".delProj").forEach(e=>e.addEventListener("click",i)),document.querySelectorAll(".project").forEach(e=>e.addEventListener("click",o));var n=t.querySelectorAll(".tooltipped");M.Tooltip.init(n)},s=t=>e.find(e=>e.projectName===t.projectName)?alert("Project exists"):""==t.projectName?alert("Assign a name to the project"):(e.push(t),r.publish("updatedList",e),void n(t)),i=n=>{let s=n.target.closest(".row"),a=s.getAttribute("project-name");e=e.filter(e=>e.projectName!==a),r.publish("projectDeleted"),t.removeChild(s);let i=s.querySelector(".tooltipped");M.Tooltip.init(i).destroy(),r.publish("updatedList",e)},o=t=>{let n=t.target.closest(".collection-item");document.querySelectorAll(".collection-item").forEach(e=>e.classList.remove("active")),n.classList.add("active");let s=t.target.closest(".row").getAttribute("project-name"),a=e.find(e=>e.projectName===s);r.publish("taskOpened",a)},l=t=>{let n=document.querySelector(".collection-item.active").closest(".row").getAttribute("project-name");e.find(e=>e.projectName===n).tasks=t,r.publish("updatedList",e),document.querySelector(".active > span.badge").innerHTML=""+t.length};return{listen:()=>{r.subscribe("projectAdded",s),r.subscribe("updatedTaskList",l)},render:n,list:e,deleteProject:i,updateCounter:l}})();var o=(e,t,n,s)=>{let r=document.createElement("div");return r.setAttribute("class","row"),r.setAttribute("task-name",""+e),r.innerHTML=`    \n   \n    <div class="col s12">\n       <div class="card">\n          <div class="card-content">\n             <span class="card-title name">${e}</span>\n             <p class="description"> ${t} </p>\n             <a class ="dueDate">${n}</a>\n             <a class="priority">${s}</a>\n             <label>\n                <input type="checkbox" class="filled-in">\n                <span>Mark as done</span>\n              </label>       \n          <div class="card-action">\n             <a class='editTask modal-trigger' href="#editTaskModal">EDIT</a>\n             <a href="#"><i class="material-icons delTask">delete</i></a>\n          </div>\n          </div>\n       </div>\n    </div>  \n\n    `,r};var l=(()=>{let e=[];const t=document.getElementById("tasks"),n=()=>{if(t.hasChildNodes())for(;t.hasChildNodes();)t.removeChild(t.lastChild)},s=e=>{t.append(o(e.taskName,e.taskDescription,e.dueDate,e.priority)),t.lastElementChild.querySelector(".delTask").addEventListener("click",l),t.lastElementChild.querySelector(".editTask").addEventListener("click",c)},a=t=>{if(console.log(t),null==t)return;let r=t.tasks;e=[],e=r,n(),r.forEach(e=>s(e))},i=t=>{if(e.find(e=>e.taskName===t.taskName))return alert("task exists");e.push(t),r.publish("updatedTaskList",e),s(t)},l=n=>{let s=n.target.closest(".row"),a=s.getAttribute("task-name");e=e.filter(e=>e.taskName!==a),t.removeChild(s),r.publish("updatedTaskList",e)},c=n=>{let s=n.target.closest(".row"),a=s.getAttribute("task-name"),i=e.filter(e=>e.taskName===a);r.publish("currentTaskValues",i[0]),e=e.filter(e=>e.taskName!==a),t.removeChild(s)},d=t=>{e.push(t),r.publish("updatedTaskList",e),s(t)};return{listen:()=>{r.subscribe("taskOpened",a),r.subscribe("taskAdded",i),r.subscribe("taskUpdated",d),r.subscribe("projectDeleted",n)},render:s,list:e,deleteTask:l}})();var c={submit:()=>{document.getElementById("addProjectBtn").addEventListener("click",(function(){let e=document.getElementById("project_title").value,t=document.getElementById("projectDescription").value;console.log(`PROJECTS FORM: projectAdded '${e}': '${t}'`),r.publish("projectAdded",{projectName:e,projectDescription:t,tasks:[]}),document.getElementById("project_title").value="",document.getElementById("projectDescription").value=""}))}};var d=(()=>{const e=()=>{let e=document.getElementById("task_name").value,t=document.getElementById("taskDescription").value,n=document.getElementById("dueDate").value,s=document.getElementById("priority").value;console.log(`TASKS FORM: projectAdded '${e}': '${t}'`),r.publish("taskAdded",{taskName:e,taskDescription:t,dueDate:n,priority:s}),document.getElementById("task_name").value="",document.getElementById("taskDescription").value="",document.getElementById("dueDate").value="",document.getElementById("priority").value=""};return{submit:()=>{document.getElementById("addTaskBtn").addEventListener("click",e)},add:e}})();var u=(()=>{const e=e=>{document.getElementById("current_task_name").value=e.taskName,document.getElementById("currentTaskDescription").value=e.taskDescription,document.getElementById("currentDueDate").value=e.dueDate,document.getElementById("currentPriority").value=e.priority,document.getElementById("editTaskBtn").addEventListener("click",t)},t=()=>{let e=document.getElementById("current_task_name").value,t=document.getElementById("currentTaskDescription").value,n=document.getElementById("currentDueDate").value,s=document.getElementById("currentPriority").value;console.log(`TASKS FORM: TaskEdited '${e}': '${t}'`),r.publish("taskUpdated",{taskName:e,taskDescription:t,dueDate:n,priority:s})};return{submit:e,listen:()=>{r.subscribe("currentTaskValues",e)}}})();var p=(()=>{const e=()=>{const e=document.getElementById("projects");if(e.children.length>0){let t=e.firstElementChild;console.log(t),t.children[0].click()}};return{init:()=>{if(null==localStorage.getItem("projectList"))r.publish("projectAdded",{projectName:"Project 1",projectDescription:"On hover, project description is shown",tasks:[{taskName:"Example task",taskDescription:"Short task description",dueDate:"Sep 23, 2025",priority:"MEDIUM"},{taskName:"Fancy task",taskDescription:"long task description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus quam aliquid tenetur ut accusantium molestiae totam! Perspiciatis, explicabo ratione, natus illum eum aliquid quam eveniet.",dueDate:"Sep 23, 2025",priority:"LOW"}]});else{JSON.parse(localStorage.getItem("projectList")).forEach(e=>r.publish("projectAdded",e))}e()}}})();var m=(()=>{const e=e=>{console.log("current data"),console.log(e),localStorage.setItem("projectList",JSON.stringify(e))};return{listen:()=>{r.subscribe("updatedList",e)},addData:e}})();const v=document.getElementById("helpBtn"),g=document.getElementById("nextHelp");v.addEventListener("click",(function(){s(0)})),g.addEventListener("click",(function(){s(1)})),c.submit(),i.listen(),d.submit(),l.listen(),u.listen(),m.listen(),p.init(),M.AutoInit()}]);