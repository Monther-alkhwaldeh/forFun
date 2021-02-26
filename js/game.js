'use strict';

// function randomNumber (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const namesArr=['m1','m2','m3','m4','m5'];
let imgPath=[];
// console.log(imgPath);
for (let i = 0; i < namesArr.length; i++) {
  imgPath.push(`../imgs/gameImg/${namesArr[i]}.jpg`);
}
console.log(imgPath);

const gameSec = document.getElementById('game-sec');

for (let i = 0; i < namesArr.length; i++) {
  const gameRow = document.createElement('tr');
  gameSec.appendChild(gameRow);
  const rowContent=document.createElement('img');
  gameRow.appendChild(rowContent);
  rowContent.src=imgPath[i];
  gameRow.textContent=rowContent;
  console.log(rowContent);
}

