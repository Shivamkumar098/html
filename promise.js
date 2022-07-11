// var users=[{name:"Shivam", age:23},{name: "Kumar", age: 22}]
// var promise=new Promise((resolve, reject) => {
//     try{
//         resolve(users)
//     } catch(error){
//         reject(error)
//     }
// });

//var url="./data.json";
/*var url="https://jsonplaceholder.typicode.com/posts";
fetch(url)
.then(res=>res.json())
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err))
.then((res) => {
    displayUserGrid(res)
})
.catch((err) => console.log(err))

function displayUserGrid(posts){
    //dom operator
    let postsEl=document.getElementById("posts");
    let output ="";
    for(post of posts){
        output+=`<div>
        <div class="wet"> ${post.completed}</div>
        <div> ${post.id}</div>
        <div> ${post.title}</div>
        <div> ${post.userId}</div>
        </div>`

    }
    postsEl.innerHTML=output;
}*/
async function getUsers(){
    let url='users.json';
    try{
        let res =await fetch(url);
        return await res.json();
    } catch(error){
        console.log(error);
    }
 }
 async function renderUsers(){
    let users= await getUsers();
    let html='';
    users.forEach(user =>{
        let htmlSegment=`<div class="user">
                         <img src="${user.profileURL}">
                         <h2> ${user.FirstName}, ${user.lastName}</h2>
                         <div class="email"><a href="email:${user.email}"> ${user.email}</a></div>
                         </div>`;
                         html += htmlSegment;
    });
    let container = document.querySelector('.container');
    container.innerHTML=html;

 }
 renderUsers()