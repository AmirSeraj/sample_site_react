import { Box, Container, Typography } from "@mui/material";
import card02 from "../assets/card-02.jpg";
import card01 from "../assets/card-01.jpg";

const FeaturedWork = () => {
  // const image__Styles = {
  //     // maxwidth:"100vw",
  //     // maxWidth: "568px",
  //     // height: "auto",
  //     width: "100%"
  // }
  return (
    <Box
      width="100vw"
      minHeight={900}
      sx={{ backgroundColor: "#fff" }}
      display="flex"
      alignItems="center"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3em",
          // alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#000"
          fontSize={{ sm: "3rem", xs: "2rem" }}
          mt={{ lg: "7rem", md: "6rem", sm: "4rem", xs: "3.3rem" }}
          textAlign="end"
        >
          Featured Work
        </Typography>
        <Box
          display="flex"
          flexDirection={{ lg: "row", xs: "column" }}
          gap={{ sm: 2, xs: 1 }}
          justifyContent="center"
          alignItems="center"
        >
          <img width= "100%" src={card01} />
          <img width= "100%" src={card02} />
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedWork;
