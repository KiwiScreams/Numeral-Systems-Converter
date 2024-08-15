const numInput = document.getElementById("number-input");
const inputBaseSelect = document.getElementById("input-base-select");
const resultDiv = document.getElementById("result-text");

function superFunc(base) {
  const numberInput = document.getElementById('number-input');
  const inputBaseSelect = document.getElementById('input-base-select');
  const resultText = document.getElementById('result-text');

  const number = numberInput.value;
  const inputBase = parseInt(inputBaseSelect.value);

  if (number && inputBase) {
    if (inputBase === 2) { 
      if (!/^[01]+$/.test(number)) {
        alert("Binary numbers can only contain 0s and 1s.");
        return;
      }
    }

    const decimal = parseInt(number, inputBase);
    const result = `Base ${base}: ${decimal.toString(base)}`;
    resultText.innerText += result + '\n';
  }
}

function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

function octalToDecimal(octal) {
  return parseInt(octal, 8);
}

function hexadecimalToDecimal(hex) {
  return parseInt(hex, 16);
}