import pubsub from './pubsub';

const getData = (() => {

    const listen = () => {
      pubsub.subscribe('updatedList', addData);
    }

    const addData = (data) => {
        localStorage.setItem('projectList', JSON.stringify(data) )
    }

    return { listen, addData }

})();

export default getData;
