
window.addEventListener("load" , getName);

function getName(){
    // var searchname = document.querySelector("#searchname").value;
//   console.log(userid);
 fetch(`https://api.github.com/users/mohammadsarim/followers`)
        .then(function(response) { 
    return response.json()
})
.then(function (data){
    console.log(data);
    data.map(function(v,i){
        
    })
})
}