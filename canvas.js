var canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = 400;
canvas.style.cursor ="none";


var c = canvas.getContext('2d');
const offsetLeft = document.querySelector('canvas').getBoundingClientRect().left;
const offsetTop = document.querySelector('canvas').getBoundingClientRect().top;


let mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
let ballCount = 1000;
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
    canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    init();
})


function Circle(x, y, dx, dy, radius) {
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
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0)

        {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;


        //interactivity
        if (
            mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 && mouse.y - this.y > -50) {


            if (this.radius < maxRadius) {
                this.radius += 2.3;
            }

        } else if (this.radius > this.minRadius) {
            this.radius -= 0.8;
        }

        this.draw();

    }



}


var circleArray = [];

function init() {
    circleArray = [];
    for (let i = 0; i < ballCount; i++)
    {
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);

        circleArray.push(new Circle(x, y, dx, dy, radius));


    }
}




function animate() {
    requestAnimationFrame(animate);
    

    c.clearRect(0, 0, innerWidth, innerHeight); // izdzees katru kadru


    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }


}
init();
animate();