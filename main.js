!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".tap-target");M.TapTarget.init(e)}));var s=e=>{var t,n=document.querySelectorAll(".tap-target"),s=e,a=--e;a>=0&&((t=M.TapTarget.getInstance(n[a])).close(),t.destroy()),(t=M.TapTarget.getInstance(n[s])).open()};var a={events:{},subscribe:function(e,t){console.log("PUBSUB: someone just subscribed to know about "+e),this.events[e]=this.events[e]||[],this.events[e].push(t)},unsubscribe:function(e,t){console.log("PUBSUB: someone just UNsubscribed from "+e),this.events[e]&&(this.events[e]=this.events[e].filter(e=>e!==t))},publish:function(e,t){console.log(`PUBSUB: Making an broadcast about ${e} with ${t}`),this.events[e]&&this.events[e].forEach(e=>{e(t)})}};var r=(e,t,n)=>{let s=document.createElement("div");return s.setAttribute("class","row"),s.setAttribute("project-name",""+e),s.innerHTML=`\n    \n    <div class="col s12 project collection-item tooltipped" data-position="right" data-tooltip='${t}'>\n          \n          <i class="material-icons delProj">delete</i>\n          <span class="name">${e}</span>\n          <span class="new badge" data-badge-caption="tasks">${n}</span>           \n\n    </div>\n\n    `,s};var i=(()=>{let e=[];const t=document.getElementById("projects"),n=e=>{t.append(r(e.projectName,e.projectDescription,e.tasks.length)),document.querySelectorAll(".delProj").forEach(e=>e.addEventListener("click",i)),document.querySelectorAll(".project").forEach(e=>e.addEventListener("click",o));var n=t.querySelectorAll(".tooltipped");M.Tooltip.init(n)},s=t=>e.find(e=>e.projectName===t.projectName)?alert("Project exists"):""==t.projectName?alert("Assign a name to the project"):(e.push(t),console.log(e),a.publish("updatedList",e),void n(t)),i=n=>{let s=n.target.closest(".row"),r=s.getAttribute("project-name");e=e.filter(e=>e.projectName!==r),a.publish("projectDeleted",e),t.removeChild(s);let i=s.querySelector(".tooltipped");M.Tooltip.init(i).destroy(),console.log(e)},o=t=>{let n=t.target.closest(".collection-item");document.querySelectorAll(".collection-item").forEach(e=>e.classList.remove("active")),n.classList.add("active");let s=t.target.closest(".row").getAttribute("project-name"),r=e.find(e=>e.projectName===s);a.publish("taskOpened",r)},l=e=>{document.querySelector(".active > span.badge").innerHTML=""+e.length};return{listen:()=>{a.subscribe("projectAdded",s),a.subscribe("updatedTaskList",l)},render:n,list:e,deleteProject:i,updateCounter:l}})();var o=(e,t,n,s)=>{let a=document.createElement("div");return a.setAttribute("class","row"),a.setAttribute("task-name",""+e),a.innerHTML=`    \n   \n    <div class="col s12">\n       <div class="card">\n          <div class="card-content">\n             <span class="card-title name">${e}</span>\n             <p class="description"> ${t} </p>\n             <a class ="dueDate">${n}</a>\n             <a class="priority">${s}</a>\n             <label>\n                <input type="checkbox" class="filled-in" checked="checked">\n                <span>Mark as done</span>\n              </label>       \n          <div class="card-action">\n             <a class='editTask modal-trigger' href="#editTaskModal">EDIT</a>\n             <a href="#"><i class="material-icons delTask">delete</i></a>\n          </div>\n          </div>\n       </div>\n    </div>  \n\n    `,a};var l=(()=>{let e=[];const t=document.getElementById("tasks"),n=e=>{t.append(o(e.taskName,e.taskDescription,e.dueDate,e.priority)),t.lastElementChild.querySelector(".delTask").addEventListener("click",i),t.lastElementChild.querySelector(".editTask").addEventListener("click",l)},s=s=>{console.log(s);let a=s.tasks;e=[],e=a,(e=>{if(e.hasChildNodes())for(;e.hasChildNodes();)e.removeChild(e.lastChild)})(t),a.forEach(e=>n(e))},r=t=>e.find(e=>e.taskName===t.taskName)?alert("task exists"):(e.push(t),a.publish("updatedTaskList",e),n(t)),i=n=>{let s=n.target.closest(".row"),r=s.getAttribute("task-name");e=e.filter(e=>e.taskName!==r),a.publish("updatedTaskList",e),t.removeChild(s),console.log(e)},l=n=>{let s=n.target.closest(".row"),r=s.getAttribute("task-name"),i=e.filter(e=>e.taskName===r);a.publish("currentTaskValues",i[0]),e=e.filter(e=>e.taskName!==r),t.removeChild(s)},c=t=>{e.push(t),a.publish("updatedTaskList",e),n(t)};return{listen:()=>{a.subscribe("taskOpened",s),a.subscribe("taskAdded",r),a.subscribe("taskUpdated",c)},render:n,list:e,deleteTask:i}})();var c={submit:()=>{document.getElementById("addProjectBtn").addEventListener("click",(function(){let e=document.getElementById("project_title").value,t=document.getElementById("projectDescription").value;console.log(`PROJECTS FORM: projectAdded '${e}': '${t}'`),a.publish("projectAdded",{projectName:e,projectDescription:t,tasks:[]}),document.getElementById("project_title").value="",document.getElementById("projectDescription").value=""}))}};var d={submit:()=>{document.getElementById("addTaskBtn").addEventListener("click",(function(){let e=document.getElementById("task_name").value,t=document.getElementById("taskDescription").value,n=document.getElementById("dueDate").value,s=document.getElementById("priority").value;console.log(`TASKS FORM: projectAdded '${e}': '${t}'`),a.publish("taskAdded",{taskName:e,taskDescription:t,dueDate:n,priority:s}),document.getElementById("task_name").value="",document.getElementById("taskDescription").value="",document.getElementById("dueDate").value="",document.getElementById("priority").value=""}))}};var u=(()=>{const e=e=>{document.getElementById("current_task_name").value=e.taskName,document.getElementById("currentTaskDescription").value=e.taskDescription,document.getElementById("currentDueDate").value=e.dueDate,document.getElementById("currentPriority").value=e.priority,document.getElementById("editTaskBtn").addEventListener("click",t)},t=()=>{let e=document.getElementById("current_task_name").value,t=document.getElementById("currentTaskDescription").value,n=document.getElementById("currentDueDate").value,s=document.getElementById("currentPriority").value;console.log(`TASKS FORM: TaskEdited '${e}': '${t}'`),a.publish("taskUpdated",{taskName:e,taskDescription:t,dueDate:n,priority:s})};return{submit:e,listen:()=>{a.subscribe("currentTaskValues",e)}}})();var p={init:()=>{a.publish("projectAdded",{projectName:"Project 1",projectDescription:"On hover, project description is shown",tasks:[{taskName:"Example task",taskDescription:"Short task description",dueDate:"Sep 23, 2025",priority:"MEDIUM"},{taskName:"Fancy task",taskDescription:"long task description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus quam aliquid tenetur ut accusantium molestiae totam! Perspiciatis, explicabo ratione, natus illum eum aliquid quam eveniet.",dueDate:"Sep 23, 2025",priority:"LOW"}]})}};const m=document.getElementById("helpBtn"),v=document.getElementById("nextHelp");m.addEventListener("click",(function(){s(0)})),v.addEventListener("click",(function(){s(1)})),c.submit(),i.listen(),d.submit(),l.listen(),u.listen(),p.init(),M.AutoInit()}]);