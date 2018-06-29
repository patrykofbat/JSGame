class Zombie {


    constructor(ctx) {
        this.ctx = ctx;
        this.isDead = false;
        this.lifes = 115;
        this.color = "green";

    }

    renderZombie(x, y) {
        this.x = x;
        this.y = y;

        this.ctx.save();

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 13, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.restore();

    }

    checkCollsion(element) {
        let dX = (element.x - this.xPlayer);
        let dY = (element.y - this.yPlayer);
        let a = dY/dX;
        let b = element.y - a * element.x;
        let distance = Math.abs((-a * this.x) + this.y - b)/Math.sqrt(Math.pow(a,2)+1);

        if (distance < 13) {
            this.color = "red";
            this.lifes--;
        }
        if (this.lifes <= 0) {
            this.isDead = true;
        }


    }

    updateDirection(xPlayer, yPlayer) {
        this.xPlayer = xPlayer;
        this.yPlayer = yPlayer;
        let dY = (yPlayer - this.y);
        let dX = (xPlayer - this.x);
        let length = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));

        // wektor jednostowy pomonozy przez skalar
        let xStep = 0.4*(dX / length);
        let yStep = 0.4*(dY / length);

        this.x += xStep;
        this.y += yStep;

    }

    update(x, y) {
        this.updateDirection(x, y);
        // this.color = "green";
        this.renderZombie(this.x, this.y);
        let distanceToPlayer = Math.sqrt(Math.pow(this.x - this.xPlayer,2) + Math.pow(this.y - this.yPlayer,2));
        if(distanceToPlayer < 26)
            alert("Game over!");
    }
}