'use strict';

let cards = Array.from(document.getElementsByClassName('card'));
let overlays = Array.from(document.getElementsByClassName('overlay-text'));

class Match {
  constructor( totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById('time-remaining');
    this.matchedCards = [];
  }
  startGame() {
    this.timeRemaining = this.totalTime;
    this.cardToCheck = null;
    this.busy = true;
    setTimeout(() => {
      this.countdown = this.startCountdown();
      this.busy = false;
    }, 500);
    this.closeCard();
    this.timer.innerText = this.timeRemaining;
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
  getCardType(cards) {
    return cards.getElementsByClassName('card-value')[0].src;
  }
  canFlipCard() {
    return true;
  }
}

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
