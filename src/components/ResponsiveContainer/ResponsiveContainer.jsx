import { Container } from "@mui/material";
import './ResponsiveContainer.css'

const ResponsiveContainer = ({ children }) => {
    return <Container className="responsiveContainer">{children}</Container>
}

export default ResponsiveContainer;