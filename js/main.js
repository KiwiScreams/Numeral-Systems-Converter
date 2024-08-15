const numInput = document.getElementById("number-input");
const inputBaseSelect = document.getElementById("input-base-select");
const resultDiv = document.getElementById("result-text");

function superFunc(outputBase) {
  const inputBase = parseInt(inputBaseSelect.value, 10);
  const num = parseInt(numInput.value, inputBase);
  const converted = num.toString(outputBase);
  resultDiv.innerText = `The ${
    outputBase === 2
      ? "binary"
      : outputBase === 8
      ? "octal"
      : outputBase === 10
      ? "decimal"
      : "hexadecimal"
  } representation of  ${converted}`;
}