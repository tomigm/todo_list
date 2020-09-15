import pubsub from './pubsub';
import projectTemplate from './projectTemplate'

const projects = (() => {

    // Creates empty projects list
let list = [];
    // Makes projects to start listening
const listen = () => {
    
    // it suscribes to 'projectAdded' tyhat comes from projectForm.js // executes render()
    pubsub.subscribe('projectAdded', render);
}

const render = data => {
    // pushes info from 'projectAdded' pubsub to project list if it doesn't exist yet.
    if (list.find(project => (project.projectName === data.projectName))) {return alert('Project exists')};
    list.push(data);
    console.log (list);    

    // renders current project data on Projectlist
    let projects = document.getElementById('projects');
    projects.append(projectTemplate(data.projectName, data.projectDescription, data.tasks.length));
    pubsub.publish('updatedList', list);

    // adds an event listener to delete icon in each project (rendered) ==> runs deleteProject()
    let delProj = document.querySelectorAll('.delProj');
    delProj.forEach(elem => elem.addEventListener('click', deleteProject))

  
    
}

const deleteProject = (event) => {

    // Selects project list
    const projectList = document.getElementById('projects')
    // Grabs parent from clicked delete icon ==> it gets its project-name data
    let current = event.target.closest(".row");
    let name = current.getAttribute('project-name')    
    //makes a new list with all the projects EXCEPT the one clicked that matches projectName
    list = list.filter(project => project.projectName !== name ) ;
    // publishes globally the new updated list without the deleted project
    pubsub.publish('projectDeleted', list);
    // removes parent from DOM
    projectList.removeChild(current);
    console.log(list)  
   /* ;
    
    let parent = current.parentElement;
    parent.parentElement.removeChild(parent);*/
}


return { listen, render, list, deleteProject,  }
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