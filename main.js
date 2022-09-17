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
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
