let edit_profile_form = document.getElementById('edit_profile_form')
let profile_user = document.getElementById('profile-user')
let profile_email = document.getElementById('profile-email')
let profile_imge = document.getElementById('profile-imges')

let previewimage;

let profile_form_Name = localStorage.getItem('registerusrename')
let profile_form_Email = localStorage.getItem('registerusre')

edit_profile_form.addEventListener('submit', Editprofile)
profile_imge.addEventListener('change',loadimage)

profile_user.value = profile_form_Name
profile_email.value = profile_form_Email

function Editprofile(e) {
    e.preventDefault()
    localStorage.setItem('registerusrename', profile_user.value)
    localStorage.setItem('registerusre', profile_email.value)
    localStorage.setItem('editImage',previewimage )
    setTimeout(() => {
        window.location = "profile.html"
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
   
  }
  
  function getimge64bases(file) {
    let reder = new FileReader()
    reder.readAsDataURL(file)
    reder.onload = function () {
      previewimage = reder.result
    
    }
  }
  
  