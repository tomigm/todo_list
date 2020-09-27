import  next  from './Mfunctions';
import projects from './projects';
import tasks from './tasks';
import projectsForm from './projectsForm'
import tasksForm from './tasksForm'
import editTaskForm from './editTaskForm'
import intro from './introductionProjects'




/*FEATURE DISCOVERY BLOCK*/

const helpBtn = document.getElementById('helpBtn');
const nextHelpBtn = document.getElementById('nextHelp');
helpBtn.addEventListener('click', function() {next(0)});
nextHelpBtn.addEventListener('click', function() {next(1)});

/*FEATURE DISCOVERY BLOCK*/
 
projectsForm.submit();
projects.listen();
tasksForm.submit();
tasks.listen();
editTaskForm.listen();
intro.init();
M.AutoInit(); // 1 solucion es agregar esto al final de cada render

