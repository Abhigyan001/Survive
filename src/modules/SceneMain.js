class SceneMain extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMain" });
  }
  
  preload() {
    this.load.image("sprBg0", "../../dist/content/sprBg0.png");
    this.load.image("sprBg1", "../../dist/content/sprBg1.png");
    this.load.spritesheet("sprExplosion", "../../dist/content/sprExplosion.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet("sprEnemy0", "../../dist/content/sprEnemy0.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.image("sprEnemy1", "content/sprEnemy1.png");
    this.load.spritesheet("sprEnemy2", "../../dist/content/sprEnemy2.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.image("sprLaserEnemy0", "../../dist/content/sprLaserEnemy0.png");
    this.load.image("sprLaserPlayer", "../../dist/content/sprLaserPlayer.png");
    this.load.spritesheet("sprPlayer", "../../dist/content/sprPlayer.png", {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.audio("sndExplode0", "../../dist/content/sndExplode0.wav");
    this.load.audio("sndExplode1", "../../dist/content/sndExplode1.wav");
    this.load.audio("sndLaser", "../../dist/content/sndLaser.wav");
  }



  create() {
    
    this.anims.create({
      key: "sprEnemy0",
      frames: this.anims.generateFrameNumbers("sprEnemy0"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "sprEnemy2",
      frames: this.anims.generateFrameNumbers("sprEnemy2"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "sprExplosion",
      frames: this.anims.generateFrameNumbers("sprExplosion"),
      frameRate: 20,
      repeat: 0
    });

    this.anims.create({
      key: "sprPlayer",
      frames: this.anims.generateFrameNumbers("sprPlayer"),
      frameRate: 20,
      repeat: -1
    });
    
    this.sfx = {
      explosions: [
        this.sound.add("sndExplode0"),
        this.sound.add("sndExplode1")
      ],
      laser: this.sound.add("sndLaser")
    };

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprPlayer"
    );
    
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.time.addEvent({
      delay: 1000,
      callback: function() {
        var enemy = new GunShip(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0
        );
        this.enemies.add(enemy);
      },
      callbackScope: this,
      loop: true
    });
  }

  update() {
    this.player.update();

    if (this.keyW.isDown) {
      this.player.moveUp();
    }
    else if (this.keyS.isDown) {
      this.player.moveDown();
    }

    if (this.keyA.isDown) {
      this.player.moveLeft();
    }
    else if (this.keyD.isDown) {
      this.player.moveRight();
    }
  }
}