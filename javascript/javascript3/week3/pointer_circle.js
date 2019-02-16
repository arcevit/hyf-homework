


class Circle{

    constructor(mouseX,mouseY, r, startAngle, endAngle, fillColor){
   
        this.mouseX=mouseX;
        this.mouseY=mouseY;
        this.r=r;
        this.startAngle=startAngle;
        this.endAngle=endAngle;
        this.fillColor=fillColor;

    }
    draw(){
       const canvasElement=document.getElementById('canvas')
       const ctx=canvasElement.getContext('2d');
       ctx.beginPath();
       ctx.arc(this.mouseX,this.mouseY,this.r,this.startAngle,this.endAngle)
       ctx.fillStyle=this.fillColor;
       ctx.fill();
    }

}


   function pointerCircle(mousevent) {
        mouseX=mousevent.clientX;
        mouseY=mousevent.clientY;
        const circle1=new Circle(mouseX,mouseY,20,0,Math.PI*2,`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`)
        circle1.draw()     
     }


    const canvasElement=document.getElementById('canvas')
    canvasElement.addEventListener("mousemove",pointerCircle)

    

