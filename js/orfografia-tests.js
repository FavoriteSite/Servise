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
    console.log(themeLinkActive);
    e.preventDefault();
    if (themeLinkActive.dataset.name && document.querySelector(themeLinkActive.dataset.name)) {
      const blockItem = document.querySelector(themeLinkActive.dataset.name);
      const blockActive = document.querySelector('.spelling__test._active');

      if (blockActive) {
        blockActive.classList.remove('_active');
        blockItem.classList.add('_active');
      }
    }
  }
}

//появление бокового меню при нажатии
const menuButton = document.querySelector('.spelling__nav');
menuButton.addEventListener('click', function(e){
  menuButton.classList.toggle('_active');
})