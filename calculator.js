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

function operate(operator, a, b){
    if(operator === add.textContent){
        addition(a, b);
    } else if(operator === subtract.textContent){
        subtract(a, b);
    } else if(operator == multiply.textContent){
        multiplication(a, b);
    } else {
        division(a, b);
    }
};
