function memoize(slowadd){
    const cache=new Map(); //we store the already existed results for that purpose we use cache map
    return function(... args){
       // if(cache.has())
       //args=>making inputs into array of arguments
/*
We can’t use the args array directly as a Map key because in JavaScript, arrays are reference types. 
That means two different arrays with the same values, like [2,3] and [2,3], are considered different objects, 
so the cache won’t recognize them as the same key. By using JSON.stringify(args), we convert the array into a string like "[2,3]". 
Strings are compared by value, so now every call with the same arguments produces the same key, making the cache work correctly.
*/
       const key=JSON.stringify(args);  //conversion of arguments into json string
       if(cache.has(key))
        return cache.get(key);
    const r=slowadd(... args);
    cache.set(key,r);
    //return cache.get(key);
    return r;
    };
}
function slowAdd(a,b){
    return a+b;
}
const r=memoize(slowAdd);
console.log(r(2,3));
console.log(r(3,2));