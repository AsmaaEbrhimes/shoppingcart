
let product_form = document.getElementById('product_form')
let product_name = document.getElementById('product_name')
let product_desc = document.getElementById('product_desc')
let product_size = document.getElementById('product_size')
let uploadImage = document.getElementById('upload_image')
let edit_id = localStorage.getItem('editid')
let produts = JSON.parse(localStorage.getItem('data_api'))
let editfilter = produts.find(i => i.id == edit_id)
let previewimage;

product_name.value = editfilter.title
product_desc.value = editfilter.desc
product_size.value = editfilter.size
previewimage = editfilter.img_src

product_size.addEventListener('change', getproductsizevalue);
product_form.addEventListener('submit', createproduct);
uploadImage.addEventListener('change', loadimage);



function getproductsizevalue(e) {
    productsizevalue = e.target.value;
}

function createproduct(e) {
    e.preventDefault()
    editfilter.title = product_name.value
    editfilter.desc = product_desc.value
    editfilter.size = product_size.value
    editfilter.img_src = previewimage
    localStorage.setItem('data_api', JSON.stringify(produts))
    setTimeout(() => {
        window.location = 'index.html'
    }, 500);
}

function loadimage() {
    let file = this.files[0]
    let types = ["image/jpeg", "image/png"]
    if (types.indexOf(file.type) == -1) {
        alert('Invalid image type. Please select a JPEG or PNG file.');
        return;
    }
    if (file.size > 2 * 1024 * 1024) {
        alert('Image file size should not exceed 2MB.');
        return;
    }
    getimge64bases(file)
    previewimage = URL.createObjectURL(file);
    console.log(previewimage)
}

function getimge64bases(file) {
    let reder = new FileReader()
    reder.readAsDataURL(file)
    reder.onload = function () {
        previewimage = reder.result
    }
}


