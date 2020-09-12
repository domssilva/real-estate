import React, { useContext } from 'react';
import { StatesContext } from '../../Context/GlobalState';

import MotionWrapper from '../../Components/MotionWrapper';
import TopHeader from '../../Components/TopHeader';
import Property from '../../Components/Property';
import Filters from '../../Components/Filters';

import './styles.scss';

export default function AllProperties() {

  const allProperties = useContext(StatesContext);
  console.log(allProperties);

  return (
    <MotionWrapper>
      <section className="page page__all">
        <TopHeader name="All Available Properties"/>
        <Filters />
        <main className="allproperties">
          {
            allProperties.map(info => <Property info={info}/>)
          }
        </main>
      </section>
    </MotionWrapper>
  )
}
