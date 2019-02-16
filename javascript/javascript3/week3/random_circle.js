

// window.onload=draw();

// function draw(){
//     let canvasElement=document.getElementById('canvas')
//     let ctx=canvasElement.getContext('2d');

//     ctx.arc(200,200,100,0,Math.PI*2)
//     ctx.stroke();
//     ctx.fillStyle='blue';
//     ctx.fill();


// }


// ----------------------------------------------------------------------------------------------

// class Circle{
//      constructor(x, y, r, startAngle, endAngle, fillColor){
//          this.x=x;
//          this.y=y;
//          this.r=r;
//          this.startAngle=startAngle;
//          this.endAngle=endAngle;
//          this.fillColor=fillColor;

//      }
//      draw(){
//         const canvasElement=document.getElementById('canvas')
//         const ctx=canvasElement.getContext('2d');
//         ctx.beginPath();
//         ctx.arc(this.x,this.y,this.r,this.startAngle,this.endAngle)
//         ctx.fillStyle=this.fillColor;
//         ctx.fill();

//      }
// }

// const circle1=new Circle(200,200,100,0,44/7,'yellow')
// const circle2=new Circle(405,200,100,0,44/7,'blue')
// const circle3=new Circle(200,405,100,0,44/7,'red')
// const circle4=new Circle(410,410,100,0,44/7,'brown')

// circle1.draw()
// circle2.draw()
// circle3.draw()
// circle4.draw()


// ----------------------------------------------------------------------------


class Circle{
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x=x;
        this.y=y;
        this.r=r;
        this.startAngle=startAngle;
        this.endAngle=endAngle;
        this.fillColor=fillColor;

    }
    draw(){
       const canvasElement=document.getElementById('canvas')
       const ctx=canvasElement.getContext('2d');
       ctx.beginPath();
       ctx.arc(this.x,this.y,this.r,this.startAngle,this.endAngle)
       ctx.fillStyle=this.fillColor;
       ctx.fill();

    }


}


setInterval(()=>{
    circle=new Circle(Math.floor(Math.random()*700),Math.floor(Math.random()*700),Math.floor(Math.random()*40),0,Math.PI*2,`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`)
    circle.draw()
   

},100)






