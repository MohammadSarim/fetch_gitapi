
window.addEventListener("load" , getName);

function getName(){
    // var searchname = document.querySelector("#searchname").value;
//   console.log(userid);
var addpostdata = document.getElementById('addpostdata');
 fetch(`https://api.github.com/users/mohammadsarim/followers`)
        .then(function(response) { 
    return response.json()
})
    .then(function (data){
        console.log(data);
        
        
        // data.map(function(v,i){
            // console.log(v.login);
            // addpostdata.innerHTML = 
            
            // `
            // <h1 >${v.login}</h1>
            // `

            addpostdata.innerHTML = data.map((v, i) => {

                return `
                <div class="card" style="width: 18rem; margin:10px;">
                    <img class="card-img-top" src="${v.avatar_url}" alt="Card image cap">
                    <div class="card-body" style="padding:10px;">
                        <h6 class="card-title">${v.login}</h6>
                        <p class="card-text">UserID: ${v.id}</p>
                        <a href="${v.html_url}" target="_blank" class="btn btn-default btn-block">View Profile</a>
                    </div>
                </div>`




        //     var addpost = document.createElement("div");
        // addpost.setAttribute("id", "addpost");
        // var img = document.createElement('img');
        // img.setAttribute("src", v.avatar_url);
        // // img.className = "img-fluid ";
        // addpost.appendChild(img);
        // var footer = document.createElement('div');
        // footer.setAttribute("class", "cardfooter");
        // var h4name = document.createElement('h5');
        // var h4namenode = document.createTextNode(v.login);
        // h4name.className = "name";
        // h4name.appendChild(h4namenode);
        // footer.appendChild(h4name);
     
        // var category = document.createElement('h6');
        // category.className = "category";
        // category.innerHTML = "Category: " + v.id;
        // footer.appendChild(category);
        // var hr = document.createElement('hr');
        // footer.appendChild(hr);
        // addpost.appendChild(footer);
        // addpostdata.appendChild(addpost);
           

    })
})
}