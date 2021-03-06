
'use strict';

var Ships = function (state) {
    Phaser.Group.call(this, state.game);
};

//Documentation for Phaser's (2.6.2) group:: phaser.io/docs/2.6.2/Phaser.Group.html
Ships.prototype = Object.create(Phaser.Group.prototype);

// prefab initialization and construction
Ships.prototype.constructor = Ships;

// Update needed, called automatically by phaser as it's a child of the state.
Ships.prototype.update = function() {
    for (var i = 0, len = this.children.length; i < len; i++) {
        this.children[i].update();
    }
};

module.exports = Ships;
