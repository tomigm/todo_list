const taskTemplate = (name, description, dueDate, priority) => {
    let div = document.createElement('div');
    div.setAttribute('class', 'row');
    div.innerHTML = `
    
   
    <div class="col s12">
       <div class="card">
          <div class="card-content">
             <span class="card-title name">${name}</span>
             <p class="description"> ${description} </p>
             <a class ="dueDate">${dueDate}</a>
             <a class="priority">${priority}</a>
             <label>
                <input type="checkbox" class="filled-in" checked="checked">
                <span>Mark as done</span>
              </label>       
          <div class="card-action">
             <a href="#" id='editTask'>EDIT</a>
             <a href="#" id='delTask'><i class="material-icons">delete</i></a>
          </div>
          </div>
       </div>
    </div> 
 

    `
    return div

}

export default taskTemplate