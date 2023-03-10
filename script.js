main();

function main() {
    document.onload = loadTitlePage();
    document.onload = loadFormPage();
}


function load(identifier) {
    const element = document.querySelector(identifier);
    element.classList.add('opacity-load-in');
    setFullOpacity(element);
}

function stretchIn(identifier) {
    const element = document.querySelector(identifier)
    element.classList.add('stretch-in');
    setFullOpacity(element);
}

function setNoOpacity(element) {
    element.setAttribute('style', 'opacity: 0');
}

function setFullOpacity(element) {
    element.setAttribute('style', 'opacity: 1');
}

function loadTitlePage() {
    load('#title');
    setTimeout(() => { load('.down-arrow'); }, 2000);
    addDateToTitlePage();
}


function loadFormPage() {
    setTimeout(() => {
        load('.text1');
        load('.text2');
    }, 200);
    setTimeout(() => {
        stretchIn('div#form-ctnr');
        setTimeout(() => {
            stretchIn('form');
            setTimeout(() => { 
                load('form button'); 
                load('form > div'); 
            }, 2000);
        }, 2000);
    }, 2500);
}

function resetFormPage() {

    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    const formCtnr = document.querySelector('div#form-ctnr');
    const form = document.querySelector('form');
    const formBtn = document.querySelector('form button');
    const formDiv = document.querySelector('form > div');
    const formElements = [text1, text2, formCtnr, form, formBtn, formDiv];
    formElements.forEach(element => {
        setNoOpacity(element);
        if(element.classList.contains('stretch-in')) element.classList.remove('stretch-in');
        if(element.classList.contains('opacity-load-in')) element.classList.remove('opacity-load-in');
    });
}

const downArrow = document.querySelector('.down-arrow-ctnr');
downArrow.addEventListener('click', (e) => {
    resetFormPage();
    loadFormPage();
})

function addDateToTitlePage() {
    const date = document.createElement('div');
    date.textContent= '2023';
    date.classList.add('title-page-date')
    const titlePage = document.querySelector('#titlepage');
    titlePage.insertBefore(date, titlePage.childNodes[0]);
}
const form = document.querySelector('form');

// get elements to be manipulated in the form
const fullName = document.getElementById('full-name');
const fullNameRegExp = /^[a-zA-Z'-]+$/;
const fullNameError = document.querySelector('#full-name + span.error');

const username = document.getElementById('username');
const usernameError = document.querySelector('#username + span.error');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

const reenter = document.getElementById('reenter');
const reenterError = document.querySelector('#reenter + span.error');


// validate form only if all inputs are validated
form.addEventListener("submit", (e) => {
    if(!fullNameRegExp.test(fullName.value)) {
        showFullNameError();
        e.preventDefault();
    }
    if(!checkUsernameValidity(username)) {
        showUsernameError();
        e.preventDefault;
    }
    if(!email.validity.valid) {
        showEmailError();
        e.preventDefault();
    }
    if(!password.validity.valid) {
        showPasswordError();
        e.preventDefault();
    }
    if(!checkReenterValidity(password, reenter)) {
        showReenterError();
        e.preventDefault();
    }
})

// add validation and dynamic styling to input fields
fullName.addEventListener("input", () => {
    if(fullNameRegExp.test(fullName.value)) {
        fullName.classList.add('valid');
        fullName.classList.remove('invalid', 'top-rounded');
        fullNameError.textContent = "";
        fullNameError.className = "error";
    }
    else {
        fullName.classList.remove('valid');
        fullName.classList.add('invalid');
        showFullNameError();
    }
})

username.addEventListener("input", () => {
    if(checkUsernameValidity(username)) {
        username.classList.add('valid');
        username.classList.remove('invalid', 'top-rounded');

        usernameError.textContent = "";
        usernameError.className = "error";
    }
    else {
        username.classList.remove('valid');
        username.classList.add('invalid');
        showUsernameError();
    }

    if(username.validity.valueMissing) {
        username.classList.remove('valid', 'invalid');
    }
})

email.addEventListener("input", (e) => {
    if(email.validity.valid) {
        email.classList.add('valid');
        email.classList.remove('invalid', 'top-rounded');

        emailError.textContent = "";
        emailError.className = "error";
    }
    else {
        email.classList.remove("valid");
        email.classList.add('invalid');
        showEmailError();
    }
})

password.addEventListener("input", (e) => {
    if(password.validity.valid) {
        password.classList.add('valid');
        password.classList.remove('invalid', 'top-rounded');

        passwordError.textContent = "";
        passwordError.className = 'error';
    }
    else {
        password.classList.remove('valid');
        password.classList.add("invalid");
        showPasswordError();
    }

    if(password.validity.valueMissing) {
        password.classList.remove('valid', 'invalid');
    }
})

reenter.addEventListener("input", (e) => {
    if(checkReenterValidity(password, reenter)) {
        reenter.classList.add('valid');
        reenter.classList.remove('invalid', 'top-rounded');

        reenterError.textContent = "";
        reenterError.className = 'error';
    }
    else {
        reenter.classList.remove('valid');
        reenter.classList.add('invalid');
        showReenterError();
    }

    if(reenter.validity.valueMissing) {
        reenter.classList.remove('valid', 'invalid');
    }
})  

// display errors as text under the input fields
function showFullNameError() {
    fullName.classList.add('top-rounded');
    if(/\d/.test(fullName.value)) {
        fullNameError.textContent = "Please do not enter any decimal numbers.";
    }
    else {
        fullNameError.textContent = "Please enter your full name.";
    }
    fullNameError.className = "error active";
}

function showUsernameError() {
    username.classList.add('top-rounded');
    usernameError.textContent = "Please enter a username.";
    usernameError.className = "error active";
}

function showEmailError() {
    email.classList.add('top-rounded');
    emailError.textContent = "The entered value needs to be an email address."
    emailError.className = "error active";
}

function showPasswordError() {
    if(!password.validity.valueMissing && password.validity.tooShort) {
        password.classList.add('top-rounded');
        passwordError.textContent = `Your password must be at least ${password.minLength} characters.`;
        passwordError.className = "error active";
    }
    else if(!password.validity.valid) {
        password.classList.add('top-rounded');
        passwordError.textContent = "Please enter a password.";
        passwordError.className = "error active";
    }
}

function showReenterError() {
    reenter.classList.add('top-rounded');
    reenterError.textContent = "Please re-enter the same password, that you entered above.";
    reenterError.className = "error active";
}

// check custom validity of fields
function checkReenterValidity(a, b) {
    if(a.value === b.value) { 
        return true;
    }
    return false;
}

function checkUsernameValidity(c) {
    // if username already taken, return false; 
    // to be extended in future...
    if(!c.validity.valueMissing) {
        return true;
    }
    return false;
}