class PreScene04 extends Phaser.Scene{
    constructor(){
        super('PreScene04')
    }

    create(){
        this.musica = this.sound.add('audio-fundo4', {
            loop: true, // defina como verdadeiro se você deseja que a música seja executada em loop
            volume: 0.1 // defina o volume da música (entre 0 e 1)
        });
        this.musica.play();

        
        this.fundo04 = this.add.image(0,0,'fundo-04')
        .setOrigin(0)
        this.fala1 = this.add.image(480,320,'fase4-fala1')
        .setOrigin(0.5)
        .setScale(0.8)
        .setVisible(true)
        this.fala2 = this.add.image(780,670,'fase4-fala2')
        .setOrigin(0.5)
        .setScale(0.8)
        .setVisible(true)
        this.fala3 = this.add.image(480,300,'fase4-fala3')
        .setOrigin(0.5)
        .setScale(0.8)
        .setVisible(false)
        this.fala4 = this.add.image(780,670,'fase4-fala4')
        .setOrigin(0.5)
        .setScale(0.8)
        .setVisible(false)
        this.fala5 = this.add.image(600,400,'fase4-fala5')
        .setOrigin(0.5)
        .setScale(0.9)
        .setVisible(false)
        this.fala6 = this.add.image(600,400,'fase4-fala6')
        .setOrigin(0.5)
        .setScale(0.9)
        .setVisible(false)

        this.input.keyboard.on('keydown-ENTER', () => {
          if (this.fala1.visible) {
            this.fala1.setVisible(false);
            this.fala2.setVisible(false);
            this.fala3.setVisible(true);
            this.fala4.setVisible(true);
            this.fala5.setVisible(false);
          } else if (this.fala3.visible) {
            this.fala1.setVisible(false);
            this.fala2.setVisible(false);
            this.fala3.setVisible(false);
            this.fala4.setVisible(false);
            this.fala5.setVisible(true);
          } else if(this.fala5.visible){
            this.fala1.setVisible(false);
            this.fala2.setVisible(false);
            this.fala3.setVisible(false);
            this.fala4.setVisible(false);
            this.fala5.setVisible(false);
            this.fala6.setVisible(true);

          }else if(this.fala6.setVisible){
            this.musica.stop();
            this.scene.start('Scene04')
          }
        });
        
      

      

       
    }

    update(){
     
    }
}