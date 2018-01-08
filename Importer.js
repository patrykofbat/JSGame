function importJS(path) {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.setAttribute("src", path);
    head.appendChild(script);
}


document.onreadystatechange = function() {
    if (document.readyState == "interactive") {
        // here we import js files
        importJS("AppMain.js");
        importJS("Player.js");
        importJS("CanvasControl.js");

    }
}