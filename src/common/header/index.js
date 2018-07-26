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
    const {
      focused, handleInputFocus,
      handleInputBlur, list, page,
      handleMouseEnter,handleMouseLeave,
      mouseIn, handleChangePage,
    } = this.props;
    const jsList = list.toJS();
    const pageList = [];

    for(let i = page * 10; i < jsList.length && i < (page+1) * 10; i++) {
      pageList.push(jsList[i]);
    }
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
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe617;</i>
              {getListArea(focused, pageList, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage)}
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

const getListArea = (
  show, list, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage
  ) => {
  if(show || mouseIn) {
    return (
      <SearchInfo
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SearchInfoTitle>
          Top Search
          <SearchInfoSwitch onClick={() => {handleChangePage(this.spinIcon)}}>
            <span>
              <i
                ref={(icon) => {this.spinIcon = icon}}
                className="iconfont spin">&#xe851;
              </i>
              refresh
            </span>
          </SearchInfoSwitch>
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
    page: state.get('header').get('page'),
    mouseIn: state.getIn(['header', 'mouseIn']),
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
      },
      handleMouseEnter() {
        dispatch(actionCreators.mouseEnter());
      },
      handleMouseLeave() {
        dispatch(actionCreators.mouseLeave());
      },
      handleChangePage(spin) {
        console.log(spin)
        dispatch(actionCreators.changePage());
      },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
