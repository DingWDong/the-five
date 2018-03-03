import React, { Component } from 'react';
// 导入css样式
import '../style/reset.css'
import '../style/HomeCss/Home.css'
import '../iconfont/iconfont.css'

import axios from 'axios';


// 导入组件
import Header from './MallChildConponents/Header'
import HomeSlider from './HomeChildConponents/HomeSlider'
import HomeNav from './HomeChildConponents/HomeNav'
import HomeMark from './HomeChildConponents/HomeMark'

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
     
    }
  }
  
  componentDidMount () {
    axios.get("/index/index_slider")
    .then((res)=> {
        // console.log(res)
        
        // 通知框架刷新
        this.setState({
          list: res.data.data
        }) 
    })
  }
  

  render() {
    return (
      <div>

        <Header></Header>

        <HomeSlider></HomeSlider>
        
        <HomeNav></HomeNav>
        
        <HomeMark></HomeMark>
        
        <div className='vip'>
          <img src={require('../img/vip.jpg')} alt=""/>
        </div>

      </div>
    );
  }
}

export default Index;
