class Player {

    constructor(x, y) {
        this.xPosition = x;
        this.yPosition = y;

    }

    renderPlayer() {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        context.beginPath();
        context.arc(this.xPosition, this.yPosition, 13, 0, 2 * Math.PI);
        context.fillStyle = "black";
        context.fill();
        context.stroke();
    }

    animateShot(x, y) {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        setInterval(() => {
            canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(x += 3, y += 3);
            ctx.lineTo(x += 5, y += 5);
            ctx.lineWidth = 6;
            ctx.stroke();
            this.renderPlayer();
        }, 70)

    }

    shoot(key) {
        var bulletX = this.xPosition;
        var bulletY = this.yPosition;
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(bulletX, bulletY);
        ctx.lineTo(bulletX += 3, bulletY += 3);
        ctx.stroke();
        this.animateShot(bulletX, bulletY);
    }

    action(key) {
        if (key.keyDown == "a") {
            this.xPosition -= 1;
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
            this.renderPlayer();

        } else if (key.keyDown == "d") {
            this.xPosition += 1;
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
            this.renderPlayer();

        } else if (key.keyDown == "w") {

            var dY = (key.mouseY - this.yPosition);
            var dX = (key.mouseX - this.xPosition);
            var length = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
            var a = dY / dX;

            this.yPosition += a * (dX / length);
            this.xPosition += dX / length;

            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

            this.renderPlayer();

        } else if (key.keyDown == "s") {
            this.yPosition += 1;
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
            this.renderPlayer();
        } else if (key.mouseDown) {
            this.shoot(key);

        }

    }


}