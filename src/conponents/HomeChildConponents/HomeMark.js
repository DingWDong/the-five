import React, { Component } from 'react';

import '../../style/HomeCss/HomeMark.css'
class HomeMark extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mark: [
              require('../../img/mark-1.jpg'),
              require('../../img/mark-2.jpg'),
              require('../../img/mark-3.jpg'),
              require('../../img/mark-4.jpg')
            ]
		}
	}
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default HomeMark;
