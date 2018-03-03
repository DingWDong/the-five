import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import '../../style/MallCss/MallFlag.css'

class MallFlag extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{"img" : require('../../img/flag01.jpg') , "title" : "古琦"},
				{"img" : require('../../img/flag02.jpg') , "title" : "Chanel香奈儿旗舰店"},
				{"img" : require('../../img/flag03.jpg') , "title" : "D&G旗舰店"},
			]
		}
	}

  render() {
    return (
      <div>
      	<Carousel infinite={true} autoplay>
         {
         	this.state.list.map(function(item,index){
         		return(
     				<div className='flag' key={index}>
         				<img src={item.img} alt=""/>
         				<p>{item.title}</p>
     				</div>
         		)
         	})
         }
         </Carousel>
      </div>
    );
  }
}

export default MallFlag;
