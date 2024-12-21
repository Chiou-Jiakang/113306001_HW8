document.getElementById('calculatorForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    const resultDiv = document.getElementById('result');

    let result;

    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.textContent = "Please enter valid numbers.";
        return;
    }

    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            if (number2 === 0) {
                resultDiv.textContent = "Num can't divide by zero.";
                return;
            }
            result = divide(number1, number2);
            break;
        default:
            resultDiv.textContent = "Invalid operator.";
            return;
    }

    resultDiv.textContent = `Result = ${result.toFixed(2)}`;
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
