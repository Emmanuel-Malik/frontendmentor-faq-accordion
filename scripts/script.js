/* FIRST SECTION */

const plusElementOne = document.querySelector('.js-plus-icon-one');
const minusElementOne = document.querySelector('.js-minus-icon-one');
const answerElementOne = document.querySelector('.js-first-answer');

let isDisplayedOne = false;

function plusClickedOne() {
  plusElementOne.classList.add('remove-plus-one');
  minusElementOne.classList.add('display-minus-one');
  answerElementOne.classList.add('display-answer-one');
  isDisplayedOne = true;
}

function minusClickedOne() {
  plusElementOne.classList.remove('remove-plus-one');
  minusElementOne.classList.remove('display-minus-one');
  answerElementOne.classList.remove('display-answer-one');
  isDisplayedOne = false;
}

function questionClickedOne() {
  if (!isDisplayedOne) {
    plusClickedOne();
    isDisplayedOne = true;
  } else if (isDisplayedOne) {
    minusClickedOne();
    isDisplayedOne = false;
  }
}


/* SECOND SECTION */

const plusElementTwo = document.querySelector('.js-plus-icon-two');
const minusElementTwo = document.querySelector('.js-minus-icon-two');
const answerElementTwo = document.querySelector('.js-second-answer');

let isDisplayedTwo = false;

function plusClickedTwo() {
  plusElementTwo.classList.add('remove-plus-two');
  minusElementTwo.classList.add('display-minus-two');
  answerElementTwo.classList.add('display-answer-two');
  isDisplayedTwo = true;
}

function minusClickedTwo() {
  plusElementTwo.classList.remove('remove-plus-two');
  minusElementTwo.classList.remove('display-minus-two');
  answerElementTwo.classList.remove('display-answer-two');
  isDisplayedTwo = false;
}

function questionClickedTwo() {
  if (!isDisplayedTwo) {
    plusClickedTwo();
    isDisplayedTwo = true;
  } else if (isDisplayedTwo) {
    minusClickedTwo();
    isDisplayedTwo = false;
  }
}


/* THIRD SECTION */

const plusElementThree = document.querySelector('.js-plus-icon-three');
const minusElementThree = document.querySelector('.js-minus-icon-three');
const answerElementThree = document.querySelector('.js-third-answer');

let isDisplayedThree = false;

function plusClickedThree() {
  plusElementThree.classList.add('remove-plus-three');
  minusElementThree.classList.add('display-minus-three');
  answerElementThree.classList.add('display-answer-three');
  isDisplayedThree = true;
}

function minusClickedThree() {
  plusElementThree.classList.remove('remove-plus-three');
  minusElementThree.classList.remove('display-minus-three');
  answerElementThree.classList.remove('display-answer-three');
  isDisplayedThree = false;
}

function questionClickedThree() {
  if (!isDisplayedThree) {
    plusClickedThree();
    isDisplayedThree = true;
  } else if (isDisplayedThree) {
    minusClickedThree();
    isDisplayedThree = false;
  }
}


/* FOURTH SECTION */

const plusElementFour = document.querySelector('.js-plus-icon-four');
const minusElementFour = document.querySelector('.js-minus-icon-four');
const answerElementFour = document.querySelector('.js-fourth-answer');

let isDisplayedFour = false;

function plusClickedFour() {
  plusElementFour.classList.add('remove-plus-four');
  minusElementFour.classList.add('display-minus-four');
  answerElementFour.classList.add('display-answer-four');
  isDisplayedFour = true;
}

function minusClickedFour() {
  plusElementFour.classList.remove('remove-plus-four');
  minusElementFour.classList.remove('display-minus-four');
  answerElementFour.classList.remove('display-answer-four');
  isDisplayedFour = false;
}

function questionClickedFour() {
  if (!isDisplayedFour) {
    plusClickedFour();
    isDisplayedFour = true;
  } else if (isDisplayedFour) {
    minusClickedFour();
    isDisplayedFour = false;
  }
}