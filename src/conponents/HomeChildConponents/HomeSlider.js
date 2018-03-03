import React, { Component } from 'react';

import { Carousel } from 'antd-mobile';

class HomeSlider extends Component {
	constructor (props) {
		super(props);
		this.state = {
			 slider: [
            {"img" : require('../../img/1.jpg'), "url" : "http://m.5lux.com/promote/special/3098"},
            {"img" : require('../../img/2.jpg'), "url" : "http://m.5lux.com/promote/special/3443"},
            {"img" : require('../../img/3.jpg'), "url" : "http://m.5lux.com/promote/special/3447"},
            {"img" : require('../../img/4.jpg'), "url" : "http://m.5lux.com/promote/special/3449"},
            {"img" : require('../../img/5.jpg'), "url" : "http://m.5lux.com/promote/special/3445"},
            {"img" : require('../../img/6.jpg'), "url" : "http://m.5lux.com/promote/special/3460"},
            {"img" : require('../../img/7.jpg'), "url" : "http://m.5lux.com/promote/special/3464"},
            {"img" : require('../../img/8.jpg'), "url" : "http://m.5lux.com/promote/special/3467"}
          ]
		}
	}
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default HomeSlider;
