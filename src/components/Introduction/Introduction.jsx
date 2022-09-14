import React from 'react'
import './Introduction.css';



function resize(){
  if(window.innerWidth>800)
    Array.from(document.getElementsByClassName('navbar'))[0].style.width = '75vw';
    else{
      Array.from(document.getElementsByClassName('navbar'))[0].style.width = '85vw';
    }
}


function reload(){
 setTimeout(()=>{document.getElementById('right-brown-side').style.transform='translate(-100%,0)';},2000);
  
  setTimeout(()=>{
    Array.from(document.getElementsByClassName('container'))[0].style.borderRadius = '50%';
  Array.from(document.getElementsByClassName('container'))[0].style.transform = 'scale(0.01,0.03)';
  Array.from(document.getElementsByClassName('container'))[0].style.width = '30px';
  Array.from(document.getElementsByClassName('container'))[0].style.height = '30px';
  
  setTimeout(()=>{
    resize();
    document.getElementById('logo').style.opacity='1';
  },2000);
  
  },8000);
}



const Introduction = () => {


  React.useEffect(() =>{
    window.onload=reload();    
  },[]);

  




  return (
    <div className="container">
      <span id='Heading'>
        <h1>
          The Coffee House 21
        </h1>
        <img src={'./logo.png'} alt='' width='6vw' height='6vw'/>
      </span>
      <div id='right-brown-side'></div>
  <div className="row beans">
  </div>
  <div className="row grinder">
  </div>
  <div className="row grinder_bottom">
  </div>
  <div className="row v60">
  </div>
  <div className="row drip">
  </div>
  <div className="row cup">
  </div>
</div>
  )
}

export default Introduction