class Scene02 extends Phaser.Scene{
    constructor(){
        super('Scene02')
  
    
    }
 

    create(){
  
        this.musicaFase2 = this.sound.add('audio-fundo2', {
            loop: true, // defina como verdadeiro se você deseja que a música seja executada em loop
            volume: 0.1 // defina o volume da música (entre 0 e 1)
        });
        this.musicaFase2.play();
        



        this.control = this.input.keyboard.createCursorKeys();

        this.fundo = this.add.image(0,0,'bg1').setOrigin(0,0)
        this.fundo.displayWidth = 1280
        this.fundo.displayHeight = 1000

      
        this.plataformas = this.physics.add.staticGroup()
        this.plataformas.create(0,800,'plataforma1')
        .setScale(1.5,1)
        .setOrigin(0,1) 
        .refreshBody()
    
        this.plataformas.create(1100,600,'plataforma1')
        .setScale(0.3,1)
        .refreshBody()
        .refreshBody();

        this.plataformas.create(300,470,'plataforma1')
        .setScale(0.9,1)
        .refreshBody()
        .refreshBody();
        
        this.plataformas.create(1200,270,'plataforma1')
        .setScale(0.9,1)
        .refreshBody()
        .refreshBody();
        
        //-----------------------cenario-----
        this.lanterna1 = this.add.image(100,315,'lanterna')
        .setScale(0.5)
        this.lanterna1.setFlipX(true)

        this.carca1 = this.add.image(38,686,'cerca1')
        .setScale(0.7,0.7)
        this.carca2 = this.add.image(120,686,'cerca2')
        .setScale(0.7,0.7)
       
         //cercas 2
        this.carca2 = this.add.image(582,392,'cerca2')
        .setScale(0.7,0.7)
        this.carca3 = this.add.image(660,392,'cerca3')
        .setScale(0.7,0.7)


         //--------------Mochila--------------------------------------
        
         this.mochila = this.add.image(150 , 300, 'mochila')
         .setVisible(false)
         .setScale(0.7, 0.7);


        //---------------------Dialogos----------

        this.dialogo1 = this.add.image(500, 100, 'dialogo2-1')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo2 = this.add.image(500, 100, 'dialogo2-2')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo3 = this.add.image(500, 100, 'dialogo2-3')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo4 = this.add.image(500, 100, 'dialogo2-4')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo5 = this.add.image(500, 100, 'dialogo2-5')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo6 = this.add.image(500, 100, 'dialogo2-6')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo7 = this.add.image(500, 100, 'dialogo2-7')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo8 = this.add.image(500, 100, 'dialogo2-8')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo9 = this.add.image(500, 100, 'dialogo2-9')
        .setVisible(false)
        .setScale(1.5, 1.5);


        //----------------------variavel----------------
        //box1
        this.box = this.physics.add.sprite(550,645,'box')
        .setCollideWorldBounds(true)
        .setVisible(false)
        .setScale(0.5)
        .setSize(0.5)
        this.box.body.setSize(130,390)
        //box2
        this.box2 = this.physics.add.sprite(400,265,'box')
      
        .setVisible(false)
        .setScale(0.5)
        .setSize(0.5)
        this.box2.body.setSize(130,120)


         //box1-img
        this.box_img1 = this.add.image(40,250,'box1')
        .setVisible(false)
        .setScale(0.5)
        .setSize(0.5)
         //box1-img
        this.box_img2 = this.add.image(40,350,'box2')
        .setVisible(false)
        .setScale(0.5)
        .setSize(0.5)

         //box1-img-fogo
         this.box_chama = this.add.image(40,250,'box1_chama')
         .setVisible(false)
         .setScale(0.5)
         .setSize(0.5)
        //box2-img-ar
         this.box_ar = this.add.image(40,350,'box2_ar')
         .setVisible(false)
         .setScale(0.5)
         .setSize(0.5)

        //-----------------chama---------------------------
        this.chama = this.physics.add.sprite(1150,500,'chama')
         .setScale(0.6)
         .setVisible(false)
         
         this.anims.create({
            key: 'chama',
            frames: this.anims.generateFrameNumbers('chama', {
                start: 0,
                end: 6
            }),
            frameRate: 5,
            repeat: -1
         })  
         this.chama.anims.play('chama',true);

        //-----------------ar---------------------------
          this.ar = this.physics.add.sprite(1100,145,'ar')
         .setScale(0.6)
         .setVisible(false)
         
         this.anims.create({
            key: 'ar',
            frames: this.anims.generateFrameNumbers('ar', {
                start: 0,
                end: 6
            }),
            frameRate: 5,
            repeat: -1
         })  
         this.ar.anims.play('ar',true);



    
       
        //-----------------CAT---------------------------
         this.cat2_1 = this.physics.add.sprite(250,745,'cat')
         .setCollideWorldBounds(true)
         .setImmovable(true)
         .setOrigin(1)
         .setScale(2)
         .setSize(5)
         this.cat2_1.body.setSize(30,90,)

         
         this.anims.create({
            key: 'cat-idle',
            frames: this.anims.generateFrameNumbers('cat', {
                start: 0,
                end: 3
            }),
            frameRate: 3,
            repeat: -1
         })  
         this.cat2_1.anims.play('cat-idle',true);
         this.cat2_1.setFlipX(true);

        //-----------------CAT2---------------------------
           this.cat2_2 = this.physics.add.sprite(1100,745,'cat')
           .setCollideWorldBounds(true)
           .setImmovable(true)
           .setOrigin(1)
           .setScale(2)
           .setSize(5)
           .setVisible(false)
           this.cat2_2.body.setSize(30,90,)
   
           
           this.anims.create({
               key: 'cat-idle',
               frames: this.anims.generateFrameNumbers('cat', {
                   start: 0,
                   end: 3
               }),
               frameRate: 3,
               repeat: -1
           })  
           this.cat2_2.anims.play('cat-idle',true);
           this.cat2_2.setFlipX(true);
     







        //------------------Player---------------------------
            

        this.player = this.physics.add.sprite(100,600,'player')
             .setCollideWorldBounds(true)
             .setScale(1.5,1.5)
             .setBounce(0.2)
            
             
             this.player.body.setSize(45)
             
             
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
                    end: 6
                }),
                frameRate: 5,
                repeat: -1
             })  
             this.player.anims.play('parado',true);
       

            
            this.control = this.input.keyboard.createCursorKeys();
            
            
        
            //---------------colisão player-cat-------------------------------
           
            this.physics.add.overlap(this.player, this.cat2_1, function () {
                // Quando houver uma colisão, tornar o diálogo1 visível
                this.dialogo1.setVisible(true);
                this.box.setVisible(true);
            
                this.input.keyboard.addKey('enter').on('down', () => {
                    this.dialogo1.setVisible(false);
                });
            }, null, this);

           

            //---------------colisão player-box-------------------------------
        
            this.physics.add.overlap(this.player,this.box, function ()  { 
                this.mochila.setVisible(true)
                if(!this.dialogo1.visible){
                    this.dialogo1.setVisible(false)
                    this.dialogo2.setVisible(true)
                    this.box.setX(2000)
                    this.box_img1.setVisible(true)
                    this.input.keyboard.addKey('enter').on('down', () => {
                        this.dialogo2.setVisible(false)
                        this.dialogo3.setVisible(true)
                       
                    if(!this.dialogo1.visible){
                        this.input.keyboard.addKey('enter').on('down', () => {
                            this.dialogo3.setVisible(false)
                            this.chama.setVisible(true)
                        });
                    }
                    
                    });
                }
              
             },null,this);

        
            //---------------colisão player-chama-------------------------------
        
            this.physics.add.overlap(this.player,this.chama, function ()  { 
                    this.chama.setX(2000)
                    this.box_img1.setVisible(false)
                    this.box_chama.setVisible(true)
                    this.chama.setVisible(false)
                    this.box2.setVisible(true)
                    this.dialogo4.setVisible(true)
    
                    this.input.keyboard.addKey('enter').on('down', () => {
                        this.dialogo3.setVisible(false)
                        this.dialogo4.setVisible(false)
    
                    });
                
             
            },null,this);

            //---------------colisão player-box2-------------------------------
        
            this.physics.add.overlap(this.player,this.box2, function ()  { 
                if(!this.dialogo1.visible && !this.dialogo2.visible && !this.dialogo3.visible){
                    this.box_img2.setVisible(true)
                    this.box2.setX(2000)
                    this.ar.setVisible(true)
                    this.input.keyboard.addKey('enter').on('down', () => {
                        
                    });
                }
              
             },null,this);
             //---------------colisão player-ar-------------------------------
             this.physics.add.overlap(this.player,this.ar, function ()  { 
                if(!this.dialogo4.visible){
                    this.ar.setX(2000)
                    this.box_ar.setVisible(true)
                    this.dialogo5.setVisible(true)
                    this.input.keyboard.addKey('enter').on('down', () => {
                        this.dialogo5.setVisible(false)
                        if(!this.dialogo5.visible){
                            this.dialogo6.setVisible(true)
                            this.cat2_2.setVisible(true)
                            this.cat2_1.destroy() 
                            }
                        this.input.keyboard.addKey('enter').on('down', () => {
                             this.dialogo6.setVisible(false)
                            this.dialogo7.setVisible(true)
                         })
                        if(this.dialogo7.visible){
                            this.input.keyboard.addKey('enter').on('down', () => {
                               this.dialogo7.setVisible(false)
                            }) 
                        }
                        this.physics.add.overlap(this.player,this.cat2_2, function ()  { 
                            if(!this.dialogo7.visible){
                                this.dialogo8.setVisible(true)
                                this.input.keyboard.addKey('enter').on('down', () => {
                                    this.dialogo8.setVisible(false)
                                    this.dialogo9.setVisible(true)
                                    setTimeout(() => {
                                        this.scene.start('Scene03'); // Correção: Adicione os parênteses aqui
                                    }, 3000); // 10 segundos (10000 milissegundos)
                                });
                            }
                          
                         },null,this);
                            
                        

                    });
                }
              
            },null,this);
           
          
          
           
      
            
            //------------------colisões----------------------------

             this.physics.add.collider(this.player, this.plataformas)
             this.physics.add.collider(this.box, this.plataformas)
             this.physics.add.collider(this.box2, this.plataformas)
             this.physics.add.collider(this.cat2_1, this.plataformas)
             this.physics.add.collider(this.chama, this.plataformas)
             this.physics.add.collider(this.ar, this.plataformas)
             this.physics.add.collider(this.player, this.chama)
             this.physics.add.collider(this.player, this.ar)

            
             this.physics.world.setBounds(0,0,1280,800)

             this.cameras.main.startFollow(this.player)
             .setBounds(0,0,1280,800)
           

   
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
            // iniciar a animação 'parado'
            this.player.anims.play('parado',true);
         
        }

        

        if (this.control && this.control.up && this.player.canJump && this.player.body.touching.down && this.control.up.isDown) {
            //setVelocity = defini a altura do pulo.
            this.player.setVelocityY(-640)
            this.player.canJump = false
           
          }

        if(!this.control.up.isDown && !this.player.canJump && this.player.body.touching.down){
            this.player.canJump = true
        } 
        //----------------------------------------------   
                         
        }
      
    }

}