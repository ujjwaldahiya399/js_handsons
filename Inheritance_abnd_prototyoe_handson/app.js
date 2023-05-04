// Question 1:- Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const parent = {
    name:"Ujjwal",
    printName: function () {
        console.log(this.name+" Heyy");
    }
}
const child = Object.create(parent);
console.log(child.name); // name is a variable of parent obj
child.printName(); // printName is a method of parent obj


// Question 2:- Write code to explain prototype chaining
const plusGfather = {
    saySomething: function () {
        console.log("heyy PlusGfather")
    }
}
const Gfather = Object.create(plusGfather);
Gfather.sayHii = function () {
    console.log("heyy Gfather");
}
const father = Object.create(Gfather);
father.sayHello = function () {
    console.log("heyy father");
}

const child_1 = Object.create(father);
child_1.sayHello(); // calling father from child
child_1.sayHii(); // calling Gfather from child
child_1.saySomething(); // calling plusGfather from child
// This is called chaining


// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
Array.prototype.sum = function() {
    return this.reduce((acc,val) => acc+val,0);
}
let arr1 = [2,3,54,5,5];
let arr2 = [3,12,33,44,66]
let arr3 = [4,5,666,11,9];
console.log(arr1.sum()); // 69
console.log(arr2.sum()); // 158
console.log(arr3.sum()); // 695


// Question Write a JavaScript function to retrieve all the names of object's own and inherited properties.
let arrOfProp=[]
function allProperties(obj) {
    // for(let prop in obj) {
    //     console.log(prop);
    // }
    return Object.keys(obj)
}
console.log(allProperties({
    name:"ujjwal",
    lastName : "Dahiya"
})) // ['name', 'lastName']