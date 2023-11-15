import React, { useState } from 'react';
import './App.css';
import Keyboard from "./component/keyBoard"
import Screen from './component/screen';

let indexColor = 0;

function App() {
  const [value, setValue] = useState("clear me!!!");
  const [color, setColor] = useState("black");
  const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown",];
  let changeColor = () => {
    setColor(colors[indexColor]);
    indexColor = (indexColor + 1) % colors.length;
}
  return (
    <div className="App">
      <Screen letter={value} myColor={color} />
      <Keyboard nextColor={colors[indexColor]} changeColor={changeColor} setValue={setValue}/>
    </div>
  );
}

export default App;
