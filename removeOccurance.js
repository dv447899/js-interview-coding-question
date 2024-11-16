const array = [1,2,3,4,1,5,1,6,7,1]
// remove all occurance of 1
const removeOccur =(a)=>{
    const newArray = a.filter((e)=>e!=1)
    console.log(newArray)
}

removeOccur(array)