import React from 'react';

export default function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1 className="header">Library</h1>
      </header>
    </div>
  )
}

const headerStyle = {
  background: '#122d38',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
}
