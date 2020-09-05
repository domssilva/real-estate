import React, { useContext } from 'react';
import { CgArrowsV } from 'react-icons/cg';
import { MdFilterList } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

import Topbar from '../../Components/Topbar';
import Property from '../../Components/Property';
import Header from '../../Components/Header';

import './styles.scss';

export default function Rent(props) {

  const properties = useContext(GlobalContext);
  const state = props.match.params.state;

  const states = {
    ca: 'California',
    ny: 'New York',
    az: 'Arizona',
  }

  const history = useHistory();

  if (states[state]) {
    return (
      <section className="page page__rent">

        <Topbar />
        <Header state={states[state]}/>

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
            {
              properties[state] ?
              properties[state].map(property => (
                <Property key={property.id} info={property}/>
              )) : <p className="notfound">0 results for: {states[state]}</p>
            }
        </section>
      </section>
    )
  } else {
    // in case user tries to type a non existent state in the url, redirect to error page
    history.push('/error')
  }
}