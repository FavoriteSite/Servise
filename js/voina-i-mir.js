const words = document.querySelectorAll('.book__word-button');
const tooltip = document.querySelector('.tooltip');

if (words) {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    word.addEventListener('click', showTooltip);
  }
}

function showTooltip(e) {
  let wordActive = e.target; //слово на которое нажали
  tooltip.style.left = `${e.clientX - 25}px`; //положение тултипа
  tooltip.style.top = `${e.clientY + 15}px`; //положение тултипа
  tooltip.classList.toggle('_show'); //показать тултип при нажатии на слово
  }
