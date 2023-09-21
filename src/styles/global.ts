import { createGlobalStyle } from 'styled-components';
import MontserratThin from '../fonts/Montserrat-Thin.ttf';
import MontserratThinItalic from '../fonts/Montserrat-ThinItalic.ttf';
import MontserratExtraLight from '../fonts/Montserrat-ExtraLight.ttf';
import MontserratExtraLightItalic from '../fonts/Montserrat-ExtraLightItalic.ttf';
import MontserratLight from '../fonts/Montserrat-Light.ttf';
import MontserratLightItalic from '../fonts/Montserrat-LightItalic.ttf';
import MontserratRegular from '../fonts/Montserrat-Regular.ttf';
import MontserratRegularItalic from '../fonts/Montserrat-Italic.ttf';
import MontserratMedium from '../fonts/Montserrat-Medium.ttf';
import MontserratMediumItalic from '../fonts/Montserrat-MediumItalic.ttf';
import MontserratSemiBold from '../fonts/Montserrat-SemiBold.ttf';
import MontserratSemiBoldItalic from '../fonts/Montserrat-SemiBoldItalic.ttf';
import MontserratBold from '../fonts/Montserrat-Bold.ttf';
import MontserratBoldItalic from '../fonts/Montserrat-BoldItalic.ttf';
import MontserratExtraBold from '../fonts/Montserrat-ExtraBold.ttf';
import MontserratExtraBoldItalic from '../fonts/Montserrat-ExtraBoldItalic.ttf';
import MontserratBlack from '../fonts/Montserrat-Black.ttf';
import MontserratBlackItalic from '../fonts/Montserrat-BlackItalic.ttf';

const sizes = {
  mobileXs: '420px',
  mobile: '480px',
  mobileS: '560px',
  mobileM: '680px',
  mobileL: '767px',
  tabletS: '900px',
  tablet: '991px',
  tabletL: '1140px',
  laptop: '1300px',
  laptopL: '1440px',
  desktop: '1600px',
};

export const devices = {
  mobileXs: `(max-width: ${sizes.mobileXs})`,
  mobile: `(max-width: ${sizes.mobile})`,
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tabletS: `(max-width: ${sizes.tabletS})`,
  tablet: `(max-width: ${sizes.tablet})`,
  tabletL: `(max-width: ${sizes.tabletL})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

const GlobalStyle = createGlobalStyle`
  :root{
    --text-green: #6EBD44;
    --text-white: #FFFFFF;
    --text-dark: #04080F;
    --text-dark2: #303030;
    --text-red: #CB2121;
    --background-green: #6EBD44;
    --background-dark: #04080F;
    --background-white: #FFFFFF;
    --background-grey: #E6E6E6;
    --background-transparent: rgba(0,0,0,0);
    --border-transparent:  rgba(0,0,0,0);
    --border-green: #6EBD44;
    --border-dark: #04080F;
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    font-style: normal;
    src: url("${MontserratThin}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    font-style: italic;
    src: url("${MontserratThinItalic}") format('woff2');
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-style: normal;
    src: url("${MontserratExtraLight}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-style: italic;
    src: url("${MontserratExtraLightItalic}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-style: normal;
    src: url("${MontserratLight}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-style: italic;
    src: url("${MontserratLightItalic}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: normal;
    src: url("${MontserratRegular}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: italic;
    src: url("${MontserratRegularItalic}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-style: normal;
    src: url("${MontserratMedium}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-style: italic;
    src: url("${MontserratMediumItalic}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-style: normal;
    src: url("${MontserratSemiBold}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-style: italic;
    src: url("${MontserratSemiBoldItalic}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-style: normal;
    src: url("${MontserratBold}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-style: italic;
    src: url("${MontserratBoldItalic}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-style: normal;
    src: url("${MontserratExtraBold}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-style: italic;
    src: url("${MontserratExtraBoldItalic}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-style: normal;
    src: url("${MontserratBlack}");
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-style: italic;
    src: url("${MontserratBlackItalic}");
  }
  
  *{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .pageWrapper {
    padding: 60px 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  .App{
    display: flex;
    flex-direction: column;
    height: 100%;
    color: var(--text-dark);
  }
  h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    font-weight: 400;
  }
`;

export default GlobalStyle;
