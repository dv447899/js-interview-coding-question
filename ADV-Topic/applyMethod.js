const person={
    name:"deepak",
    greet: function(country,city){
        console.log(`hi ${this.name} from ${country} , ${city}`)
    }
}
const city = {name:"mr verma"};

person.greet.apply(city,["india", "mumbai"])