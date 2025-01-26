const nestedArray = [1, [2, [3, [4]], 5]];
console.log(flattenArray(nestedArray));
function flattenArray(nestedArray){
   return nestedArray.reduce((acc,cur)=>{
        if(Array.isArray(cur)){
           return acc.concat(flattenArray(cur))
        }
        else{
           return acc.concat(cur)
        }
    },[])
    
}

// Combining Results
// Third Call (for [3, [4]]):

// Combines [3] with [4]:
// javascript
// Copy
// Edit
// acc = [3].concat([4]) = [3, 4]
// Returns [3, 4] to the previous level.
// Second Call (for [2, [3, [4]], 5]):

// Combines [2] with [3, 4] and then adds 5:
// javascript
// Copy
// Edit
// acc = [2].concat([3, 4]) = [2, 3, 4]
// acc = [2, 3, 4].concat(5) = [2, 3, 4, 5]
// Returns [2, 3, 4, 5] to the previous level.
// First Call (for [1, [2, [3, [4]], 5]]):

// Combines [1] with [2, 3, 4, 5]:
// javascript
// Copy
// Edit
// acc = [1].concat([2, 3, 4, 5]) = [1, 2, 3, 4, 5]
// Final Output
// The fully flattened array is:

// javascript
// Copy
// Edit
// [1, 2, 3, 4, 5]