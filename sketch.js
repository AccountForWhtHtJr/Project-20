let gardenImg;
let c1, c2, c3, c4;
let m1, m2, m3, m4;


function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    c1 = loadImage("images/cat1.png");
    c2 = loadImage("images/cat2.png");
    c3 = loadImage("images/cat3.png");
    c4 = loadImage("images/cat4.png");
    m1 = loadImage("images/mouse1.png");
    m2 = loadImage("images/mouse2.png");
    m3 = loadImage("images/mouse3.png");
    m4 = loadImage("images/mouse4.png");
}

let c, m;
function setup() {
    frameRate(60);
    createCanvas(1000, 800);
    //create tom and jerry sprites here
    c = createSprite(width - width / 4, height - height / 3);
    c.scale -= 0.7;
    c.addImage(c4);
    m = createSprite(width / 4, height - height / 3);
    m.scale -= 0.8;
    m.addImage(m4);

}

function draw() {
    m.x = mouseX - m.width / 2;
    background(gardenImg);
    if (frameCount < 200) {
        textAlign(CENTER);
        fill(0);
        noStroke();
        textSize(50);
        text("Move your mouse to move this mouse.", width / 2, 50);
    }

    //Write condition here to evalute if tom and jerry collide
    if (c.x - m.x < (c.width - m.width) / 2) {
        m.addImage(m1); c.addImage(c3);
    } else { m.addImage(m2); c.addImage(c1); }


    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here
    if (keyCode == LEFT_ARROW) { m.addImage(m3); c.addImage(c2); }

}
