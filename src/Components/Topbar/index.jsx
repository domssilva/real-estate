import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';

import './styles.scss';

export default function Topbar() {

  const history = useHistory();

  return (
    <section className="top">
      <div className="top__menu">
        <AiOutlineMenu className="icon"/>
      </div>
      <div className="top__login">
        <button className="btn bgtransparent" onClick={() => history.push('/')}>
          <AiOutlineHome className="icon"/>
        </button>
        <button className="btn">join us</button>
        <button className="btn blue">login</button>
      </div>
  </section>
  )
}
