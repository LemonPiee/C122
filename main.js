function preload(){

}

function setup(){
    canvas = createCanvas(650 , 500);
    canvas.position(120,250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 0,0,650,500);
    circle(26, 26, 50);
    circle(625,475,50);
    circle(26,475,50);
    circle(625,26,50);
    rect(0,0, 650, 10);
    rect(0,490, 650, 10);
    rect(0,0, 10, 650);
    rect(640,0, 10, 650);
}


function take_snapshot(){
    save('img.png');
}