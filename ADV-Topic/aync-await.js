//promise with aync-await
function getData(){
    return new Promise((resolve,reject)=>{
        let start = true;
        if(start){
            resolve("data is fetch")
        }
        else{
            reject("data not found")
        }
    })
}

const func= async ()=>{
    const result = await getData()
    console.log(result)
}

func()

