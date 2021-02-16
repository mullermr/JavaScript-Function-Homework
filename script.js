var wrapper = document.querySelector(".wrapper");
var resultEle = document.querySelector(".result");
var submitEle = document.querySelector(".submit");

// main function
function display(){
  // propmting user of how many miles per year they drive and saving to variable 
  var numberOfMilesPerYear = Number(prompt("Please enter the number of miles per year that you drive: "));

  // propmting user of current price of gas and saving to variable 
  var costOfGas = Number(prompt("Please enter the current cost of a gallon of gas: "));
  
  // updating the results div in the html to store the answers 
  resultEle.innerHTML = calculation(numberOfMilesPerYear, costOfGas, 12) + "<br>";
  resultEle.innerHTML += calculation(numberOfMilesPerYear, costOfGas, 17) + "<br>";
  resultEle.innerHTML += calculation(numberOfMilesPerYear, costOfGas, 26) + "<br>";
  resultEle.innerHTML += calculation(numberOfMilesPerYear, costOfGas, 29);
}

// calculating the cost and returning the statement 
function calculation(num1, num2, num3){
  return "To drive a car with a MPG rating of " + num3 + " for " + num1 + " miles at $" + num2 + " per gallon would cost $" + ((num1 / num3) * num2).toFixed(2);  
}

display();

// button event when clicked reruns function 
submitEle.addEventListener("click", function(){
  display();
})