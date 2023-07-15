let content_product = document.querySelector('.content_product')


function drowproductsui() {
let  favourite_data=JSON.parse(localStorage.getItem('addeditem'))
let productUI = favourite_data.map((item) => {
    return `
   <div class="content_product_item">
  <img src="${item.img_src}" alt="">
   <div class="content_product_item_desc">
      <h2>${item.title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, culpa?</p>
      <p> Qunity:${item.qty}</p>
      

      <button onclick="RemovefromFavourite(${item.id})">Remove form Favourite</button>
       <i class="fa fa-heart" aria-hidden="true"></i>
      </div>
      </div>
 `
 })
 content_product.innerHTML = productUI
}
 drowproductsui()
 
 function RemovefromFavourite(id){
let product_items=localStorage.getItem('addeditem')
if(product_items){
let total_items=JSON.parse(product_items)  
let filteritemss=total_items.filter((item)=>item.id !== id)
localStorage.setItem('addeditem',JSON.stringify(filteritemss))
drowproductsui()
}
}




