import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
    exit={{ x: 300, opacity: 0, transition: { duration: 0.5 } }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);

export default Layout;
