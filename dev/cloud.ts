/**
 * Cloud
 */
class Cloud {
    private x:      number = 0;
    private y:      number = 0;
    private width:  number = 414;
    private height: number = 86;
    private speed:  number = 3;
    public cloudTag: HTMLElement;
    
    constructor(y: number) {
        console.log('Hoi');
        this.cloudTag = document.createElement("cloud");
        document.body.appendChild(this.cloudTag);
        
        this.x = 0 - this.width;
        // this.y is de y die gebruikt wordt in heel de class (of object)
        // y is de waarde die binnenkomt (vanuit game)
        this.y = y;
          
    }
    
    public update (): void {
        this.x += this.speed;
        this.checkCollision();
    }
    
    private checkCollision(): void {
        if (this.x > window.innerWidth) {
            this.x = 0;
        }
    }
    
    public draw () : void {
        this.cloudTag.style.transform = 
            "translate ("+this.x+"px, "+this.y+"px)";
            
    }
    
    
}