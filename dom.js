 var divEl = document.createElement("div");

 //add div to body
 document.body.appendChild(divEl);

 //create text node
 var textEl= document.createTextNode("some text");

 //add text node to div element
 divEl.appendChild(textEl);

 //add attribute
 divEl.setAttribute("id","test");


var getById= document.getElementById("test");

console.log(getById.innerHTML);
getById.innerHTML= "new data";

var name= "Shivam";
getById.innerHTML="<p> welcome to "+name +" </P>";


