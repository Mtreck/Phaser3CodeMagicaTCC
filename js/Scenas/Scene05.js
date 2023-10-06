class Scene05 extends Phaser.Scene{
    constructor(){
        super('Scene05')
    }

    create(){
        this.fundo = this.add.image(0,500,'fundo04')
        .setOrigin(0)
        this.fundo.displayWidth = 2000
        this.fundo.displayHeight = 1500
       

        this.plataformas = this.physics.add.staticGroup()
        this.plataformas.create(0,2000,'plataforma04-2')
        .setScale(1,1)
        .setOrigin(0,1) 
        .refreshBody()
        this.plataformas.create(900,2000,'plataforma04-2')
        .setScale(1,1)
        .setOrigin(0,1) 
        .refreshBody()
       
       
      


        .refreshBody()
 

                //vidas--------------
                let vida5 = this.add.image(150,40,'vida-5')
                .setScale(0.3,0.3)
                .setScrollFactor(0)

                let vida4 = this.add.image(150,40,'vida-4')
                .setScale(0.3,0.3)
                .setScrollFactor(0)
                .setVisible(false)

                let vida3 = this.add.image(150,40,'vida-3')
                .setScale(0.3,0.3)
                .setScrollFactor(0)
                .setVisible(false)

                let vida2 = this.add.image(150,40,'vida-2')
                .setScale(0.3,0.3)
                .setScrollFactor(0)
                .setVisible(false)

                let vida1 = this.add.image(150,40,'vida-1')
                .setScale(0.3,0.3)
                .setScrollFactor(0)
                .setVisible(false)

                let vida0 = this.add.image(150,40,'vida-0')
                .setScale(0.3,0.3)
                .setScrollFactor(0)
                .setVisible(false)
              //vidas--------------


        //player ---------------------------------------------
        this.player = this.physics.add.sprite(150,1880,'player')
        .setCollideWorldBounds(true)
        .setScale(1.5,1.5)
        .setBounce(0.2)
        this.player.body.setSize(30)
        this.player.vida = 5;
        this.player.canJump = true

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
               end: 5
           }),
           frameRate: 6,
           repeat: -1
        }) 
        this.player.parado = true
        //não esta funcionando
        this.anims.create({
           key: 'jump',
           frames: this.anims.generateFrameNumbers('jump', {
               start: 0,
               end: 6
           }),
           frameRate: 6,
           repeat: -1
        }) 
        this.player.Pulo = true

        //não esta funcionando
        this.anims.create({
           key: 'ataque',
           frames: this.anims.generateFrameNumbers('ataque', {
               start: 0,
               end: 5
           }),
           frameRate: 4,
           repeat: -1
        }) 
        //player ---------------------------------------------
                //icon bola de fogo----------------------------------------------
                this.iconfogo = this.add.image(330,40,'iconfogo')
                .setScale(1.5)
                .setScrollFactor(0)
                .setVisible(true)
                
                this.iconcol = this.add.image(330,40,'iconcol')
                    .setScale(1.5)
                    .setScrollFactor(0)
                    .setVisible(false)

                //icon bola de fogo----------------------------------------------

                 //BOLA DE FOGO ---------------------------------- 
                        this.bolafogo = this.physics.add.sprite(2400,750,'bola-fogo')
                        .setScale(2,2)
                        .setVisible(false);
                        this.bolafogo.body.setSize(16,16)
                    
                            this.anims.create({
                                key: 'fogo',
                                frames: this.anims.generateFrameNumbers('bola-fogo', {
                                    start: 0,
                                    end: 9
                                }),
                                frameRate: 5,
                                repeat: -1
                            })  
                            
                            this.physics.add.overlap(this.bolafogo, this.plataformas, function() {
                                this.time.delayedCall(0, function() {
                                    this.bolafogo.setVelocity(0);
                                    this.bolafogo.setVisible(false);
                                    this.bolafogo.setPosition(10, 850);
                                }, [], this);   
                            }, null, this);
                //comando para soltar a bola de fogo -----------------------
                            
                            this.timeLastFired = 0; // definir o tempo inicial como zero
                            this.input.keyboard.addKey('z').on('down', () => {
                                this.iconfogo.setVisible(false)
                                this.iconcol.setVisible(true)
                            const timeNow = this.time.now;
                                if (timeNow > this.timeLastFired + 2000) { // 2000 ms = 2 segundos
                                    setTimeout(()=>{
                                    this.iconfogo.setVisible(true)
                                    this.iconcol.setVisible(false)
                                },2000)
                                    this.bolafogo.anims.play('fogo', true);
                                    this.bolafogo.setVisible(true);
                                    this.bolafogo.setPosition(this.player.x, this.player.y - 5);
                                    if (this.player.flipX) { // jogador olhando para a esquerda
                                        this.bolafogo.setVelocityX(-950);
                                        this.bolafogo.setGravity(-1000);
                                    } else { // jogador olhando para a direita
                                        this.bolafogo.setVelocityX(2000);
                                        this.bolafogo.setGravity(-1000);
                                    
                                    
                                    }
                                    
                                    this.timeLastFired = timeNow; // atualizar o tempo da última vez que a bola de fogo foi lançada
                                }
                            });
                            
                //comando para soltar a bola de fogo -----------------------

                //BOLA DE FOGO ---------------------------------- 


        //CONTROLES------------------------------------------  
        this.control = this.input.keyboard.createCursorKeys();
        //CONTROLES------------------------------------------ 

         //Colisões----------------------------------------------

         this.physics.add.collider(this.player, this.plataformas)
         this.physics.add.collider(this.bolafogo, this.plataformas)
        
        
        // coliider------------------------------------------

        //Configurações -----------------------------
        this.physics.world.setBounds(0,0,2000,2000)
             
        this.cameras.main.startFollow(this.player).setBounds(0,0,2000,2000)

        this.gameOver = false
       //Configurações -----------------------------
      


       
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
                this.player.setVelocityX(250)
                this.player.anims.play('andar',true)
    
            } else {
                this.player.setVelocityX(0)
                // iniciar a animação 'parado'
                this.player.anims.play('parado',true);
             
            } 
            if (this.control && this.control.up && this.player.canJump && this.player.body.touching.down && this.control.up.isDown) {
                //setVelocity = defini a altura do pulo.
                this.player.setVelocityY(-620)
                this.player.canJump = false
             
              }
    
            if(!this.control.up.isDown && !this.player.canJump && this.player.body.touching.down){
                this.player.canJump = true
    
                
                
            }    
    
        }   
    
    
    
    
    
    
    
    
    
    
    
    }

}