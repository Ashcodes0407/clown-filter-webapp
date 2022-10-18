noseX=0;
noseY=0;
function preload()
{
clownNose= loadImage("https://i.postimg.cc/JzCPQwFQ/kindpng-383245.png");
}

function setup()
{
    canvas= createCanvas(300,300) ;
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("Model Has Loaded");
}
function gotPoses(results)
{
    if (results.length>0)
    {
     console.log(results);
     noseX=results[0].pose.nose.x-10;
     noseY=results[0].pose.nose.y-5;
     console.log ("Nose X = "+noseX);
     console.log ("Nose Y = "+noseY);
    }
}
function draw()
{
  image(video,0,0,300,300);
  fill("red");
  stroke("red");
  image(clownNose,noseX,noseY,30,30);
}
function take_snapshot(){
    save("MyFilterImage.png");
    
}