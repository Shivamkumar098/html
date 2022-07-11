///* var name="Shivam";
// let lang="Javascript";
// const data="english";

// const menu=["services", "about"]

// menu.push("Home")*/
/*let welcome=()=> { //arrow functions
    console.log("Shivam kumar")
}
welcome()*/

//let welcome = ()=> "welcome to this"
//let sum=(a,b) => a+b;
//let greet=name => `welcome to ${name}`

//rest and spread operator
/*var nums=[27,87,109,2,3,4]

function sum(...data){   //rest and spread operator
    var total=0;

    for(price of data){
        total+=price
    }
    return total;
}

Math.max(...nums)*/

var nums = [17,8,9,25,76]
let [a,...b]=nums;

var person={
    name: "Shivam",
    email: "shivam152000kmr@gmal.com"
}
var {name: fname,email}=person
console.log(fname)
console.log(email)