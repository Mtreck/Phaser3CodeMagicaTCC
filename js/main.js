
window.onload = function(){
    /*Configuração do objeto que vai inicar assim que a pagina iniciar */
    
    const config ={
        
     /*TIPO DE RENDERIZAÇÃO */
        type: Phaser.Canvas, //Phaser.AUTO || Phaser.WebGL
        //largura e altura da tela//
        width:1280,
        height:800,
        //aqui adicionamos a cena do jogo, criamos um array porque podemos adicionar varias cenas
        scene:[Preload,
            StartScene,
            Scene01,
            Scene02,
            Scene03,
            Scene04,
            Scene05,
            ],

        //vamos configurar o motor de física do jogo

        //atributo physics é a onde vamos colcoar a fiscia do jogo
        physics:{
            //esté será o motor que vamos usar
            default: 'arcade',
            //aqui vamos configurar o motor
            arcade:{
                //configuração da gravidade, aqui ela vai atuar no eixo Y com 1000 de potencia ( para puxar as coisas mais rapidas aumente a potencia)
                gravity: {y: 1000},

                //mostra a hitBox dos objetos
                debug: false
            }
        },
        pixelArte: true

    }
    const game = new Phaser.Game(config)
    
    
}