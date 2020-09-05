import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import './styles.scss';

export default function Topbar() {
  return (
    <section className="top">
      <div className="top__menu">
        <AiOutlineMenu className="icon"/>
      </div>
      <div className="top__login">
        <button className="btn margin-right-1">join us</button>
        <button className="btn blue">login</button>
      </div>
  </section>
  )
}
