import React, { Component } from 'react';
import axios from 'axios'
import '../../style/MallCss/MallNav.css'

class MallNav extends Component {
	constructor (props) {
      super(props);
        this.state = {
         
          mNav: []
        }
  	}

  	componentWillMount () {
    axios.get('/shop/buttons_info')
    .then((res)=>{
      // console.log(res);
       this.state.mNav = res.data.data.button_list           
          this.serState = ({
            mNav: res.data.data.button_list
          })
       // console.log(this.state.mNav)
    })
   
  }

  render() {
    return (
        <div className='Mall-nav'>
                <ul>
                  
                    {
                      this.state.mNav.map(function(item,index){
                        return(
                          <li key={index}>
                            <a href={item.ad_link}>{item.ad_name}</a>
                          </li>
                        )
                      })
                    }

                </ul>
        </div>
    );
  }
}

export default MallNav;
