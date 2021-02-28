// const myQuestions = [
//   {
//     question: 'What is 10/2?',
//     answers: {
//       a: '9',
//       b: '8',
//       c: '5'
//     },
//     answer1: 'a',
//     answer2: 'b',
//     answer3: 'c'
//   },
//   {
//     question: 'What is 30/3?',
//     answers: {
//       a: '3',
//       b: '5',
//       c: '10'
//     },
//     answer1: 'a',
//     answer2: 'b',
//     answer3: 'c'
//   }
// ];

// let score=0;
// let position = 0;
// let cht=0;
// let question = [myQuestions[position].question];
// // let answerss=[myQuestions[cht].answers];
// // let choices = myQuestions[cht].answers.a;
// // let choices1 = myQuestions[cht].answers.b;
// // let choices3 = myQuestions[cht].answers.c;

// // checkanswer();
// const qForm = document.getElementById('qForm');




// // ---------------------------
// // function renderQuestion() {
// //   if (quizsection.style.display === 'none') {
// //     quizsection.style.display = 'block';
// //   } else {
// //     quizsection.style.display = 'none';
// //   }
// //   for (let i = 0; i < question.length; i++) {
// //     const form= document.createElement('form');
// //     quizsection.appendChild(form);
// //     const x =document.createElement('input');
// //     const b=document.createElement('input');
// //     const c=document.createElement('input');
// //     const theQ = document.createElement('h3');
// //     form.appendChild(theQ);
// //     theQ.textContent = myQuestions[position].question;
// //     form.appendChild(x);
// //     x.type='radio';
// //     x.value='aaa';
// //     x.name='one';
// //     const y= document.createElement('label');
// //     form.appendChild(y);
// //     y.for='aaa';
// //     y.textContent=myQuestions[cht].answers.a;
// //     form.appendChild(b);
// //     b.type='radio';
// //     b.value='bbb';
// //     b.name='one';
// //     const z= document.createElement('label');
// //     form.appendChild(z);
// //     z.for='bbb';
// //     z.textContent=myQuestions[cht].answers.b;
// //     form.appendChild(c);
// //     c.type='radio';
// //     c.value='ccc';
// //     c.name='one';
// //     const cc=document.createElement('label');
// //     form.appendChild(cc);
// //     cc.for='ccc';
// //     cc.textContent=myQuestions[cht].answers.c;

// //   }
// //   position++;
// //   cht++;
// // }

// console.log(score);

// // const aa=document.getElementById('aa').checked;

// // ----------------------------------------------
// // function checkanswer(){
// //   // const ab=document.getElementById('ab').checked;
// //   // const ac=document.getElementById('ac').checked;
// //   for(let i=0;i<answerss.length;i++){
// //     if(aa.checked===true){
// //       score+=5;
// //     }
// //   }
// // }
// // checkanswer();
// // console.log(score);

// // -----------------------------------------
// const clic = document.getElementById('showbutton');
// clic.onclick = function () {
//   renderQuestion();
// };





'use strict';
const qForm = document.getElementById('qForm');


function swich(){
  /* switch between the text and the game */
  document.getElementById('qSec').hidden = true;
  frstQ.renderQ();
  scndQ.renderQ();
  thrdQ.renderQ();
  frthQ.renderQ();
}
let total = 0;
function Test (question, answer1, answer2, answer3, answer4){
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
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

    const nxtQuestionBtn = document.createElement('button');
    questionSection.appendChild(nxtQuestionBtn);
    nxtQuestionBtn.setAttribute('class','nextBtn');
    nxtQuestionBtn.textContent = 'sdhksjd';
    nxtQuestionBtn.onClick('Test.calcTotal()');
  };
  
  // Test.resault = function(){
    
  // };

}



const frstQ = new Test('kjhzsdfjhhasd  iusd', 'nfn.,nccv', 'xcx', 'xcvx', 'dfdfgh');

const scndQ = new Test('kjhzsdfjhhasd ', 'nfn.,nccv', 'xcx', 'xcvx', 'dfdfgh');

const thrdQ = new Test(' ijisdivjb iusd', 'nfn.,nccv', 'xcx', 'xcvx', 'dfdfgh');

const frthQ = new Test('kjhzsdfjhhasd ijisdivjb ', 'nfn.,nccv', 'xcx', 'xcvx', 'dfdfgh');





