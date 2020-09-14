import pubsub from './pubsub';

const projectsForm = (() => {
        
    const submit = () => {

        let submitBtn = document.getElementById('addProjectBtn');
            submitBtn.addEventListener('click', function() {
                let projectName = document.getElementById('project_title').value;
                let projectDescription = document.getElementById('projectDescription').value;
                let tasks = [];
                console.log(`PROJECTS FORM: projectAdded '${projectName}': '${projectDescription}'`)
                pubsub.publish('projectAdded', [projectName, projectDescription, tasks])
                
             })
        
    }

    const render = () => {

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
