/* Exercise 6.3
Create a program that will re-use the Rectangle class you created previously. 
It should generate 1000 random instances of Rectangle with random positions and sizes. 
Then it will display all colliding rectangles amongst those that were generated that way.*/

class Rectangle{
    constructor(topLeftXPos,topLeftYPos,width,length){
       this.topLeftXPos=topLeftXPos;
       this.topLeftYPos=topLeftYPos;
       this.width=width;
       this.length=length;
    }
       
   collides(otherRectangle){

    if(otherRectangle.topLeftXPos>this.topLeftXPos && otherRectangle.topLeftXPos<this.topLeftXPos+this.length && otherRectangle.topLeftYPos>this.topLeftYPos && otherRectangle.topLeftYPos<this.topLeftYPos+this.width){
        return true;
    } else if(otherRectangle.topLeftXPos+otherRectangle.length>this.topLeftXPos && otherRectangle.topLeftXPos+otherRectangle.length<this.topLeftXPos+this.length && otherRectangle.topLeftYPos+otherRectangle.width>this.topLeftYPos && otherRectangle.topLeftYPos+otherRectangle.width<this.topLeftYPos+this.width){
        return true;
    } else if(otherRectangle.topLeftXPos+otherRectangle.length>this.topLeftXPos && otherRectangle.topLeftXPos+otherRectangle.length<this.topLeftXPos+this.length && otherRectangle.topLeftYPos>this.topLeftYPos && otherRectangle.topLeftYPos<this.topLeftYPos+this.width){
        return true;
    } else if(otherRectangle.topLeftXPos>this.topLeftXPos && otherRectangle.topLeftXPos<this.topLeftXPos+this.length && otherRectangle.topLeftYPos+otherRectangle.width>this.topLeftYPos && otherRectangle.topLeftYPos+otherRectangle.width<this.topLeftYPos+this.width){
        return true;
    } else {
        return false;
    }

   }

}
let r1;
let r2;


let displayCollidingRectangles=function(r1,r2){
    for(var i=0;i<=1000;i++){
    r1=new Rectangle(Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100));
    r2=new Rectangle(Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100));

    if(r1.collides(r2)==true){
        console.log("The tow rectangles collide with each other: "+JSON.stringify(r1)+" and "+JSON.stringify(r2));
    }
 }
}

displayCollidingRectangles(r1,r2);





 