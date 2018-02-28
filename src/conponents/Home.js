import React, { Component } from 'react';
// 导入css样式
import '../style/reset.css'
import '../style/Home.css'
import '../iconfont/iconfont.css'
import { Carousel } from 'antd-mobile';
import axios from 'axios';


// 导入组件
import Header from './Header'

// const requireContext = require.context("../img", true, /^\.\/.*\.jpg$/);
// const images = requireContext.keys().map(requireContext);

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      mark: [
              require('../img/mark-1.jpg'),
              require('../img/mark-2.jpg'),
              require('../img/mark-3.jpg'),
              require('../img/mark-4.jpg')
            ],
      slider: [
            {"img" : require('../img/1.jpg'), "url" : "http://m.5lux.com/promote/special/3098"},
            {"img" : require('../img/2.jpg'), "url" : "http://m.5lux.com/promote/special/3443"},
            {"img" : require('../img/3.jpg'), "url" : "http://m.5lux.com/promote/special/3447"},
            {"img" : require('../img/4.jpg'), "url" : "http://m.5lux.com/promote/special/3449"},
            {"img" : require('../img/5.jpg'), "url" : "http://m.5lux.com/promote/special/3445"},
            {"img" : require('../img/6.jpg'), "url" : "http://m.5lux.com/promote/special/3460"},
            {"img" : require('../img/7.jpg'), "url" : "http://m.5lux.com/promote/special/3464"},
            {"img" : require('../img/8.jpg'), "url" : "http://m.5lux.com/promote/special/3467"}
          ]
    }
  }
  
  componentDidMount () {
    axios.get("/index/index_slider")
    .then((res)=> {
        console.log(res)
        
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

        <div id='slider'>       
            <Carousel autoplay={true} infinite={true}>
              {
                this.state.slider.map(function(item, index) {
                return (
                  <div key={index}>
                      <a href={item.url}><img src={item.img} alt=''/></a>
                  </div>
                  )
                })
              }
            </Carousel>
        </div>
        

        <div id='Home-nav'>
            <ul>
              <li className='nav-1'>上新</li>
              <li className='nav-2'>海外馆</li>
              <li className='nav-3'>值得买</li>
              <li className='nav-4'>闪购</li>
              <li className='nav-5'>品牌</li>
            </ul>
        </div>
        

        <div id='mark'>
            <ul>
              {
                this.state.mark.map(function(item,index){
                  return(
                    <li key={index}>
                      <img src={item} alt=""/>
                    </li>
                  )
                })
              }
            </ul>
        </div>
        
        <div className='vip'>
          <img src={require('../img/vip.jpg')} alt=""/>
        </div>

      </div>
    );
  }
}

export default Index;
