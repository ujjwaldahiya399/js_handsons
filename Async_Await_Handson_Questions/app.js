// Question 1:- Write one example explaining how you can write a callback function.
// callback is a function that is passed as an argument to another function
function writeExample(arr, callback) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
function checkEven(num) {
  // this function is passed as a callback to writeExample function.
  return num % 2 == 0;
}
console.log(writeExample([2, 3, 6, 9, 10], checkEven)); // [2,6,10] all even numbers.

// Question2: -"Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on.
// Explain callback hell.:-Callback hell is a situation that can occur in JavaScript programming when there are many nested callbacks or function calls that depend on each other. This can result in code that is difficult to read, understand, and maintain.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
function printNum() {
  var num = 1;
  const maxNum = 7;
  function printNumber() {
    console.log(num);
    num++;
    if (num <= maxNum) {
      setTimeout(printNumber, num * 1000); // Delay based on the value of num
    }
  }
  setTimeout(printNumber, 1000); // this is for delay of 1 second in printing 1
}
// printNum();

// Question 3:- "Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
function printNums() {
  var num = 1;
  const maxNum = 7;
  function printNumber() {
    return new Promise((resolve) => {
      console.log(num);
      num++;
      if (num <= maxNum) {
        setTimeout(printNumber, num * 1000); // delay on the basis of number
      } else {
        resolve();
      }
    });
  }
  printNumber()
    .then(printNumber) // prinitng 1
    .then(printNumber) // prinitng 2
    .then(printNumber) // prinitng 3
    .then(printNumber) // prinitng 4
    .then(printNumber) // prinitng 5
    .then(printNumber) // prinitng 6
    .then(printNumber); // prinitng 7
}
// printNums()

// Question 4:- "Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed
// then it should go to reject the state and catch the error and print Promise Rejected "
// A funcrion that returns a promise is called promise function
function promiseFunction(arg) {
  return new Promise((resolve, reject) => {
    if (arg === "yes") {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
}
promiseFunction("yes")
  .then((result) => console.log(result))
  .catch((result) => console.log(result)); // here argument is yes hence then state will execute and prints promise resolved
promiseFunction()
  .then((result) => console.log(result))
  .catch((result) => console.log(result)); // here argument is nothing hence catch state will execute and prints promise rejected





// Question 5:- Create examples to explain callback function
function func(callbackFunction) {
    let result = 2+2;
    callbackFunction(result); // calling callback function with passing result as argument 
}
function myCallbackFunction(result){ // defining callback function with result as a parameter
    console.log("The reult is "+ result );
}
func(myCallbackFunction); // passing callback to the original function

function myFunction(callback) {
    console.log("Function started");
    setTimeout(function() {
      console.log("Function done");
      callback();
    }, 3000);
  }
  
  // Call myFunction with a callback function
  myFunction(function() {
    console.log("Callback function called");
});




// Question6 :- Create examples to explain callback hell function
setTimeout(function() {
    console.log("First");
    setTimeout(function() {
        console.log("Second");
        setTimeout(function() {
            console.log("Third");
            setTimeout(function() {
                console.log("Fourth");
                setTimeout(function() {
                    console.log("Fifth");
                },1000)
            },2000)
        },3000)
    },4000)
},5000)
// Here we are v=creating a callback hell using setTimeout, very soom this code will become difficulgt to understand and read ti avoid that we should use promise or async await keyword




// Question 7:- Create examples to explain promises function
// This is already solved as it is similar to Question number 4 above.



// Question8: - Create examples to explain async await function

// The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
async function func1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("resolved bro"),2000);
    })
    let result = await promise; // await keyword can onlyu be used inside async function, await makes JavaScript wait until that promise settles and returns its result.
    console.log(result);
}
func1();
// Here is another example of async function
function Result() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello world"),2000);
    })
}
async function printingResult() {
    let res = await Result(); // wait until Result promise is resovled and returned Hello World
    console.log(res);
}
printingResult();




// Question 9:- Create examples to explain promise.all function
// Here is an example of Promise.race()
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
  });
  
  Promise.race([promise1, promise2, promise3]) // create a new Promise that resolves or rejects as soon as one of the input Promises resolves or rejects. In other words, Promise.race() returns the result of the first Promise to resolve (or reject).
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  // Here promise 1 will resolve first as it is delayed for only 1000 ms hence the result will be Promise 1 resolved

  // Here is example of Promise.all() - it will create a promise which will resolve after all the input Promises resolved resulting Promise resolves with an array of the resolved values from each of the input Promises, in the order they were passed.
const promisee1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1is resoolved already"), 1000);
})
const promisee2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2is resoolved already"), 2000);
})
const promisee3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3is resoolved already"), 3000);
})
Promise.all([promisee1, promisee2, promisee3]).then((res) => console.log(res)).catch((err) => console.log(err));