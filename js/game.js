'use strict';

const imgs = [
  'GImg1',
  'GImg2',
  'GImg3',
  'GImg4',
  'GImg5',
  'GImg6' ];
let allImgs = [];
let shufImgs = [];
const imgPath = './imgs/gameImg/';
const imgExt = '.png';
const gameTable = document.getElementById('game-table');
const tries = 3;
const colms = 4;
const rows = (imgs.length/2);
const resBtn = document.getElementById('resBtn');
const retryBtn = document.getElementById('retryBtn');
//const saveBtn = document.getElementById('saveBtn');
const matches = imgs.length;
function swich(){
  /* switch between the text and the game */
  document.getElementById('about').hidden = true;
  document.getElementById('playBtn').hidden = true;
  document.getElementById('match-game').hidden = false;
  play();
}

let allImgs = [];
let shufflImgs = [];
let matchImgs = [];
function play() {
  matchImgs = [];
  cardGuess = [];
  cardMatched = [];
  // const matchAlerts = document.getElementById('match-alerts').hide();
  const matchGame = document.getElementById('match-game');
  matchGame.innerHTML='';
  allImgs = [];
  shufflImgs = [];
  for (let i = 0; i < 9; i++) {
    randomizeimgs();
  }
  shufflImgs = shuffleArray(allImgs);
  for (let i = 0; i < 18; i++) {
    let crdSec =
            '<section class=\'card-container\' id=\'card-' +
            i +
            '\'><section class=\'card card_front\'></section><section class=\'card card_back\'><img draggable=\'false\' src=\'' +
            imgPath+shufflImgs[i] + imgExt+
            '\' ></section></section>';
    matchGame.append(crdSec);
  }
  addFlip();
}
function randomizeimgs() {
  // get a random image from the list of imgs
  let randomNum = Math.floor(Math.random() * imgs.length);
  console.log(randomNum);
  let randomImage = imgs[randomNum];
  for (let i = 0; i < 2; i++) {
    allImgs.push(randomImage);
  }
  console.log('all imgs', allImgs);
  return allImgs;
}
// flips the card that is clicked
let cardID;
let cardGuess = [];
let cardMatched = [];
function addFlip() {
  let card =document.getElementsByClassName('card-container');
  // What happens when a card is clicked
  for (let i = 0; i < card.length; i++) {
    card[i].onClick=flip();

  }
  function flip () {
    this.addClass('is-flipped');
    cardID = this.attr('id');
    // check to see if card can be clicked on
    if (cardID === cardGuess[0]) return;
    if (this.hasClass('matched')) return;
    cardGuess.push(cardID);
    console.log('GUESS', cardGuess);
    if (cardGuess.length === 2) {
      let card1 = document.getElementById(cardGuess[0]);
      let card2 = document.getElementById(cardGuess[1]);
      cardGuess = [];
      setTimeout(() => checkAnswers(card1, card2), 1000);
    }
  }
}
function checkAnswers(card1, card2) {
  console.log('matching');
  if (card1.innerHTML === card2.innerHTML) {
    console.log('YES');
    cardMatched.push(card1, card2);
    card1.classList.add('matched');
    card2.classList.add('matched');
    alert('Match!');
  } else {
    console.log('NO');
    card1.classList.remove('is-flipped');
    card2.classList.remove('is-flipped');
  }
  if (cardMatched.length === shufflImgs.length) {
    setTimeout(() => alert('Winner winner, turkey dinner!'), 500);
  }
}
// function alertMatch(alertMsg) {
//   let message = alertMsg;
//   const matchAlerts= ('#match-alerts').html(message).show();
//   setTimeout(function() {
//     $('#match-alerts').hide();
//   }, 1000);
// }
//  Durstenfeld shuffle, a function to shuffle arrays
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ array[i], array[j] ] = [ array[j], array[i] ];
  }
  return array;
}













