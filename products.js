let content_product = document.querySelector('.content_product')


function drowproductsui() {
   let products = JSON.parse(localStorage.getItem('addeditem'))
   let productUI = products.map((item) => {
      return `
     <div class="content_product_item">
    <img src="${item.img_src}" alt="">
     <div class="content_product_item_desc">
        <h2>${item.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, culpa?</p>
        <p> Qunity:${item.qty}</p>
        

        <button onclick="Removefromitems(${item.id})">Remove form Cart</button>
         <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
        </div>
   `
   })
   content_product.innerHTML = productUI
}
drowproductsui()


function Removefromitems(id) {
   let product_items = localStorage.getItem('addeditem')
   if (product_items) {
      let total_item = JSON.parse(product_items)
      let filteritems = total_item.filter(items => items.id !== id)
      localStorage.setItem('addeditem', JSON.stringify(filteritems))
      drowproductsui()

   }
}


