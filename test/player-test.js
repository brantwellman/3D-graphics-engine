const chai = require('chai');
const assert = chai.assert;
const Player = require('../lib/player');
const Vector = require('../lib/vector');
// const Booty = require('../lib/booty');

describe('Player', function(){
  context('Player functionality', function() {
    var location = new Vector(0,0,0);
    var heading = new Vector(0,1,0);

    it('should compute shadow location', function(){
      var player = new Player(location, heading, 5);

      assert(player.shadow.equals(new Vector(0,-5,0)));
    });

    it('should compute u axis from heading and v', function(){
      var player = new Player(location, heading, 5);
      assert(player.u.equals(new Vector(-1,0,0)));
    });

    it('should compute in game view port size', function(){
      var player = new Player(location, heading, 5, 45, 30);
      assert.equal(5, Math.round(player.maxY()));
      assert.equal(5*(Math.sqrt(3))/3, player.maxZ());
    });

    it('can rotate on v', function(){
      var player = new Player(location, heading, 5, 45, 30);
      player.rotateOnV(0.2);
      assert(player.head.y < 1);
      assert(player.head.x < 0);
      assert(player.head.z === 0);
      assert(player.v.equals(new Vector(0,0,1)));
    });

    it('can rotate on head', function(){
      var player = new Player(location, heading, 5, 45, 30);
      player.rotateOnHead(0.2);
      assert(player.v.z < 1);
      assert(player.v.x > 0);
      assert(player.head.equals(new Vector(0,1,0)));
    });

    it('can rotate on u', function(){
      var player = new Player(location, heading, 5, 45, 30);
      player.rotateOnU(0.2);
      assert(player.head.z < 0);
      assert(player.head.y < 1);
      assert(player.u.equals(new Vector(-1,0,0)));
    });
  });
});
