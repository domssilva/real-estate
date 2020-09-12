import React from 'react';
import { CgArrowsV } from 'react-icons/cg';
import { MdFilterList } from 'react-icons/md';

import './styles.scss';

export default function Filters() {

  return (
    <section className="filters">
      <div className="filters__left">
        <div className="filters__block filters--price">
          <button className="btn" id="price">
            any price
            <CgArrowsV className="icon" />
          </button>
          <ul className="dropdown dropdown--price">
            <li className="filters__li">0 - $70,000</li>
            <li className="filters__li">$70,000 - $500,000</li>
            <li className="filters__li">$500,000 +</li>
          </ul>
        </div>
        <div className="filters__block filters--area">
          <button className="btn" id="area">
            floor area
            <CgArrowsV className="icon" />
          </button>
          <ul className="dropdown dropdown--area">
            <li className="filters__li">0 - 90m²</li>
            <li className="filters__li">90m² - 200m²</li>
            <li className="filters__li">200m²+</li>
          </ul>
        </div>
        <div className="filters__block filters--rooms">
          <button className="btn" id="rooms">
            rooms
            <CgArrowsV className="icon" />
          </button>
          <ul className="dropdown dropdown--rooms">
            <li className="filters__li">1 room</li>
            <li className="filters__li">2 rooms</li>
            <li className="filters__li">2+ rooms</li>
          </ul>
        </div>
        <MdFilterList className="icon filter-icon btn nobg" />
      </div>
      <div className="filters__right">
        <p>
          <small className="margin-right-1">sort by:</small>
          <strong>Recentry added</strong>
          <CgArrowsV className="icon" />
        </p>
      </div>
    </section>
  )
}
