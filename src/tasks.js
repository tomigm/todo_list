import pubsub from './pubsub';
import taskTemplate from './taskTemplate'


const tasks = (() => {
let list = [];
const listen = () => {    
    pubsub.subscribe('taskOpened', renderCurrent);
    
}

const clearTasks = (tasks) => {
    // check if booklist has childs
     //if yes > while booklist have child, remove child
   if(tasks.hasChildNodes()) {
     
     while (tasks.hasChildNodes()) {
       tasks.removeChild(tasks.lastChild);
     }
     return
   }
   else {return}
   
}

const render = (data) => {
    
    console.log('instancia render');

    let tasks = document.getElementById('tasks');
    

    
    
    tasks.append(taskTemplate(data.taskName, data.taskDescription, data.dueDate, data.priority));

    pubsub.publish('updatedTaskList', list);
/*
    let delTask = document.querySelectorAll('.delTask');
    delProj.forEach(elem => elem.addEventListener('click', deleteTask))
*/
}

const renderCurrent = (data) => {
    //console.log('test');
    console.log(data.tasks);

    let taskList = data.tasks;
    if (taskList.length == 0) {render()}
    clearTasks(document.getElementById('tasks'));
    taskList.forEach(task => render(task));
    
    //pubsub.subscribe('taskAdded', add);
}

const add = data => {
    // pushes info from 'projectAdded' pubsub to project list if it doesn't exist yet.
        if (list.find(task => (task.taskName === data.taskName))) {return alert('task exists')};
        list.push(data);
        console.log (list); 
        pubsub.publish('updatedTaskList', list.length);

        render(data);
}

const deleteTask = () => {
    console.log('deleted')
}

return { listen, render, list, deleteTask,  }

})();

export default tasks;