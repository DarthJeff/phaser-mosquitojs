'use strict';

mosquito.module('phaserGame', []);

mosquito.module('phaserGame').controller('phaserGameController', ['$setup', function($setup){

    $setup.config(500, 500, Phaser.AUTO, 'mosquito-game');

    $setup.addStates(['boot', 'game']);

    $setup.start('boot');
}]);

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

mosquito.module('phaserGame').factory('$state', ['$game', function($game){
    return $game.state;
}]);




mosquito.module('boot', ['phaserGame']);
mosquito.module('game', ['phaserGame']);



window.addEventListener('load', function() {
    'use strict';

    mosquito.module('phaserGame').controller('phaserGameController')
}, false);
