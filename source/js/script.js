//if-no-js
let burgerMenu = document.querySelector('.site-list');
burgerMenu.classList.add('site-list__join-js');

  //burger-menu
let burgerButton = document.querySelector('.burger-menu');
let transition = document.querySelector('.site-list__transition');

burgerButton.addEventListener('click', function () {

  burgerMenu.classList.toggle('site-list__transition');

  let lineOne = document.querySelector('.burger-menu__line--first-translate');
  lineOne.classList.toggle('burger-menu__line--first');

  let lineTwo = document.querySelector('.burger-menu__line--second-rotate');
  lineTwo.classList.toggle('burger-menu__line--second');

  let lineThree = document.querySelector('.burger-menu__line--third-rotate');
  lineThree.classList.toggle('burger-menu__line--third');

  let lineFour = document.querySelector('.burger-menu__line--fourth-translate');
  lineFour.classList.toggle('burger-menu__line--fourth');

  burgerMenu.classList.toggle('site-list--burger-menu');

});

  //cats
let were = document.querySelector('.range-filter__button-were');
let haveBeen = document.querySelector('.range-filter__button-have-been');
let fatCat = document.querySelector('.range-filter__fat-cat');
let thinCat = document.querySelector('.range-filter__thin-cat');
let twoCats = document.querySelector('.range-filter__two-cats');

were.addEventListener('click', function () {
  twoCats.classList.add('range-filter__disappear-cat');
  fatCat.classList.remove('range-filter__disappear-cat');
  thinCat.classList.remove('range-filter__appear-cat');
  fatCat.classList.add('range-filter__appear-cat');
  thinCat.classList.add('range-filter__disappear-cat');
});
haveBeen.addEventListener('click', function () {
  twoCats.classList.add('range-filter__disappear-cat');
  fatCat.classList.remove('range-filter__appear-cat');
  thinCat.classList.remove('range-filter__disappear-cat');
  fatCat.classList.add('range-filter__disappear-cat');
  thinCat.classList.add('range-filter__appear-cat');
  console.log();
});
