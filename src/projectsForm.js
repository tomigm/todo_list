import pubsub from './pubsub';

const projectsForm = (() => {
        
    const submit = () => {
        // add EL to submit button in Project modal
        let submitBtn = document.getElementById('addProjectBtn');
            submitBtn.addEventListener('click', function() {
                // When submit is clicked ==> modal grabs .values from name and description // Creates empty task list
                let projectName = document.getElementById('project_title').value;
                let projectDescription = document.getElementById('projectDescription').value;
                let tasks = [{taskName:'taskName', taskDescription:'taskDescription', dueDate:'dueDate', priority:'priority' }, {taskName:'taskName', taskDescription:'taskDescription', dueDate:'dueDate', priority:'priority' }];
                console.log(`PROJECTS FORM: projectAdded '${projectName}': '${projectDescription}'`)
                // Publishes to pubsub to make it global, its used in projects.js
                pubsub.publish('projectAdded', {projectName:projectName, projectDescription:projectDescription, tasks:tasks})
                
             })
        
    }

    
    
    return { submit }
    
})();

export default projectsForm;
