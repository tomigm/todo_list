import pubsub from './pubsub';


const intro = (() => {
    
    const init = () => {
        if( localStorage.getItem('projectList') == null ) {
            pubsub.publish('projectAdded', {projectName:'Project 1', projectDescription:'On hover, project description is shown', tasks:[{taskName:'Example task', taskDescription:'Short task description', dueDate:"Sep 23, 2025", priority:'MEDIUM' }, {taskName:'Fancy task', taskDescription:'long task description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus quam aliquid tenetur ut accusantium molestiae totam! Perspiciatis, explicabo ratione, natus illum eum aliquid quam eveniet.', dueDate:"Sep 23, 2025", priority:'LOW' }]})

        }
        else { 
            let LSArray = JSON.parse(localStorage.getItem('projectList'));
            LSArray.forEach(project => pubsub.publish ( 'projectAdded' , project));
        }

        openProject();

    }

    const openProject = () => {
        const projectList = document.getElementById('projects')
        
        if(projectList.children.length > 0){  
                
        let firstProject = projectList.firstElementChild;
        console.log(firstProject);  
        firstProject.children[0].click(); 
        } return
    }
    
    return { init }
    
})();

export default intro;
