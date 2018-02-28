import React, { Component } from 'react';

// 导入组件

import Header from './Header'

// 导入css样式
import '../style/Mall.css'

// 导入axios组件
import axios from 'axios'

// import { 
//   Link
// } from 'react-router-dom';
import { Carousel } from 'antd-mobile';


class Mall extends Component {
  constructor (props) {
      super(props);
        this.state = {
          nav: [],
          list: [
            {"img" : require("../img/mall-1.jpg"), "url" : "http://m.5lux.com/promote/special/3495"},
            {"img" : require("../img/mall-2.jpg"), "url" : "http://m.5lux.com/promote/special/3488"},
            {"img" : require("../img/mall-3.jpg"), "url" : "http://m.5lux.com/promote/special/3467"},
            {"img" : require("../img/mall-4.jpg"), "url" : "http://m.5lux.com/promote/special/3464"},
            {"img" : require("../img/mall-5.jpg"), "url" : "http://m.5lux.com/promote/special/3460"},
            {"img" : require("../img/mall-6.jpg"), "url" : "http://m.5lux.com/promote/special/3445"},
            {"img" : require("../img/mall-7.jpg"), "url" : "http://m.5lux.com/promote/special/3449"},
            {"img" : require("../img/mall-8.jpg"), "url" : "http://m.5lux.com/promote/special/3443"},
            {"img" : require("../img/mall-9.jpg"), "url" : "http://m.5lux.com/promote/special/3098"}
          ],
          mNav: []
        }
  }

  componentDidMount () {
    axios.get('/shop/catalist')
      .then((res)=>{
        // console.log(res);       
        this.state.nav = res.data.data
        // console.log(this.state.nav)
        this.setState({
          nav : res.data.data
        })
      })

    axios.get('/shop/buttons_info')
    .then((res)=>{
      console.log(res);
           this.state.mNav = res.data.data.button_list
              

              this.serState = ({
                mNav: res.data.data.button_list
              })
              console.log(this.state.mNav)
    })
   
  }

  render() {
    return (
      <div>

          <div>
              <div  style={{background : '#000',height: 44 + 'px'}}>
                <Header></Header>
              </div>
             
              <div className="catalist">
                <div className="list">
                  <ul>
                  {this.state.nav.map((item,index)=>{
                    return(
                      <li key={item.cata_id}><a href="###">{item.cata_name}</a></li>
                    )
                  })
                    
                  }
                  </ul>
                </div>
              </div>
         </div>

        
        <div className='content'>

            <div className='Mall-slider'>
                <Carousel autoplay={true} infinite={true} vertical>
                  {
                    this.state.list.map(function(item, index) {
                      return (
                        <div key={index}>
                            <a href={item.url}><img src={item.img} alt=''/></a>
                        </div>
                      )
                    })
                  }
                </Carousel>
            </div>
            
            <div className='Mall-nav'>
                <ul>
                  <li>
                    {
                      this.state.mNav.map(function(item,index){
                        return(
                          <li key={index}>
                            <i>{item.ad_name}</i>
                          </li>
                        )
                      })
                    }
                  </li>
                </ul>
            </div>

        </div>



      </div>
    );
  }
}

export default Mall;
