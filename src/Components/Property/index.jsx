import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaBed, FaBath } from 'react-icons/fa';

import './styles.scss';

export default function Property() {
  return (
    <article className="property">
      <img className="property__img" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
      <main className="property__info">
        <p className="property__address">1024 Somma Way</p>
        <p className="property__location">Los Angeles, CA</p>
        <div className="property__icons">
          <p className="bed">
            <FaBed className="icon"/>
            <span className="margin-left-half">3</span>
          </p>
          <p className="bathroom">
            <FaBath className="icon"/>
            <span className="margin-left-half">2</span>
          </p>
          <p className="area">
            <AiOutlineHome className="icon"/>
            <span className="margin-left-half">170m²</span>
          </p>
        </div>
        <p className="property__price">$23,950,00</p>
      </main>
    </article>
  )
}
