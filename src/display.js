const output = document.querySelector('.output');
const previousOutput = document.querySelector('.previousOutput');

export function clearOutput() {
  output.textContent = null;
  previousOutput.textContent = null;
}

export function appendNumber(number) {
  output.textContent += number;
}

export function appendOperator(operator) {
  output.textContent += ` ${operator} `;
}

export function removeLastCharacter() {
  output.textContent = output.textContent.slice(0, -1);
}

export function appendDecimal() {
  const lastNumber = output.textContent.split(/[+\-\x÷]/).pop();
  if (!lastNumber.includes('.')) {
    output.textContent += '.';
  }
}
