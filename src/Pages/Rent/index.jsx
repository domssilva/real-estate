import React from 'react';
import { CgArrowsV } from 'react-icons/cg';
import { MdFilterList } from 'react-icons/md';

import Topbar from '../../Components/Topbar';
import Property from '../../Components/Property';
import Header from '../../Components/Header';

import './styles.scss';

export default function Rent() {
  return (
    <section className="page page__rent">

      <Topbar />
      <Header city='Los angeles'/>

      <section className="filters">
        <div className="filters__left">
          <button className="btn">
            any price
            <CgArrowsV className="icon"/>
          </button>
          <button className="btn">
            floor area
            <CgArrowsV className="icon"/>
          </button>
          <button className="btn">
            rooms
            <CgArrowsV className="icon"/>
          </button>
          <MdFilterList className="icon filter-icon btn nobg"/>
        </div>
        <div className="filters__right">
          <p>
            <small className="margin-right-1">sort by:</small>
            <strong>Recentry added</strong>
            <CgArrowsV className="icon"/>
          </p>
        </div>
      </section>

      <section className="results">

        {/* Property component */}
        <Property />
        <Property />
        <Property />
        <Property />

      </section>
    </section>
  )
}