class Scene01 extends Phaser.Scene{
    constructor(){
        super('Scene01')
  
    
    }
 

    create(){
        
        this.control = this.input.keyboard.createCursorKeys();

        this.fundo = this.add.image(0,0,'bg1').setOrigin(0,0)
        this.fundo.displayWidth = 2000
        this.fundo.displayHeight = 1000
        

        this.plataformas = this.physics.add.staticGroup()
        this.plataformas.create(0,800,'plataforma1')
        .setScale(1.5,1)
        .setOrigin(0,1) 
        .refreshBody()
        this.plataformas.create(500,800,'plataforma1')
        .setScale(1.5,1)
        .setOrigin(0,1) 
        .refreshBody()
        //---------------------Cenario----------
         //tendas - casa 1
         this.tenda1 = this.add.image(240,640,'tenda1')
         .setScale(0.7,0.7)
         this.tenda2 = this.add.image(410,640,'tenda2')
         .setScale(0.7,0.7)

        //tendas - casa 2
        this.tenda1 = this.add.image(1352,640,'tenda1')
        .setScale(0.7,0.7)
        this.tenda2 = this.add.image(1522,640,'tenda2')
        .setScale(0.7,0.7)

        //fogao
        this.fogao = this.add.image(340,670,'fogao')
         .setScale(0.4)

        //ferramentas
        this.ferramentas = this.add.image(220,630,'ferramenta')
        .setScale(0.3)

        //carroca
        this.carroca = this.add.image(810,630,'carroca')
        .setScale(0.8)

        //poço
        this.poco = this.add.image(1000,610,'poço')
        .setScale(0.5)

        //poção
         this.pocao1 = this.add.image(1370,645,'poçao1')
         .setScale(0.3)
         this.pocao1 = this.add.image(1400,645,'poçao2')
         .setScale(0.3)

        //set
        this.peito = this.add.image(1450,648,'peito')
        .setScale(0.4)
        this.pocao1 = this.add.image(1490,648,'cabeça')
        .setScale(0.4)


        //mesa
         this.mesa = this.add.image(1390,693,'mesa1')
         .setScale(0.6)
         this.mesa = this.add.image(1450,693,'mesa2')
         .setScale(0.6)
         this.mesa = this.add.image(1520,693,'mesa1')
         .setScale(0.6)
         this.mesa = this.add.image(1590,693,'mesa2')
         .setScale(0.6)
        //lanterna
        this.lanterna1 = this.add.image(100,610,'lanterna')
        .setScale(0.5)
        this.lanterna1.setFlipX(true)

        this.lanterna1 = this.add.image(600,610,'lanterna')
        .setScale(0.5)
        this.lanterna1.setFlipX(false)

        this.lanterna3 = this.add.image(1200,610,'lanterna')
        .setScale(0.5)
        this.lanterna1.setFlipX(true)

        this.lanterna1 = this.add.image(1600,610,'lanterna')
        .setScale(0.5)
        this.lanterna1.setFlipX(false)

        //cercas 1 - casa1
        this.carca1 = this.add.image(38,686,'cerca1')
        .setScale(0.7,0.7)
        this.carca2 = this.add.image(120,686,'cerca2')
        .setScale(0.7,0.7)
        this.carca3 = this.add.image(200,686,'cerca3')
        .setScale(0.7,0.7)
         //cercas 2- casa1
        this.carca1 = this.add.image(500,686,'cerca1')
        .setScale(0.7,0.7)
        this.carca2 = this.add.image(582,686,'cerca2')
        .setScale(0.7,0.7)
        this.carca3 = this.add.image(660,686,'cerca3')
        .setScale(0.7,0.7)

        //cercas 1 - casa2
        this.carca1 = this.add.image(1150,686,'cerca1')
        .setScale(0.7,0.7)
        this.carca2 = this.add.image(1238,686,'cerca2')
        .setScale(0.7,0.7)
        this.carca3 = this.add.image(1318,686,'cerca3')
        .setScale(0.7,0.7)
         //cercas 2- casa2
        this.carca1 = this.add.image(1612,686,'cerca1')
        .setScale(0.7,0.7)
        this.carca2 = this.add.image(1694,686,'cerca2')
        .setScale(0.7,0.7)
        this.carca3 = this.add.image(1774,686,'cerca3')
        .setScale(0.7,0.7)


        this.barril = this.physics.add.image(1700,645,'barril')
        .setScale(0.6)
        
      
      
      

        //---------------------Dialogos----------

        this.dialogo1 = this.add.image(1300, 200, 'dialogo1')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo2 = this.add.image(1250, 100, 'dialogo2')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo4 = this.add.image(1250, 100, 'dialogo4')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo5 = this.add.image(1250, 100, 'dialogo5')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo6 = this.add.image(1250, 100, 'dialogo6')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo7 = this.add.image(1250, 100, 'dialogo7')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo8 = this.add.image(1250, 100, 'dialogo8')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo9 = this.add.image(1250, 100, 'dialogo9')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo10 = this.add.image(1250, 100, 'dialogo10')
        .setVisible(false)
        .setScale(1.5, 1.5);
        this.dialogo11 = this.add.image(1300, 200, 'dialogo11')
        .setVisible(false)
        .setScale(1.5, 1.5);


       
        //-----------------CAT---------------------------
         this.cat1 = this.physics.add.sprite(1740,615,'cat')
         .setCollideWorldBounds(true)
         .setOrigin(1)
         .setScale(2)
         .setSize(5)
         this.cat1.body.setSize(30,90,)

         
         this.anims.create({
            key: 'cat-idle',
            frames: this.anims.generateFrameNumbers('cat', {
                start: 0,
                end: 3
            }),
            frameRate: 3,
            repeat: -1
         })  
         this.cat1.anims.play('cat-idle',true);
         this.cat1.setFlipX(true);

        



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

            
      
             
           
            this.physics.add.overlap(this.player,this.cat1, function ()  { 
                    this.dialogo1.setVisible(true)

                this.input.keyboard.addKey('enter').on('down', () => {   this.dialogo1.destroy()
                    this.dialogo2.setVisible(true)

                            this.input.keyboard.addKey('enter').on('down', () => {   this.dialogo2.destroy()
                                this.dialogo4.setVisible(true)

                                    this.input.keyboard.addKey('enter').on('down', () => {   this.dialogo4.destroy()
                                        this.dialogo5.setVisible(true)

                                            this.input.keyboard.addKey('enter').on('down', () => {   this.dialogo5.destroy()
                                                this.dialogo6.setVisible(true)  

                                                    this.input.keyboard.addKey('enter').on('down', () => {   this.dialogo6.destroy()
                                                        this.dialogo7.setVisible(true)

                                                            this.input.keyboard.addKey('enter').on('down', () => {   this.dialogo7.destroy()
                                                                this.dialogo8.setVisible(true)

                                                                    this.input.keyboard.addKey('enter').on('down', () => {   this.dialogo8.destroy()
                                                                        this.dialogo9.setVisible(true)
                                                                        
                                                                        this.input.keyboard.addKey('enter').on('down', () => {   this.dialogo9.destroy()
                                                                            this.dialogo10.setVisible(true)

                                                                                this.input.keyboard.addKey('enter').on('down', () => {   this.dialogo10.destroy()
                                                                                    this.dialogo11.setVisible(true)
                                                                                        this.input.keyboard.addKey('enter').on('down', () => {   this.dialogo11.destroy()
                                                                                            setTimeout(() => {
                                                                                                this.scene.start('Scene02'); // Correção: Adicione os parênteses aqui
                                                                                            }, 2000); // 10 segundos (10000 milissegundos)
                                                                                       
                                                                                                
                                                                                        }); 
                                                                                        
                                                                                }); 
                                                                        }); 
                                                                            
                                                                    });  
                                                            });   
                                                    });   
                                                    
                                            });   
                                            
                                    });  
                            
                             });

                        
                      });
                
                    
                    
                         
            },null,this);

           

            


           
            
            //------------------colisões----------------------------

             this.physics.add.collider(this.player, this.plataformas)
             this.physics.add.collider(this.cat1, this.plataformas)
             this.physics.add.collider(this.barril, this.plataformas)
             this.physics.add.collider(this.barril, this.cat3)
            
            
             this.physics.world.setBounds(0,0,2000,800)

             this.cameras.main.startFollow(this.player)
             .setBounds(0,0,2000,800)
           

   
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