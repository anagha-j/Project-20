var bgImg, bg, mouse, mouseImg1 ,mouseImg2,mouseImg3, cat, catImg1, catImg2, catImg3;
function preload() {
    //load the images here
    bgImg = loadImage ("garden.png");

    catImg1= loadAnimation ("cat1.png");
    catImg2= loadAnimation ("cat2.png", "cat3.png");
    catImg3 = loadAnimation ("cat4.png");

    mouseImg1 = loadAnimation ("mouse1.png");
    mouseImg2 = loadAnimation ("mouse2.png","mouse3.png");
    mouseImg3 =loadAnimation ("mouse4.png");
}

function setup(){
    createCanvas(1000,580);
    //create tom and jerry sprites here
    
    mouse = createSprite(300,500,80,80);
    mouse.addAnimation ("mouse", mouseImg1);
    mouse.scale =0.1;
   // mouse.debug = true;

    cat = createSprite(900,500,80,80);
    cat.addAnimation("cat", catImg1);
    cat.scale =0.1;
    
}

function draw() {

    background(bgImg);

    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x< (cat.width- mouse.width)/2){
        mouse.addAnimation ("mouse2", mouseImg3);
        mouse.changeAnimation ("mouse2");

        cat.addAnimation("cat2",catImg3)
        cat. changeAnimation ("cat2");
        cat. velocityX =0;
        cat.x = 380;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if (keyCode == LEFT_ARROW){
        mouse.addAnimation("mouse1", mouseImg2);
        mouse.changeAnimation("mouse1");
        mouse.frameDelay =25;

        cat.velocityX = -3;
        cat.addAnimation("catRun", catImg2);
        cat. changeAnimation("catRun");
    }
}
