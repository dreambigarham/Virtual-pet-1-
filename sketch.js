//Create variables here
var dog, happydog,database, foodS,foodStock,    
dog1
function preload()
{
dog=loadImage("images/Dog.png")
happydog=loadImage("images/dogImg1.png")
  //load images here
}

function setup() {
	createCanvas(500,500);
  database=firebase.database()
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
 dog1=createSprite(250,250,50,50)  
 dog1.addImage(dog)
 dog1.scale=0.2
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here
  textSize(20)
  fill("white")
  stroke("red")
  text("Press up arrow to feed the puppy",150,50)
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog1.addImage(happydog);
  }
} 


function readStock(data){
  foodS=data.val();
}
function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref("Food").update({
    Food:x
  })
}

