import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useUTMSource from "@/hooks/useUTMSource";

export default function App({ Component, pageProps }) {
  useUTMSource();
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
