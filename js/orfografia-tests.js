//процентный круг
// const percentages = document.querySelector('.name-element__circle');
// if (percentages.length > 0) {
//   for (let i = 0; i < percentages.length; i++) {
//     const percentage = percentages[i];
//     percentage.addEventListener('click', percentageItem);
//   }
// }

const circle = document.querySelector('.name-element__circle-progress');
const radius = circle.r.baseVal.value;

//длина окружности 2ПиR
const circumeFerence = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumeFerence} ${circumeFerence}`
circle.style.strokeDashoffset = circumeFerence;

function setProgress(persent) {
  const offset = circumeFerence - persent / 100 * circumeFerence;
  circle.style.strokeDashoffset = offset;
}

setProgress(69);



//смена блоков при нажатии темы
const themeLinks = document.querySelectorAll('.spelling__link[data-name]');
if (themeLinks.length > 0) {
  for (let i = 0; i < themeLinks.length; i++) {
    const themeLink = themeLinks[i];
    themeLink.addEventListener('click', showBlock);
  }

  function showBlock(e) {

    const themeLinkActive = e.currentTarget;
    e.preventDefault();
    if (themeLinkActive.dataset.name && document.querySelector(themeLinkActive.dataset.name)) {
      const linkItem = document.querySelector(themeLinkActive.dataset.name);
      const blockActive = document.querySelector('.spelling__test._active');

      //подчеркнутая ссылка бокового меню
      const linkDecoration = document.querySelector('.spelling__link._text-decoration');

      if (blockActive) {
        blockActive.classList.remove('_active');
        linkItem.classList.add('_active');
        linkDecoration.classList.remove('_text-decoration');
        themeLinkActive.classList.add('_text-decoration');
      }
    }
  }
}

//появление бокового меню при нажатии на мобильных устройствах
const menuButton = document.querySelector('.spelling__nav');
const blockMenuThemes = document.querySelector('.spelling__nav-wrap');
menuButton.addEventListener('click', function (e) {
  menuButton.classList.toggle('_active');
  blockMenuThemes.classList.toggle('_active');
})