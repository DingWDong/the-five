import React, { Component } from 'react';

import '../../style/HomeCss/HomeNav.css'
class HomeNav extends Component {
  render() {
    return (
      <div>
         <div id='Home-nav'>
            <ul>
              <li className='nav-1'>上新</li>
              <li className='nav-2'>海外馆</li>
              <li className='nav-3'>值得买</li>
              <li className='nav-4'>闪购</li>
              <li className='nav-5'>品牌</li>
            </ul>
         </div>
      </div>
    );
  }
}

export default HomeNav;
