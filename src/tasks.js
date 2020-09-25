import pubsub from './pubsub';
import taskTemplate from './taskTemplate'


const tasks = (() => {
let list = [];
const listen = () => {    
    pubsub.subscribe('taskOpened', renderCurrent);
    
}

const clearTasks = (tasks) => {
    // check if taskList has childs
     //if yes > while taskList have childs, remove childs
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

    
/*
    let delTask = document.querySelectorAll('.delTask');
    delProj.forEach(elem => elem.addEventListener('click', deleteTask))
*/
}

const renderCurrent = (data) => {
    
    //console.log('test');
    console.log(data);
    // grabs tasks from selected project
    let taskList = data.tasks;
    // update taskList with selected project tasks
    list = taskList;
    // Clears tasks from task module    
    clearTasks(document.getElementById('tasks'));
    // for each task inside .tasks, it renders to the DOM
    taskList.forEach(task => render(task));

    pubsub.subscribe('taskAdded', add);
    //pubsub.subscribe('taskAdded', add);
}

const add = data => {
    // pushes info from 'taskAdded' pubsub to project list if it doesn't exist yet.
        if (list.find(task => (task.taskName === data.taskName))) {return alert('task exists')};
        
        list.push(data);
        console.log (`this is the current list: ${list}`); 

        pubsub.publish('updatedTaskList', list);

        return render(data);
}

const deleteTask = () => {
    console.log('deleted')
}

return { listen, render, list, deleteTask,  }

})();

export default tasks;