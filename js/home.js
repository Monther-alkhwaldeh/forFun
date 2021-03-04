'use strict';

let qwsshn = ['Difficulty focusing on everyday tasks', 'Finding no joy in life, or feeling like you never will again', 'Being lethargic or having no energy', 'Eating too much, or too little', 'Being full of nervous energy, or moving much less than usual', 'Oversleeping, or struggling to get to sleep', 'Being harsh on yourself or overly self-critical', 'Feeling low or "under a cloud"', 'Considering harming yourself, or committing suicide', 'If you have had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?'];

var navBar = document.getElementById('navBar');
var sticky = navBar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
}
let score = 0;
const qForm = document.getElementById('showquiz');
const quesBox = document.getElementsByClassName('quesBox');


for (let i = 0; i < quesBox.length; i++) {
    quesBox[i].style.display = 'none';
    quesBox[i].id = `b-${quesBox[i]}`;
}

function Test(question) {
    this.question = question;
    this.quesFlag = false;
    Test.prototype.renderQ = function() {
        if (this.quesFlag) {
            for (let i = 0; i < question.length; i++) {
                const questionSection = document.getElementById(`qHead-${i}`);
                const qstion = document.createElement('h3');
                questionSection.appendChild(qstion);
                qstion.setAttribute('id', 'qH');
                qstion.textContent = this.question[i];
            }
        }
    };
    Test.results = function() {
        const par = document.getElementById('res-par');
        const reco = document.getElementById('recommandiation');
        const scorSpan = document.getElementById('scorSpan');
        const ancur = document.createElement('a');
        reco.appendChild(ancur);
        ancur.setAttribute('class', 'recomadedLink');
        par.className = 'bigger';
        if (score >= 0 && score <= 7) {
            par.textContent = `Your results indicate that you have none, or very few symptoms of depression. we recomand to visit: your score is:  ${score}/27`;
            ancur.href = './entertainment.html';
            ancur.textContent = 'entertainment';
        } else if (score >= 8 && score <= 14) {
            ancur.href = './travel.html';
            ancur.textContent = 'travel';
            par.textContent = `Your results indicate that you may be experiencing symptoms of mild depression. While your symptoms are not likely having a major impact on your life, it is important to monitor them. your score is:  ${score}/27`;
        } else if (score >= 15 && score <= 21) {
            ancur.href = './game.html';
            ancur.textContent = 'games';
            par.textContent = `Your results indicate that you may be experiencing symptoms of mild depression. While your symptoms are not likely having a major impact on your life, it is important to monitor them.your score is:  ${score}/27`;
        } else if (score >= 22 && score <= 27) {
            ancur.href = './cooking.html';
            ancur.textContent = 'cooking';
            par.textContent = `Your results indicate that you may be experiencing symptoms of moderately severe depression. Based on your answers, living with these symptoms is causing difficulty managing relationships and even the tasks of everyday life.your score is:  ${score}/27`;
        }
    };
}

const ttt = new Test(qwsshn);

function swich() {
    document.getElementById('qSec').style.display = 'none';
    document.getElementById('showbutton').hidden = true;
    for (let i = 0; i < quesBox.length; i++) {
        quesBox[i].style.display = 'block';
    }
    qForm.hidden = false;
    ttt.quesFlag = true;
    ttt.renderQ();
}

function frst(e) {
    e.preventDefault();
    score += 0;
    localStorage.setItem('score', JSON.stringify(score));
    return score;
}

function scnd(e) {
    e.preventDefault();
    score += 1;
    localStorage.setItem('score', JSON.stringify(score));
    return score;
}

function thrd(e) {
    e.preventDefault();
    score += 2;
    localStorage.setItem('score', JSON.stringify(score));
    return score;
}

function forth(e) {
    e.preventDefault();
    score += 3;
    localStorage.setItem('score', JSON.stringify(score));
    return score;
}

localStorage.setItem('score', JSON.stringify(score));
document.getElementById('qSec').style.display = 'block';
const resBtn = document.getElementById('res-btn');
resBtn.textContent = 'Result';

function getResult(e) {
    e.preventDefault();
    document.getElementById('qSec').style.display = 'block';
    for (let i = 0; i < quesBox.length; i++) {
        quesBox[i].style.display = 'none';
        quesBox[i].id = `b-${quesBox[i]}`;
    }
    Test.results();
    localStorage.getItem('score');
}