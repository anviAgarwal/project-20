class Player {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.spt=createSprite(this.x,this.y,50,50);
        this.spt.shapeColor="pink";
    }
        move(xdir,ydir){
           this.spt.x+=xdir*grid;
            this.spt.y+=ydir*grid;
        }
      // bottomGrassdepth=carGroup1.depth;
    }
       
    
