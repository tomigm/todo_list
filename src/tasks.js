import pubsub from './pubsub';

const tasks = (() => {
let list = [];
const listen = () => {    
    pubsub.subscribe('taskOpened', renderCurrent);
    pubsub.subscribe('taskAdded', render);
}

const render = (data) => {
    console.log(data)
}

const renderCurrent = (data) => {
    console.log(data)
}

const deleteTask = () => {

}

return { listen, render, list, deleteTask,  }

})();

export default tasks;