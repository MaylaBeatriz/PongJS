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

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(30);
  mostraBolinha();
  mostraRaquete();
  //movimentaBolinha();
  verificaColisaoBorda();  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
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