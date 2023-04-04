const display = document.querySelector('.calculator-screen');

const updateDisplay = (number) => {
    display.value = number;
}

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        updateDisplay(e.target.value);
    })
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.value);
        updateDisplay(currentNumber);
    })
})

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        inputOperator(e.target.value);
    })
})

const calculate = () => {
    let result = '';
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
        break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
        break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
        break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
        break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = '';
}

const precentage = document.querySelector('.precentage');

precentage.addEventListener('click', () => {
    let result = currentNumber / 100;
    updateDisplay(result);
})

const equal = document.querySelector('.equal');

equal.addEventListener('click', () => {
    calculate();
    updateDisplay(currentNumber);
})

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll()
    updateDisplay(currentNumber);
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value);
    updateDisplay(currentNumber);
})