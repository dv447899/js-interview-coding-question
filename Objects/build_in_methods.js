
// 1) object.create()
const greetingInfo = {
    greeting: function () {
        return 'welcome'+ " " + this.name
    }
}

const addInfo = Object.create(greetingInfo, {
    name: {
        value: "deepak verma"
    }
})

console.log(addInfo.greeting())
// ----------------------------------------------------
// 2) Object.assign() 
// https://webreference.com/javascript/basics/object-methods/
const basicInfo = {
    name: 'Jermaine',
    age: 38
  };
  
  const addressInfo = {
    street: '123 Main St',
    city: 'Fayetteville',
    state: 'NC'
  };
  const fullInfo = Object.assign(basicInfo,addressInfo)
  console.log(fullInfo)
//   --------------------------------------------------------------------
// 3) Object.keys() Method
const movie = {
    title: "The Matrix",
    director: "1999",
    releaseYear: 1999
};
console.log(Object.keys(movie))

//4) Object.entries() Method returns both the keys and values of the object in the form of arrays.

console.log(Object.entries(movie))
console.log(Object.getOwnPropertyDescriptors(movie))
console.log(Object.is(movie))