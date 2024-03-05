class Scene03 extends Phaser.Scene{
    constructor(){
        super('Scene03')
        
    }

    create(){
        this.musica = this.sound.add('audio-fundo3', {
            loop: true, // defina como verdadeiro se você deseja que a música seja executada em loop
            volume: 0.1 // defina o volume da música (entre 0 e 1)
        });
        this.musica.play();
    
 
        this.galaxia = this.add.image(0,0,'fundo-pantano').setOrigin(0,0)
        this.galaxia.displayWidth = 2980
        this.galaxia.displayHeight = 1000

        this.plataformas = this.physics.add.staticGroup()
        this.plataformas.create(0,900,'plataforma-03')
        .setScale(1,1)
        .setOrigin(0,1) 
        .refreshBody()
       
       /*1plf*/ this.plataformas.create(420,440,'plataforma-03').setScale(0.4,1).refreshBody()
       /*1-1plf*/ this.plataformas.create(840,410,'plataforma-03-2').setScale(1.5,1.5).refreshBody()
       /*2plf*/ this.plataformas.create(10,680,'plataforma-03').setScale(0.6,1).refreshBody()

       /*3plf*/ this.plataformas.create(1300,300,'plataforma-03').setScale(0.5,1).refreshBody()
       /*4plf*/this.plataformas.create(900,650,'plataforma-03-1').setScale(0.5,1).refreshBody()
       /*5plf*/this.plataformas.create(1750,900,'plataforma-03-1')
       .setScale(1,1)
       .setOrigin(0,1) 
       .refreshBody()

       //PLATAFORMA DA AGUA
       /*5-5plf*/ this.plataformas.create(1464,660,'plataforma-03-2')
       .setScale(1.5,1.5)
       .refreshBody()
       
        //PLATAFORMA DA AGUA

       //escadas
       /*6plf*/ this.plataformas.create(2464,790,'plataforma-03-2')
       .setScale(1.5,1.5)
       .refreshBody()
       /*7plf*/ this.plataformas.create(2660,700,'plataforma-03-2')
       .setScale(1.5,1.5)
       .refreshBody()
       /*8lf*/ this.plataformas.create(2864,590,'plataforma-03-2')
       .setScale(1.5,1.5)
       .refreshBody()
       //escadas 

       /*9plf*/ this.plataformas.create(2350,450,'plataforma-03-1').setScale(0.8,1).refreshBody()
       /*10plf*/ this.plataformas.create(2750,250,'plataforma-03-1').setScale(0.8,1).refreshBody()
       /*parede*/ this.plataformas.create(1900,230,'plataforma-03-4').setScale(0.8,0.6).refreshBody()
       /*parede*/ this.plataformas.create(3050,230,'plataforma-03-4').setScale(0.8,0.6).refreshBody()
       /*parede*/ this.plataformas.create(3050,530,'plataforma-03-4').setScale(0.8,0.6).refreshBody()
       /*11plf*/ this.plataformas.create(1980,350,'plataforma-03-2')
       .setScale(1.1,1.5)
       .refreshBody()
       /*12plf*/ this.plataformas.create(2280,220,'plataforma-03-2')
       .setScale(1.5,1.5)
       .refreshBody()
        /*12plf*/ this.plataformas.create(2420,220,'plataforma-03-2')
        .setScale(1.5,1.5)
        .refreshBody()
 

       this.plataformaAgua = this.physics.add.staticGroup()
       this.plataformaAgua.create(1280,900,'plataforma-03-3')
        .setScale(1.5,2)
        .setOrigin(0,1) 
        .refreshBody()
        this.plataformaAgua.create(2390,900,'plataforma-03-3')
        .setScale(1.9,2)
        .setOrigin(0,1) 
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

       


       //caixas-----------------------------------
        this.caixa = this.physics.add.staticGroup()
        this.caixa.create(640,823,'caixa')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
      //plf1  
        this.caixa.create(400,400,'caixa')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.caixa.create(400,355,'caixa')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
     //plf1
     //plf2   
        this.caixa.create(65,640,'caixa')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
     //plf2      
     //plf3
        this.caixa.create(1350,261,'caixa')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
     //plf3

     this.caixa.create(2050,823,'caixa')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        
     this.caixa.create(2056,779,'caixa')
     .setScale(2,2)
     .setOrigin(1) 
     .refreshBody()
         

      //gramas--------------------------------- 
        this.grama = this.physics.add.staticGroup()
        this.grama.create(640,823,'grass1')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(670,823,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(59,823,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(79,823,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(210,823,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(1120,823,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(1100,823,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(980,823,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()

      //plf1
        this.grama.create(420,401,'grass1')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(400,401,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(380,400,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(350,401,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(590,401,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
      //plf1

      //plf2  
        this.grama.create(200,641,'grass1')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(220,641,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(59,641,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
     //plf2  

     //plf4   
        this.grama.create(1000,611,'grass1')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(980,611,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(850,611,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
    //plf4 
    //plf3
        this.grama.create(1200,261,'grass1')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(1050,261,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(1080,261,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(1480,261,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(1500,261,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
    //plf3

        this.grama.create(2200,412,'grass1')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(2200,412,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(1975,340,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(2400,412,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(2600,212,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(2620,212,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(2750,212,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
            
        this.grama.create(2200,823,'grass1')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(2230,823,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(1975,823,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody()
        this.grama.create(2400,412,'grass2')
        .setScale(2,2)
        .setOrigin(1) 
        .refreshBody() 

    
         //Dialogos---------------------------------

          this.dialogo1 = this.add.image(500, 200, 'dialogo3-1')
          .setDepth(1)
          .setVisible(false)
          .setScale(1.5, 1.5);
          this.dialogo2 = this.add.image(500, 200, 'dialogo3-2')
          .setDepth(1)
          .setVisible(false)
          .setScale(1.5, 1.5);
          this.dialogo3 = this.add.image(500, 200, 'dialogo3-3')
          .setDepth(1)
          .setVisible(false)
          .setScale(1.5, 1.5);
          this.dialogo4 = this.add.image(2230, 100, 'dialogo3-4')
          .setDepth(1)
          .setVisible(false)
          .setScale(1.5, 1.5);
          this.dialogo5 = this.add.image(2230, 100, 'dialogo3-5')
          .setDepth(1)
          .setVisible(false)
          .setScale(1.5, 1.5);
          this.dialogo6 = this.add.image(2230, 100, 'dialogo3-6')
          .setDepth(1)
          .setVisible(false)
          .setScale(1.5, 1.5);
          this.dialogo7 = this.add.image(1050, 80, 'dialogo3-7')
          .setDepth(1)
          .setVisible(false)
          .setScale(1.5, 1.5);
          this.dialogo8 = this.add.image(1050, 80, 'dialogo3-8')
          .setDepth(1)
          .setVisible(false)
          .setScale(1.5, 1.5);
          this.dialogo9 = this.add.image(1050, 80, 'dialogo3-9')
          .setDepth(1)
          .setVisible(false)
          .setScale(1.5, 1.5);
          this.dialogo10 = this.add.image(550, 200, 'dialogo3-10')
          .setDepth(1)
          .setVisible(false)
          .setScale(1.5, 1.5);
          this.dialogo11 = this.add.image(1000, 500, 'dialogo3-11')
          .setDepth(1)
          .setVisible(false)
          .setScale(1.5, 1.5);
    
    
    
        //sim e nao 


     
          this.sim = this.physics.add.sprite(0,0,'sim')
          .setVisible(false)
          .setScale(0.1)
         this.sim.body.setSize(30,180,)

         this.nao = this.physics.add.sprite(0,0,'nao')
         .setVisible(false)
          .setScale(0.1)
          this.nao.body.setSize(30,180,)

          this.carta = this.physics.add.sprite(1260,240,'carta')
          //1260x 240y
          .setVisible(false)
          .setScale(0.3)
          this.carta.body.setSize(30,170,)
          
          this.carta2 = this.physics.add.sprite(1060,240,'carta')
          .setVisible(false)
          .setScale(0.3)
          this.carta2.body.setSize(800,170,)

          this.carta3 = this.physics.add.sprite(1460,240,'carta')
          .setVisible(false)
          .setScale(0.3)
          this.carta3.body.setSize(800,170,)
          
          
    
    


        //PORTAL--------------------------------------

       this.portal = this.add.image(2750,600,'portal-quebrado')
        .setOrigin(0,5)
        .setVisible(true)




       this.portal1 = this.physics.add.sprite(2890,210,'portal')//x=2890
            .setCollideWorldBounds(true)
            .setVisible(false)
            .setOrigin(1)
            .setScale(2)
            .setSize(5)

         this.anims.create({
            key: 'portal', 
            frames: this.anims.generateFrameNumbers('portal',{
                start: 0,
                end: 3
            }),
            frameRate: 3,
            repeat: -1
         })
        
        this.portal1.body.setSize(40)
        this.portal1.anims.play('portal');

         
        
           
      
       
         //PORTAL----------------------------------------
        

         //CATS---------------------------------------------

         //cat1
         this.cat3_1 = this.physics.add.sprite(2750,210,'cat')
         //2750x 210y
         .setCollideWorldBounds(true)
         .setVisible(true)
         .setDepth(1)
         .setOrigin(1)
         .setScale(2)
         .setSize(5)
         this.cat3_1.body.setSize(30,20,)

         
         this.anims.create({
            key: 'cat-idle',
            frames: this.anims.generateFrameNumbers('cat', {
                start: 0,
                end: 3
            }),
            frameRate: 3,
            repeat: -1
         })  
         this.cat3_1.anims.play('cat-idle',true);
         this.cat3_1.flipX = true;
        
        //cat2
        this.cat3_2 = this.physics.add.sprite(300,800,'cat')
         .setCollideWorldBounds(true)
         .setOrigin(1)
         .setScale(2)
         .setSize(5)
         this.cat3_2.body.setSize(30,20,)

         
         this.anims.create({
            key: 'cat-idle',
            frames: this.anims.generateFrameNumbers('cat', {
                start: 0,
                end: 3
            }),
            frameRate: 3,
            repeat: -1
         })  
         this.cat3_2.anims.play('cat-idle',true);
         this.cat3_2.flipX = false;
       
         //CATS---------------------------------------------
        
        //PLAYER----------------------------------------
        this.player = this.physics.add.sprite(100,750,'player')
        //100,750
             .setCollideWorldBounds(true)
             .setScale(1.5,1.5)
             .setBounce(0.2)
             .setDepth(1)
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

        

             this.desafio03 = this.physics.add.staticGroup()
             let df = this.desafio03.create(2300,370,'desafio-fase3')
             .setScale(0.8)
             .setVisible(false)
             this.desafio031 = this.physics.add.staticGroup()
             let df1 = this.desafio031.create(2300,370,'desafio-fase3-1')
             .setScale(0.9)
             .setVisible(false)
             this.desafio032 = this.physics.add.staticGroup()
             let df2 =  this.desafio032.create(2300,370,'desafio-fase3-2')
             .setScale(0.9)
             .setVisible(false)
            
             this.desafio032.setDepth(1);
            this.desafio031.setDepth(1);
              this.desafio03.setDepth(1);
            
            
             let contador = 0
        //PLAYER---------------------------------------- 
             //cat e player---------------------------------------------------
             let dialogo06Destruido = false
             this.physics.add.overlap(this.player,this.cat3_2, function(){
                    this.dialogo1.setVisible(true)
                    this.input.keyboard.addKey('enter').on('down', () => {
                        this.dialogo1.destroy()
                        this.dialogo2.setVisible(true)
                        this.inimigo.setVisible(true)
                        this.inimigo2.setVisible(true)
                        this.inimigo3.setVisible(true)
                        this.inimigo4.setVisible(true)
                        this.inimigo5.setVisible(true)
                        
                            this.input.keyboard.addKey('enter').on('down', () => {
                                this.dialogo2.destroy()
                                this.dialogo3.setVisible(true)

                                    this.input.keyboard.addKey('enter').on('down', () => {
                                        this.dialogo3.destroy()
                                        this.cat3_2.destroy()
                                        this.cat3_1.setVisible(true)
                                        
                                        
                                    })
                            })
                    })
                    
             },null,this);

             this.physics.add.overlap(this.player,this.cat3_1, function(){
                    //criar plataformas
                    /*5-5plf*/ this.plataformas.create(1364,820,'plataforma-03-2')
                    .setScale(1.5,1.5)
                    .refreshBody()
                    /*5-5plf*/ this.plataformas.create(1464,820,'plataforma-03-2')
                    .setScale(1.5,1.5)
                    .refreshBody()
                    /*5-5plf*/ this.plataformas.create(1564,820,'plataforma-03-2')
                    .setScale(1.5,1.5)
                    .refreshBody()
                    /*5-5plf*/ this.plataformas.create(1664,820,'plataforma-03-2')
                    .setScale(1.5,1.5)
                    .refreshBody()
                     //criar plataformas

                         this.dialogo4.setVisible(true)

                this.input.keyboard.addKey('enter').on('down', () => {
                            this.dialogo4.destroy()
                            this.dialogo5.setVisible(true)

                                this.input.keyboard.addKey('enter').on('down', () => {
                                        this.dialogo5.destroy()
                                        this.dialogo6.setVisible(true)

                                             this.input.keyboard.addKey('enter').on('down', () => {
                                                this.dialogo6.destroy()
                                                this.carta.setVisible(true)
                                                dialogo06Destruido = true
                                               
                                               
                                                
                                    
                                })
                        })
                })
                
         },null,this);
             
            //cat e player---------------------------------------------------


             //icon bola de fogo----------------------------------------------
             this.iconfogo = this.add.image(330,40,'iconfogo')
             .setScale(1.5)
             .setScrollFactor(0)
             .setVisible(true)
             
             this.iconcol = this.add.image(330,40,'iconcol')
                .setScale(1.5)
                .setScrollFactor(0)
                .setVisible(false)


             this.input.keyboard.addKey('z').on('down', () => {
                  
               
             },)

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

      
            this.physics.add.overlap(this.bolafogo, this.caixa, function() {
                this.time.delayedCall(0, function() {
                    this.bolafogo.setVelocity(0);
                    this.bolafogo.setVisible(false);
                    this.bolafogo.setPosition(10, 750);
                    
                }, [], this);   
            }, null, this);

            this.physics.add.overlap(this.bolafogo, this.plataformaAgua, function() {
                this.time.delayedCall(0, function() {
                    this.bolafogo.setVelocity(0);
                    this.bolafogo.setVisible(false);
                    this.bolafogo.setPosition(10, 750);
                }, [], this);   
            }, null, this);

            this.physics.add.overlap(this.bolafogo, this.plataformas, function() {
                this.time.delayedCall(0, function() {
                    this.bolafogo.setVelocity(0);
                    this.bolafogo.setVisible(false);
                    this.bolafogo.setPosition(10, 750);
                }, [], this);   
            }, null, this);
            this.physics.add.overlap(this.bolafogo, this.setCollideWorldBounds, function() {
                this.time.delayedCall(0, function() {
                    this.bolafogo.setVelocity(0);
                    this.bolafogo.setVisible(false);
                    this.bolafogo.setPosition(10, 750);
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
                },3000)
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

        //INIMIGO----------------------------------------   
            this.inimigo = this.physics.add.sprite(800,750,'inimigo')
            .setCollideWorldBounds(true)
            .setVisible(false)
            .setScale(1.5,1.5)
            .setBounce(0.2)
            this.inimigo.vida = 2;
            this.inimigo.body.setSize(25,60)

            this.inimigo2 = this.physics.add.sprite(500,340,'inimigo')
            .setCollideWorldBounds(true)
            .setVisible(false)
            .setScale(1.5,1.5)
            .setBounce(0.2)
            this.inimigo2.vida = 2;
            this.inimigo2.body.setSize(25)

            this.inimigo3 = this.physics.add.sprite(1280,200,'inimigo')
            .setCollideWorldBounds(true)
            .setVisible(false)
            .setScale(1.5,1.5)
            .setBounce(0.2)
            this.inimigo3.vida = 2;
            this.inimigo3.body.setSize(25)
            

            this.inimigo4 = this.physics.add.sprite(2200,740,'inimigo')
            .setCollideWorldBounds(true)
            .setVisible(false)
            .setScale(1.5,1.5)
            .setBounce(0.2)
            this.inimigo4.vida = 2;
            this.inimigo4.body.setSize(25)

            this.inimigo5 = this.physics.add.sprite(2300,250,'inimigo')
            .setCollideWorldBounds(true)
            .setVisible(false)
            .setScale(1.5,1.5)
            .setBounce(0.2)
            this.inimigo5.vida = 2;
            this.inimigo5.body.setSize(25)


            this.anims.create({
                key: 'paradoini',
                frames: this.anims.generateFrameNumbers('inimigo', {
                    start: 0,
                    end: 5
                }),
                frameRate: 6,
                repeat: -1
             }) 
       
            this.anims.create({
                key: 'andarini',
                frames: this.anims.generateFrameNumbers('andar-ini', {
                    start: 0,
                    end: 4
                }),
                frameRate: 4,
                repeat: -1
            })  
                
            this.anims.create({
                key: 'atacarini',
                  frames: this.anims.generateFrameNumbers('inimigo-ataque', {
                   start: 0,
                    end: 3
              }),
               frameRate: 6,
               repeat: 0
           })  
        
        this.inimigo.podeAtacar = true
        this.inimigo2.podeAtacar = true
        this.inimigo3.podeAtacar = true
        this.inimigo4.podeAtacar = true
        this.inimigo5.podeAtacar = true

       
        


        //INIMIGO----------------------------------------     
        //CONTROLES------------------------------------------  
            this.control = this.input.keyboard.createCursorKeys();
        //CONTROLES------------------------------------------ 


        //ITENS------------------------------------------
        this.osso = this.physics.add.staticGroup()  

       
           //overlap-carta-------------------------------
           
            this.physics.add.overlap(this.player,this.carta, function(){
                if(dialogo06Destruido){
                    this.dialogo7.setVisible(true)
                    
                    this.input.keyboard.addKey('enter').on('down', ()=>{
                         this.dialogo7.destroy()
                         this.dialogo8.setVisible(true)

                            this.input.keyboard.addKey('enter').on('down', ()=>{
                                this.dialogo8.destroy()
                                 this.dialogo9.setVisible(true)

                                     this.input.keyboard.addKey('enter').on('down', ()=>{
                                        this.dialogo9.setVisible(false)
                                        this.carta.destroy()
                                                
                                                this.physics.add.overlap(this.player,this.carta2, function(){
                                                    if(this.dialogo9.setVisible){
                                                        this.sim.setVisible(true)
                                                        this.nao.setVisible(true)
                                                        this.sim.setPosition(650,390)
                                                        this.nao.setPosition(890,600)
                                                        
                                                    }else{
                                                        console.log("nao foi")
                                                    }
                                    
                                                    
                                                 }, null, this);
                                                 this.physics.add.overlap(this.player,this.carta3, function(){
                                                    if(this.dialogo9.setVisible){
                                                        this.sim.setVisible(true)
                                                        this.nao.setVisible(true)
                                                        this.sim.setPosition(650,390)
                                                        this.nao.setPosition(890,600)
                                                        
                                                    }else{
                                                        console.log("nao foi")
                                                    }
                                    
                                                    
                                                 }, null, this);
                                    
                                    
                                       

                                    })
                            })
                    }) 
                }
                    
            }, null, this);

          
            
                
               

           
            
         
            

        //MOEDAS------------------------------------------  
        let dialogo10Destruido = false;
        this.physics.add.overlap(this.player,this.sim, function(){
                this.dialogo10.setVisible(true)
    
                this.input.keyboard.addKey('enter').on('down', ()=>{
                     this.dialogo10.setVisible(false)
                    dialogo10Destruido = true;
                    this.portal.destroy()
                    this.sim.destroy()
                    this.nao.destroy()
                    this.portal1.setVisible(true)
                
                
                })
        }, null, this);

        this.physics.add.overlap(this.player,this.nao, function(){
            this.dialogo11.setVisible(true)

        this.input.keyboard.addKey('enter').on('down', ()=>{
           this.dialogo11.destroy()
           this.nao.destroy()
            
         
           
        })
    }, null, this);
        
        //MOEDAS------------------------------------------ 
        
        
        //portal------------------------------------------  
        this.physics.add.overlap(this.player,this.portal1, function(){
            if (dialogo10Destruido) {
                this.scene.start('Scene04');
            }
            
        }, null, this);
        //PORTAL------------------------------------------  
            

        
        //ataque contro o inimigo---------------------------------
     this.physics.add.overlap(this.bolafogo, this.inimigo, function() {
                        this.bolafogo.disableBody(true, true); // Desativar a física para a bola de fogo
                        this.bolafogo.setVisible(false);
                        this.inimigo.setTint(0xff0000)
                        this.bolafogo.setVelocity(0);
                        this.bolafogo.setPosition(-30, 750);
                        this.inimigo.vida -= 1;
                    if (this.inimigo.vida === 0) { // Se o inimigo recebeu 2 bolas de fogo
                        const posicaoX = this.inimigo.x;
                        const posicaoY = this.inimigo.y;
                        this.time.delayedCall(0, function() {
                            this.inimigo.disableBody(true, true); // Desativar a física para o inimigo
                            this.inimigo.destroy();
                            this.osso.create(posicaoX,posicaoY +45,'osso')
                            .setScale(0.2,0.2)
                            .setOrigin(1) 
                            .refreshBody()  
                            .setVisible(true) 
                            this.bolafogo.enableBody(true, this.bolafogo.x, this.bolafogo.y, true, true); // Reativar a física para a bola de fogo
                        }, [], this);
                    } else { // Se o inimigo ainda não recebeu 2 bolas de fogo
                        this.time.delayedCall(0, function() {
                            this.bolafogo.enableBody(true, this.bolafogo.x, this.bolafogo.y, true, true); // Reativar a física para a bola de fogo
                            setTimeout(() => {
                                this.inimigo.clearTint()  
                            }, 300);
                                                      
                            
                        }, [], this);
                    }
                }, null, this);
      this.physics.add.overlap(this.bolafogo, this.inimigo2, function() {
                    this.bolafogo.disableBody(true, true); // Desativar a física para a bola de fogo
                    this.bolafogo.setVisible(false);
                    this.inimigo2.setTint(0xff0000)
                    this.bolafogo.setVelocity(0);
                    this.bolafogo.setPosition(-30, 750);
                    this.inimigo2.vida -= 1;
                if (this.inimigo2.vida === 0) { // Se o inimigo recebeu 2 bolas de fogo
                    const posicaoX = this.inimigo2.x;
                    const posicaoY = this.inimigo2.y;
                    this.time.delayedCall(0, function() {
                        this.inimigo2.disableBody(true, true); // Desativar a física para o inimigo
                        this.inimigo2.destroy();
                        this.osso.create(posicaoX,posicaoY +45,'osso')
                        .setScale(0.2,0.2)
                        .setOrigin(1) 
                        .refreshBody()  
                        .setVisible(true) 
                        this.bolafogo.enableBody(true, this.bolafogo.x, this.bolafogo.y, true, true); // Reativar a física para a bola de fogo
                    }, [], this);
                } else { // Se o inimigo ainda não recebeu 2 bolas de fogo
                    this.time.delayedCall(0, function() {
                        this.bolafogo.enableBody(true, this.bolafogo.x, this.bolafogo.y, true, true); // Reativar a física para a bola de fogo
                        setTimeout(() => {
                            this.inimigo2.clearTint()  
                        }, 300);
                                                  
                        
                    }, [], this);
                }
            }, null, this);
    this.physics.add.overlap(this.bolafogo, this.inimigo3, function() {
                this.bolafogo.disableBody(true, true); // Desativar a física para a bola de fogo
                this.bolafogo.setVisible(false);
                this.inimigo3.setTint(0xff0000)
                this.bolafogo.setVelocity(0);
                this.bolafogo.setPosition(-30, 750);
                this.inimigo3.vida -= 1;
            if (this.inimigo3.vida === 0) { // Se o inimigo recebeu 2 bolas de fogo
                const posicaoX = this.inimigo3.x;
                 const posicaoY = this.inimigo3.y;
                this.time.delayedCall(0, function() {
                    this.inimigo3.destroy();
                    this.osso.create(posicaoX,posicaoY +45,'osso')
                    .setScale(0.2,0.2)
                    .setOrigin(1) 
                    .refreshBody()  
                    .setVisible(true) 
                    .setScale(0.2,0.2)
                    .setOrigin(1) 
                    .refreshBody()
                    this.bolafogo.enableBody(true, this.bolafogo.x, this.bolafogo.y, true, true); // Reativar a física para a bola de fogo
                }, [], this);
            } else { // Se o inimigo ainda não recebeu 2 bolas de fogo
                this.time.delayedCall(0, function() {
                    this.bolafogo.enableBody(true, this.bolafogo.x, this.bolafogo.y, true, true); // Reativar a física para a bola de fogo
                    setTimeout(() => {
                        this.inimigo3.clearTint()  
                    }, 300);
                                              
                    
                }, [], this);
            }
        }, null, this);

     this.physics.add.overlap(this.bolafogo, this.inimigo4, function() {
            this.bolafogo.disableBody(true, true); // Desativar a física para a bola de fogo
            this.bolafogo.setVisible(false);
            this.inimigo4.setTint(0xff0000)
            this.bolafogo.setVelocity(0);
            this.bolafogo.setPosition(-30, 750);
            this.inimigo4.vida -= 1;
        if (this.inimigo4.vida === 0) { // Se o inimigo recebeu 2 bolas de fogo
            const posicaoX = this.inimigo4.x;
             const posicaoY = this.inimigo4.y;
            this.time.delayedCall(0, function() {
                this.inimigo4.disableBody(true, true); // Desativar a física para o inimigo
                this.inimigo4.destroy();
                this.osso.create(posicaoX,posicaoY +45,'osso')
                .setScale(0.2,0.2)
                .setOrigin(1) 
                .refreshBody()  
                .setVisible(true) 
                this.bolafogo.enableBody(true, this.bolafogo.x, this.bolafogo.y, true, true); // Reativar a física para a bola de fogo
            }, [], this);
        } else { // Se o inimigo ainda não recebeu 2 bolas de fogo
            this.time.delayedCall(0, function() {
                this.bolafogo.enableBody(true, this.bolafogo.x, this.bolafogo.y, true, true); // Reativar a física para a bola de fogo
                setTimeout(() => {
                    this.inimigo4.clearTint()  
                }, 300);
                                          
                
            }, [], this);
        }
    }, null, this);

    this.physics.add.overlap(this.bolafogo, this.inimigo5, function(osso1) {
        this.bolafogo.disableBody(true, true); // Desativar a física para a bola de fogo
        this.bolafogo.setVisible(false);
        this.inimigo5.setTint(0xff0000)
        this.bolafogo.setVelocity(0);
        this.bolafogo.setPosition(-30, 750);
        this.inimigo5.vida -= 1;
    if (this.inimigo5.vida === 0) { // Se o inimigo recebeu 2 bolas de fogo
        const posicaoX = this.inimigo5.x;
        const posicaoY = this.inimigo5.y;
        this.time.delayedCall(0, function() {
            this.inimigo5.disableBody(true, true); // Desativar a física para o inimigo
            this.inimigo5.destroy();
            this.osso.create(posicaoX,posicaoY +45,'osso')
            .setScale(0.2,0.2)
            .setOrigin(1) 
            .refreshBody()  
            .setVisible(true)    
            this.bolafogo.enableBody(true, this.bolafogo.x, this.bolafogo.y, true, true); // Reativar a física para a bola de fogo
        }, [], this);
    } else { // Se o inimigo ainda não recebeu 2 bolas de fogo
        this.time.delayedCall(0, function() {
            this.bolafogo.enableBody(true, this.bolafogo.x, this.bolafogo.y, true, true); // Reativar a física para a bola de fogo
            setTimeout(() => {
                this.inimigo5.clearTint()  
            }, 300);
                                      
            
        }, [], this);
    }
}, null, this);

                
            //ataque contro o inimigo---------------------------------
            //inimigo  ataque---------------------------------
            this.physics.add.overlap(this.inimigo, this.player, function(){
                this.Contato(vida5,vida4,vida3,vida2,vida1,vida0);

            }, null, this)

            this.physics.add.overlap(this.inimigo2, this.player, function(){
                this.Contato2(vida5,vida4,vida3,vida2,vida1,vida0);

            }, null, this)
            this.physics.add.overlap(this.inimigo3, this.player, function(){
                this.Contato3(vida5,vida4,vida3,vida2,vida1,vida0);

            }, null, this)
             
            this.physics.add.overlap(this.inimigo4, this.player, function(){
                this.Contato4(vida5,vida4,vida3,vida2,vida1,vida0);

            }, null, this)
             
            this.physics.add.overlap(this.inimigo5, this.player, function(){
                this.Contato5(vida5,vida4,vida3,vida2,vida1,vida0);

            }, null, this)
             

             



            //inimigo  ataque---------------------------------    
            //Colisões----------------------------------------------

             this.physics.add.collider(this.player, this.plataformas)
             this.physics.add.collider(this.bolafogo, this.plataformas)
             this.physics.add.collider(this.bolafogo, this.inimigo)
             this.physics.add.collider(this.player, this.caixa)
             this.physics.add.collider(this.portal, this.plataformas)
             this.physics.add.collider(this.portal1, this.plataformas)
             this.physics.add.collider(this.cat3_1, this.plataformas)
             this.physics.add.collider(this.cat3_2, this.plataformas)
             this.physics.add.collider(this.sim, this.plataformas)
             this.physics.add.collider(this.nao, this.plataformas)
             this.physics.add.collider(this.carta, this.plataformas)
             this.physics.add.collider(this.carta2, this.plataformas)
             this.physics.add.collider(this.carta3, this.plataformas)
             
            

             // inimigos coliider------------------------------------------
                //inimigo1---------------------
                this.physics.add.collider(this.inimigo, this.player)
                this.physics.add.collider(this.inimigo, this.plataformas)
                this.physics.add.collider(this.inimigo, this.caixa)
                //inimigo1---------------------
                //inimigo2---------------------
                this.physics.add.collider(this.inimigo2, this.plataformas)
                this.physics.add.collider(this.inimigo2, this.caixa)
                //inimigo2---------------------
                //inimigo3---------------------
                 this.physics.add.collider(this.inimigo3, this.plataformas)
                 this.physics.add.collider(this.inimigo3, this.caixa)
                //inimigo3---------------------
                //inimigo4---------------------
                this.physics.add.collider(this.inimigo4, this.plataformas)
                this.physics.add.collider(this.inimigo4, this.caixa)
                //inimigo4---------------------
                //inimigo5---------------------
                this.physics.add.collider(this.inimigo5, this.plataformas)
                this.physics.add.collider(this.inimigo5, this.caixa)
                //inimigo5---------------------
             
             
            
            // coliider------------------------------------------

             this.physics.add.collider(this.player, this.plataformaAgua, () => {
                // aqui você pode reiniciar o jogo
               vida5.setVisible(false)
               vida0.setVisible(true)
                this.physics.pause()
                this.player.setTint(0xff0000)
                this.player.anims.stop()
                this.gameOver = true
        
                //aqui criamos uma condição para que uando o player perder, possa aprter 'enter' e recomeçar a fase.
                setTimeout(()=>{
                    // Crie o retângulo de fundo
                    let fundo = this.add.rectangle(390, 350, 600, 200, 0x000000, 0.7).setOrigin(0).setScrollFactor(0);
                    this.add.text(500,400,'GAME OVER',{fontSize:'70px'})
                        .setShadow(0,0,'#FFFFFF',2)
                        //faz o texto seguir o centro da camera e nao do cenario
                        .setScrollFactor(0)
        
                        this.add.text(600,470,'Press Enter',{fontSize:'30px'})
                        .setShadow(0,0,'#FFFFFF',2).setScrollFactor(0)
                        //aqui verifica se o player apertou 'enter' então strta a cena 2
                        this.input.keyboard.addKey('enter')
                        .on('down',()=>{
                            this.scene.start('Scene03')
                        })
                },1000)
             });
        
            //Colisões----------------------------------------------  
             
            
            //Configurações -----------------------------
             this.physics.world.setBounds(0,0,2980,900)
             
             this.cameras.main.startFollow(this.player).setBounds(0,0,2980,900)

             this.gameOver = false
            //Configurações -----------------------------
           
    }


           


    Contato(vida5,vida4,vida3,vida2,vida1,vida0,){
    const distance = Phaser.Math.Distance.Between(this.inimigo.x, this.inimigo.y, this.player.x, this.player.y);
    if (distance < 300 && this.inimigo.podeAtacar) {
        console.log("Playing attack animation");
        this.inimigo.anims.play('atacarini', true);
             this.player.vida -= 1;
             this.player.setTint(0xff0000)
             console.log(this.player.vida)
        // Define um cooldown para o ataque do inimigo
              this.inimigo.podeAtacar = false;
            setTimeout(() => {
                 this.inimigo.podeAtacar = true;
            }, 1000);
            //tira o indicador de ataque do player
            setTimeout(() => {
                this.player.clearTint()  
           }, 100);
            if(this.player.vida ===4){
                vida5.setVisible(false)
                vida4.setVisible(true)
            }
            if(this.player.vida ===3){
                vida4.setVisible(false)
                vida3.setVisible(true)
            }

            if(this.player.vida ===2){
                vida3.setVisible(false)
                vida2.setVisible(true)
            }
            if(this.player.vida ===1){
                vida2.setVisible(false)
                vida1.setVisible(true)
            }
            // Verifica se o jogador morreu
            if (this.player.vida === 0) {
                this.player.setTint(0xff0000) 
                vida1.setVisible(false)
                vida0.setVisible(true)
                this.physics.pause()
                this.player.anims.stop()
                this.gameOver = true
        
                //aqui criamos uma condição para que uando o player perder, possa aprter 'enter' e recomeçar a fase.
                setTimeout(()=>{
                    // Crie o retângulo de fundo
                    let fundo = this.add.rectangle(390, 350, 600, 200, 0x000000, 0.7).setOrigin(0).setScrollFactor(0);
                    this.add.text(500,400,'GAME OVER',{fontSize:'70px'})
                        .setShadow(0,0,'#FFFFFF',2)
                        //faz o texto seguir o centro da camera e nao do cenario
                        .setScrollFactor(0)
        
                        this.add.text(600,470,'Press Enter',{fontSize:'30px'})
                        .setShadow(0,0,'#FFFFFF',2).setScrollFactor(0)
                        //aqui verifica se o player apertou 'enter' então strta a cena 2
                        this.input.keyboard.addKey('enter')
                        .on('down',()=>{
                            this.scene.start('Scene03')
                        })
                },1000)
            
            }
        }
    }

    Contato2(vida5,vida4,vida3,vida2,vida1,vida0){
        const distance = Phaser.Math.Distance.Between(this.inimigo2.x, this.inimigo2.y, this.player.x, this.player.y);
        if (distance < 300 && this.inimigo2.podeAtacar) {
            this.inimigo2.anims.play('atacarini', true);
                 this.player.vida -= 1;
                 this.player.setTint(0xff0000)
                 console.log(this.player.vida)
            // Define um cooldown para o ataque do inimigo
                  this.inimigo2.podeAtacar = false;
                setTimeout(() => {
                     this.inimigo2.podeAtacar = true;
                }, 1000);
                //tira o indicador de ataque do player
                setTimeout(() => {
                    this.player.clearTint()  
               }, 100);
                if(this.player.vida ===4){
                    vida5.setVisible(false)
                    vida4.setVisible(true)
                }
                if(this.player.vida ===3){
                    vida4.setVisible(false)
                    vida3.setVisible(true)
                }
    
                if(this.player.vida ===2){
                    vida3.setVisible(false)
                    vida2.setVisible(true)
                }
                if(this.player.vida ===1){
                    vida2.setVisible(false)
                    vida1.setVisible(true)
                }
                // Verifica se o jogador morreu
                if (this.player.vida === 0) {
                    this.player.setTint(0xff0000) 
                    vida1.setVisible(false)
                    vida0.setVisible(true)
                    this.physics.pause()
                    this.player.anims.stop()
                    this.gameOver = true
            
                    //aqui criamos uma condição para que uando o player perder, possa aprter 'enter' e recomeçar a fase.
                    setTimeout(()=>{
                        // Crie o retângulo de fundo
                        let fundo = this.add.rectangle(390, 350, 600, 200, 0x000000, 0.7).setOrigin(0).setScrollFactor(0);
                        this.add.text(500,400,'GAME OVER',{fontSize:'70px'})
                            .setShadow(0,0,'#FFFFFF',2)
                            //faz o texto seguir o centro da camera e nao do cenario
                            .setScrollFactor(0)
            
                            this.add.text(600,470,'Press Enter',{fontSize:'30px'})
                            .setShadow(0,0,'#FFFFFF',2).setScrollFactor(0)
                            //aqui verifica se o player apertou 'enter' então strta a cena 2
                            this.input.keyboard.addKey('enter')
                            .on('down',()=>{
                                this.scene.start('Scene03')
                            })
                    },1000)
                
                }
            }
        }
     Contato3(vida5,vida4,vida3,vida2,vida1,vida0){
        const distance = Phaser.Math.Distance.Between(this.inimigo3.x, this.inimigo3.y, this.player.x, this.player.y);
        if (distance < 300 && this.inimigo3.podeAtacar) {
            this.inimigo3.anims.play('atacarini', true);
                 this.player.vida -= 1;
                 this.player.setTint(0xff0000)
                 console.log(this.player.vida)
            // Define um cooldown para o ataque do inimigo
                  this.inimigo3.podeAtacar = false;
                setTimeout(() => {
                     this.inimigo3.podeAtacar = true;
                }, 1000);
                //tira o indicador de ataque do player
                setTimeout(() => {
                    this.player.clearTint()  
               }, 100);
                if(this.player.vida ===4){
                    vida5.setVisible(false)
                    vida4.setVisible(true)
                }
                if(this.player.vida ===3){
                    vida4.setVisible(false)
                    vida3.setVisible(true)
                }
    
                if(this.player.vida ===2){
                    vida3.setVisible(false)
                    vida2.setVisible(true)
                }
                if(this.player.vida ===1){
                    vida2.setVisible(false)
                    vida1.setVisible(true)
                }
                // Verifica se o jogador morreu
                if (this.player.vida === 0) {
                    this.player.setTint(0xff0000) 
                    vida1.setVisible(false)
                    vida0.setVisible(true)
                    this.physics.pause()
                    this.player.anims.stop()
                    this.gameOver = true
            
                    //aqui criamos uma condição para que uando o player perder, possa aprter 'enter' e recomeçar a fase.
                    setTimeout(()=>{
                        // Crie o retângulo de fundo
                        let fundo = this.add.rectangle(390, 350, 600, 200, 0x000000, 0.7).setOrigin(0).setScrollFactor(0);
                        this.add.text(500,400,'GAME OVER',{fontSize:'70px'})
                            .setShadow(0,0,'#FFFFFF',2)
                            //faz o texto seguir o centro da camera e nao do cenario
                            .setScrollFactor(0)
            
                            this.add.text(600,470,'Press Enter',{fontSize:'30px'})
                            .setShadow(0,0,'#FFFFFF',2).setScrollFactor(0)
                            //aqui verifica se o player apertou 'enter' então strta a cena 2
                            this.input.keyboard.addKey('enter')
                            .on('down',()=>{
                                this.scene.start('Scene03')
                            })
                    },1000)
                
                }
            }
        }
    Contato4(vida5,vida4,vida3,vida2,vida1,vida0){
            const distance = Phaser.Math.Distance.Between(this.inimigo4.x, this.inimigo4.y, this.player.x, this.player.y);
            if (distance < 300 && this.inimigo4.podeAtacar) {
                this.inimigo4.anims.play('atacarini', true);
                     this.player.vida -= 1;
                     this.player.setTint(0xff0000)
                     console.log(this.player.vida)
                // Define um cooldown para o ataque do inimigo
                      this.inimigo4.podeAtacar = false;
                    setTimeout(() => {
                         this.inimigo4.podeAtacar = true;
                    }, 1000);
                    //tira o indicador de ataque do player
                    setTimeout(() => {
                        this.player.clearTint()  
                   }, 100);
                    if(this.player.vida ===4){
                        vida5.setVisible(false)
                        vida4.setVisible(true)
                    }
                    if(this.player.vida ===3){
                        vida4.setVisible(false)
                        vida3.setVisible(true)
                    }
        
                    if(this.player.vida ===2){
                        vida3.setVisible(false)
                        vida2.setVisible(true)
                    }
                    if(this.player.vida ===1){
                        vida2.setVisible(false)
                        vida1.setVisible(true)
                    }
                    // Verifica se o jogador morreu
                    if (this.player.vida === 0) {
                        this.player.setTint(0xff0000) 
                        vida1.setVisible(false)
                        vida0.setVisible(true)
                        this.physics.pause()
                        this.player.anims.stop()
                        this.gameOver = true
                
                        //aqui criamos uma condição para que uando o player perder, possa aprter 'enter' e recomeçar a fase.
                        setTimeout(()=>{
                            // Crie o retângulo de fundo
                            let fundo = this.add.rectangle(390, 350, 600, 200, 0x000000, 0.7).setOrigin(0).setScrollFactor(0);
                            this.add.text(500,400,'GAME OVER',{fontSize:'70px'})
                                .setShadow(0,0,'#FFFFFF',2)
                                //faz o texto seguir o centro da camera e nao do cenario
                                .setScrollFactor(0)
                
                                this.add.text(600,470,'Press Enter',{fontSize:'30px'})
                                .setShadow(0,0,'#FFFFFF',2).setScrollFactor(0)
                                //aqui verifica se o player apertou 'enter' então strta a cena 2
                                this.input.keyboard.addKey('enter')
                                .on('down',()=>{
                                    this.scene.start('Scene03')
                                })
                        },1000)
                    
                    }
                }
            }
    Contato5(vida5,vida4,vida3,vida2,vida1,vida0){
                const distance = Phaser.Math.Distance.Between(this.inimigo5.x, this.inimigo5.y, this.player.x, this.player.y);
                if (distance < 300 && this.inimigo5.podeAtacar) {
                    this.inimigo5.anims.play('atacarini', true);
                         this.player.vida -= 1;
                         this.player.setTint(0xff0000)
                         console.log(this.player.vida)
                    // Define um cooldown para o ataque do inimigo
                          this.inimigo5.podeAtacar = false;
                        setTimeout(() => {
                             this.inimigo5.podeAtacar = true;
                        }, 1000);
                        //tira o indicador de ataque do player
                        setTimeout(() => {
                            this.player.clearTint()  
                       }, 100);
                        if(this.player.vida ===4){
                            vida5.setVisible(false)
                            vida4.setVisible(true)
                        }
                        if(this.player.vida ===3){
                            vida4.setVisible(false)
                            vida3.setVisible(true)
                        }
            
                        if(this.player.vida ===2){
                            vida3.setVisible(false)
                            vida2.setVisible(true)
                        }
                        if(this.player.vida ===1){
                            vida2.setVisible(false)
                            vida1.setVisible(true)
                        }
                        // Verifica se o jogador morreu
                        if (this.player.vida === 0) {
                            this.player.setTint(0xff0000) 
                            vida1.setVisible(false)
                            vida0.setVisible(true)
                            this.physics.pause()
                            this.player.anims.stop()
                            this.gameOver = true
                    
                            //aqui criamos uma condição para que uando o player perder, possa aprter 'enter' e recomeçar a fase.
                            setTimeout(()=>{
                                // Crie o retângulo de fundo
                                let fundo = this.add.rectangle(390, 350, 600, 200, 0x000000, 0.7).setOrigin(0).setScrollFactor(0);
                                this.add.text(500,400,'GAME OVER',{fontSize:'70px'})
                                    .setShadow(0,0,'#FFFFFF',2)
                                    //faz o texto seguir o centro da camera e nao do cenario
                                    .setScrollFactor(0)
                    
                                    this.add.text(600,470,'Press Enter',{fontSize:'30px'})
                                    .setShadow(0,0,'#FFFFFF',2).setScrollFactor(0)
                                    //aqui verifica se o player apertou 'enter' então strta a cena 2
                                    this.input.keyboard.addKey('enter')
                                    .on('down',()=>{
                                        this.scene.start('Scene03')
                                    })
                            },1000)
                        
                        }
                    }
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
            // O diálogo1 está visível, então o jogador não pode se mover
            this.player.setVelocityX(0);
            this.player.anims.play('parado', true);
        }

        if (this.control && this.control.up && this.player.canJump && this.player.body.touching.down && this.control.up.isDown) {
            //setVelocity = defini a altura do pulo.
            this.player.setVelocityY(-620)
            this.player.canJump = false
            this.player.anims.play('jump',true);
         
          }

        if(!this.control.up.isDown && !this.player.canJump && this.player.body.touching.down){
            this.player.canJump = true
            
            
        } 
        //----------------------------------------------   
             //inimigo1-----------------------------------

        const MAX_DISTANCE = 300; // Defina a distância máxima em pixels que o inimigo pode se afastar do ponto de partida

        // Obtenha as posições do jogador e do inimigo
        const player = this.player;
        const inimigo = this.inimigo;
        
        const distanciaX = player.x - inimigo.x;
        const distanciaY = player.y - inimigo.y;
        const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY); // Calcule a distância entre o jogador e o inimigo usando o teorema de Pitágoras
            if(this.inimigo.vida> 0){
                if (!this.inimigo.podeAtacar) {
                    inimigo.anims.play('atacarini', true);
                } else if (distancia < MAX_DISTANCE) { // Verifique se a distância é menor que a distância máxima permitida
                    if (distanciaX < 0) {
                        // player está à esquerda do inimigo
                        
                        inimigo.setVelocityX(-200);
                        inimigo.anims.play('andarini', true);
                        inimigo.flipX = true;
                    } else if (distanciaX > 0) {
                        // player está à direita do inimigo
                        inimigo.setVelocityX(100);
                        inimigo.anims.play('andarini', true);
                        inimigo.flipX = false;
                    } else {
                        // player está perto o suficiente do inimigo, pare o movimento
                        inimigo.setVelocityX(0);
                        inimigo.anims.play('paradoini', true);
                    }
                } else { // Caso contrário, pare o movimento do inimigo
                    inimigo.setVelocityX(0);
                    inimigo.anims.play('paradoini', true);
                }
            }
            //inimigo1-----------------------------------

        //---------------------------------------------- 
        
            //inimigo2-----------------------------------
                
        const MAX_DISTANCE2 = 300; // Defina a distância máxima em pixels que o inimigo pode se afastar do ponto de partida

        // Obtenha as posições do jogador e do inimigo
        const inimigo2 = this.inimigo2;
        
        const distanciaX2 = player.x - inimigo2.x;
        const distanciaY2 = player.y - inimigo2.y;
        const distancia2 = Math.sqrt(distanciaX2 * distanciaX2 + distanciaY2* distanciaY2); // Calcule a distância entre o jogador e o inimigo usando o teorema de Pitágoras
            if(this.inimigo2.vida> 0){
                if (!this.inimigo2.podeAtacar) {
                    inimigo2.anims.play('atacarini', true);
            }else if (distancia2 < MAX_DISTANCE2) { // Verifique se a distância é menor que a distância máxima permitida
            if (distanciaX2 < 0) {
                // player está à esquerda do inimigo
                inimigo2.setVelocityX(-200);
                inimigo2.anims.play('andarini', true);
                inimigo2.flipX = true;
            } else if (distanciaX2 > 0) {
                // player está à direita do inimigo
                inimigo2.setVelocityX(100);
                inimigo2.anims.play('andarini', true);
                inimigo2.flipX = false;
            } else {
               
                     // player está perto o suficiente do inimigo, pare o movimento
                inimigo2.setVelocityX(0);
                inimigo2.anims.play('paradoini', true);
                
            }
        } else { // Caso contrário, pare o movimento do inimigo
            inimigo2.setVelocityX(0);
            inimigo2.anims.play('paradoini', true);
            }
        
        
        }
            //inimigo2-----------------------------------
        //---------------------------------------------- 
        
            //inimigo3-----------------------------------
            const MAX_DISTANCE3 = 300; // Defina a distância máxima em pixels que o inimigo pode se afastar do ponto de partida

            // Obtenha as posições do jogador e do inimigo
            const inimigo3 = this.inimigo3;
            
            const distanciaX3 = player.x - inimigo3.x;
            const distanciaY3 = player.y - inimigo3.y;
            const distancia3 = Math.sqrt(distanciaX3 * distanciaX3 + distanciaY3* distanciaY3); // Calcule a distância entre o jogador e o inimigo usando o teorema de Pitágoras
                if(this.inimigo3.vida> 0){
                if (!this.inimigo3.podeAtacar) {
                        inimigo3.anims.play('atacarini', true);
                }else if (distancia3 < MAX_DISTANCE3) { // Verifique se a distância é menor que a distância máxima permitida
                if (distanciaX3 < 0) {
                    // player está à esquerda do inimigo
                    inimigo3.setVelocityX(-200);
                    inimigo3.anims.play('andarini', true);
                    inimigo3.flipX = true;
                } else if (distanciaX3 > 0) {
                    // player está à direita do inimigo
                    inimigo3.setVelocityX(100);
                    inimigo3.anims.play('andarini', true);
                    inimigo3.flipX = false;
                } else {
                   
                         // player está perto o suficiente do inimigo, pare o movimento
                    inimigo3.setVelocityX(0);
                    inimigo3.anims.play('paradoini', true);
                    
                    // player está perto o suficiente do inimigo, pare o movimento
                    inimigo3.setVelocityX(0);
                    inimigo3.anims.play('paradoini', true);
                }
            } else { // Caso contrário, pare o movimento do inimigo
                inimigo3.setVelocityX(0);
                inimigo3.anims.play('paradoini', true);
            }
                }else{
            
            }
                //inimigo3-----------------------------------
            //---------------------------------------------- 
            
            //inimigo4-----------------------------------
            const MAX_DISTANCE4 = 300; // Defina a distância máxima em pixels que o inimigo pode se afastar do ponto de partida

            // Obtenha as posições do jogador e do inimigo
            const inimigo4 = this.inimigo4;
            
            const distanciaX4 = player.x - inimigo4.x;
            const distanciaY4 = player.y - inimigo4.y;
            const distancia4 = Math.sqrt(distanciaX4 * distanciaX4 + distanciaY4* distanciaY4); // Calcule a distância entre o jogador e o inimigo usando o teorema de Pitágoras
                if(this.inimigo4.vida> 0){
                    if (!this.inimigo4.podeAtacar) {
                        inimigo4.anims.play('atacarini', true);
                }else if (distancia4 < MAX_DISTANCE4) { // Verifique se a distância é menor que a distância máxima permitida
                if (distanciaX4 < 0) {
                    // player está à esquerda do inimigo
                    inimigo4.setVelocityX(-200);
                    inimigo4.anims.play('andarini', true);
                    inimigo4.flipX = true;
                } else if (distanciaX > 0) {
                    // player está à direita do inimigo
                    inimigo4.setVelocityX(100);
                    inimigo4.anims.play('andarini', true);
                    inimigo4.flipX = false;
                } else {
                   
                         // player está perto o suficiente do inimigo, pare o movimento
                    inimigo4.setVelocityX(0);
                    inimigo4.anims.play('paradoini', true);
                    
                    // player está perto o suficiente do inimigo, pare o movimento
                    inimigo4.setVelocityX(0);
                    inimigo4.anims.play('paradoini', true);
                }
            } else { // Caso contrário, pare o movimento do inimigo
                inimigo4.setVelocityX(0);
                inimigo4.anims.play('paradoini', true);
            }
                }else{
            
            }
                //inimigo4-----------------------------------
            //---------------------------------------------- 
              //inimigo5-----------------------------------
              const MAX_DISTANCE5 = 300; // Defina a distância máxima em pixels que o inimigo pode se afastar do ponto de partida

              // Obtenha as posições do jogador e do inimigo
              const inimigo5 = this.inimigo5;
              
              const distanciaX5 = player.x - inimigo5.x;
              const distanciaY5 = player.y - inimigo5.y;
              const distancia5 = Math.sqrt(distanciaX5 * distanciaX5 + distanciaY5* distanciaY5); // Calcule a distância entre o jogador e o inimigo usando o teorema de Pitágoras
                  if(this.inimigo5.vida> 0){
                    if (!this.inimigo5.podeAtacar) {
                        inimigo5.anims.play('atacarini', true);
                }else if (distancia5 < MAX_DISTANCE4) { // Verifique se a distância é menor que a distância máxima permitida
                  if (distanciaX5 < 0) {
                      // player está à esquerda do inimigo
                      inimigo5.setVelocityX(-200);
                      inimigo5.anims.play('andarini', true);
                      inimigo5.flipX = true;
                  } else if (distanciaX >= 0) {
                      // player está à direita do inimigo
                      inimigo5.setVelocityX(100);
                      inimigo5.anims.play('andarini', true);
                      inimigo5.flipX = false;
                  } else {
                           // player está perto o suficiente do inimigo, pare o movimento
                      inimigo5.setVelocityX(0);
                      inimigo5.anims.play('paradoini', true);
                  }
              } else { // Caso contrário, pare o movimento do inimigo
                  inimigo5.setVelocityX(0);
                  inimigo5.anims.play('paradoini', true);
              }
                  }else{
              
              }
                  //inimigo5-----------------------------------
              //---------------------------------------------- 
     }
        
    }
 }