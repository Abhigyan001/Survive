import Phaser from 'phaser';

class SimpleEnemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene) {
    const coordX = Math.random() * 1363;
    super(scene, coordX, 15, 'enemy1');
    this.scene.add.existing(this);
    this.setScale(0.11);
    this.type = 'SimpleEnemy';
  }
}

export default SimpleEnemy;