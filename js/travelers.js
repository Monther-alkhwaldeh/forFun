"use strict";

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const swim = ['Bolivia', 'India', 'lake', 'park'];
const camp = ['switzwrland', 'Norway', 'beren', 'alps'];
const climb = ['Montana', 'Washington', 'Forde', 'gorgia'];
const allAct = [swim, camp, climb];
let votes = 0;
let Vote = [];

function
AllPlaces(swim, camp, climb, allAct, votes) {
    this.swim = swim;
    this.camp = camp;
    this.climb = climb;
    this.votes = 0;
    // this.views = 0;

    this.allAct = allAct;
    ///AllPlaces.all.push(this);

}
let laps = 12;
//AllPlaces = []

let tmp = new AllPlaces(swim, camp, climb, allAct, votes);

const leftImage = document.getElementById('left-image');
const centerImage = document.getElementById('center-image');
const rightImage = document.getElementById('right-image');
const imagesSection = document.getElementById('imagesSection');


function render() {
    const leftIndex = randomNumber(0, swim.length - 1);
    const centerIndex = randomNumber(0, climb.length - 1);
    const rightIndex = randomNumber(0, camp.length - 1);

    // left imge
    leftImage.src = './imgs/travelimg/' + swim[leftIndex] + '.jpg';
    leftImage.title = swim[leftIndex];
    leftImage.alt = swim[leftIndex];

    // center imge
    centerImage.src = './imgs/travelimg/' + camp[centerIndex] + '.jpg';
    centerImage.title = camp[centerIndex];
    centerImage.alt = camp[centerIndex];
    // right imge
    rightImage.src = './imgs/travelimg/' + climb[rightIndex] + '.jpg';
    rightImage.title = climb[rightIndex];
    rightImage.alt = climb[rightIndex];


    if (leftIndex === centerIndex || rightIndex === leftIndex || rightIndex === centerIndex) {
        render()
    }

}


function updateList() {
    let upList = JSON.stringify(Vote);
    localStorage.setItem("travelVotes", upList);
}


function getList() {
    let gList = localStorage.getItem("travelVotes");
    if (gList) {
        Vote = JSON.parse(gList);
        render();
    }
}

imagesSection.addEventListener('click', handleClick);

function handleClick(event) {
    laps--;

    if (laps === 0) {
        imagesSection.removeEventListener('click', handleClick);
        // createChart();
    } else {
        if (event.target.id !== 'images-section') {
            console.log(event.target);

            for (let i = 0; i < allAct.length; i++) {
                console.log(allAct.length);
                if (tmp.swim[i] === event.target.title || tmp.climb[i] === event.target.title || tmp.camp[i] === event.target.title) {
                    tmp.votes++;
                    console.log("The votes are :" +
                        tmp.votes);
                    Vote.push(tmp.votes)
                }
            }
        }
        Vote.push(votes)
        render();

        console.log(Vote)
    }
}
imagesSection.addEventListener('click', handleClick);
render();



// debugger;




// const swim = ['Bolivia', 'India', 'lake', 'park'];
// const camp = ['switzwrland', 'Norway', 'beren', 'alps'];
// const climb = ['Montana', 'Washington', 'Forde', 'gorgia'];
// const allAct = [swim, camp, climb]
// let lap = 12;
// let votes = 0
// const imgesction = document.getElementById('imgesction')
// const att = document.createAttribute("onclick");



// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function render() {
//     for (let i = 0; i < allAct.length; i++) {
//         for (let j = 0; j < allAct[i].length; j++) {
//             const imgFrame = document.createElement('section');
//             imgesction.appendChild(imgFrame);
//             imgFrame.onclick = removeImge();
//             const img = document.createElement('img');
//             imgFrame.appendChild(img);
//             img.src = './imgs/travelimg/' + allAct[i][j] + '.jpg';
//             img.alt = allAct[i][j];
//             img.title = allAct[i][j];
//             img.id = 'scal';
//         }
//     }
// }
// // imgesction.addEventListener('click', onclick);
// debugger;

// function removeImge() {
//     let x = document.getElementByid('scal');
//     x.style.display = 'none';
// }
// 










