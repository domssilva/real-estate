import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import Select from 'react-select';

import MotionWrapper from '../../Components/MotionWrapper';

import './styles.scss';

export default function Home() {

  const [selectedOption, setSelectedOption] = useState(null);  
  const history = useHistory();

  const options = [
    { value: 'ca', label: 'california' },
    { value: 'ny', label: 'new york' },
    { value: 'co', label: 'colorado' }
  ];

  useEffect(() => {
    if (selectedOption) {
      history.push(`/rent/${selectedOption}`)
    }
  }, [selectedOption]);

  const handleButtonClick = () => {
    history.push('/all');
  }

  return (
    <MotionWrapper>
      <header className="hero">
        <div className="hero__clip"></div>
        <section className="form">
          <h1 className="form__title">
            <span>Find your new home</span> 
            <AiOutlineHome className="icon"/>
          </h1>
          <label className="form__label" htmlFor="selection">Choose a state</label>
          <Select
            defaultValue={selectedOption}
            onChange={({value}) => setSelectedOption(value)}
            options={options}
            name="selection"
            className="form__select margin-bottom-1"
          />
          <button className="btn" onClick={handleButtonClick}>
            see all properties
          </button>
        </section>
      </header>
    </MotionWrapper>
  )
}
