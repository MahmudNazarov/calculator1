const display = document.getElementById('display');

function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

function calculate() {
    try {
        const result = Function(`'use strict'; return (${display.value})`)();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = '';
}
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
