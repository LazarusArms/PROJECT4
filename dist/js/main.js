class Alien {
    constructor(g) {
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
        let framesPerSecond = 3;
        this.animationSpeed = 60 / framesPerSecond;
        this.x = 0;
        this.y = 350;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    createCanvasElement() {
        var canvas = document.getElementsByTagName("canvas")[0];
        this.context = canvas.getContext('2d');
        this.image = new Image();
        this.image.src = 'images/alien1.png';
    }
    onKeyDown(event) {
        switch (event.keyCode) {
            case 38:
                this.directionY = 0;
                this.animationY = 0;
                this.y;
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
        if (this.x + 100 > this.) {
            this.directionX == 0;
        }
    }
    draw() {
        this.timer++;
        if (this.timer > this.animationSpeed) {
            this.currentFrame++;
            this.timer = 0;
        }
        if (this.currentFrame > 7) {
            this.currentFrame = 0;
        }
        console.log(this.x + "," + this.y);
        this.context.drawImage(this.image, this.currentFrame * this.frameWidth, this.animationY * this.frameHeight, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);
    }
}
class Cloud {
    constructor(y) {
        this.x = 0;
        this.y = 0;
        this.width = 414;
        this.height = 86;
        this.speed = 3;
        console.log('Hoi');
        this.cloudTag = document.createElement("cloud");
        document.body.appendChild(this.cloudTag);
        this.x = 0 - this.width;
        this.y = y;
    }
    update() {
        this.x += this.speed;
        this.checkCollision();
    }
    checkCollision() {
        if (this.x > window.innerWidth) {
            this.x = 0;
        }
    }
    draw() {
        this.cloudTag.style.transform =
            "translate (" + this.x + "px, " + this.y + "px)";
    }
}
class Game {
    constructor() {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.context = this.canvas.getContext('2d');
        this.cloud = new Cloud(50);
        this.cloud2 = new Cloud(100);
        this.Alien = new Alien();
        requestAnimationFrame(() => this.update());
    }
    update() {
        this.Alien.move();
        this.draw();
    }
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "#001188";
        this.context.fillRect(0, 0, 842, 595);
        this.background = new Image();
        this.background.src = 'images/background1.png';
        this.context.drawImage(this.background, 0, 0);
        this.Alien.draw();
        requestAnimationFrame(() => this.update());
    }
}
Game.grav = 9.81;
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map