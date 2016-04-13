const P5 = require('./p5');
const Dimensions = require('./screen_dimensions');
const Player = require('./player');
const Vector = require('./vector');
const Edge = require('./edge');
const Point = require('./point');
// const PlayerControls = require('./player_controls');

var s = function(sketch) {
  var height = Dimensions.height;
  var width = Dimensions.width;
  sketch.setup = function() {
    sketch.frameRate(30);
    var cnv = sketch.createCanvas(height, width);
  };

  var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 45);

  // var controls = new PlayerControls(player);

  // var p1 = new Point(new Vector(100,0,0));
  // var p3 = new Point(new Vector(100,0,40));
  // var p2 = new Point(new Vector(100,0,80));
  // var p4 = new Point(new Vector(100,30,0));
  // var p5 = new Point(new Vector(100,30,40));
  // var p6 = new Point(new Vector(100,30,80));
  // var p7 = new Point(new Vector(100,-30,0));
  // var p8 = new Point(new Vector(100,-30,40));
  // var p9 = new Point(new Vector(100,-30,80));
  //
  // var p10 = new Point(new Vector(120,0,0));
  // var p11 = new Point(new Vector(120,0,40));
  // var p12 = new Point(new Vector(120,0,80));
  // var p13 = new Point(new Vector(120,30,0));
  // var p14 = new Point(new Vector(120,30,40));
  // var p15 = new Point(new Vector(120,30,80));
  // var p16 = new Point(new Vector(120,-30,0));
  // var p17 = new Point(new Vector(120,-30,40));
  // var p18 = new Point(new Vector(120,-30,80));
  //
  //
  // var points = [
  //               p1,
  //               p2,
  //               p3,
  //               p4,
  //               p5,
  //               p6,
  //               p7,
  //               p8,
  //               p9,
  //
  //               p10,
  //               p11,
  //               p12,
  //               p13,
  //               p14,
  //               p15,
  //               p16,
  //               p17,
  //               p18,
  //             ];
  // let points = []
  // Array.apply(null, Array(5)).forEach((e,i,c) => {
  //   Array.apply(null, Array(5)).forEach((e,j,c) => {
  //     Array.apply(null, Array(5)).forEach((e,k,c) => {
  //       points.push(new Point(new Vector(30*i, 30*j, 30*k)))
  //     })
  //   })
  // })



  var e = [];
  e[1] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(50,50,0)));
  e[2] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(50,0,50)));
  e[3] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(100,0,0)));
  e[4] = new Edge(new Point(new Vector(50,50,0)), new Point(new Vector(100,50,0)));
  e[5] = new Edge(new Point(new Vector(50,50,0)), new Point(new Vector(50,50,50)));
  e[6] = new Edge(new Point(new Vector(50,0,50)), new Point(new Vector(50,50,50)));
  e[7] = new Edge(new Point(new Vector(50,0,50)), new Point(new Vector(100,0,50)));
  e[8] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,50,0)));
  e[9] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,0,50)));
  e[10] = new Edge(new Point(new Vector(100,50,0)), new Point(new Vector(100,50,50)));
  e[11] = new Edge(new Point(new Vector(100,0,50)), new Point(new Vector(100,50,50)));
  e[12] = new Edge(new Point(new Vector(50,50,50)), new Point(new Vector(100,50,50)));

  sketch.draw = function(){
    sketch.background(0,0,0);
    sketch.stroke(255,255,255);
    sketch.fill(255,255,255);
    sketch.text(`player location: (${player.loc.x}, ${player.loc.y}, ${player.loc.z})`,0,10);
    sketch.text(`player heading: (${player.head.x}, ${player.head.y}, ${player.head.z})`,0,20);
    // sketch.text(`player shadow: (${player.shadow.x}, ${player.shadow.y}, ${player.shadow.z})`,0,30);
    sketch.stroke(29,250,0);
    sketch.strokeWeight(2);
    sketch.line(0, width/2 - 30, height,width/2 - 30);
    // points.forEach(function(point){
    //   if(point.isVisibleTo(player)){
    //     point.sketchRelativeTo(player, sketch);
    //   }
    // });
    e.forEach(function(edge){
      edge.sketchRelativeTo(player, sketch);
    });
  };


  sketch.keyPressed = function(){
    if(sketch.keyIsDown(87)){
      player.moveForward();
    }
    if(sketch.keyIsDown(83)){
      player.moveBackward();
    }
    if(sketch.keyIsDown(68)){
      player.rotateOnV(0.01);
    }
    if(sketch.keyIsDown(65)){
      player.rotateOnV(-0.01);
    }
    if(sketch.keyIsDown(79)){
      player.rotateOnU(0.01);
    }
    if(sketch.keyIsDown(76)){
      player.rotateOnU(-0.01);
    }
    if(sketch.keyIsDown(75)){
      player.rotateOnHead(0.05);
    }
    if(sketch.keyIsDown(186)){
      player.rotateOnHead(-0.05);
    }
    // if(sketch.key === "W"){
    //   player.moveForward();
    // }
    // if(sketch.key === "S"){
    //   player.moveBackward();
    // }
    // if(sketch.key === "D"){
    //   player.rotateOnV(0.01);
    // }
    // if(sketch.key === "A"){
    //   player.rotateOnU(-0.01);
    // }
    // if(sketch.key === "O"){
    //   player.rotateVertBy(0.01);
    // }
    // if(sketch.key === "L"){
    //   player.rotateVertBy(-0.01);
    // }
  //
    // player.updateVecs();
  };

};

var myP5 = new P5(s);
