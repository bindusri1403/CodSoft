const display = document.querySelector('.display input');
function updateDisplay(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}
function clearDisplay() {
    display.value = "0";
}
function deleteLastChar() {
    display.value = display.value.slice(0, -1) || "0";
}
function calculate() {
    try {
        display.value = eval(display.value); 
    } catch (error) {
        display.value = "Error";
    }
}

document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.value;

        if (value === "AC") {
            clearDisplay();
        } else if (value === "DEL") {
            deleteLastChar();
        } else if (value === "=") {
            calculate();
        } else {
            updateDisplay(value);
        }
    });
});
clearDisplay();
