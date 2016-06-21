class Alien {
    constructor() {
        this.directionX = 0;
        this.directionY = 0;
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.currentFrame = 0;
        this.animationX = 0;
        this.animationY = 0;
        this.animationSpeed = 0;
        this.frameHeight = 119;
        this.frameWidth = 92;
        this.timer = 0;
        this.createCanvasElement();
        this.directionX = 0;
        this.directionY = 0;
        this.speed = 5;
        let framesPerSecond = 10;
        this.animationSpeed = 60 / framesPerSecond;
        this.x = 0;
        this.y = 0;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    createCanvasElement() {
        var canvas = document.getElementsByTagName("canvas")[0];
        this.context = canvas.getContext('2d');
        this.image = new Image();
        this.image.src = 'images/alien1.png';
    }
    checkCollision() {
        if (this.y > Game.height - 250) {
            this.y = Game.height - 250;
        }
    }
    onKeyDown(event) {
        switch (event.keyCode) {
            case 38:
                this.directionY = 0;
                this.animationY = 0;
                break;
            case 39:
                this.directionX = 1;
                this.animationY = 0;
                break;
            case 40:
                this.directionY = 1;
                this.animationY = 0;
                break;
            case 37:
                this.directionX = -1;
                this.animationX = 7;
                this.animationY = 1;
                break;
        }
    }
    onKeyUp(event) {
        switch (event.keyCode) {
            case 38:
                this.directionY = 0;
                break;
            case 39:
                if (this.directionX == 1) {
                    this.directionX = 0;
                }
                break;
            case 40:
                this.directionY = 0;
                break;
            case 37:
                if (this.directionX == -1) {
                    this.directionX = 0;
                }
                break;
        }
    }
    move() {
        this.x = this.x + this.speed * this.directionX;
        this.y = this.y + this.speed * this.directionY;
    }
    draw() {
        if (this.directionX == 1) {
            this.timer++;
            if (this.timer > this.animationSpeed) {
                this.currentFrame++;
                this.timer = 0;
            }
            if (this.currentFrame > 7) {
                this.currentFrame = 0;
            }
        }
        if (this.directionX == -1) {
            this.timer++;
            if (this.timer > this.animationSpeed) {
                this.currentFrame--;
                this.timer = 0;
            }
            if (this.currentFrame < 0) {
                this.currentFrame = 7;
            }
        }
        console.log(this.currentFrame);
        console.log(this.x + "," + this.y);
        this.context.drawImage(this.image, this.currentFrame * this.frameWidth, this.animationY * this.frameHeight, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);
    }
}
class Cloud {
    constructor(y) {
        this.x = 0;
        this.y = 0;
        this.width = 200;
        this.height = 102;
        this.speed = 1;
        console.log('Constructor Tree');
        var canvas = document.getElementsByTagName("canvas")[0];
        this.context = canvas.getContext('2d');
        this.image = new Image();
        this.image.src = 'images/cloud9.png';
        this.x = 0 - this.width;
        this.y = y;
        console.log(this.y);
        this.speed = 10 * Math.random();
    }
    update() {
        this.x += this.speed;
        this.checkCollision();
    }
    checkCollision() {
        if (this.x > window.innerWidth) {
            this.x = 0 - this.width;
        }
    }
    draw() {
        this.context.drawImage(this.image, this.x, this.y);
    }
}
class Game {
    constructor() {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.context = this.canvas.getContext('2d');
        this.Alien = new Alien();
        this.cloud = new Cloud(50);
        this.cloud2 = new Cloud(100);
        this.cloud3 = new Cloud(200);
        requestAnimationFrame(() => this.update());
    }
    update() {
        this.Alien.move();
        this.Alien.checkCollision();
        this.Alien.y += Game.grav;
        this.cloud.update();
        this.cloud2.update();
        this.cloud3.update();
        this.draw();
    }
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "#001188";
        this.context.fillRect(0, 0, Game.width, Game.height);
        this.background = new Image();
        this.background.src = 'images/background1.png';
        this.context.drawImage(this.background, 0, 0);
        this.Alien.draw();
        this.cloud.draw();
        this.cloud2.draw();
        this.cloud3.draw();
        requestAnimationFrame(() => this.update());
    }
}
Game.grav = 9.81;
Game.width = 842;
Game.height = 595;
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map