// canvas setup
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(window.innerWidth, window.innerHeight);

let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
    x: null,
    y: null,
    click: false
}

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});
window.addEventListener('resize', function()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
canvas.addEventListener('mousedown', function(){
    mouse.click = true;
})
canvas.addEventListener('mouseup', function(){
    mouse.click = false;
})

let currentX = 0, currentY = 0;
let color = 'red';
function art()
{
    if(mouse.click === true){
        color = ctx.fillStyle = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)})`;
    }
    if(mouse.x != currentX && mouse.y != currentY){
        currentX = mouse.x; currentY = mouse.y;
        console.log(currentX, mouse.x, currentY, mouse.y);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(currentX, currentY, Math.random()*30, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
}

function animate()
{
    art();
    requestAnimationFrame(animate);
}
animate();