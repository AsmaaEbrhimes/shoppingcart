
let content_product = document.querySelector('.content_product')



let showproducts = function (products = []) {
    // let loopproducts = products.filter(item => item.me === 'yes');
    // content_product.innerHTML = ""; // مسح المحتوى السابق قبل إضافة المحتوى الجديد
    // loopproducts.map(ele => {
    //     let new_product = document.createElement("div");
    //     new_product.classList.add("content_product_item");
    //     new_product.style.border = ele.me == 'yes' ? "1px solid red" : "none";
    //     new_product.innerHTML = `
    //     <img src="${ele.img_src}" alt="">
    //     <div class="content_product_item_desc">
    //         <h2 onclick="savedeatlisid(${ele.id})">${ele.title}</h2>
    //         <p>${ele.desc}</p>
    //         <p>${ele.size}</p>
    //         <h2 id="button" onclick="deleteproduct(${ele.id})">Delete product</h2>
    //         ${ele.me === "yes" ? `<h2 class='edti_product'onclick='editproduct(${ele.id})'>Edit product</h2>` : ''}
    //         <i class="fa fa-heart" aria-hidden="true"></i>
    //     </div>
    // `
    //     content_product.appendChild(new_product);
    // });
    let loopproducts = products.filter(item => item.me === 'yes');
    let mabproduct=loopproducts.map((ele)=>{
        return `
        <div class="content_product_item"style='border:${ele.me == 'yes' && '1px solid red'}'>
        <img src="${ele.img_src}" alt="">
        <div class="content_product_item_desc">
            <h2 onclick="savedeatlisid(${ele.id})">${ele.title}</h2>
            <p>${ele.desc}</p>
            <p>${ele.size}</p>
            ${ele.me ==="yes"?`<h2 class='edti_product'onclick='editproduct(${ele.id})'>Edit product</h2>`:''}
            <h2 id="button"  onclick="deleteproduct(${ele.id})">Delete product</h2>
            <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
      </div>
        `
    })
content_product.innerHTML=mabproduct
}
showproducts(JSON.parse(localStorage.getItem('data_api')))



function editproduct(id) {
    localStorage.setItem('editid', id)
    setTimeout(() => {
        window.location = 'Edit.html'
    }, 500);
}


function deleteproduct(id) {
    let products = JSON.parse(localStorage.getItem('data_api'));
    let updated_products = products.filter(item => item.id !== id);
    localStorage.setItem('data_api', JSON.stringify(updated_products));
    showproducts(updated_products);
}















