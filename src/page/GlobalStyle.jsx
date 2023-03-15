import { createGlobalStyle } from 'styled-components';

const Background = createGlobalStyle`
  body {
    background: #e9ecef;
    font-family: 'NEXON Lv1 Gothic OTF', sans-serif;
    line-height: 1.5;
  }
  @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default Background;
