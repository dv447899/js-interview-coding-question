// Example of a Pure Function
// Here’s a simple example of a pure function that calculates the square of a number:
function square(x) {
    return x * x;
  }
  
  console.log(square(2)); // Output: 4
  console.log(square(2)); // Output: 4 (always returns the same result for the same input)
//   No Side Effects: The square function doesn’t modify any external state. It only depends on the input x.
//   Deterministic: Given the same input (e.g., 2), it always returns the same output (4).

// ---------------------------------------------------------------------------------------------------------------------------

let count = 0;

function increment() {
  count += 1;
  return count;
}

console.log(increment()); // Output: 1
console.log(increment()); // Output: 2 (different output for the same function call)
// This function is impure because:
// Has Side Effects: It modifies the external variable count.
// Non-Deterministic: Each time increment is called, it returns a different result, even though it has no input parameters