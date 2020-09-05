import React from 'react';
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';
import { CgArrowsV } from 'react-icons/cg';
import { MdFilterList } from 'react-icons/md';
import { FaBed, FaBath } from 'react-icons/fa';

import './styles.scss';

export default function Rent() {
  return (
    <section className="page page__rent">
      <section className="top">
        <div className="top__menu">
          <AiOutlineMenu className="icon"/>
        </div>
        <div className="top__login">
          <button className="btn margin-right-1">join us</button>
          <button className="btn blue">login</button>
        </div>
      </section>

      <header className="header">
        <p className="header__pretitle">You looking for</p>
        <h1 className="header__title">Los Angeles</h1>
      </header>

      <section className="filters">
        <div className="filters__left">
          <button className="btn">
            any price
            <CgArrowsV className="icon"/>
          </button>
          <button className="btn">
            floor area
            <CgArrowsV className="icon"/>
          </button>
          <button className="btn">
            rooms
            <CgArrowsV className="icon"/>
          </button>
          <MdFilterList className="icon filter-icon btn nobg"/>
        </div>
        <div className="filters__right">
          <p>
            <small className="margin-right-1">sort by:</small>
            <strong>Recentry added</strong>
            <CgArrowsV className="icon"/>
          </p>
        </div>
      </section>

      <section className="results">

        {/* Property component */}
        <article className="results__property property">
          <img className="property__img" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
          <main className="property__info">
            <p className="property__address">1024 Somma Way</p>
            <p className="property__location">Los Angeles, CA</p>
            <div className="property__icons">
              <p className="bed">
                <FaBed className="icon"/>
                <span className="margin-left-half">3</span>
              </p>
              <p className="bathroom">
                <FaBath className="icon"/>
                <span className="margin-left-half">2</span>
              </p>
              <p className="area">
                <AiOutlineHome className="icon"/>
                <span className="margin-left-half">170m²</span>
              </p>
            </div>
            <p className="property__price">$23,950,00</p>
          </main>
        </article>

        <article className="results__property property">
          <img className="property__img" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
          <main className="property__info">
            <p className="property__address">1024 Somma Way</p>
            <p className="property__location">Los Angeles, CA</p>
            <div className="property__icons">
              <p className="bed">
                <FaBed className="icon"/>
                <span className="margin-left-half">3</span>
              </p>
              <p className="bathroom">
                <FaBath className="icon"/>
                <span className="margin-left-half">2</span>
              </p>
              <p className="area">
                <AiOutlineHome className="icon"/>
                <span className="margin-left-half">170m²</span>
              </p>
            </div>
            <p className="property__price">$23,950,00</p>
          </main>
        </article>
        
        <article className="results__property property">
          <img className="property__img" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
          <main className="property__info">
            <p className="property__address">1024 Somma Way</p>
            <p className="property__location">Los Angeles, CA</p>
            <div className="property__icons">
              <p className="bed">
                <FaBed className="icon"/>
                <span className="margin-left-half">3</span>
              </p>
              <p className="bathroom">
                <FaBath className="icon"/>
                <span className="margin-left-half">2</span>
              </p>
              <p className="area">
                <AiOutlineHome className="icon"/>
                <span className="margin-left-half">170m²</span>
              </p>
            </div>
            <p className="property__price">$23,950,00</p>
          </main>
        </article>

        <article className="results__property property">
          <img className="property__img" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
          <main className="property__info">
            <p className="property__address">1024 Somma Way</p>
            <p className="property__location">Los Angeles, CA</p>
            <div className="property__icons">
              <p className="bed">
                <FaBed className="icon"/>
                <span className="margin-left-half">3</span>
              </p>
              <p className="bathroom">
                <FaBath className="icon"/>
                <span className="margin-left-half">2</span>
              </p>
              <p className="area">
                <AiOutlineHome className="icon"/>
                <span className="margin-left-half">170m²</span>
              </p>
            </div>
            <p className="property__price">$23,950,00</p>
          </main>
        </article>

        <article className="results__property property">
          <img className="property__img" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
          <main className="property__info">
            <p className="property__address">1024 Somma Way</p>
            <p className="property__location">Los Angeles, CA</p>
            <div className="property__icons">
              <p className="bed">
                <FaBed className="icon"/>
                <span className="margin-left-half">3</span>
              </p>
              <p className="bathroom">
                <FaBath className="icon"/>
                <span className="margin-left-half">2</span>
              </p>
              <p className="area">
                <AiOutlineHome className="icon"/>
                <span className="margin-left-half">170m²</span>
              </p>
            </div>
            <p className="property__price">$23,950,00</p>
          </main>
        </article>

        <article className="results__property property">
          <img className="property__img" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
          <main className="property__info">
            <p className="property__address">1024 Somma Way</p>
            <p className="property__location">Los Angeles, CA</p>
            <div className="property__icons">
              <p className="bed">
                <FaBed className="icon"/>
                <span className="margin-left-half">3</span>
              </p>
              <p className="bathroom">
                <FaBath className="icon"/>
                <span className="margin-left-half">2</span>
              </p>
              <p className="area">
                <AiOutlineHome className="icon"/>
                <span className="margin-left-half">170m²</span>
              </p>
            </div>
            <p className="property__price">$23,950,00</p>
          </main>
        </article>

        <article className="results__property property">
          <img className="property__img" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
          <main className="property__info">
            <p className="property__address">1024 Somma Way</p>
            <p className="property__location">Los Angeles, CA</p>
            <div className="property__icons">
              <p className="bed">
                <FaBed className="icon"/>
                <span className="margin-left-half">3</span>
              </p>
              <p className="bathroom">
                <FaBath className="icon"/>
                <span className="margin-left-half">2</span>
              </p>
              <p className="area">
                <AiOutlineHome className="icon"/>
                <span className="margin-left-half">170m²</span>
              </p>
            </div>
            <p className="property__price">$23,950,00</p>
          </main>
        </article>

        <article className="results__property property">
          <img className="property__img" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
          <main className="property__info">
            <p className="property__address">1024 Somma Way</p>
            <p className="property__location">Los Angeles, CA</p>
            <div className="property__icons">
              <p className="bed">
                <FaBed className="icon"/>
                <span className="margin-left-half">3</span>
              </p>
              <p className="bathroom">
                <FaBath className="icon"/>
                <span className="margin-left-half">2</span>
              </p>
              <p className="area">
                <AiOutlineHome className="icon"/>
                <span className="margin-left-half">170m²</span>
              </p>
            </div>
            <p className="property__price">$23,950,00</p>
          </main>
        </article>

      </section>
    </section>
  )
}