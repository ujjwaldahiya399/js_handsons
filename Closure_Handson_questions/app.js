// Question 1:-     
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter());// 4

// This is an example of closure where inner function is accessing the variable of outer function and then increasing that by one with every call;


// Question 2:- 
let count = 0;
(function () {
    if (count === 0) {
      let count = 1;
      console.log(count); // What is logged? // 1
    }
    console.log(count); // What is logged? // 0
  })();


  // Question 3:- 
  for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
// Output will be 3,3,3 as i will be updated very quickly as compared to the setTimeout time interval and after that finally the output will be logged.


// Question 4:-Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
function calculateArea(length){
    function innerFunction(breadth) {
        return length*breadth;
    }
    return innerFunction;
}
let rectangleArea = calculateArea(10); // calling outer function and giving length =10;
let area = rectangleArea(11); // calling inner function and giving breadth = 11;
console.log(area); // 110



// Question 5:- Take a variable in outer function and create an inner function to increase the counter every time it is called
function outerFunc() {
    let count = 0;
    function innerFunc() {
        return count++;
    }
    return innerFunc;
}
let counter_1 = outerFunc();
console.log(counter_1()); // 0;



// Question 6:- "Print Output

var a = 12;
(function () {
  console.log(a); // 12
})();



// Question 7:- 
var a = 10;
var x = (function () {
    var a = 12;
    return function () {
      alert(a); // 12
    };
  })();
  x();


  // Question 8:- 
  var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = "" + "outerArg" + "\n" +
        ""innerArg = "" + innerArg + ""\n"" +
        ""outerVar = "" + outerVar + ""\n"" +
        ""innerVar = "" + innerVar + ""\n"" +
        ""globalVar = "" + globalVar);
    
    })(456);
})(123);