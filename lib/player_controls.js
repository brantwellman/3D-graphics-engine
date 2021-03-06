class PlayerControls{
  constructor(player) {
    this.player = player;
    this.dict = {
      w: 87,
      a: 65,
      d: 68,
      s: 83,
      f: 70,
      o: 79,
      l: 76,
      k: 75,
      j: 74,
      g: 71,
      ";": 186,
      "shift": 16,
      "space": 32
    };
  }

  control(sketch){
    if(sketch.keyIsDown(this.dict["w"])){
      this.player.moveForward();
    }
    if(sketch.keyIsDown(this.dict["s"])){
      this.player.moveBackward();
    }
    if(sketch.keyIsDown(this.dict["a"])){
      this.player.rotateOnV(-0.05);
    }
    if(sketch.keyIsDown(this.dict["d"])){
      this.player.rotateOnV(0.05);
    }
    if(sketch.keyIsDown(this.dict["l"])){
      this.player.rotateOnU(-0.05);
    }
    if(sketch.keyIsDown(this.dict["o"])){
      this.player.rotateOnU(0.05);
    }
    if(sketch.keyIsDown(this.dict["k"])){
      this.player.rotateOnHead(0.05);
    }
    if(sketch.keyIsDown(this.dict[";"])){
      this.player.rotateOnHead(-0.05);
    }
    if(sketch.keyIsDown(this.dict["shift"])){
      this.player.momentum = this.player.momentum.scaledBy(14/15);
    }
    if(sketch.keyIsDown(this.dict["j"])){
      this.player.rotateTowardsClosestEntity(this.booty, 0.05);
    }
    if(sketch.keyIsDown(this.dict["f"])){
      this.player.rotateTowardsMomentum(0.1);
    }
    if(sketch.keyIsDown(this.dict["g"])){
      this.player.health = 0;
    }
    if(sketch.keyIsDown(this.dict["space"])){
      if(this.timer > this.player.rate){
        this.player.fire(this.bullets);
        this.timer = 0;
      }
    }

    this.player.updateVecs();
    this.timer++;
  }
}

module.exports = PlayerControls;
