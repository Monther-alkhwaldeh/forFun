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
AllPlaces(swim, camp, climb, allAct) {
    this.swim = swim;
    this.camp = camp;
    this.climb = climb;
    this.votes = 0;


    this.allAct = allAct;


}
let laps = 12;


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
    localStorage.setItem("PlaceVotes", upList);
}


function getList() {
    let gList = localStorage.getItem("PlaceVotes");
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
        document.getElementById('btn').hidden = false;
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






function wherTo() {
    const wOne = ['Netherlands: it have big sea', 'Iceland: it have a nice land scape with a big river', 'Bali: you cant Imagine the pur natural their ']
    const fOne = randomNumber(0, wOne.length - 1);
    const wTow = ['Geirangerfjerford: it have small mountain with a cool waterfall ', 'Honfn: it is the most green place with high mountain', 'Geisler Alm: it is have mountains with frzen tops']
    const fTow = randomNumber(0, wTow.length - 1);
    const WThree = ['Ayder: it have a nice small cottage inside small forest', 'Wadi Ram: it have a camp in the desert', 'Whashington: it have a camp inside a large Forest']
    const fTthree = randomNumber(0, WThree.length - 1);
    // prompet
    const pOne = prompt('do you like swim?', "<yes or no>")
    if (pOne.toLowerCase() === 'yes') {
        alert('we recommend you to ..' + wOne[fOne]);
    } else if (pOne.toLowerCase() === 'no') {
        alert('you may like something else')
    }
    const pTow = prompt('do you like climb?', "<yes or no>")
    if (pTow.toLowerCase() === 'yes') {
        alert('we recommend you to ..' + wTow[fTow]);
    } else if (pTow.toLowerCase() === 'no') {
        alert('why not to try new things!')
    }
    const pThree = prompt('do you like camping?', "<yes or no>")
    if (pThree.toLowerCase() === 'yes') {
        alert('we recommend you to ..' + WThree[fTthree]);
    } else if (pThree.toLowerCase() === 'no') {
        alert('traveling Make you see what you have never seen before!!')
    }

}
updateList()
getList()

// function createChart() {
//     const ctx = document.getElementById('myChart').getContext('2d');

//     const placeNames = [];
//     const placeVotes = [];
//     for (let i = 0; i < allAct.length; i++) {
//         placeNames.push(tmp);
//         placeVotes.push(tmp.votes[i]);
//     }
//     console.log('Votes', placeVotes);
//     new Chart(ctx, {
//         // The type of chart we want to create
//         type: 'doughnut',


//         // The data for our dataset
//         data: {
//             labels: [placeNames, placeVotes],

//             datasets: [{
//                 label: ' votes:',
//                 borderAlign: 'center',
//                 borderWidth: '15px',
//                 offset: '15px',
//                 hoverBackgroundColor: 'rgb(255, 255, 51)',
//                 backgroundColor: [
//                     'rgb(0, 255, 128)',
//                     'rgb(0, 153, 76)',
//                     'rgb(0,128,255)',
//                 ],
//                 hoverOffset: 4
//             }]
//         },



//         // Configuration options go here

//         options: {
//             cutout: '50%',
//             radius: '100%',
//             circumference: 360,
//             animation: true,
//         }
//     });
// };

// function createChart() {
//     constchart = new CanvasJS.Chart("chartContainer"), ;

//     const placetNames = [];
//     const placetVotes = [];
//     for (let i = 0; i < allAct.length; i++) {
//         placetNames.push(tmp.swim[i], tmp.climb[i], tmp.camp[i]);
//         placetVotes.push(tmp.votes[i]);
//     }
//     console.log('Votes', placetVotes);
//     new Chart(myDoughnutChart, {
//         // The type of chart we want to create
//         type: 'doughnut',

//         // The data for our dataset
//         data: {
//             labels: [tmp.swim,
//                 tmp.climb,
//                 tmp.camp
//             ],
//             datasets: [{
//                 label: 'votes',
//                 data: [placetNames, placetVotes],



//                 borderAlign: 'center',
//                 borderWidth: 5,

//                 label: 'votes:',
//                 backgroundColor: ['rgb(0, 153, 76)',
//                     'rgb(0, 153, 153)',
//                     'rgb(0, 76, 153)'
//                 ],
//                 hoverOffset: 4,





//             }, ],
//         },


//         options: {},
//     });
// };