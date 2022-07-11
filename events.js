// function welcome(){
//     alert("Lets Start");
// }
// var btn = document.getElementById("btn");
// btn.onclick=welcome;
// // element.addEventListner(eventname, event handler)
// btn.addEventListener("click", welcome);
function taskOne(e){
    console.log("task one")
    e.preventDefault()
    
    // if(false){
    //     e.stopImmediatePropagation()
    // }
}
function taskTwo(e){
    console.log("task Two")
}

function parentHandler(ev){
    console.log("This is a parent")

    //console.log(ev.target)
    console.log(ev.currentTarget)

}

function childHandler(ev){
    console.log("This is a child")
    ev.stopPropagation()
}

var p1=document.getElementById("parent")
var p2=document.getElementById("parent1")
var p3=document.getElementById("child")
var p4=document.getElementById("child1")

p1.addEventListener("click", parentHandler)
p2.addEventListener("click", parentHandler, true) // true means -> this is shows top to bottom on click 
p3.addEventListener("click", childHandler,)
p4.addEventListener("click", childHandler, true)

var anc=document.getElementById("anc")
anc.addEventListener("click",taskOne);