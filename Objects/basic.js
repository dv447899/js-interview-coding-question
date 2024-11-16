const car = {
    make:"mercedes-benz",
    model:"g-wagon",
    description:function(){
        return this.make +' '+ this.model 
    }
}

const course = {
    lecture:30,
    section:10,
    title:"javascript",
    details(){
        console.log(this.lecture)
    }

}

// console.log(car.description())
// console.log(course.details())
// course.price="1000",
// console.log(course.price)
// --------------------------------
const obj={
    key1:"deepak",
    key2:"verma",
    key3:"FE dev"
}
const newObject = Object.create(obj)
// console.log("new created",newObject.key1)

const cart={
    item:[
        {name:"laptop",price:"20000"},
        {name:"pen drive",price:"200"},
        {name:"LED Tv",price:"10000"},
    ],
    total:function(){
        let sum = 0;
        this.item.forEach((e)=>{
            var cur = Math.floor(e.price)
            sum = sum + cur
        })
        return sum
    }
}

console.log(cart.total())
