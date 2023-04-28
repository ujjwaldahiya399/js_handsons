// Question 1:-  "Guess the Output

function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));
// result is i am from PrepBytes and My batch is EA19




// Question 2:-  "Guess the output

Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
}
// it will give an error as we are accessing 'abc' before initialization



// Question 3:- "Guess the output

var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();
// result will be undefined;


// Question 4:- "Guess the Output
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")
// output will be Hi!! EA19, Welcome To PrepBytes