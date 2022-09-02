//get elements from DOM

const fullName = document.getElementById("FullName");
const phone = document.getElementById("Phone");
const eMail = document.getElementById("Email");
const address = document.getElementById("Address");
const password = document.getElementById("Password");
const dateofbirth = document.getElementById("DateOfBirth");
const gender = document.getElementById("Gender");

//console.log(fullName,phone,eMail,password,address,dateofbirth,gender)




//add event Listeners
fullName.addEventListener("blur", validateFullName);
phone.addEventListener("blur", validatePhone);
password.addEventListener("blur", validatePassword);
eMail.addEventListener("blur", validateEmail);
dateofbirth.addEventListener("blur", validateDateOfBirth);
address.addEventListener("blur", validateAddress);
gender.addEventListener("blur", validateGender);



//Create Validation functions (Full Name)

function validateFullName() {
    const regEx_FullName = /^[a-zA-Z]{2,20}( )[a-zA-Z]{2,20}(( )[a-zA-Z]{2,20})?&/;
    if (!regEx_FullName.test(fullName.vaule)) {
        //fullName.classList.add("notValid");
        //fullName.classList.remove("Valid");
        //console.log("not Valid");
        notValid(fullName)

    } else {
        //console.log("valid");
        //fullName.classList.remove("notValid");
        //fullName.classList.add("Valid")
        Valid(fullName)
    }
}


// Create Validation function (Phone)

function validatePhone() {
    const regEx_Phone = /^\(?\d{3})?[-. ]?\d{3}[-. ]?\d{5}$/;

    if (!regEx_Phone.test(phone.vaule)) {
        notValid(phone)


    } else {
        Valid(phone)

    }
}

function validatePassword() {
    const regEx_Password = /^([a-zA-Z0-9]){10}$/;

    if (!regEx_Password.test(password.vaule)) {
        notValid(password)


    } else {
        Valid(password)

    }
}


function validateEmail() {
    const regEx_Email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;

    if (!regEx_Email.test(eMail.vaule)) {
        notValid(eMail)


    } else {
        Valid(eMail)

    }
}

function validateDateOfBirth() {
    const regEx_DateOfBirth = /^\d{2}-\d{2}-\d{4}$/;

    if (!regEx_DateOfBirth.test(eMail.vaule)) {
        notValid(dateofbirth)


    } else {
        Valid(dateofbirth)

    }
}


function validateAddress() {
    const regEx_Address = /^[a-zA-Z]{2,20}( )[a-zA-Z]{2,20}(( )[a-zA-Z]{2,20})?&/;

    if (!regEx_Address.test(eMail.vaule)) {
        notValid(address)


    } else {
        Valid(address)

    }
}

function validateGender() {
    const regEx_Gender = /^(?:m|M|male|Male|f|F|female|Female)$/;

    if (!regEx_Gender.test(eMail.vaule)) {
        notValid(gender)


    } else {
        Valid(gender)

    }
}

//Validation Function

function notValid(input) {

    input.classList.add("notValid");
    input.classList.remove("Valid");

}



function Valid(input) {

    input.classList.remove("notValid");
    input.classList.add("Valid")

}