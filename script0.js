    const canvas = document.getElementById('fractal-canvas-1');
    const ctx = canvas.getContext('2d');
    canvas.style.backgroundColor = "none";
    canvas.style.position = "relative";
    canvas.style.border = "1px solid green";
    canvas.width = 600;
    canvas.height = 530;

    let colors = ['black'];

    let slider = document.getElementById('slider');

    slider.oninput = function () {

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawTree1(canvas.width / 2, canvas.height, 150, 0, 2, colors[0], 'white');
    }
    function drawTree1(startX, startY, len, angle, branchWidth, color1, color2) {

        ctx.beginPath();
        ctx.save();
        ctx.strokeStyle = color1;
        ctx.fillStyle = color2;
        ctx.lineWidth = branchWidth;
        ctx.translate(startX, startY);
        ctx.rotate(angle * Math.PI / 180);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -len);
        ctx.stroke();

        if (len < 5) {
            ctx.restore();
            return;
        }

        drawTree1(0, -len, len * 0.70, angle + (slider.value - 1), branchWidth,"black","black");
        drawTree1(0, -len, len * 0.70, angle - (slider.value - 1), branchWidth,"black","black");

        ctx.restore();
    }

    drawTree1(canvas.width / 2, canvas.height, 150, 0, 2, colors[0], 'white');

