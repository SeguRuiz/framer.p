import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { useTransform } from "framer-motion";

const FixedCenter = () => {
  const elementRef = useRef(null);
  const [caja, setCaja] = useState("caja1");
  const limites = [0.21, 0.63];
  const seccionesDiferencia = (limites[1] - limites[0]) / 3;

  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.38, 0.5],
    ["#ededf4", "#f9f9ff"]
  );
  useMotionValueEvent(scrollYProgress, "change", (x) => {
    if (x >= limites[0] && x < limites[0] + seccionesDiferencia) {
      setCaja("caja1");
    }

    if (
      x >= limites[0] + seccionesDiferencia &&
      x < limites[0] + seccionesDiferencia * 2
    ) {
      setCaja("caja2");
    }

    if (x >= limites[0] + seccionesDiferencia * 2 && x < limites[1]) {
      setCaja("caja3");
    }
  });

  const yFade = useTransform(
    scrollYProgress,
    [limites[1], limites[1] + 0.11],
    [0, 200]
  );
  const ScaleFade = useTransform(
    scrollYProgress,
    [limites[1], limites[1] + 0.11],
    [1, 0.5]
  );
  const opacityFade = useTransform(
    scrollYProgress,
    [limites[1], limites[1] + 0.1],
    [1, 0]
  );
  return (
    <motion.div
      ref={elementRef}
      style={{
        opacity: opacityFade,
        scale: ScaleFade,
        backgroundColor: backgroundColor,
        y: yFade,
        position: "sticky",
        top: "16%",
        height: "70vh",
        width: "100%",
        marginTop: "20vh",
        display: "grid",
        gridTemplateColumns: "50% 50%",
      }}
    >
      <motion.div
        style={{
          marginLeft: "60px",
          display: "flex",
          justifyContent: "center",

          flexDirection: "column",

          padding: "3%",
        }}
      >
        <AnimatePresence mode="popLayout">
          {caja == "caja1" && (
            <motion.div
              key={"caja1"}
              style={{
                backgroundColor: "#3a4354",
                height: "100%",
                width: "100%",
                display: "flex",
                borderRadius: "10px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "40px",
                fontWeight: 600,
                letterSpacing: "3px",
                color: "white",
              }}
              initial={{
                opacity: 0,
                scale: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: [700, 0],
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: [0, -700],
                opacity: 1,
                scale: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 1,
                ease: "anticipate",
              }}
              layout
            >
              Caja 1
            </motion.div>
          )}
          {caja == "caja2" && (
            <motion.div
              key={"caja2"}
              style={{
                backgroundColor: "#3a4354",
                height: "100%",
                width: "100%",
                display: "flex",
                borderRadius: "10px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "40px",
                fontWeight: 600,
                letterSpacing: "3px",
                color: "white",
              }}
              initial={{
                opacity: 0,
                scale: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: [700, 0],
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: [0, -700],
                opacity: 1,
                scale: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 1,
                ease: "anticipate",
              }}
              layout
            >
              Caja 2
            </motion.div>
          )}
          {caja == "caja3" && (
            <motion.div
              key={"caja3"}
              style={{
                backgroundColor: "#3a4354",
                height: "100%",
                width: "100%",
                display: "flex",
                borderRadius: "10px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "40px",
                fontWeight: 600,
                letterSpacing: "3px",
                color: "white",
              }}
              initial={{
                opacity: 0,
                scale: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: [700, 0],
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: [0, -700],
                opacity: 1,
                scale: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 1,
                ease: "anticipate",
              }}
              layout
            >
              Caja 3
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        style={{
          marginRight: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          padding: "3%",
        }}
      >
        <AnimatePresence mode="wait">
          {caja == "caja1" && (
            <motion.h1
              layout
              key={"titulo 1"}
              style={{
                fontWeight: 700,
                margin: 0,
              }}
              initial={{
                filter: "blur(10px)",
                x: 20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              exit={{
                x: -20,
                filter: "blur(10px)",
                opacity: 0,
              }}
              transition={{
                ease: "easeIn",
              }}
            >
              Super titulo numero 1
            </motion.h1>
          )}
          {caja == "caja2" && (
            <motion.h1
              layout
              key={"titulo 2"}
              style={{
                fontWeight: 700,
                margin: 0,
              }}
              initial={{
                filter: "blur(10px)",
                x: 20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              exit={{
                x: -20,
                filter: "blur(10px)",
                opacity: 0,
              }}
              transition={{
                ease: "easeIn",
              }}
            >
              Super titulo numero 2
            </motion.h1>
          )}
          {caja == "caja3" && (
            <motion.h1
              layout
              key={"titulo 3"}
              style={{
                fontWeight: 700,
                margin: 0,
              }}
              initial={{
                filter: "blur(10px)",
                x: 20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              exit={{
                x: -20,
                filter: "blur(10px)",
                opacity: 0,
              }}
              transition={{
                ease: "easeIn",
              }}
            >
              Super titulo numero 3
            </motion.h1>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {caja == "caja1" && (
            <motion.p
              key={"subitiulo 1"}
              style={{
                fontSize: "20px",
                maxWidth: "75%",
              }}
              initial={{
                filter: "blur(10px)",
                x: 20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              exit={{
                x: -20,
                filter: "blur(10px)",
                opacity: 0,
              }}
              transition={{
                ease: "easeIn",
              }}
              layout
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit
              quibusdam deserunt at reprehenderit cumque illum non. Facere quo
              reiciendis rem eos consequuntur odit deserunt mollitia sit
              debitis! Placeat, eum?
            </motion.p>
          )}
          {caja == "caja2" && (
            <motion.p
              key={"subitiulo 2"}
              style={{
                fontSize: "20px",
                maxWidth: "75%",
              }}
              initial={{
                filter: "blur(10px)",
                x: 20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              exit={{
                x: -20,
                filter: "blur(10px)",
                opacity: 0,
              }}
              transition={{
                ease: "easeIn",
              }}
              layout
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit
              quibusdam deserunt at reprehenderit cumque illum non. Facere quo
              reiciendis rem eos consequuntur odit deserunt mollitia sit
              debitis! Placeat, eum?
            </motion.p>
          )}
          {caja == "caja3" && (
            <motion.p
              key={"subitiulo 3"}
              style={{
                fontSize: "20px",
                maxWidth: "75%",
              }}
              initial={{
                filter: "blur(10px)",
                x: 20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              exit={{
                x: -20,
                filter: "blur(10px)",
                opacity: 0,
              }}
              transition={{
                ease: "easeIn",
              }}
              layout
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit
              quibusdam deserunt at reprehenderit cumque illum non. Facere quo
              reiciendis rem eos consequuntur odit deserunt mollitia sit
              debitis! Placeat, eum?
            </motion.p>
          )}
        </AnimatePresence>
        <motion.button
          style={{
            width: "30%",
          }}
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            y: -2,
            scale: 1.05,
          }}
        >
          Descubre más
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FixedCenter;
