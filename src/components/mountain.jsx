import { Box, Button, Fade, Typography } from "@mui/material";
import Image from "../assets/hero.jpg";
import ResponsiveContainer from "./ResponsiveContainer/ResponsiveContainer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Mountain = () => {
  const [isVisible, setIsVisible] = useState(true);
  const styles = {
    boxContainer: {
      // height: 700,
      backgroundImage: `url(${Image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    DarkOverlay: {
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      zIndex: 1,
      backgroundColor: "rgba(0,0,0,0.9)",
      transform: "translate(-50% -50%)",
    },
    TitleText: {
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      zIndex: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
    },
    TitleTextTypo: {
      fontFamily: "Kaushan Script",
      fontSize: "10em",
      textShadow: "1px 1px 1px #202020",
    },
    TitleTextTypoH2: {
      fontFamily: "Sirin Stencil",
      fontSize: "1.25em",
      textShadow: "1px 1px 1px #202020",
      fontFamily: "Sirin Stencil",
      fontWeight: 300,
      textTransform: "capitalize",
    },
  };

  const contain = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        // delayChildren: 2,
        // StaggerChildren: 0.3
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box width="100vw" height="768px" style={styles.boxContainer}>
      <Fade in={isVisible} timeout={3000}>
        <Box style={styles.DarkOverlay} />
      </Fade>

      <Fade in={isVisible} timeout={3000}>
        <motion.Box
          variants={contain}
          initial="hidden"
          animate="show"
          style={styles.TitleText}
        >
          <Box display="flex" flexDirection="row-reverse">
            <motion.Typography
              variants={item}
              style={styles.TitleTextTypo}
              variant="h1"
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
            >
              W
            </motion.Typography>
            <motion.Typography
              variants={item}
              style={styles.TitleTextTypo}
              variant="h1"
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
            >
              i
            </motion.Typography>
            <motion.Typography
              variants={item}
              style={styles.TitleTextTypo}
              variant="h1"
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
            >
              b
            </motion.Typography>
            <motion.Typography
              variants={item}
              style={styles.TitleTextTypo}
              variant="h1"
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
            >
              e
            </motion.Typography>
          </Box>
          <Typography
            style={styles.TitleTextTypoH2}
            variant="h2"
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
          >
            Inspire, Create, Believe
          </Typography>
        </motion.Box>
      </Fade>

      {/* <Container
                display="flex"
                alignItems="center"
                sx={{ height: "100vw" }}
                maxWidth="lg"
            > */}
      <ResponsiveContainer>
        <Box
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          gap={5}
          alignItems="center"
        >
          <Typography
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="6"
            textAlign="center"
            mt="10rem"
            variant="h4"
            fontSize={{ lg: "4rem", sm: "3rem", xs: "2rem" }}
            fontWeight="bold"
            sx={{ textShadow: "3px 3px 3px #ccc" }}
          >
            Create and grow your
            <br />
            unique website today
          </Typography>
          <Typography
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
            textAlign="center"
            fontSize="1rem"
          >
            Programmatically work but low hanging fruit so new economy
            cross-pollination. Quick sync new
            <br />
            economy onward and upward.
          </Typography>
          <Box
            display="flex"
            flexDirection={{ sm: "row", xs: "column" }}
            gap={3}
          >
            {/* <CustomButton label={"SEE ALL DEMOS"} /> */}

            <Button
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="3"
              sx={{
                "&:hover": {
                  backgroundColor: "#363062",
                  color: "#fff",
                },
              }}
              variant="outlined"
              size="large"
            >
              SEE ALL DEMOS
            </Button>
            <Button
              data-scroll
              data-scroll-delay="0.11"
              data-scroll-speed="3"
              sx={{
                "&:hover": {
                  backgroundColor: "#001B79",
                  color: "#000",
                },
              }}
              variant="contained"
              size="large"
            >
              LEARN MORE
            </Button>
          </Box>
        </Box>
      </ResponsiveContainer>

      {/* </Container> */}
    </Box>
  );
};

export default Mountain;
