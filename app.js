let value = [];
let operator ="";

function add(n, n1) {
    return (n + n1).toFixed(10).replace(/\.?0+$/, "");
}

function subtract(n, n1) {
    return (n - n1).toFixed(10).replace(/\.?0+$/, "");
}

function multiply(n, n1) {
    return (n * n1).toFixed(10).replace(/\.?0+$/, "");
}

function divide(n, n1) {
    if (n == 1 && n1 == 0){
        return "Error";
    }
    else{
        return (n / n1).toFixed(10).replace(/\.?0+$/, "");
    }
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

const numberKeys = document.querySelectorAll(".numberKeys");
const operatorKeys = document.querySelectorAll(".operatorKeys");
const topRowKeys = document.querySelectorAll(".topRowKeys");
operatorKeys.forEach(opkey => opkey.addEventListener('click', displayChange));
numberKeys.forEach(key => key.addEventListener('click', displayChange));
topRowKeys.forEach(key => key.addEventListener('click', displayChange));


function displayChange() {
    const display = document.querySelector("#display");
    const clear = document.querySelector("#clear");
    if (this.value != "clear") {
        clear.innerHTML = "C";
        if (this.value === "+" || this.value === "-" || this.value === "/" || this.value === "*") {
            if (this.value === value[1]) {
                value[1] = this.value;
            } 
            else {
                value.push(this.value);
            }
        }
        else if (value.length == 1) {
            if (this.value === "."){
                if (value[0].includes(".")) {
                    display.innerHTML = value[0];
                }
                else {
                    value[0] += this.value;
                    display.innerHTML = value[0];
                }
            }
            else if (this.value === "plusMinus"){ 
                value[0] = -value[0];
                display.innerHTML = value[0];   
            }
            else if (this.value === "percent"){  
                value[0] = (value[0]/100).toFixed(10).replace(/\.?0+$/, "");
                display.innerHTML = value[0]; 
            }
            else{
                value[0] += this.value;
                display.innerHTML = value[0];
            }
           

        }
        else if (value.length == 3) {
            if (this.value === "."){
                if (value[2].includes(".")) {
                    display.innerHTML = value[2];
                }
                else {
                    value[2] += this.value;
                    display.innerHTML = value[2];
                }
            }
            else if (this.value === "plusMinus"){ 
                value[2] = -value[2];
                display.innerHTML = value[2];   
            }
            else if (this.value === "percent"){  
                value[2] = (value[2]/100).toFixed(10).replace(/\.?0+$/, "");
                display.innerHTML = value[2]; 
            }
            else{
                value[2] += this.value;
                display.innerHTML = value[2];
            }
        }
        else {
            value.push(this.value);
            if (value.length == 1) {
                display.innerHTML = value[0];
            }
            else {
                display.innerHTML = value[2];
            }
        }
        
    }
    if (this.value == "clear") {
        clear.innerHTML = "AC";
        value = [];
        display.innerHTML = "";
    }
    if (value.length > 2 && (this.value === "+" || this.value === "-" || this.value === "/" || this.value === "*")) {
        value = [operate(value[1], parseFloat(value[0]), parseFloat(value[2])), this.value];
        display.innerHTML = value[0];
    }
    else if (this.value === "=") {
        value = [operate(value[1], parseFloat(value[0]), parseFloat(value[2]))];
        display.innerHTML = value[0];
    }
    console.log(value);

}