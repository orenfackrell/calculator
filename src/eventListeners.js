import {
  clearOutput,
  appendNumber,
  appendOperator,
  removeLastCharacter,
  appendDecimal,
} from './display';

import { calculate } from './operations';

const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const operators = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const backspace = document.querySelector('.backspace');

function addEventListeners() {
  clear.addEventListener('click', () => {
    clearOutput();
  });

  numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      appendNumber(button.textContent);
    });
  });

  operators.forEach((button) => {
    button.addEventListener('click', () => {
      appendOperator(button.textContent);
    });
  });

  backspace.addEventListener('click', () => {
    removeLastCharacter();
  });

  decimal.addEventListener('click', () => {
    appendDecimal();
  });

  equals.addEventListener('click', () => {
    calculate();
  });
}

export default addEventListeners;
