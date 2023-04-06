// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import TopBar from "@/components/TopBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <TopBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
