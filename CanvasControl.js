class CanvasControl {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.player = new Player(200, 200, this.ctx);
        this.inputs = {
            aDown: false,
            sDown: false,
            dDown: false,
            wDown: false,
            mouseX: null,
            mouseY: null
        };
        this.zombie = new Zombie(this.ctx);
        this.zombiePool = [];



    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.player.renderPlayer(this.inputs);
    }

    start() {
        this.player.renderPlayer(this.inputs);
        // this.zombie.renderZombie(500, 500);
        let zombieSpawn = setInterval(()=>{
            let newZombie = new Zombie(this.ctx);
            newZombie.renderZombie(Math.random() * this.canvas.width, Math.random() *this.canvas.height);
            console.log(`x ${Math.random() * this.canvas.width} y ${Math.random() *this.canvas.height}`);
            this.zombiePool.push(newZombie);
        }, 1000);


        document.addEventListener("keydown", (event) => {
            if (event.key === "a")
                this.inputs.aDown = true;
            if (event.key === "s")
                this.inputs.sDown = true;
            if (event.key === "d")
                this.inputs.dDown = true;
            if (event.key === "w")
                this.inputs.wDown = true;
        });

        document.addEventListener("keyup", (event) => {
            if (event.key === "a")
                this.inputs.aDown = false;
            if (event.key === "s")
                this.inputs.sDown = false;
            if (event.key === "d")
                this.inputs.dDown = false;
            if (event.key === "w")
                this.inputs.wDown = false;

        });

        document.addEventListener("mousemove", (event) => {
            this.inputs.mouseX = event.clientX - this.canvas.getBoundingClientRect().left;
            this.inputs.mouseY = event.clientY - this.canvas.getBoundingClientRect().top;


        });

        document.addEventListener("mousedown", (event) => {
            this.player.shoot(this.inputs);
        });
        document.addEventListener("resize", this.resizeCanvas);



        let gameLoop = setInterval(()=>{
            this.update();


        }, 1.5);

    }

    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.action(this.inputs);
        this.player.update(this.inputs);
        this.player.arrayBullet.forEach(element => {
            this.zombiePool.forEach(zombie =>{
                zombie.checkCollsion(element);
            });
        });
        this.zombiePool.forEach(zombie =>{
            if(!zombie.isDead)
                zombie.update(this.player.xPosition, this.player.yPosition);
        });
        // if (!(this.zombie.isDead))
        //     this.zombie.update(this.player.xPosition, this.player.yPosition);


    }


}