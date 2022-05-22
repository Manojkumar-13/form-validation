'use strict';
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password');
const number = document.getElementById('number')
const inputArr = [username, email, number, password, confirmPassword];
// functions
const message =function(input){
  const errorMessage = input.name.replace(/-p/, ' P');
  return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);

}
const checkEmail = function(input){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
  if(input.value.trim() !== ''){
    if (re.test(String(input.value).toLowerCase().trim())){
      showSuccess(input);
    }else{
      showError(input, `${message(input)} is not Valid`);
    }
  }
}
const showError = function(input, message){
  let formControl = input.parentElement;
  formControl.classList = 'form-control error'
  const small = formControl.querySelector('small');
  small.innerText = message;
}
const showSuccess = function(input){
  let formControl = input.parentElement;
  formControl.classList = 'form-control success'
}
const checkRequired = function(inputArr){
inputArr.forEach(input => {
  if(input.value.trim() === ''){
    showError(input, `${message(input)} is Required`);
  }else{
    showSuccess(input);
  }
})
}
const checkLength = function(input, min, max){
  if(input.value.trim() !== ''){
    if(input.value.trim().length < min){
      showError(input, `${message(input)} must be at least ${min}characters`);
    }else if (input.value.trim().length > max){
      showError(input, `${message(input)} must be less than ${max}characters`);
    }else{
      showSuccess(input);
    }
  }
}
const checkPhoneNumber = function(input){
  const regEx = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/ ;
  if(input.value.trim() !==''){
    if(regEx.test(input.value.trim())){
      showSuccess(input);
    }else{
      showError(input, `Enter Valid Phone Number`); 
    }
  }
}
const checkPasswordMatch = function(input1,input2){
  if(input1.value.trim()!== '' && input2.value.trim()!== ''){
    if(input1.value.trim()!== input2.value.trim()){
      showError(input2, 'Password not matched')
    }else{
      showSuccess(input1);
    }
  }
}

// password visibility
const visible = function(input){
  const type = input.getAttribute('type') === 'password'?'text':'password';
  password.setAttribute('type',type);
  
}
const visibility = document.getElementById('visibility');
visibility.addEventListener('click',function(e){
  visible(password);
})

// count function
const text = document.getElementById('text');
const current = document.getElementById('current');
const countDisplay = function(){
  if(text.value !==''){
    current.innerHTML = text.value.length
  }else
  current.innerHTML = 0;
}
// eventListener
form.addEventListener('submit',(e) => {
  e.preventDefault();
  checkRequired(inputArr);
  checkLength(username, 5, 12);
  checkEmail(email);
  checkPhoneNumber(number);
  checkLength(password, 5, 12);
  checkPasswordMatch(password,confirmPassword);
  
});
// Event Listener
// form.addEventListener('submit',function(event){
//   event.preventDefault();
//   if(username.value.trim() === ''){
//     showError(username,'Username is Required');
//   }else{
//     showSuccess(username);
//   }
//   if(email.value.trim() === ''){
//     showError(email,'Email is Required');
//   }else{
//     showSuccess(email);
//   }
//   if(password.value.trim() === ''){
//     showError(password,'Password is Required');
//   }else{
//     showSuccess(password);
//   }
//   if(confirmPassword.value.trim() === ''){
//     showError(confirmPassword,'Confirm Password is Required');
//   }else{
//     showSuccess(confirmPassword);
//   }
// });

// RegEx -Regular Expressions
// Pattern, flags
// g - global flag looking for whole pattern
// m-to check multiple line
// i- to check case sensitive
// let Manoj = /love/gi

// regex object method
// test method
// const str = 'I love javascript';
// const pattern = /love/;
// const result = pattern.test(str);
// console.log(result);

// Match method

  // const result = str.match(pattern);
  // console.log(result);

  // Search method
  // const result = str.search(pattern);
  // console.log(result);
  // const newStr = str.replace(/javascript|Javascript/,'YOU');
  // console.log(newStr)
