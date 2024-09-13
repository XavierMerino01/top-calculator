
let numericalValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let firstNumber = 0;
let secondNumber = 0;
let operator = null;

const display = document.querySelector('.screen');
let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', () => populateValues(buttons[i].textContent));
}

function populateValues(givenValue) {

	if (givenValue === "C") {
		ResetValues();
		return;
	}

	let isNumber = numericalValues.find(value => value === Number(givenValue));

	if (operator === null) {
		if (isNumber !== undefined) { firstNumber += givenValue; }
		else { operator = givenValue; }
	}
	else {
		if (isNumber !== undefined) { secondNumber += givenValue; }
		else {
			display.textContent = operate(operator, Number(firstNumber), Number(secondNumber));
			return;
		}
	}
	display.textContent += givenValue;
}

function ResetValues() {
	display.textContent = '';
	operator = null;
	firstNumber = 0;
	secondNumber = 0;
}

const add = function (a, b) {
	return a + b;
};

const substract = function (a, b) {
	return a - b;
};

const multiply = function (givenArray) {
	if (givenArray.length === 0) return 0;

	return givenArray.reduce((total, current) => total * current, 1);
};

const divide = function (a, b) {
	return a/b;
};

function operate(operator, numA, numB) {
	switch (operator) {

		case '+':
			return(add(numA, numB));
			break;
		case '-':
			return (substract(numA, numB));
			break;
		case '*':
			return (multiply([numA, numB]));
			break;
		case '/':
			if (numB === 0) {
				return "TusMuerto";
				break;
			}
			return (divide(numA, numB));
			break;


	}

}

