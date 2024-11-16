const arr = [1,2,3,4,5,0,10]
const largest=(arr)=>{ 
    let max = arr.reduce((accumulator,currentValue)=>
    accumulator>currentValue?accumulator:currentValue
    )
    console.log(max)
}
largest(arr)

// array.reduce(callback(accumulator, currentValue, index, array), initialValue);
// syntax

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) =>( accumulator + currentValue,0)
);
console.log(sum);

// -------------------------------------------------------------------
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc,cur)=>{
    acc[cur] = (acc[cur] ||0 ) +1
    return acc
},{})
console.log(count)