import { Grid2, Card, CardMedia } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const MIniCarrusel = () => {
  
  return (
    <>
      <motion.p
        
        style={{
         
          fontWeight: 700,
          fontSize: "50px",
          marginTop: "110vh",
          padding: "0px 60px 0px 60px",
        }}
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={
          {
            //   once: true,
          }
        }
      >
        Fade in animations
      </motion.p>
      <Grid2
        container
        sx={{
          marginTop: "3vh",
          padding: "0px 60px 0px 60px",
          height: "70vh",
          width: "100%",
        }}
        columns={3}
        spacing={2}
      >
        <Grid2 size={1} sx={{}}>
          <motion.div
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              y: 40,
              opacity: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.3,
            }}
            viewport={{
              once: true,
            }}
          >
            <Card style={{ background: "#3a4354" }}>
              <CardMedia
                sx={{
                  height: "70vh",
                  objectFit: "cover",
                }}
              ></CardMedia>
            </Card>
          </motion.div>
        </Grid2>
        <Grid2 size={1} sx={{}}>
          <motion.div
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              y: 40,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
            viewport={
              {
                //   once: true,
              }
            }
          >
            <Card style={{ background: "#3a4354" }}>
              <CardMedia
                sx={{
                  height: "70vh",
                  objectFit: "cover",
                }}
              ></CardMedia>
            </Card>
          </motion.div>
        </Grid2>
        <Grid2 size={1}>
          <motion.div
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              y: 40,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.9,
            }}
            viewport={
              {
                //   once: true,
              }
            }
            whileHover={{
              scale: 1.05,
            }}
          >
            <Card style={{ background: "#3a4354" }}>
              <CardMedia
                sx={{
                  height: "70vh",
                  objectFit: "cover",
                }}
              ></CardMedia>
            </Card>
          </motion.div>
        </Grid2>
      </Grid2>
    </>
  );
};
