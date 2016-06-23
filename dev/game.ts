/// <reference path="alien.ts" />
/// <reference path="cloud.ts" />
<<<<<<< HEAD
/// <reference path="coin.ts" />


=======
/// <reference path="../dist/js/jumping.js" />
>>>>>>> parent of 491324f... General Progress

class Game {
    
    private Alien:          Alien;
    private context:        CanvasRenderingContext2D;
    private canvas:         HTMLCanvasElement;
    private cloud:          Cloud;
    private cloud2:         Cloud;
    private background:     HTMLImageElement;
    public static grav:     number = 9.81;
    
    
    constructor() {
        // dddd
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.context = this.canvas.getContext('2d');
        
        
        
        
        this.cloud = new Cloud(50);
        this.cloud2= new Cloud(100);
        
        this.Alien = new Alien();
        
        requestAnimationFrame(() => this.update());    
    }
    
    private update() : void {
        this.Alien.move();
        
        this.draw();
    }
    
    private draw(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.context.fillStyle="#001188";
        this.context.fillRect(0,0,842,595);
        
        
        // teken hier de bg image
        this.background = new Image();
        this.background.src = 'images/background1.png';
        this.context.drawImage(this.background,0,0);       
        
        this.Alien.draw();
        
        requestAnimationFrame(() => this.update());
    }
} 



