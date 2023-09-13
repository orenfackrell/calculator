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

  operate() {
    let calculation = this.output.textContent.split(' ');
  
    // Handle multiplication and division first
    calculation = this.handleMultiplicationAndDivision(calculation);
  
    // Then handle addition and subtraction
    calculation = this.handleAdditionAndSubtraction(calculation);
  
    this.output.textContent = calculation[0];
  }
  
  handleMultiplicationAndDivision(calculation) {
    for (let i = 0; i < calculation.length; i++) {
      if (calculation[i] === 'x' || calculation[i] === '÷') {
        const result = calculation[i] === 'x' ?
          this.multiplication(parseFloat(calculation[i - 1]), parseFloat(calculation[i + 1])) :
          this.division(parseFloat(calculation[i - 1]), parseFloat(calculation[i + 1]));
  
        calculation.splice(i - 1, 3, result);
        i--;
      }
    }
    return calculation;
  }
  
  handleAdditionAndSubtraction(calculation) {
    for (let i = 0; i < calculation.length; i++) {
      if (calculation[i] === '+' || calculation[i] === '-') {
        const result = calculation[i] === '+' ?
          this.addition(parseFloat(calculation[i - 1]), parseFloat(calculation[i + 1])) :
          this.subtraction(parseFloat(calculation[i - 1]), parseFloat(calculation[i + 1]));
  
        calculation.splice(i - 1, 3, result);
        i--;
      }
    }
    return calculation;
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