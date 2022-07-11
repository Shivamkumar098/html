var btn=document.getElementById("btn")
var navItems=["Home","FAQ","Services", "About","Contact"]

function generateMenu(data){


//var navItemLength=navItems.length;
//document.body.appendChild(divEl);
var navId= document.getElementById("menu");

var output = "<ul>";
for(navItem of navItems){
    output += `<li><a href= "${navItem}.html">${navItem}</a></li>`
}
output = "<ul>";

console.log(output);
navId.innerHTML=output;

}
function createMenu() {
    generateMenu(navItems)
}
btn.addEventListener("click", createMenu)
// var products =[{
//     productsId: 1,
//     productimg: "./product.jpg.js",
//     price : 20000
// },
// {
//     productsId: 2,
//     productimg: "product1.jpg",
//     price : 15000
// },
// {
//     productsId: 3,
//     productimg: "product2.jpg",
//     price : 16000
// }]
// console.log(products[0].productimg)
// console.log(products[1].productimg)
// console.log(products[2].productimg)
