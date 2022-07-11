
// single line comment
/* ...multiline comment...
multiline comment..*/
// primitive data types
/*String "Shivam"
Number 3777.87
Boolean true/false */
//undefined
//null
//name -> identifier (all variable name)
// var is keyword to declare any variable

//var name ="javascript";
//variable naming conventions
//var 8name =''; //not correct
// var _name=""; correct
//var name8=""; correct
//alert (name);
//console.log(name);
/*var brand, price, category;
// run in the console
/*brand -> 
undefined -> value not defined
brands
ReferenceError -> means - Variable not in there*/
brand="POCO";
console.log(name);
var name="Poco M2 Pro";
var price="3000";


var first_name="Shivam";
var secon_name="kumar";
// var full_name= first_name + " " + secon_name;
var full_name = `Welcome ${first_name} ${secon_name}`;

//Complex data types
//Arrays
var students = ["Shivam",50,{name : "Shivam kumar"}, null, full_name, [1, 2, 3,[27,34]]];



/*Object
        Property : value*/

        var dog = {
            color : "black",
            height : "2feet",
            activities: ["play", "barksk", "eat"],
            address: {
                city: "Bangaluru",
                met: function(){}
            },
            runs: function(){
            console.log("Dog Runs")}, eats: function(){
                console.log("Dog eat's")
            }
        
        }

        console.log(dog.color); //objectname.propertyname
//functions 
/*function fn(){    // Create function
    var lang="English";
    console.log(lang);
}
fn()  // call function */


//fn()

function cook(param1, param2,param3){
    var result = `By using ${param1} and ${param2} and ${param3} I made recipe`
    return result;
}
console.log(cook("rice", "masala", "chapati"));

var Students = {
    age:"22",
    prof:"Software Developer",
    education : "B.tech",
    profilePicture :"Shivam.jpg",
    
}

var Students=[{
    age:"22",
    prof:"Software Developer",
    education : "B.tech",
    profilePicture :"Shivam.jpg"
},
{age:22,
    prof:"Software Developer",
    education : "B.tech",
    profilePicture :"Shivam.jpg"
}

]

var products= [{
    name: "Samsung",
    price : 20000,
    color : "golden",
    size: "12 inches"

},
{
    name: "redmi9",
    price : 21200,
    color : "blue",
    size: "15inches"

},
{
    name: "realme",
    price : 24500,
    color : "silver",
    size: "10 inches"

},
]


    



