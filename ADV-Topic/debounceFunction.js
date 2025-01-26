function debounce(func, delay) {
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{func.apply(this,args)},delay)
    }
}
function debounce1(){
    console.log('Debounced!')
}

const log = debounce(() => debounce1(),1000);
log();
log();
log();
// ---------------------------------
// So what’s happening here? The debounce is a special function that handles two tasks:

// Allocating a scope for the timer variable
// Scheduling your function to be triggered at a specific time