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
                frameRate: 8,
                repeat: -1
             })  
       

            


         

             //Este metodo cria um objeto que controla os eventos disparados pelas setas do teclado
          this.control = this.input.keyboard.createCursorKeys()  
          
          
          this.plataformas = this.physics.add.staticGroup()

          this.plataformas.create(-60,800,'plataforma-01')
          .setScale(1.2,1)
          .setOrigin(0,1) 
          .refreshBody()

          //Aqui criamos outras plataformas para fazer parte do cenario
          this.plataformas.create(650,600,'plataforma-01')
          .setScale(0.3,1)
          .refreshBody()
          this.plataformas.create(1230,400,'plataforma-01')
          .setScale(0.5,1)
          .refreshBody()
          this.plataformas.create(190,400,'plataforma-01')
          .setScale(0.5,1)
          .refreshBody()
          this.plataformas.create(430,200,'plataforma-01')
          .setScale(0.5,1)
          .refreshBody()



          //Está declaração passa como parametro os objetos que vão colidir assim nao deixando passar um por dentro do outro. 
          this.physics.add.collider(this.player, this.plataformas)
     
        
     
          this.physics.world.setBounds(0,0,1400,800)

          //Esté comando (this.cameras.main.startFollow(this.player) faz que a camera siga o objeto desejado, neste caso o player.
          //A segunda parte (.setBounds(0,0,1400,800) faz que a camera respeite os limites da tela de jogo, ela ira seguir o objeto até um ponto e quando chegar no limite da tela a camera deixa de seguir o objeto  
          this.cameras.main.startFollow(this.player)
          .setBounds(0,0,1400,800)

          this.gameOver = false

        
    }





    

    
    update(){

        // todas as açoes do jogo estão dentro desaa função, ele é usada para dar game over no jogo, (congelar o jogo caso o jogar perca)
        if(!this.gameOver){
        //aqui se aplica a logica dos comandos
        //------------------------------------------------------   
        //aqui estamos aplicando os comando para fazer o objeto (player) se movimentar para esquerda e direita no eixo X, o parametro 150 é a velocidade de movimento, para o lado esquerdo (left) o parametro deve ser negativo
        // this.player.anims.play('andar',true) = esse comando chama a animação criada no bloco create.
        //this.player.flipX = true  = esse comando faz que ao andar para esquerda, se crie um espelho do objeto assim dando a impreção de andar para trás
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

        //----------------------------------------
        //Neste bloco estamos aplicando os comando para fazer o objeto (player) pular no eixo Y, condições:

        //this.control está instanciado em create e está passando os comandos enviados pelas setas do teclado

        //this.control.up.isDown = aqui passamos que quando a seta para cimda do teclado for precionada (.insDown) o comando (this.control) ira receber e fazer o objeto pular (.up)

        //this.player.canJUMP = este comando está instanciado em create e permite que o personagem pule. esse coamando foi criado para corrigir a logica do pulo, agora todas vez que a seta para cima (UP) é precionada o valor false é atribuido, assim não podendo pular novamente, mas se deixada de precionar a seta canJUMP recebe novamente o valor true.

        // this.player.body.touching.down = aqui estamos passando que o objeto Player (this.player) só vai conseguir saltar se seu corpo (.bady) estiver tocando (.touching) outro objeto por baixo (.down). (esacondição foi criada para que o jogador seja forçado a tocar nas plataformas para pular,se não ele poderia manter a seta pra cima precionada e sair voando)

  

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