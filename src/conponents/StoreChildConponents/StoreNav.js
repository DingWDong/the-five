import React, { Component } from 'react';

// 导入组件


// 导入css样式
import '../../style/StoreCss/StoreNav.css';

class StoreNav extends Component {

  render() {
    return (
      <div className='storeNav'>
			<div className='nav_left'>
				<span className='nav_city'>所有城市 <span className='iconfont'>&#xe62f;</span></span>
				<span className='nav_brand'>所有品牌 <span className='iconfont'>&#xe62f;</span></span>
			</div>
         	<div className='nav_right'>附近 <span className='iconfont'>&#xe62e;</span></div>
      </div>
    );
  }
}

export default StoreNav;
