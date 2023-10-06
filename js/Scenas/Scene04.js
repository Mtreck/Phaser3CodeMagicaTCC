//A cena sera uma classe a onde ela herda (extends) caracteristicas da biblioteca Phaser

class Scene04 extends Phaser.Scene{
    // função construtora
    constructor(){
        //em super vamo colcoar o nome da cena, para quando precisar podemos chamar ela
        super('Scene04')
    }

    //metodos basicos de phaser que são desenvolvidos em casa cena, metodo de carregamento de recursos, criação desses recursos, metodo de atualização de dinamicas do jogo.

    //O arquivo Preload.js é a onde as imagens e os objetos são criados


    create(){
        //exibi os elementos carregados no preload

        //1 -aqui estamos adicionando o elemento forest que está no preload, e colocando ele no canto superior esquerdo 0,0
        //2 -setOrigin faz que o ponto de referencia da IMAGEM seja na parte superior esquerda 0,0(se não o phaser faz o centro da imagem como ponte de referencia)
         this.forest = this.add.image(0,0,'fundo-floresta').setOrigin(0,0)

         //Aqui ajustamos as imagens para o tamanho da tela que foi declarada na main.js, para que fique tamanho total
         this.forest.displayWidth = 1480
         this.forest.displayHeight = 800

         //Vamos adicionar o player que já está configurado na função preload, aqui chamamos o personagem atráves da physics porque esté objeto(player) ira sofrer os efeitos do atributo physics que está configurado em main.js

         //Pasamos os parametros 50,600 para indicara onde o objeto ira iniciar na cena, x,y, no caso aqui 50 de distancia da borda lateral e 600 da borda superior, fazendo assim ele já iniciar perto do chão
       
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
             
             

                 //Com esse bloco de comando criamos animações neste caso foi a animação da sprite do objeto player;
             //key: e o como vai ser o nome da animação usamos para chamar a animação
             //fremes: aqui pegamos a sprite que sera usada e (start será 0 pq sera o primeiro frame), (end será um numero a menos de frames que você tem, então se sua sprite tiver 4 frames coloque 3.)
             //FrameRate: é a velocidade que os frames vão passar
             //repeat: e quantas vezes vai repitir essa animação -1 torna infinito
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
       


         // this.portal = this.physics.add.sprite(1200,500,'portal')
         // .setCollideWorldBounds(true) 
          //.setScale(3) 

            // esta forma de colocar objetos no cenario é diferente. Aqui criamos o grupo e ja passsamos a quantidade de objetos e o local a onde esses objetos vão apracer no cenario.
            //trazendo assim uma forma masi facil e limpa de colcocar grandes quantidades do mesmo objeto no cenario.
            //Criamos
            //repeat: a quantidade de objetos no cenario
            //setXY: a onde esses objetos vão aparecer
            //stepX: e a distanca de um objeto ao outro na cordenada X

            this.portal = this.physics.add.group({
                key: 'portal',
                repeat: 1,
                setXY: {
                    x:1150,
                    y:600,
                }
             })

             this.anims.create({
                key: 'anime-portal', 
                frames: this.anims.generateFrameNumbers('portal',{
                    start: 0,
                    end: 4
                }),
                frameRate: 3,
                repeat: -1
             })

             this.portal.children.iterate((portal)=>{
                portal.setScale(2)
                portal.body.setSize(40)
                portal.anims.play('anime-portal')
             })

             //função para passar de fase ( ela verifica se o player em contato com o portal tem 4 esferas)

             this.physics.add.overlap(this.player, this.portal, function() {
                if (this.score === 4) {
                  this.scene.start('PreScene02');
                } else {
                  // Crie o retângulo de fundo
                  let fundo = this.add.rectangle(700, 400, 720, 100, 0x000000, 0.7).setOrigin(0.5);
                  
                  // Crie a mensagem de texto
                  let mensagem = this.add.text(700, 400, 'Você precisa coletar as 4 esferas para passar de fase', { fontSize: '22px', fill: '#FFF' }).setOrigin(0.5);
                  
                  // Faça o fundo e a mensagem desaparecerem depois de 1 segundo
                  this.time.delayedCall(1000, function() {
                    fundo.destroy();
                    mensagem.destroy();
                  }, [], this);
                }
              }, null, this);


            

             this.esfera = this.physics.add.group({
                key: 'esfera',
                repeat: 4,
                setXY: {
                    x:80,
                    y:50,
                    stepX: 350
                }
             })
             // animação da esfera
             this.anims.create({
                key: 'esferas', 
                frames: this.anims.generateFrameNumbers('esfera',{
                    start: 0,
                    end: 3
                }),
                frameRate: 2,
                repeat: -1
             })

             
             // Aqui usaremos o recuro (iterate) para passar caracteristicas para todos os filhos do objeto de uma unica só fez (neste caso do objeto esfera)
             this.esfera.children.iterate((c)=>{
                //esse comando cria um kike no chão de forma aleatoria entre 0.2 e 0.4
                c.setBounceY(Phaser.Math.FloatBetween(.2,.4))
                // aqui colocamos a animação da esfera, ao contrario do objeto(player) e só ativa a animação ao andar aqui a nimação repete infino
                c.anims.play('esferas')
                c.setScale(0.5)
                c.body.setSize(90)
             })


         

             //Este metodo cria um objeto que controla os eventos disparados pelas setas do teclado
          this.control = this.input.keyboard.createCursorKeys()  
          
          //Esté objeto é um grupo de plataformas, fazendo assim que todas as plataformas criadas tenham quase as mesas caracteristicas, esse grupo sofre açoes da física atraves do metodo (physics) e por causa da declaração (staticGroup) esses objetos nao se movem na tela. 
          this.plataformas = this.physics.add.staticGroup()

          //Aqui criamos uma plataforma, passamos sua cordenada em X e Y, e chamamos a imagen da plataforma que foi definada em preload.
          //tambem apliquei algumas alteraçoes nessa plataforma já que ela seria o chão do meu jogo. 
          //(SetScale = redimensiona a plataforma, altera sua altura e largura) 
          //(SetOrigin =para mudar o ponto de ancoragem por padão o phaser coloca no centro da imagem aqui trazesmo para o canto direito inferior)
          //(refreshBody) = faz que todas as alteraçoes anteriores sejam aplciadas, já que como definimos o grupo plataformas com staticGroup ele ano deveria ser alterado.
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
          this.physics.add.collider(this.esfera, this.plataformas)
          this.physics.add.collider(this.portal, this.plataformas)
          
          

          //overlap faz a verificação de sobreposição entre 2 objetos que estiverem no mesmo espaço e chame uma função neste caso (CollectEsferas) 
          //null = aqui seria um metodo de confirmação (true /false) para a função CollectEsferas mas como não queremos esse metodo usamos o valor null
          // this = contexto da função  no caso a cena  de sobreposição overlap
          this.physics.add.overlap(this.esfera, this.player,this.CollectEsferas, null, this)
          // placar do jogo  
          this.score = 0
          // Este metodo cria um texto que sera exibido na tela, os numeros 15,15 são como as cordenadas em X e Y, na parte seguinte estamso declarando o texto que irá aparacer na tela: (`SCORE: ${this.score}/4 `,). 
          //fonteSize/.setShadow = são configuraçãoes adicionais 
          //setScrollFactor = faz esse txto acompanhar a camera
          this.txtscore = this.add.text(15,15,`SCORE: ${this.score}/4 `,{fontSize:'30px'}).setShadow(3,3,'#FFFFFF',2).setScrollFactor(0)
          //Esté metodo serve para atualizar o texto acima   
          this.setScores()

          
        
          
          
          //Aqui criamos um grupo para os inimigos
          //Phaser.Math.Between(50,900),0,'orb' = esse comando faz puxa uma valor aleatorio de 50 a 900 no eixo x para jogar o objeto (inimigo) na cena, o valor 0 representa o eixo Y.
          //.setVelocity(Math.random() < 0.5 ? -200 : 200, 200) = aqui criamos a velocidade de movimento para o objeto.
          // Na primeira parte (Math.random() < 0.5 ?) estamos verificando se valor aleatorio (Math.random()) é menor que 0.5 caso seja menor vamos setar 2 valores para o eixo X -200 e 200 ( lembrando que -200 e a movimentação pra esquerda ).
          // o terceiro valor 200 é o eixo Y
          this.inimigos = this.physics.add.group()
          let inimigo = this.inimigos.create(Phaser.Math.Between(50,900),0,'orb')
          .setBounce(1)
          .setCollideWorldBounds(true)
          .setVelocity(Math.random() < 0.5 ? -300 : 300, 200);
          let inimigo1 = this.inimigos.create(Phaser.Math.Between(50,900),0,'orb')
          .setBounce(1)
          .setCollideWorldBounds(true)
          .setVelocity(Math.random() < 0.5 ? -200 : 200, 200);
          
          this.physics.add.collider(this.inimigos, this.plataformas)
          this.physics.add.collider(this.player, this.inimigos, this.inimigoHit, null, this)
          


          //Está função tem como objetivo expandir o mundo do jogo, assim quando o jogador tocar no canto da tela o mundo do jogo continua. Os dois primeiros valores (0,0) serão valores em X e Y, mantemos 0 e 0 para mantes o tamanho padrão de tela que ja foi definido no arquivo main.js.
          // Os outros 2 valores (1400,800) são o novo tamanho da tela, fazendo assim então que a tela inicial tenha 1200pixel quando o jogador tocar no canto a tela do jogo tela mais 200 pixel, a altura mantemos igual pois queremos ir para frente no jogo não para cima.
          this.physics.world.setBounds(0,0,1400,800)

          //Esté comando (this.cameras.main.startFollow(this.player) faz que a camera siga o objeto desejado, neste caso o player.
          //A segunda parte (.setBounds(0,0,1400,800) faz que a camera respeite os limites da tela de jogo, ela ira seguir o objeto até um ponto e quando chegar no limite da tela a camera deixa de seguir o objeto  
          this.cameras.main.startFollow(this.player)
          .setBounds(0,0,1400,800)

          this.gameOver = false

        
    }


