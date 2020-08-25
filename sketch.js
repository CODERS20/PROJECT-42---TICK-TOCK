var hr;
var mn;
var sc;

var scAngle;
var mnAngle;
var hrAngle;

hr = hour();
mn = minute();
sc = second();


function setup() {
  createCanvas(800,800);
  
}

function draw() {
  background(0,0,0);  

angleMode(DEGREES);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);


  push();
  angleMode(DEGREES);
  rotate(scAngle);
  translate(0,0);
  stroke("#77ED3E");
  strokeWeight(6);
  line(400,400,500,400);
  arc(400,400,600,0,360);
  pop();

  push();
  angleMode(DEGREES);
  rotate(hrAngle);
  translate(0,0);
  stroke("#E6418F");
  strokeWeight(6);
  line(400,400,400,700);
  arc(400,400,100,0,360);
  pop();

  push();
  angleMode(DEGREES);
  rotate(mnAngle);
  translate(0,0);
  stroke("#6AF2F3");
  strokeWeight(6);
  line(400,400,250,300);
  arc(400,400,80,0,360);
  pop();
  
}