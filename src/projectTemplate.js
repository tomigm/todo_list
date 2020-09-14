const projectTemplate = (name, description, tasks) => {
    let div = document.createElement('div');
    div.setAttribute('class', 'row');
    div.setAttribute('project-name', `${name}`);
    div.innerHTML = `
    
    <div class="col s12 project collection-item tooltipped" data-position="right" data-tooltip="${description}">
          
          <i class="material-icons delProj">delete</i>
          <span class="name">${name}</span>
          <span class="new badge" data-badge-caption="tasks">${tasks}</span>           

    </div>

    `

    
    return div;
    

}

export default projectTemplate