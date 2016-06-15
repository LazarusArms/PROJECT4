/// <reference path="alien.ts" />
/// <reference path="clouds.ts" />


class Game {
    
    private Alien: PIET PIRAAT;
    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    
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
        this.Alien.draw();
        
        requestAnimationFrame(() => this.update());
    }
} 



