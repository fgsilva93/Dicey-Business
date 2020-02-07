const numMax = 800;

let divContainer = document.getElementById('square-container');

let button = document.getElementById('btn');
button.addEventListener('click', makingSq);

function makingSq() {
    let xVal = randomVal(0, numMax);
    let yVal = randomVal(0, numMax);
    new Dice(xVal, yVal);
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Dice {
    constructor(value) {
        this.div = document.createElement('div');
        this.div.classList.add('square');
        divContainer.append(this.div);
        this.rolling()
        this.updateColor();
        console.log(this);
        let button2 = document.getElementById('btn2')
        button2.addEventListener('click', () => {
            this.updateRolling();
            this.updateColor();
        })
    }

    rolling() {
        this.div.innerHTML = randomVal(1, 6);
    }

    updateRolling() {
        this.div.innerHTML = randomVal(1, 6);
    }

    updateColor() {
        let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
        this.div.style.backgroundColor = randomColor;
    }

}