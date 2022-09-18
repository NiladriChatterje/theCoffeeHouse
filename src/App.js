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
import {mouseMove,mouseLeave,touchMove,touchEnd,scrollTopAppContainer} 
from './calculationScroll';
import { AnimatePresence } from 'framer-motion';


let scrolltop = 0;
let scalee = 0;

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
      onTouchMove={e =>{
        e.stopPropagation();
        touchMove(e);
      }}
      onMouseLeave={()=>mouseLeave()}
      onTouchEnd={()=>touchEnd()}
      >
        <SingleBean />
       
      </div>
      

      <span id='logo-title'>The Coffee House 21</span>


    <div className="App"

      onScroll={()=>{
        scrolltop = Array.from(document.getElementsByClassName('App'))[0].scrollTop;
       scalee=scrolltop/
       Array.from(document.getElementsByClassName('App'))[0].clientHeight

       if(scalee < 1.25)
        document.getElementById('logo-title').style.setProperty('--y',scalee)
        
        document.getElementById('logo').style.setProperty('--x',
      1/(1+scrolltop/50));
      
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
