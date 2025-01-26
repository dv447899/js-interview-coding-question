const person={
    name:'deepak',
    greet : function(city){
        console.log(`my name is ${this.name} from ${city}`)
    }
}

const Name={name:"mr. verma"}

person.greet.call( Name , "mumbai")