const numInput = document.getElementById("number-input");
const inputBaseSelect = document.getElementById("input-base-select");
const resultText = document.getElementById("result");
const buttonsContainer = document.querySelector(".buttons-container");
const fixedPanel = document.getElementById("fixed-panel");
const panelText = document.getElementById("panel-text");

let timeoutId = null;

function superFunc(base, event) {
  const number = numInput.value;
  const inputBase = parseInt(inputBaseSelect.value);

  if (!number) {
    panelText.textContent = "Please enter a number";
    fixedPanel.classList.add("show");
    fixedPanel.style.top = `${event.clientY}px`;
    fixedPanel.style.left = `${event.clientX}px`;
    timeoutId = setTimeout(function() {
      fixedPanel.classList.remove("show");
    }, 1500);
    return;
  }

  if (inputBase) {
    if (inputBase === 2) {
      if (!/^[01]+$/.test(number)) {
        panelText.textContent = "Binary numbers can only contain 0 and 1";
        fixedPanel.classList.add("show");
        fixedPanel.style.top = `${event.clientY}px`;
        fixedPanel.style.left = `${event.clientX}px`;
        timeoutId = setTimeout(function() {
          fixedPanel.classList.remove("show");
        }, 1500);
        return;
      }
    }

    const decimal = parseInt(number, inputBase);
    const result = `${decimal.toString(base)}`;
    resultText.innerText = result;
  } else {
    panelText.textContent = "Please select an input base";
    fixedPanel.classList.add("show");
    fixedPanel.style.top = `${event.clientY}px`;
    fixedPanel.style.left = `${event.clientX}px`;
    timeoutId = setTimeout(function() {
      fixedPanel.classList.remove("show");
    }, 1500);
  }
}

buttonsContainer.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    superFunc(parseInt(event.target.textContent), event);
  }
});