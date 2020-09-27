import pubsub from './pubsub';
import taskTemplate from './taskTemplate'


const tasks = (() => {
let list = [];
const taskList = document.getElementById('tasks');   
const listen = () => {    
    pubsub.subscribe('taskOpened', renderCurrent);
    pubsub.subscribe('taskAdded', add);
    pubsub.subscribe('taskUpdated', editTask);
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
    
    taskList.append(taskTemplate(data.taskName, data.taskDescription, data.dueDate, data.priority));

    
    let delTask = taskList.lastElementChild.querySelector('.delTask');
    delTask.addEventListener('click', deleteTask);

    let edTask = taskList.lastElementChild.querySelector('.editTask');
    edTask.addEventListener('click', listenEdit);
}

const renderCurrent = (data) => {
    
    //console.log('test');
    console.log(data);
    // grabs tasks from selected project
    let currentTaskList = data.tasks;
    // update taskList with selected project tasks
    list = [];
    list = currentTaskList;
    // Clears tasks from task module    
    clearTasks(taskList);
    // for each task inside .tasks, it renders to the DOM
    currentTaskList.forEach(task => render(task));

    //pubsub.subscribe('taskAdded', add);
}

const add = data => {
    // pushes info from 'taskAdded' pubsub to project list if it doesn't exist yet.
        if (list.find(task => (task.taskName === data.taskName))) {return alert('task exists')};
    // pushes new task info to list    
        list.push(data);
        console.log (`this is the current list: ${list}`); 
    // makes list public
        pubsub.publish('updatedTaskList', list);
    //renders to DOM        
        return render(data);
}

const deleteTask = (event) => {
    console.log('deleted');
    // Grabs parent from clicked delete icon ==> it gets its project-name data
    let current = event.target.closest(".row");
    let name = current.getAttribute('task-name')    
    //makes a new list with all the projects EXCEPT the one clicked that matches projectName
    list = list.filter(task => task.taskName !== name ) ;
    // publishes globally the new updated list without the deleted project
    pubsub.publish('updatedTaskList', list);
    // removes parent from DOM
    console.log(current)
    taskList.removeChild(current);
    console.log(list)  
}

const listenEdit = (event) => {
    console.log('edit');
   //! ABRE EL MODAL || HAY QUE VER SI UPDATEA EL CONTENIDO ANTES DE QUE LO ABRA MATERIALIZE, SINO USAR ESTO
        /*
    var elem = document.getElementById('editTaskModal');
    var instance = M.Modal.init(elem);
    instance.open();
*/
    // Get current DOM element
    let current = event.target.closest(".row");
    let name = current.getAttribute('task-name');
    // filters element from list
    let currentElement = list.filter(task => task.taskName === name); 
    console.log('before edit:' + currentElement[0]);
    //*const editTaskModal = document.getElementById('editTaskModal');
    // makes selected element array from "list" public >> being listened by editTaskForm.js
    pubsub.publish('currentTaskValues', currentElement[0]);
    // makes a new list without the edited element && removes from DOM
    list = list.filter(task => task.taskName !== name ); 
    taskList.removeChild(current);
}

// NewValues are data that are fired from editTaskForm >> previously fired by 'currentTaskValues' pubsub

const editTask  = (newValues) =>  {           
    list.push(newValues)     
    pubsub.publish('updatedTaskList', list);  
    render (newValues);

}



return { listen, render, list, deleteTask}

})();

export default tasks;