import React from 'react';
import { useHistory } from 'react-router-dom';
import PropertyIcons from '../PropertyIcon';

import './styles.scss';

export default function Property(props) {

  const {
    id,
    address,
    location,
    bedrooms,
    bathrooms,
    area,
    price,
    img,
    state,
  } = props.info;

  const history = useHistory();

  function redirectOnClick(id) {
    history.push(`/property/${state}-${id}`)
  }

  return (
    <article className="property" onClick={() => redirectOnClick(id)}>
      <img className="property__img" src={img} alt="property"/>
      <main className="property__info">
        <p className="property__address">{address}</p>
        <p className="property__location">{location}</p>
        <div className="property__icons">
          <PropertyIcons type="bed" number={bedrooms} />
          <PropertyIcons type="bathroom" number={bathrooms} />
          <PropertyIcons type="area" number={area} />
        </div>
        <p className="property__price">${price}</p>
      </main>
    </article>
  )
}
