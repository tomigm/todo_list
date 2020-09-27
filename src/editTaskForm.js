import pubsub from './pubsub';


const editTaskForm = (() => {
    
    const listen = () => {
        pubsub.subscribe('currentTaskValues', submit)
    }

    const submit = (values) => {

        document.getElementById('current_task_name').value = values.taskName;
        document.getElementById('currentTaskDescription').value = values.taskDescription;
        document.getElementById('currentDueDate').value = values.dueDate;
        document.getElementById('currentPriority').value = values.priority;

        // add EL to submit button in tasks modal
        let submitBtn = document.getElementById('editTaskBtn');
            submitBtn.addEventListener('click', submitCurrent); 
    }

    const submitCurrent = () => {               
        // When submit is clicked ==> modal grabs .values from name and description // Creates empty task list
        let taskName = document.getElementById('current_task_name').value;
        let taskDescription = document.getElementById('currentTaskDescription').value;
        let dueDate = document.getElementById('currentDueDate').value
        let priority = document.getElementById('currentPriority').value
        console.log(`TASKS FORM: TaskEdited '${taskName}': '${taskDescription}'`)
        // Publishes to pubsub to make it global, its used in tasks.js
        pubsub.publish('taskUpdated', {taskName:taskName, taskDescription:taskDescription, dueDate:dueDate, priority:priority })        
     };
    
    return { submit, listen }
    
})();

export default editTaskForm;
