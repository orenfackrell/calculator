// import { addition, subtraction, multiplication, division } from './operations';
// import {
//   clearOutput,
//   appendNumber,
//   appendOperator,
//   removeLastCharacter,
//   appendDecimal,
// } from './display';

import addEventListeners from './eventListeners';

const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const operators = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const backspace = document.querySelector('.backspace');

document.addEventListener('DOMContentLoaded', () => {
  addEventListeners(
    clear,
    numberButtons,
    operators,
    backspace,
    decimal,
    equals,
  );
});
