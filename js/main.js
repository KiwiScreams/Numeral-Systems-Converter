const numInput = document.getElementById("number-input");
const inputBaseSelect = document.getElementById("input-base-select");
const resultText = document.getElementById("result");
const binaryButton = document.getElementById("binary-button");
const octalButton = document.getElementById("octal-button");
const decimalButton = document.getElementById("decimal-button");
const hexadecimalButton = document.getElementById("hexadecimal-button");
const fixedPanel = document.getElementById("fixed-panel");
const panelText = document.getElementById("panel-text");
const closeButton = document.getElementById("close-panel");

function superFunc(base) {
  const number = numInput.value;
  const inputBase = parseInt(inputBaseSelect.value);

  if (!number) {
    panelText.textContent = "Please enter a number";
    fixedPanel.classList.add("show");
    return;
  }

  if (inputBase) {
    if (inputBase === 2) {
      if (!/^[01]+$/.test(number)) {
        panelText.textContent = "Binary numbers can only contain 0 and 1";
        fixedPanel.classList.add("show");
        return;
      }
    }

    const decimal = parseInt(number, inputBase);
    const result = `${decimal.toString(base)}`;
    resultText.innerText = result;
  } else {
    panelText.textContent = "Please select an input base";
    fixedPanel.classList.add("show");
  }
}

binaryButton.addEventListener("click", function () {
  superFunc(2);
});

octalButton.addEventListener("click", function () {
  superFunc(8);
});

decimalButton.addEventListener("click", function () {
  superFunc(10);
});

hexadecimalButton.addEventListener("click", function () {
  superFunc(16);
});

closeButton.addEventListener("click", function () {
  fixedPanel.classList.remove("show");
});