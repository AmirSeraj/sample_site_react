import { Box, Container, Typography } from "@mui/material";
import team01 from "../assets/team-01.jpg";
import team02 from "../assets/team-02.jpg";
import team03 from "../assets/team-03.jpg";
import ResponsiveContainer from "./ResponsiveContainer/ResponsiveContainer";

const People = () => {
  const styles = {
    imageContainer: {
      borderRadius: "50%",
    },
  };
  return (
    <Box
      minHeight={420}
      height="auto"
      sx={{ backgroundColor: "#ededed" }}
      //   width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={{ sm: "row", xs: "column" }}
      padding={{ md:"3rem 5rem", sm:"1rem 1.5rem" }}
    >
      <Box
        //   width={400}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
        gap={4}
        p={3}
      >
        <img
          src={team01}
          width={80}
          height={80}
          style={styles.imageContainer}
        />
        <Typography sx={{ direction: "ltr" }}>
          “What is the point of being alive if you don’t at least try to do
          something remarkable?”
        </Typography>
        <Typography textTransform="capitalize">SEAN FISHER</Typography>
      </Box>
      <Box
        //   width={400}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
        gap={4}
        p={3}
      >
        <img
          src={team02}
          width={80}
          height={80}
          style={styles.imageContainer}
        />
        <Typography sx={{ direction: "ltr" }}>
          “What is the point of being alive if you don’t at least try to do
          something remarkable?”
        </Typography>
        <Typography textTransform="capitalize">WILLIE BROWN</Typography>
      </Box>
      <Box
        //   width={400}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
        gap={4}
        p={3}
      >
        <img
          src={team03}
          width={80}
          height={80}
          style={styles.imageContainer}
        />
        <Typography sx={{ direction: "ltr" }}>
          “What is the point of being alive if you don’t at least try to do
          something remarkable?”
        </Typography>
        <Typography textTransform="capitalize">JANET MORRIS</Typography>
      </Box>
    </Box>
  );
};

export default People;
