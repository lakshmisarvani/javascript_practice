// function testVar() {
//   if(true){
//    let x = 10;
//   }
//   console.log(x); // 10 → var ignores block, stays in function scope
// }
// testVar();
function hello(){
for(var i=0; i<3; i++){
  setTimeout(() => console.log(i), 4000);
}
}
hello();
// // prints 3 3 3 → var leaks outside loop
// const arr=[1,3,29,4];
// console.log(arr.map(x=>x*x));

console.log(a);
var a=10;