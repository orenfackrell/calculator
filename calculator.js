const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals'); 

const addition = function(a, b) {
	return a + b;
};

const subtraction = function(a, b) {
	return a - b;
};

const multiplication = function(a, b) {
	return a * b;
};

const division = function(a, b) {
	if (b === 0){
        return "ERROR!"
    } else return a / b;
};

function operate(...operands) {
    let result = parseFloat(operands[0]);
  
    for (let i = 1; i < operands.length; i += 2) {
      const operator = operands[i];
      const nextOperand = parseFloat(operands[i + 1]);
  
      if (operator === '+') {
        result = addition(result, nextOperand);
      } else if (operator === '-') {
        result = subtraction(result, nextOperand);
      } else if (operator === 'x') {
        result = multiplication(result, nextOperand);
      } else if (operator === '÷') {
        result = division(result, nextOperand);
      }
    }
  
    return result;
  }

console.log(operate(5, '+', 10));
console.log(operate(5, '-', 10));
console.log(operate(5, 'x', 10));
console.log(operate(5, '÷', 10));

let buttons = document.querySelectorAll('button')
let number = document.querySelectorAll('.number');
let output = document.querySelector('.output');
let previousOutput = document.querySelector('.previousOutput');
let backspace = document.querySelector('.backspace');



function constructCalculation(){
let calcStorage = [];

clear.addEventListener('click', () =>{
    output.textContent = null;
    previousOutput.textContent = null;

})

number.forEach(button => button.addEventListener('click', () =>{ 
    let number = button.textContent;
    output.textContent += `${number}`;
}));

operators.forEach(button => button.addEventListener('click', () =>{     
    let operators = button.textContent;
    output.textContent += ` ${operators} `;
}));

backspace.addEventListener('click', () => {
    output.textContent = output.textContent.slice(0, -1);
});

equals.addEventListener('click', () => {
    previousOutput.textContent = `${output.textContent} =`;
  
    const calculation = output.textContent.split(' ');
    output.textContent = operate(...calculation);
  
    if (output.textContent === 'ERROR!') {
      alert("Use 'AC' or refresh the browser to re-try, don't divide by 0");
    }
  });
};

constructCalculation();