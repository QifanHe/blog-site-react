import React, { Component } from 'react';
import {
  WriterWrapper,
  WriterHeader,
} from '../style';

class Writer extends Component{

  render() {
    return (
      <WriterWrapper>
        <WriterHeader>
          <span className='title'>Popular Authors</span>
          <span className='spin'>
            <i
              ref={(icon) => {this.spinIcon = icon}}
              className="iconfont spin">&#xe851;
            </i>
            refresh
          </span>
        </WriterHeader>
      </WriterWrapper>
    )
  }

}

export default Writer;
