import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './aboutUs.module.css'

const aboutUs3 = () => {
  return (
    <div class={`${styles.row}`}>
    <div class="col-md-7">
      <h2 class="featurette-heading fw-normal lh-1">Your Table Awaits</h2>
      <p class="lead">Whether you're celebrating a special occasion, enjoying a night out with friends, or simply savoring a moment of solitude, [Restaurant Name] is your destination. We're here to make every visit an occasion to remember.</p>
    </div>
    <div class="col-md-5">
   <img src='https://img.freepik.com/free-vector/waiter-serving-silver-dish-with-lid-customer_3446-90.jpg?w=1380&t=st=1694341180~exp=1694341780~hmac=b1c3a1765b20d340c25ce6e4bcc5443f64f535c915c7036d1ae5dc0d4e3a0740' height="400px" width="500px"/>
    </div>
  </div>
  )
}

export default aboutUs3