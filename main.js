//* Variable noseX, noseY, difference, leftWristX & rightWristX *//
noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

//* Function setup() *//
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(450, 450);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

//* Function draw() *//
function draw()
{
    background('#fbff00');
    fill('#eb4034');
    stroke('#eb4034');
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML = "Square Height and Width will be = "+ difference + " px";
}

//* Function modelLoaded() *//
function modelLoaded()
{
    console.log("PoseNet is Intialized");
}

//* Function gotPoses(results) *//
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + " nose Y = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWrist X = " + leftWristX + " rightWrist X = " + rightWristX + " difference = "+ difference);
    }
}