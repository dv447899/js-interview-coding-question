function fetch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = true; // Change to false to simulate an error
            if (success) {
                resolve("Fetched data successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        },5000)
    })
}

fetch().then(data=>console.log(data))


// chaining of promise
function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve({id:1,userName:"deepak verma"}),2000)
    })
}

function getUserName(userName){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(`username is ${userName}`))
    })
}

getUser().then((data)=>(getUserName(data.userName)))
.then((userName)=>{console.log(userName)})
.catch((e)=>{console.log(console.error(e))})