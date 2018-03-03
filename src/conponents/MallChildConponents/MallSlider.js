import React, { Component } from 'react';

import { Carousel } from 'antd-mobile';

import '../../style/MallCss/MallSlider.css'

class MallSlider extends Component {

	constructor (props) {
		super(props);
		this.state={
		list: [
            {"img" : require("../../img/mall-1.jpg"), "url" : "http://m.5lux.com/promote/special/3495"},
            {"img" : require("../../img/mall-2.jpg"), "url" : "http://m.5lux.com/promote/special/3488"},
            {"img" : require("../../img/mall-3.jpg"), "url" : "http://m.5lux.com/promote/special/3467"},
            {"img" : require("../../img/mall-4.jpg"), "url" : "http://m.5lux.com/promote/special/3464"},
            {"img" : require("../../img/mall-5.jpg"), "url" : "http://m.5lux.com/promote/special/3460"},
            {"img" : require("../../img/mall-6.jpg"), "url" : "http://m.5lux.com/promote/special/3445"},
            {"img" : require("../../img/mall-7.jpg"), "url" : "http://m.5lux.com/promote/special/3449"},
            {"img" : require("../../img/mall-8.jpg"), "url" : "http://m.5lux.com/promote/special/3443"},
            {"img" : require("../../img/mall-9.jpg"), "url" : "http://m.5lux.com/promote/special/3098"}
          ]
		}
	}
  render() {
    return (
            <div className='Mall-slider'>
                <Carousel autoplay={true} infinite={true}>
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
    );
  }
}

export default MallSlider;
