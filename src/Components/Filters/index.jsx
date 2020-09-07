import React from 'react';
import { CgArrowsV } from 'react-icons/cg';
import { MdFilterList } from 'react-icons/md';

export default function Filters() {
  return (
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
  )
}
