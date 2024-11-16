function fetchUserData(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userId){
                resolve({ id: userId, name: "Alice", age: 25 })
            }
            else{
                reject('request is rejected')
            }
        },2000)
    })
}

fetchUserData(1)
.then(e=>console.log(e))
.catch(err=>console.log('error',err))
.finally(()=>console.log("operation completed"))

