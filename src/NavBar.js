import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return(
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/cats' onClick={()=> props.searchFlickr('cats')}>Cats</NavLink></li>
          <li><NavLink to='/dogs' onClick={()=> props.searchFlickr('dogs')}>Dogs</NavLink></li>
          <li><NavLink to='/computers' onClick={()=> props.searchFlickr('computers')}>Computers</NavLink></li>
        </ul>
      </nav>
    )
}

export default NavBar;