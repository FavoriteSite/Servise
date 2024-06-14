
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

setProgress(50);



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

