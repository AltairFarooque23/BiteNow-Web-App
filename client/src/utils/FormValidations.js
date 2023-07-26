// this module contains form validations in both sign up and sign in.

export function  isFieldEmpty(code,data){
      // checks any fields are empty
      if(data === '' && code === "field.password"){
        return "Please Enter Your Password"
      }
      else if(data === '' && code === "field.username"){
        return "Please Enter Username"
      }
      else if(data === '' && code === "field.email"){
        return "Please Enter Email"
      }
}

export function isFormValid(status,data){
      // check whether user fields exists in database or not
      if(status === 'register.exists.username'){
        return "username already exists"
      }
      else if(status === 'register.exists.email'){
        return "This email is already in use"
      }
      else {
        return ''
      }
      
}

export function checkPasswordStrength(password){
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasLowerCaseLetter = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);
    const hasPasswordLength  = (password.length < 8) ? true : false

    if(hasPasswordLength){
        return "password must be aleast 8 characters";
    }
  
    if (
      hasCapitalLetter &&
      hasLowerCaseLetter &&
      hasNumber &&
      hasSpecialCharacter
    ) {
      return '';
    } else {
      return 'Password must contain at least one capital letter, one lowercase letter, one number, and one special character.';
    }
}

export function  comparePasswords(pwd,cpwd){
    if(cpwd === ''){
      return "Please re-enter your password";
    }
    else if(!(pwd === cpwd)){
      return "Password must be same"
    }
    else{
      return ''
    }
}