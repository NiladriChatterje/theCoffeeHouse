import React from 'react'
import './Home.css';
import { motion } from 'framer-motion';
import Burger from '../../assets/burger.png';
import FrenchFries from '../../assets/frenchfries.png';
import Sandwich1 from '../../assets/sandwich1.png'
import Sandwich2 from '../../assets/sandwich2.png'
import Sandwich3 from '../../assets/sandwich3.png'


const Home = () => {
  return (      
      <motion.div className='home-container'
      initial={{transform:'translateY(100vh)'}}
      animate={{transform:'translateY(0vh)'}}
      exit={{transform:'translateY(60vh)'}}>

        <div id='intro' >
         <span>Welcome To</span>
         <span>
          the coffee house
         </span>
        </div>

        
        <div className='welcome' id='welcome1'>
          <img src={Burger} alt='' />
          <div><span>The Taste</span>
          <span>that you dreamt of.</span>
          <span>With Variety of tasteful items, we crave quality food that are absolutely pocket friendly.</span>
          <span>We believe in actions rather than words, and So you people are. </span>
          <span>Taste once, and you wouldn't resist</span>
          </div>
        </div>

        <div className='welcome' id='welcome2'>
          <img src={FrenchFries} alt='' />
        </div>
        <div className='welcome' id='welcome3'>
          <div><img src={Sandwich1} alt='' id='sandwich1' />
          <img src={Sandwich2} alt='' id='sandwich2' />
          <img src={Sandwich3} alt='' id='sandwich3' /></div>


        </div>
      </motion.div>
   
    
  )
}

export default Home;