import {
  SEARCH_BLUR, SEARCH_FOCUS,
  CHANGE_LIST, MOUSE_ENTER,
  MOUSE_LEAVE, CHANGE_PAGE,
  } from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1,
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case SEARCH_FOCUS:
      return state.set('focused', true);
    case SEARCH_BLUR:
      return state.set('focused', false);
    case CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
      // return state.set('list', action.data).set('totalPage', action.totalPage);
    case MOUSE_ENTER:
      return state.set('mouseIn', true);
    case MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case CHANGE_PAGE:
      return state.set('page', (state.get('page')+1)%state.get('totalPage'));
    default:
      return state;
  }
}
