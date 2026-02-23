class RateLimiter{
    constructor(maxRequests,timewindow){ //let's say 3 requests per 5 seconds
        this.maxRequests=maxRequests;
        this.timewindow=timewindow;
        this.requests=new Map();
    }
    setLimit(newLimit){
        this.maxRequests=newLimit;
    }
    isAllowed(identifier){
        const now=Date.now();
        if(!this.requests.has(identifier)){
            this.requests.set(identifier,{
                count:1,
                startTime: now
            });
            return "Allowed";
        }
        const userData=this.requests.get(identifier);

        if(now - userData.startTime>this.timewindow){
            this.requests.set(identifier,{
                count:1,
                startTime:now
            });
            return "Allowed";
        }
        if(userData.count<this.maxRequests){
            userData.count=userData.count+1;
            return "Allowed";
        }
        return "Blocked";
    }
}