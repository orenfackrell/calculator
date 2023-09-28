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
