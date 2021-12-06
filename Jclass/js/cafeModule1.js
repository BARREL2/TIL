export class Menu{
    //コンストラクタ
    constructor(orderName,price){
        this.orderName = orderName;
        this.price = price;
    }

    //セッターゲッター
    setMyOrder(orderName,price){
        this.orderName = orderName;
        this.price = price;
    }
    getMyOrder(){
        return `${this.orderName}:${this.price}`;
    }

    static calcTax(price){
        return price*1.1;
    }
}