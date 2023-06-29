const add = document.querySelector('.addition');
const subtract = document.querySelector('.subtract'); 
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide'); 
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
	return a / b;
};

function operate(a, operator, b){
    if(operator === '+'){
        return addition(a, b);
    } else if(operator === '-'){
        return subtraction(a, b);
    } else if(operator === 'x'){
        return multiplication(a, b);
    } else if(operator === '÷'){
        return division(a, b);
    } else {
        return null;
    }
};

console.log(operate(5, '+', 10));
console.log(operate(5, '-', 10));
console.log(operate(5, 'x', 10));
console.log(operate(5, '÷', 10));

let buttons = document.querySelectorAll('button')
let number = document.querySelectorAll('.number');
let operators =  document.querySelectorAll('.operator');
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
})

equals.addEventListener('click', () => {

    previousOutput.textContent = `${output.textContent} =`;

    calcStorage = output.textContent.split(' ');

    console.log(calcStorage)

    let a = parseFloat(calcStorage[0]);
    let operator = calcStorage[1];
    let b = parseFloat(calcStorage[2]);

    output.textContent = operate(a, operator, b)
});
}

constructCalculation()