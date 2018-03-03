import React, { Component } from 'react';
// 导入组件
import StoreHeader from './StoreChildConponents/StoreHeader'
import StoreNav from './StoreChildConponents/StoreNav'
import StoreList from './StoreChildConponents/StoreList'
// 导入css样式


class Store extends Component {

  render() {
    return (
      <div>
        <StoreHeader></StoreHeader>
        <StoreNav></StoreNav>
        <StoreList></StoreList>
      </div>
    );
  }
}

export default Store;
