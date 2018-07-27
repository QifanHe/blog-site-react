import axios from 'axios';
import { constants } from '.'
const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList
})

export const getHomeInfo = () => ((dispatch)=>{
  axios.get('/api/home.json').then((res)=>{
      const result = res.data.data;
      dispatch(changeHomeData(result));
    }
  );
})
