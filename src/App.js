import './App.css';
import React  from 'react';
import Introduction from './components/Introduction/Introduction';
import Home from './components/Home/Home';
import {Menu} from './components/Menu/Menu';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import SingleBean from './components/SingleBean/SingleBean';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes,useLocation } from 'react-router-dom';
import {mouseMove,mouseLeave,scrollTopAppContainer} 
from './calculationScroll';
import { AnimatePresence } from 'framer-motion';




const App = () => {
  const location = useLocation();

  return (
    <>
    <Introduction />
    <NavBar />
    <div id='logo'
       onMouseMove={e =>{
        e.stopPropagation();
        mouseMove(e);
      }}
      onMouseLeave={()=>mouseLeave()}
      >
        <SingleBean />
       
      </div>
      

      <span id='logo-title'>The Coffee House 21</span>


    <div className="App"

      onScroll={()=>{      
      scrollTopAppContainer();
      }}>
      <AnimatePresence>
     <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/Menu' element={<Menu />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Blog' element={<Blog />} />
     </Routes> 
     </AnimatePresence>   
    </div>
    </>
  );
}

export default App;
