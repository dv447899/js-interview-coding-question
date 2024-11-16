let array = [100,1000,500,30,50,10,4000]
let min = array[0], max = 0
let secondMin = array[0]
for(i=0;i<=array.length;i++){
    if(array[i] < min ){
        min = array[i];
        if(min < secondMin){
            secondMin = min
        }

    }else if(array[i] > max){
        max = array[i]
    }
}
console.log(array.splice(min,0))
console.log(min,max, secondMin)