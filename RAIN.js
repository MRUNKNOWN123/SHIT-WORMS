var Drop=[100];

function setup()
{
    canvas=createCanvas(displayWidth-20,displayHeight-80);
    
   for(var i=0;i<1000;i++)
    {
        Drop[i]=new Drops()

    }

    

    
}

function draw()
{
    background(0);

   for(var i=0;i<Drop.length;i++)
    {
        Drop[i].fall();
        Drop[i].display();


    }
    
}