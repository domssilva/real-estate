import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaBed, FaBath } from 'react-icons/fa';
import { HiPhone, HiOutlineMail } from 'react-icons/hi';

export default function PropertyIcons({ type, number }) {

  const bed = (<p className="bed-icon">
    <FaBed className="icon"/>
    <span className="margin-left-half">{number}</span>
  </p>);

  const bathroom = (<p className="bathroom-icon">
    <FaBath className="icon"/>
    <span className="margin-left-half">{number}</span>
  </p>);

  const area = (<p className="area-icon">
    <AiOutlineHome className="icon"/>
    <span className="margin-left-half">{number}m²</span>
  </p>);

  const phone = <HiPhone className="phone-icon icon"/>;
  const email = <HiOutlineMail className="email-icon icon"/>;

  switch(type) {
    case 'bed':
      return bed;
    case 'bathroom':
      return bathroom;
    case 'area':
      return area;
    case 'phone':
      return phone;
    case 'email':
      return email;
    default:
      return null;
  }
}
