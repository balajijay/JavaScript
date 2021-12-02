// JS program to validate an email address (The email should haver atleast 5 characters before @ symbol)

function validateEmail(email_id) {
    const regex_pattern = /\S{5}@\S+\.\S+/g;
    
    if (regex_pattern.test(email_id)) {
        console.log('The email ' + email_id + ' is valid');
    }
    else {
        console.log('The email ' + email_id + ' is not valid');
    }
}

validateEmail('balaji@gmail.com');
validateEmail('hello@com');