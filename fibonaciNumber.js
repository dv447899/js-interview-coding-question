const RfibonaciNum = (num) =>{
    if (num <=1) return num
    return RfibonaciNum(num-1) + RfibonaciNum(num-2)
}

console.log(RfibonaciNum(5))

// 0 1 1 2 3 5 8 -------------- n