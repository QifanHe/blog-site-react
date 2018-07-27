import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import axios from 'axios';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style.js'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4358/7ab8b6afc61c901a0fad2f0d6f71390d2f2119c9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
  }
}

const mapDispatchToProps = (dispatch)=>(
  {
    changeHomeData(){
      const action = actionCreators.getHomeInfo();
      dispatch(action);
    }
  }
)

export default connect(null, mapDispatchToProps)(Home);
