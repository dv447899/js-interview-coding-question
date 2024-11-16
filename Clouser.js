
// Since a closure is a function that has access to the variable from another function’s scope,
// function “Second_func” can access all the variables a,b and c. 
var a = 10

function First_func() {

    var b = 20;

    function Second_func() {

        var c = 20 + a + b

        return c

    }

    return Second_func();



}

var sum = First_func()
console.log(sum)