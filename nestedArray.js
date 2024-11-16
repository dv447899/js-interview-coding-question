const nestedArray = [1, [2, [3, [4]], 5]];
// Es6 approch
const flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray)

// array.reduce( function(total, currentValue, currentIndex, arr),  initialValue )
function flattenArray(arr) {
    return arr.reduce((acc, val) => 
        console.log("acc",acc,"val",val),
        // Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), 
    []);
}
console.log(flattenArray(nestedArray));