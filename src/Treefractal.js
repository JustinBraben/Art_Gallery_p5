import React from 'react'
import Sketch from 'react-p5'

const Treefractal = () => {

 let maxLines = 40;
 let delta = 30;
 let slider;
 let angle = 0.78;

 const setup = (p5, canvasParentRef) => {
  slider = p5.createSlider(0, p5.TWO_PI, p5.PI / 4, p5.PI / 32);
  p5.createCanvas(400, 400).parent(canvasParentRef);
 }

 const recurseTree = (p5, len) => {
  p5.line(0, 0, 0, -len);
  p5.translate(0, -len);
  if (len > 4) {
   p5.push();
   p5.rotate(angle);
   recurseTree(p5, len * 0.67);
   p5.pop();
   p5.push();
   p5.rotate(-angle);
   recurseTree(p5, len * 0.67);
   p5.pop();
  }
 }

 const draw = p5 => {
  p5.background(51);
  angle = slider.value();
  var len = 100;
  p5.stroke(255);
  p5.translate(200, p5.height);
  recurseTree(p5, p5.height / 3.5, 29);
 }

 return <Sketch setup={setup} draw={draw} />
}

export default Treefractal;