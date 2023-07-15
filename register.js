let register_usrename = document.getElementById('register_usrename')
let register_usre = document.getElementById('register_usre')
let register_password = document.getElementById('register_password')
let register_submit = document.getElementById('register_submit')



register_submit.addEventListener('click', clickedregister)

function clickedregister(e) {
    e.preventDefault()
    if (register_usrename.value === "" || register_usre.value === "") {
    } else {
        setregister()

        setTimeout(() => {
            window.location = 'login.html'

        }, 1000);

    }

}


function setregister() {
    localStorage.setItem('registerusrename', register_usrename.value)
    localStorage.setItem('registerusre', register_usre.value)
    localStorage.setItem('registerpassword', register_password.value)
}