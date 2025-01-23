import { Button } from "@mui/material";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Bouncy = () => {
  const controls = useAnimationControls();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    !open ? controls.start("initial") : controls.start("expandir");
  }, [open]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Button
        sx={{ alignSelf: "center", width: "10%" }}
        variant="outlined"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        Animar
      </Button>
      <motion.div
        style={{
          height: "100%",
          width: "10%",
          alignSelf: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2e3036",
          borderRadius: "100px",
          color: "#f0f0f7",
          fontWeight: 700,
          transformOrigin: "left",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          mass: 1,
          damping: 10,
        }}
        variants={{
          initial: {
            width: "5%",
            height: "40px",
           
            transformOrigin: "left",
            scaleX: 1,
            scaleZ: 0
           
          },
          expandir: {
            width: "40%",
             
             scaleY: 3,
             scaleZ: 1
           
          },
        }}
        initial="initial"
        animate={controls}
      >
       Hola
      </motion.div>
    </div>
  );
};

export default Bouncy;
