var str1 = "peep"
function palindrome(str) {
    let newStr = str.split(""); 
    // ["p","e","e",'P']
    if (newStr.length % 2 === 0) {                     // checking the even or odd
        let new1 = newStr.splice(0, newStr.length / 2) // dividing into array1
        let new2 = newStr.splice(newStr.length / 2 - 1) // dividing into array2

        if (new1.sort().join() === new2.sort().join()) {
            console.log("string is a even number palindrome String")
        }
        else {
            console.log("its not a odd number palindrome string")
        }
    }
    else {
        let toPop = Math.round(newStr.length / 2)
        newStr.splice(toPop - 1, 1)                     //can remove the string 
        let new1 = newStr.splice(0, newStr.length / 2)
        let new2 = newStr.splice(newStr.length / 2 - 1)

        if (new1.sort().join() === new2.sort().join()) {
            console.log("string is odd number palindrome String")
        }
        else {
            console.log("its not an odd number palindrome string")
        }
    }
}
palindrome(str1)