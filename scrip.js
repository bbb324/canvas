/**
 * Created by junxie on 12/22/14.
 */

class editer {
  constructor(x, y) {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext('2d');
    this.colors = document.getElementById('colors');
    this.radius = 10;
    this.dragging = false;
    this.color = 'black';
    this.toolBar = document.getElementById('toolbar');
  }
  init() {
    let self = this;
    let barHeight = parseInt(window.getComputedStyle(this.toolBar).height);
    this.canvas.width = window.innerWidth;
    this.canvas.height = (window.innerHeight - barHeight - 10);
    this.context.lineWidth = this.adius * 2;
    this.canvas.addEventListener('touchstart', function(e) {
      self.engage(e);
    }, false);
    this.canvas.addEventListener('touchmove', function(e) {
      self.putPoint(e);
    }, false);
    this.canvas.addEventListener('touchend', function(e) {
      self.disengage(e)
    }, false);
    this.colors.addEventListener('click', function(e) {
      self.chooseColor(e);
    }, false);
  }
  engage(e) {
    this.dragging = true;
    this.context.strokeStyle = this.color;
    this.context.beginPath();
    this.putPoint(e.touches[0]);
  }
  disengage() {
    this.dragging = false;
    this.context.beginPath();
  }
  putPoint(e) {
    let x, y;
    if(e.touches != undefined) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    }
    else {
      x = e.clientX;
      y = e.clientY;
    }
    if(this.dragging) {
      this.context.strokeStyle = this.color;
      this.context.lineTo(x, y);
      this.context.stroke();
      this.context.beginPath();
      this.context.arc(x, y, this.radius, 0, Math.PI * 2);
      this.context.fill();
      this.context.fillStyle = this.color;
      this.context.beginPath();
      this.context.moveTo(x, y);
    }
  }
  chooseColor(e) {
    this.color = e.target.dataset.color;
  }

}
let _instance = new editer();
_instance.init();

