const arr1 = [1,2,3,4,5,7,10,20]
const arr2 = [4,6,7,8,50,55,60]
let newArr = []
arr2.forEach((e)=>{
    arr1.push(e)
})

arr1.map((e)=>{
    if(newArr.includes(e)){
        return
    }
    else{
        newArr.push(e)
    }
})
newArr.sort((a,b)=>a-b)
console.log("final sorted array",newArr)
