import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalState';
import { IoIosArrowBack } from 'react-icons/io';

import MotionWrapper from '../../Components/MotionWrapper';
import TopHeader from '../../Components/TopHeader';
import PropertyIcons from '../../Components/PropertyIcon';
import LeafletMap from '../../Components/LeafletMap';

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

  return (
    <MotionWrapper>
      <section className="page page__property">
        <TopHeader name={`${selectedProperty.address}, ${String(selectedProperty.state).toUpperCase()}`} />
        <main className="property-details">
          <section className="property-details__gallery">
            <img 
              className="property-details__gallery-cover"
              src={selectedProperty.img}
            />
            <div className="property-details__gallery-grid">
                { 
                  selectedProperty.innerPhotos ?
                  selectedProperty.innerPhotos.map(img => <img key={img} src={img} />) : null
                }
            </div>
          </section>
          <article className="property-details__info">
            <div>
              <section className="property-details__top">
                <h2 className="property-details__title">details</h2>
                <div className="icons">
                  <PropertyIcons type="bed" number={selectedProperty.bedrooms} />
                  <PropertyIcons type="bathroom" number={selectedProperty.bathrooms} />
                  <PropertyIcons type="area" number={selectedProperty.area} />
                </div>
              </section>
              <section className="property-details__bottom">
                <p className="margin-bottom-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, nam?</p>
                <p className="property-details__price">
                  $ {selectedProperty.price}
                  <br/>
                  <br/>
                </p>
                <p className="property-details__icon">
                  <PropertyIcons type="phone" />
                  <span>+ 80 2384-2409</span>
                </p>
                <br/>
                <p className="property-details__icon">
                  <PropertyIcons type="email" />
                  <span>real-estate@mail.co.uk</span>
                </p>
              </section>
            </div>
            <LeafletMap 
              className="property-details__map"
              lat={selectedProperty.coordinates ? selectedProperty.coordinates.lat : 0}
              lng={selectedProperty.coordinates ? selectedProperty.coordinates.lon : 0}
            />
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
