'use strict';

<<<<<<< HEAD
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
=======
class Match {
  constructor( totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById('time-remaining');
    this.matchedCards = [];
  }

  startGame() {
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.cardToCheck = null;
    this.busy = true;
    setTimeout(() => {
      this.countdown = this.startCountdown();
      this.busy = false;
    }, 500);
    this.closeCard();
    this.timer.innerText = this.timeRemaining;
    this.victoryTime = this.totalTime - this.timeRemaining;
  }
  startCountdown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if(this.timeRemaining === 0)
        this.gameOver();
    }, 1000);
  }
  gameOver() {
    clearInterval(this.countdown);
    document.getElementById('game-over-text').classList.add('visible');
  }
  victory() {
    clearInterval(this.countdown);
    document.getElementById('victory-text').classList.add('visible');
  }


  closeCard() {
    this.cardsArray.forEach(card => {
      card.classList.remove('visible');
      card.classList.remove('matched');
    });
>>>>>>> main
  }
  flipCard(cards) {
    if(this.canFlipCard(cards)) {
      cards.classList.add('visible');

      if(this.cardToCheck) {
        this.checkForCardMatch(cards, this.cardToCheck);
      } else {
        this.cardToCheck = cards;
      }
    }
  }
  checkForCardMatch(cards, cardToCheck) {
    if(this.getCardType(cards) === this.getCardType(cardToCheck))
      this.cardMatch(cards, cardToCheck);
    else
      this.cardMismatch(cards, cardToCheck);
    this.cardToCheck = null;
  }
  cardMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    card1.classList.add('matched');
    card2.classList.add('matched');
    if(this.matchedCards.length === this.cardsArray.length)
      this.victory();
  }
  cardMismatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove('visible');
      card2.classList.remove('visible');
      this.busy = false;
    }, 1000);
  }
<<<<<<< HEAD
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
=======

  getCardType(cards) {
    return cards.getElementsByClassName('card-value')[0].src;
  }
  canFlipCard() {
    return true;
  }
}

let cards = Array.from(document.getElementsByClassName('card'));

let overlays = Array.from(document.getElementsByClassName('overlay-text'));


function ready() {
  let game = new Match(90, cards);


  overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
      game.startGame();
    });
  });


  cards.forEach(card => {
    card.addEventListener('click', () => {
      game.flipCard(card);
    });
  });

  function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      cards[randIndex].style.order = i;
      cards[i].style.order = randIndex;
    }
  }
  shuffleCards();
}

ready();


>>>>>>> main
