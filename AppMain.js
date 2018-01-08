var inputs = {
    keyDown: null,
    mouseX: null,
    mouseY: null,
    mouseDown: false
};

function start() {
    var player = new Player(200, 200);
    player.renderPlayer();

    document.addEventListener("keydown", (event) => {
        inputs.keyDown = event.key;
    });
    document.addEventListener("keyup", (event) => {
        inputs.keyDown = null;
    });

    document.addEventListener("mousemove", (event) => {
        var canvas = document.getElementById("canvas");
        inputs.mouseX = event.clientX - canvas.getBoundingClientRect().left;
        inputs.mouseY = event.clientY - canvas.getBoundingClientRect().top;


    });

    document.addEventListener("mousedown", (event) => { inputs.mouseDown = true; });
    document.addEventListener("mouseup", (event) => { inputs.mouseDown = false; });

    var gameLoop = setInterval(() => { player.action(inputs) }, 1.5);

}