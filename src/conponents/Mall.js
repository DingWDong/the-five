import React, { Component } from 'react';

// 导入组件

import Header from './MallChildConponents/Header'
import Catalist from './MallChildConponents/Catalist'
import MallSlider from './MallChildConponents/MallSlider'
import MallNav from './MallChildConponents/MallNav'
import MallSkill from './MallChildConponents/MallSkill'
import MallFlag from './MallChildConponents/MallFlag'
// 导入css样式
import '../style/MallCss/Mall.css'

class Mall extends Component {

  render() {
    return (
      <div>

          <div className="posi">
              <div  style={{background : '#000',height: 44 + 'px'}}>
                <Header></Header>
              </div>           
                <Catalist></Catalist>
         </div>
        <div className='content'>
                <MallSlider></MallSlider>       
                <MallNav></MallNav>
                <MallSkill></MallSkill>
                <MallFlag></MallFlag>
        </div>
      </div>
    );
  }
}

export default Mall;
