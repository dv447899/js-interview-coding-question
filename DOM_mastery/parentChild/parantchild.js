//previousElementSibling
console.log(document.querySelector(".select3").previousElementSibling)

//appendChild
const currentUl = document.querySelector("ul")
const addLi = document.createElement("li")
addLi.textContent ="new child added"
currentUl.appendChild(addLi)

//remove child
const ul = document.querySelector("ul")
// ul.remove()

//replace child
const selectList = ul.children[2];
const newLi = document.createElement("li")
newLi.textContent="replace child"
ul.replaceChild(newLi,selectList)

//parant node
const parentEle = document.querySelector("html")
console.log(parentEle.parentElement) // will not return if the parent element is not there
//---------------------====-----------------------
const parentNode = document.querySelector('html')
console.log(parentNode.parentNode) //will return some thing