const firstName = document.getElementById("name")
const surName = document.getElementById("surname")
const email = document.getElementById("email")
const number = document.getElementById("number")
const form = document.getElementById("form")
const formSection = document.getElementById("formSection")
const filledFormTitle = document.getElementById("filledFormTitle")
const filledFormSection = document.getElementById("filledFormSection")

let firstNameValue;

form.addEventListener('submit', (e) => {
    if (firstName.value === '' || firstName.value === null) {
        firstName.style.background = "Gray"
        firstName.placeholder = "Please Fill This Field"
    }
    if (surName.value === '' || surName.value === null) {
        surName.style.background = "Gray"
        surName.placeholder = "Please Fill This Field"
    }
    if (email.value === '' || email.value === null) {
        email.style.background = "Gray"
        email.placeholder = "Please Fill This Field"
    }
    if (number.value === '' || surName.value === null) {
        number.style.background = "Gray"
        number.placeholder = "Please Fill This Field"
    }
    else{
        formSection.style.display = "none"
        filledFormSection.style.display = "flex"
        firstNameValue = firstName.value;
        filledFormTitle.textContent = `Thank You For Choosing us, ${firstNameValue}!`
    }
    e.preventDefault()
})