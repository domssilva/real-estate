import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { GlobalContext } from '../../Context/GlobalState';

import MotionWrapper from '../../Components/MotionWrapper';
import Property from '../../Components/Property';
import TopHeader from '../../Components/TopHeader';
import Filters from '../../Components/Filters';

import './styles.scss';

export default function Rent(props) {

  const allProperties = useContext(GlobalContext);
  const state = props.match.params.state;

  const [properties, setProperties] = useState(allProperties);
  const [filterResults, setFilterResults] = useState(null);

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
          <Filters 
            properties={properties[state]} 
            setFilterResults={setFilterResults}
          />
          <section className="results">
              {/* {
                properties[state] ?
                properties[state].map(property => (
                  <Property key={property.id} info={property}/>
                )) : <p className="notfound">0 results for: {states[state]}</p>
              } */}
              {
                filterResults ?
                filterResults.map(info => <Property key={info.id} info={info}/>)
                : properties[state].map(info => <Property key={info.id} info={info}/>)
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
