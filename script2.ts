const canvas3 = document.getElementById('movingBalls');
const ctx3 = canvas3.getContext('2d');

canvas3.width = innerWidth;
window.onresize = function () { canvas3.width = innerWidth; }
canvas3.height = 393;


canvas3.style.backgroundColor = "rgb(28, 3, 68)";

let colors_1 = ["yellow", "blue", "green", "white", "black"];

let minRadius = 3;
let maxRadius = 50;
let ballCount = 40;
let previousTime = 0;

let circles = [];

for (let i = 0; i < ballCount; i++) {
    let radius = Math.random() * maxRadius + minRadius;
    let posX = Math.random() * (canvas3.width - radius * 2) + radius;
    let posY = Math.random() * (canvas3.height - radius * 2) + radius;
    let idx = Math.floor(Math.random() * colors_1.length);
    let color = colors_1[idx];
    let velocityX = 1;
    let velocityY = 1;
    circles.push(new Circle(posX, posY, color, radius, velocityX, velocityY));
}

function Circle(posX, posY, color, radius, velocityX, velocityY) {
    this.posX = posX;
    this.posY = posY;
    this.color = color;
    this.radius = radius;
    this.radians = 0;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.draw = function () {
        ctx3.beginPath();
        ctx3.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        ctx3.strokeStyle = this.color;
        ctx3.fillStyle = this.color;
        ctx3.fill();
        ctx3.stroke();
    }
    this.update = function () {
        this.posX += this.velocityX;
        this.posY += this.velocityY;


        if (this.posX + this.radius > canvas3.width || this.posX - this.radius < 0) {
            this.velocityX = -this.velocityX;
        }

        if (this.posY + this.radius > canvas3.height || this.posY - this.radius < 0) {
            this.velocityY = -this.velocityY;
        }


    }
}


function init() {
    for (let i = 0; i < circles.length; i++) {
        let ball = circles;
        ball[i].radius = 4;
        ball[i].velocityX = Math.round(Math.random()) * 2 - 1;
        ball[i].velocityY = Math.round(Math.random()) * 2 - 1;
    }
}
function animate(time) {
    requestAnimationFrame(animate);
    if (previousTime == 0) {
        previousTime = time;
    }
    let deltaTime = time - previousTime;


    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);



    for (let i = 0; i < circles.length; i++) {
        for (let n = 0; n < circles.length; n++) {
            if (i == n) {
                continue;
            } else {
                let ball = circles;
                let deltaX = ball[i].posX - ball[n].posX;
                let deltaY = ball[i].posY - ball[n].posY;
                let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                if (distance < 200) {
                    ctx3.beginPath();
                    ctx3.moveTo(ball[i].posX, ball[i].posY);
                    ctx3.lineTo(ball[n].posX, ball[n].posY);
                    ctx3.lineWidth = 0.2;
                    ctx3.strokeStyle = "yellow";
                    ctx3.stroke();
                }

            }
        }
    }


    for (let i = 0; i < circles.length; i++) {
        circles[i].draw();
        circles[i].update();
    }

}
requestAnimationFrame(animate);
init();







