var tempMtyC;   
var tempMtyF =77;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  tempMtyC = tempFaC(tempMtyF);
  console. log(tempMtyF);
  console. log(tempMtyC);
  
}

function tempCaF(c){
var f = (9/5)*f+32;
  return f;
}
function tempFaC(f){
  var c= (5/9)*(f-32);
  return c;
}
