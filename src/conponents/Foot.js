import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
// 导入组件
import Home from './Home'
import Mall from './Mall'
import Store  from './Store'
// 导入样式
import '../style/reset.css'
import '../style/Foot.css'

class Foot extends Component {
  render() {
    return (
      <Router>
        <div>
          <div id='foot'>
            <NavLink exact activeClassName="active" to="/"><span className='iconfont'>&#xe600;</span>主页</NavLink>
            <NavLink activeClassName="active" to="/mall"><span className='iconfont'>&#xe789;</span>商城</NavLink>
            <NavLink activeClassName="active" to="/store/list"><span className='iconfont'>&#xe61e;</span>到店</NavLink>
            <NavLink activeClassName="active" to="/fashion"><span className='iconfont'>&#xe6ec;</span>时尚圈</NavLink>
            <NavLink activeClassName="active" to="/user"><span className='iconfont'>&#xe625;</span>我的</NavLink>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/mall" component={Mall} />
          <Route path="/store/list" component={Store} />
        </div>
      </Router>
    )
  }
}

export default Foot;
