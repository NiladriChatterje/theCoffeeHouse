import React from 'react';
import './NavBar.css';

const navbar_items =['Home','Menu','Blog','Contact'];
const NavBar = () => {
  return (
    <div className='navbar'>
      <div>
        <ul className='navbar_items'>
        {navbar_items?.map((item,i)=><li key={i}>
          <div></div>{item}
        </li>
       )}
       </ul>
      </div>
    </div>
  )
}

export default NavBar;