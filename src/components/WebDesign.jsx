import { Box, Button, Container, Typography } from "@mui/material";
import card05 from '../assets/card-05.jpg';

const WebDesign = () => {
    return (
        <Box width="100vw" minHeight={700} sx={{ backgroundColor: '#ededed' }} display="flex" alignItems="center">
            <Container
            className="container--css"
                sx={{
                    padding:"10px",
                    display: "flex",
                    flexDirection: {lg:'row', xs:'column'},
                    gap: "2em",
                    alignItems: "center",
                    height: "100%"
                }}
            >
                <Box display="flex" flexDirection="column" gap={3} textAlign="end" justifyContent="flex-end">
                    <Typography variant="h4" fontWeight="bold">Web Design</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio repellat pariatur magni aut ea?
                        Magni voluptas excepturi culpa sint, ex similique, optio labore vitae quidem provident, qui impedit eveniet soluta.
                    </Typography>
                    <Box>
                        <Button
                            sx={{
                                '&:hover': {
                                    color: "#fff",
                                    backgroundColor: "#ff9f1a"
                                },
                                width: "160px",
                                backgroundColor: "#fbc531",
                                color: "#000",
                                fontWeight:"bold"
                            }}
                            size="large"
                        >
                            Learn More
                        </Button>
                    </Box>
                </Box>
                <img width="100%" className="image--style" src={card05} />
            </Container>
        </Box>
    )
}

export default WebDesign;