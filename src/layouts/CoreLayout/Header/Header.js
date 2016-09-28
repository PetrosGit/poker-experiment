import React from 'react';
const HeaderStyle = {
  display: 'inline-block',
  fontFamily: 'monospace',
  fontSize: '20',
  margin: 10,
};

const divStyle = {
  backgroundColor: 'pink',
  textAlign: 'center',
};

export function Header() {
  return (
    <div style = {divStyle}>
      <a style = {HeaderStyle} >Home </a>
      <a style = {HeaderStyle}>About Us </a>
      <a style = {HeaderStyle}>Help</a>
    </div>
  );
}
