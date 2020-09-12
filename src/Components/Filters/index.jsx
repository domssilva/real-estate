import React, { useState, useEffect } from 'react';
import { CgArrowsV } from 'react-icons/cg';
import { MdFilterList } from 'react-icons/md';

import './styles.scss';

export default function Filters({ properties, setFilterResults }) {
  /*
    props.setFilterResults is in charge of setting which properties must 
    be shown according to the selected filter
  */

  const [priceFilter, setPriceFilter] = useState('Any price');
  const [areaFilter, setAreaFilter] = useState('Floor area');
  const [roomsFilter, setRoomsFilter] = useState('Rooms');

  const resetFilters = () => {
    setPriceFilter('Any price');
    setAreaFilter('Floor area');
    setRoomsFilter('Rooms');
    setFilterResults(null);
  }

  useEffect(() => {
    
    setAreaFilter('Floor area');
    setRoomsFilter('Rooms');
    
    if (priceFilter !== 'Any price') {
      let filtered;
      let [min, max] = priceFilter.replace(/[\s$+]/gi, '').split('-');
      
      try {
        max = parseInt(max.replace(',', ''));
      } catch {
        // if max results undefinedfilter is $ 500k +
        filtered = properties.filter(house => parseInt(house.price.replace(',', '')) > 500000);
        return setFilterResults(filtered);
      }

      filtered = properties.filter(house => parseInt(house.price.replace(',', '')) < max);
      setFilterResults(filtered);
    }
  }, [priceFilter]);

  useEffect(() => {

    setPriceFilter('Any price');
    setRoomsFilter('Rooms');

    if (areaFilter !== 'Floor area') {
      let filtered;
      let [min, max] = areaFilter.replace(/[\s$+m²]/gi, '').split('-');
      
      try {
        max = parseInt(max.replace(',', ''));
      } catch {
        // if max results undefinedfilter is $ 500k +
        filtered = properties.filter(house => house.area > 500);
        return setFilterResults(filtered);
      }

      filtered = properties.filter(house => house.area <= max && house.area >= min);
      setFilterResults(filtered);
    }
  }, [areaFilter]);

  useEffect(() => {
    
    setPriceFilter('Any price');
    setAreaFilter('Floor area');

    if (roomsFilter !== 'Rooms') {
      let filtered;

      switch(true) {
        case roomsFilter === '1 room':
          filtered = properties.filter(house => house.bedrooms === 1);
          break;
          
        case roomsFilter === '2 rooms':
          filtered = properties.filter(house => house.bedrooms === 2);
          break;
        case roomsFilter === '2+ rooms':
          filtered = properties.filter(house => house.bedrooms > 2);
          break;
      }
      setFilterResults(filtered);
    }
  }, [roomsFilter]);

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
        <MdFilterList 
          className="icon filter-icon btn nobg" 
          title="clear filters" 
          onClick={resetFilters}
        />
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
