import React, { Component } from 'react';
import axios from 'axios';
// 导入组件


// 导入css样式
import '../../style/StoreCss/StoreList.css'
import '../../iconfont/iconfont.css'

class StoreList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [],
			store: []
		}
	}

	componentDidMount() {
		axios.get('/good/storelist?mtoken=&region_id=52')
		.then((res)=>{
			// console.log(res);
			this.state.list=res.data.data.store_list
			this.setState = ({
				list: res.data.data.store_list
			})
			console.log(this.state.list)
		})

		axios.get('http://localhost:3000/myStore')
		.then((res)=>{
			console.log(res);
			this.state.store=res.data;
			this.setState=({
				store: res.data
			})
		})
	}

  render() {
    return (
      <div className='storeList'>
			<ul>
				{ this.state.store.map(function(item,index){
					return (
						<li key={index}>
						<a href="">
							<div className='wrapper'>
								<div className='care'></div>
								<img src={item.img} alt=""/>
							</div>
							<div className='storeName'>{item.title}</div>
							<div className='recommend'><span className='sp1'>新店</span><span className='sp2'>{item.recommend}</span></div>
							<div className='details'>
								<span className='iconfont pos'>&#xe662;北京</span>
								<span className='col'>门店详情</span>
							</div>
						</a>
						</li>
					)
				})	
				}
			</ul>
         	
      </div>
    );
  }
}

export default StoreList;
