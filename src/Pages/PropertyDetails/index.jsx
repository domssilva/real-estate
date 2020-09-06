import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import { IoIosArrowBack } from 'react-icons/io';

import MotionWrapper from '../../Components/MotionWrapper';
import Topbar from '../../Components/Topbar';
import Header from '../../Components/Header';
import PropertyIcons from '../../Components/PropertyIcon';

import './styles.scss';

export default function PropertyDetails() {

  const [selectedProperty, setSelectedProperty] = useState({});

  const history = useHistory();
  const properties = useContext(GlobalContext);
  // parse chosen property: state-id values from url
  const [state, id] = history.location.pathname.replace('/property/', '').split('-');

  useEffect(() => {
    properties[state].map(property => {
        if (property.id == id) {
          setSelectedProperty(property);
        }
    });
  }, []);

  console.log(selectedProperty);

  return (
    <MotionWrapper>
      <section className="page page__property">
        <Topbar />
        <Header name={`${selectedProperty.address}, ${String(selectedProperty.state).toUpperCase()}`} />
        <main className="property-details">
          <section className="property-details__gallery">
            <img 
              className="property-details__gallery-cover"
              src={selectedProperty.img}
            />
            <div className="property-details__gallery-grid">
                { 
                  selectedProperty.innerPhotos ?
                  selectedProperty.innerPhotos.map(img => <img src={img} />) : null
                }
            </div>
          </section>
          <article className="property-details__info">
            <section className="property-details__top">
              <h2 className="property-details__title">details</h2>
              <div className="icons">
                <PropertyIcons type="bed" number={selectedProperty.bedrooms} />
                <PropertyIcons type="bathroom" number={selectedProperty.bathrooms} />
                <PropertyIcons type="area" number={selectedProperty.area} />
              </div>
            </section>
            <section className="property-details__bottom">
              <p className="property-details__price">
                $ {selectedProperty.price}
              </p>
            </section>
          </article>
        </main>
        <button className="btn" onClick={history.goBack}>
          <IoIosArrowBack className="icon"/>
          <span className="margin-left-1" >go back</span>
        </button>
      </section>
    </MotionWrapper>
  )
}
