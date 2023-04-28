// Question 1 :-Create one function with zero parameter having a console statement;
function printHello() {
    console.log("Hello World!");
}
printHello();


// Question 2 :- Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sumOfNumbers(a, b) {
    console.log(`Sum of ${a} and ${b} is ${a+b}`);
}
sumOfNumbers(3,4);

// Question 3:- Create one arrow function
const sum = (a,b) => {
    return a+b;
}
console.log(sum(5,5));


// Question 4:- "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
// result is undefined as initailly x is assigned a value of undefined and after that it will be ipdated to 20, and we are consoling it before updation.


// Question 5:- "Print output: 
var x = 21;
girl ();
console.log(x) // 20
function girl() {
    console.log(x); // undefined
    var x = 20;
};
// result is undefined and after that 20. for undefined reason is ame as it was in above case and x inside the function is function scoped hence x will be 21 outside the function


// Question 6:-  "Print output

var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x); // 20
};
 function b() {
    
    x = 40;
   console.log(x); // 40
};
// output will 20 and 40 as same x is updating inside the both functions and then printed out.



// Question 7:- Write a function that accepts parameter n and returns factorial of n
function factorial(n) {
    if(n===0){
        return 1;
    } else {
        return n*factorial(n-1);
    }
}
console.log(factorial(5))



