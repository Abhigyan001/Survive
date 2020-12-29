import Phaser from 'phaser';
import highScore from '../assets/high-score.png';
import playBtn from '../assets/playbtn.png';

class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'Menu' });
  }

  preload() {
    this.load.image('highScore', highScore);
    this.load.image('playBtn', playBtn);
  }

  create() {
    this.playBtn = this.physics.add.sprite(660, 300, 'playBtn').setScale(0.8);
    this.score = this.physics.add.sprite(660, 440, 'highScore').setScale(0.8);

    this.playBtn.setInteractive().on('pointerdown', function startScene() {
      this.scene.start('MainScene');
    },
    this);

    this.score.setInteractive().on('pointerdown', function startScene() {
      this.scene.start('ScoresScene');
    },
    this);
  }
}

export default Menu;