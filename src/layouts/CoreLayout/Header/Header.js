import React from 'react';
import { Link } from 'react-router';

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
      <Link to="/" style = { HeaderStyle }>Home</Link>
      <Link to="/AboutUs" style = { HeaderStyle }>AboutUs</Link>
      <Link to="/Help" style = { HeaderStyle }>Help</Link>
    </div>
  );
}
