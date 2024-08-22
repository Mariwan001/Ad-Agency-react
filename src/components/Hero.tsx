import React from 'react'
import profileImg1 from '../assets/profile1.jpeg'
import profileImg2 from '../assets/profile2.jpeg'
import profileImg3 from '../assets/profile3.jpg'
import heroImg from '../assets/hero-image.png';
import { IoArrowForward } from 'react-icons/io5'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='flex min-h-screen flex-wrap items-center bg-emerald-950 text-orange-50'>
          <div className='w-full p-8 md:w-1/2'>
              <div className='mb-4 flex space-x-2'>
                <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.1 }} 
                src={profileImg1} alt='Team Member' className='h-12 w-12 rounded-full border-2 border-orange-50'/>

                <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }} 
                 src={profileImg2} alt='Team Member' className='h-12 w-12 rounded-full border-2 border-orange-50'/>       
                <motion.img 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }} 
                src={profileImg3} alt='Team Member' className='h-12 w-12 rounded-full border-2 border-orange-50'/>       
              
              </div>
              <motion.h1
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 1 }}
                              transition={{ duration: 0.8}} 

               className='text-4xl tracking-tighter md:text-5xl lg:text-7xl'>
                We create impactful ads that
                <span className='text-orange-500'> Elevate </span>
                Your brand
              </motion.h1>
              <motion.button 
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 1 }}
                              transition={{ duration: 1 }} 

              className='mt-8 flex items-center justify-center gap-2 rounded-full bg-emerald-900 px-4 py-3 hover:bg-emerald-800'>
                <span className='flex items-center'>
                  Know More
                  <IoArrowForward className='ml-2' />
                </span>
              </motion.button>
          </div>
          <div className='w-full md:w-1/2 lg:p-8'>
              <motion.img 
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8 }} 
              src={heroImg} alt='Ad Agency' className='h-auto w-full'/>
          </div>
    </section>
  )
}

export default Hero
