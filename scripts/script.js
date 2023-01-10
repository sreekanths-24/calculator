let display = document.querySelector('.display');

function btnClick(value) {
    display.value += value;
}

function clearScreen() {
    display.value = '';
}

function findResult() {
    var result = eval(display.value);
    
    if (result == NaN) {
        display.value = 'Undifined Answer';
    } else {
        display.value = result;
    }
}

function backSpace() {
    display.value = display.value.slice(0,-1);
}