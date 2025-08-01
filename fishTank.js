//variables assigned
background(0, 196, 255);

var centerX = 200;
var centerY = 100;
var bodyLength = 100;
var bodyHeight = 75;
var desgnBody = 200;
var desgnHeight = 100;
var bodyColor = color(162, 0, 255);
// r g b created for random generation of colors within an rgb fill command code 
var r = random(0,255);
var g = random(0,255);
var b = random(0,255);


// main loop used to draw fish within starting screen
var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor){
noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};     

drawFish(100, 94, 94, 75, color(255, 0, 0));
drawFish(269, 100, 100, 100, color(0, 64, 255));
drawFish(91, 217, 72, 58, color(245, 206, 10));
drawFish(230, 190, 72, 58, color(9, 255, 0));



// Bonus 5 - Add design elements to the tank
var drawPebbles = function(centerX, centerY, desgnBody, desgnHeight){
    image(getImage("cute/GemBlue"), centerX, centerY, desgnBody, desgnHeight);
    
};

drawPebbles(-34, 279, 108, 128);
drawPebbles(23, 279, 108, 128);
drawPebbles(326, 279, 108, 128);
drawPebbles(252, 279, 108, 128);
drawPebbles(87, 279, 108, 128);
drawPebbles(171, 279, 108, 128);

var drawSeaweed = function(centerX, centerY, desgnBody, desgnHeight){
    image(getImage("cute/TreeTall"), centerX, centerY, desgnBody, desgnHeight);
    
};

drawSeaweed(-56, 7, 108, 399);
drawSeaweed(304, -92, 108, 529);
drawSeaweed(127, 117, 23, 308);
drawSeaweed(306, 215, 23, 182);
drawSeaweed(382, 215, 23, 182);
drawSeaweed(348, 215, 23, 182);
drawSeaweed(227, 31, 23, 382);

var drawBubbles = function(centerX, centerY, desgnBody, desgnHeight){
    image(getImage("space/collisioncircle"), centerX, centerY, desgnBody, desgnHeight);
    
};

drawBubbles(132,30,30,30);
drawBubbles(141,-1,30,30);
drawBubbles(120,186,13,20);
drawBubbles(132,168,13,20);
drawBubbles(138,141,22,20);
drawBubbles(261,166,13,11);
drawBubbles(256,158,13,11);
drawBubbles(268,158,13,11);
drawBubbles(256,147,13,11);
drawBubbles(304,47,13,11);
drawBubbles(324,16,31,11);

var drawSand = function(centerX, centerY, desgnBody, desgnHeight){
    image(getImage("cute/DirtBlock"), centerX, centerY, desgnBody, desgnHeight);
    
};

drawSand(-1,316,100,100);
drawSand(93,316,100,100);
drawSand(188,316,100,100);
drawSand(279,316,100,100);
drawSand(369,316,100,100);

var drawTreasure = function(centerX, centerY, desgnBody, desgnHeight){
    image(getImage("cute/ChestClosed"), centerX, centerY, desgnBody, desgnHeight);
    
};

drawTreasure(32,246,100,100);

var drawTreasuretwo= function(centerX, centerY, desgnBody, desgnHeight){
    image(getImage("cute/ChestOpen"), centerX, centerY, desgnBody, desgnHeight);
    
};

drawTreasuretwo(209,246,100,100);

var drawTreasurethree= function(centerX, centerY, desgnBody, desgnHeight){
    image(getImage("cute/GemOrange"), centerX, centerY, desgnBody, desgnHeight);
    
};

drawTreasurethree(218,318,30,50);
drawTreasurethree(244,318,30,50);
drawTreasurethree(196,318,30,50);
drawTreasurethree(271,318,30,50);
drawTreasurethree(296,318,30,50);
drawTreasurethree(230,339,30,50);
drawTreasurethree(262,343,30,50);
drawTreasurethree(208,338,30,50);
drawTreasurethree(282,344,30,50);
drawTreasurethree(244,352,30,50);
drawTreasurethree(218,358,30,50);



// Bonus 6 - Create mouseClicked function add more fish. (In my example, I went a step further
// I used random number generator syntax to generate random color and sizes using syntax mouseClicked
mouseClicked = function() {
    drawFish(mouseX, mouseY, random(0,150), random(0,150), random(color(r, g, b)));
};


     
