'use strict';

const container = document.getElementById('videos');
const audioContainer = document.getElementById('audioClip');

const videoName = ['b3', 'bb2', 'fff'];
const ext = ['mp4', 'mp4', 'mp4'];
const audioName = ['Baby-Lauf', 'Dogs-Happy-Birthday', 'Man-Lauf'];
const aExt = ['mp3', 'mp3', 'mp3'];



// ----------Video----constructor function---------------------
function Videos(videoName, ext) {
  this.videoName = videoName;
  this.path = `./videos/${videoName}.${ext}`;

  Videos.all.push(this);
}

Videos.all = [];
for (let i = 0; i < videoName.length; i++) {
  new Videos(videoName[i], ext[i]);
}
// -------------------------------------------

// ------------------display Videos----------------------
function rendervideos() {
  const h3 = document.createElement('h3');
  h3.id = 'h3';
  container.appendChild(h3);
  h3.textContent = 'Please watch These videos';
  for (let i = 0; i < Videos.all.length; i++) {
    const fVideo = document.createElement('video');
    container.appendChild(fVideo);
    fVideo.setAttribute('controls', 'controls');
    fVideo.setAttribute('width', '400');
    fVideo.setAttribute('height', '350');
    fVideo.setAttribute('id', 'fVideos');
    fVideo.src = Videos.all[i].path;

  }
}
rendervideos();
// -------------audio constructor-----------------------------------
function AudioC(audioName, aExt) {
  this.audioName = audioName;
  this.path = `./audioclip/${audioName}.${aExt}`;
  AudioC.all.push(this);
}
AudioC.all = [];
for (let i = 0; i < audioName.length; i++) {
  new AudioC(audioName[i], aExt[i]);
}
// ---------audio render---------------------------------
function audioRender() {
  const h3 = document.createElement('h3');
  audioContainer.appendChild(h3);
  h3.setAttribute('id', 'audioId');
  h3.textContent = 'Please play These  Audio Clip';
  for (let i = 0; i < AudioC.all.length; i++) {
    const audioC = document.createElement('audio');
    audioContainer.appendChild(audioC);
    audioC.setAttribute('controls', 'controls');
    audioC.setAttribute('width', '300');
    audioC.setAttribute('height', '200');
    audioC.setAttribute('id', 'audioS');
    audioC.src = AudioC.all[i].path;
  }
}
audioRender();

// -------user rate ----constructor----------------------------------

function UserRate(nameU, rateN) {
  this.nameU = nameU;
  this.rateN = rateN;
  UserRate.all.push(this);
  localStorage.setItem('userrate', JSON.stringify(UserRate.all));
}
// -----------retrive local storage --------------------------


UserRate.all = [];
// --------------rate Render---------------------------
function rateRender() {
  const divC = document.getElementById('userRate');
  const rateU = document.createElement('ul');
  divC.appendChild(rateU);

  for (let i = 0; i < UserRate.all.length; i++) {
    rateU.innerHTML = '';
    const rateLi = document.createElement('li');
    rateLi.setAttribute('id', 'lie1');
    rateU.appendChild(rateLi);
    rateLi.textContent = ` Thank You ${UserRate.all[i].nameU} And your rate is : ${UserRate.all[i].rateN}`;

  }
}
function retriverate() {
  if (localStorage.length > 0) {
    UserRate.all =JSON.parse(localStorage.getItem('userrate'));
    rateRender();
  }
}
// ---------form----------------------------------
const formp=document.getElementById('forms');
function submitB(event) {
  event.preventDefault();
  const nameU = event.target.name.value;
  const rateN = parseFloat(event.target.ratenumber.value);
  new UserRate(nameU, rateN);
  event.target.reset();
  rateRender();

}
formp.addEventListener('submit', submitB);
rateRender();
retriverate();


