import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "MaisonNeue";
    src: url("/static/fonts/Maison/MaisonNeue-Light.otf");
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }
  @font-face {
    font-family: "MaisonNeue";
    src: url("/static/fonts/Maison/MaisonNeue-Medium.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "MaisonNeue";
    src: url("/static/fonts/Maison/MaisonNeue-Bold.otf");
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "MaisonNeue";
    src: url("/static/fonts/Maison/MaisonNeue-ExtraBold.otf");
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: "MaisonNeueExtended";
    src: url("/static/fonts/Maison/MaisonNeueExtended-Light.otf");
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }
  @font-face {
    font-family: "MaisonNeueExtended";
    src: url("/static/fonts/Maison/MaisonNeueExtended-Medium.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "MaisonNeueExtended";
    src: url("/static/fonts/Maison/MaisonNeueExtended-Demi.otf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "MaisonNeueExtended";
    src: url("/static/fonts/Maison/MaisonNeueExtended-Bold.otf");
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: "MaisonNeueBook";
    src: url("/static/fonts/Maison/MaisonNeue-Book.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "MaisonNeueExtendedBook";
    src: url("/static/fonts/Maison/MaisonNeueExtended-Book.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }


  @font-face {
    font-family: "NibPro";
    src: url("/static/fonts/NibPro/NibPro-Light.ttf");
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }
  @font-face {
    font-family: "NibPro";
    src: url("/static/fonts/NibPro/NibPro-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "NibPro";
    src: url("/static/fonts/NibPro/NibPro-SemiBold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "NibPro";
    src: url("/static/fonts/NibPro/NibPro-Bold.ttf");
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: "NibPro";
    src: url("/static/fonts/NibPro/NibPro-BoldItalic.ttf");
    font-style: italic;
    font-weight: 900;
    font-display: swap;
  }


  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: MaisonNeue, NibPro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, sans-serif;
    font-weight: 400;
  }



  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background-color: #67635c;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
    }

    span::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

    p::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

    h1::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

    h2::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

    h3::selection {
      background: ${theme.colors.primary};
      color: #ffffff;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
  `}

`;

export default GlobalStyles;
