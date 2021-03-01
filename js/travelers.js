"use strict";



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Travelers.prototype.getRndInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const swim = new Travelers('Bolivia', 'India', 'lake', 'park');
const camp = new Travelers('switzwrland', 'Norway', 'beren', 'alps');
const climb = new Travelers('Montana', 'Washington', 'Forde', 'gorgia');

let travel = [swim, camp, climb]

function Travelers(name, path) {
    this.name = name;
    this.path = './imgs/travelimg/' + this.name + '.jpg';
    this.votes = 0
    this.views = 0
}

Travelers.prototype.render = function() {
        const leftIndex = randomNumber(0, Travelers.swim.length - 1);
        const centerIndex = randomNumber(0, Travelers.camp.length - 1);
        const rightIndex = randomNumber(0, Travelers.climb.length - 1);
        // left imge
        leftImage.src = Travelers.swim[leftIndex].path;
        leftImage.title = Travelers.swim[leftIndex].name;
        leftImage.alt = Travelers.swim[leftIndex].name;

        // center imge
        centerImage.src = Travelers.camp[centerIndex].path;
        centerImage.title = Travelers.camp[centerIndex].name;
        centerImage.alt = Travelers.camp[centerIndex].name;
        // right imge
        rightImage.src = Travelers.climb[rightIndex].path;
        rightImage.title = Travelers.climb[rightIndex].name;
        rightImage.alt = Travelers.climb[rightIndex].name;

    }
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



// const leftImage = document.getElementById('left-image');
// const centerImage = document.getElementById('center-image');
// const rightImage = document.getElementById('right-image');
// const imgesction = document.getElementById('imgesction')
// const resultsBtn = document.getElementById('btn');

// let laps = 25;
// let imgs = [];




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

// Taveler.all = [];
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



imgesction.addEventListener('click', handleClick);

function handleClick(event) {
    laps--;

    if (laps === 0) {
        imgesction.removeEventListener('click', handleClick);
        // createChart();
    } else {
        if (event.target.id !== 'imgesction') {
            console.log(event.target);
            for (let i = 0; i < Taveler.all.length; i++) {
                if (Taveler.all[i].name === event.target.title) {
                    Taveler.all[i].votes++;
                }
            }
            render();

            console.log(Taveler.all);
        }
    }
}
render();


function resultBtn(event) {
    for (let i = 0; i < names[i]; i++) {
        if (this.votes <= 11) {
            document.getElementById("her").innerHTML = "lets do climping !";

        } else {
            document.getElementById("her").innerHTML = "lets swimming !";
        }
        render();
    }
};






resultBtn();
swim.render();
climb.render();
camp.render();
imgesction.addEventListener('click', handleClick);