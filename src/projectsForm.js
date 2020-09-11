import pubsub from './pubsub';

const projectsForm = (() => {
    
    const listener = () => {
        let projectName = document.getElementById('project_title').value;
        let projectDescription = document.getElementById('projectDescription').value;
        let submitBtn = document.getElementById('addProjectBtn');
        submitBtn.addEventListener('click', submit)
    }
    const submit = () => {
        console.log(`PROJECT FORM: projectAdded '${projectName}': '${projectDescription}'`)
        pubsub.publish('projectAdded', projectName, projectDescription)
    }
    return {listener, submit}

})();

