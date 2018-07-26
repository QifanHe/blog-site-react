import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    }
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render() {
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
              in={this.state.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</i>
          </SearchWrapper>


        </Nav>
        <Addition>
          <Button className='writing'>
            <i className="iconfont">&#xe601; post</i>
          </Button>
          <Button className='reg'>sign up</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus() {
    this.setState({
      focused: true,
    })
  }

  handleInputBlur() {
    this.setState({
      focused: false,
    })
  }

}

export default Header;
