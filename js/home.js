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

let ansrsArr = ['Never'
  , 'Some of the time'
  , 'Most of times '
  , 'Nearly all the time'];

let score = 0;
function swich(){
  document.getElementById('qSec').style.display = 'none';
  ttt.quesFlag = true;
  ttt.renderQ();
}

function Test (question, answers){
  this.question = question;
  this.answers = answers;
  let score = 0;
  const qForm = document.getElementById('qForm');
  this.quesFlag = false;
  Test.prototype.renderQ = function() {
    if (this.quesFlag){
      const questionSection = document.createElement('section');
      qForm.appendChild(questionSection);
      questionSection.setAttribute('class','quesBox');
      questionSection.setAttribute('id','questionBox');
      for(let i = 0; i < question.length; i++){
        const qstion = document.createElement('h3');
        questionSection.appendChild(qstion);
        qstion.setAttribute('id','qHead');
        qstion.textContent = this.question[i];
        const ansrSec = document.createElement('section');
        questionSection.appendChild(ansrSec);
        ansrSec.setAttribute('class','ansrsBox');
        ansrSec.setAttribute('id','ansrSec');
        for (let j = 0; j < answers.length; j++) {
          const ansrDiv1 = document.createElement('div');
          ansrSec.appendChild(ansrDiv1);
          ansrDiv1.setAttribute('class','ansrBox');
          const allBtns = document.createElement('button');
          ansrDiv1.appendChild(allBtns);
          allBtns.setAttribute('id', `ans-${j}`);
          allBtns.setAttribute('type','button');
          allBtns.setAttribute('class','allBtns');
          allBtns.textContent= this.answers[j];
          allBtns.click('Test.calcTotal(event)');
        }
      }
    }
  };
  Test.calcTotal = function(event){
    event.preventDefault();
    score = 0;
    for (let i = 0; i < question.length; i++) {
      for (let j = 0; j < answers.length; j++) {
        debugger;
        if (document.getElementById(answers[j]).checked) {
          score += 2;
        } if (document.getElementById(answers[j]).che) {
          score += 1;
        } if (document.getElementById(answers[j]).focus) {
          score += 2;
        } if (document.getElementById(answers[j]).focus) {
          score += 3;
        }
      }
    }
    this.results();
    console.log(score);
    localStorage.setItem('score', JSON.stringify(score));
    document.getElementById('qSec').style.display = 'block';
  };
  Test.results = function(){
    qForm.style.display = 'none';
    const par = document.getElementById('res-par');
    par.className = 'bigger';
    if (this.score >=0 && this.score <=4) {
      par.textContent = 'Your results indicate that you have none, or very few symptoms of depression.';
    } else if (this.score >=5 && this.score <=9) {
      par.textContent = 'Your results indicate that you may be experiencing symptoms of mild depression. While your symptoms are not likely having a major impact on your life, it is important to monitor them.';
    } else if (this.score >=10 && this.score <=14) {
      par.textContent = 'Your results indicate that you may be experiencing symptoms of mild depression. While your symptoms are not likely having a major impact on your life, it is important to monitor them.';
    } else if (this.score >=15 && this.score <=19) {
      par.textContent = 'Your results indicate that you may be experiencing symptoms of moderately severe depression. Based on your answers, living with these symptoms is causing difficulty managing relationships and even the tasks of everyday life.';
    } else if (this.score >=20 && this.score <=27) {
      par.textContent = 'Your results indicate that you may be experiencing symptoms of severe depression. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life.';
    }
  };
}
const ttt = new Test (qwsshn, ansrsArr, score);
