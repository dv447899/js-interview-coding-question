// at()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.at(2))
//join()
console.log(fruits.join(","))
//shift() The shift() method returns the value that was "shifted out":
console.log(fruits.shift())
//unShift()   The unshift() method returns the new array length:
console.log(fruits.unshift())
//concat() The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
console.log(myGirls.concat(myBoys))
console.log(myGirls.concat(myBoys,arr3))
//flat() method use to flat() the 2d array and flatMap() use to travel and use it 
const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat().flatMap(x=>[x*2]))

// Splicing and Slicing Arrays
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

const array1 = [1,2,3,4,5,6,7]
console.log(array1.splice(2,0,10)) // to add
console.log(array1)
console.log(array1.splice(0,1)) //to remove
console.log(array1)
console.log(array1.slice(0,2))


