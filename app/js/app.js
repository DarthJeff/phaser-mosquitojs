'use strict';

mosquito.module('boot', []);
mosquito.module('game', []);

window.addEventListener('load', function() {
    'use strict';

    var game = new Phaser.Game(500, 500, Phaser.AUTO, 'mosquito-game');
    game.state.add('boot', mosquito.module('boot').controller('bootController'));
    game.state.add('game', mosquito.module('game').controller('gameController'));

    game.state.start('boot');
}, false);
