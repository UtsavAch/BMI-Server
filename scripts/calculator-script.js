const display = document.getElementById("display");
const buttons = document.querySelectorAll("#calculator td");
let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", async () => {
    const buttonText = button.textContent;

    if (buttonText === "C") {
      currentInput = "";
      display.textContent = "0";
    } else if (buttonText === "=") {
      const response = await fetch("http://localhost:3000/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ expression: currentInput }),
      });

      const result = await response.json();

      if (response.ok) {
        display.textContent = result.result;
      } else {
        display.textContent = "Error";
      }
    } else {
      if (currentInput === "0") {
        currentInput = buttonText;
      } else {
        currentInput += buttonText;
      }
      display.textContent = currentInput;
    }
  });
});
