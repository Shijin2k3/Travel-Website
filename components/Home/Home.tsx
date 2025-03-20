import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import Services from './Services/Services'
import Reviews from './Reviews/Reviews'
import News from './News/News'
import NewsLetter from './NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <Services />
      <Reviews />
      <News />
      <NewsLetter />
      
    </div>
  )
}

export default Home