let calculation = '';

const console = document.querySelector('.console');


function updateCalculator (number) {
  
  if (number === 'C') {
        
        calculation = '';
        
    }
  
  else if (calculation === '') {
  
      calculation = number;
  
  }
  
  else{

      calculation += number;
      
  };

  return calculation;

}
  

function display () {
  
  console.value = `${calculation}`;
}