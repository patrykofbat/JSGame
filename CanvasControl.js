function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var player = new Player(200, 200);
    player.renderPlayer(inputs);


    drawStuff();
}

function drawStuff() {

}

document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        var canvas = document.getElementById('canvas');
        start();
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
    }
}