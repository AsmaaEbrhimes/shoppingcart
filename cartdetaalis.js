let product_detalisDom = document.querySelector('.product_detalis')
let localdetalisid = localStorage.getItem('detalis_id')
let localdetalis = JSON.parse(localStorage.getItem('data_api'))
let loop_detalis = localdetalis.find(item => item.id == localdetalisid)

let detalis = `
        <div class="product_detalis_item">
          <img src="${loop_detalis.img_src}" alt="">
            <h2>${loop_detalis.title}</h2>
            <p> ${loop_detalis.desc}</p><br>
            <button id="crat_product_btn" onclick="editproduct(${localdetalisid})">Editproduct</button>
        </div>
        `
product_detalisDom.innerHTML = detalis

function editproduct(id) {
  localStorage.setItem('editid', id)
  setTimeout(() => {
    window.location = 'Edit.html'
  }, 500);
}





