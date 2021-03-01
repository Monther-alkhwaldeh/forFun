// // 'use strict';
const qForm = document.getElementById('qForm');


function swich(){
  /* switch between the text and the game */
  document.getElementById('qSec').hidden = true;
  frstQ.renderQ();
  scndQ.renderQ();
  thrdQ.renderQ();
  frthQ.renderQ();
}
function Test (question, answer1, answer2, answer3, answer4){
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
  this.score=0;
  this.frstMrk = 1;
  this.scndMrk = 2;
  this.thrdMrk = 3;
  this.frthMrk = 4;

  const qForm = document.getElementById('qForm');

  Test.prototype.renderQ = function() {
    // body...

    const questionSection = document.createElement('section');
    qForm.appendChild(questionSection);
    questionSection.setAttribute('class','quesBox');
    questionSection.setAttribute('id','questionBox');

    const qstion = document.createElement('h3');
    questionSection.appendChild(qstion);
    qstion.setAttribute('id','qHead');
    qstion.textContent = this.question;

    const frstRadio =document.createElement('input');
    questionSection.appendChild(frstRadio);
    frstRadio.setAttribute('id','rad');
    frstRadio.setAttribute('type','radio');
    frstRadio.setAttribute('name',this.question);
    frstRadio.setAttribute('value','frstRadio');
    const frstlabl= document.createElement('label');
    questionSection.appendChild(frstlabl);
    frstlabl.for='frstRadio';
    frstlabl.setAttribute('id','radLabl');
    frstlabl.textContent= this.answer1;

    const secRadio =document.createElement('input');
    questionSection.appendChild(secRadio);
    secRadio.setAttribute('id','rad');
    secRadio.setAttribute('type','radio');
    secRadio.setAttribute('name',this.question);
    secRadio.setAttribute('value','secRadio');
    const seclabl= document.createElement('label');
    questionSection.appendChild(seclabl);
    seclabl.for='secRadio';
    seclabl.setAttribute('id','radLabl');
    seclabl.textContent= this.answer2;

    const thirdRadio =document.createElement('input');
    questionSection.appendChild(thirdRadio);
    thirdRadio.setAttribute('id','rad');
    thirdRadio.setAttribute('type','radio');
    thirdRadio.setAttribute('name',this.question);
    thirdRadio.setAttribute('value','thirdRadio');
    const thirdlabl= document.createElement('label');
    questionSection.appendChild(thirdlabl);
    thirdlabl.for='thirdRadio';
    thirdlabl.setAttribute('id','radLabl');
    thirdlabl.textContent= this.answer3;

    const forthRadio =document.createElement('input');
    questionSection.appendChild(forthRadio);
    forthRadio.setAttribute('id','rad');
    forthRadio.setAttribute('type','radio');
    forthRadio.setAttribute('name',this.question);
    forthRadio.setAttribute('value','forthRadio');
    const forthlabl= document.createElement('label');
    questionSection.appendChild(forthlabl);
    forthlabl.for='forthRadio';
    forthlabl.setAttribute('id','radLabl');
    forthlabl.textContent= this.answer4;
    
    if(frstRadio.checked){
      this.score+=5;
    }else if (secRadio.checked){
      this.score+=3;
    }else if (thirdRadio.checked){
      this.score+=2;
    } else if(forthRadio.checked){
      this.score+=1;
    }else {
      this.score=0;
    }

    // const nxtQuestionBtn = document.createElement('button');
    // questionSection.appendChild(nxtQuestionBtn);
    // nxtQuestionBtn.setAttribute('class','nextBtn');
    // nxtQuestionBtn.textContent = 'sdhksjd';
    // nxtQuestionBtn.onClick('Test.calcTotal()');
  };
  console.log(this.score);
}



const frstQ = new Test('kjhzsdfjhhasd  iusd', 'nfn.,nccv', 'xcx', 'xcvx', 'dfdfgh');

const scndQ = new Test('kjhzsdfjhhasd ', 'nfn.,nccv', 'xcx', 'xcvx', 'dfdfgh');

const thrdQ = new Test(' ijisdivjb iusd', 'nfn.,nccv', 'xcx', 'xcvx', 'dfdfgh');

const frthQ = new Test('kjhzsdfjhhasd ijisdivjb ', 'nfn.,nccv', 'xcx', 'xcvx', 'dfdfgh');
