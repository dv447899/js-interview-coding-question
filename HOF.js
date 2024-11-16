const arry = [10,21,30,41,51,60]

function evenNumber(arry){
    return arry.filter((e=>e%2==0))
}
const num = evenNumber(arry)
console.log(num) 

// ----------------------------------------------
// map() to double all the number of an arry

function double(arr){
    return arr.map((num)=>{
        return num*2
    })
}
console.log(double(arry))


