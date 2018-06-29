function importJS(path) {
    let head = document.getElementsByTagName("head")[0];
    let script = document.createElement("script");
    script.setAttribute("src", path);
    head.appendChild(script);
}


document.onreadystatechange = function() {
    if (document.readyState === "interactive") {
        // here we import js files
        importJS("AppMain.js");
        importJS("Player.js");
        importJS("CanvasControl.js");
        importJS("Bullet.js");
        importJS("Zombie.js");



    }
}