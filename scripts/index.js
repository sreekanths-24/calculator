//variables for getting two numbers
let numA, numB;

//get the display
let display = document.querySelector('.display');
let inDisplayText = display.innerText;

// get all the number buttons
let numberButton = document.querySelectorAll('.btn-no');

// display the number on the screen
for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', function() {
        
        if (display.innerText === '0') {
            display.innerText = numberButton[i].value;
        } else {
            display.innerText += numberButton[i].value;
        }

    });    
}

// get all the operators
let operatorButton = document.querySelectorAll('.btn-operator');

// display the operator on the screen
for (let j = 0; j < operatorButton.length; j++) {
    operatorButton[j].addEventListener('click', function() {
        
        if ('+' in display.innerText) {
            display.innerText = operatorButton[j].value;
        } else {
            display.innerText += operatorButton[j].value;
        }
    });    
}

// get all the helper buttons

let helperButtons = document.querySelectorAll('.btn-helper');

//perform the functions of the buttons

// clear button
helperButtons[0].addEventListener('click', function() {
    display.innerText = 0;
});    

// back button
helperButtons[1].addEventListener('click', function() {
    let displayText = display.innerText.split('');
    
    if (display.innerText.length > 1) {
        displayText.pop();
        display.innerText = displayText.toString();
    } else {
        display.innerText = 0;
    }
});    

// the equal to button
helperButtons[2].addEventListener('click', function() {
    
});

// console.log(display.innerText.pop());