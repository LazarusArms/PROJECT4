/// <reference path="alien.ts" />
/// <reference path="cloud.ts" />
/// <reference path="coin.ts" />



class Game {
    
    private Alien:          Alien;
    private context:        CanvasRenderingContext2D;
    private canvas:         HTMLCanvasElement;
    private background:     HTMLImageElement;
    public static grav:     number = 9.81;
    public static width:    number  = 842;
    public static height:   number  = 595;
    
    private cloud : Cloud;
    private cloud2: Cloud;
    private cloud3: Cloud;
    
    
    constructor() {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.context = this.canvas.getContext('2d');
        
        this.Alien = new Alien();
        
        this.cloud = new Cloud(50);
        this.cloud2= new Cloud(100);
        this.cloud3= new Cloud(200);
        
        requestAnimationFrame(() => this.update());    
    }
    
    private update() : void {
        //character beweegt met knoppen.
        this.Alien.move();
        //character heeft collision met ondergrond.
        this.Alien.checkCollision();
        this.Alien.y += Game.grav;
        //wolken bewegen over het scherm.
        this.cloud.update();
        this.cloud2.update(); 
        this.cloud3.update();
        this.draw();
    }
    
    private draw(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.context.fillStyle="#001188";
        this.context.fillRect(0,0, Game.width, Game.height);
        
        
        // teken hier de bg image
        this.background = new Image();
        this.background.src = 'images/background1.png';
        this.context.drawImage(this.background,0,0);       
        
        this.Alien.draw();
        
        this.cloud.draw();
        this.cloud2.draw();
        this.cloud3.draw();
        
        requestAnimationFrame(() => this.update());
    }
} 



