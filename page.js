class Pagination{
    constructor(apiService){
        this.apiService=apiService;
        this.currentPage=1;
        this.limit=5;
    }
    setLimit(limit){
        this.limit=limit;
    }
    async get(page=1){
        this.currentPage=page;
        const res=await this.apiService(this.currentPage,this.limit);
        return {
            page:this.currentPage,
            limit:this.limit,
            data: res.data
        };
    }
    async next(){
        this.currentPage++;
        return this.get(this.currentPage);
    }
    async prev(){
        if(this.currentPage>1){
            this.currentPage--;
        }
        return this.get(this.currentPage);
    }
}