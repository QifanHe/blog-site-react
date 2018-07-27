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
      id: 2,
      title: "story",
      imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 3,
      title: "story",
      imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 4,
      title: "story",
      imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 5,
      title: "story",
      imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }

  ],
  articleList: [
    {
    id:1,
    title: "Treat First Dates Like They Could Be Special",
    desc: "It’s wise not to put so much pressure on a first date that you create impossibly high expectations. You’ll only make yourself nervous and likely make your date uncomfortable. But have we gone too far the other direction? It’s time to stop treating every first date like the first pancake on the skillet. Do not feed it…",
    imgUrl: "https://i.kinja-img.com/gawker-media/image/upload/s--hJG_bCsM--/c_scale,f_auto,fl_progressive,q_80,w_800/s4jdmjjz5mwnqosfprcz.jpg"
    },
    {
    id:2,
    title: "Treat First Dates Like They Could Be Special",
    desc: "It’s wise not to put so much pressure on a first date that you create impossibly high expectations. You’ll only make yourself nervous and likely make your date uncomfortable. But have we gone too far the other direction? It’s time to stop treating every first date like the first pancake on the skillet. Do not feed it…",
    imgUrl: "https://i.kinja-img.com/gawker-media/image/upload/s--hJG_bCsM--/c_scale,f_auto,fl_progressive,q_80,w_800/s4jdmjjz5mwnqosfprcz.jpg"
    },
    {
    id:3,
    title: "Treat First Dates Like They Could Be Special",
    desc: "It’s wise not to put so much pressure on a first date that you create impossibly high expectations. You’ll only make yourself nervous and likely make your date uncomfortable. But have we gone too far the other direction? It’s time to stop treating every first date like the first pancake on the skillet. Do not feed it…",
    imgUrl: "https://i.kinja-img.com/gawker-media/image/upload/s--hJG_bCsM--/c_scale,f_auto,fl_progressive,q_80,w_800/s4jdmjjz5mwnqosfprcz.jpg"
    },
    {
    id:4,
    title: "Treat First Dates Like They Could Be Special",
    desc: "It’s wise not to put so much pressure on a first date that you create impossibly high expectations. You’ll only make yourself nervous and likely make your date uncomfortable. But have we gone too far the other direction? It’s time to stop treating every first date like the first pancake on the skillet. Do not feed it…",
    imgUrl: "https://i.kinja-img.com/gawker-media/image/upload/s--hJG_bCsM--/c_scale,f_auto,fl_progressive,q_80,w_800/s4jdmjjz5mwnqosfprcz.jpg"
    },
    {
    id:5,
    title: "Treat First Dates Like They Could Be Special",
    desc: "It’s wise not to put so much pressure on a first date that you create impossibly high expectations. You’ll only make yourself nervous and likely make your date uncomfortable. But have we gone too far the other direction? It’s time to stop treating every first date like the first pancake on the skillet. Do not feed it…",
    imgUrl: "https://i.kinja-img.com/gawker-media/image/upload/s--hJG_bCsM--/c_scale,f_auto,fl_progressive,q_80,w_800/s4jdmjjz5mwnqosfprcz.jpg"
    },
  ]
});

export default (state=defaultState, action) => {
  switch(action.type) {

    default:
      return state;
  }
};
