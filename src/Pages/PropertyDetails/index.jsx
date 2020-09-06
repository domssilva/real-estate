import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';

export default function PropertyDetails() {

  const history = useHistory();
  const propertyId = history.location.pathname.replace('/property/', '');

  return (
    <div>
      property details
      <button onClick={history.goBack}>
        go back
      </button>
    </div>
  )
}
