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

    let project = document.querySelectorAll('.project');
        project.forEach(proj => proj.addEventListener('click', openTasks))
    
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
 
}

const openTasks = (event) => {
    let current = event.target.closest(".row");
    let name = current.getAttribute('project-name');
    console.log(name);   
    let currentTasks = list.find(project => (project.projectName === name))
    

    pubsub.publish('taskOpened', currentTasks)
    console.log (currentTasks.tasks)
                    
    
}


return { listen, render, list, deleteProject,  }

})();

export default projects;