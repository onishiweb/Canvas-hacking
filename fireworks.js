/**
 * Represents a single point, so the firework being fired up
 * into the air, or a point in the exploded firework
 */
 /*
var Particle = function(pos, target, vel, marker, usePhysics) {
 
  // properties for animation
  // and colouring
  this.GRAVITY  = 0.06;
  this.alpha    = 1;
  this.easing   = Math.random() * 0.02;
  this.fade     = Math.random() * 0.1;
  this.gridX    = marker % 120;
  this.gridY    = Math.floor(marker / 120) * 12;
  this.color    = marker;
 
  this.pos = {
    x: pos.x || 0,
    y: pos.y || 0
  };
 
  this.vel = {
    x: vel.x || 0,
    y: vel.y || 0
  };
 
  this.lastPos = {
    x: this.pos.x,
    y: this.pos.y
  };
 
  this.target = {
    y: target.y || 0
  };
 
  this.usePhysics = usePhysics || false;
 
};
*/
function random (min, max, wholeNumber) {
  wholeNumber = wholeNumber || 0;
  var rand = (Math.random() * (max - min + wholeNumber)) + min;
  return wholeNumber ? ~~rand : rand;
}


// Big ol' <3'z to Paul Irish because, you know,
// he's like a brother from another mother and stuff.
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 24);
          };
})();

var theCanvas = document.getElementById("mycanvas"),
    cHeight = theCanvas.height,
    cWidth = theCanvas.width,
    mainContext = theCanvas.getContext("2d");

/**
 * Clears out the canvas with semi transparent
 * black. The bonus of this is the trails effect we get
 */
function clearContext() {
  mainContext.fillStyle = "#fff";
  mainContext.fillRect(0, 0, 400, 400);
}

var parX = cWidth / 2,
    parY = cHeight / 2,
    parHeight = 10,
    parWidth = 10,
    velX = random(-5, 5),
    velY = random(-5, 5);

function drawParticle () {
    mainContext.fillStyle = "#ff0000";
    mainContext.fillRect(parX, parY, parHeight, parWidth); 

    parX += velX;
    parY += velY;
}

function update() {
  clearContext();
  requestAnimFrame(update);
  drawParticle();
}

update();