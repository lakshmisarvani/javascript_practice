/*
Implement a JavaScript class that prevents multiple simultaneous API calls for the same resource.

Requirements:

Create a class RequestManager.

If multiple requests are made for the same identifier before the first request completes, return the same pending Promise.

Store the result once resolved.

Provide an option to clear stored results.

Ensure only one API call is made per identifier at a time.
*/

class RequestManager{
    constructor(apiFn){
        this.apiFn=apiFn; //apiFn is the function that makes API call
        this.pending=new Map(); //identifier=> Promise
        this.cache=new Map(); // identifier=>resolved result
    }
    request(id){
        //if result has already cached,return it
        if(this.cache.has(id)){
            return Promise.resolve(this.cache.get(id));
        }
        //if request is already in progress,return same promise
        if(this.pending.has(id)){
            return this.pending.get(id);
        }
        const p=this.apiFn(id).then(r=>{
                this.cache.set(id,r); //store resolved result
                this.pending.delete(id); //clear pending
                return r;
            }).catch(err=>{
                this.pending.delete(id); //cleanup on failure
                throw err;
            });
            this.pending.set(id,p);
            return p;
    }
clear(id){
    if(id){
        this.cache.delete(id);
    }
    else{
        this.cache.clear(); //clear all cached results
    }
}
}