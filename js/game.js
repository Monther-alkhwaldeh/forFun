'use strict';

class Match {
  constructor(cards) {
    this.cardsArray = cards;
    this.timer = document.getElementById('time-remaining');
    this.ticker = document.getElementById('flips');
    this.matchedCards = [];
  }

  startGame() {
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.cardToCheck = null;
    this.busy = true;
    this.shuffleCards(this.cardsArray);
    setTimeout(() => {
      this.audioController.startMusic();
      this.countdown = this.startCountdown();
      this.busy = false;
    }, 500);
    this.hideCards();
    this.timer.innerText = this.timeRemaining;
    this.ticker.innerText = this.totalClicks;
  }
  startCountdown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if(this.timeRemaining === 0)
        this.gameOver();
    }, 1000);
  }


  hideCards() {
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
  shuffleCards() {
    debugger;
    for (let i = this.cardsArray.length-1 ; i > 0 ; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let randomizre = this.cardsArray[i];
      this.cardsArray[i]= this.cardsArray[randomIndex];
      this.cardsArray[randomIndex] = randomizre;
    }
  }

  getCardType(cards) {
    return cards.getElementsByClassName('card-value')[0].src;
  }
  canFlipCard() {
    return true;
  }
}


let cards = Array.from(document.getElementsByClassName('card'));
function ready() {
  let game = new Match(100, cards);
  cards.forEach(card => {
    card.addEventListener('click', () => {
      game.flipCard(card);
    });
  });
}

ready();


