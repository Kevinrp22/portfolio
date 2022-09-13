import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import clientSideEmotionCache from "../styles/createEmotionCache";

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
