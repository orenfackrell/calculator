import {
  clearOutput,
  appendNumber,
  appendOperator,
  removeLastCharacter,
  appendDecimal,
} from './display';

import { calculate } from './operations';

function addEventListeners(
  clear,
  numberButtons,
  operators,
  backspace,
  decimal,
  equals,
) {
  clear.addEventListener('click', () => {
    console.log('clear');
    clearOutput();
  });

  numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log('number');
      appendNumber(button.textContent);
    });
  });

  operators.forEach((button) => {
    button.addEventListener('click', () => {
      console.log('operator');
      appendOperator(button.textContent);
    });
  });

  backspace.addEventListener('click', () => {
    console.log('backspace');
    removeLastCharacter();
  });

  decimal.addEventListener('click', () => {
    console.log('decimal');
    appendDecimal();
  });

  equals.addEventListener('click', () => {
    console.log('equals');
    calculate();
  });
}

export default addEventListeners;
