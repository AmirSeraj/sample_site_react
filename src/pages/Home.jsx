import { Box } from "@mui/material";
import Branding from "../components/Branding";
import FeaturedWork from "../components/FeaturedWork";
import Features from "../components/Features";
// import LeaveReply from "../components/LeaveReply";
import Values from "../components/Values";
import WebDesign from "../components/WebDesign";
import WorkTogether from "../components/WorkTogether";
import Mountain from "../components/mountain";
import People from "../components/people";

const Home = () => {
    return (
        <Box data-scroll-section>
            <Mountain />
            <Features />
            <WebDesign />
            <Branding />
            <Values />
            <FeaturedWork />
            <People />
            <WorkTogether />
            {/* <LeaveReply /> */}
        </Box>
    )
}

export default Home;