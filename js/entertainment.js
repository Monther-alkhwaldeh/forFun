'use strict';

const container=document.getElementById('videos');
const videoName = ['b3', 'bb2', 'fff'];
const ext=['mp4','mp4','mp4'];

function Videos(videoName,ext) {
  this.videoName = videoName;
  this.path = `./videos/${videoName}.${ext}`;
  Videos.all.push(this);
}

Videos.all = [];
for (let i = 0; i < videoName.length; i++) {

  new Videos(videoName[i],ext[i]);
}


function rendervideos() {
  const h3= document.createElement('h3');
  container.appendChild(h3);
  h3.textContent='Please watch this videos';
  for(let i=0;i<Videos.all.length;i++){
    const fVideo = document.createElement('video');
    container.appendChild(fVideo);
    fVideo.setAttribute('controls', 'controls');
    fVideo.setAttribute('width','300');
    fVideo.setAttribute('height','200');
    fVideo.setAttribute('id','fVideos');
    fVideo.src = Videos.all[i].path;

  }
}

rendervideos();

function rating(){
  for(let i=0; i< Videos.all.length;i++){
    let videoList=document.createElement('option');
    const vList=document.getElementById('vList');
    vList.appendChild(videoList);
    videoList.value=Videos.all[i].videoName;
    videoList.textContent=Videos.all[i].videoName;
  }
}

rating();
const formp=document.getElementById('forms');
function submitRate(event) {
  event.preventDefault();
  event.target.reset();
}
formp.addEventListener('submit',submitRate);

const rateSection=document.getElementById('rateUser');

function viewRate(){
  const ule1=document.createElement('ul');
  rateSection.appendChild(ule1);
  const lie1=document.createElement('li');
  ule1.appendChild(lie1);
  lie1.textContent=`${document.getElementById('vList').value} ${document.getElementById('ratenumber').value}`;
  localStorage.setItem('Video Name',JSON.stringify(document.getElementById('vList').value));
  localStorage.setItem('Rate Number',JSON.stringify(document.getElementById('ratenumber').value));
}
viewRate();



// const cForm=document.getElementById('contactform');
// const contactus=document.createElement('h3');
// cForm.appendChild(contactus);
// contactus.textContent='Contact Us';
// const div1=document.createElement('div');
// cForm.appendChild(div1);
// const name=document.createElement('input');
// div1.appendChild(name);
// name.type='text';
// name.id='uName';
// name.placeholder='Enter your Name';
// const div2=document.createElement('div');
// cForm.appendChild(div2);
// const subject=document.createElement('input');
// div2.appendChild(subject);
// subject.type='text';
// subject.id='subject';
// subject.placeholder='Enter Subject';
// const div3=document.createElement('div');
// cForm.appendChild(div3);
// const phone=document.createElement('input');
// div3.appendChild(phone);
// phone.type='text';
// phone.id='phoneNumber';
// phone.placeholder='Enter Your Phone Number';
// const div4=document.createElement('div');
// cForm.appendChild(div4);
// const email=document.createElement('input');
// div4.appendChild(email);
// email.type='text';
// email.id='email';
// email.placeholder='Enter Your Email';

// const div5=document.createElement('div');
// cForm.appendChild(div5);
// const message=document.createElement('input');
// div5.appendChild(message);
// message.type='text';
// message.id='message';
// message.placeholder='Enter Your Message';

// const div6=document.createElement('div');
// cForm.appendChild(div6);

// const div4=document.createElement('div');
// cForm.appendChild(div4);
// const email=document.createElement('input');
// div4.appendChild(email);
// phone.id='email';
// phone.placeholder='Enter Your Email';

