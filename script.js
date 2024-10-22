const screenInput = document.querySelector("#screen");
let currentNumber = 0;
let storedNumber = 0;
let storedOperator = "";
let runConditional = false;
let firstNumberRun = true;

// ************ 1. ************

const numberClick = (number) => {
  //  ************ 3. ************
  if (storedOperator != "" && runConditional) {
    screenInput.value = "";
    runConditional = false;
  }

  screenInput.value += number;
  currentNumber = screenInput.value;

  //   console.log(screenInput);
  console.log("Current " + currentNumber);
};

// ************ 2. ************
// const operatorClick = (operator) => {
function operatorClick(operator) {
  if (!firstNumberRun) {
    // switch (storedOperator) {
    //   case "+":
    //     storedNumber += currentNumber;
    //     console.log("Case add " + storedNumber);
    //   // screenInput.value = storedNumber;

    //   case "-":
    //     storedNumber -= currentNumber;
    //     // screenInput.value = storedNumber;
    //     console.log("Case subtract " + storedNumber);

    //   case "*":
    //     storedNumber = storedNumber * currentNumber;
    //     // screenInput.value = storedNumber;
    //     console.log("Case multiply  " + storedNumber);

    //   case "/":
    //     storedNumber = storedNumber / currentNumber;
    //     // screenInput.value = storedNumber;
    //     console.log("Case divide " + storedNumber);
    // }

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
    storedNumber = currentNumber;
  }
  console.log("Stored " + storedNumber);
  storedOperator = operator;
  runConditional = true;
  screenInput.value = currentNumber;
  console.log("Stored " + storedOperator);
}

// 3.

const clearClick = () => {
  screenInput.value = "";

  //   screenInput.replaceChildren();
  //   totalNumber = 0;
};

/* 1. Input number on calc and display on screen
   2. when operator is clicked store number as storedNumber and store operator
   3. input new number and clear screen prior to the new number appearing on screen
   4. when operator or "=" is clicked run a function with 3 parameters
        (num1, operator, new number)
        calculate and display result on screen
   5. go to 3 */
