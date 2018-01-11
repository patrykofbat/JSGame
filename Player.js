class Player {

    constructor(x, y, ctx) {
        this.xPosition = x;
        this.yPosition = y;
        this.ctx = ctx;


    }

    renderPlayer(inputs) {
        var dY = (inputs.mouseY - this.yPosition);
        var dX = (inputs.mouseX - this.xPosition);
        var length = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));

        // wektor jednostowy pomonozy przez skalar
        var xStep = 21 * (dX / length);
        var yStep = 21 * (dY / length);
        this.ctx.save();

        this.ctx.beginPath();
        this.ctx.arc(this.xPosition, this.yPosition, 13, 0, 2 * Math.PI);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.restore();

        this.ctx.save();

        this.ctx.beginPath();
        this.ctx.moveTo(this.xPosition, this.yPosition);
        this.ctx.lineTo(this.xPosition + xStep, this.yPosition + yStep);
        this.ctx.lineWidth = 5;
        this.ctx.stroke();
        this.ctx.restore();
    }

    update(inputs) {
        this.renderPlayer(inputs);
    }



    action(key) {
        if (key.aDown) {
            this.xPosition -= 1;
            if (key.sDown) {
                this.yPosition += 1;
                if (key.mouseDown)
                    console.log("shot!");
            } else if (key.wDown) {
                this.yPosition -= 1;
                if (key.mouseDown)
                    console.log("shot!");
            } else if (key.mouseDown)
                console.log("shot!");

        } else if (key.dDown) {
            this.xPosition += 1;
            if (key.sDown) {
                this.yPosition += 1;
                if (key.mouseDown)
                    console.log("shot!");
            } else if (key.wDown) {
                this.yPosition -= 1;
                if (key.mouseDown)
                    console.log("shot!");
            } else if (key.mouseDown)
                console.log("shot!");


        } else if (key.wDown) {
            this.yPosition -= 1;
            if (key.mouseDown)
                console.log("shot!");


        } else if (key.sDown) {
            this.yPosition += 1;
            if (key.mouseDown)
                console.log("shot!");


        }


    }


}