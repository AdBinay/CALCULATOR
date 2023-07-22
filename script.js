// Get the textarea element for displaying the output
const output = document.querySelector("textarea");

// Get all the calculator keys
const keys = document.querySelectorAll(".key");

// Helper function to evaluate the arithmetic expression
function evaluateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    return "Error";
  }
}

// Helper function to update the output display
function updateOutput(value) {
  output.value = value;
}

// Event listener for each calculator key
keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyContent = key.textContent;
    const currentExpression = output.value;

    if (keyContent === "=") {
      // Evaluate the expression and update the output
      const result = evaluateExpression(currentExpression);
      updateOutput(result);
    } else if (keyContent === "c") {
      // Clear the output
      updateOutput("");
    } else {
      // Append the clicked key content to the current expression
      updateOutput(currentExpression + keyContent);
    }
  });
});
