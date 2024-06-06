let calculation = localStorage.getItem('calculation') || '';
      
//the main variable is set here the onclick is used up there tomake the things happen when their clicked
// let calculation = '';
function updateCalculation(value){
calculation += value;
showCalculation();
localStorage.setItem('calculation',calculation)
}
function showCalculation(){
document.querySelector('.js-calculater')
 .innerHTML = calculation ;
}
