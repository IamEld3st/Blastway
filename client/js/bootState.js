var Blastway = Blastway || {};
 
Blastway.Boot = function(){};
 
//setting game configuration and loading the assets for the loading screen
Blastway.Boot.prototype = {
  preload: function() {
   //assets we'll use in the loading screen
    this.load.image('PhaserLogo', 'client/assets/img/phaser_logo.png');
    this.load.image('preloadbar', 'client/assets/img/preloader-bar.png');
  },
  create: function() {
   //loading screen will have a white background
    this.game.stage.backgroundColor = '#767789';
 
    //scaling options
 this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 this.scale.minWidth = 240;
 this.scale.minHeight = 170;
 this.scale.maxWidth = 2880;
 this.scale.maxHeight = 1920;
 
 //have the game centered horizontally
 this.scale.pageAlignHorizontally = true;
 
 //screen size will be set automatically
 this.scale.setScreenSize(true);
 
 //physics system for movement
 this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.state.start('Preload');
  }
};

