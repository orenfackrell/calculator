export function addition(a, b) {
  return a + b;
}

export function subtraction(a, b) {
  return a - b;
}

export function multiplication(a, b) {
  return a * b;
}

export function division(a, b) {
  if (b === 0) {
    return 'ERROR!';
  }
  return a / b;
}

// 'BIDMAS' logic
export function handleMultiplicationAndDivision(calculation) {
  for (let i = 0; i < calculation.length; i += 1) {
    if (calculation[i] === 'x' || calculation[i] === '÷') {
      const result =
        calculation[i] === 'x'
          ? multiplication(
              parseFloat(calculation[i - 1]),
              parseFloat(calculation[i + 1]),
            )
          : division(
              parseFloat(calculation[i - 1]),
              parseFloat(calculation[i + 1]),
            );

      calculation.splice(i - 1, 3, result);
      i = -1;
    }
  }
  return calculation;
}

export function handleAdditionAndSubtraction(calculation) {
  for (let i = 0; i < calculation.length; i += 1) {
    if (calculation[i] === '+' || calculation[i] === '-') {
      const result =
        calculation[i] === '+'
          ? addition(
              parseFloat(calculation[i - 1]),
              parseFloat(calculation[i + 1]),
            )
          : subtraction(
              parseFloat(calculation[i - 1]),
              parseFloat(calculation[i + 1]),
            );

      calculation.splice(i - 1, 3, result);
      i = -1;
    }
  }
  return calculation;
}

const output = document.querySelector('.output');
const previousOutput = document.querySelector('.previousOutput');

export function operate() {
  let calculation = output.textContent.split(' ');

  calculation = handleMultiplicationAndDivision(calculation);
  calculation = handleAdditionAndSubtraction(calculation);

  [output.textContent] = calculation;

  return output.textContent;
}

export function calculate() {
  previousOutput.textContent = `${output.textContent} =`;

  const calculation = output.textContent.split(' ');
  const result = parseFloat(operate(...calculation));
  console.log({ calculation, result });

  const roundedResult = parseFloat(result.toFixed(10)).toString();
  output.textContent = roundedResult;

  if (output.textContent === 'ERROR!') {
    alert("Use 'AC' or refresh the browser to re-try, don't divide by 0");
  }
}
