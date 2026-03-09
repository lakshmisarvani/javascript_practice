function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => 
      fn.apply(this, args), delay);
  }
}
function throttle(fn,delay){
  let lc=0;
  return function(... args){
    const d=Date.now();
    if(d-lc>=delay){
      lc=d;
      fn.apply(this,args);
    }
  }
}

const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", throttle(() => {
  console.log("Search executed");
}, 2000));