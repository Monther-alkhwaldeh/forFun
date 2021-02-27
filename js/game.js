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
const gameTable = document.getElementById('game-table');
const tries = 3;
const colms = 4;
const rows = (imgs.length/2);
const resBtn = document.getElementById('resBtn');
const retryBtn = document.getElementById('retryBtn');
//const saveBtn = document.getElementById('saveBtn');
const matches = imgs.length;
function randmIndex (arry) {
  for (let i = arry.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ arry[i], arry[j] ] = [ arry[j], arry[i] ];
  }
  return arry;
}

function swich(){
  /* switch between the text and the game */
  document.getElementById('about').hidden = true;
  document.getElementById('playBtn').hidden = true;
  document.getElementById('match-game').hidden = false;
}

function fillTable() {

}

function Game (userName) {
  this.userName = userName;
  Game.prototype.rndrBody = function() {
    const tblBody = document.getElementById('tbl-body');
    for (let i = 0; i < rows; i++){
      const tBodyRow = document.createElement('tr');
      tblBody.appendChild(tBodyRow);
      for (let c = 0; c <= colms ; c++){
        const rand = Math.floor(randmIndex(0, imgs.length-1));
        const tBdyData = document.createElement('td');
        tBodyRow.appendChild(tBdyData);
        const img = document.createElement('img');
        tBdyData.appendChild(img);
        img.src = `${imgPath}${imgs[rand]}${imgExt}`;
      }
    }
  };

}
const un = new Game ('azooz');
un.rndrBody();

// while (tries <= 5){

// }





















