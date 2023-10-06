//Aqui são criados os objetos que são chamados nas cenas
class Preload extends Phaser.Scene{
    constructor(){
        super('Preload')
    }

    preload(){
        
            //AUDIOS---------------------------------------
            this.load.audio('audio-fundo4','img/audio/fundo/fundo-fase4.mp3')
            
            

             //AUDIOS---------------------------------------


        //carregando os elementos que ficaram dentro do jogo
        // --------- CENA INICIAL ----------
        //Creganod imagem de fundo para a Cena inicial (StarScena)
      
          // --------- CENA INICIAL ----------
          this.load.image('historia1','img/historia/fase1/Cidadeten.png')
      

        // --------- IMAGENS DA CENA  01----------
            //dialogo
        this.load.image('dialogo1','img/gato/fase1/dialogo1.png')
        this.load.image('dialogo2','img/gato/fase1/dialogo2.png')
        this.load.image('dialogo3','img/gato/fase1/dialogo3.png')
        this.load.image('dialogo4','img/gato/fase1/dialogo4.png')
        this.load.image('dialogo5','img/gato/fase1/dialogo5.png')
        this.load.image('dialogo6','img/gato/fase1/dialogo6.png')
        this.load.image('dialogo7','img/gato/fase1/dialogo7.png')
        this.load.image('dialogo8','img/gato/fase1/dialogo8.png')
        this.load.image('dialogo9','img/gato/fase1/dialogo9.png')
        this.load.image('dialogo10','img/gato/fase1/dialogo10.png')
        this.load.image('dialogo11','img/gato/fase1/dialogo11.png')
        //cenario
        this.load.image('cerca1','img/objetos/objetos01/Fence_01.png')
        this.load.image('cerca2','img/objetos/objetos01/Fence_02.png')
        this.load.image('cerca3','img/objetos/objetos01/Fence_03.png')
        this.load.image('lanterna','img/objetos/objetos01/Street_Lantern.png')
        this.load.image('tenda1','img/objetos/objetos01/Trade_Tent_01.png')
        this.load.image('tenda2','img/objetos/objetos01/Trade_Tent_02.png')
        this.load.image('fogao','img/objetos/objetos01/Furnace.png')
        this.load.image('ferramenta','img/objetos/objetos01/Tool_Board.png')
        this.load.image('carroca','img/objetos/objetos01/Decor_Cart.png')
        this.load.image('poço','img/objetos/objetos01/Well.png')
        this.load.image('mesa1','img/objetos/objetos01/Table_01.png')
        this.load.image('mesa2','img/objetos/objetos01/Table_02.png')
        this.load.image('poçao1','img/objetos/objetos01/Decor_Potions_01.png')
        this.load.image('poçao2','img/objetos/objetos01/Decor_Potions_02.png')
        this.load.image('peito','img/objetos/objetos01/Decor_Cuirass.png')
        this.load.image('cabeça','img/objetos/objetos01/Decor_Helment.png')
        this.load.image('barril','img/objetos/objetos01/Wooden_Barrel.png')



        // --------- IMAGENS DA CENA  01----------

       

        // --------- IMAGENS DA CENA  02----------
        this.load.spritesheet('cat','img/gato/sprite-gato/cat-idle.png',{frameWidth:48, frameHeight:20}) 
        this.load.image('bg1','img/fundos/Background01.png')
        this.load.image('plataforma1','img/plataformas/Platforma01/plataforma1.png')
        this.load.image('dialogo2-1','img/gato/fase2/dialogo1.png')
        this.load.image('dialogo2-2','img/gato/fase2/dialogo2.png')
        this.load.image('dialogo2-3','img/gato/fase2/dialogo3.png')
        this.load.image('dialogo2-4','img/gato/fase2/dialogo4.png')
        this.load.image('dialogo2-5','img/gato/fase2/dialogo5.png')
        this.load.image('dialogo2-6','img/gato/fase2/dialogo6.png')
        this.load.image('dialogo2-7','img/gato/fase2/dialogo7.png')
        this.load.image('dialogo2-8','img/gato/fase2/dialogo8.png')
        this.load.image('dialogo2-9','img/gato/fase2/dialogo9.png')
        this.load.image('box','img/objetos/objetos01/box.png')
        this.load.image('box1','img/objetos/objetos01/box1.png')
        this.load.image('box2','img/objetos/objetos01/box2.png')
        this.load.image('box1_chama','img/objetos/objetos01/box1-chama.png')
        this.load.image('box2_ar','img/objetos/objetos01/box2-ar.png')
        this.load.spritesheet('chama','img/sprites/fase1/chama.png',{frameWidth:150, frameHeight:110}) 
        this.load.spritesheet('ar','img/sprites/fase1/ar.png',{frameWidth:156, frameHeight:100}) 

        // --------- IMAGENS DA CENA  02----------

        


        // --------- IMAGENS DA CENA  03----------
            //vidas-----------------------------
                this.load.image('vida-5','img/vida/vida-5.png')
                this.load.image('vida-4','img/vida/vida-4.png')
                this.load.image('vida-3','img/vida/vida-3.png')
                this.load.image('vida-2','img/vida/vida-2.png')
                this.load.image('vida-1','img/vida/vida-1.png')
                this.load.image('vida-0','img/vida/vida-0.png')
            //vidas-----------------------------
        this.load.spritesheet('inimigo','img/sprites/inimigo/inimigo.png', {frameWidth:82, frameHeight:60})
        this.load.spritesheet('andar-ini','img/sprites/inimigo/inimigo-andar.png', {frameWidth:85, frameHeight:60})
        this.load.spritesheet('inimigo-ataque','img/sprites/inimigo/inimigo-ataque.png', {frameWidth:85, frameHeight:60})
        this.load.image('osso','img/bone.png')
        this.load.image('carta','img/carta.png')
        this.load.image('fundo-pantano','img/fundos/fundo-pantano.jpg')
        this.load.image('plataforma-03','img/plataformas/plataformas03/plataforma03.png')
        this.load.image('plataforma-03-1','img/plataformas/plataformas03/plataforma03-1.png')
        this.load.image('plataforma-03-2','img/plataformas/plataformas03/plataforma03-2.png')
        this.load.image('plataforma-03-3','img/plataformas/plataformas03/plataforma03-3.png')
        this.load.image('plataforma-03-4','img/plataformas/plataformas03/plataforma03-4.png')
        this.load.image('caixa','img/objetos/box.png')
        this.load.image('grass1','img/objetos/grass1.png')
        this.load.image('grass2','img/objetos/grass2.png')
        this.load.image('iconfogo','img/skills/icon/iconFogo.png')
        this.load.image('iconcol','img/skills/icon/iconcol.png')
        this.load.image('dialogo3-1','img/gato/fase3/dialogo1.png')
        this.load.image('dialogo3-2','img/gato/fase3/dialogo2.png')
        this.load.image('dialogo3-3','img/gato/fase3/dialogo3.png')
        this.load.image('dialogo3-4','img/gato/fase3/dialogo4.png')
        this.load.image('dialogo3-5','img/gato/fase3/dialogo5.png')
        this.load.image('dialogo3-6','img/gato/fase3/dialogo6.png')
        this.load.image('dialogo3-7','img/gato/fase3/dialogo7.png')
        this.load.image('dialogo3-8','img/gato/fase3/dialogo8.png')
        this.load.image('dialogo3-9','img/gato/fase3/dialogo9.png')
        this.load.image('dialogo3-10','img/gato/fase3/dialogo10.png')
        this.load.image('dialogo3-11','img/gato/fase3/dialogo11.png')
        this.load.image('nao','img/objetos/objetos03/nao.png')
        this.load.image('sim','img/objetos/objetos03/sim.png')
       
      


        // --------- IMAGENS DA CENA  03----------

        // --------- IMAGENS DA PRECENA  04----------
            this.load.image('fundo-04','img/fundos/precena04.png')
            this.load.image('fase4-fala1','img/gato/pre-fase4/fase4-fala1.png')
            this.load.image('fase4-fala2','img/gato/pre-fase4/fase4-fala2.png')
            this.load.image('fase4-fala3','img/gato/pre-fase4/fase4-fala3.png')
            this.load.image('fase4-fala4','img/gato/pre-fase4/fase4-fala4.png')
            this.load.image('fase4-fala5','img/gato/pre-fase4/fase4-fala5.png')
            this.load.image('fase4-fala6','img/gato/pre-fase4/fase4-fala6.png')

            
        // --------- IMAGENS DA PRECENA  04----------

        // --------- IMAGENS DA CENA 04----------

        //carregando a imagen de fundo do jogo (cena01)
        this.load.image('fundo-floresta','img/fundos/fundo-floresta.png')
        
    
        //1- para carregar elementos que tem varias imagens juntas (frames) usamos esté comando
        //2- neste caso temos que passar fremeWidht e frameHeight a onde dividmos cada frame.
        this.load.spritesheet('player','img/sprites/player.png', {frameWidth:90, frameHeight:60})
        this.load.spritesheet('player-parado','img/sprites/player-parado.png', {frameWidth:104, frameHeight:60})
        this.load.spritesheet('jump','img/sprites/player-jump.png', {frameWidth:102, frameHeight:70})
        this.load.spritesheet('ataque','img/sprites/player-ataque.png', {frameWidth:100, frameHeight:60})
        this.load.spritesheet('bola-fogo','img/skills/bola-fogo.png', {frameWidth:100, frameHeight:60})


    
        //carregando a imagen das plataformas do jogo
        this.load.image('plataforma-01','img/plataformas/plataforma01.png')
    
        //carregando as esferas azul
        this.load.spritesheet('esfera','img/esfera.png', {frameWidth:153, frameHeight:100})
    
        //carrer bola de fogo
        this.load.image('orb','img/orb-corromp.png')

        //portal
        this.load.spritesheet('portal','img/portal.png',{frameWidth:81.2, frameHeight:100})
        this.load.image('portal-quebrado','img/portal-quebrado.png')
        // --------- IMAGENS DA CENA  04----------


        // --------- IMAGENS DA CENA  05----------
        this.load.image('fundo04','img/fundos/fundo04.png')
        this.load.image('plataforma04','img/plataformas/plataforma04/plataforma04.png')
        this.load.image('plataforma04-1','img/plataformas/plataforma04/plataforma04-1.png')
        this.load.image('plataforma04-2','img/plataformas/plataforma04/plataforma04-2.png')
        this.load.image('plataforma04-3','img/plataformas/plataforma04/plataforma04-3.png')
        // --------- IMAGENS DA CENA  05----------
    
    
    }

    
    create(){
        //chamando a cena para inicar o jogo
        this.scene.start('Scene01')
        
    }



}

