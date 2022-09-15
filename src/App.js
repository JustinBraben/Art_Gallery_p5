import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sketchy from './Sketch';
import Treefractal from './Treefractal';
import Cubewave from './Cubewave'

function App() {
  return (
    <div>
      <div>
        <Cubewave />
      </div>
      <div>
        <Treefractal />
      </div>
    </div>
  );
};

export default App;
