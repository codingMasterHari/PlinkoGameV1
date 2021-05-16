const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const bgSound = new Audio("applebgsoung.wav");
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
function preload() {
  rabbit = loadImage("rabbit.png");
  bg = loadImage("treeBG.png");
  squirrel = loadImage("spuirrel.png");
  snake = loadImage("snake.png");
  bird = loadImage("bird.png");
  butterfly = loadImage("butterfly.png");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height, width, 20);

  //create division objects
  for (var k = 0; k <= 800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <= width; j+=50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <= width-10; j=j+50) {
    plinkos.push(new Plinko(j, 175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <= width-20; j=j+50) {
    plinkos.push(new Plinko(j, 275));
  }
  
  //create 4th row of plinko objects
  for (var j = 0; j <= width-25; j=j+50) {
    plinkos.push(new Plinko(j+20, 375));
  }

}
 
function draw() {
  background(bg);
  image(rabbit, 400, 500, 60, 40);
  image(squirrel, 200, 200, 60, 50);
  image(snake, 550, 200, 100, 50);
  image(bird, 400, 100, 30, 30);
  image(butterfly, 350, 300, 40, 40);
  image(butterfly, 400, 400, 40, 40);
  image(butterfly, 100, 100, 40, 40);
  image(butterfly, 300, 200, 40, 40);
  textSize(20);
  bgSound.play();
  bgSound.loop = true;
  randomNumber = Math.round(random(0, 1200));
  console.log(randomNumber);
 
  Engine.update(engine);
  ground.display();
  //create particle objects
  if(frameCount % 10 == 0) {
    particles.push(new Particle(width/2-randomNumber, width/40+10, 10));
  }   
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var z = 0; z < particles.length; z++) {
    particles[z].display();
  }
}