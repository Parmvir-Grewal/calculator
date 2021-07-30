function add(n, n1) {
    return n + n1;
}

function subtract(n, n1) {
    return n - n1;
}

function multiply(n, n1) {
    return n * n1;
}

function divide(n, n1) {
    return n / n1;
}

function operate(operator, n, n1) {
    switch (operator) {
        case "+":
            return add(n, n1);
            break;
        case "-":
            return subtract(n, n1);
            break;
        case "*":
            return multiply(n, n1);
            break;
        case "/":
            return divide(n, n1);
            break;
    }
}