var loginform=document.getElementById("loginform");
loginform.addEventListener("submit", function(e){
    e.preventDefault();
    // var uservalue=document.getElementById("Username").Value;
    // var uservalue=document.getElementById("Username");
    // console.log(uservalue.Value)
    // console.log(loginform.elements[`username`].value)

    var username=loginform.elements[`username`].value;
    // if(username.length<7){
    //     console.log("username must be 7 characters")
    // }
    var password=loginform.elements[`password`].value;
    var Email=loginform.elements[`Email`].value;

    var loginData={
        username,
        password,
        Email
    }
    console.log(JSON.stringify(loginData))



})
// let Products;
// fetch("products.json").then(response => {Products=response.json})
// console.log(Products)

//  var products=[{name: "POCO", brand: "mi", price: 20000, category: "Mobiles", rating: "4.5", latest: true},
//     {name: "Soap", brand: "Dettol", "price": 10, category: "Soaps", rating: "5", latest: true},
//     {name: "shirt", brand: "icon", price: 1500, category: "shirts", rating: "8", latest: false}
// ,{name: "pant", brand: "Levi's", price: 1400, category: "textile", rating: "7.4", "latest": true},]
// // {name: "plant", brand: "out", "price": 200, "category": "textile", "rating": 7.2, "latest": true},
// // {name: "palm", brand: "lux", "price": 100, "category": "textile", "rating": 7.9, "latest": false},
// // {name: "panskd",brand: "lkskds", "price": 400, "category": "textile", "rating": 7.8, "latest": true},
// // {name: "djjss", brand: "Levi's", "price": 800, "category": "textile", "rating": 7.7, "latest": false},
// // {name: "loekd", brand: "dkjds", "price": 1100, "category": "textile", "rating": 7.6, "latest": true},
// // {name: "sjjs", brand: "idjs", "price": 140, "category": "textile", "rating": 7.5, "latest": true}]

// //const ecomProducts=products.filter(products => products.category ==="shirts");
// //const products90=products.filter(products => products.start >200 && products<3000);
// //const products2=products.filter(products => products.price>400 && products.price<1000); 

// let productsName = products.map(products=>products.POCO)
// let productsSort=products.sort((p1,p2) => (p1.price > p2.price ? 1: -1))
// //products.forEach(products => console.log(products[0].name) )
// let ratingprojects = products.sort((a,b) => (parseInt (a.rating)> parseInt (b.rating) ? 1: -1))
// console.log(productsSort)
// console.log(ratingprojects)