import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 280;
  float: right;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  margin-left: 18px;
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  margin-bottom: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  text-align: center;
  .pic {
    display: block;
    width: 32px;
    height: 32px;
    float: left;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    display: block;
    float: right;
    border-radius: 10px;
    width: 125px;
    height: 100px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .dsc {
    font-size: 13px;
    line-height: 18px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  height: 50px;
  width: 260px;
  line-height: 50px;
  padding-left: 20px;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  &.sevenDays {
    background: #fcbc4f;
  }
  &.oneMonth {
    background: #f69580;
  }
  margin-bottom: 18px;
`

export const WriterWrapper = styled.div`
  overflow: hidden;
`

export const WriterHeader = styled.div`
  .title{
    float: left;
  }
  .spin{
    float: right;
  }
`
