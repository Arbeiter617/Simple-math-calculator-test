var inputString = "10 times 2"
var newArray = [];

var oddNumbers = [];
var evenNumbers = [];

function main() {
  calcMath();
}


function calcMath() {
  newArray = inputString.split(" ");
  
  for (var i = 0; i < newArray.length; i += 2) {
    evenNumbers.push(newArray[i]);
    newArray[i+1] && oddNumbers.push(newArray[i + 1]);
  
  }
  
  console.log(oddNumbers);
  console.log(evenNumbers);
  
  //calcTest(); 
  checkSigns();
  
}

function checkSigns() {
  for (var i = 0; i < oddNumbers.length; i++) {
    if(oddNumbers[i] === "plus") {
      inputString = inputString.replace(oddNumbers[i], "+");
    } else if(oddNumbers[i] === "minus") {
      inputString = inputString.replace(oddNumbers[i], "-");
      console.log(inputString);
    } else if(oddNumbers[i] === "divided") {
      inputString = inputString.replace(oddNumbers[i], "/");
    } else if(oddNumbers[i] === "times") {
      inputString = inputString.replace(oddNumbers[i], "*");
      console.log(inputString);
    } else {
      return;
    }
  }
  
  calcTest();
}


function calcTest() {
  console.log(eval(inputString));
}

main();




