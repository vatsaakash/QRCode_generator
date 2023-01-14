import React, {useState} from 'react';
import './App.css';
import QRCode from 'react-qr-code';

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [colorbg, setColorbg] = useState();

  function onChange (e) {
    setText(e.target.value);
  }
  function onChangeColor(e) {
    setColor(e.target.value);
  }
  function onChangeColorbg(e) {
    setColorbg(e.target.value);
  }

  return (
    <div className="App">
      <h1>QR code scanner</h1>
      <div className="qrcode-wrapper">
        <QRCode 
          value={text}
          bgColor={colorbg} 
          fgColor={color}
          level="H"
        />
      </div>
    <div className="text-box-wrapper">
        <input
          id="text"
          type="text"
          placeholder='https://google.com'
          value={text}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <input
          id="color"
          type="text"
          placeholder='#FFFFFF for foreground Color'
          value={color}
          onChange={(e) => {
            onChangeColor(e);
          }}
        />
        <input
          id="color"
          type="text"
          placeholder='#FFFFFF for background'
          value={colorbg}
          onChange={(e) => {
            onChangeColorbg(e);
          }}
        />
      </div>
    </div>
  );
}

export default App;
