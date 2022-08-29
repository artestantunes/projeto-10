var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var parede1 = createSprite(200,120,400,5);
parede1.shapeColor = "black";
var parede2 = createSprite(200,270,400,5);
parede2.shapeColor = "black";
var inicio = createSprite(30,195,59,145);
inicio.shapeColor = "lightblue";
var fim = createSprite(370,195,59,145);
fim.shapeColor = "yellow";
var jogador = createSprite(30,200,15,15);
jogador.shapeColor = "green";
var bolinha1 = createSprite(100,200,13,13);
bolinha1.shapeColor = "red";
bolinha1.velocityY = 7;
var bolinha2 = createSprite(150,200,13,13);
bolinha2.shapeColor = "red";
bolinha2.velocityY = -7;
var bolinha3 = createSprite(250,200,13,13);
bolinha3.shapeColor = "red";
bolinha3.velocityY = 7;
var bolinha4 = createSprite(300,200,13,13);
bolinha4.shapeColor = "red";
bolinha4.velocityY = -7;











var pontuacao = 0;

createEdgeSprites();

function draw() {
  background("white");
  
  
  
  text("vidas"+pontuacao,200,110);
  
  
if (keyDown("left")){
jogador.x = jogador.x - 3;
}
if (keyDown("right")){
jogador.x = jogador.x + 3;
}
  
jogador.bounceOff(edges);
  
bolinha1.bounceOff(parede1);
bolinha1.bounceOff(parede2);
bolinha2.bounceOff(parede1);
bolinha2.bounceOff(parede2);
bolinha3.bounceOff(parede1);
bolinha3.bounceOff(parede2);
bolinha4.bounceOff(parede1);
bolinha4.bounceOff(parede2);
bolinha1.bounceOff(parede1);
bolinha1.bounceOff(parede2);
bolinha2.bounceOff(parede1);
bolinha2.bounceOff(parede2);
bolinha3.bounceOff(parede1);
bolinha3.bounceOff(parede2);
bolinha4.bounceOff(parede1);
bolinha4.bounceOff(parede2);

if(bolinha1.isTouching(jogador) || bolinha2.isTouching(jogador) || bolinha3.isTouching(jogador) || bolinha4.isTouching(jogador)){
}


  
  
  if(bolinha1.isTouching(jogador)){
 jogador.x = 30;

  pontuacao = pontuacao + 1;
}

if(bolinha2.isTouching(jogador)){
 jogador.x = 30;

  pontuacao = pontuacao + 1;
}

if(bolinha3.isTouching(jogador)){
 jogador.x = 30;

  pontuacao = pontuacao + 1;
}

if(bolinha4.isTouching(jogador)){
 jogador.x = 30;

  pontuacao = pontuacao + 1;
}
  
  
  drawSprites();
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
