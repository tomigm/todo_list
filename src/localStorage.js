import pubsub from './pubsub';

const getData = (() => {

    const listen = () => {
       
      pubsub.subscribe('updatedList', addData);
      
    }

    const addData = (data) => {
        console.log('current data');
        console.log(data);
        localStorage.setItem('projectList', JSON.stringify(data) )

    }
    
    return { listen, addData }

})();

export default getData;
