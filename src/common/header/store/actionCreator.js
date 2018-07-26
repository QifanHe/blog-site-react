import { SEARCH_BLUR, SEARCH_FOCUS, CHANGE_LIST } from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable'


const changeList = (data)=>({
  type: CHANGE_LIST,
  data: fromJS(data),
})

export const searchFocus = ()=>({
  type: SEARCH_FOCUS,
});

export const searchBlur = ()=>({
  type: SEARCH_BLUR,
});

export const getList = ()=>{
  return (dispatch)=>{
      axios.get('/api/headerList.json').then((res)=>{
        const data = res.data;
        dispatch(changeList(data.data))
      }).catch(() => {
        console.log('error');
      })
  }
};
