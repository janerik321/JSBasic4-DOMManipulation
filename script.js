const screenInput = document.querySelector("#screen");
let currentNumber = 0;
let storedNumber = 0;
let storedOperator = "";
let runConditional = false;
let firstNumberRun = true;

// Input number function
const numberClick = (number) => {
  //  ************ 3. ************
  if (storedOperator != "" && runConditional) {
    screenInput.value = "";
    runConditional = false;
  }

  screenInput.value += number;
  currentNumber = screenInput.value;
  console.log("Current " + currentNumber);
};

// Operator function
function operatorClick(operator) {
  if (!firstNumberRun) {
    if (storedOperator === "+") {
      storedNumber += parseInt(currentNumber);
    } else if (storedOperator === "-") {
      storedNumber -= currentNumber;
    } else if (storedOperator === "*") {
      storedNumber *= currentNumber;
    } else if (storedOperator === "/") {
      storedNumber /= currentNumber;
    }
  } else {
    firstNumberRun = false;
    storedNumber = parseInt(currentNumber);
  }
  storedOperator = operator;
  console.log("Stored " + storedOperator);
  console.log("Stored " + storedNumber);
  runConditional = true;
  screenInput.value = storedNumber;
}

// Clear function
const clearClick = () => {
  screenInput.value = "";
  currentNumber = 0;
  storedNumber = 0;
  storedOperator = "";
  runConditional = false;
  firstNumberRun = true;
};
