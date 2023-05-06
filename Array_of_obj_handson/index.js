    let studentRecords = [ 
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 }
 ];

 // Question 1:- "We are interested in retrieving only the students' names; all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']"

 let res = studentRecords.map((item) => {
    return item.name.toUpperCase();
 }) 
 console.log(res); ['JOHN', 'BABA', 'YAGA', 'WICK']"




// Question 2:- "Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]"
 let res2 = studentRecords.filter((item) => {
    return item.marks>50;
 })
 console.log(res2) // [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]"




 // Question 3:- Retrieve the details of students who scored more than 50 marks and have IDs greater than 120.

let res3 = studentRecords.filter((item) => {
 return item.marks>50 && item.id>120;
})
console.log(res3) // [ { name: 'John', id: 123, marks: 98 } ]




// Question 4:- Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let res4 = studentRecords.reduce((sum, item) => {
    return sum + item.marks
},0);
console.log(res4); // 241





// Question 5:- This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
let res5 = studentRecords.filter(record => record.marks>50).map(ele => ele.name)
console.log(res5) // [ 'John', 'Wick' ]





// Question 6:- This time we are required to print the sum of marks of the students with id > 120.
let res6 = studentRecords.filter(record => record.id>120).reduce((sum,record) => {
    return sum + record.marks
},0)
console.log(res6) // 143





// Question 7:- This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
let res7 = studentRecords.map(item => item.marks<50?item.marks+15:item.marks).filter(item => item>50?item:0).reduce((acc, item) => {return acc + item},0);
console.log(res7); // 233





// Question 8:- Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
const obj1 = {
    name:'name1',
    class:1,
    roll_no:1
}
const obj2 = {
    name:'name2',
    class:2,
    roll_no:2
}
const obj3 = {
    name:'name3',
    class:3,
    roll_no:3
}
const obj4 = {
    name:'name4',
    class:4,
    roll_no:4
}
const obj5 = {
    name:'name5',
    class:5,
    roll_no:5
}
const obj6 = {
    name:'name6',
    class:6,
    roll_no:6
}

let arrOfObj = [obj1, obj2, obj3, obj4, obj5,obj6]
console.log(arrOfObj) // [
//     { name: 'name1', class: 1, roll_no: 1 },
//     { name: 'name2', class: 2, roll_no: 2 },
//     { name: 'name3', class: 3, roll_no: 3 },
//     { name: 'name4', class: 4, roll_no: 4 },
//     { name: 'name5', class: 5, roll_no: 5 },
//     { name: 'name6', class: 6, roll_no: 6 }
//   ]
  



