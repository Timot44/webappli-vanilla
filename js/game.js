
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let x = 10
let y = 10
function gameLoop(){

    ctx.fillStyle = 'red'
    ctx.fillRect(x,10,100,100)
    x += 0.5


    ctx.fillStyle = "black"
    ctx.fillRect(y,10,200,200)
    y+= 0.5
}
setInterval(gameLoop, 1000/60)