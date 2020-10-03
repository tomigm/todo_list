import pubsub from './pubsub';


const tasksForm = (() => {
        
    const submit = () => {
        // add EL to submit button in tasks modal
        let submitBtn = document.getElementById('addTaskBtn');
            submitBtn.addEventListener('click', add)        
    }

    const add = () =>   {
        // When submit is clicked ==> modal grabs .values from name and description // Creates empty task list
        let taskName = document.getElementById('task_name').value;
        let taskDescription = document.getElementById('taskDescription').value;
        let dueDate = document.getElementById('dueDate').value
        let priority = document.getElementById('priority').value                
        console.log(`TASKS FORM: projectAdded '${taskName}': '${taskDescription}'`)
        // Publishes to pubsub to make it global, its used in tasks.js
        pubsub.publish('taskAdded', {taskName:taskName, taskDescription:taskDescription, dueDate:dueDate, priority:priority })
        // RESET FORM VALUES 
        document.getElementById('task_name').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('dueDate').value = '';
        document.getElementById('priority').value = '';                
     }

    return { submit, add }
    
})();

export default tasksForm;
