
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



let x = 0
let y = 0
let moveX = 3
let moveY = 3

var img = new Image()
img.src = 'img/dvd.png';


var ongoingTouches = [];



  
function gameLoop(){

    ctx.fillStyle = "white"
    ctx.fillRect(0,0, canvas.width = screen.width, canvas.height = screen.height)
    
    ctx.fillStyle = 'red'
    ctx.fillRect(x,y,100 ,100)
  
    //ctx.drawImage(img,x,y,100,100)
    
      
    if(x+moveX >= canvas.width-100 || x+moveX <= 0){
        moveX *= -1;
    }
    if(y+moveY >= canvas.height-100 || y+moveY <= 0){
        moveY *= -1;
    }
    x+=moveX;
    y+=moveY;

  

}
img.onload = function() {
    setInterval(gameLoop, 1000/60)
}

    




