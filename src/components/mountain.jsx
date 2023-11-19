import { Box, Button, Container, Typography } from "@mui/material";
import Image from "../assets/hero.jpg";
import ResponsiveContainer from "./ResponsiveContainer/ResponsiveContainer";


const Mountain = () => {
    const styles = {
        boxContainer: {
            height: 700,
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
    };
    return (
        <Box width="100vw" height="768px" style={styles.boxContainer}>
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
                        textAlign="center"
                        mt="8rem"
                        variant="h4"
                        fontSize={{ lg: '4rem', sm: "3rem", xs: '2rem' }}
                        fontWeight="bold"
                    >
                        Create and grow your
                        <br />
                        unique website today
                    </Typography>
                    <Typography textAlign="center" fontSize="1rem">
                        Programmatically work but low hanging fruit so new economy
                        cross-pollination. Quick sync new
                        <br />
                        economy onward and upward.
                    </Typography>
                    <Box display="flex" flexDirection={{ sm: 'row', xs: 'column' }} gap={3}>
                        {/* <CustomButton label={"SEE ALL DEMOS"} /> */}

                        <Button
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
    )
}

export default Mountain;