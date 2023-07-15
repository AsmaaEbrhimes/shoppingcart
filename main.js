
let Athution = document.getElementById('Athution')
let logout_btn = document.querySelector('.logout-btn')
let logout_username = document.getElementById('logout_username')
let logout_EL = document.getElementById('logout')
let user_index = localStorage.getItem('registerusrename')
let shopping_cart = document.querySelector('.shopping_cart')
let list_shopping_total = document.querySelector('.list_shopping_total')
let shopping_cart_padge = document.getElementById('shopping_cart-padge')
let list_shopping = document.querySelector('.list_shopping')

shopping_cart.addEventListener('click', opencartMenue)
logout_EL.addEventListener('click', clickedlogout)

function checkproduct() {
  let additem = localStorage.getItem('addeditem')
  let parseobject = JSON.parse(additem)
  if (parseobject) {
    parseobject.map((ele) => {
      let draw_ui = `<div class="item_list_shopping">${ele.title} <span id="qty">${ele.qty}</span></div>`
      list_shopping_total.innerHTML += draw_ui
    });
    shopping_cart_padge.style.display = 'block'
    shopping_cart_padge.innerHTML = parseobject.length
  }
}
checkproduct()

function opencartMenue() {
  if (list_shopping_total.innerHTML !== "") {
    if (list_shopping.style.display === "none") {
      list_shopping.style.display = "block";
    } else {
      list_shopping.style.display = "none";
    }
  }
  }
  
opencartMenue()




function clickedlogout() {
    // localStorage.clear()
    setTimeout(() => {
      window.location = 'register.html'
    }, 1000);
  }
  

  function showcards() {
    Athution.style.display = 'none'
    logout_username.innerHTML = user_index
  }
  showcards()
  