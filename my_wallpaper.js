var CW = 40;//circle Width
var CH = 60;//circle Height
var CX = 50;// centreX when no transformations applied to canvas
var CY = 100;//CentreY when no transformations applied to canvas
var P = 0;//colour of FreeEye
var a = 90;//
var LW = 0//strokeWeight
var c = 90//rotation of canvas

//var detailColour = color('#2BBAA5');line 30
//var dC2 = color(243,70,142);// changed colour
//var dC3 = color(285,113,77);// changed colour
//var dC4 = color(138,146,27);// changed colour

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); 

 //Grid settings
 pWallpaper.grid_settings.cell_width  = 200;
 pWallpaper.grid_settings.cell_height = 200;
 pWallpaper.grid_settings.row_offset  = 50;
}
function wallpaper_background() {
  background('#1d1b39');   
}
function my_symbol() { 
var detailColour = color('#1FBAA9');// colour of pupil
var dC2 = color(243,88,122);// colour of
var dC3 = color(255,113,77);// Colour of first rectangle
var dC4 = color(238,146,27);// colour of triangles
angleMode(DEGREES);

if(50<P>100 ){
  detailColour = (249,102,53)
  }
else if(P>100){
  detailColour =('#FD5A46')
}
rotate(c)//canvas is tilted - this will return to no tilt at 100  
push();//Triangles
translate(c,c);
RightTri();
MidTri();
LeftTri();
pop();

push();//Monsters and Larger Eye
scale(0.7)
rotate(40)
translate(0,20)
FreeEye();
pop();
push();
scale(0.5);
rotate(120);
translate(a+10,-110)
Monster();
pop();
  
translate(100,100); // - maybe add variable? c*2?
strokeWeight(LW*2);//Yellow Lines
stroke(238,156,27)
line(CX,100, 200,0);
line(CX,100, 150,0);
line(CX,100, 100,0);
line(CX,100, a,0)
line(CX,100, 0,0);
line(CX,100, 0,a);
line(CX,100, 0,100);
line(CX,100, 0,150);
line(CX,100, 0,200);

strokeWeight(LW);//Purple Lines
stroke('#762d97');
line(CX*2,0, 0,200);
strokeWeight(LW*2);
line(CX,CY, 200,200);
line(CX,CY, 150,200);
line(CX,CY, 100,200);
line(CX,CY, a,200);
line(CX,CY, 200,a);
line(CX,CY, 200,100);
line(CX,CY, 200,150);

push();//Smaller Eye
scale(0.5);
translate(-100,0);
stroke(0);
FreeEye();
pop();

push();
scale(0.2);
translate(250,250)
EM();
pop();

function Monster(){
  stroke(dC3)
  strokeWeight(LW*3)//left arm
  noFill();
  bezier(30,98, -45,140.5,110,180, 0,200)
  strokeWeight(LW*3)//right arm
 bezier(170,99, 225,140.5,100,180, 200,200)

push();
fill(dC2);
stroke('#762d97');//rectangles
strokeWeight(LW*2);
rect(a-10,a-10,120,120);
fill(dC3);
rotate(45);
translate(40,-100);
rect(a,a, 100,100);
fill(255,211,148);
rotate(45);
translate(40,-100);
rect(a+10,a+10,80,80,);
point(100,100);
fill('#F96635');
rotate(45);
translate(40,-100);
rect(a+30,a+30, 40,40);
pop();

push();
translate(0,87.5)
strokeWeight(LW);//centre eye
stroke(0);
fill(225,246,252);
ellipse(CX,CY-90, CW,40 );
fill(detailColour);
circle(CX,CY-90, CH/2);//iris
fill(0);
circle(CX,CY-90, CH/4);//pupil
pop();
  }
function FreeEye(){
  fill(250);
  ellipse(150,P,65,30)
  fill(detailColour);
  ellipse(150,P,CW,30)
  fill(0)
  circle(150,P,10,)
}
function EM(){
  function Monster(){
    let noiseLevel = 500
    let noiseScale = 0.005
    for(let x=0; x<200; x+=1){
    
    let nx = noiseScale *x;
    let nt = noiseScale * frameCount;
    let y = noiseLevel * noise(nx,nt);
  
    stroke('#A166AA')
    strokeWeight(LW*3)//left arm
    fill(250)
    bezier(30,98, -45,140.5,110,180, 0,200)
    strokeWeight(LW*3)//right arm
   bezier(170,99, 225,140.5,100,180, 200,200)
  
  fill(dC3);
  stroke('#A166AA');//rectangles
  strokeWeight(LW*2);
  rect(a-10,a-10,120,120);
  fill(255,249,122);
  rotate(45);
  translate(40,-100);
  rect(a,a, 100,100);
  fill(255,211,148);
  rotate(45);
  translate(40,-100);
  rect(a+10,a+10,80,80,);
  point(100,100);
  fill(dC2);
  rotate(45);
  translate(40,-100);
  rect(a+30,a+30, 40,40);
    }
  strokeWeight(LW);//centre eye
  fill(225,246,252);
  ellipse(CX,CY-90, CW,40 );
  fill(detailColour);
  circle(CX,CY-90, CH/2);//iris
  fill(0);
  circle(CX,CY-90, CH/4);//pupil
    }
//scale(0.1)
Monster();
Monster();
Monster();
Monster();
Monster();
Monster();
Monster();
Monster();
Monster();
}
function RightTri(){
beginShape();//Right Triangle
noStroke();
fill(dC4)
vertex(CX,CY);
vertex(150,0)
vertex(100,0)
endShape();
}
function MidTri(){
  beginShape();//Corner/middle Triangle
vertex(CX,CY);
vertex(a,0);
vertex(0,0)
vertex(0,a)
endShape();
}
function LeftTri(){
  beginShape();//Left Triangle
vertex(CX,CY);
vertex(0,CY);
vertex(0,150);
endShape();
}

}
