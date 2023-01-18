//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variaveis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;


function setup() {
  createCanvas(600, 400);
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
  yRaqueteOponente += velocidadeYOponente;
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
  }
}

// function colisaoMinhaRaqueteBiblioteca(){
//   colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
//   if (colidiu){
//     velocidadeXBolinha *= -1
//   }
// }