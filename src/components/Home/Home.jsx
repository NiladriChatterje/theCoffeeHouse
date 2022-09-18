import React from 'react'
import './Home.css';
import { motion } from 'framer-motion';


const Home = () => {
  return (      
      <motion.div className='home-container'
      initial={{transform:'translateY(100vh)'}}
      animate={{transform:'translateY(0vh)'}}
      exit={{transform:'translateY(60vh)'}}>
        
        <div className='welcome'>
        </div>
      </motion.div>
   
    
  )
}

export default Home