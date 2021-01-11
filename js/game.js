
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);

function gameLoop(){

    console.log("Hello !")
}
setInterval(gameLoop, 1000)