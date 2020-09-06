import React from 'react';

import './styles.scss';

export default function Header({ name }) {
  return (
    <header className="header">
      <p className="header__pretitle">You looking for</p>
      <h1 className="header__title">{ name }</h1>
    </header>
  )
}
