import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence
      // exitBeforeEnter
      mode="wait"
      // initial={false}
      // onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} key={router.asPath} />;
    </AnimatePresence>
  );
}
export default MyApp;
