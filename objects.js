const car = {
    make:"tata",
    model: "nexon",
    displayInfo(){
        console.log(this.make+" "+this.model)
    }
}
car.displayInfo()

const person = { name: "Alice", age: 30 }
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

// Factory Functions and Methods
// Factory functions are functions
// that create and return objects.
// You can use them to add custom methods to objects dynamically.

const createPerson=(name,age)=>{
    return{
        name,
        age,
    }
}
console.log(createPerson("Alice", 30));