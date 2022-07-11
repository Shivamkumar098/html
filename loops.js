// while loop
/*var i=0; 
while(i<=10){
    console.log("i value is:",i);
    i++;
 }*/
//for

/*for(var i=0; i<=8; i++){
    console.log("i value is:",i);
}*/
/*console.time("brands")
var brands=["poco","redmi","samsung","realme"];
for(var i=0; i<brands.length; i++){
    console.log("Brand name is :",brands[2]);
}
console.timeEnd("brands");
//do while
var i=0;
do {
    console.log("i value is : ",i);
    i++;
 } while(i<10);
//for of
for(brand of brands){
    console.log(brand);
}
//for in

for (brand in brands){
    console.log(brands[brand]);
}*/
var products=[{
    name: "Mobile",
    price : 20340,
    brand: "Samsung",
    color: "golden"
},
{
    name: "shoes",
    price : 2000,
    brand: "adidas",
    size : "1feet"

},
{
    name: " IT Company",
    
    location: "Bangaluru",
}]
for(prop in products){
    console.log(products[0].prop,products[1].prop, products[2].prop);
}