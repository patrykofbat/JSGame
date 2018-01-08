function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawStuff();
}

function drawStuff() {

}

document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        var canvas = document.getElementById('canvas');
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        start();
    }
}