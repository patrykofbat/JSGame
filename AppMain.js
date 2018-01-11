var inputs = {
    aDown: false,
    sDown: false,
    dDown: false,
    wDown: false,
    mouseX: null,
    mouseY: null,
    mouseDown: false
};

function start() {
    var player = new Player(200, 200);
    player.renderPlayer(inputs);

    document.addEventListener("keydown", (event) => {
        if (event.key == "a")
            inputs.aDown = true;
        if (event.key == "s")
            inputs.sDown = true;
        if (event.key == "d")
            inputs.dDown = true;
        if (event.key == "w")
            inputs.wDown = true;


    });
    document.addEventListener("keyup", (event) => {
        if (event.key == "a")
            inputs.aDown = false;
        if (event.key == "s")
            inputs.sDown = false;
        if (event.key == "d")
            inputs.dDown = false;
        if (event.key == "w")
            inputs.wDown = false;

    });

    document.addEventListener("mousemove", (event) => {
        var canvas = document.getElementById("canvas");
        inputs.mouseX = event.clientX - canvas.getBoundingClientRect().left;
        inputs.mouseY = event.clientY - canvas.getBoundingClientRect().top;


    });

    document.addEventListener("mousedown", (event) => { inputs.mouseDown = true; });
    document.addEventListener("mouseup", (event) => { inputs.mouseDown = false; });

    var gameLoop = setInterval(() => {
        player.action(inputs);
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        player.update(inputs);


    }, 1.5);

}