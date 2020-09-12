import React, { useState, useContext } from 'react';
import { StatesContext } from '../../Context/GlobalState';

import MotionWrapper from '../../Components/MotionWrapper';
import TopHeader from '../../Components/TopHeader';
import Property from '../../Components/Property';
import Filters from '../../Components/Filters';

import './styles.scss';

export default function AllProperties() {
  const allProperties = useContext(StatesContext);
  const [properties, setProperties] = useState(allProperties);
  const [filterResults, setFilterResults] = useState(null);

  return (
    <MotionWrapper>
      <section className="page page__all">
        <TopHeader name="All Available Properties"/>
        <Filters 
          properties={properties} 
          setFilterResults={setFilterResults}
        />
        <main className="allproperties">
          {
            filterResults ?
            filterResults.map(info => <Property key={info.id} info={info}/>)
            : properties.map(info => <Property key={info.id} info={info}/>)
          }
        </main>
      </section>
    </MotionWrapper>
  );
}
