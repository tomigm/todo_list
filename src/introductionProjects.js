import pubsub from './pubsub';

const intro = (() => {
    
    const init = () => {
    pubsub.publish('projectAdded', {projectName:'Project 1', projectDescription:'On hover, project description is shown', tasks:[{taskName:'Example task', taskDescription:'Short task description', dueDate:"Sep 23, 2025", priority:'MEDIUM' }, {taskName:'Fancy task', taskDescription:'long task description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus quam aliquid tenetur ut accusantium molestiae totam! Perspiciatis, explicabo ratione, natus illum eum aliquid quam eveniet.', dueDate:"Sep 23, 2025", priority:'LOW' }]})
    }
    
    return { init }
    
})();

export default intro;
