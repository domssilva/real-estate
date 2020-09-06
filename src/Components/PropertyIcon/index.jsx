import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaBed, FaBath } from 'react-icons/fa';

export default function PropertyIcons({ type, number }) {

  const bed = (<p className="bed">
    <FaBed className="icon"/>
    <span className="margin-left-half">{number}</span>
  </p>);

  const bathroom = (<p className="bathroom">
    <FaBath className="icon"/>
    <span className="margin-left-half">{number}</span>
  </p>);

  const area = (<p className="area">
    <AiOutlineHome className="icon"/>
    <span className="margin-left-half">{number}m²</span>
  </p>);

  switch(type) {
    case 'bed':
      return bed;
    case 'bathroom':
      return bathroom;
    case 'area':
      return area;
    default:
      return null;
  }
}
