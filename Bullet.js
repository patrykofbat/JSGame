class Bullet {

    constructor(ctx, inputs) {
        this.ctx = ctx;
        this.inputs = inputs;

    }

    renderBullet(x, y) {
        this.x = x;
        this.y = y;

        let dY = (this.inputs.mouseY - this.y);
        let dX = (this.inputs.mouseX - this.x);
        let length = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));

        // wektor jednostowy pomonozy przez skalar
        this.xStep = 20 * (dX / length);
        this.yStep = 20 * (dY / length);

        this.ctx.save();

        this.ctx.beginPath();
        this.ctx.arc(this.x += this.xStep, this.y += this.yStep, 3, 0, 2 * Math.PI);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.restore();
    }

    update() {
        if (!(this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0)) {

            this.ctx.save();

            this.ctx.beginPath();
            this.ctx.arc(this.x += this.xStep, this.y += this.yStep, 3, 0, 2 * Math.PI);
            this.ctx.fillStyle = "yellow";
            this.ctx.fill();
            this.ctx.stroke();

            this.ctx.restore();
        }
    }

}