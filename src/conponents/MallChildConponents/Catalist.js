import React, { Component } from 'react';

import '../../style/MallCss/catalist.css'

import axios from 'axios'

class catalist extends Component {

    constructor (props) {
        super(props);
        this.state={
          nav: []
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
    }

  render() {
    return (
        <div className='pos'>
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
    );
  }
}

export default catalist;
