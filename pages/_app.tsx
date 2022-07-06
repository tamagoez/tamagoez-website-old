import "../styles/globals.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="pt-[64px] min-h-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
