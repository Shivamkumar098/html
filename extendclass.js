class Product{
    constructor(name,brand){
        this.name=name;
        this.brand=brand;
    }
    getName(){
        return this.name
    }
    getBrand(){
        return this.brand
    }
    getProductDetail(){
        return `the brand is ${this.brand} name is  ${this.name}`
    }
}
class Electronics extends Product{
    constructor(name,brand,ram){
        super(name,brand)
        this.ram=ram
    }
}
let ele = new Electronics("mobile","Acer", "8gb")
console.log(ele.brand)
console.log(ele.ram)
console.log(ele.getProductDetail())