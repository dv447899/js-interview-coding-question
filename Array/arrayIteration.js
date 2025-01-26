const numbers = [45, 4, 9, 16, 25];
//forEach()
//The forEach() method calls a function (a callback function) once for each array element.
let newArray = []
numbers.forEach(e=>newArray.push(e*2))
console.log(newArray)

// Array filter()
// The filter() method creates a new array with array elements that pass a test.
// This example creates a new array from elements with a value larger than 18:
console.log(numbers.filter(e=>e>=20))

// Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight()

let sum = numbers.reduce(myFunction,100);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum)

// Array some()
// The some() method checks if some array values pass a test.
// This example checks if some array values are larger than 18:
let someOver18 = numbers.some(myFunction); //callback function

function myFunction(value, index, array) {
  return value > 18;
}

console.log("some output",someOver18)

// Array every()
// The every() method checks if all array values pass a test.
// This example checks if all array values are larger than 18:
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log("allover18",allOver18)

//es6 feature key(), entities(), value() 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const k = fruits.values()
for(i of k){
    console.log(i)
}
const f = fruits.entries();
for(i of f){
    console.log(i)
}

