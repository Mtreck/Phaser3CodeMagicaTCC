class Scene04 extends Phaser.Scene{

    constructor(){

        super('Scene04')
    }


    create(){
       
         this.forest = this.add.image(0,0,'fundo-floresta').setOrigin(0,0)

         
         this.forest.displayWidth = 1480
         this.forest.displayHeight = 800

       
       
         this.player = this.physics.add.sprite(100,600,'player')
            .setOrigin(0)
             //O comando setCollideWorldBounds(true) faz que o objeto definido (player) que colida com as bordas definidas
             .setCollideWorldBounds(true)
             //Esté outro comando muda a dimensão do objeto(no meu caso nao)
             .setScale(1.5,1.5)
             //Faz o objeto quikar, vlaores acima de 1 fazem ele kikar muito, então sempre usar vlaores abaixo de 1, a não ser em casos que precisa fazer obejtos pularem muito
             .setBounce(0.2)

             //permite o objeto neste caso (player) pule
             this.player.canJump = true
             //ajusta a hitBox do objeto   
             this.player.body.setSize(45)
             
             
            this.anims.create({
                key: 'andar',
                frames: this.anims.generateFrameNumbers('player', {
                    start: 0,
                    end: 7
                }),
                frameRate: 8,
                repeat: -1
             })  
             this.anims.create({
                key: 'parado',
                frames: this.anims.generateFrameNumbers('player-parado', {
                    start: 0,
                    end: 6
                }),
                frameRate: 3,
                repeat: -1
             })  
       

            


         

             //Este metodo cria um objeto que controla os eventos disparados pelas setas do teclado
          this.control = this.input.keyboard.createCursorKeys()  
          
          
          this.plataformas = this.physics.add.staticGroup()

          this.plataformas.create(-60,800,'plataforma-01')
          .setScale(1.2,1)
          .setOrigin(0,1) 
          .refreshBody()

         


          
          this.physics.add.collider(this.player, this.plataformas)
     
        
     
          this.physics.world.setBounds(0,0,3000,800)

         
          this.cameras.main.startFollow(this.player)
          .setBounds(0,0,3000,800)

          this.gameOver = false

        
    }





    

    
    update(){

      
        if(!this.gameOver){
        
        if(this.control.left.isDown){
            this.player.flipX = true
            this.player.anims.play('andar',true)
            
            this.player.setVelocityX(-250)
        } else
        if(this.control.right.isDown){
            this.player.flipX = false
            this.player.anims.play('andar',true)
            this.player.setVelocityX(250)
        } else {
           
            this.player.setVelocityX(0)
            this.player.anims.play('parado',true)
            
        }

  

        if(this.control.up.isDown && this.player.canJump && this.player.body.touching.down){
            //setVelocity = defini a altura do pulo.
            this.player.setVelocityY(-640)
            this.player.canJump = false

            this.player.play('jump',true)
        } 

        if(!this.control.up.isDown && !this.player.canJump && this.player.body.touching.down){
            this.player.canJump = true
          
        } 
        //----------------------------------------------   
     }
        
    }
    

}