class Product{
    constructor(item){
        this.item = item;
        // this.price = price;
        // this.discount = discount;
        // this.code = code;
    }

    // get getDiscount(){
    //     return this.discount;
    // }

    // set setDiscount(value){
    //     this.discount = value;
    // }
}

class Furniture extends Product{
    constructor(item){
        super(item);
    }
    getItemName(){
        return `${this.item} is a furniture`;
    }
}

let pencil = new Product("pencil");
let chair = new Furniture("chair");

console.log(pencil);
console.log(chair);
// console.log(typeof(pencil));
// console.log(pencil.getDiscount);
// pencil.setDiscount = 2;
// console.log(pencil.getDiscount);
