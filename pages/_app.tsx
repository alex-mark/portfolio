import { StylesProvider } from "@material-ui/core/styles";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider injectFirst>
      <Component {...pageProps} />
    </StylesProvider>
  );
}
export default MyApp;
