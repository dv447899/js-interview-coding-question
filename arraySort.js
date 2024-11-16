// Write a function that takes an array of objects and a key,
//  and returns a new array sorted based on the values of that key in ascending order

const data = [
        {
            "name": "deepak verma",
            "age": 101,
            "Born At": "Syracuse, NY",
            "Birthdate": "July 3, 1962",
            "photo": "https://jsonformatter.org/img/tom-cruise.jpg",
            "wife": null,
            "weight": 67.5,
            "hasChildren": true,
            "hasGreyHair": false,
            "children": [
                "Suri",
                "Isabella Jane",
                "Connor"
            ]
        },
        {
            "name": "Tom Cruise",
            "age": 56,
            "Born At": "Syracuse, NY",
            "Birthdate": "July 3, 1962",
            "photo": "https://jsonformatter.org/img/tom-cruise.jpg",
            "wife": null,
            "weight": 67.5,
            "hasChildren": true,
            "hasGreyHair": false,
            "children": [
                "Suri",
                "Isabella Jane",
                "Connor"
            ]
        },
        {
            "name": "Robert Downey Jr.",
            "age": 53,
            "Born At": "New York City, NY",
            "Birthdate": "April 4, 1965",
            "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
            "wife": "Susan Downey",
            "weight": 77.1,
            "hasChildren": true,
            "hasGreyHair": false,
            "children": [
                "Indio Falconer",
                "Avri Roel",
                "Exton Elias"
            ]
        }
    ]
// i will be converting the into asc order based on age
const filterData = data
let newArr = []
filterData.map((actor)=>{
    newArr.push(actor.age) 
})
newArr.sort((a,b)=>a-b); //for sorting in asc order

let newArray = []
newArr.forEach((cur)=>{
    filterData.find((e)=>{
        if(cur === e.age){
            newArray.push(e)
        }
    })

})
console.log(newArray)