var canvas4 = document.getElementById('flyingBalls');
var c = canvas4.getContext('2d');
canvas4.width = innerWidth;
canvas4.height = 400;
canvas4.style.cursor ="none";

const offsetLeft = document.getElementById('flyingBalls').getBoundingClientRect().left;
const offsetTop = document.getElementById('flyingBalls').getBoundingClientRect().top;


let mouse = {
    x: undefined,
    y: undefined
}
var maxRadius1 = 40;
let ballCount1 = 1000;
var colorArray = [
    '#829FD9',
    '#027368',
    '#FFEF00',
    '#BFB634',
    '#0D0D0D',
]
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x - offsetLeft;
    mouse.y = event.y - offsetTop;
})
window.addEventListener('resize', function() {
    canvas4.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    init1();
})


function Circle1(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill()

    }
    this.update = function() {
        if (this.x + this.radius > canvas4.width || this.x - this.radius < 0)

        {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas4.height || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;


        //interactivity
        if (
            mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 && mouse.y - this.y > -50) {


            if (this.radius < maxRadius1) {
                this.radius += 2.3;
            }

        } else if (this.radius > this.minRadius) {
            this.radius -= 0.8;
        }

        this.draw();

    }



}


var circleArray = [];

function init1() {
    circleArray = [];
    for (let i = 0; i < ballCount1; i++)
    {
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);

        circleArray.push(new Circle1(x, y, dx, dy, radius));


    }
}




function animate1() {
    requestAnimationFrame(animate1);
    

    c.clearRect(0, 0, innerWidth, innerHeight); // izdzees katru kadru


    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }


}
init1();
animate1();