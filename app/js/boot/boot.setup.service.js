'use strict';

mosquito.module('boot').service('bootSetupService', function(){
    this.setupDesktop = function(game){
        game.scale.pageAlignHorizontally = true;
    }
    this.setupMobile = function(game){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.minWidth = 500;
        game.scale.minHeight = 500;
        game.scale.maxWidth = 500;
        game.scale.maxHeight = 500;
        game.scale.forceOrientation(true);
        game.scale.pageAlignHorizontally = true;
        game.scale.setScreenSize(true);
    }
});
