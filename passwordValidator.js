/**
 * @file passwordValidator.js
 * @author Coltyn Gatton
 * @description allows a user to enter a password twice in order to validate it.
 */

/**
 * This function compares the two passwords to eachother.
 */
function validatePassword(){
    


    var password = document.getElementById("password").value;
    var passwordValidation = document.getElementById("passwordValidate").value;


    console.log(password);
    console.log(passwordValidate);
    if( password == passwordValidation){
        alert("Success! your password has been validated");
        return;
    }
    else if( password.length < 8 ){
        alert("Password must be 8 or more characters.");
        return;
    }
    else{
        alert("Passwords do not match. Please enter them again.");
        return;
    }
}
