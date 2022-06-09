let buttonValue = document.getElementById('viewPasswordButton')

let passwordInputType = document.getElementById('passwordInput')

let value = 0

function viewPassword(){

  if(value <= 0){
    viewPasswordButton.classList.add('viewPasswordActive')

    passwordInputType.type = 'text'
    value ++
  }

  else if(value > 0){
    viewPasswordButton.classList.remove('viewPasswordActive')
    passwordInputType.type = 'password'
    value = 0
  }
  
  console.log(value)
  
}