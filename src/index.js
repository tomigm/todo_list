import  next  from './Mfunctions';
import projects from './projects';
import tasks from './tasks';
import projectForm from './projectsForm'
import tasksForm from './tasksForm'

M.AutoInit();

/*FEATURE DISCOVERY BLOCK*/

const helpBtn = document.getElementById('helpBtn');
const nextHelpBtn = document.getElementById('nextHelp');
helpBtn.addEventListener('click', function() {next(0)});
nextHelpBtn.addEventListener('click', function() {next(1)});

/*FEATURE DISCOVERY BLOCK*/
 

