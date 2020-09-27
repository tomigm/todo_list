import pubsub from './pubsub';

const getData = (() => {

    const listen = () => {
       
      pubsub.subscribe('updatedList', addData);
      
    }

    const addData = (data) => {
        console.log('current data');
        console.log(data);

       /* let storedList = localStorage.getItem('projectList')
        if */
    }
/*
    const addData = data => {
      
        let JSONReadyData = JSON.stringify(data);
        console.log(JSONReadyData);
        localStorage
        localStorage.setItem('projectList', JSONReadyData)
    }

    const setData = () => {
        console.log(JSON.parse(localStorage.getItem('projectList')))
        //pubsub.publish('projectAdded', JSON.parse(localStorage.getItem('projectList')))
    }
*/
    

    return { listen, addData }

})();

export default getData;
