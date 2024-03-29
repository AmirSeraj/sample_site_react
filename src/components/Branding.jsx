import { Box, Button, Container, Typography, makeStyles } from "@mui/material";
import card04 from "../assets/card-04.jpg";

const Branding = () => {
  const imageStyle = {
    boxShadow: "box-shadow: 3px 3px 26px 1px rgba(43,32,82,0.7)",
  };
  return (
    <Box
      width="100vw"
      minHeight={700}
      sx={{ backgroundColor: "#fff" }}
      display="flex"
      alignItems="center"
      padding= "10px"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          gap: "2em",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img className="branding--image" width="100%" src={card04} />
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          textAlign="end"
          justifyContent="flex-end"
        >
          <Typography variant="h4" fontWeight="bold">
            Branding
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            repellat pariatur magni aut ea? Magni voluptas excepturi culpa sint,
            ex similique, optio labore vitae quidem provident, qui impedit
            eveniet soluta.
          </Typography>
          <Box>
            <Button
              sx={{
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#ff9f1a",
                },
                width: "160px",
                backgroundColor: "#fbc531",
                color: "#000",
                fontWeight: "bold",
              }}
              size="large"
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Branding;
