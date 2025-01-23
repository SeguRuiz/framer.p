import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@mui/material";
import { useState } from "react";
const MotionRules = () => {
  const [componer, setComponer] = useState(false);
  return (
    <div
      style={{
        height: "70%",
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <motion.div style={{ alignSelf: "center" }} layout>
        <Button
          onClick={() => {
            setComponer((prev) => !prev);
          }}
          variant="outlined"
          sx={{ alignSelf: "center" }}
        >
          {componer ? "Descomponer" : "Componer"}
        </Button>
      </motion.div>
      <AnimatePresence mode="popLayout">
        {componer && (
          <motion.div
            style={{
              background: "#415f91",
              height: "70%",
              width: "70%",
              alignSelf: "center",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "40px",
              fontWeight: 700,
              borderRadius: "10px",
            }}
            initial={{
              scale: 0,
              translateX: 0,
            }}
            animate={{
              y: [0, -150, 100, 0],
              y2: [0, 100],
              scale: 1,
            }}
            exit={{
              translateX: 0,
              y: [0, 100, -150, 0],
             
              scale: 0,

            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            Animated
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MotionRules;
