class Laptop{
    constructor(brand, ram){
        this.brand=brand;
        this.ram=ram;

    }
    getBrand(){
        return this.brand
    }
    setBrand(name){
        this.brand= name
    }
}
let laptop1=new Laptop("Acer","8gb")
console.log(laptop1.getBrand)
console.log(laptop1.setBrand)
