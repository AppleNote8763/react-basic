import React from 'react';
import Component, { ClassComponent, FunctionComponent as F } from './component/Component';
import './App.css';

function App() {
  return (
    <div>
      <Component />
      <ClassComponent />
      <F />
    </div>
  );
}

export default App;
