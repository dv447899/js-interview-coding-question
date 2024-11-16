const callbackApi=(url,callback)=>{
    fetch(url).then(res => res.json())
    .then(data => callback(data))
    .catch(err => console.log(err))
}

function main(){
    let api1 = "https://dummyjson.com/products/1"
    let api2 = "https://dummyjson.com/carts/1"
    callbackApi(api1,handleData)
    callbackApi(api2,handleData)
}

function handleData(data){
    console.log("data :", data)
}

main()

