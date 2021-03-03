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



window.onload = function() {
    const placetNames = [];
    const placetVotes = [];
    for (let i = 0; i < allAct.length; i++) {
        placetNames.push(tmp.swim[i], tmp.climb[i], tmp.camp[i]);
        placetVotes.push(tmp.votes[i]);
    }
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "upon on your choice we recommend you to ...",
            fontFamily: "Impact",
            fontWeight: "normal"
        },

        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        data: [{
            //startAngle: 45,
            indexLabelFontSize: 20,
            indexLabelFontFamily: "Garamond",
            indexLabelFontColor: "rgb(0, 76, 153)",
            indexLabelLineColor: "rgb(0, 153, 153)",
            indexLabelPlacement: "outside",
            type: "doughnut",
            showInLegend: true,
            dataPoints: [
                { y: placetVotes, legendText: placetNames },

            ]
        }]
    });

    chart.render();
}

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