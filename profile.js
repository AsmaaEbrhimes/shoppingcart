let user_name=document.getElementById('user_name')
let user_email=document.getElementById('user_email')
let products_length=document.querySelector('#products_length span')
let user_imge=document.getElementById('user_imge')

let productss=JSON.parse(localStorage.getItem('data_api'))
let filterproduct=productss.filter((i)=>i.me==='yes')



 let registerusrename=localStorage.getItem('registerusrename')
 let registerusre=localStorage.getItem('registerusre')
 let IMAGE=localStorage.getItem('editImage')

 
 user_name.innerHTML=registerusrename
 user_email.innerHTML=registerusre
 user_imge.src=IMAGE

 if(products_length !== 0){
 products_length.innerHTML=filterproduct.length
 }else{
    products_length.remove()
 }