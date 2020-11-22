var database;
var gamestate = 0;
var playercount, form, game, player;
var playerdata;
var distance;
var car1, car2, car3, car4;
var cararray;
var car1img, car2img, car3img, car4img;
var trackimg, groundimg;

function preload(){
car1img = loadImage("images/car1.png");
car2img = loadImage("images/car2.png");
car3img = loadImage("images/car3.png");
car4img = loadImage("images/car4.png");

trackimg = loadImage("images/track.jpg");
groundimg = loadImage("images/ground.png")

}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth, displayHeight);
game = new Game();
game.getState();
game.start();
  
}

function draw(){
  if(playercount === 4){
    game.update(1);
  }
  if(gamestate == 1){
    clear();
    game.play();

  }

  if(gamestate === 2){
    game.end();
  }
  
   
  
  
}

