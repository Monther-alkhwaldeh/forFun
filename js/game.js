'use strict';

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const namesArr=['m1','m2','m3','m4','m5'];
let imgPath=[];
for (let i = 0; i < namesArr.length; i++) {
  imgPath.push(`../imgs/gameImg/${namesArr[i]}.jpg`);
}

const gameTable = document.getElementById('game-table');
let counter = 3;

for (let i = 0; i <= counter; i++) {
  const gameRow = document.createElement('tr');
  for (let i = 0; i <=4 ; i++) {
    const gameTd = document.createElement('td');
    gameTable.appendChild(gameRow);
    gameRow.appendChild(gameTd);
    const tdImg=document.createElement('img');
    gameTd.appendChild(tdImg);
    tdImg.src=imgPath[i];
  }

}

