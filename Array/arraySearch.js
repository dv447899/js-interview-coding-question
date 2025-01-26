//Array indexOf()
//array.indexOf(item, start)
const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple",0))
// Array includes() includes() is an ECMAScript 2016 feature.
console.log(fruits.includes("Apple"))
// find()
// The find() method returns the value of the first array element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
console.log(numbers.find(e=>e>=18))
//Array findIndex()
console.log(numbers.findIndex(e=>(e>=18)))

// Array findLast() Method
// ES2023 added the findLast() method that will start from the end of an array 
// and return the value of the first element that satisfies a condition.
