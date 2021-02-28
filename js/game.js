'use strict';

const imgs = [
  'GImg1',
  'GImg2',
  'GImg3',
  'GImg4',
  'GImg5',
  'GImg6' ];

const imgPath = './imgs/gameImg/';
const imgExt = '.png';
let cardID;
let cardGuess = [];
let cardMatched = [];

function swich(){
  document.getElementById('about').hidden = true;
  document.getElementById('playBtn').hidden = true;
  document.getElementById('match-game').hidden = false;
  play();
}
let allImgs = [];
let shufflImgs = [];
let finlShuffl = [];
function play() {
  cardGuess = [];
  cardMatched = [];
  const matchGame = document.getElementById('match-game');
  matchGame.style.display = 'none';
  matchGame.innerHTML='';
  allImgs = [];
  shufflImgs = [];
  for (let i = 0; i < 9; i++) {
    randomizeImgs();
  }
  shufflImgs = shuffleArray(allImgs);
  for (let i = 0; i < 18; i++) {
    const MainGameSec = document.createElement('section');
    MainGameSec.setAttribute('class', 'card-container');
    MainGameSec.setAttribute('id', `card-${i}`);
    matchGame.appendChild(MainGameSec);
    const fronCard = document.createElement('section');
    fronCard.setAttribute('class', 'card card_front');
    MainGameSec.appendChild(fronCard);
    const backCrd = document.createElement('section');
    backCrd.setAttribute('class', 'card card_back');
    MainGameSec.appendChild(backCrd);
    const imgCrd = document.createElement('img');
    imgCrd.setAttribute('src', `${imgPath}${shufflImgs[i]}${imgExt}`);
    imgCrd.title = shufflImgs[i];
    backCrd.appendChild(imgCrd);
  }
  addFlip();
}
function randomizeImgs() {
  let randomNum = Math.floor(Math.random() * imgs.length);
  let randomImage = imgs[randomNum];
  for (let i = 0; i < 2; i++) {
    allImgs.push(randomImage);
  }
  return allImgs;
}
function addFlip() {
  let card = document.getElementsByClassName('card-container');
  for (let i = 0; i < card.length; i++) {
    card[i].onClick = flip();
  }
  function flip () {
    this.addClass('is-flipped');
    cardID = this.attr('id');
    /* check to see if card can be clicked on */
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
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    finlShuffl.push([ array[i], array[j] ] = [ array[j], array[i] ]);
  }
  return finlShuffl;
}
// function alertMatch(alertMsg) {
//   let message = alertMsg;
//   const matchAlerts= ('#match-alerts').html(message).show();
//   setTimeout(function() {
//     $('#match-alerts').hide();
//   }, 1000);
// }
//  Durstenfeld shuffle, a function to shuffle arrays