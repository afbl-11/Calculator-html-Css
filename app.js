const display = document.getElementById('display');

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function addNumeric(value) {
    display.value += value;
}

document.getElementById('seven').addEventListener('click', () => addNumeric('7'));
document.getElementById('eight').addEventListener('click', () => addNumeric('8'));
document.getElementById('nine').addEventListener('click', () => addNumeric('9'));
document.getElementById('four').addEventListener('click', () => addNumeric('4'));
document.getElementById('five').addEventListener('click', () => addNumeric('5'));
document.getElementById('six').addEventListener('click', () => addNumeric('6'));
document.getElementById('one').addEventListener('click', () => addNumeric('1'));
document.getElementById('two').addEventListener('click', () => addNumeric('2'));
document.getElementById('three').addEventListener('click', () => addNumeric('3'));
document.getElementById('zero').addEventListener('click', () => addNumeric('0'));

document.getElementById('H').addEventListener('click', () => addToDisplay('+'));
document.getElementById('C').addEventListener('click', clearDisplay);
document.getElementById('DE').addEventListener('click', deleteLastChar);
document.getElementById('/').addEventListener('click', () => addToDisplay('/'));
document.getElementById('*').addEventListener('click', () => addToDisplay('*'));
document.getElementById('-').addEventListener('click', () => addToDisplay('-'));
document.getElementById('+').addEventListener('click', () => addToDisplay('+'));
document.getElementById('.').addEventListener('click', () => addToDisplay('.'));
document.getElementById('equals').addEventListener('click', calculateResult);
