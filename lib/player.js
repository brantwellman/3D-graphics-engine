const Vector = require('./vector');
const Dimensions = require('./screen_dimensions');

class Player{
  constructor(loc, head, off, theta, phi){
    this.loc = loc;
    this.head = head; //unit length
    this.offset = off;
    this.momentum = new Vector(0,0,0);
    this.v = new Vector(0,0,1);
    this.shadow = loc.minus(head.scaledBy(off));
    this.u = this.v.cross(this.head);
    this.horizontalViewRange = theta;
    this.verticalViewRange = phi;
  }

  moveForward(){
    this.loc = this.loc.plus(this.head);
    this.shadow = this.loc.minus(this.head.scaledBy(this.offset));
  }

  moveBackward(){
    this.loc = this.loc.minus(this.head);
    this.shadow = this.loc.minus(this.head.scaledBy(this.offset));
  }

  updateVecs() {

  }

  rotateOnV(deg){
    this.head = this.head.rotateAround(this.v, deg).unit;
    this.u = this.v.cross(this.head);
  }

  rotateOnU(deg){
    this.head = this.head.rotateAround(this.u, deg).unit;
    this.v = this.head.cross(this.u);
  }

  rotateOnHead(deg){
    this.v = this.v.rotateAround(this.head, deg).unit;
    this.u = this.v.cross(this.head);
  }

  rotateAround(axis, deg){
    this.head = this.head.rotateAround(axis, deg).unit;
    this.v = this.v.rotateAround(axis, deg).unit;
    this.u = this.v.cross(this.head);
  }

  rotationAxisTowards(vector){
    return this.head.cross(vector);
  }

  maxY(){
    return this.offset*getTanDeg(this.horizontalViewRange);
  }

  maxZ(){
    return this.offset*getTanDeg(this.verticalViewRange);
  }

  scaleU(){
    return Dimensions.height/(2 * this.maxY());
  }

  scaleV(){
    return Dimensions.width/(2 * this.maxZ());
  }
}

function getTanDeg(deg) {
  var rad = deg * Math.PI/180;
  return Math.tan(rad);
}

module.exports = Player;
