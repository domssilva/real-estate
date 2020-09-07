
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const GoBackBtn = ({ pulse }) => {
  
  const history = useHistory();

  return (
    <button className={`btn ${pulse ? 'pulsing-btn' : null}`} onClick={history.goBack}>
      <IoIosArrowBack className="icon"/>
      <span className="margin-left-1" >go back</span>
    </button>
  )
};


export default GoBackBtn;
