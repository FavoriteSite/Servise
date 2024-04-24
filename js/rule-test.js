const cards = document.querySelectorAll('.card[data-card]');

//  изменение количества карточек (задание 5 из 30)
let counter = 0;
const practiceBlock = document.querySelector('.practice');
for (const i of cards) {
  counter++;
  const numCard = i.querySelector('.card__num-one');
  const numCardTotal = i.querySelector('.card__num-total');
  if (numCard || numCardTotal) {
    numCard.innerHTML = counter;
    numCardTotal.innerHTML = cards.length;
  }
}
