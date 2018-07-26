import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import * as actionCreators from './store/actionCreator';


import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style'

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
      return (
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className='left active'>Home</NavItem>
            <NavItem className='left'>Download</NavItem>
            <NavItem className='right'>login</NavItem>
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                timeout={200}
                in={focused}
                classNames="slide"
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                >
                </NavSearch>
              </CSSTransition>
              <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</i>
              {getListArea(focused, list)}
            </SearchWrapper>


          </Nav>
          <Addition>
            <Button className='writing'>
              <i className="iconfont">&#xe601;   post</i>
            </Button>
            <Button className='reg'>sign up</Button>
          </Addition>
        </HeaderWrapper>
      )
  }

}

const getListArea = (show, list) => {
  if(show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          Top Search
          <SearchInfoSwitch>refresh</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {
            list.map((item, index)=>{
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })
          }
        </SearchInfoList>
      </SearchInfo>
    );
  } else {
    return null;
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handleInputFocus() {
        dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocus());
      },
      handleInputBlur() {
        dispatch(actionCreators.searchBlur());
      }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
