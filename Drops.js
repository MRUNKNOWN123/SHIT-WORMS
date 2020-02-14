class Drops
{
    constructor()
    {
        this.x=random(width);
        this.y=random(-100,-500);
        this.yspeed=random(2,5);
    }

    fall()
    {
        this.y=this.y+this.yspeed;

    }

    display()
    {
        stroke(250,200,100);
        strokeWeight(4);
        line(this.x,this.y,this.x,this.y+random(10,20));
        if(this.y>displayHeight-80)
        {
            this.y=random(-100,-300);
        }
    }
}

    
