import React from 'react'
import Sketch from 'react-p5'

const Cubewave = () => {

 let angle = 0;
 let w = 12;
 let ma;
 let maxD;
 let orthoDim = 800;

 const setup = (p5, canvasParentRef) => {
  p5.createCanvas(orthoDim * 2 / 3, orthoDim * 2 / 3, p5.WEBGL).parent(canvasParentRef);
  ma = p5.atan(1 / p5.sqrt(2));
  maxD = p5.dist(0, 0, p5.width / 2, p5.height / 2);
  p5.pointLight(255, 255, 255, p5.width / 2, p5.height / 2, 100);
 };

 const draw = (p5) => {
  p5.background(100);
  p5.ortho(-orthoDim, orthoDim, orthoDim, -orthoDim, -orthoDim * 2, orthoDim * 2);

  p5.rotateX(ma)
  p5.rotateY(-p5.QUARTER_PI)

  let offset = 0;
  for (let z = 0; z < p5.height; z += w) {
   for (let x = 0; x < p5.width; x += w) {
    p5.push();
    let d = p5.dist(x, z, p5.width / 2, p5.height / 2);
    let offset = p5.map(d, 0, maxD, p5.PI, p5.QUARTER_PI * 2) * 2;
    let a = angle + offset;
    let h = (p5.map(p5.sin(a), -1, 1, -20, 100));
    p5.translate(x - p5.width / 2, 0, z - p5.height / 2, 0);
    p5.normalMaterial();
    p5.box(w - 4, h * 2, w - 1);
    p5.pop();
   }
  }

  angle += 0.02;
 };

 return <Sketch setup={setup} draw={draw} />;
};

export default Cubewave;