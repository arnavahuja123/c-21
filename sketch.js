var bullet ,speed,weight;
var wall,weight,thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(40, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);
  speed=random(223,321);
  weight=random(30,52);
  thinkness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x=bullet.x <(bullet.width+wall.width)/2){
    bullet.velocityX = speed;
    var deformaion=0.5*witdh*speed*speed/22509;
    if(deformation>180)
    {
      bullet.shapColor = color(255,0,0)
    }
    if(deformation) 180 && deformation>100;
    bullet.shapeColor=color(230,230,0)
    if(defromation<100){
      bullet.shapeColor=color(0,255,0);
    }
    if(collided(bullet,wall)){
      bullet.velocity=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if (damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    }
  
  }
  drawSprites();
}
function collided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge=wallLeftEdge){
    return  true;
  }
  return false;
}