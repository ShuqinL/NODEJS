/* Exercise 6.1
Create a class named Circle with attributes xPos, yPos and radius. Add a method named move
(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface 
that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.*/

class Circle{
    constructor(xPos,yPos,radius){
       this.xPos=xPos;
       this.yPos=yPos;
       this.radius=radius;
    }
    move(xOffset,yOffset){
        this.xPos=this.xPos-xOffset;
        this.yPos=this.yPos-yOffset;
        console.log("New position of circle: "+this.xPos+", "+this.yPos);
    }
    get surface(){
        return this.radius*this.radius*3.1415926;
    }
}

let circle1=new Circle(8,9,2);
console.log("Surface of circle: "+circle1.surface);
circle1.move(1,3);