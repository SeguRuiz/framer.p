import {
  motion,
  MotionConfig,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const BentoPart = () => {
  const { scrollYProgress } = useScroll();

  const entradaYsalida_Titulo = [0.65, 0.70];
  const entradaYsalida_Container1 = [0.71, 0.72];
  const entradaYsalida_Container2 = [0.80, 0.82];
  const entradaYsalida_Container3 = [0.82, 0.84];
  const entradaYsalida_Container4 = [0.87, 0.93];

  useMotionValueEvent(scrollYProgress, "change", (x) => {
    console.log(x);
  });
  ///////////////////////////////////////////////////////////////////
  const yTitulo = useTransform(
    scrollYProgress,
    entradaYsalida_Titulo,
    [200, 0]
  );
  const opacityTitulo = useTransform(
    scrollYProgress,
    entradaYsalida_Titulo,
    [0, 1]
  );
  ///////////////////////////////////////////////////////////
  const yContainer1 = useTransform(
    scrollYProgress,
    entradaYsalida_Container1,
    [200, 0]
  );
  const opacityContainer1 = useTransform(
    scrollYProgress,
    entradaYsalida_Container1,
    [0, 1]
  );

  ////////////////////////////////////////////////////
  const yContainer2 = useTransform(
    scrollYProgress,
    entradaYsalida_Container2,
    [200, 0]
  );

  const opacityContainer2 = useTransform(
    scrollYProgress,
    entradaYsalida_Container2,
    [0, 1]
  );
  ///////////////////////////////////////////////////
  const yContainer3 = useTransform(
    scrollYProgress,
    entradaYsalida_Container3,
    [200, 0]
  );

  const opacityContainer3 = useTransform(
    scrollYProgress,
    entradaYsalida_Container3,
    [0, 1]
  );

  ///////////////////////////////////////////////////
  const yContainer4 = useTransform(
    scrollYProgress,
    entradaYsalida_Container4,
    [200, 0]
  );

  const opacityContainer4 = useTransform(
    scrollYProgress,
    entradaYsalida_Container4,
    [0, 1]
  );

  return (
    <motion.div
      style={{
        height: "270vh",
   
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          opacity: opacityTitulo,
          y: yTitulo,
        }}
      >
        <motion.p
          style={{
            margin: 0,
            fontWeight: 700,
            letterSpacing: "2px",
            color: "#415f91",
          }}
        >
          SUBTITULO
        </motion.p>
        <motion.p
          style={{
            fontSize: "50px",
            fontWeight: 700,
            margin: 0,
          }}
        >
          Un titulo muy interesante
        </motion.p>
      </motion.div>
      <motion.div
        style={{
          width: "60%",
          height: "265vh",

          marginTop: "20px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            backgroundColor: "#ededf4",
            height: "32%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            opacity: opacityContainer1,
            y: yContainer1,
          }}
        >
          <motion.p
            style={{
              margin: "1% 0px 0px 11px",
              fontSize: "35px",
              fontWeight: 600,
            }}
          >
            Titulo
          </motion.p>
          <motion.p style={{ margin: "0px 0px 0px 17px", fontSize: "17px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            sunt dolorum, maiores recusandae dolorem ipsam quasi, eum numquam,
          </motion.p>
          <motion.div
            style={{
              height: "73%",
              alignSelf: "center",
              width: "95.5%",
              marginTop: "10px",
              backgroundColor: "#3a4354",
              borderRadius: "10px",
            }}
          ></motion.div>
        </motion.div>
        <motion.div
          style={{
            height: "36%",
            width: "100%",
            display: "grid",
            paddingTop: "15px",
            paddingBottom: "15px",
            gap: "2%",
            gridTemplateColumns: "49% 49%",
          }}
        >
          <motion.div
            style={{
              height: "100%",
              backgroundColor: "#ededf4",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              y: yContainer2,
              opacity: opacityContainer2,
            }}
          >
            <motion.p
              style={{
                margin: "1% 0px 0px 11px",
                fontSize: "35px",
                fontWeight: 600,
              }}
            >
              Titulo
            </motion.p>
            <motion.p
              style={{
                margin: "0px 0px 0px 17px",
                fontSize: "17px",
                maxWidth: "90%",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              sunt dolorum, maiores recusandae dolorem ipsam quasi, eum numquam,
            </motion.p>
            <motion.div
              style={{
                height: "73%",
                alignSelf: "center",
                width: "95.5%",
                marginTop: "10px",
                backgroundColor: "#3a4354",
                borderRadius: "10px",
              }}
            ></motion.div>
          </motion.div>
          <motion.div
            style={{
              height: "100%",
              backgroundColor: "#ededf4",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              y: yContainer3,
              opacity: opacityContainer3,
            }}
          >
            <motion.p
              style={{
                margin: "1% 0px 0px 11px",
                fontSize: "35px",
                fontWeight: 600,
              }}
            >
              Titulo
            </motion.p>
            <motion.p
              style={{
                margin: "0px 0px 0px 17px",
                fontSize: "17px",
                maxWidth: "90%",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              sunt dolorum, maiores recusandae dolorem ipsam quasi, eum numquam,
            </motion.p>
            <motion.div
              style={{
                height: "73%",
                alignSelf: "center",
                width: "95.5%",
                marginTop: "10px",
                backgroundColor: "#3a4354",
                borderRadius: "10px",
              }}
            ></motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            backgroundColor: "#ededf4",
            height: "32%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            y: yContainer4,
            opacity: opacityContainer4,
          }}
        >
          <motion.p
            style={{
              margin: "1% 0px 0px 11px",
              fontSize: "35px",
              fontWeight: 600,
            }}
          >
            Titulo
          </motion.p>
          <motion.p style={{ margin: "0px 0px 0px 17px", fontSize: "17px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            sunt dolorum, maiores recusandae dolorem ipsam quasi, eum numquam,
          </motion.p>
          <motion.div
            style={{
              height: "73%",
              alignSelf: "center",
              width: "95.5%",
              marginTop: "10px",
              backgroundColor: "#3a4354",
              borderRadius: "10px",
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BentoPart;
