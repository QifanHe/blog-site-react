// import {
//
// } from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "story",
      imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 1,
      title: "story",
      imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 1,
      title: "story",
      imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 1,
      title: "story",
      imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 1,
      title: "story",
      imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }

  ],
});

export default (state=defaultState, action) => {
  switch(action.type) {

    default:
      return state;
  }
};
