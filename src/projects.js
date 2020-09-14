import pubsub from './pubsub';
import projectTemplate from './projectTemplate'

const projects = (() => {
let list = [];
const listen = () => {
    
    
    pubsub.subscribe('projectAdded', render);
}

const render = data => {
    list.push(data);
    console.log (list);    

    let projects = document.getElementById('projects');
    projects.append(projectTemplate(data.projectName, data.projectDescription, data.tasks.length));
    pubsub.publish('updatedList', list);

    let delProj = document.querySelectorAll('.delProj');
    delProj.forEach(elem => elem.addEventListener('click', deleteProject))
}

const deleteProject = (event) => {
    const projectList = document.getElementById('projects')

    let current = event.target.closest(".row");
    let name = current.getAttribute('project-name')    

    list = list.filter(project => project.projectName !== name ) ;
    pubsub.publish('projectDeleted', list);

    projectList.removeChild(current);
    console.log(list)  
   /* ;
    
    let parent = current.parentElement;
    parent.parentElement.removeChild(parent);*/
}


return { listen, render, list, deleteProject }
/*
const render = (container) =>{
    container.appendChild(projectTemplate);

    let delProj = document.querySelectorAll('.delProj i');
    delProj.addEventListener('click', deleteProject);

    console.log('PROJECTS: want to know if a Project is added');
    pubsub.suscribe ('projectAdded', projectAdded);

}


const projectAdded = (projectName, projectDescription, tasks) => {
    console.log(`PROJECTS: I hear that ${name} was added`);
    project = {projectName: projectName, projectDescription: projectDescription, task : tasks};
    list.push(project);

    pubsub.publish('projectUpdated', list);

    let projectList = document.getElementById('projects');
    projectList.innerHTML = ''
    projects.appendChild(projectTemplate(projectName, projectDescription, tasks))

}

return {render, deleteProject, projectAdded}
*/
})();

export default projects;