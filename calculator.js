class Calculator {
  constructor() {
    this.output = document.querySelector('.output');
    this.previousOutput = document.querySelector('.previousOutput');
    this.clear = document.querySelector('.clear');
    this.equals = document.querySelector('.equals');
    this.decimal = document.querySelector('.decimal');
    this.operators = document.querySelectorAll('.operator');
    this.numberButtons = document.querySelectorAll('.number');
    this.backspace = document.querySelector('.backspace');
    this.calcStorage = [];
    this.addEventListeners();
  }

  addEventListeners() {
    this.clear.addEventListener('click', () => {
      this.clearOutput();
    });

    this.numberButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.appendNumber(button.textContent);
      });
    });

    this.operators.forEach(button => {
      button.addEventListener('click', () => {
        this.appendOperator(button.textContent);
      });
    });

    this.backspace.addEventListener('click', () => {
      this.removeLastCharacter();
    });

    this.decimal.addEventListener('click', () => {
      this.appendDecimal();
    });

    this.equals.addEventListener('click', () => {
      this.calculate();
    });
  }

  clearOutput() {
    this.output.textContent = null;
    this.previousOutput.textContent = null;
  }

  appendNumber(number) {
    this.output.textContent += number;
  }

  appendOperator(operator) {
    this.output.textContent += ` ${operator} `;
  }

  removeLastCharacter() {
    this.output.textContent = this.output.textContent.slice(0, -1);
  }
  
  appendDecimal() {
    const lastNumber = this.output.textContent.split(/[\+\-\x\÷]/).pop();
    if (!lastNumber.includes('.')) {
      this.output.textContent += '.';
    }
  }

  calculate() {
    this.previousOutput.textContent = `${this.output.textContent} =`;

    const calculation = this.output.textContent.split(' ');
    const result = this.operate(...calculation);

    const roundedResult = parseFloat(result.toFixed(10)).toString();
    this.output.textContent = roundedResult;

    if (this.output.textContent === 'ERROR!') {
      alert("Use 'AC' or refresh the browser to re-try, don't divide by 0");
    }
  }

  operate(...operands) {
    let result = parseFloat(operands[0]);

    for (let i = 1; i < operands.length; i += 2) {
      const operator = operands[i];
      const nextOperand = parseFloat(operands[i + 1]);

      if (operator === '+') {
        result = this.addition(result, nextOperand);
      } else if (operator === '-') {
        result = this.subtraction(result, nextOperand);
      } else if (operator === 'x') {
        result = this.multiplication(result, nextOperand);
      } else if (operator === '÷') {
        result = this.division(result, nextOperand);
      }
    }

    return result;
  }

  addition(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    if (b === 0) {
      return "ERROR!";
    } else {
      return a / b;
    }
  }
}

const calculator = new Calculator();