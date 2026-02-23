let timer=setTimeout(()=>{
    console.log('2000 ms timeout');
},200);
setTimeout(()=>{
    clearTimeout(timer);
    console.log(`timer stopped at ${timer} ms`)
},500);