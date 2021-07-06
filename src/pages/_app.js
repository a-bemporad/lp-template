import Head from 'next/head';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

function App({ Component, pageProps }) {
  //INITIATE GTM, not messing with this since I know nothing about it. There's
  //also a file related to this that was on /utils, and some data on next.config.js

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Casa do Saber</title>
        <link rel="shortcut icon" href="/static/img/favicon-logo.png" />
        <link rel="apple-touch-icon" href="/static/img/favicon-logo.png" />
        <meta property="og:image" content="/static/img/favicon-logo.png"></meta>
        {/* META TAGS GO IN HERE */}
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
