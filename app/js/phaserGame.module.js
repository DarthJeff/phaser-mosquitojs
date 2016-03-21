'use strict';

mosquito.module('phaserGame', []);

mosquito.module('phaserGame').provider('$setup', function(){
    var game;
    this.$get = function() {
        return {
            getGame: function(){
                return game;
            },
            config: function(width, height, renderer, parent, state, transparent, antialias, physicsConfig){
                game = new Phaser.Game(width, height, renderer, parent, state, transparent, antialias, physicsConfig);
            },
            addStates: function(states){
                for(var i = 0; i < states.length; i++){
                    game.state.add(states[i], mosquito.module(states[i]).controller(states[i] + 'Controller'))
                }
            },
            start: function(state){
                game.state.start(state);
            }
        };
    }
});

mosquito.module('phaserGame').service('$game', ['$setup', function($setup){
    return $setup.getGame();
}]);

mosquito.module('phaserGame').factory('$add', ['$game', function($game){
    return $game.add;
}]);

mosquito.module('phaserGame').factory('$make', ['$game', function($game){
    return $game.make;
}]);

mosquito.module('phaserGame').factory('$camera', ['$game', function($game){
    return $game.camera;
}]);

mosquito.module('phaserGame').factory('$cache', ['$game', function($game){
    return $game.cache;
}]);

mosquito.module('phaserGame').factory('$input', ['$game', function($game){
    return $game.input;
}]);

mosquito.module('phaserGame').factory('$load', ['$game', function($game){
    return $game.load;
}]);

mosquito.module('phaserGame').factory('$math', ['$game', function($game){
    return $game.math;
}]);

mosquito.module('phaserGame').factory('$sound', ['$game', function($game){
    return $game.sound;
}]);

mosquito.module('phaserGame').factory('$scale', ['$game', function($game){
    return $game.scale;
}]);

mosquito.module('phaserGame').factory('$state', ['$game', function($game){
    return $game.state;
}]);

mosquito.module('phaserGame').factory('$stage', ['$game', function($game){
    return $game.stage;
}]);

mosquito.module('phaserGame').factory('$time', ['$game', function($game){
    return $game.time;
}]);

mosquito.module('phaserGame').factory('$tweens', ['$game', function($game){
    return $game.tweens;
}]);

mosquito.module('phaserGame').factory('$world', ['$game', function($game){
    return $game.world;
}]);

mosquito.module('phaserGame').factory('$particles', ['$game', function($game){
    return $game.particles;
}]);

mosquito.module('phaserGame').factory('$rnd', ['$game', function($game){
    return $game.rnd;
}]);

mosquito.module('phaserGame').factory('$physics', ['$game', function($game){
    return $game.physics;
}]);

mosquito.module('phaserGame').factory('$key', ['$game', function($game){
    return $game.key;
}]);
