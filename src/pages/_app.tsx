import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "@/store/store";
import "./globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
