const factorial=(num)=>{
    let factorial = 1
    for(i=1;i<=num;i++){
        factorial = factorial * i
    }
    return factorial
}

console.log(factorial(5))

// recursive function ----------------------------
const rfactorial=(num)=>{
    if (num === 1) return 1
    return num * factorial(num - 1)
}

console.log(factorial(5))
