/**
 * Created by junxie on 12/22/14.
 */


var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var radius=10;

var dragging=false;

canvas.width = window.screen.width;
canvas.height = window.screen.height;

context.lineWidth=radius*2;

var putPoint = function(e)
{
  let x, y;
  if(e.touches!=undefined) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  } else {
    x = e.clientX;
    y = e.clientY;
  }
    if(dragging) {
        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.moveTo(x, y);
    }
}

var engage = function(e)
{
    dragging = true;
    putPoint(e.touches[0]);
}

var disengage = function()
{
    dragging = false;
    context.beginPath();
}


canvas.addEventListener('touchstart', engage);
canvas.addEventListener('touchmove', putPoint);
canvas.addEventListener('touchend', disengage);

