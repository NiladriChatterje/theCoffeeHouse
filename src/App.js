import './App.css';
import React  from 'react';
import Introduction from './components/Introduction/Introduction';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import singlebean from './singlebean.png';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  
    

  return (
    <>
    <Introduction />
    <NavBar />
    <div id='logo'
    
       onMouseMove={e =>{
        e.stopPropagation();
        let x = (e.movementX);
        let y =(e.movementY);
       
        document.getElementById('p1').style.top='-25%';
        document.getElementById('p1').style.left='-25%';
        document.getElementById('p1').style.setProperty('--mouseX',x*30 +"%");
        document.getElementById('p1').style.setProperty('--mouseY',y*30+"%");

        document.getElementById('p2').style.top='-45%';
        document.getElementById('p2').style.left='30%';
        document.getElementById('p2').style.setProperty('--mouseX',x*30 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',y*30+"%");

        document.getElementById('p3').style.top='-15%';
        document.getElementById('p3').style.left='80%';
        document.getElementById('p3').style.setProperty('--mouseX',x*30 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',y*30+"%");

        document.getElementById('p4').style.top='40%';
        document.getElementById('p4').style.left='80%';
        document.getElementById('p4').style.setProperty('--mouseX',x*30 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',y*30+"%");
      
        document.getElementById('p5').style.top='85%';
        document.getElementById('p5').style.left='20%';
        document.getElementById('p5').style.setProperty('--mouseX',x*30 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',y*30+"%");

        document.getElementById('p6').style.top='85%';
        document.getElementById('p6').style.left='-20%';
        document.getElementById('p6').style.setProperty('--mouseX',x*30 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',y*30+"%");
      }}

      onTouchMove={e =>{
        e.stopPropagation();
        let x = (e.changedTouches[0].clientX);
        let y =(e.changedTouches[0].clientY);

        document.getElementById('p1').style.top='-5%';
        document.getElementById('p1').style.left='-5%';
        document.getElementById('p1').style.setProperty('--mouseX',x/2 +"%");
        document.getElementById('p1').style.setProperty('--mouseY',y/2+"%");

        document.getElementById('p2').style.top='-45%';
        document.getElementById('p2').style.left='30%';
        document.getElementById('p2').style.setProperty('--mouseX',x/2 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',y/2+"%");

        document.getElementById('p3').style.top='-15%';
        document.getElementById('p3').style.left='80%';
        document.getElementById('p3').style.setProperty('--mouseX',x/2 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',y/2+"%");

        document.getElementById('p4').style.top='40%';
        document.getElementById('p4').style.left='80%';
        document.getElementById('p4').style.setProperty('--mouseX',x/2 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',y/2+"%");
      
        document.getElementById('p5').style.top='85%';
        document.getElementById('p5').style.left='20%';
        document.getElementById('p5').style.setProperty('--mouseX',x/2 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',y/2+"%");

        document.getElementById('p6').style.top='85%';
        document.getElementById('p6').style.left='-20%';
        document.getElementById('p6').style.setProperty('--mouseX',x/2 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',y/2+"%");
      }}

      onMouseLeave={()=>{
      
        document.getElementById('p1').style.top='+25%';
        document.getElementById('p1').style.left='+25%';
        document.getElementById('p1').style.setProperty('--mouseX','-80%');
        document.getElementById('p1').style.setProperty('--mouseY','-80%');


        document.getElementById('p2').style.top='-15%';
        document.getElementById('p2').style.left='30%';
        document.getElementById('p2').style.setProperty('--mouseX',-50 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-30+"%");


        document.getElementById('p3').style.top='-05%';
        document.getElementById('p3').style.left='20%';
        document.getElementById('p3').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',30+"%");
      
       
        
        document.getElementById('p4').style.top='35%';
        document.getElementById('p4').style.left='30%';
        document.getElementById('p4').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',30+"%");

        document.getElementById('p5').style.top='65%';
        document.getElementById('p5').style.left='0%';
        document.getElementById('p5').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',30+"%");


        document.getElementById('p6').style.top='55%';
        document.getElementById('p6').style.left='-10%';
        document.getElementById('p6').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',30+"%");
      }}

      onTouchEnd={()=>{
        
        document.getElementById('p1').style.top='+25%';
        document.getElementById('p1').style.left='+25%';
        document.getElementById('p1').style.setProperty('--mouseX','-80%');
        document.getElementById('p1').style.setProperty('--mouseY','-80%');


        document.getElementById('p2').style.top='-15%';
        document.getElementById('p2').style.left='30%';
        document.getElementById('p2').style.setProperty('--mouseX',-50 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-30+"%");


        document.getElementById('p3').style.top='-05%';
        document.getElementById('p3').style.left='20%';
        document.getElementById('p3').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',30+"%");
      
       
        
        document.getElementById('p4').style.top='35%';
        document.getElementById('p4').style.left='30%';
        document.getElementById('p4').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',30+"%");

        document.getElementById('p5').style.top='65%';
        document.getElementById('p5').style.left='0%';
        document.getElementById('p5').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',30+"%");


        document.getElementById('p6').style.top='55%';
        document.getElementById('p6').style.left='-10%';
        document.getElementById('p6').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',30+"%");
      }}

      >
        <img className='parallax' id='p1'  src={singlebean} alt='' />
        <img className='parallax' id='p2'  src={singlebean} alt='' />
        <img className='parallax' id='p3'  src={singlebean} alt='' />
        <img className='parallax' id='p4'  src={singlebean} alt='' />
        <img className='parallax' id='p5'  src={singlebean} alt='' />
        <img className='parallax' id='p6'  src={singlebean} alt='' />
       
      </div>
      

      <h1 id='logo-title'>The Coffee House 21</h1>


    <div className="App"

      onScroll={()=>{
        console.log(document.getElementById('logo-title').style)
       let scalee=Array.from(document.getElementsByClassName('App'))[0].scrollTop/
       Array.from(document.getElementsByClassName('App'))[0].clientHeight

       console.log(scalee);


       if(scalee < 1.3)
        document.getElementById('logo-title').style.setProperty('--y',scalee)


        document.getElementById('logo').style.setProperty('--x',
      1/(1+Array.from(document.getElementsByClassName('App'))[0].scrollTop/50));
      
  
      document.getElementById('p6').style.top=55+(
        Array.from(document.getElementsByClassName('App'))[0].scrollTop/
        Array.from(document.getElementsByClassName('App'))[0].clientHeight*200) +'%';
        document.getElementById('p6').style.left=-(10+(
          Array.from(document.getElementsByClassName('App'))[0].scrollTop/
          Array.from(document.getElementsByClassName('App'))[0].clientHeight*200)) +'%';


          document.getElementById('p5').style.top=65+(
            Array.from(document.getElementsByClassName('App'))[0].scrollTop/
            Array.from(document.getElementsByClassName('App'))[0].clientHeight*200) +'%';
            document.getElementById('p5').style.left=(
              Array.from(document.getElementsByClassName('App'))[0].scrollTop/
              Array.from(document.getElementsByClassName('App'))[0].clientHeight*200) +'%';


              document.getElementById('p4').style.top=35+(
                Array.from(document.getElementsByClassName('App'))[0].scrollTop/
                Array.from(document.getElementsByClassName('App'))[0].clientHeight*200) +'%';
                document.getElementById('p4').style.left=(30+(
                  Array.from(document.getElementsByClassName('App'))[0].scrollTop/
                  Array.from(document.getElementsByClassName('App'))[0].clientHeight*200)) +'%';


                  document.getElementById('p3').style.top=-(5+(
                    Array.from(document.getElementsByClassName('App'))[0].scrollTop/
                    Array.from(document.getElementsByClassName('App'))[0].clientHeight*200)) +'%';
                    document.getElementById('p3').style.left=(20+(
                      Array.from(document.getElementsByClassName('App'))[0].scrollTop/
                      Array.from(document.getElementsByClassName('App'))[0].clientHeight*200)) +'%';


                      document.getElementById('p2').style.top=-(15+(
                        Array.from(document.getElementsByClassName('App'))[0].scrollTop/
                        Array.from(document.getElementsByClassName('App'))[0].clientHeight*200)) +'%';
                        document.getElementById('p2').style.left=(30+(
                          Array.from(document.getElementsByClassName('App'))[0].scrollTop/
                          Array.from(document.getElementsByClassName('App'))[0].clientHeight*200)) +'%';


                          document.getElementById('p1').style.top=25-(
                            Array.from(document.getElementsByClassName('App'))[0].scrollTop/
                            Array.from(document.getElementsByClassName('App'))[0].clientHeight*200) +'%';
                            document.getElementById('p1').style.left=(25-(
                              Array.from(document.getElementsByClassName('App'))[0].scrollTop/
                              Array.from(document.getElementsByClassName('App'))[0].clientHeight*200)) +'%';
      
      
      }}>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Blog' element={<Blog />} />
     </Routes>     
    </div>
    </>
  );
}

export default App;
