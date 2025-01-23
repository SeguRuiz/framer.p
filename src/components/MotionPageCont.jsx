import { motion } from "framer-motion";
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    x: [10, 0],
  },
  out: {
    opacity: 0,
    x: [0, -10],
  },
};

const MotionPageCont = ({ children }) => {
  return (
    <motion.div
      style={{
        height: "100%",
        width: "100%",
        scrollbarColor: "red blue",
        color: "#191c20",
        msOverflowY: 'hidden'
      }}
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={{
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionPageCont;
