import pubsub from './pubsub';

const getData = (() => {
    let dataList = [];
    const listen = () => {
       
      pubsub.subscribe('updatedList', addData);
      
    }

    const Jstring = data => {
        
        let obj;
          for (let i = 0; i < data.length ; i++) {
            obj = JSON.stringify(data[i]);
            dataList.push(obj);
          }
          
          
          return dataList
    }

    const addData = (data) => {
        console.log('current data');
        console.log(data);

        

        localStorage.setItem('projectList', Jstring(data) )
        

        
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
