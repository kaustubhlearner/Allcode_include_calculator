function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character from the display
function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the percentage
function per() {
    var display = document.getElementById('display');
    display.value = eval(display.value) / 100;
}

// Calculate the square root
function squareRoot() {
    var display = document.getElementById('display');
    display.value = Math.sqrt(eval(display.value));
}

// Insert the value of Pi
function pi() {
    var display = document.getElementById('display');
    display.value += Math.PI;
}

// Evaluate the expression in the display
function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
