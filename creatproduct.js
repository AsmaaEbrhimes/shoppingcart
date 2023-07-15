let product_form = document.getElementById('product_form')
let product_name = document.getElementById('product_name')
let product_desc = document.getElementById('product_desc')
let product_size = document.getElementById('product_size')
let uploadImage = document.getElementById('upload_image')
let previewimage;

product_size.addEventListener('change', getproductsizevalue);
product_form.addEventListener('submit', createproduct);
uploadImage.addEventListener('change', loadimage);

function getproductsizevalue(e) {
  productsizevalue = e.target.value;
}

function createproduct(e) {
  e.preventDefault()
  let allproducts = JSON.parse(localStorage.getItem('data_api'))
  let name_value = product_name.value
  let desc_value = product_desc.value

  let obj = {
    id:allproducts.length+1,
    qty:1,
    title: name_value,
    desc: desc_value,
    img_src: previewimage,
    size: productsizevalue,
    me:"yes"
  }
  newproducts = [...allproducts, obj]
  localStorage.setItem('data_api', JSON.stringify(newproducts))
setTimeout(() => {
  window.location='index.html'
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


