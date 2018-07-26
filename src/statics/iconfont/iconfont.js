import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1532618145581'); /* IE9*/
    src: url('./iconfont.eot?t=1532618145581#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1532618145581') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1532618145581#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-spin:before { content: "\e851"; }

  .icon-fangdajing:before { content: "\e617"; }

  .icon-bi:before { content: "\e601"; }

  .icon-Aa:before { content: "\e636"; }
`;
