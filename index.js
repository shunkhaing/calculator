let num1 = 7;
let num2 = 3;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

let result;

function addNumbers() {
    result = num1 + num2;
    sumEl.textContent += result;
}

function subtractNumbers() {
    result = num1 - num2;
    sumEl.textContent += result;
}

function divideNumbers(){
    result = num1 / num2;
    sumEl.textContent += result;
}

function multiplyNumbers(){
    result = num1 * num2;
    sumEl.textContent += result;
}

