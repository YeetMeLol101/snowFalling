const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var backgroundImg
var engine, world;
var snow = [];
var maxSnow = 100
var flake

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  /*if (frameCount % 200 === 0){
    for (var i = 0; i<maxSnow; i++){
      snow.push(new Flake(random(0,400),random(0,400)))
    }
  }*/
}

function preload() {
  backgroundImg = loadImage("snow3.jpg")
}

function draw() {
  Engine.update(engine);
  background(backgroundImg);
  if (frameCount % 200 === 0){
    for (var i = 0; i<maxSnow; i++){
      snow.push(new Flake(random(0,400),random(0,400)))
    }
  }
  for (var i = 0; i<maxSnow; i++){
    snow[i].showSnow();
  }
  
  drawSprites();
}

