//store the products array in localstorage as "products"



function product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function storeproduct(e){

let form=document.getElementById("product")
let type=form.type.value;
let desc=form.desc.value;
let price=form.price.value;
let image=form.image.value;
let products=JSON.parse(localStorage.getItem("products"))||[];
let p1=new product(type,desc,price,image)
products.push(p1);
localStorage.setItem("products",JSON.stringify(products));


}
