'use strict';

mosquito.module('boot').controller('bootController', ['bootSetupService', function(bootSetupService){
    this.preload = function() {
        this.load.image('muuvyte', 'assets/image.jpg');
    }

    this.create = function() {
        this.game.input.maxPointers = 1;
        if (this.game.device.desktop) {
            bootSetupService.setupDesktop(this.game);
        } else {
            bootSetupService.setupMobile(this.game);
        }
        this.game.state.start('game');
    }
}]);
