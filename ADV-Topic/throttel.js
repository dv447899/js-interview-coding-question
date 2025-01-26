function throtle(func,interval){
    let lastExecution = 0;
    return function(...arg){
        const now = Date.now();
        if(now-lastExecution >= interval){
            lastExecution = now;
            func.apply(this,arg)
        }
    }
}
function logs(){
    console.log("called the log")
}
const data = throtle(()=>logs(),1000)
data()