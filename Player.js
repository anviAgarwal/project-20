class Player {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.spt=createSprite(this.x,this.y,50,50);
        this.spt.shapeColor="pink";
    }
        move(xdir,ydir){
            this.spt.x+=xdir*grid;
            this.spt.y+=xdir*grid;
        }
         moveRight(){
     this.spt.x=this.spt.x+12;
        }
        moveLeft(){
            this.spt.x=this.spt.x-12;
        }
        moveUp(){
            this.spt.y=this.spt.y-12;
        }
        moveDown(){
            this.spt.y=this.spt.y+12;
        }
    }
       
    
