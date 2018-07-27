import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListItem,
  ListInfo,
  LoadMore,
} from '../style'

class List extends Component{

  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((item, index)=>(
          <ListItem key={item.get('id')}>
            <img className='pic' src={item.get('imgUrl')} alt=''/>
            <ListInfo>
              <h3 className='title'>{item.get('title')}</h3>
              <p className='desc'>{item.get('desc')}</p>
            </ListInfo>
          </ListItem>
        ))}
        <LoadMore>more</LoadMore>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
});

export default connect(mapStateToProps, null)(List);
