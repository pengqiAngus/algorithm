function curry(fn) {
    return function curried(...args){
        if (args.length >= fn.length) {
            return fn.apply(this,args)
        } else {
            return (...moreArgs)=>{
                return curried.apply(this, args.contact(moreArgs));
            }
        }
    };
}
function unCurry(fn) {
    return  function(...args) {
        return args.reduce((acc,arg)=>acc(arg),fn)
    }
}

function compose(...fns) {
    return function (x) {
        fns.reduce((sum,fn)=>fn(sum),x)
    }
}