class StartScene extends Phaser.Scene{
    constructor(){
        super('StartScene')
    }

    create(){
        this.start = this.add.image(0,0,'cenastart').setOrigin(0,0)

        setTimeout(()=>{
            this.add.text(450,500,'PRESS ENTER',{fontSize:'50px'}).setOrigin(0,0)

            this.input.keyboard.addKey('enter')
                .on('down',()=>{
                    this.scene.start('Scene01')
                })
        },1000)
        
        
    }

    upload(){
        
    }
        
    




}
