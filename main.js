song1=""
song2=""
function preload(){
    song2 = loadSound("peaceful.mp3");
    song1 = loadSound("duet.mp3");
    
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center;

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}
