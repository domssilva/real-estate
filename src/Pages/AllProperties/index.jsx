import React, { useContext } from 'react';
import { StatesContext } from '../../Context/GlobalState';

import MotionWrapper from '../../Components/MotionWrapper';
import TopHeader from '../../Components/TopHeader';
import Property from '../../Components/Property';
import Filters from '../../Components/Filters';

import './styles.scss';

export default function AllProperties() {

  const allProperties = useContext(StatesContext);

  return (
    <MotionWrapper>
      <section className="page page__all">
        <TopHeader name="All Available Properties"/>
        <Filters properties={allProperties}/>
        <main className="allproperties">
          {
            allProperties.map(info => <Property key={info.id} info={info}/>)
          }
        </main>
      </section>
    </MotionWrapper>
  )
}
