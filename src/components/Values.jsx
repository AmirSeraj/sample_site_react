import { Box, Button, Container, Typography } from "@mui/material";
import card03 from "../assets/card-03.jpg";

const Values = () => {
  return (
    <Box
      width="100vw"
      minHeight={700}
      sx={{ backgroundColor: "#000" }}
      display="flex"
      alignItems="center"
      padding="10px"
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
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          textAlign="end"
          justifyContent="flex-end"
        >
          <Typography variant="h4" fontWeight="bold" color="#fff">
            We are driven by values
          </Typography>
          <Typography color="#fff">
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
        <img className="values--img" width="100%" src={card03} />
      </Container>
    </Box>
  );
};

export default Values;
