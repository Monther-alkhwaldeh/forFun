'use strict';
// const v=document.getElementById('videos')
// const videos=document.createElement('video');
// v.appendChild(videos);
// videos.setAttribute('controls','controls');
// videos.src='./videos/bbb.mp4';

const container=document.getElementById('videos');
// const firstVideo=document.getElementsById('firstvideo');
// const sconedVideo=document.getElementsById('seconedvideo');
// const thirdVideo=document.getElementsById('thirdvideo');

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
// consol.log(this.path);
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


// showvideos();
