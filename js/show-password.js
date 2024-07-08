// const inputPasswords = document.querySelectorAll('[data-pass]');


// if (inputPasswords.length > 0) {
//   for (let i = 0; i < inputPasswords.length; i++) {
//     const inputPassword = inputPasswords[i];
//     let nextSibling = inputPassword.nextElementSibling;
//     let firstChild = nextSibling.firstElementChild;
//     let lastChild = nextSibling.lastElementChild;
//     nextSibling.addEventListener('click', function (e) {
//       if (inputPassword.getAttribute('type') == 'password') {
//         inputPassword.setAttribute('type', 'text');
//         firstChild.classList.add('_active');
//         lastChild.classList.add('_active');
//       }
//       else {
//         firstChild.classList.remove('_active');
//         lastChild.classList.remove('_active');
//         inputPassword.setAttribute('type', 'password');
//       }
//     })
//   }
// }


// if (inputPasswords.length > 0) {
//   for (let i = 0; i < inputPasswords.length; i++) {
//     const focus = inputPasswords[i];
//     const inputPlasceholder = focus.placeholder;
//     focus.addEventListener('focus', function (e) {
//       focus.placeholder = "";
//     });
//     focus.addEventListener('blur', function (e) {
//       focus.placeholder = inputPlasceholder;
//     });
//   };
// }

