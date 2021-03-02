'use strict';
const qForm = document.getElementById('qForm');

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

let total = 0;
function swich(){
  document.getElementById('qSec').hidden = true;
  CreatObjects(qwsshn, ansrsArr);

}
function Test (question, answer1, answer2, answer3, answer4){
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
  this.score=0;
  this.frstMrk = 0;
  this.scndMrk = 1;
  this.thrdMrk = 2;
  this.frthMrk = 3;
  const qForm = document.getElementById('qForm');
  Test.prototype.renderQ = function() {

    const questionSection = document.createElement('section');
    qForm.appendChild(questionSection);
    questionSection.setAttribute('class','quesBox');
    questionSection.setAttribute('id','questionBox');

    const qstion = document.createElement('h3');
    questionSection.appendChild(qstion);
    qstion.setAttribute('id','qHead');
    qstion.textContent = this.question;

    const ansrDiv1 = document.createElement('div');
    questionSection.appendChild(ansrDiv1);
    ansrDiv1.setAttribute('class','ansrBox');
    const frstRadio =document.createElement('input');
    ansrDiv1.appendChild(frstRadio);
    frstRadio.setAttribute('id','rad');
    frstRadio.setAttribute('type','radio');
    frstRadio.setAttribute('name',this.question);
    frstRadio.setAttribute('value','frstRadio');
    frstRadio.setAttribute('class','rad');
    const frstlabl= document.createElement('label');
    ansrDiv1.appendChild(frstlabl);
    frstlabl.for='frstRadio';
    frstlabl.setAttribute('id','radLabl');
    frstlabl.textContent= this.answer1;

    const ansrDiv2 = document.createElement('div');
    questionSection.appendChild(ansrDiv2);
    ansrDiv2.setAttribute('class','ansrBox');
    const secRadio =document.createElement('input');
    ansrDiv2.appendChild(secRadio);
    secRadio.setAttribute('id','rad');
    secRadio.setAttribute('type','radio');
    secRadio.setAttribute('name',this.question);
    secRadio.setAttribute('value','secRadio');
    secRadio.setAttribute('class','rad');
    const seclabl= document.createElement('label');
    ansrDiv2.appendChild(seclabl);
    seclabl.for='secRadio';
    seclabl.setAttribute('id','radLabl');
    seclabl.textContent= this.answer2;

    const ansrDiv3 = document.createElement('div');
    questionSection.appendChild(ansrDiv3);
    ansrDiv3.setAttribute('class','ansrBox');
    const thirdRadio =document.createElement('input');
    ansrDiv3.appendChild(thirdRadio);
    thirdRadio.setAttribute('id','rad');
    thirdRadio.setAttribute('type','radio');
    thirdRadio.setAttribute('name',this.question);
    thirdRadio.setAttribute('value','thirdRadio');
    thirdRadio.setAttribute('class','rad');
    const thirdlabl= document.createElement('label');
    ansrDiv3.appendChild(thirdlabl);
    thirdlabl.for='thirdRadio';
    thirdlabl.setAttribute('id','radLabl');
    thirdlabl.textContent= this.answer3;

    const ansrDiv4 = document.createElement('div');
    questionSection.appendChild(ansrDiv4);
    ansrDiv4.setAttribute('class','ansrBox');
    const forthRadio =document.createElement('input');
    ansrDiv4.appendChild(forthRadio);
    forthRadio.setAttribute('id','rad');
    forthRadio.setAttribute('type','radio');
    forthRadio.setAttribute('name',this.question);
    forthRadio.setAttribute('value','forthRadio');
    forthRadio.setAttribute('class','rad');
    const forthlabl= document.createElement('label');
    ansrDiv4.appendChild(forthlabl);
    forthlabl.for='forthRadio';
    forthlabl.setAttribute('id','radLabl');
    forthlabl.textContent= this.answer4;

    // const btnDiv = document.createElement('div');
    // questionSection.appendChild(btnDiv);
    // btnDiv.setAttribute('class','ansrBox');
    // const nxtQuestionBtn = document.createElement('button');
    // btnDiv.appendChild(nxtQuestionBtn);
    // nxtQuestionBtn.setAttribute('class','nextBtn');
    // nxtQuestionBtn.setAttribute('type','submit');
    // nxtQuestionBtn.textContent = 'Next';
    // nxtQuestionBtn.onClick = 'calcTotal()';
  };
}

function calcTotal(event){
  debugger; 
  event.preventDefault();
  switch ('Difficulty focusing on everyday tasks'){
  case document.getElementsByClassName('rad')[0].checked :
    total = total + 0;
    break;
  case document.getElementsByClassName('rad')[1].checked :
    total = total + 1;
    break;
  case document.getElementsByClassName('rad')[2].checked :
    total += 2;
    break;
  case document.getElementsByClassName('rad')[3].checked :
    total += 3;
    break;
  default :
    break;
  }
  return total;
}

function CreatObjects(qu, ans){
  let qustion;
  let one = '';
  let two = '';
  let three = '';
  let four = '';
  for (let j = 0; j < ans.length; j++) {
    one = ans[j]; two = ans[j+1]; three = ans[j+2]; four = ans[j+3];
    break;
  }
  for(let i = 0; i < qu.length; i++){
    qustion = new Test (qu[i], one, two, three, four);
    qustion.renderQ();
  }
}


/* resaults in numbers */
// 0 - 4 Very Low Risk
// 5 - 9 Low Risk
// 10 - 14 Moderate Risk
// 15 - 19 High Risk
// 20 - 27 Severe Risk

/** resaults in words */
/* Your results indicate that you may be experiencing
symptoms of moderate depression. Based on your answers,
living with these symptoms could be causing difficulty
managing relationships and even the tasks of everyday life.*/

