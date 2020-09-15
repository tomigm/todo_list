import pubsub from './pubsub';

const projectsForm = (() => {
        
    const submit = () => {
        // add EL to submit button in Project modal
        let submitBtn = document.getElementById('addProjectBtn');
            submitBtn.addEventListener('click', function() {
                // When submit is clicked ==> modal grabs .values from name and description // Creates empty task list
                let projectName = document.getElementById('project_title').value;
                let projectDescription = document.getElementById('projectDescription').value;
                let tasks = [];
                console.log(`PROJECTS FORM: projectAdded '${projectName}': '${projectDescription}'`)
                // Publishes to pubsub to make it global, its used in projects.js
                pubsub.publish('projectAdded', {projectName:projectName, projectDescription:projectDescription, tasks:tasks})
                
             })
        
    }

    
    
    return { submit }
    
    
    /*
    const listener = () => {
        let projectName = document.getElementById('project_title').value;
        let projectDescription = document.getElementById('projectDescription').value;
        let tasks = [];
        let submitBtn = document.getElementById('addProjectBtn');
        submitBtn.addEventListener('click', submit)
    }
    const submit = () => {
        console.log(`PROJECT FORM: projectAdded '${projectName}': '${projectDescription}'`)
        pubsub.publish('projectAdded', projectName, projectDescription, tasks)
    }
    return {listener, submit}
*/
})();

export default projectsForm;
