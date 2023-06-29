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

function operate(a,operator, b){
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

console.log(operate(5, '+', 10))
console.log(operate(5, '-', 10))
console.log(operate(5, 'x', 10))
console.log(operate(5, '÷', 10))