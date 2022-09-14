import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

const navbar_items =[
  {name:'Home',
src: "https://cdn.lordicon.com/gmzxduhd.json"  },
{name:'Menu',
src:"https://cdn.lordicon.com/nocovwne.json"},
{name:'Blog',
src: "https://cdn.lordicon.com/vixtkkbk.json"},
{name:'Contact',
src:"https://cdn.lordicon.com/zpxybbhl.json"}];
const NavBar = () => {
  return (
    <div className='navbar'>
      <div>
        <ul className='navbar_items'>
        {navbar_items?.map((item,i)=>(
            <li key={i}>  
            <Link to={`/`}
          className='link'> 
          <lord-icon id='lord-icon'
    src={item.src}
    trigger="hover"
    colors="primary:#121331,secondary:#913710"
    style={{width:'28px',height:'28px'}}>
    </lord-icon>       
          {item.name} </Link>
        </li>
        )
       )}
       </ul>
      </div>
    </div>
  )
}

export default NavBar;