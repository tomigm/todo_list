const projectTemplate = (name, description, tasks) => {
    let div = document.createElement('div');
    div.setAttribute('class', 'row');
    div.innerHTML = `
    
    <div class="col s12 project collection-item tooltipped" data-position="right" data-tooltip="${description}">
          
          <a href ="#"><i class="material-icons" id="delProj">delete</i></a>
          <span class="name">${name}</span>
          <span class="new badge" data-badge-caption="tasks">${tasks}</span>           

    </div>

    `
    return div;

}

export default projectTemplate