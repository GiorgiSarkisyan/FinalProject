const firstName = document.getElementById("name");
const surName = document.getElementById("surname");
const email = document.getElementById("email");
const number = document.getElementById("number");
const form = document.getElementById("form");
const formSection = document.getElementById("formSection");
const filledFormTitle = document.getElementById("filledFormTitle");
const filledFormSection = document.getElementById("filledFormSection");

let firstNameValue;

form.addEventListener('submit', (e) => {
    if (firstName.value === '' || firstName.value === null) {
        firstName.style.background = "Gray"
        firstName.placeholder = "Please Fill This Field"
    }
    else if (surName.value === '' || surName.value === null) {
        surName.style.background = "Gray"
        surName.placeholder = "Please Fill This Field"
    }
    else if (email.value === '' || email.value === null) {
        email.style.background = "Gray"
        email.placeholder = "Please Fill This Field"
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.style.background = "Gray"
        email.placeholder = "Please Enter A Valid Email"
    }
    else if (number.value === '' || surName.value === null) {
        number.style.background = "Gray"
        number.placeholder = "Please Fill This Field"
    }
    else if (number.value.length !== 9 ) {
        number.style.background = "Gray"
        number.placeholder = "Number Must Contain 9 Units"
    }
    else{
        formSection.style.display = "none"
        filledFormSection.style.display = "block"
        firstNameValue = firstName.value;
        filledFormTitle.textContent = `Thank You For Choosing us, ${firstNameValue}!`
    }
    e.preventDefault()
})