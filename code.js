var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dd5ba75a-532a-4d83-b3db-0b71b46c19ce","5cf1204c-ed16-44cf-92d1-a260c03c37fe","04178677-fe11-4193-8c56-8a4465199fa1","c9f9e2df-9e9f-4060-9eb0-eeb8b1738a75","ee67a81b-fadf-4180-ba45-7f7d3f5afc73","56709982-104b-4edb-a596-f918259cacb7"],"propsByKey":{"dd5ba75a-532a-4d83-b3db-0b71b46c19ce":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png","frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":2,"version":"NLtwV2Syoag9LPwdF8r91wCF6jRKYq07","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png"},"5cf1204c-ed16-44cf-92d1-a260c03c37fe":{"name":"s","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"h1HZJAH7ypAUfmsqqD.i2cz4PHkn4xpq","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/5cf1204c-ed16-44cf-92d1-a260c03c37fe.png"},"04178677-fe11-4193-8c56-8a4465199fa1":{"name":"computer","sourceUrl":"assets/api/v1/animation-library/gamelab/_SDQ1dIBEtInjpIwDRUMQ28XU9YOU0wo/category_vehicles/enemyRed1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"_SDQ1dIBEtInjpIwDRUMQ28XU9YOU0wo","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_SDQ1dIBEtInjpIwDRUMQ28XU9YOU0wo/category_vehicles/enemyRed1.png"},"c9f9e2df-9e9f-4060-9eb0-eeb8b1738a75":{"name":"player","sourceUrl":null,"frameSize":{"x":103,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"xf9bHf4p9CyCYHp2er29zZjDtsRimpje","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":84},"rootRelativePath":"assets/c9f9e2df-9e9f-4060-9eb0-eeb8b1738a75.png"},"ee67a81b-fadf-4180-ba45-7f7d3f5afc73":{"name":"goldui16_result_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6NYfpZPLRo55E4BW8CrSBVVDlWAP4h5a/category_icons/goldui16_result.png","frameSize":{"x":396,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"6NYfpZPLRo55E4BW8CrSBVVDlWAP4h5a","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6NYfpZPLRo55E4BW8CrSBVVDlWAP4h5a/category_icons/goldui16_result.png"},"56709982-104b-4edb-a596-f918259cacb7":{"name":"goldui17_result_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Oi_GFI2r9Nw2QRZM.KlmOlMk8HAsekB0/category_icons/goldui17_result.png","frameSize":{"x":396,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"Oi_GFI2r9Nw2QRZM.KlmOlMk8HAsekB0","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Oi_GFI2r9Nw2QRZM.KlmOlMk8HAsekB0/category_icons/goldui17_result.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//creacion de la variables-color
var canchacomputer =createSprite(200,15,125,20)
canchacomputer.shapeColor= "#ff8c00"

var canchaplayer=createSprite(200,385,125,20)
canchaplayer.shapeColor=" #2ef400"
//creacion de la variables player,computer con las animaciones
var player= createSprite(200,350,50,10)
player.setAnimation("player")
player.scale=0.4
var computer=createSprite(200,50,50,10)
computer.setAnimation("computer")
computer.scale=0.4
var ball=createSprite(200,200,20,20)
ball.setAnimation("ball")
ball.scale=0.08
//cracion de los contadores computer-player
var computerscore=0
var playerscore=0
var gameState= "serve" //creacion del estado del juego

//funcion para dibujar
function draw() {
  background("#3b0944")//color al fondo
  
  //estado del juego para iniciar cuando le presioes la tecla"space".(semuestra texto y velocidad de inicio de la pelota)
    if(gameState=="serve"){
    textSize(16)
    stroke("#1ff9ff ")
    fill("#1ff9ff ")
    text("BIENVENIDO presiona SPACE ",105,174)
    text("para comenzar esta guerra espacial !!",85,235)
    stroke("#2ef400")
    fill("#2ef400")
    text ("* presiona la flecha izquierda y derecha para mover tu nave" ,10,270,200,100)
     //condicion para que empiece el juego-velocidad de la pelota
    if(keyDown("space")){
    ball.velocityY =8
    ball.velocityX =9
    gameState="play"
   }
  }
  
  // estado de juego play (movimiento de la pelota, paleta player, agreagar el final)
  if(gameState=="play"){
    if(keyDown("space")){
    ball.velocityY =8
    ball.velocityX =9
    gameState="play"
   }
    
    if(keyDown("left")){
    player.x=player.x-7; 
  }
    if(keyDown("right")){
    player.x=player.x+7; 
  }
     //metodo IA
     computer.x= ball.x
    if (computerscore==5){
      gameState="end"
    } 
  }
  //estado del juego en "end", cuando el marcador del computador sea igual a 5 (final del juego)
  if (gameState=="end"){
  //condicional para que cuando el score del computer sea igual a 5, escriba el siguiete texto
  if (computerscore===5){
    textSize(20)
    textFont("oswal")
    stroke("red") 
    fill("red")
    text("HAS PREDIDO :C ",125,300)
   
  }
  }
 
  //cracion del texto para la puntuacion de cada jugador 
  textSize(15)
  fill ("white")
  stroke ("orange")
  text("computer: "+computerscore,22,150)
  stroke ("green")
  text("player: "+playerscore,22,250)
  

  
  //bucle para hacer un circuaito de lineas chiquitas
  for (var i = 0; i < 400; i=i+20) {
    stroke ("white")
    line(i,200,i+10,200);
    
  }
   
  //condicional para realizar cuando la pelota toque la cancha del juagador
  if (ball.isTouching(canchaplayer)){
    computerscore=computerscore+1//aumentador por 1 de los puntos
    //ubicacion de la pelota
    ball.x=200
    ball.y=200
    //velocidad de la pelota
    ball.velocityY= 0
    ball.velocityX= 0
    playSound( "assets/category_explosion/playful_game_explosive_hit.mp3")
    
    
  }
    //condicional para realizar cuando la pelota toque la cancha del computador
  if (ball.isTouching(canchacomputer)){
    playerscore=computerscore+1//aumentadeo por 1 de los puntos
    //ubicacion de la pelota
    ball.x=200
    ball.y=200
    //velocidad de la pelota
    ball.velocityY=0
    ball.velocityX= 0
    playSound( "assets/category_explosion/playful_game_explosive_hit.mp3") 
    
  }
  
  
 //condicional para que cuando el score del player sea igual a 5, escriba el siguiete texto
 if (playerscore===5){
    textSize(20)
    textFont("oswal")
    stroke("red") 
    text("HAS GANADO :D ",150,300)
    
  }
 //condicional para agregarle sonido a os jugadores  
 if (ball.isTouching(computer)|| ball.isTouching(player)){
   playSound( "assets/category_accent/puzzle_game_accent_small_b_02.mp3")
 }
  //funcion para crear los bordes de juego
  createEdgeSprites()
  ball.bounceOff (edges)
  ball.bounceOff (player)
  ball.bounceOff (computer)
  computer.bounceOff(edges)
  player.bounceOff(edges)
  //funcion para dibujar los sprites
  drawSprites()
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
