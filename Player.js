class Player {

    constructor(x, y, ctx) {
        this.xPosition = x;
        this.yPosition = y;
        this.ctx = ctx;
        this.arrayBullet = [];


    }

    renderPlayer(inputs) {
        let dY = (inputs.mouseY - this.yPosition);
        let dX = (inputs.mouseX - this.xPosition);
        let length = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));

        // wektor jednostowy pomonozy przez skalar
        let xStep = 21 * (dX / length);
        let yStep = 21 * (dY / length);
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
        this.arrayBullet.forEach(bullet => {
            if (!(bullet.x > window.innerWidth || bullet.x < 0 || bullet.y > window.innerHeight || bullet.y < 0))
                bullet.update();
            else {
                this.arrayBullet.splice(this.arrayBullet.indexOf(bullet), 1);
            }
        });
        // console.log(this.arrayBullet);


    }

    shoot(inputs) {
        let bullet = new Bullet(this.ctx, inputs);
        bullet.renderBullet(this.xPosition, this.yPosition);
        this.arrayBullet.push(bullet);
        console.log(this.arrayBullet);

    }



    action(key) {
        if (key.aDown) {
            this.xPosition -= 0.6;
            if (key.sDown)
                this.yPosition += 0.6;
            else if (key.wDown)
                this.yPosition -= 0.6;
        } else if (key.dDown) {
            this.xPosition += 0.6;
            if (key.sDown) {
                this.yPosition += 0.6;
            } else if (key.wDown)
                this.yPosition -= 0.6;

        } else if (key.wDown)
            this.yPosition -= 0.6;
        else if (key.sDown) {
            this.yPosition += 0.6;
        }




    }


}