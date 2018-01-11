class Player {

    constructor(x, y) {
        this.xPosition = x;
        this.yPosition = y;

    }

    renderPlayer(inputs) {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        var dY = (inputs.mouseY - this.yPosition);
        var dX = (inputs.mouseX - this.xPosition);
        var length = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));

        // wektor jednostowy pomonozy przez skalar
        var xStep = 21 * (dX / length);
        var yStep = 21 * (dY / length);
        context.save();

        context.beginPath();
        context.arc(this.xPosition, this.yPosition, 13, 0, 2 * Math.PI);
        context.fillStyle = "black";
        context.fill();
        context.stroke();

        context.restore();

        context.save();

        context.beginPath();
        context.moveTo(this.xPosition, this.yPosition);
        context.lineTo(this.xPosition + xStep, this.yPosition + yStep);
        context.lineWidth = 5;
        context.stroke();
        context.restore();
    }

    update(inputs) {
        this.renderPlayer(inputs);
    }



    action(key) {
        if (key.aDown) {
            this.xPosition -= 1;
            if (key.sDown)
                this.yPosition += 1;
            else if (key.wDown)
                this.yPosition -= 1;

        } else if (key.dDown) {
            this.xPosition += 1;
            if (key.sDown)
                this.yPosition += 1;
            else if (key.wDown)
                this.yPosition -= 1;

        } else if (key.wDown) {
            this.yPosition -= 1;

        } else if (key.sDown) {
            this.yPosition += 1;


        } else if (key.mouseDown) {


        }

    }


}