document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        let canvas = document.getElementById("canvas");
        let canvasControl = new CanvasControl(canvas);
        canvasControl.resizeCanvas();
        canvasControl.start();
    }
}