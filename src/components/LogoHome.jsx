import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const LogoHome = () => {
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (x) => {
    console.log(x);
  });
  const limitesLogo = [0, 0.15];
  const limitesLogo2 = [0, 0.1, 0.15];
  ////////////////////////////////////
  const limitesNombreLogo = [0.22, 0.23];
  /////////////////////////////////////////
  const limitesTexto = [0.17, 0.22];
  ////////////////////////////////
  const ContainerTotalLimites = [0.37, 0.43]

  const useSpringAnimation = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scaleLogo = useTransform(useSpringAnimation, limitesLogo, [6.5, 1]);
  const yLogo = useTransform(useSpringAnimation, limitesLogo2, [-150, 100, 0]);

  /////////////////////////////////////////////////////

  const yNombreLogo = useTransform(
    useSpringAnimation,
    limitesNombreLogo,
    [-10, 0]
  );
  const opacityNombreLogo = useTransform(
    useSpringAnimation,
    limitesNombreLogo,
    [0, 1]
  );

  //////////////////////////////////////////////////
  const yTextoInfo = useTransform(useSpringAnimation, limitesTexto, [100, 0]);
  const opacityTextoInfo = useTransform(
    useSpringAnimation,
    limitesTexto,
    [0, 1]
  );

  ///////////////////////////////////////////////
  const yContainerTotal = useTransform(useSpringAnimation, ContainerTotalLimites, [0, -200]);
  const opacityContainerTotal = useTransform(
    useSpringAnimation,
    ContainerTotalLimites,
    [1, 0]
  );

  const containerTotalScale = useTransform(useSpringAnimation, ContainerTotalLimites, [1, 0.3] )

  return (
    <motion.div
      style={{
        height: "200vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "60vh",
        gap: "10px",
      }}
    >
      <motion.div
        style={{
         
          opacity: opacityContainerTotal,
          y: yContainerTotal,
          scale: containerTotalScale
        }}
      >
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <motion.div
            style={{
              backgroundColor: "#3a4354",
              height: "75px",
              width: "75px",
              borderRadius: "10px",
              y: yLogo,
              scale: scaleLogo,
              margin: 0,

              zIndex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Logo
          </motion.div>
          <motion.p
            style={{
              margin: 0,
              opacity: opacityNombreLogo,
              y: yNombreLogo,
            }}
          >
            Nombre logo
          </motion.p>
        </motion.div>
        {
          "                                                                              "
        }
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            y: yTextoInfo,
            opacity: opacityTextoInfo,
          }}
        >
          <motion.p
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: "55px",
            }}
          >
            Nuevo titulo potente
          </motion.p>
          <motion.p
            style={{
              margin: 0,
              maxWidth: "60%",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Cal AI transforms your speech into text instantly. Perfect for quick
            note-taking, content creation, and capturing ideas on-the-go.
          </motion.p>
        </motion.div>
      </motion.div>
     
    </motion.div>
  );
};

export default LogoHome;
