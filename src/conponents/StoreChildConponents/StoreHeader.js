import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
// 导入组件


// 导入css样式
import '../../iconfont/iconfont.css'
import '../../style/StoreCss/StoreHeader.css'

class storeHeader extends Component {

  render() {
    return (
		    <div className='storeHeader'>
          <div className='tab_but'>
              <NavLink className='shoppe' activeClassName="active" to='/store/list'>推荐专柜</NavLink>
              <NavLink className='order'  activeClassName="active" to='/store/list'>支持预约</NavLink>
          </div>
          <div className='icon'><span className='iconfont'>&#xe60b;</span><span className='iconfont'>&#xe899;</span></div>
        </div>
    );
  }
}

export default storeHeader;
