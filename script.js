let passwordInputType = document.getElementById('passwordInputFunction')

let value = 0

function viewPassword() {
  if (value <= 0) {
    viewPasswordButton.classList.add('viewPasswordActive')

    passwordInputType.type = 'text'
    value++
  } else if (value > 0) {
    viewPasswordButton.classList.remove('viewPasswordActive')
    passwordInputType.type = 'password'
    value = 0
  }
}

let textValue = 0
let textInput = document.getElementById('inputEmailContainer')

function textInputActive() {
  if (textValue <= 0) {
    textInput.classList.add('activeJs')
    textValue++

    passwordInputGet.classList.remove('activeJs')
    passwordValue = 0
  } else if (textValue > 0) {
    textInput.classList.remove('activeJs')
    textValue = 0

    passwordInputGet.classList.remove('activeJs')
    passwordValue = 0
  }
}

let passwordValue = 0
let passwordInputGet = document.getElementById('passwordInput')

function passwordInputActive() {
  if (passwordValue <= 0) {
    passwordInputGet.classList.add('activeJs')
    passwordValue++

    textInput.classList.remove('activeJs')
    textValue = 0
  } else if (passwordValue > 0) {
    passwordInputGet.classList.remove('activeJs')
    passwordValue = 0

    textInput.classList.remove('activeJs')
    textValue = 0
  }
}
