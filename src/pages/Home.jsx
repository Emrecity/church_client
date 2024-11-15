import React from 'react'
import { motion } from 'framer-motion'
import HomeCarousel from '../components/HomeCarousel'
import Typewriter from '../components/Typewriter'
import QuoteCard from '../components/QuoteCard'
import EventCarousel from '../components/EventCarousel'
import Timeline from '../components/Timeline'
import SeeMoreButton from '../components/SeeMoreButton'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='bg-white'>
      <HomeCarousel/>
      
      <motion.div 
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6,delay:0.2  }}
      className='grid grid-cols-1 p-5 my-5 text-center border border-t-black h-72 sm:grid-cols-2 sm:gap-x-10 gap-y-10'>
        <Typewriter/>
        <QuoteCard tite="Hardwork" quote="The soul of the sluggard craves and gets nothing, while the soul of the diligent is richly supplied." verse="Proverbs 13:4"/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:1.5 }}
      className='p-5 my-5'>
        <div className='flex flex-col justify-between my-10 sm:flex-row'>
          <h1 className='text-3xl text-blue-500 uppercase poppins-regular'>Upcoming Events</h1>
          <SeeMoreButton handClick={()=>{alert('Clicked')}}/>
        </div>
        <EventCarousel/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:1 }}
      className='p-5 my-5'>
      <div className='flex flex-col justify-between my-10 sm:flex-row'>
          <h1 className='text-3xl text-blue-500 uppercase poppins-regular'>Leaderships</h1>
          <SeeMoreButton handClick={()=>{alert('Clicked')}}/>
        </div>
        <Timeline/>
      </motion.div>

      <div>
        <AboutUs/>
      </div>

      <div className='grid grid-cols-1 gap-5 mx-5 sm:grid-cols-2'>
        <Contact/>
        <section className='w-full'><img src='logo_1.png' alt='church' className='w-full h-[70%] my-10'/></section>
      </div>
    </div>
  )
}

export default Home