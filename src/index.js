import  next  from './Mfunctions';
  

M.AutoInit();



const helpBtn = document.getElementById('helpBtn');
const nextHelpBtn = document.getElementById('nextHelp');

helpBtn.addEventListener('click', function() {next(0)});
nextHelpBtn.addEventListener('click', function() {next(1)});

console.log ('hola');

 
