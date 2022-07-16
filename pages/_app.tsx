import "../styles/globals.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);
  let usebar;
  usebar = router.pathname !== "/portfolio/images/[url]";
  return (
    <>
      <NextNProgress
        startPosition={0.45}
        stopDelayMs={120}
        height={4}
        showOnShallow={true}
        options={{ showSpinner: true, }}
      />
      {usebar ? <Navbar /> : null}
      <div className={usebar ? "pt-[64px] min-h-screen" : null}>
        <Component {...pageProps} />
      </div>
      {usebar ? <Footer /> : null}
    </>
  );
}

export default MyApp;
