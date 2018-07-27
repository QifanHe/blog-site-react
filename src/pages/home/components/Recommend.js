import React, { Component } from 'react';
import {
  RecommendWrapper,
  RecommendItem,

} from '../style'

class Recommend extends Component{

  render() {
    return (
      <RecommendWrapper>
        <RecommendItem className='sevenDays'>
          past 7 days
        </RecommendItem>
        <RecommendItem className='oneMonth'>
          past 30 days
        </RecommendItem>
        <RecommendItem className='popularSeries'>
          popular series
        </RecommendItem>


      </RecommendWrapper>
    )
  }

}

export default Recommend;
