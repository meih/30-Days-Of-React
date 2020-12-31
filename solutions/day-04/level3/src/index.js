import React from 'react';
import ReactDOM from 'react-dom';


// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div style={{color: "white", backgroundColor: hexaColor()}} className="colorTable">{hexaColor()}</div>

const App = () => {
  return (
    <main>
      <HexaColor />
      <HexaColor />
      <HexaColor />
      <HexaColor />
      <HexaColor />
      <HexaColor />
    </main>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
