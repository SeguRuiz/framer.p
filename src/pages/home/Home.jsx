import {
  CardMedia,
  Grid2,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import materialVideo from "../../assets/videos/material_video1.mp4";
import { useEffect, useRef } from "react";
import { MIniCarrusel } from "../../components/MIniCarrusel";
import FixedCenter from "../../components/FixedCenter";
import BentoPart from "../../components/BentoPart";

const Home = () => {
  const videoRef = useRef();
  const { scrollYProgress } = useScroll();
  const limitesVideo = [0.01, 0.36]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef.current, scrollY]);

  const scale = useTransform(scrollYProgress, limitesVideo, [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, limitesVideo, [0, 7]);

  return (
    <motion.div
      style={{
        height: "700vh",
        width: "100%",
      }}
    >
      <Card
        sx={{
          background: "#f9f9ff",
        }}
        variant="outlined"
      >
        <CardContent>
          <Typography
            style={{
              fontWeight: 700,
              fontSize: "60px",
              padding: "0px 60px 0px 60px",
            }}
          >
            Scroll
          </Typography>
          <Typography
            style={{
              fontSize: "20px",
              padding: "0px 60px 0px 60px",
            }}
          >
            Recopilacion de ejemplos, animaciones con scroll practicas.
          </Typography>
        </CardContent>
      </Card>

      <motion.div
        style={{
          scale,
          width: "100%",
          position: "absolute",
          justifySelf: "center",
          left: 0,
          right: 0,
          borderRadius,
        }}
        transition={{
          duration: 2,
        }}
        layout
      >
        <Card>
          <CardMedia
            component="video"
            src={materialVideo}
            ref={videoRef}
            autoPlay
            loop
            sx={{ height: "100vh", objectFit: "cover" }}
          />
        </Card>
      </motion.div>
      <MIniCarrusel />
      <FixedCenter />
      <motion.div
        style={{
        
          height: "350vh",
        }}
      >
     
      </motion.div>
      <BentoPart />
      <motion.div>fin de la pagina</motion.div>
    </motion.div>
  );
};

export default Home;
