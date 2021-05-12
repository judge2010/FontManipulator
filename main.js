var leftWrist_X;
var rightWrist_X;
var nose_x =0;
var nose_y=0;
actual_size = 0;
function preload(){

};
function setup(){
    Canvas=createCanvas(500 ,500);
    Canvas.position(555 ,170);
    //Canvas.center();
    video=createCapture(VIDEO);
    video.position(40 ,120);
    video.size(500 ,500);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotPoses);
    };
    function modelloaded(){
        console.log("Model is loaded");
        };

        function draw(){
            background(50, 190, 50);
            fill("#0b03fc");
            stroke("#0b03fc");
            text("Jujhar",nose_x,nose_y);
            textSize(actual_size);

        };
function gotPoses(results){ 
    if(results.length > 0){
    console.log(results);
    leftWrist_X=results[0].pose.leftWrist.x;
    rightWrist_X=results[0].pose.rightWrist.x;
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
actual_size=leftWrist_X - rightWrist_X;
actual_size=floor(actual_size);
console.log(actual_size);
document.getElementById("height_n_width").innerHTML=actual_size;
    };
};