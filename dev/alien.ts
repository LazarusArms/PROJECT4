/**
 * Alien
 */
class Alien {
    
    private directionX: number = 0;
    private directionY: number = 0;

    private x: number = 0;
    private y: number = 0;
    
    private speed: number = 0;
    
    private context: CanvasRenderingContext2D;
    private image: HTMLImageElement;
    
    private currentFrame: number    = 0;
    private animationX: number      = 0;
    private animationY: number      = 0;
    private animationSpeed: number  = 0;
    
    private frameHeight: number     = 119;
    private frameWidth: number      = 92;
    
    private timer: number           = 0;
    
    constructor() {
        this.createCanvasElement();
        
        this.directionX = 0;
        this.directionY = 0;
        this.speed      = 5;
        
        // het aantal beeldjes per seconde is nu 3
        let framesPerSecond = 3;
        this.animationSpeed  = 60 / framesPerSecond;
        
         this.x = 0;
         this.y = 350;
      
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup"  , (e) => this.onKeyUp(e));
    }
    
    private createCanvasElement() : void {
        var canvas = document.getElementsByTagName("canvas")[0];
        this.context = canvas.getContext('2d');

        this.image = new Image();   // Create new img element
        this.image.src = 'images/alien1.png'; // Set source path
        
    }
    
    // keyboard input zorgt dat de snelheid wordt aangepast
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 38: //UP
                this.directionY = -1;
                this.animationY = 0; 
                break;
            case 39: //RIGHT
                this.directionX = 1;
                this.animationY = 0;
                break;
            case 40: //DOWN
                this.directionY = 1;
                this.animationY = 0;
                break;
            case 37: //LEFT
                this.directionX = -1;
                this.animationX =  7;
                this.animationY =  1; 
                break;
        }
    }
    
    // speed op 0 alleen als de eigen keys zijn losgelaten
    private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 38: //UP
                this.directionY = 0;
                break;
                
            case 39: //RIGHT
            if (this.directionX == 1) {       
                this.directionX = 0;
            }
                break;
                
            case 40: //DOWN
                this.directionY = 0;
                break;
                
            case 37: //LEFT
                if (this.directionX == -1) {       
                this.directionX = 0;
            }
                break;
        }
    }
    
    public move() : void {
        this.x = this.x + this.speed * this.directionX;
        this.y = this.y + this.speed * this.directionY;
    }
    
    
    public draw(): void {
        // this.context.drawImage(this.image, this.x, this.y, 400, 308); // x, y, width, height
        /**
         * img	Source image object	Sprite sheet
            sx	Source x	Frame index times frame width
            sy	Source y	0
            sw	Source width	Frame width
            sh	Source height	Frame height
            dx	Destination x	0
            dy	Destination y	0
            dw	Destination width	Frame width
            dh	Destination height	Frame height
         */
        //this.currentFrame++;  
        
       
        
        
        // this.timer--;
        //      if(this.animationSpeed > this.timer){
        //      this.currentFrame = 7;      
        //      this.currentFrame--;
        //      this.timer = 7;
        //     }
            
        //     if (this.currentFrame < 0 ) {
        //         this.currentFrame = 7;
        //     }
         
        this.timer++;
            if(this.timer > this.animationSpeed){
                this.currentFrame++;
                this.timer = 0;
            }
            
            if (this.currentFrame > 7   ) {
                this.currentFrame = 0;
            }
        
        
        
        console.log(this.x + "," +this.y);
        
        
        this.context.drawImage(
            this.image,
            this.currentFrame * this.frameWidth,
            this.animationY * this.frameHeight,
            this.frameWidth,
            this.frameHeight,
            this.x,
            this.y,
            this.frameWidth,
            this.frameHeight
        );
        
    }
}