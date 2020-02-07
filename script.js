const numMax = 800;

let container = document.getElementById('square-container');

let button = document.getElementById('btn');
button.addEventListener('click', makingSq);

function makingSq() {
    let xVal = randomVal(0, numMax);
    let yVal = randomVal(0, numMax);
    let sq = new Dice(xVal, yVal);
}

class Dice {
    constructor(value) {
        this.div = document.createElement('div');
        this.div.classList.add('square');
        //this.div.style.left = `${valueX}px`;
        //this.div.style.top = `${valueY}px`;
        container.append(this.div);
        this.rolling()
        console.log(this);
        let button2 = document.getElementById('btn2')
            button2.addEventListener('click', () => {
                this.updateRolling();
            })
    }

    rolling() {
        this.div.innerHTML = randomVal(1, 6);
    }

    updateRolling() {
        // let xVal = randomVal(0, numMax);
        // let yVal = randomVal(0, numMax);
        // this.div.style.left = `${xVal}px`;
        // this.div.style.top = `${yVal}px`;
        this.div.innerHTML = randomVal(1, 6);
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
