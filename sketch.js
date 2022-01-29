const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var sunrise1;
var response3;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(sunrise1)
        background(sunrise1);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(response3>=12){
        text("Time : "+ response3%12 + " PM", 50,100);
    }else if(response3==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ response3%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var response1= await response.json();
var response2=response1.datetime;
 response3=response2.slice(11,13);
console.log(response3);
   
 if(response3<19){
  sunrise1=loadImage("sunrise.png");
 }
 else{
  sunrise1=loadImage("sunset.png");
 }
    //change the data in JSON format and store it in variable responseJSON
    

    
    //fetch datetime from responseJSON
    
    

    // slice the datetime to extract hour
    

    
    /*if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);*/
}
