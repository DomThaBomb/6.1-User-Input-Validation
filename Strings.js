// Domnik Tramondo

// First name and last name code is added in here separate

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const zipcodeValue = zipcode.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'Username is required');
    } else if (firstnameValue.length > 20 ) {
        setError(firstname, 'First name can not be more than 20 characters long.')
    } else {
        setSuccess(firstname);
    }
  
    if(lastnameValue === '') {
        setError(lastname, 'Username is required');
    } else if (lastnameValue.length > 20 ) {
        setError(lastname, 'Last name can not be more than 20 characters long.')
    } else {
        setSuccess(lastname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(zipcodeValue === '') {
        setError(zipcode, 'Username is required');
    } else if (zipcodeValue.length > 5 ) {
        setError(zipcode, 'Zip code must be at least 5 characters long.')
    } else {
        setSuccess(zipcode);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length > 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Regular expressions

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
