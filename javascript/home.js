const myQuestions = [
  {
    question: 'What is 10/2?',
    answers: {
      a: '9',
      b: '8',
      c: '5'
    },
    answer1: 'a',
    answer2: 'b',
    answer3: 'c'
  },
  {
    question: 'What is 30/3?',
    answers: {
      a: '3',
      b: '5',
      c: '10'
    },
    answer1: 'a',
    answer2: 'b',
    answer3: 'c'
  }
];

let score=0;
let position = 0;
let cht=0;
let question = [myQuestions[position].question];
let answerss=[myQuestions[cht].answers];
// let choices = myQuestions[cht].answers.a;
// let choices1 = myQuestions[cht].answers.b;
// let choices3 = myQuestions[cht].answers.c;

// checkanswer();
const quizsection = document.getElementById('showquiz');



// ---------------------------
function renderQuestion() {
  if (quizsection.style.display === 'none') {
    quizsection.style.display = 'block';
  } else {
    quizsection.style.display = 'none';
  }
  for (let i = 0; i < question.length; i++) {
    const form= document.createElement('form');
    quizsection.appendChild(form);
    const x =document.createElement('input');
    const b=document.createElement('input');
    const c=document.createElement('input');
    const theQ = document.createElement('h3');
    form.appendChild(theQ);
    theQ.textContent = myQuestions[position].question;
    form.appendChild(x);
    x.type='radio';
    x.value='aaa';
    x.name='one';
    const y= document.createElement('label');
    form.appendChild(y);
    y.for='aaa';
    y.textContent=myQuestions[cht].answers.a;
    form.appendChild(b);
    b.type='radio';
    b.value='bbb';
    b.name='one';
    const z= document.createElement('label');
    form.appendChild(z);
    z.for='bbb';
    z.textContent=myQuestions[cht].answers.b;
    form.appendChild(c);
    c.type='radio';
    c.value='ccc';
    c.name='one';
    const cc=document.createElement('label');
    form.appendChild(cc);
    cc.for='ccc';
    cc.textContent=myQuestions[cht].answers.c;
    
    }
    position++;
    cht++;
  }
 
console.log(score);

// const aa=document.getElementById('aa').checked;

// ----------------------------------------------
// function checkanswer(){
//   // const ab=document.getElementById('ab').checked;
//   // const ac=document.getElementById('ac').checked;
//   for(let i=0;i<answerss.length;i++){
//     if(aa.checked===true){
//       score+=5;
//     }
//   }
// }
// checkanswer();
// console.log(score);

// -----------------------------------------
const clic = document.getElementById('showbutton');
clic.onclick = function () {
  renderQuestion();
};


