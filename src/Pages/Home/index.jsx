import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Select from 'react-select';

import './styles.scss';

export default function Home() {

  const [selectedOption, setSelectedOption] = useState(null);  
  const history = useHistory();

  const options = [
    { value: 'ca', label: 'california' },
    { value: 'ny', label: 'new york' },
    { value: 'az', label: 'arizona' }
  ];

  useEffect(() => {
    if (selectedOption) {
      history.push(`/rent/${selectedOption}`)
    }
  }, [selectedOption]);

  return (
    <header className="hero">
      <div className="hero__clip"></div>
      
      <form className="form">
        <label className="form__label" htmlFor="selection">Choose a state</label>
        <Select
          defaultValue={selectedOption}
          onChange={({value}) => setSelectedOption(value)}
          options={options}
          name="selection"
          className="form__select"
        />
      </form>

    </header>
  )
}