// function Travelers([]) {
//     this.path = '';
//     this.name = '';
//     this.votes = 0
//     this.views = 0
// }
// const imgesction = document.getElementById('imgesction')
// Travelers.prototype.render = function() {
//         // creating img
//         console.log(Travelers, 'kjlkj')
//         for (let i = 0; i < Travelers.length; i++) {
//             this.path = '/imgs/travelimg/' + [i] + '.jpg'
//             const img = document.createElement('img')
//             imgesction.appendChild(img);
//             img.src = this.path
//             img.alt = this.name
//             img.title = this.name
//             if (event.target.id !== 'imgesction') {
//                 console.log(event.target);
//                 for (let i = 0; i < Travelers.length; i++) {
//                     if (Travelers.name === event.target.title) {
//                         Travelers.votes++;
//                     }
//                 }
//             }
//         }
// const names = [
//     't1',
//     't2',
//     't3',
//     't4',
//     't5',
//     't6',
//     't7',
//     't8',
//     't9',
//     't10',
//     't11',
//     't12',
//     't13',
//     't14',
//     't15',
//     't16',
//     't17',
//     't18',
//     't19',
//     't20',
//     't21',
//     't22'
// ];





// const imgesction = document.getElementById('imgesction')
// const att = document.createAttribute("onclick");

// function render() {
//     for (let i = 0; i < allAct.length; i++) {
//         for (let j = 0; j < allAct[i].length; j++) {
//             const imgFrame = document.createElement('section');
//             imgesction.appendChild(imgFrame);
//             imgFrame.onclick = removeImge();
//             const img = document.createElement('img');
//             imgFrame.appendChild(img);
//             img.src = './imgs/travelimg/' + allAct[i][j] + '.jpg';
//             img.alt = allAct[i][j];
//             img.title = allAct[i][j];
//             img.id = 'scal'


//         }
//     }
// }

// // imgesction.addEventListener('click', onclick);
// debugger;

// function removeImge() {

//     let x = document.getElementByid('scal')
//     x.style.display = 'none'

// }


// function onclick(event) {
//     laps--;
//     if (laps === 0) {
//         imgesction.removeEventListener('click', onclick);
//         // createChart();
//     } else {
//         if (event.target.id !== 'imgesction') {
//             console.log(event.target);
//             imgesction.removeChild(img)
//             votes++;
//         }
//         render();
//         console.log(allAct);
//     }
// }
// render();





// const leftImage = document.getElementById('left-image');
// const centerImage = document.getElementById('center-image');
// const rightImage = document.getElementById('right-image');

// const resultsBtn = document.getElementById('btn');
// function Taveler(name) {
//     this.name = name;
//     this.path = './imgs/travelimg/' +
//         this.name +
//         '.jpg';
//     this.votes = 0;
//     this.views = 0;
//     //Taveler.push(this);
//     Taveler.all.push(this);
// }
// // Taveler.all = [];
// for (let i = 0; i < names.length; i++) {
//     new Taveler(names[i]);
// }
// console.table(Taveler.all);






// function render() {
//     const leftIndex = randomNumber(0, Taveler.all.length - 1);
//     const centerIndex = randomNumber(leftIndex, Taveler.all.length - 1);
//     const rightIndex = randomNumber(0, Taveler.all.length - 1);
//     // left imge
//     leftImage.src = Taveler.all[leftIndex].path;
//     leftImage.title = Taveler.all[leftIndex].name;
//     leftImage.alt = Taveler.all[leftIndex].name;
//     // center imge
//     centerImage.src = Taveler.all[centerIndex].path;
//     centerImage.title = Taveler.all[centerIndex].name;
//     centerImage.alt = Taveler.all[centerIndex].name;
//     // right imge
//     rightImage.src = Taveler.all[rightIndex].path;
//     rightImage.title = Taveler.all[rightIndex].name;
//     rightImage.alt = Taveler.all[rightIndex].name;
//     for (let i = 0; i < Taveler.length; i++) {
//         if (leftIndex === centerIndex || rightIndex === leftIndex || rightIndex === centerIndex) {
//             render(Taveler.all)
//         } else {
//             break;
//         }
//     }
// }
// imgesction.addEventListener('click', handleClick);
// function handleClick(event) {
//     laps--;
//     if (laps === 0) {
//         imgesction.removeEventListener('click', handleClick);
//         // createChart();
//     } else {
//         if (event.target.id !== 'imgesction') {
//             console.log(event.target);
//             for (let i = 0; i < Taveler.all.length; i++) {
//                 if (Taveler.all[i].name === event.target.title) {
//                     Taveler.all[i].votes++;
//                 }
//             }
//             render();
//             console.log(Taveler.all);
//         }
//     }
// }
// render();


// function resultBtn(event) {
//     for (let i = 0; i < names[i]; i++) {
//         if (this.votes <= 11) {
//             document.getElementById("her").innerHTML = "lets do climping !";
//         } else {
//             document.getElementById("her").innerHTML = "lets swimming !";
//         }
//         render();
//     }
// };
// resultBtn();
// render();
// camp.render();
// swim.render();




// imgesction.addEventListener('click', handleClick);