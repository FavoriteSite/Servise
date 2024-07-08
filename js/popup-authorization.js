
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('data-record').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i];
    el.addEventListener("click", function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('_lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('_lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});


// Смена форм регистрации и входа
const entranceButton = document.querySelector('.popup-authorization__entrance');
const formEntrance = document.querySelector('.form-entrance');
const formRecovery = document.querySelector('.form-recover');

const registrationButton = document.querySelector('.popup-authorization__registration');
const formRegistration = document.querySelector('.form-registration');

entranceButton.addEventListener('click', function (e) {
  if (entranceButton.classList.contains('_active')) { }
  entranceButton.classList.add('_active'); // выделится жирным слово вход
  formEntrance.classList.remove('_active'); // появится форма для входа
  registrationButton.classList.remove('_active'); //станет не жирным слово регистрация
  formRegistration.classList.remove('_active'); // удалится форма регистрации

})

registrationButton.addEventListener('click', function (e) {
  if (registrationButton.classList.contains('_active')) { }
  registrationButton.classList.add('_active');
  formRegistration.classList.add('_active'); // появится форма для входа
  entranceButton.classList.remove('_active');
  formEntrance.classList.add('_active'); // удалится форма входа
})

formRecovery.addEventListener('click', function (e) {
  formRecovery.classList.add('_active');
  formRegistration.classList.remove('_active');
  formEntrance.classList.add('_active');
})



// валидация формы  РЕГИСТРАЦИЯ
const formRegistrationMain = document.forms.formRegistration;

const inputText = formRegistrationMain.formRegistrationInputName;
const inputEmail = formRegistrationMain.formRegistrationInputEmail;
const inputPassword = formRegistrationMain.formRegistrationInputPassword;
const inputPasswordTwo = formRegistrationMain.formRegistrationInputPasswordTwo;
const inputChek = formRegistrationMain.formRegistrationInputCheckbox;

const textError = document.querySelector('.form-registration-error');
formRegistrationMain.addEventListener('submit', function (event) {
  event.preventDefault();
  let inputTextValue = inputText.value;
  let inputEmailValue = inputEmail.value;
  let inputPasswordValue = inputPassword.value;
  let inputPasswordTwoValue = inputPasswordTwo.value;

  if (inputTextValue.length <= 2) {
    inputText.classList.add('_error');
    inputText.style.border = "none";
  }

  if (inputEmailValue.length <= 5) {
    inputEmail.classList.add('_error');
    inputEmail.style.border = "none";
  }

  if (inputPasswordValue.length <= 6) {
    inputPassword.classList.add('_error');
    inputPassword.style.border = "none";
  }

  if (inputPasswordTwoValue == "") {
    inputPasswordTwo.classList.add('_error');
    inputPasswordTwo.style.border = "none";
  }

  if (inputPasswordTwoValue != inputPasswordValue) {
    textError.style.opacity = "1";
    inputPassword.classList.add('_error');
    inputPasswordTwo.classList.add('_error');
  }
  if (inputPasswordTwoValue == inputPasswordValue) {
    textError.style.opacity = "0";
  }

  if (inputChek.checked == false) {
  }
});

////////////////////
const focus = document.querySelectorAll('[data-focus]');
if (focus.length > 0) {
  for (let i = 0; i < focus.length; i++) {
    const inputNum = focus[i];
    const inputPlasceholder = inputNum.placeholder;
    inputNum.addEventListener('focus', function (e) {
      inputNum.placeholder = "";
      if (inputNum.classList.contains("_error")) {
        inputNum.classList.remove('_error');
      }
    });
    inputNum.addEventListener('blur', function (e) {
      inputNum.placeholder = inputPlasceholder;
    });
  };
}



/////////////////////////////
const inputPasswords = document.querySelectorAll('[data-pass]');


if (inputPasswords.length > 0) {
  for (let i = 0; i < inputPasswords.length; i++) {
    const inputPassword = inputPasswords[i];
    let nextSibling = inputPassword.nextElementSibling;
    let firstChild = nextSibling.firstElementChild;
    let lastChild = nextSibling.lastElementChild;
    nextSibling.addEventListener('click', function (e) {
      if (inputPassword.getAttribute('type') == 'password') {
        inputPassword.setAttribute('type', 'text');
        firstChild.classList.add('_active');
        lastChild.classList.add('_active');
      }
      else {
        firstChild.classList.remove('_active');
        lastChild.classList.remove('_active');
        inputPassword.setAttribute('type', 'password');
      }
    })
  }
}