/* Exercise 6.2
Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and lenght.
 Add a method named collides(otherRectangle) that returns true only if the current rectangle 
 collides with otherRectangle.

Test the collides(otherRectangle) method by using multiple test cases.*/

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
//true
console.log(new Rectangle(8,8,3,6).collides(new Rectangle(9,5,5,4)));
//false
console.log(new Rectangle(7,8,5,9).collides(new Rectangle(9,5,2,4)));
//true
console.log(new Rectangle(8,8,3,6).collides(new Rectangle(3,4,5,6)));
//true
console.log(new Rectangle(8,8,3,6).collides(new Rectangle(3,9,5,6)));
//false
console.log(new Rectangle(15,7,12,25).collides(new Rectangle(3,9,5,6)));





// second try: doesn't work ...
/* let r1= new Rectangle(8,8,3,6);
let r2= new Rectangle(9,5,5,4);

let collides = function(){

    if(r2.topLeftXPos>r1.topLeftXPos && r2.topLeftXPos<r1.topLeftXPos+r1.length && r2.topLeftYPos>r1.topLeftYPos && r2.topLeftYPos<r1.topLeftYPos+r1.width){
        return true;
    } else if(r2.topLeftXPos+r2.length>r1.topLeftXPos && r2.topLeftXPos+r2.length<r1.topLeftXPos+r1.length && r2.topLeftYPos+r2.width>r1.topLeftYPos && r2.topLeftYPos+r2.width<r1.topLeftYPos+r1.width){
        return true;
    } else {
        return false;
    } 

}

console.log(collildes(r1,r2)); */


//first try : doesn't work
/* let otherRectangle=new Rectangle(topLeftXPos2,topLeftYPos2,width2,length2);
    collides(otherRectangle){
        if(topLeftXPos2>r1.topLeftXPos && topLeftXPos2<r1.topLeftXPos+r1.length && topLeftYPos2>r1.topLeftYPos && topLeftYPos2<r1.topLeftYPos+r1.width){
            return true;
        } else if(topLeftXPos2+length2>r1.topLeftXPos && topLeftXPos2+length2<r1.topLeftXPos+r1.length && topLeftYPos2+width2>r1.topLeftYPos && topLeftYPos2+width2<r1.topLeftYPos+r1.width){
            return true;
        } else {
            return false;
        }
    }

let rectangle1= new Rectangle(8,8,3,6);
rectangle1.collides(new Rectangle(9,5,5,4)); */
 