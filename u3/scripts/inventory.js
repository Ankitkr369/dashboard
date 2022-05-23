let product=JSON.parse(localStorage.getItem("products"))||[];
console.log(product.length);
product.map(function(elm,index){

var box=document.createElement("div");

var image=document.createElement("img");
image.src=elm.image;

var type=document.createElement("h2");
type.innerText=elm.type;

var desc=document.createElement("h2");
desc.innerText=elm.desc;

var price=document.createElement("h2");
price.innerText=elm.price;

var rembtn=document.createElement("button");

rembtn.setAttribute("id","remove_product")
rembtn.innerText="Remove";

rembtn.addEventListener("click",function(){
    removeitem(elm,index);
})

box.append(image,type,desc,price,rembtn)
document.querySelector("#all_products").append(box);
})

function removeitem(elm,index){

    product.splice(index,1)
    localStorage.setItem("products",JSON.stringify(product));
    window.location.reload();
}