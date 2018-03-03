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
			list: []
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
	}

  render() {
    return (
      <div className='storeList'>
			<ul>
				<li>
					<a href="">
						<div className='wrapper'>
							<div className='care'></div>
						</div>
						<div className='storeName'></div>
						<div className='recommend'></div>
						<div className='details'></div>
					</a>
				</li>
			</ul>
         	<div>
         	{
         		this.state.list.map(function(item,index){
         			return (
         				<div>
							<p>{item.title}</p>
							<p>{item.introduction}</p>
						</div>
     				)
         		})
         	}
         	</div>
      </div>
    );
  }
}

export default StoreList;
