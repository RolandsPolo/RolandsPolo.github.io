
const canvas1 = document.getElementById('fractal-canvas-2');
const ctx1 = canvas1.getContext('2d');
const btn = document.querySelector(".btn");

canvas1.style.backgroundColor = "none";
canvas1.style.border = "1px solid green";
canvas1.width = 600;
canvas1.height = 530;
canvas1.style.position = "relative";

function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {

    ctx1.beginPath();
    ctx1.save();
    ctx1.strokeStyle = color1;
    ctx1.fillStyle = color2;
    ctx1.shadowColor = color2;
    ctx1.lineWidth = branchWidth;
    ctx1.translate(startX, startY);
    ctx1.rotate(angle * Math.PI / 180);
    ctx1.moveTo(0, 0);
    if (angle > 0) {
        ctx1.bezierCurveTo(10, -len / 2, 10, -len / 2, 0, -len);
    } else {
        ctx1.bezierCurveTo(10, -len / 2, -10, -len / 2, 0, -len);
    }

    ctx1.stroke();

    if (len < 15) {
        ctx1.beginPath();
        ctx1.arc(0, -len, 10, 0, Math.PI / 2);
        ctx1.fill();
        ctx1.restore();
        return;
    }
    const curve = Math.random() * 10 + 10;

    drawTree(0, -len, len * 0.75, angle + curve, branchWidth * 0.6,color1,color2);
    drawTree(0, -len, len * 0.75, angle - curve, branchWidth * 0.6,color1,color2);

    ctx1.restore();
}

// drawTree(canvas[1].width / 2, canvas[1].height, 120, 0, 25, 'red', 'white');

function generateRandomTree() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    let centerPointX = canvas1.width / 2;
    let len = 120;
    let angle = 0;
    let branchWidth = (Math.random() * 70) + 1;
    let color1 = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    let color2 = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';

    drawTree(centerPointX, canvas1.height, len, angle, branchWidth, color1, color2);

}
btn.addEventListener('click', generateRandomTree);