    //inimigoHit = está sendo chamada na declaração de quando o inimigo toca no player. essa declaração está dentro de create.
    // this.physics.pause() = faz que tudo na cena que tenha física pare, o inimigos o player plataformas que se mexa etc..
    // player.setTint(0xff0000) = deixo o objeto com a cor vermelha
    //player.anims.stop() = faz que animação do player pare
    //this.gameOver = true = é a funação que esta em upload ela faz que tudo funcione caso ela tiver o valor false, neste caso quando o player é tocado pelo inimigo a funação recebe o valor true e o jogo congela.
    inimigoHit(player,inimigo){
        this.physics.pause()
        player.setTint(0xff0000)
        player.anims.stop()
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
                    this.scene.start('Scene01')
                })
        },1000)

    }

    //está função verifica se a pontuação atual é maior que 0, se for  exibe "SCORE: {score atual}/4", onde {score atual} é a pontuação atual do usuário. Caso contrário, exibe "SCORE: 0/4".
    setScores(){
        this.txtscore.setText(this.score > 0 ? `SCORE: ${this.score}/4 ` :  `SCORE: 0/4 `) 
    }

    //Está função faz 3 coisas. 
    //1) destroi a esfera quando o objeto player entra no mesmo espaço que ela atraves do comando (esfera.destroy())
    // 2) adiciona mais 1 na pontuação
    // 3) passa esse mais 1 para o metodo this.setScore() que está dentro da função create.
    CollectEsferas(player,esfera){
        esfera.destroy()
        this.score++
        this.setScores()
        

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