let firstNumber = ""
let secondNumber = ""
let operation = ""
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
        if (operation === "") {
            operation += operator.textContent
            console.log(operation)
        } else if (firstNumber !== "" && secondNumber !== "" && operation !== "" ) {
            firstNumber = parseFloat(firstNumber)
            secondNumber = parseFloat(secondNumber)
            result = operate(operation, firstNumber, secondNumber)
            operation = ""
            operation += operator.textContent
            firstNumber = ""
            secondNumber = ""

        } else if (result !== "" && secondNumber !== "" && operation !== "") {
            result = parseFloat(result)
            secondNumber = parseFloat(secondNumber)
            result = operate(operation, result, secondNumber)
            operation = ""
            operation += operator.textContent
            secondNumber = ""
        }

        if (operation !== "") {
            operation = operator.textContent
        }

        if (result !== undefined) {
            display.textContent = `${result} ${operation} ${secondNumber}`
        } else {
            display.textContent = `${firstNumber} ${operation} ${secondNumber}`
        }
    })
})

numbers.forEach((number) => {
    number.addEventListener("click", () => { 
        if (operation === "") {
            firstNumber += number.textContent
            console.log(firstNumber)
        } else if (result !== "" && operation !== "") {
            secondNumber += number.textContent                  
                
        } else if (result !== "" && secondNumber === "" && operation !== "") {
            secondNumber += number.textContent
            console.log(secondNumber)

        } else {
            secondNumber += number.textContent
            console.log(secondNumber)            
        }
        if (result !== undefined && operation === "") {
            result += number.textContent
        }
        
        if (operation === "/" && secondNumber === "0") {
            alert('Error 0: You tried dividing with 0')
            secondNumber = ""
        }

        if (result !== undefined) {
            display.textContent = `${result} ${operation} ${secondNumber}`
        } else {
            display.textContent = `${firstNumber} ${operation} ${secondNumber}`
        }
        
 
    })
})

const equalSign = document.querySelector(".equalSign")

equalSign.addEventListener("click", () => {
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
    if (result !== undefined) {
        result = parseFloat(result)
        showResult(operate(operation, result, secondNumber))
        result = operate(operation, result, secondNumber)

    } else {
        showResult(operate(operation, firstNumber, secondNumber))
        result = operate(operation, firstNumber, secondNumber)
    }
   
    firstNumber = ""
    secondNumber = ""
    operation = ""
    console.log(firstNumber)
    console.log(secondNumber)

})

const clear = document.querySelector(".clear")


clear.addEventListener("click", () => {
    display.textContent = ""
    firstNumber = ""
    secondNumber = ""
    operation = ""
    result = ""
})

const backspace = document.querySelector(".backspace")

backspace.addEventListener("click", () => {
    if (firstNumber !== "" && operation !== "" && secondNumber !== "") {
        secondNumber = secondNumber.slice(0, -1)
    } else if(firstNumber !== "" && operation !== "" && secondNumber === "") {
        operation = operation.slice(0, -1)
    } else if (firstNumber !== "" && operation === "" && secondNumber === "") {
        firstNumber = firstNumber.slice(0, -1)
    } else if (result !== "" && operation !== "" && secondNumber !== "") {
        secondNumber = secondNumber.slice(0, -1)
    } else if(result !== "" && operation !== "" && secondNumber === "") {
        operation = operation.slice(0, -1)
    } else if (result !== "" && operation === "" && secondNumber === "") {
        result = result.slice(0, -1)
    }
        


    if (result !== undefined) {
        display.textContent = `${result} ${operation} ${secondNumber}`
    } else {
        display.textContent = `${firstNumber} ${operation} ${secondNumber}`
    }
    
})

