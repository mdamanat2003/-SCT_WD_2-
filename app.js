const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const menuToggle = document.querySelector("#menu-toggle");
const advPanel = document.querySelector("#advanced-functions");


menuToggle.addEventListener("click", () => {
  advPanel.style.display = (advPanel.style.display === "none") ? "block" : "none";
});


function toRadians(degree) {
  return degree * (Math.PI / 180);
}


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else if (value === "√") {
      display.value = Math.sqrt(parseFloat(display.value));
    } else if (value === "%") {
      display.value = parseFloat(display.value) / 100;
    } else if (value === "Delete") {
      display.value = display.value.slice(0, -1);
    } else if (value === "sin") {
      display.value = Math.sin(toRadians(parseFloat(display.value)));
    } else if (value === "cos") {
      display.value = Math.cos(toRadians(parseFloat(display.value)));
    } else if (value === "tan") {
      display.value = Math.tan(toRadians(parseFloat(display.value)));
    } else if (value === "log") {
      display.value = Math.log10(parseFloat(display.value));
    } else {
      display.value += value;
    }
  });
});