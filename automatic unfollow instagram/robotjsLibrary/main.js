//open insta as half window
var robot=require("robotjs");
robot.moveMouseSmooth(665, 286);     //movingmouse
robot.mouseClick();      //clicking the mouse


var count=0;        
let id=setInterval(unFollow,3000);

function unFollow(){
    console.log("hacking x844040 x86 os network pass-> "+count);   //just for fun
    let mouse = robot.getMousePos();

    if(count==20 || mouse.x<10 || mouse.y<10){   //for stopping the script ,change the count for different output 
        clearInterval(id);
    }

    count++;

    robot.moveMouseSmooth(640, 460);  //for unfollow button   ,change the value according to screen
    robot.mouseClick();

    robot.setMouseDelay(2000);       //for confirm button
    robot.moveMouseSmooth(472, 667);
    robot.mouseClick();

    robot.setMouseDelay(2000);     //for reclick to get focus on unfollow section
    robot.moveMouseSmooth(742, 467);
    robot.mouseClick();

    robot.keyTap("down");       //for clicking down arrow key,for scrolling
}


