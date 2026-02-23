/*
Build a search handler that reduces unnecessary API calls.
Requirements:
Create a function searchHandler(query).
Implement debounce with configurable delay.
Cache previous search results.
Return cached results if the same query is repeated.
Cancel previous API calls if a new query is triggered.
*/

function debounce(fn,delay){
    let timer;
    return (... args)=>{
        clearTimeout(timer);
        return new Promise(resolve=>{
            timer=setTimeout(()=>{
                resolve(fn(... args));
            },delay);
        });
    };
}
class SearchHandler{
    constructor(apiService,delay=300){
        this.apiService=apiService;
        this.cache=new Map();
        this.search=debounce(this._search.bind(this),delay);
    }
    async _search(query){
        if(this.cache.has(query))
            return this.cache.get(query);
        const res=await this.apiService(query);
        this.cache.set(query,res);
        return res;
    }
}

const fakeApi=(q)=>
    new Promise(res=>{
        console.log("API called with:",q);
        setTimeout(()=>{
            res("result for "+q)
        },800);
    });
        const handler=new SearchHandler(fakeApi,500);

        document.getElementById("search").addEventListener("input",e=>{
            handler.search(e.target.value).then(res=>{
                console.log(res);
            });
        });