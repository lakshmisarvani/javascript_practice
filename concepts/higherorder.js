function solve(fn){
    return function(a,b){
        return fn(a,b);
    }
}
function add(x,y){
    return x+y;
}
const ans=solve(add);
console.log(ans(4,5));