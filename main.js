noseX=0;
noseY=0;
function preload()
{
    clown_nose = loadImage ('https://i.postimg.cc/FFyScg9q/clownnose.png');
}
function setup()
{
canvas = createCanvas(500,450);
canvas.center();
Video = createCapture(VIDEO);
Video.size(500,450);
Video.hide();

poseNet = ml5.poseNet(Video, modelLoaded);
poseNet.on('pose', gotposes);
}
function modelLoaded()
{
    console.log("PoseNet is Initialised");
}
function gotposes(results)
{
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
}
}
function draw()
{
image(Video,0,0,500,450);
image(clown_nose,noseX,noseY,30,30)
}
function take_snapshot()
{
    save('Clown.png');
}