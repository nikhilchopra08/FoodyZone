import React from 'react'
import styled from 'styled-components';
import styles from './cover.module.css'

const cover = () => {
  return (
    <div className="covercontainer d-flex w-100 h-100 p-3 mx-auto flex-column">


  <main className={`${styles.main}`}>
    <h1>Welcome to Foody Zone.</h1>
    <p className="lead">At Foody Zone, we invite you to embark on a gastronomic journey that transcends the ordinary. Nestled in the heart of Delhi, our restaurant is more than just a place to dine; it's an experience that celebrates the art of food, community, and unforgettable moments.</p>
    <p className="lead">
      <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
    </p>
  </main>
</div>
  )
}

export default cover

import 'bootstrap/dist/css/bootstrap.css';