document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        var canvas = document.getElementById("canvas");
        var canvasControl = new CanvasControl(canvas);
        canvasControl.resizeCanvas();
        canvasControl.start();
    }
}