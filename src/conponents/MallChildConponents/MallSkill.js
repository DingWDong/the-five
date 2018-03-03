import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import '../../style/MallCss/MallSkill.css'
import axios from 'axios'

class MallSkill extends Component {
	constructor(props) {
		super(props);
		this.state={
			data : [],
			skl: [
					{"img" : require('../../img/Skill.jpg'),"sku_title" : "Pinko Handbags","seckill_price" : 1651,"product_price" : 2811},
					{"img" : require('../../img/Skill-1.jpg'),"sku_title" : "TSUGI JUN 运动鞋","seckill_price" : 1651,"product_price" : 2811},
					{"img" : require('../../img/Skill-2.jpg'),"sku_title" : "CAT T恤","seckill_price" : 1651,"product_price" : 2811}
				]
		}
	}

	componentDidMount () {
		axios.get('/shop/seckill_info')
		.then((res)=>{
			// console.log(res);
			this.state.data=res.data.data

			this.setState({
				data: res.data.data
			})
			// console.log(this.state.data)
		})
	}
  render() {
    return (
      <div className='MallSkill'>
          <div className='skillHead'>
			<p>限时秒杀</p>
			<p className='skillClock'>仅剩2件了</p>
          </div>
          <div className='over'>
	          <div className='skillSlider'>
				<Carousel className="space-carousel"
		          frameOverflow="visible"
		          cellSpacing={10}
		          slideWidth={0.8}
		          infinite
		        >
		          {	
		          	this.state.skl.map((item, index) => {
		          		return(
		          			<div className='swiper' key={index}>
		          				<a href="">
		          					<img src={item.img} alt=""/>
		          					<h3>{item.sku_title}</h3>
		          					<p>秒杀价： {item.seckill_price}<span style={{textDecoration:"line-through"}}>{item.product_price}</span></p>
		          					<div><span>立即抢购</span></div>
								</a>
		          			</div>
		          		)
		          	})
		          }
		          
	        	</Carousel>
	          </div>
	      </div>
      </div>
    );
  }
}

export default MallSkill;
