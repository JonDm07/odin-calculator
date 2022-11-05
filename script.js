let firstNumber;
let secondNumber;
let operation;
let result;

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2)
        result = add

    } else if (operator === "-") {
        return subtract(num1, num2)
        
    } else if (operator === "*") {
        return multiply(num1, num2)
        
    } else if (operator === "/") {
        return divide(num1, num2)
        
    }
}

const display = document.querySelector(".display")

function showResult(func) {
    display.textContent = func

}

const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        operation = operator.textContent
        console.log(operation)
    })
})

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if(firstNumber === undefined) {
            firstNumber = number.textContent
            console.log(`1 = ${firstNumber}`)
        } else if (firstNumber !== undefined) {
            secondNumber = number.textContent
            console.log(`2 = ${secondNumber}`)
        } else {
            console.log("error")
        }
    })

})

const equalSign = document.querySelector(".equalSign")

equalSign.addEventListener("click", () => {
    
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
    showResult(operate(operation, firstNumber, secondNumber))
    result = operate(operation, firstNumber, secondNumber)
    firstNumber = undefined
    secondNumber = undefined
    console.log(firstNumber)
    console.log(secondNumber)

})




