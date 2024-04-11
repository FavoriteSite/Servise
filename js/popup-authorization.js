// ссылки при нажатии на которые открывается попап с таким классом
const popupLinks = document.querySelectorAll('.popup-link');
//  тег body для блокировки скролла при открытом попапе
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

// получаем открытый попап и если он существует, его закрываем и у боди блокируем скролл
// далее попап, который передали (curentPopup) открываем и вешаем собитие при клике, чтобы закрылся попап только на темную область
//   if (!e.target.closest('.popup__content')) - если при клике на что-то у родителя нет такого класса т.е. это оболочка
// при клике на которую он заркывается 
// если я нажму на обект у которого есть родитель с клаасом .popup__content, то он не закроется, потому что стоит !знак НЕ
//  то есть закроется при нажатие на блоки с классами .popup__body и  .popup
function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup-authorization__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
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

// высчитывание ширины скролла, чтобы его скрывать при открытии попапа
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

//  закрытие по esc
document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});




//////////////////////////////////// 
// Смена форм решистрации и входа
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

/////////
// валидация формы

// получаем форму РЕГИСТРАЦИИ по имени
const formRegistrationMain = document.forms.formRegistration;

const inputText = formRegistrationMain.formRegistrationInputName;
const inputEmail = formRegistrationMain.formRegistrationInputEmail;
const inputPassword = formRegistrationMain.formRegistrationInputPassword;
const inputPasswordTwo = formRegistrationMain.formRegistrationInputPasswordTwo;

formRegistrationMain.addEventListener('submit', function (event) {
  event.preventDefault();
  let inputTextValue = inputText.value;
  let inputEmailValue = inputEmail.value;
  let inputPasswordValue = inputPassword.value;
  let inputPasswordTwoValue = inputPasswordTwo.value;


  if (inputTextValue == "" || inputTextValue.length <= 2) {
    inputText.classList.add('_error');
  }

  if (inputEmailValue == "" || inputEmailValue.length <= 5) {
    inputEmail.classList.add('_error');
  }

  if (inputPasswordValue == "" || inputPasswordValue.length <= 2) {
    inputPassword.classList.add('_error');
  }

  if (inputPasswordTwoValue == "") {
    inputPasswordTwo.classList.add('_error');
  }
  if (inputPasswordTwoValue != inputPasswordValue) {
    inputPasswordTwo.value = "Пароли не совпадают";
    inputPasswordTwo.classList.add('_error');
  }
});

// получаем все поля с дата атрибутом data-focus
// для всех форм с дата атрибутом data-focus
const focus = document.querySelectorAll('.authorization-input[data-focus]');
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
