const numInput = document.getElementById("number-input");
const inputBaseSelect = document.getElementById("input-base-select");
const resultDiv = document.getElementById("result-text");

function superFunc(outputBase) {
  const inputBase = parseInt(inputBaseSelect.value, 10);
  let num;
  switch (inputBase) {
    case 2:
      num = binaryToDecimal(numInput.value);
      break;
    case 8:
      num = octalToDecimal(numInput.value);
      break;
    case 10:
      num = parseInt(numInput.value, 10);
      break;
    case 16:
      num = hexadecimalToDecimal(numInput.value);
      break;
    default:
      console.error("Invalid input base");
      return;
  }
  const originalNum = numInput.value;
  const converted = num.toString(outputBase);
  resultDiv.innerText = `The ${
    outputBase === 2
      ? "binary"
      : outputBase === 8
      ? "octal"
      : outputBase === 10
      ? "decimal"
      : "hexadecimal"
  } representation of ${originalNum} is ${converted}`;
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
