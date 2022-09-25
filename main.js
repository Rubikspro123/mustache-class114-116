mustacheX = 0;
mustacheY = 0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/9fyP4D8h/R.png');

}
function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){

    image(video,0, 0 , 400, 300);
    image(clown_nose, mustacheX - 30, mustacheY -5  , 60, 40);
         
}

function take_snapshot() {
    save('Realtime-Image.png')
}

function modelLoaded(){
    console.log('PoseNet is Loaded');
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
        console.log("nose x = " + mustacheX);
        console.log("nose y = " + mustacheY);
    }
}
