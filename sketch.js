//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//jogador
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

let colidiu = false;

//pontos
let meusPontos = 0;
let pontosOponente = 0;

//sons
let raquetada;
let ponto;
let trilha;

function preload(){
  raquetada = loadSound("Pong - Sons/raquetada.mp3")
  ponto = loadSound("Pong - Sons/ponto.mp3")
  trilha = loadSound("Pong - Sons/trilha.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(30);
  mostraBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaBolinha();
  verificaColisaoBorda();  
  movimentaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  //colisaoMinhaRaqueteBiblioteca();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  // if (keyIsDown(87)) {
  //   yRaqueteOponente -= 10;
  // }
  // if (keyIsDown(83)){
  //   yRaqueteOponente += 10;
  // }
  calculaChanceDeErrar();
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || 
    xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio > height || 
    yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

// function verificaColisaoRaquete(){
//   if (xBolinha - raio < xRaquete + raqueteComprimento &&
//     yBolinha - raio < yRaquete + raqueteAltura &&
//     yBolinha + raio > yRaquete){
//     velocidadeXBolinha *= -1;
//   }
// }

function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1
    raquetada.play();
  }
}

// function colisaoMinhaRaqueteBiblioteca(){
//   colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
//   if (colidiu){
//     velocidadeXBolinha *= -1
//   }
// }

function incluiPlacar(){  
  stroke(255);
  textAlign(CENTER); 
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}