import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

const navbar_items =['Home','Menu','Blog','Contact'];
const NavBar = () => {
  return (
    <div className='navbar'>
      <div>
        <ul className='navbar_items'>
        {navbar_items?.map((item,i)=>(
            <li key={i}>  
            <Link to={`/`}
          className='link'>        
          {item} </Link>
        </li>
        )
       )}
       </ul>
      </div>
    </div>
  )
}

export default NavBar;