
const display = document.getElementById("display");
const result = document.getElementById("result");

let expression = "";

// Update the display
function updateDisplay() {
    display.textContent = expression || "0";
}

// Add numbers/operators
function appendValue(value) {
    expression += value;
    updateDisplay();
}

// Clear everything
function clearDisplay() {
    expression = "";
    result.textContent = "";
    updateDisplay();
}

// Delete the last character
function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

// Calculate the result
function calculate() {
    try {
        const answer = eval(expression);
        result.textContent = expression + " =";
        expression = answer.toString();
        updateDisplay();
    } catch {
        display.textContent = "Error";
        expression = "";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {

    const key = event.key;

    // Numbers and operators
    if (!isNaN(key) || "+-*/.%".includes(key)) {
        appendValue(key);
    }

    // Calculate
    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Delete last character
    if (key === "Backspace") {
        event.preventDefault();
        deleteLast();
    }

    // Clear display
    if (key === "Escape") {
        clearDisplay();
    }
});

// Initialize display
updateDisplay();