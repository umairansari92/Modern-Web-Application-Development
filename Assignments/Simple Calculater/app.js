let calculated = false; // Track if result was calculated

function getValue(number) {
    var input = document.getElementById("input");

    if (calculated) {
        input.value = ""; // Reset if previous result was calculated
        calculated = false;
    }

    input.value += number;
    adjustFontSize(); // Adjust font size dynamically
}

function equalTo() {
    var input = document.getElementById("input");
    try {
        input.value = eval(input.value);
        calculated = true; // Mark calculation as done
    } catch (error) {
        input.value = "Error"; // Handle invalid input
    }
    adjustFontSize(); // Adjust after calculation
}

function deleteLastCharacter() {
    var input = document.getElementById("input");
    input.value = input.value.slice(0, -1);
    adjustFontSize(); // Adjust after deletion
}

function clearInput() {
    var input = document.getElementById("input");
    input.value = "";
    calculated = false; // Reset calculation flag
    adjustFontSize(); // Reset font size
}

// Function to dynamically adjust font size
function adjustFontSize() {
    var input = document.getElementById("input");
    var length = input.value.length;
    
    if (length > 20) {
        input.style.fontSize = "1.5rem"; /* Smallest font for long input */
    } else if (length > 10) {
        input.style.fontSize = "2rem"; /* Medium font */
    } else {
        input.style.fontSize = "3rem"; /* Default size */
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {
    var input = document.getElementById("input");

    if (!isNaN(event.key)) {
        getValue(event.key); // Use updated getValue function
    } else if (event.key === "Enter") {
        equalTo();
    } else if (event.key === "Backspace") {
        deleteLastCharacter();
    } else if (event.key === "Delete") {
        clearInput();
    } else if (["+", "-", "*", "/"].includes(event.key)) {
        input.value += event.key;
        calculated = false; // Reset calculation flag if operator is pressed
        adjustFontSize();
    }
});
