import './App.css';
import React  from 'react';
import Introduction from './components/Introduction/Introduction';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';



const App = () => {

    
    

  return (
    <>
    <Introduction />
    <NavBar />
    <div className="App"
      onScroll={()=>{
        document.getElementById('logo').style.setProperty('--x',
      1/(1+Array.from(document.getElementsByClassName('App'))[0].scrollTop/50));
     
      }}>
     
      
      <Home />

     
    </div>
    </>
  );
}

export default App;
