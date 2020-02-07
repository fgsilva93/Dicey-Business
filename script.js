const numMax = 500; 

let container = document.getElementById('square-container');

let button = document.getElementById('btn'); 
button.addEventListener('click', makingSq)

function makingSq () {
    let xVal = randomVal(0,numMax); 
    let yVal = randomVal(0,numMax);
    let sq = new Dice(xVal, yVal); 
}

//let counter = 1; 
class Dice {
    constructor(x, y) {
        this.div = document.createElement('div');
        this.div.classList.add('square');
        //this.value = document.createTextNode(counter);
        container.append(this.div);
        this.rolling()
        console.log(this);
        // this.div.addEventListener('click', ()=> {
        //     this.div.append('div');
        // })
    }

    rolling() {
        this.div.innerHTML = randomVal(1,6); 
    }
}

new Dice();

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// a test//

// let button = document.getElementById('btn'); 
// button.addEventListener('click',function() {
//     let div = document.createElement('div');
//     document.body.append(div);
// })
