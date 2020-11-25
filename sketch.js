var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;


var form, player, game;
var p1,p2,p3,p4,bg,bullet,zom;
var player1,player2,player3,player4,pr;
var zombie,bl;
function preload(){

p1=loadImage("p1.jpg")
p2=loadImage("p2.jpg")
p3=loadImage("p3.jpg")
p4=loadImage("p4.jpg")

bg=loadImage("bg.jpg");

bullet=loadImage("bullet.jpg");

zom=loadImage("zombie.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
