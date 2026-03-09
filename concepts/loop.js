console.log('start');
setTimeout(()=>
console.log("using settimeout"),2000);
Promise.resolve().then(()=>
console.log("promise resolved"));
console.log("end");
