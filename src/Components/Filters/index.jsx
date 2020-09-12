import React, { useState } from 'react';
import { CgArrowsV } from 'react-icons/cg';
import { MdFilterList } from 'react-icons/md';

import './styles.scss';

export default function Filters() {

  const [priceFilter, setPriceFilter] = useState('Any price');
  const [areaFilter, setAreaFilter] = useState('Floor area');
  const [roomsFilter, setRoomsFilter] = useState('Rooms');

  return (
    <section className="filters">
      <div className="filters__left">
        <div className="filters__block filters--price">
          <button className="btn">
            { priceFilter }
            <CgArrowsV className="icon" />
          </button>
          <ul className="dropdown dropdown--price">
            <li className="filters__li" onClick={(e) => {setPriceFilter(e.target.innerText)}}>0 - $70,000</li>
            <li className="filters__li" onClick={(e) => {setPriceFilter(e.target.innerText)}}>$70,000 - $500,000</li>
            <li className="filters__li" onClick={(e) => {setPriceFilter(e.target.innerText)}}>$500,000 +</li>
          </ul>
        </div>
        <div className="filters__block filters--area">
          <button className="btn">
            { areaFilter }
            <CgArrowsV className="icon" />
          </button>
          <ul className="dropdown dropdown--area">
            <li className="filters__li" onClick={(e) => {setAreaFilter(e.target.innerText)}}>0 - 90m²</li>
            <li className="filters__li" onClick={(e) => {setAreaFilter(e.target.innerText)}}>90m² - 200m²</li>
            <li className="filters__li" onClick={(e) => {setAreaFilter(e.target.innerText)}}>200m²+</li>
          </ul>
        </div>
        <div className="filters__block filters--rooms">
          <button className="btn">
            { roomsFilter }
            <CgArrowsV className="icon" />
          </button>
          <ul className="dropdown dropdown--rooms">
            <li className="filters__li" onClick={(e) => {setRoomsFilter(e.target.innerText)}}>1 room</li>
            <li className="filters__li" onClick={(e) => {setRoomsFilter(e.target.innerText)}}>2 rooms</li>
            <li className="filters__li" onClick={(e) => {setRoomsFilter(e.target.innerText)}}>2+ rooms</li>
          </ul>
        </div>
        <MdFilterList className="icon filter-icon btn nobg" />
      </div>
      <div className="filters__right">
        <p>
          <small className="margin-right-1">sort by:</small>
          <strong>Recently added</strong>
          <CgArrowsV className="icon" />
        </p>
      </div>
    </section>
  )
}
