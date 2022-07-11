var person={
    name:"Shivam",
    email: "shivam152000kmr@gmai.com",
    getName: function(){
        return this.name
    },
    getEmail: function(){
        return this.email
    },
    setName: function(name){
        this.name=name
    }
}

person.prof="Training";
person.setProfession=function(prof){
    this.prof=prof;
}


function Foods(brand,price){
    this.brand=brand;
    this.price=price;

    this.getBrand=function(){
        return this.brand
    }}

    /*Foods.prototype.os="dos";
   let pizza=new Foods("sandvich",300);*/

    let pizza =new Foods("Dominos",500);
    let burger = new Foods("BurgerKing",400);

