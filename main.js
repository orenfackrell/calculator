/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendDecimal: () => (/* binding */ appendDecimal),\n/* harmony export */   appendNumber: () => (/* binding */ appendNumber),\n/* harmony export */   appendOperator: () => (/* binding */ appendOperator),\n/* harmony export */   clearOutput: () => (/* binding */ clearOutput),\n/* harmony export */   removeLastCharacter: () => (/* binding */ removeLastCharacter)\n/* harmony export */ });\nconst output = document.querySelector('.output');\nconst previousOutput = document.querySelector('.previousOutput');\n\nfunction clearOutput() {\n  output.textContent = null;\n  previousOutput.textContent = null;\n}\n\nfunction appendNumber(number) {\n  output.textContent += number;\n}\n\nfunction appendOperator(operator) {\n  output.textContent += ` ${operator} `;\n}\n\nfunction removeLastCharacter() {\n  output.textContent = output.textContent.slice(0, -1);\n}\n\nfunction appendDecimal() {\n  const lastNumber = output.textContent.split(/[+\\-\\x÷]/).pop();\n  if (!lastNumber.includes('.')) {\n    output.textContent += '.';\n  }\n}\n\n\n//# sourceURL=webpack://calculator/./src/display.js?");

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations */ \"./src/operations.js\");\n\n\n\n\nfunction addEventListeners(\n  clear,\n  numberButtons,\n  operators,\n  backspace,\n  decimal,\n  equals,\n) {\n  clear.addEventListener('click', () => {\n    console.log('clear');\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.clearOutput)();\n  });\n\n  numberButtons.forEach((button) => {\n    button.addEventListener('click', () => {\n      console.log('number');\n      (0,_display__WEBPACK_IMPORTED_MODULE_0__.appendNumber)(button.textContent);\n    });\n  });\n\n  operators.forEach((button) => {\n    button.addEventListener('click', () => {\n      console.log('operator');\n      (0,_display__WEBPACK_IMPORTED_MODULE_0__.appendOperator)(button.textContent);\n    });\n  });\n\n  backspace.addEventListener('click', () => {\n    console.log('backspace');\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.removeLastCharacter)();\n  });\n\n  decimal.addEventListener('click', () => {\n    console.log('decimal');\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.appendDecimal)();\n  });\n\n  equals.addEventListener('click', () => {\n    console.log('equals');\n    (0,_operations__WEBPACK_IMPORTED_MODULE_1__.calculate)();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListeners);\n\n\n//# sourceURL=webpack://calculator/./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations */ \"./src/operations.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\n\n\n\nconst output = document.querySelector('.output');\nconst previousOutput = document.querySelector('.previousOutput');\nconst clear = document.querySelector('.clear');\nconst equals = document.querySelector('.equals');\nconst decimal = document.querySelector('.decimal');\nconst operators = document.querySelectorAll('.operator');\nconst numberButtons = document.querySelectorAll('.number');\nconst backspace = document.querySelector('.backspace');\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n    clear,\n    numberButtons,\n    operators,\n    backspace,\n    decimal,\n    equals,\n  );\n});\n\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ }),

/***/ "./src/operations.js":
/*!***************************!*\
  !*** ./src/operations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addition: () => (/* binding */ addition),\n/* harmony export */   calculate: () => (/* binding */ calculate),\n/* harmony export */   division: () => (/* binding */ division),\n/* harmony export */   handleAdditionAndSubtraction: () => (/* binding */ handleAdditionAndSubtraction),\n/* harmony export */   handleMultiplicationAndDivision: () => (/* binding */ handleMultiplicationAndDivision),\n/* harmony export */   multiplication: () => (/* binding */ multiplication),\n/* harmony export */   operate: () => (/* binding */ operate),\n/* harmony export */   subtraction: () => (/* binding */ subtraction)\n/* harmony export */ });\nfunction addition(a, b) {\n  return a + b;\n}\n\nfunction subtraction(a, b) {\n  return a - b;\n}\n\nfunction multiplication(a, b) {\n  return a * b;\n}\n\nfunction division(a, b) {\n  if (b === 0) {\n    return 'ERROR!';\n  }\n  return a / b;\n}\n\n// 'BIDMAS' logic\nfunction handleMultiplicationAndDivision(calculation) {\n  for (let i = 0; i < calculation.length; i = +1) {\n    if (calculation[i] === 'x' || calculation[i] === '÷') {\n      const result =\n        calculation[i] === 'x'\n          ? multiplication(\n              parseFloat(calculation[i - 1]),\n              parseFloat(calculation[i + 1]),\n            )\n          : division(\n              parseFloat(calculation[i - 1]),\n              parseFloat(calculation[i + 1]),\n            );\n\n      calculation.splice(i - 1, 3, result);\n      i = -1;\n    }\n  }\n  return calculation;\n}\n\nfunction handleAdditionAndSubtraction(calculation) {\n  for (let i = 0; i < calculation.length; i = +1) {\n    if (calculation[i] === '+' || calculation[i] === '-') {\n      const result =\n        calculation[i] === '+'\n          ? addition(\n              parseFloat(calculation[i - 1]),\n              parseFloat(calculation[i + 1]),\n            )\n          : subtraction(\n              parseFloat(calculation[i - 1]),\n              parseFloat(calculation[i + 1]),\n            );\n\n      calculation.splice(i - 1, 3, result);\n      i = -1;\n    }\n  }\n  return calculation;\n}\n\nconst output = document.querySelector('.output');\nconst previousOutput = document.querySelector('.previousOutput');\n\nfunction operate() {\n  let calculation = output.textContent.split(' ');\n\n  // Handle multiplication and division first\n  calculation = handleMultiplicationAndDivision(calculation);\n\n  // Then handle addition and subtraction\n  calculation = handleAdditionAndSubtraction(calculation);\n\n  [output.textContent] = calculation;\n}\n\nfunction calculate() {\n  previousOutput.textContent = `${output.textContent} =`;\n\n  const calculation = output.textContent.split(' ');\n  const result = operate(...calculation);\n\n  const roundedResult = parseFloat(result.toFixed(10)).toString();\n  output.textContent = roundedResult;\n\n  if (output.textContent === 'ERROR!') {\n    alert(\"Use 'AC' or refresh the browser to re-try, don't divide by 0\");\n  }\n}\n\n\n//# sourceURL=webpack://calculator/./src/operations.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;