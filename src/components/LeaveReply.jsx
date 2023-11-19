import { Container, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const LeaveReply = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                backgroundColor: "#ededed",
                height: "180px",
                direction: "ltr",
                padding: "2.5rem 2rem"
            }}
        >
            <Typography variant="h5" fontWeight="bold">Leave a reply</Typography>
            <Typography mt={3}>
                You must be
                <Link to="/login">logged in</Link>
                to post a comment.
            </Typography>
        </Container>
    )
}

export default LeaveReply;
