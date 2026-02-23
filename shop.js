class ShoppingCart{
    constructor(apiService){
        this.apiService=apiService;
        this.cartItems=[];
        this.totalPrice=0;
    }
    async addItem(productId,quantity=1){
        const p=await this.apiService(productId);
        this.cartItems.push({
            productId,
            price: p.price,
            quantity
        });
        this.calculateTotal();
    }
    removeItem(productId){
        this.cartItems=this.cartItems.filter(
            item=>item.productId!==productId
        );
        this.calculateTotal();
    }
    calculateTotal(){
        this.totalPrice=this.cartItems.reduce(
            (s,i)=> s+i.price*i.quantity,0);
        return this.totalPrice;
    }
    getCartSummary(){
        return {
            items:this.cartItems,
            total:this.totalPrice
        };
    }
}