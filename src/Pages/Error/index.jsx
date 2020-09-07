import React from 'react';

import GoBackBtn from '../../Components/GoBackBtn';

import './styles.scss';

export default function Error() {

  return (
    <section className="page page__error">
      <header className="error__header">
        <h1 className="error__title">
          404
        </h1>
        <small className="error__msg">Ooops, something went wrong :(</small>
      </header>
      <GoBackBtn pulse={true}/>
    </section>
  )
}
