var arr = [
    {
        name : "Krunch Burger",
        price : "250 RS",
        img  : "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        detail : "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci sit neque incidunt quibusdam, labore pariatur nemo quos reprehenderit impedit."
    }, {
        name : "Hot Wings",
        price : "550 RS",
        img  : "https://images.kfcpakistan.com/image/1670410323079-image.jpg",
        detail : "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci sit neque incidunt quibusdam, labore pariatur nemo quos reprehenderit impedit."

    }, {
        name : "Mighty Zinger",
        price : "680 RS",
        img  : "https://images.kfcpakistan.com/image/1670409700963-image.jpg",
        detail : "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci sit neque incidunt quibusdam, labore pariatur nemo quos reprehenderit impedit."


    },
]
var card = "";
arr.forEach(c =>{
    card +=`
    <div class="card">
    <img src="${c.img}" class="img-1">
    <div class="card-detail">
    <h2 class="name">${c.name}</h2>
    <p class="p">${c.detail}</p>
    <div class="h5button">
    <h3 class="price">${c.price}</h3>
    <button class="data"
    data-name="${c.name}"
    data-price="${c.price}"
    data-img="${c.img}"
    onclick="add(this)"
    >Add To Bucket</button>
    </div>

    </div>
    </div>
    `
    document.getElementById("card").innerHTML = card;
})
var arr_2 = [];
function add(food){
  var name = food.getAttribute("data-name");
  var price = food.getAttribute("data-price");
  var img = food.getAttribute("data-img");
 
var obj ={
    name : name,
    price : price,
    img : img,
}
arr_2.push(obj)
localStorage.setItem("card" , JSON.stringify(arr_2));
var get = JSON.parse(localStorage.getItem("card"));
var table = "";
for(let i = 0;i < get.length ; i++){
    table += "<tr>" + "<th>" + get[i].name + "</th>" + "<th>" + get[i].price + "</th>" + "<th>" + "<img class='table-img' src=" + get[i].img +" >" + "</th>"  + "</tr>"
}
document.getElementById("table").innerHTML = table;
}
function come(){
    document.getElementById("modal").style.position = "absolute";
    document.getElementById("modal").style.right = "1rem"
    document.getElementById("modal").style.transition = " 0.5s all ease-in-out"
}
$(document).ready(function(){
    $("#close").click(function(){
        $("#modal").hide("slow")
    })
    $("#show").click(function(){
        $("#modal").show(2000)
    })
})