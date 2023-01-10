let display = document.querySelector('.display');

function btnClick(value) {
    display.value += value;
}

function clearScreen() {
    display.value = '';
}

function findResult() {
    var result = eval(display.value);
    display.value = result;
}

function backSpace() {
    let a = [];
    a = display.value.split('');
    a.pop();
    display.value = toString(a);
}