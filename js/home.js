'use strict';

let qwsshn= ['Difficulty focusing on everyday tasks'
  , 'Finding no joy in life, or feeling like you never will again'
  , 'Being lethargic or having no energy'
  , 'Eating too much, or too little'
  , 'Being full of nervous energy, or moving much less than usual'
  , 'Oversleeping, or struggling to get to sleep'
  , 'Being harsh on yourself or overly self-critical'
  , 'Feeling low or "under a cloud"'
  , 'Considering harming yourself, or committing suicide'
  , 'If you have had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?'];

const qForm = document.getElementById('showquiz');
const quesBox = document.getElementsByClassName('quesBox');
for (let i = 0; i < quesBox.length; i++) {
  quesBox[i].style.display = 'none';
}
let score = 0;
function swich(){
  document.getElementById('qSec').style.display = 'none';
  qForm.hidden = false;
  ttt.quesFlag = true;
  ttt.renderQ();
}
function Test (question){
  this.question = question;
  this.quesFlag = false;
  Test.prototype.renderQ = function() {
    if (this.quesFlag){
      for(let i = 0; i < question.length; i++){
        const questionSection = document.getElementById(`qHead-${i}`);
        const qstion = document.createElement('h3');
        questionSection.appendChild(qstion);
        qstion.setAttribute('id','qH');
        qstion.textContent = this.question[i];
      }
    }
  };

  Test.results = function(){
    qForm.hidden= true;
    const par = document.getElementById('res-par');
    const ancur = document.createElement('a');
    par.appendChild(ancur);
    ancur.setAttribute('class', 'recomadedLink');
    par.className = 'bigger';
    if (this.score >=0 && this.score <=7) {
      par.textContent = 'Your results indicate that you have none, or very few symptoms of depression.';
      ancur.href = './entertainment.html';
    } else if (this.score >=8 && this.score <=14) {
      ancur.href = './travel.html';
      par.textContent = 'Your results indicate that you may be experiencing symptoms of mild depression. While your symptoms are not likely having a major impact on your life, it is important to monitor them.';
    } else if (this.score >=15 && this.score <=21) {
      ancur.href = './game.html';
      par.textContent = 'Your results indicate that you may be experiencing symptoms of mild depression. While your symptoms are not likely having a major impact on your life, it is important to monitor them.';
    } else if (this.score >=22 && this.score <=27) {
      ancur.href = './cooking.html';
      par.textContent = 'Your results indicate that you may be experiencing symptoms of moderately severe depression. Based on your answers, living with these symptoms is causing difficulty managing relationships and even the tasks of everyday life.';
    }
  };
}

const ttt = new Test (qwsshn);

function frst(e){
  e.preventDefault();
  score +=0;
  let hhh = document.getElementsByClassName('allBtns');
  hhh[0].disabled = true;
  return score;
}
function scnd(e){
  e.preventDefault();
  score +=1;
  let hhh = document.getElementsByClassName('allBtns');
  hhh[1].disabled = true;
  return score;
}
function thrd(e){
  e.preventDefault();
  score +=2;
  let hhh = document.getElementsByClassName('allBtns');
  hhh[2].disabled = true;
  return score;
}
function forth(e){
  e.preventDefault();
  score +=3;
  let hhh = document.getElementsByClassName('allBtns');
  hhh[3].disabled = true;
  return score;
}

localStorage.setItem('score', JSON.stringify(score));
document.getElementById('qSec').style.display = 'block';
// document.getElementById('questionBox').style.display = 'none';

