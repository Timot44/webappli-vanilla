
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0
let y = 0
let directionHorizontal = true
let directionVertical = true

var img = new Image()
img.src = 'img/dvd.png';

function gameLoop(){

    ctx.fillStyle = "white"
    ctx.fillRect(0,0, canvas.width = screen.width, canvas.height = screen.height)
    
    ctx.fillStyle = 'red'
    ctx.fillRect(x,y,100 ,100)
  
    ctx.drawImage(img,x,y,img.width,img.height)
    
    if(directionHorizontal){
        x+=3
       

    }else
    {
        x-=3
        
    }
    if(directionVertical){
        y+=3

    }
    else{

        y-=3
    }
   
    if(x>screen.width-100||  x<0){
        directionHorizontal = !directionHorizontal
    }
    else if(y>screen.height-100|| y<0){
        directionVertical = !directionVertical
    }
}

function rect_draw(){

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    this.x += this.dx
    this.y += this.dy
}
img.onload = function() {
    setInterval(gameLoop, 1000/60)
}

function rect_create(x,y,w,h,color,dx,dy){

let obj = {

    x:x,
    y:y,
    w:w,
    h:h,
    color:color,
    dx:dx,
    dy:dy
}
return obj

}