const numInput = document.getElementById("number-input");
const resultDiv = document.getElementById("result-text");
function superFunc(system) {
  const num = parseInt(numInput.value, 10);
  const binary = num.toString(system);
  resultDiv.innerText = `The binary representation of ${num} is ${binary}`;
}