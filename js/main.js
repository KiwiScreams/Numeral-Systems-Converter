const numInput = document.getElementById("number-input");
const inputBaseSelect = document.getElementById("input-base-select");
const resultDiv = document.getElementById("result-text");
const binaryButton = document.getElementById("binary-button");
const octalButton = document.getElementById("octal-button");
const decimalButton = document.getElementById("decimal-button");
const hexadecimalButton = document.getElementById("hexadecimal-button");

function superFunc(base) {
  const numberInput = document.getElementById('number-input');
  const inputBaseSelect = document.getElementById('input-base-select');
  const resultText = document.getElementById('result-text');

  const number = numberInput.value;
  const inputBase = parseInt(inputBaseSelect.value);

  if (!number) {
    alert("Please enter a number.");
    return;
  }

  if (inputBase) {
    if (inputBase === 2) { 
      if (!/^[01]+$/.test(number)) {
        alert("Binary numbers can only contain 0 and 1.");
        return;
      }
    }

    const decimal = parseInt(number, inputBase);
    const result = `Base ${base}: ${decimal.toString(base)}`;
    resultText.innerText += result + '\n';
  } else {
    alert("Please select an input base.");
  }
}

function enableButtons() {
  const number = numInput.value;
  const inputBase = parseInt(inputBaseSelect.value);

  if (number && inputBase) {
    binaryButton.disabled = false;
    octalButton.disabled = false;
    decimalButton.disabled = false;
    hexadecimalButton.disabled = false;
  } else {
    binaryButton.disabled = true;
    octalButton.disabled = true;
    decimalButton.disabled = true;
    hexadecimalButton.disabled = true;
  }
}

numInput.addEventListener("input", enableButtons);
inputBaseSelect.addEventListener("change", enableButtons);

enableButtons();