import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { GlobalContext } from '../../Context/GlobalState';

import MotionWrapper from '../../Components/MotionWrapper';
import Property from '../../Components/Property';
import TopHeader from '../../Components/TopHeader';
import Filters from '../../Components/Filters';

import './styles.scss';

export default function Rent(props) {

  const properties = useContext(GlobalContext);
  const state = props.match.params.state;

  const states = {
    ca: 'California',
    ny: 'New York',
    co: 'Colorado',
  }

  if (states[state]) {
    return (
      <MotionWrapper>
        <section className="page page__rent">
          <TopHeader name={states[state]}/>
          <Filters />
          <section className="results">
              {
                properties[state] ?
                properties[state].map(property => (
                  <Property key={property.id} info={property}/>
                )) : <p className="notfound">0 results for: {states[state]}</p>
              }
          </section>
        </section>
      </MotionWrapper>
    )
  } else {
    // in case user tries to type a non existent state in the url, redirect to error page
    return <Redirect to="/error" />;
  }
}
