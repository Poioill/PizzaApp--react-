import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='_container'>
            <div className='home__container'>
                <h1> Perdo's Pizzeria</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to="/menu">
                    <button>Order now!</button>
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default Home