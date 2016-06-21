/**
 * Cloud
 */
class Cloud {
    private x:      number = 0;
    private y:      number = 0;
    private width:  number = 200;
    private height: number = 102;
    private speed:  number = 1;
    private image:  HTMLImageElement;
    private context:CanvasRenderingContext2D;
    
    constructor(y: number) {
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
    
    public update() : void {
        this.x += this.speed;
        this.checkCollision();
          
    }
    
    private checkCollision() : void {
        if (this.x > window.innerWidth) {
            this.x = 0 - this.width;
        }
    }
    
    public draw() : void {
         this.context.drawImage(this.image, this.x, this.y);
        
    }
    
    
    
}