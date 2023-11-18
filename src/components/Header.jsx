import { Box, Container, List, ListItem, ListItemButton, Typography, } from "@mui/material";

const Header = () => {

    return (
        <Container>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <List style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            بلاگ
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            جزئیات پروژه
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            پورتفلو
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            درباره ما
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            خانه
                        </ListItemButton>
                    </ListItem>
                </List>
                <Box>
                    <Typography variant="h1" fontSize="1.5rem" fontWeight="bold">Neve</Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Header;