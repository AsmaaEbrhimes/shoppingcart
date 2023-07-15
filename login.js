let login_user = document.getElementById('login_user')
let login_password = document.getElementById('login_password')
let login_supmit = document.getElementById('login_supmit')


let getusername = localStorage.getItem('registerusrename')
let getpassword = localStorage.getItem('registerpassword')

login_supmit.addEventListener('click', clickedlogin)

   
     

function clickedlogin(e) {

    e.preventDefault()

if(getusername===login_user.value && getpassword===login_password.value){
  
      setTimeout(() => {
            window.location = 'index.html'
        }, 1000);
    }

}
  

