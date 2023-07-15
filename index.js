
let content_product = document.querySelector('.content_product')
let btn_plus = document.getElementById('btn_plus')
let chosse_size = document.getElementById('chosse_size')

chosse_size.addEventListener('change', getproductfiltersize)

let showproducts= function (products = []) {
  products.map(ele => {
    let product_DOM = `
  <div class="content_product_item"style='border:${ele.me == 'yes' && '1px solid red'}'>
  <img src="${ele.img_src}" alt="">
  <div class="content_product_item_desc">
      <h2 onclick="savedeatlisid(${ele.id})">${ele.title}</h2>
      <p>${ele.desc}</p>
      <p>${ele.size}</p>
      ${ele.me === "yes" ? `<h2 class='edti_product'onclick='editproduct(${ele.id})'>Edit product</h2>` : ''}
      <button  onclick="showproductsoption(${ele.id})">ADD TO CART</button>
      <i class="fa fa-heart" aria-hidden="true"></i>
  </div>
</div>
  `
    content_product.innerHTML += product_DOM
  })
}
showproducts(JSON.parse(localStorage.getItem('data_api')) || products)



let addeditem = []
let allitems = []

function showproductsoption(id) {
  checkuser()
  let products = JSON.parse(localStorage.getItem('data_api'))
  let chooseitem = products.find(item => item.id === id)   //معني كده ان اي item اضغط عليها هضغط في localstorageوفي نفس الوقت بتبحث عنالمنتجات ككل
  let items = allitems.find(i => i.id === chooseitem.id)// دي بنستخدمها عند اضافه  منتج معين الي ساله التسوق  array  الخلاصه ان 
  if (items) {
    allitems = allitems.map((p) => {
      if (p.id === chooseitem.id)    //اذا وجد المنتج في متواجد في المصفوفه زود الكميه
        p.qty += 1
      return p
    })
  } else {
    allitems = [...allitems, chooseitem]
  }
  list_shopping_total.innerHTML = ""
  allitems.forEach(ele => {
    let draw_ui = `<div class="item_list_shopping">${ele.title} ${ele.qty}</div>`
    list_shopping_total.innerHTML += draw_ui
  })
  addeditem = [...addeditem, chooseitem]
  let unqieproduct = getuniquearry(addeditem, "id")
  localStorage.setItem('addeditem', JSON.stringify(unqieproduct))  // localstorage عشان يقدر بعد كده يحط المتغير ده ويحفظه بعد كده في varible ويحفظه في     
  shopping_cart_padge.style.display = 'block'
  shopping_cart_padge.innerHTML = id
}

function getuniquearry(arr, filterid) {
  let unique =
    arr.map(item => item[filterid])
      .map((item, index, finalarray) => finalarray.indexOf(item) === index && index)
      .filter(item => arr[item])
      .map(item => arr[item])
  return unique;
}

function checkuser() {
  if (localStorage.getItem('registerusrename')) {
  } else {
    window.location = 'login.html'
  }
}



function savedeatlisid(id) {
  localStorage.setItem('detalis_id', id)
  setTimeout(() => {
    window.location = 'cartdetalis.html'
  }, 1000);
}

function getproductfiltersize(e) {
  let val = e.target.value;
  let products = JSON.parse(localStorage.getItem('data_api'));
  if (val === 'all') {
    showproducts(products);
  } else {
    let filteredProducts = products.filter((product) => product.size === val);
    content_product.innerHTML = ''
    showproducts(filteredProducts);

  }
}


function editproduct(id) {
  localStorage.setItem('editid', id)
  setTimeout(() => {
    window.location = 'Edit.html'
  }, 500);
}

let input_search = document.getElementById('input_search')
input_search.addEventListener('keyup', function (e) {
  search(e.target.value, JSON.parse(localStorage.getItem('data_api')))
  if(e.target.value ===''){
    showproducts(JSON.parse(localStorage.getItem('data_api')))
  }
})

function search(title, data) {
  content_product.innerHTML=''
let array = data.filter((item) => item.title.indexOf(title) !== -1);
showproducts(array)
}



