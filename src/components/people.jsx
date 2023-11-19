import { Box, Container, Typography } from "@mui/material";
import team01 from '../assets/team-01.jpg';
import team02 from '../assets/team-02.jpg';
import team03 from '../assets/team-03.jpg';

const People = () => {
    const styles = {
        imageContainer: {
            borderRadius: "50%"
        }
    }
    return (
        <Box height={420} sx={{ backgroundColor: "#ededed" }}>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: { sm: "row", xs: "column" },
                    height: "100%",
                }}>
                <Box width={400} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end" gap={4} p={3}>
                    <img src={team01} width={80} height={80} style={styles.imageContainer} />
                    <Typography sx={{direction:"ltr"}}>“What is the point of being alive if you don’t at least try to do something remarkable?”</Typography>
                    <Typography textTransform="capitalize">SEAN FISHER</Typography>
                </Box>
                <Box width={400} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end" gap={4} p={3}>
                    <img src={team02} width={80} height={80} style={styles.imageContainer} />
                    <Typography sx={{direction:"ltr"}}>“What is the point of being alive if you don’t at least try to do something remarkable?”</Typography>
                    <Typography textTransform="capitalize">WILLIE BROWN</Typography>
                </Box>
                <Box width={400} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end" gap={4} p={3}>
                    <img src={team03} width={80} height={80} style={styles.imageContainer} />
                    <Typography sx={{direction:"ltr"}}>“What is the point of being alive if you don’t at least try to do something remarkable?”</Typography>
                    <Typography textTransform="capitalize">JANET MORRIS</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default People;