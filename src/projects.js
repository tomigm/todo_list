import pubsub from './pubsub';
import projectTemplate from './projectTemplate'

const projects = (() => {

    // Creates empty projects list
let list = [];
 // Selects project list
const projectList = document.getElementById('projects')
    // Makes projects to start listening
const listen = () => {
    
    // it suscribes to 'projectAdded' tyhat comes from projectForm.js // executes render()
    pubsub.subscribe('projectAdded', add);
    pubsub.subscribe('updatedTaskList', updateCounter)
    
}



const render = data => {       

    projectList.append(projectTemplate(data.projectName, data.projectDescription, data.tasks.length));    

    // adds an event listener to delete icon in each project (rendered) ==> runs deleteProject()
    let delProj = document.querySelectorAll('.delProj');
        delProj.forEach(elem => elem.addEventListener('click', deleteProject))

 let project = document.querySelectorAll('.project');
        project.forEach(proj => proj.addEventListener('click', openTasks))

       
        
            var elems = projectList.querySelectorAll('.tooltipped');
            M.Tooltip.init(elems);
          
}

const add = data => {
// pushes info from 'projectAdded' pubsub to project list if it doesn't exist yet.
    if (list.find(project => (project.projectName === data.projectName))) {return alert('Project exists')};
    if (data.projectName == '') {return alert('Assign a name to the project')}
    list.push(data);
    console.log (list); 
    pubsub.publish('updatedList', list);

    render(data);
}

const deleteProject = (event) => {
   
    // Grabs parent from clicked delete icon ==> it gets its project-name data
    let current = event.target.closest(".row");
    let name = current.getAttribute('project-name')    
    //makes a new list with all the projects EXCEPT the one clicked that matches projectName
    list = list.filter(project => project.projectName !== name ) ;
    // publishes globally the new updated list without the deleted project
    pubsub.publish('projectDeleted', list);
    // removes parent from DOM
    projectList.removeChild(current);
    let elem = current.querySelector('.tooltipped');
        let instance = M.Tooltip.init(elem)
        instance.destroy()
    console.log(list)  
 
}

const openTasks = (event) => {
    let toggleActive = event.target.closest(".collection-item");
    let active = document.querySelectorAll(".collection-item");

    active.forEach(activeElement => activeElement.classList.remove("active"))
    
    toggleActive.classList.add("active")

    let current = event.target.closest(".row");
    
    let name = current.getAttribute('project-name');
    //console.log(name);   
    let currentTasks = list.find(project => (project.projectName === name))
    

    pubsub.publish('taskOpened', currentTasks)
    //console.log (currentTasks.tasks)
                    
    
}

const updateCounter = (data) => {
    let active = document.querySelector(".active > span.badge");
    
    active.innerHTML = `${data.length}`;
}


return { listen, render, list, deleteProject, updateCounter }

})();

export default projects;