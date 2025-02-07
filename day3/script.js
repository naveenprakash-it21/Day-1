// script.js
const createCalculator = () => {
    let lastResult = 0;

    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => (b !== 0 ? a / b : "Error: Division by zero");

    const validateInput = (input) => !isNaN(parseFloat(input)) && input !== ""; // Parse float for decimals

    const updateLastResult = (result) => {
        lastResult = result;
    };

    const getLastResult = () => lastResult;

    return {
        add,
        subtract,
        multiply,
        divide,
        validateInput,
        updateLastResult,
        getLastResult,
    };
};

const calculator = createCalculator();

const display = document.getElementById("display");

const appendToDisplay = (value) => {
    display.value += value;
};

const clearDisplay = () => {
    display.value = "";
};

const calculate = () => {
    const expression = display.value;

    try {
        // Use eval() for simpler calculation (with security considerations)
        const result = eval(expression);  // Be cautious using eval in production.
        if (calculator.validateInput(result)) { // Validate the *result*
          display.value = result;
          calculator.updateLastResult(result);
        } else {
          display.value = "Error: Invalid Calculation";
        }

    } catch (error) {
        display.value = "Error: Invalid Expression";
        console.error("Calculation Error:", error); // Log the error for debugging
    }
};


// Button event listeners (Improved)
const buttons = document.querySelectorAll('.buttons button'); // More specific selector

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        switch (buttonValue) {
            case '=':
                calculate();
                break;
            case 'C':
                clearDisplay();
                break;
            default:
                appendToDisplay(buttonValue);
        }
    });
});

function print(x){
 
}

const print1 = (x) => {

}