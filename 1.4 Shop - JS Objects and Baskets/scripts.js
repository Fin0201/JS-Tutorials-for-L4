//define product array

const products = [
    {
        id:1,
        title:"Shoe1",
        img:"img/shoe1.jpg",
        description:"This is shoe product 1",
        price:149.99
    },
    {
        id:2,
        title:"Shoe2",
        img:"img/shoe2.jpg",
        description:"This is shoe product 222222",
        price:79.99
    },
    {
        id:3,
        title:"Shoe3",
        img:"img/shoe3.jpg",
        description:"This is shoe product 3333333333333",
        price:59.99
    }
]





//store document modal in a variable
//access modal using document.getByID
var infoModal = new bootstrap.Modal(document.getElementById("main-info"));

//Used to attach event listener to a SINGLE Button
/*
document.getElementById("info-btn").addEventListener("click", function(e){
    console.log(e);
    document.getElementById("modal-data").innerHTML = products[0];
    infoModal.show()
})
*/


/*SET UP CART FUNCTIONALITY*/
//let cart = [1]

//Add to cart function when buying products
function AddToCart(){

}

//Update Cart
function UpdateCart(){

    cartHTML = "";

    //add item html to cart
    cartHTML+=   `<div class="row my-1">
    <div class="col-2">  <img class="w-100" src="img/shoe1.jpg">   </div>
    <div class="col-4">   Shoe 1 </div>
    <div class="col-2"> <input class="w-100" type="number" placeholder="1"> </div>
    <div class="col-2">  £ 49.99 </div>
    <div class="col-2">   <div class="btn btn-danger">X</div>      </div>
  </div>`;

    return cartHTML;
    
}



//how do I grab all classes with 'more info'?
//var items = document.getElementsByClassName("more-info");
const items = document.querySelectorAll(".more-info")
console.log(items);

//attach event listener to every button I find with more info class
items.forEach(item =>{
    item.addEventListener("click", function (e){
        console.log(e.target.id);
        document.getElementById("modal-data").innerHTML = products[e.target.id].description;
        infoModal.show()
    })
});

//attach modal for cart to JS
var cartModal = new bootstrap.Modal(document.getElementById("cart-modal"));

document.getElementById("cart-btn").addEventListener("click", function(){

    
    if (cart.length == 0){
        document.getElementById('cart-body').innerHTML="<b>Your cart is empty!</b>"
    }
    else{
        const htmldata = UpdateCart()
        document.getElementById('cart-body').innerHTML=htmldata
    }

     cartModal.show()
})
