const numInput = document.getElementById("number-input");
const inputBaseSelect = document.getElementById("input-base-select");
const resultText = document.getElementById("result");
const binaryButton = document.getElementById("binary-button");
const octalButton = document.getElementById("octal-button");
const decimalButton = document.getElementById("decimal-button");
const hexadecimalButton = document.getElementById("hexadecimal-button");

function superFunc(base) {
  const number = numInput.value;
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
    const result = `${decimal.toString(base)}`;
    resultText.innerText = result;
  } else {
    alert("Please select an input base.");
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