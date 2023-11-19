import { Box, Button, Container, Typography } from "@mui/material"


const WorkTogether = () => {
    return (
        <Box width="100%" height={570} sx={{ backgroundColor: "#14171c" }}>
            <Container
                maxWidth="md"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                <Typography variant="h1" color="#fff" fontWeight="bold" fontSize="3rem" textAlign="center" mt={15}>
                    Let’s work together on your
                    <br />
                    next web project
                </Typography>
                <Typography my={6} color="#fff" fontSize="1.5rem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, vitae.</Typography>
                {/* <Box> */}
                    <Button
                        sx={{
                            '&:hover': {
                                color: "#fff",
                                backgroundColor: "#ff9f1a"
                            },
                            width: "160px",
                            backgroundColor: "#fbc531",
                            color: "#000",
                            fontWeight: "bold"
                        }}
                        size="large"
                    >
                        Learn More
                    </Button>
                {/* </Box> */}
            </Container>
        </Box>
    )
}

export default WorkTogether;