import React from "react";
import Sketch from "react-p5";

const getRandomInt = (max) => {
 return Math.floor(Math.random() * max);
};

const Sketchy = (props) => {
 const sphere = (p5, x, y, a, b) => {
  let c = p5.color(
   getRandomInt(255),
   getRandomInt(255),
   getRandomInt(255)
  );
  p5.fill(c);
  p5.noStroke();
  p5.ellipse(x, y, a, b);
 };

 const setup = (p5, canvasParentRef) => {
  const width = window.innerWidth * 0.95;
  const height = window.innerHeight * 0.95;

  let bound = 0;

  if (width > height) {
   bound = width;
  } else {
   bound = height;
  }

  p5.createCanvas(width, height).parent(canvasParentRef);
  p5.background("white");

  for (let i = 0; i < 500; i++) {
   const randomSize = getRandomInt(500);
   sphere(
    p5,
    getRandomInt(bound),
    getRandomInt(bound),
    randomSize,
    randomSize
   );
  }
 };

 const draw = (p5) => {
  //
 };

 return <Sketch setup={setup} draw={draw} />;
};

export default Sketchy;
