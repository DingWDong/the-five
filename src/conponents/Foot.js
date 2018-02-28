import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import Home from './Home'

import '../style/reset.css'
import '../style/Foot.css'

class Foot extends Component {
  render() {
    return (
      <Router>
        <div>
          <div id='foot'>
            <NavLink exact activeClassName="active" to="/"><span className='iconfont'>&#xe600;</span>主页</NavLink>
            <NavLink activeClassName="active" to="/a"><span className='iconfont'>&#xe789;</span>商城</NavLink>
            <NavLink activeClassName="active" to="/b"><span className='iconfont'>&#xe61e;</span>到店</NavLink>
            <NavLink activeClassName="active" to="/c"><span className='iconfont'>&#xe6ec;</span>时尚圈</NavLink>
            <NavLink activeClassName="active" to="/d"><span className='iconfont'>&#xe625;</span>我的</NavLink>
          </div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}

export default Foot;
