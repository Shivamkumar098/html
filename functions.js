//declare function
//function fn(){
  //  console.log("this is a function")
//}
//call function
//fn()

//return from function
//function fn(){
  //  return "this is a function";
//}
//console.log(fn())

//function sum(a,b){
  //  var result=a+b;
    //return result;
//}

/*function getCartTotal(){
    //console.log(arguments)
    var total=0;
    for(price of arguments){
        total += price;
    
    }
    return total;

}*/
// hoisting
/*products()
function products(){
    console.log("any thing print")
}*/
// declare function in literal way
/*var Thanks= function(){
    console.log("thanku for anything")

}
Thanks()*/

// self invoking function
/*(function(name){
    console.log(name,"it is a self invoking function")
})("Shivam")*/

// About global variable and local variable
/*var a=10; //global variable
function sumTen(){
    var b=7; //local variable
    return a+b;
}
sumTen()*/

// var cart
var products=[{
    productId: 1,
    brand: "samsung",
    price: 14000,
    qty: 3
},
{
    productId: 2,
    brand: "realme",
    price: 15000,
    qty: 2

},
{
    productId: 3,
    brand: "mi",
    price: 13000,
    qty: 1
},
]
console.log("+ operator:",products[0].price + products[1].price + products[2].price)
console.log("+ operator:",products[0].qty + products[1].qty + products[2].qty)
console.log(products[0].brand, products[0].price, products[0].qty)
console.log(products[1].brand, products[1].price, products[1].qty)
console.log(products[2].brand, products[2].price, products[2].qty)
function getCartSum(){
    //console.log(arguments)
    var total=0;
    for(price of products){
        total += price;
    
    }
    return total;

}
getCartSum().products


