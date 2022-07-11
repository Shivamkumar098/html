var a=20;
var b=3;
console.log("+ operator:", a+b)
console.log("+ operator:", a-b)
console.log("+ operator:", a*b)
console.log("+ operator:", a/b)
console.log("++ operator:", ++b)
console.log("-- operator:", --b)
console.log("== operator:", a==b)
console.log("!= operator:", a!=b)
console.log("> operator:", a>b)
console.log("< operator:", a<b)
console.log("<= operator:", a<=b)
console.log(">= operator:", a>=b)
console.log("=== operator:", a===b)  // === means check datatype of both variable, if not then return false , if yes then return true

var username =  "Shivam";
var password= "27355352";

/*if(username){
    console.log("enter password");
} else{
    console.log("you can not login without entering username");
}*/
if(username){
    console.log("enter password");
} else if(password){
    console.log("you can login");
} else{
    console.log("you can not login without entering username")
;}

var age=12;
if(age>=18){
    console.log("you can eligible");
} else{
    var c=18-age;
    console.log("you can eligible to fill form after"+ c +"years");
}
//switch case
switch(username){
    case "uname": console.log("username is correct")
    break;
    case "Shivam": console.log("username is correct")
    break;
    default: console.log("try with correct username")
}

switch(age){
    case age>=10:
         console.log("he is not a child");
    break;
    case age<=9:
         console.log("he is a child");
    break;
    default:
         console.log("shows anything");
}