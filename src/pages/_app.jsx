import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useUTMSource from "@/hooks/useUTMSource";
import Preloader from "@/common/Preloader";

export default function App({ Component, pageProps }) {
  useUTMSource();
  return (
    <>
      <Preloader />
      <Component {...pageProps} />
    </>
  );
}
