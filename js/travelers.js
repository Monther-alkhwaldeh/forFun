"use strict";



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const names = [
    't1',
    't2',
    't3',
    't4',
    't5',
    't6',
    't7',
    't8',
    't9',
    't10',
    't11',
    't12',
    't13',
    't14',
    't15',
    't16',
    't17',
    't18',
    't19',
    't20',
    't21',
    't22'
];



const leftImage = document.getElementById('left-image');
const centerImage = document.getElementById('center-image');
const rightImage = document.getElementById('right-image');
const imgesction = document.getElementById('imgesction')
const resultsBtn = document.getElementById('btn');

let laps = 25;
let imgs = [];




function Taveler(name) {
    this.name = name;
    this.path = './imgs/travelimg/' +
        this.name +
        '.jpg';
    this.votes = 0;
    this.views = 0;
    //Taveler.push(this);
    Taveler.all.push(this);
}

Taveler.all = [];
for (let i = 0; i < names.length; i++) {
    new Taveler(names[i]);
}

console.table(Taveler.all);



function render() {
    const leftIndex = randomNumber(0, Taveler.all.length - 1);
    const centerIndex = randomNumber(leftIndex, Taveler.all.length - 1);
    const rightIndex = randomNumber(0, Taveler.all.length - 1);
    // left imge
    leftImage.src = Taveler.all[leftIndex].path;
    leftImage.title = Taveler.all[leftIndex].name;
    leftImage.alt = Taveler.all[leftIndex].name;

    // center imge
    centerImage.src = Taveler.all[centerIndex].path;
    centerImage.title = Taveler.all[centerIndex].name;
    centerImage.alt = Taveler.all[centerIndex].name;
    // right imge
    rightImage.src = Taveler.all[rightIndex].path;
    rightImage.title = Taveler.all[rightIndex].name;
    rightImage.alt = Taveler.all[rightIndex].name;

    for (let i = 0; i < Taveler.length; i++) {
        if (leftIndex === centerIndex || rightIndex === leftIndex || rightIndex === centerIndex) {
            render(Taveler.all)
        } else {
            break;
        }

    }
}



imgesction.addEventListener('click', handleClick);

function handleClick(event) {
    laps--;

    if (laps === 0) {
        imgesction.removeEventListener('click', handleClick);
        createChart();
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

function createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');

    const TavelerNames = [];
    const TavelerVotes = [];
    for (let i = 0; i < Taveler.all.length; i++) {
        TavelerNames.push(Taveler.all[i].name);
        TavelerVotes.push(Taveler.all[i].votes);
    }
    console.log('Votes', TavelerVotes);
    new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: TavelerNames,
            datasets: [{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderAlign: 'center',
                borderColor: '#fff',
                borderWidth: '2px',



                // barPercentage: 0.5,
                // // barThickness: 6,
                // borderWidth: 5,
                label: '# of votes:',
                // backgroundColor: 'rgb(100, 125, 50)',
                // borderColor: 'rgb(0, 0, 0)',
                data: TavelerVotes,
            }, ],
        },

        // Configuration options go here
        options: {},
    });
};



function resultBtn(event) {
    resultsBtn.removeEventListener('click', resultBtn);
    const listsec = document.getElementById('list');
    const ul = document.createElement('ul');
    listsec.appendChild(ul);
    for (let i = 0; i < Taveler.all.length; i++) {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `
    $ { Taveler.all[i].name.toUpperCase() }
    had "${Taveler.all[i].likes}"
    likes and was shown "${Taveler.all[i].views}"
    times.
    `;
    }

}
render();
imgesction.addEventListener('click', handleClick);