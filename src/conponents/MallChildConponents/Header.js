import React, { Component } from 'react';
import '../../style/Header.css'

class Header extends Component {
  render() {
    return (
        <div id='Search'>
          <div className='search'>
            <div className='search-txt'>
              <span className='iconfont'>&#xe60b;</span>
            </div>
            <div className='shop-cart'><span className='iconfont icf'>&#xe601;</span></div>
          </div>
        </div>
    );
  }
}

export default Header;
