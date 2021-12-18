//this file is for get mouse location
var robot=require("robotjs");      //adding robotjs files
robot.moveMouseSmooth(640, 460);    //moving mouse smoothly to pos(x,y)
robot.setMouseDelay(2000);         //delaying mouse movement for next 2000ms


let id=setInterval(fun,1000);     

function fun(){
    let mouse = robot.getMousePos();     //robotjs function to get mouse position

    if(mouse.x<10 || mouse.y<10){    //this condition is to stop the script
        clearInterval(id);
    }
    console.log(mouse.x+"  "+mouse.y);    //displaying position
}


