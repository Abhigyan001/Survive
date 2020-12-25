class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMainMenu" });
  }

  preload() {
    this.load.image("sprBtnPlay", "../../dist/content/sprBtnPlay.png");
    this.load.image("sprBtnPlayHover", "../../dist/content/sprBtnPlayHover.png");
    this.load.image("sprBtnPlayDown", "../../dist/content/sprBtnPlayDown.png");
    this.load.image("sprBtnRestart", "../../dist/content/sprBtnRestart.png");
    this.load.image("sprBtnRestartHover", "../../dist/content/sprBtnRestartHover.png");
    this.load.image("sprBtnRestartDown", "../../dist/content/sprBtnRestartDown.png");

    this.load.audio("sndBtnOver", "../../dist/content/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "../../dist/content/sndBtnDown.wav");    
  }

  create() {
    this.scene.start("SceneMain");
  }
}