// async function getFirst(){
//     console.log('start');
//     for(let i=1;i<=5;i++){
//         const res=await fetch(
//             `https://jsonplaceholder.typicode.com/posts`
//         );
//         const data=await res.json();
//         console.log(i,data);
//         console.timeEnd('start');
//     }
// }
// getFirst();

// function memoize(){
//     const cache={};
//     return async function(id){
//         if(cache.hasOwnProperty(id)){
//             console.log("loaded from cache",cache[id]);
//         }
//         else{
//             const res=await fetch(
//                 `https://jsonplaceholder.typicode.com/posts/${id}`
//             );
//             const data=await res.json();
//             cache[data.id]=data;
//             console.log('fetched',data);
//         }
//     };
// }

// const memo=memoize();
// (
//     async()=>{
//         await memo(1);
//         await memo(1); // fetched
//   await memo(1); // cached
//   await memo(1); // cached
//   await memo(1); // cached
//   await memo(1); // cached

//   // 5 times for id 2
//   await memo(2); // fetched
//   await memo(2); // cached
//   await memo(2); // cached
//   await memo(2); // cached
//   await memo(2); // cached

//   // 3 time for id 100
//   await memo(100); // fechted
//   await memo(100); // cached
//   await memo(100); // cached

//   // 5 times for id 1
//   await memo(1); // cached
//   await memo(1); // cached
//   await memo(1); // cached
//   await memo(1); // cached
//   await memo(1); // cached

//     }
// )();
